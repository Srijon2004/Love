import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

export default function ProposeForm() {
    const [form, setForm] = useState({ name: '', photo: '', details: '' });
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setForm(f => ({ ...f, photo: reader.result }));
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            navigate('/login');
            return;
        }
        setLoading(true);
        setMsg('');
        try {
            await API.post('/user/girlfriend', form, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Proposal created successfully!');
            navigate('/dashboard'); // Go back to the dashboard to see the new entry
        } catch (err) {
            setMsg(err.response?.data?.message || '❌ Error creating proposal');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border">
                <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
                    Create a New Proposal
                </h2>
                {msg && <p className="text-center text-sm text-red-600 mb-4">{msg}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        required
                        placeholder="Her Name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    />
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
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
                        placeholder="Write a sweet message ❤️"
                        value={form.details}
                        onChange={e => setForm({ ...form, details: e.target.value })}
                        rows="4"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition disabled:bg-pink-300"
                    >
                        {loading ? 'Saving...' : '✨ Create Proposal'}
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