import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../utils/api';

export default function EditProposal() {
    const { girlfriendId } = useParams(); // Get the ID from the URL
    const [form, setForm] = useState({ name: '', photo: '', details: '' });
    const [loading, setLoading] = useState(true);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // 1. Fetch the existing proposal data when the page loads
    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchProposal = async () => {
            try {
                const res = await API.get(`/user/girlfriend/${girlfriendId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setForm({
                    name: res.data.name,
                    photo: res.data.photo,
                    details: res.data.details
                });
            } catch (err) {
                setMsg("Could not load proposal data.");
            } finally {
                setLoading(false);
            }
        };

        fetchProposal();
    }, [girlfriendId, token, navigate]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setForm(f => ({ ...f, photo: reader.result }));
        reader.readAsDataURL(file);
    };
    
    // 2. Handle form submission to UPDATE the data
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg('');
        try {
            await API.put(`/user/girlfriend/${girlfriendId}`, form, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Proposal updated successfully!');
            navigate('/dashboard'); // Go back to the dashboard
        } catch (err) {
            setMsg(err.response?.data?.message || '❌ Error updating proposal');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center pt-32">Loading editor...</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border">
                <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
                    ✏️ Edit Proposal
                </h2>
                {msg && <p className="text-center text-sm text-red-600 mb-4">{msg}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        required
                        placeholder="Her Name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <div>
                        <label className="text-sm text-gray-600 mb-1 block">Change Photo (optional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {form.photo && (
                            <img
                                src={form.photo}
                                alt="Preview"
                                className="mt-3 w-24 h-24 object-cover rounded-full mx-auto shadow-md"
                            />
                        )}
                    </div>
                    <textarea
                        placeholder="Edit your sweet message ❤️"
                        value={form.details}
                        onChange={e => setForm({ ...form, details: e.target.value })}
                        rows="4"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition disabled:bg-blue-300"
                    >
                        {loading ? 'Saving...' : '💾 Save Changes'}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/dashboard')}
                        className="w-full py-2 mt-2 text-sm text-gray-600 hover:text-black"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}