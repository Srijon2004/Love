// import React, { useState } from 'react'
// import API from '../utils/api'

// export default function Dashboard() {
//   const [form, setForm] = useState({ name: '', photo: '', details: '' })
//   const [msg, setMsg] = useState('')

//   // Convert uploaded file to base64
//   const handleFile = (e) => {
//     const file = e.target.files[0]
//     if (!file) return
//     const reader = new FileReader()
//     reader.onload = () => setForm(f => ({ ...f, photo: reader.result }))
//     reader.readAsDataURL(file)
//   }

//   const submit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await API.post('/user/girlfriend', form)
//       const username = res.data.data.username
//       const link = `${window.location.origin}/propose/${username}`

//       await navigator.clipboard.writeText(link)
//       setMsg('✅ Proposal link copied: ' + link)
//     } catch (err) {
//       setMsg(err.response?.data?.message || '❌ Error saving details')
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
//       <h2 className="text-2xl mb-4 font-bold text-center">Girlfriend Details 💖</h2>
//       {msg && <div className="mb-3 text-center text-pink-600">{msg}</div>}

//       <form onSubmit={submit}>
//         <input
//           required
//           placeholder="Her Name"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           className="w-full p-2 border mb-3 rounded"
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFile}
//           className="w-full mb-3"
//         />
//         <textarea
//           placeholder="Write a sweet message ❤️"
//           value={form.details}
//           onChange={e => setForm({ ...form, details: e.target.value })}
//           className="w-full p-2 border mb-4 rounded"
//         />

//         <button
//           type="submit"
//           className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
//         >
//           Generate & Copy Link
//         </button>
//       </form>
//     </div>
//   )
// }




// import React, { useState } from 'react'
// import API from '../utils/api'

// export default function Dashboard() {
//   const [form, setForm] = useState({ name: '', photo: '', details: '' })
//   const [msg, setMsg] = useState('')

//   // Convert uploaded file to base64
//   const handleFile = (e) => {
//     const file = e.target.files[0]
//     if (!file) return
//     const reader = new FileReader()
//     reader.onload = () => setForm(f => ({ ...f, photo: reader.result }))
//     reader.readAsDataURL(file)
//   }

//   const submit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await API.post('/user/girlfriend', form)
//       const username = res.data.data.username
//       const link = `${window.location.origin}/propose/${username}`

//       await navigator.clipboard.writeText(link)
//       setMsg('Proposal link copied: ' + link)
//     } catch (err) {
//       setMsg(err.response?.data?.message || '❌ Error saving details')
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 p-4">
//       <div className="w-full max-w-lg bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-pink-100">
//         <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
//           💖 Girlfriend Details 💖
//         </h2>

//         {msg && (
//           <div className="mb-4 text-center text-pink-700 font-medium">
//             {msg}
//           </div>
//         )}

//         <form onSubmit={submit} className="space-y-4">
//           <input
//             required
//             placeholder="Her Name"
//             value={form.name}
//             onChange={e => setForm({ ...form, name: e.target.value })}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//           />

//           <div>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFile}
//               className="w-full text-sm text-gray-600"
//             />
//             {form.photo && (
//               <img
//                 src={form.photo}
//                 alt="Preview"
//                 className="mt-3 w-24 h-24 object-cover rounded-full mx-auto shadow-md border border-pink-200"
//               />
//             )}
//           </div>

//           <textarea
//             placeholder="Write a sweet message ❤️"
//             value={form.details}
//             onChange={e => setForm({ ...form, details: e.target.value })}
//             rows="4"
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition"
//           >
//             💌 Generate & Copy Link
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }





























// import React, { useState } from 'react'
// import API from '../utils/api'

// export default function Dashboard() {
//   const [form, setForm] = useState({ name: '', photo: '', details: '' })
//   const [msg, setMsg] = useState('')

//   // Convert uploaded file to base64
//   const handleFile = (e) => {
//     const file = e.target.files[0]
//     if (!file) return
//     const reader = new FileReader()
//     reader.onload = () => setForm(f => ({ ...f, photo: reader.result }))
//     reader.readAsDataURL(file)
//   }

//   const submit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await API.post('/user/girlfriend', form)
//       const { username, girlfriend } = res.data.data
//       const link = `${window.location.origin}/propose/${username}/${girlfriend._id}`

//       await navigator.clipboard.writeText(link)
//       setMsg('✅ Proposal link copied: ' + link)
//     } catch (err) {
//       setMsg(err.response?.data?.message || '❌ Error saving details')
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 p-4">
//       <div className="w-full max-w-lg bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-pink-100">
//         <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
//           💖 Girlfriend Details 💖
//         </h2>

//         {msg && (
//           <div className="mb-4 text-center text-pink-700 font-medium break-all">
//             {msg}
//           </div>
//         )}

//         <form onSubmit={submit} className="space-y-4">
//           <input
//             required
//             placeholder="Her Name"
//             value={form.name}
//             onChange={e => setForm({ ...form, name: e.target.value })}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//           />

//           <div>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFile}
//               className="w-full text-sm text-gray-600"
//             />
//             {form.photo && (
//               <img
//                 src={form.photo}
//                 alt="Preview"
//                 className="mt-3 w-24 h-24 object-cover rounded-full mx-auto shadow-md border border-pink-200"
//               />
//             )}
//           </div>

//           <textarea
//             placeholder="Write a sweet message ❤️"
//             value={form.details}
//             onChange={e => setForm({ ...form, details: e.target.value })}
//             rows="4"
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition"
//           >
//             💌 Generate & Copy Link
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }















// import React, { useState, useEffect } from "react";
// import API from '../utils/api';
// import { Link, useNavigate } from "react-router-dom";

// // A new component for displaying each proposal card
// const ProposalCard = ({ proposal, username }) => {
//     const proposalLink = `${window.location.origin}/propose/${username}/${proposal._id}`;

//     const handleCopy = () => {
//         navigator.clipboard.writeText(proposalLink);
//         alert("Link copied to clipboard!");
//     };

//     return (
//         <div className="bg-white p-4 rounded-lg shadow-md border border-pink-200 flex flex-col gap-3">
//             <div className="flex items-center gap-4">
//                 {proposal.photo && <img src={proposal.photo} alt={proposal.name} className="w-16 h-16 object-cover rounded-full" />}
//                 <div>
//                     <h3 className="text-xl font-bold text-gray-800">{proposal.name}</h3>
//                     <p className="text-sm text-gray-500">Created: {new Date(proposal.createdAt).toLocaleDateString()}</p>
//                 </div>
//             </div>
//             <div className="flex gap-2 mt-2">
//                 <button onClick={handleCopy} className="flex-1 py-2 px-3 bg-pink-500 text-white text-sm rounded-lg hover:bg-pink-600 transition">
//                     💌 Copy Link
//                 </button>
//                 <a href={proposalLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 px-3 bg-gray-600 text-white text-sm text-center rounded-lg hover:bg-gray-700 transition">
//                     👁️ View
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default function Dashboard() {
//     const [form, setForm] = useState({ name: '', photo: '', details: '' });
//     const [proposals, setProposals] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [msg, setMsg] = useState('');
//     const navigate = useNavigate();

//     const token = localStorage.getItem("token");
//     const username = localStorage.getItem("username");

//     // Fetch existing proposals when the component loads
//     useEffect(() => {
//         if (!token) {
//             navigate('/login');
//             return;
//         }
//         fetchProposals();
//     }, [token, navigate]);

//     const fetchProposals = async () => {
//         if (!username) return;
//         try {
//             const res = await API.get(`/user/propose/${username}`);
//             setProposals(res.data.girlfriends.reverse()); // Show newest first
//         } catch (err) {
//             console.error("Failed to fetch proposals", err);
//         }
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;
//         const reader = new FileReader();
//         reader.onload = () => setForm(f => ({ ...f, photo: reader.result }));
//         reader.readAsDataURL(file);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setMsg('');
//         try {
//             await API.post('/user/girlfriend', form, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setMsg('✅ New proposal created successfully!');
//             setForm({ name: '', photo: '', details: '' }); // Reset form
//             fetchProposals(); // Refresh the list
//         } catch (err) {
//             setMsg(err.response?.data?.message || '❌ Error saving details');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100 p-4 md:p-8">
//             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                
//                 {/* Left Side: Create New Proposal */}
//                 <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-pink-100">
//                     <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">Create a Proposal</h2>
//                     {msg && <div className="mb-4 text-center text-pink-700 font-medium">{msg}</div>}
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <input
//                             required placeholder="Her Name" value={form.name}
//                             onChange={e => setForm({ ...form, name: e.target.value })}
//                             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//                         />
//                         <div>
//                             <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"/>
//                             {form.photo && <img src={form.photo} alt="Preview" className="mt-3 w-24 h-24 object-cover rounded-full mx-auto shadow-md"/>}
//                         </div>
//                         <textarea
//                             placeholder="Write a sweet message ❤️" value={form.details}
//                             onChange={e => setForm({ ...form, details: e.target.value })}
//                             rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//                         />
//                         <button type="submit" disabled={loading} className="w-full py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition disabled:bg-pink-300">
//                             {loading ? 'Creating...' : '✨ Create & Add to List'}
//                         </button>
//                     </form>
//                 </div>

//                 {/* Right Side: Existing Proposals */}
//                 <div className="bg-white/50 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-pink-100">
//                     <h2 className="text-3xl font-extrabold text-center text-gray-700 mb-6">Your Generated Links</h2>
//                     <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
//                         {proposals.length > 0 ? (
//                             proposals.map(p => <ProposalCard key={p._id} proposal={p} username={username} />)
//                         ) : (
//                             <p className="text-center text-gray-500">You haven't created any proposals yet. Fill out the form to get started!</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from '../utils/api';

// // Reusable component for each proposal card
// const ProposalCard = ({ proposal, username, onDelete }) => {
//     const proposalLink = `${window.location.origin}/propose/${username}/${proposal._id}`;

//     const handleCopy = () => {
//         navigator.clipboard.writeText(proposalLink);
//         alert('Link copied to clipboard!');
//     };

//     return (
//         <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
//             <h3 className="text-xl font-bold text-pink-600">Proposal for: {proposal.name}</h3>
//             <p className="text-sm text-gray-500 mb-3">Created: {new Date(proposal.createdAt).toLocaleDateString()}</p>
//             <input 
//                 type="text" 
//                 readOnly 
//                 value={proposalLink}
//                 className="w-full p-2 border rounded bg-gray-50 text-sm mb-3"
//             />
//             <div className="flex flex-wrap gap-2">
//                 <button onClick={handleCopy} className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600 transition">🔗 Copy Link</button>
//                 <a href={proposalLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600 transition">👁️ View</a>
//                 <button onClick={() => alert('Edit functionality coming soon!')} className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600 transition">✏️ Edit</button>
//                 <button onClick={() => onDelete(proposal._id)} className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600 transition">🗑️ Delete</button>
//             </div>
//         </div>
//     );
// };

// // Main Dashboard component
// export default function Dashboard() {
//     const [proposals, setProposals] = useState([]);
//     const [msg, setMsg] = useState('');
//     const navigate = useNavigate();
    
//     const token = localStorage.getItem("token");
//     const username = localStorage.getItem("username");

//     useEffect(() => {
//         if (!token) {
//             navigate('/login');
//             return;
//         }
//         fetchProposals();
//     }, [token, navigate]);

//     const fetchProposals = async () => {
//         if (!username) return;
//         try {
//             const res = await API.get(`/user/propose/${username}`);
//             setProposals(res.data.girlfriends.reverse());
//         } catch (err) {
//             console.error("Failed to fetch proposals", err);
//             setMsg('Could not load your proposals.');
//         }
//     };
    
//     const handleDelete = async (girlfriendId) => {
//         if (window.confirm("Are you sure you want to delete this proposal?")) {
//             try {
//                 await API.delete(`/user/girlfriend/${girlfriendId}`, {
//                      headers: { Authorization: `Bearer ${token}` }
//                 });
//                 fetchProposals(); // Refresh list after deleting
//             } catch(err) {
//                 alert('Could not delete proposal.');
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 pt-24 px-4">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-6">My Proposals</h1>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* Main content: List of proposals */}
//                     <div className="lg:col-span-2 space-y-6">
//                         {proposals.length > 0 ? (
//                             proposals.map(p => (
//                                 <ProposalCard 
//                                     key={p._id} 
//                                     proposal={p} 
//                                     username={username} 
//                                     onDelete={handleDelete}
//                                 />
//                             ))
//                         ) : (
//                             <div className="text-center py-10 bg-white rounded-lg shadow-md">
//                                 <p className="text-gray-500">You haven't created any proposals yet. Click "Create a New Proposal" to start!</p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Sidebar */}
//                     <div className="space-y-6">
//                         <div 
//                             onClick={() => navigate('/propose-form')}
//                             className="bg-pink-500 text-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:bg-pink-600 transition"
//                         >
//                             <h2 className="text-2xl font-bold">+ Create a New Proposal</h2>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-md border">
//                             <h2 className="text-xl font-bold text-gray-700 mb-4">Quick Stats</h2>
//                             <p className="text-lg">Proposals Made: <span className="font-bold">{proposals.length}</span></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from '../utils/api';
// import { ClipboardCopy, Eye, Pencil, Trash2, PlusCircle, BarChart2 } from 'lucide-react'; // Import icons

// // NEW DESIGN for the reusable proposal card
// const ProposalCard = ({ proposal, username, onDelete }) => {
//     const proposalLink = `${window.location.origin}/propose/${username}/${proposal._id}`;

//     const handleCopy = () => {
//         navigator.clipboard.writeText(proposalLink);
//         alert('Link copied to clipboard!');
//     };

//     return (
//         <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 transition-all hover:shadow-lg hover:border-pink-200">
//             <div className="flex items-center gap-4 mb-4">
//                 {proposal.photo ? (
//                     <img src={proposal.photo} alt={proposal.name} className="w-16 h-16 object-cover rounded-full border-2 border-pink-100"/>
//                 ) : (
//                     <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-400 text-2xl font-bold">
//                         {proposal.name.charAt(0)}
//                     </div>
//                 )}
//                 <div>
//                     <h3 className="text-2xl font-bold text-gray-800">{proposal.name}</h3>
//                     <p className="text-sm text-gray-500">Created: {new Date(proposal.createdAt).toLocaleDateString()}</p>
//                 </div>
//             </div>
            
//             <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between mb-4">
//                 <p className="text-sm text-gray-600 truncate mr-4">{proposalLink}</p>
//                 <button onClick={handleCopy} title="Copy Link" className="text-gray-500 hover:text-pink-500 transition">
//                     <ClipboardCopy size={20} />
//                 </button>
//             </div>

//             <div className="flex items-center gap-3">
//                 <a href={proposalLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-600 font-semibold transition">
//                     <Eye size={16} /> View
//                 </a>
//                 <button onClick={() => alert('Edit functionality coming soon!')} className="flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 font-semibold transition">
//                     <Pencil size={16} /> Edit
//                 </button>
//                 <button onClick={() => onDelete(proposal._id)} className="flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-red-100 hover:text-red-600 font-semibold transition ml-auto">
//                     <Trash2 size={16} /> Delete
//                 </button>
//             </div>
//         </div>
//     );
// };


// // Main Dashboard component with the new design
// export default function Dashboard() {
//     const [proposals, setProposals] = useState([]);
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const username = localStorage.getItem("username");

//     useEffect(() => {
//         if (!token) {
//             navigate('/login');
//             return;
//         }
//         fetchProposals();
//     }, [token, navigate]);

//     const fetchProposals = async () => {
//         if (!username) return;
//         try {
//             const res = await API.get(`/user/propose/${username}`);
//             setProposals(res.data.girlfriends.reverse());
//         } catch (err) {
//             console.error("Failed to fetch proposals", err);
//         }
//     };
    
//     const handleDelete = async (girlfriendId) => {
//         if (window.confirm("Are you sure you want to delete this proposal? This action cannot be undone.")) {
//             try {
//                 await API.delete(`/user/girlfriend/${girlfriendId}`, {
//                      headers: { Authorization: `Bearer ${token}` }
//                 });
//                 fetchProposals(); // Refresh list after deleting
//             } catch(err) {
//                 alert('Could not delete the proposal.');
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-indigo-100 pt-28 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-5xl font-extrabold text-gray-800 mb-8">My Proposals</h1>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//                     {/* Main content: List of proposals */}
//                     <div className="lg:col-span-2 space-y-6">
//                         {proposals.length > 0 ? (
//                             proposals.map(p => (
//                                 <ProposalCard 
//                                     key={p._id} 
//                                     proposal={p} 
//                                     username={username} 
//                                     onDelete={handleDelete}
//                                 />
//                             ))
//                         ) : (
//                             <div className="text-center py-16 bg-white rounded-xl shadow-md border">
//                                 <h3 className="text-2xl font-bold text-gray-700">No Proposals Yet!</h3>
//                                 <p className="text-gray-500 mt-2">Click the button to create your first one.</p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Sidebar */}
//                     <div className="space-y-6 lg:sticky lg:top-28">
//                         <button 
//                             onClick={() => navigate('/propose-form')}
//                             className="w-full flex items-center justify-center gap-3 bg-pink-500 text-white p-4 rounded-xl shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
//                         >
//                             <PlusCircle size={24} />
//                             <span className="text-xl font-bold">Create a New Proposal</span>
//                         </button>
//                         <div className="bg-white p-6 rounded-xl shadow-md border">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <BarChart2 className="text-pink-500" size={24} />
//                                 <h2 className="text-xl font-bold text-gray-700">Quick Stats</h2>
//                             </div>
//                             <div className="bg-pink-50 text-pink-800 p-4 rounded-lg">
//                                 <p className="text-lg">Proposals Made: <span className="font-extrabold text-2xl">{proposals.length}</span></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



























// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from '../utils/api';
// import { ClipboardCopy, Eye, Pencil, Trash2, PlusCircle, BarChart2, PartyPopper } from 'lucide-react'; // Added new icons

// // NEW "Glass" Card Component
// const ProposalCard = ({ proposal, username, onDelete }) => {
//     const proposalLink = `${window.location.origin}/propose/${username}/${proposal._id}`;

//     const handleCopy = () => {
//         navigator.clipboard.writeText(proposalLink);
//         alert('Link copied to clipboard!');
//     };

//     return (
//         <div className="bg-white/50 backdrop-blur-lg p-5 rounded-2xl shadow-lg border border-white/30 group transition-all duration-300 hover:border-pink-300 hover:scale-[1.02]">
//             <div className="flex items-center gap-4 mb-4">
//                 {proposal.photo ? (
//                     <img src={proposal.photo} alt={proposal.name} className="w-16 h-16 object-cover rounded-full border-2 border-white/50 shadow-md"/>
//                 ) : (
//                     <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full flex items-center justify-center text-pink-500 text-2xl font-bold">
//                         {proposal.name.charAt(0).toUpperCase()}
//                     </div>
//                 )}
//                 <div>
//                     <h3 className="text-2xl font-bold text-gray-800">{proposal.name}</h3>
//                     <p className="text-sm text-gray-600">Created: {new Date(proposal.createdAt).toLocaleDateString()}</p>
//                 </div>
//             </div>
            
//             <div className="bg-white/60 p-2 rounded-lg flex items-center justify-between mb-4">
//                 <p className="text-sm text-gray-700 truncate mr-4">{proposalLink}</p>
//                 <button onClick={handleCopy} title="Copy Link" className="text-gray-500 hover:text-pink-600 transition p-1 rounded-full hover:bg-pink-100">
//                     <ClipboardCopy size={20} />
//                 </button>
//             </div>

//             <div className="flex items-center gap-3">
//                 <a href={proposalLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm bg-gray-100/80 text-gray-800 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white font-semibold transition shadow-sm">
//                     <Eye size={16} /> View
//                 </a>
//                 <div className="ml-auto flex gap-3">
//                   <button onClick={() => alert('Edit functionality coming soon!')} className="p-2 rounded-lg bg-gray-100/80 text-gray-600 hover:bg-blue-500 hover:text-white transition shadow-sm">
//                       <Pencil size={16} />
//                   </button>
//                   <button onClick={() => onDelete(proposal._id)} className="p-2 rounded-lg bg-gray-100/80 text-gray-600 hover:bg-red-500 hover:text-white transition shadow-sm">
//                       <Trash2 size={16} />
//                   </button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // Main Dashboard Component with the New Design
// export default function Dashboard() {
//     const [proposals, setProposals] = useState([]);
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const username = localStorage.getItem("username");

//     useEffect(() => {
//         if (!token) {
//             navigate('/login');
//             return;
//         }
//         fetchProposals();
//     }, [token, navigate]);

//     const fetchProposals = async () => {
//         if (!username) return;
//         try {
//             const res = await API.get(`/user/propose/${username}`);
//             setProposals(res.data.girlfriends.reverse());
//         } catch (err) {
//             console.error("Failed to fetch proposals", err);
//         }
//     };
    
//     const handleDelete = async (girlfriendId) => {
//         if (window.confirm("Are you sure you want to delete this proposal? This action cannot be undone.")) {
//             try {
//                 await API.delete(`/user/girlfriend/${girlfriendId}`, {
//                      headers: { Authorization: `Bearer ${token}` }
//                 });
//                 fetchProposals();
//             } catch(err) {
//                 alert('Could not delete the proposal.');
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-indigo-100 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex items-center gap-4 mb-8">
//                     <PartyPopper size={48} className="text-pink-500"/>
//                     <div>
//                         <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">Welcome, {username}!</h1>
//                         <p className="text-gray-600 mt-1">Manage all your special proposals from here.</p>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//                     {/* Main content: List of proposals */}
//                     <div className="lg:col-span-2 space-y-6">
//                         {proposals.length > 0 ? (
//                             proposals.map(p => (
//                                 <ProposalCard key={p._id} proposal={p} username={username} onDelete={handleDelete}/>
//                             ))
//                         ) : (
//                             <div className="text-center py-16 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30">
//                                 <h3 className="text-2xl font-bold text-gray-700">Ready to Create Magic? ✨</h3>
//                                 <p className="text-gray-500 mt-2">Click the "Create a New Proposal" button to begin.</p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Sidebar */}
//                     <div className="space-y-6 lg:sticky lg:top-28">
//                         <button 
//                             onClick={() => navigate('/propose-form')}
//                             className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//                         >
//                             <PlusCircle size={24} />
//                             <span className="text-xl font-bold">Create a New Proposal</span>
//                         </button>
//                         <div className="bg-white/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30">
//                             <div className="flex items-center gap-3 mb-4">
//                                 <BarChart2 className="text-pink-500" size={24} />
//                                 <h2 className="text-xl font-bold text-gray-700">Quick Stats</h2>
//                             </div>
//                             <div className="bg-gradient-to-r from-pink-50 to-rose-50 text-pink-900 p-4 rounded-lg">
//                                 <p className="font-semibold text-lg">Proposals Made:</p>
//                                 <span className="font-extrabold text-4xl">{proposals.length}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from '../utils/api';
// import { ClipboardCopy, Eye, Pencil, Trash2, PlusCircle, BarChart2, PartyPopper } from 'lucide-react';

// // Card for a single proposal
// const ProposalCard = ({ proposal, username, onDelete }) => {
//     const navigate = useNavigate();
//     const proposalLink = `${window.location.origin}/propose/${username}/${proposal._id}`;

//     const handleCopy = () => {
//         navigator.clipboard.writeText(proposalLink);
//         alert('Link copied to clipboard!');
//     };

//     return (
//         <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30 transition-all duration-300 hover:shadow-2xl hover:border-pink-300 hover:-translate-y-1">
//             <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center gap-4">
//                     {proposal.photo ? (
//                         <img src={proposal.photo} alt={proposal.name} className="w-14 h-14 object-cover rounded-full border-2 border-white shadow-md"/>
//                     ) : (
//                         <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full flex items-center justify-center text-pink-500 text-2xl font-bold">
//                             {proposal.name.charAt(0).toUpperCase()}
//                         </div>
//                     )}
//                     <div>
//                         <h3 className="text-2xl font-bold text-gray-800">{proposal.name}</h3>
//                         <p className="text-sm text-gray-600">Created: {new Date(proposal.createdAt).toLocaleDateString()}</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button 
//                         onClick={() => navigate(`/edit-proposal/${proposal._id}`)} 
//                         title="Edit" 
//                         className="p-2 rounded-lg text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition"
//                     >
//                         <Pencil size={18} />
//                     </button>
//                     <button 
//                         onClick={() => onDelete(proposal._id)} 
//                         title="Delete" 
//                         className="p-2 rounded-lg text-gray-500 hover:bg-red-100 hover:text-red-600 transition"
//                     >
//                         <Trash2 size={18} />
//                     </button>
//                 </div>
//             </div>
            
//             <div className="bg-white/70 p-3 rounded-lg flex items-center justify-between">
//                 <p className="text-sm text-gray-700 truncate mr-4">{proposalLink}</p>
//                 <a 
//                   href={proposalLink} 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="flex items-center gap-2 text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-pink-100 hover:text-pink-600 font-semibold transition shadow-sm"
//                 >
//                     <Eye size={16} /> View
//                 </a>
//             </div>
//         </div>
//     );
// };


// // Main Dashboard Component
// export default function Dashboard() {
//     const [proposals, setProposals] = useState([]);
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const username = localStorage.getItem("username");

//     useEffect(() => {
//         if (!token) {
//             navigate('/login');
//             return;
//         }
//         fetchProposals();
//     }, [token, navigate]);

//     const fetchProposals = async () => {
//         if (!username) return;
//         try {
//             const res = await API.get(`/user/propose/${username}`);
//             setProposals(res.data.girlfriends.reverse());
//         } catch (err) {
//             console.error("Failed to fetch proposals", err);
//         }
//     };
    
//     const handleDelete = async (girlfriendId) => {
//         if (window.confirm("Are you sure you want to delete this proposal?")) {
//             try {
//                 await API.delete(`/user/girlfriend/${girlfriendId}`, { headers: { Authorization: `Bearer ${token}` } });
//                 fetchProposals();
//             } catch(err) {
//                 alert('Could not delete the proposal.');
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen w-full bg-rose-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="mb-8">
//                     <h1 className="text-5xl font-extrabold text-gray-800">Welcome, {username}!</h1>
//                     <p className="text-gray-600 mt-1 text-lg">Here are all your beautiful proposals.</p>
//                 </div>

//                 {/* Top Action Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                     <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30 flex items-center justify-between">
//                         <div>
//                             <div className="flex items-center gap-3 mb-1">
//                                 <BarChart2 className="text-pink-500" size={24} />
//                                 <h2 className="text-xl font-bold text-gray-700">Quick Stats</h2>
//                             </div>
//                             <p className="text-gray-600">You have created <span className="font-bold text-pink-600">{proposals.length}</span> proposals.</p>
//                         </div>
//                         <div className="bg-gradient-to-r from-pink-50 to-rose-50 text-pink-900 p-4 rounded-lg text-center">
//                             <span className="font-extrabold text-5xl">{proposals.length}</span>
//                         </div>
//                     </div>
//                     <button 
//                         onClick={() => navigate('/propose-form')}
//                         className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//                     >
//                         <PlusCircle size={40} />
//                         <div>
//                             <h2 className="text-2xl font-bold text-left">Create a New Proposal</h2>
//                             <p className="text-left text-pink-100">Click here to start a new page.</p>
//                         </div>
//                     </button>
//                 </div>

//                 {/* Main content: List of proposals */}
//                 <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Proposals</h2>
//                 <div className="space-y-6">
//                     {proposals.length > 0 ? (
//                         proposals.map(p => <ProposalCard key={p._id} proposal={p} username={username} onDelete={handleDelete}/>)
//                     ) : (
//                         <div className="text-center py-20 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30">
//                             <PartyPopper size={48} className="mx-auto text-pink-400" />
//                             <h3 className="text-2xl font-bold text-gray-700 mt-4">Ready for the next grand gesture?</h3>
//                             <p className="text-gray-500 mt-2">Create your first proposal to get started.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from '../utils/api';
// import { Pencil, Trash2, Eye, PlusCircle, BarChart2 } from 'lucide-react';

// // Card for a single proposal
// const ProposalCard = ({ proposal, username, onDelete }) => {
//     const navigate = useNavigate();
//     const proposalLink = `${window.location.origin}/propose/${username}/${proposal._id}`;

//     return (
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200/80">
//             <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 text-xl font-bold">
//                         {proposal.name.charAt(0).toUpperCase()}
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-bold text-gray-800">{proposal.name}</h3>
//                         <p className="text-sm text-gray-500">Created: {new Date(proposal.createdAt).toLocaleDateString()}</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button 
//                         onClick={() => navigate(`/edit-proposal/${proposal._id}`)} 
//                         title="Edit" 
//                         className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
//                     >
//                         <Pencil size={18} />
//                     </button>
//                     <button 
//                         onClick={() => onDelete(proposal._id)} 
//                         title="Delete" 
//                         className="p-2 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-600 transition"
//                     >
//                         <Trash2 size={18} />
//                     </button>
//                 </div>
//             </div>
            
//             <div className="flex items-center justify-between">
//                 <p className="text-sm text-gray-500 truncate mr-4">{proposalLink}</p>
//                 <a 
//                   href={proposalLink} 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 font-semibold transition shadow-sm"
//                 >
//                     <Eye size={16} /> View
//                 </a>
//             </div>
//         </div>
//     );
// };


// // Main Dashboard Component
// export default function Dashboard() {
//     const [proposals, setProposals] = useState([]);
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const username = localStorage.getItem("username");

//     useEffect(() => {
//         if (!token) navigate('/login');
//         else fetchProposals();
//     }, [token, navigate]);

//     const fetchProposals = async () => {
//         if (!token) return;
//         try {
//             // Use the new, secure endpoint that relies on the token, not the username
//             const res = await API.get('/user/my-proposals', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setProposals(res.data.girlfriends.reverse());
//         } catch (err) {
//             console.error("Failed to fetch proposals", err);
//         }
//     };
    
//     const handleDelete = async (girlfriendId) => {
//         if (window.confirm("Are you sure you want to delete this proposal?")) {
//             try {
//                 await API.delete(`/user/girlfriend/${girlfriendId}`, { headers: { Authorization: `Bearer ${token}` } });
//                 fetchProposals();
//             } catch(err) {
//                 alert('Could not delete the proposal.');
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen w-full bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="mb-8">
//                     <h1 className="text-5xl font-extrabold text-gray-900">Welcome, {username}!</h1>
//                     <p className="text-gray-500 mt-1 text-lg">Here are all your beautiful proposals.</p>
//                 </div>

//                 {/* Top Action Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/80 flex items-center justify-between">
//                         <div>
//                             <div className="flex items-center gap-3 mb-1">
//                                 <BarChart2 className="text-gray-400" size={24} />
//                                 <h2 className="text-xl font-bold text-gray-700">Quick Stats</h2>
//                             </div>
//                             <p className="text-gray-500">You have created <span className="font-bold text-gray-800">{proposals.length}</span> proposals.</p>
//                         </div>
//                         <div className="text-gray-800 p-4 rounded-lg text-center">
//                             <span className="font-extrabold text-5xl">{proposals.length}</span>
//                         </div>
//                     </div>
//                     <button 
//                         onClick={() => navigate('/propose-form')}
//                         className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
//                     >
//                         <PlusCircle size={32} />
//                         <div>
//                             <h2 className="text-2xl font-bold text-left">Create a New Proposal</h2>
//                             <p className="text-left text-pink-100">Click here to start a new page.</p>
//                         </div>
//                     </button>
//                 </div>

//                 {/* Main content: List of proposals */}
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Proposals</h2>
//                 <div className="space-y-4">
//                     {proposals.length > 0 ? (
//                         proposals.map(p => <ProposalCard key={p._id} proposal={p} username={username} onDelete={handleDelete}/>)
//                     ) : (
//                         <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200/80">
//                             <h3 className="text-2xl font-bold text-gray-700">No Proposals Yet!</h3>
//                             <p className="text-gray-500 mt-2">Click the "Create a New Proposal" button to begin.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }






















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from '../utils/api';
// import { Pencil, Trash2, Eye, PlusCircle, BarChart2 } from 'lucide-react';

// // Card for a single proposal
// const ProposalCard = ({ proposal, username, onDelete }) => {
//     const navigate = useNavigate();
//     const proposalLink = `${window.location.origin}/propose/${username}/${proposal._id}`;

//     return (
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200/80">
//             <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 text-xl font-bold">
//                         {proposal.name.charAt(0).toUpperCase()}
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-bold text-gray-800">{proposal.name}</h3>
//                         <p className="text-sm text-gray-500">Created: {new Date(proposal.createdAt).toLocaleDateString()}</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button
//                         onClick={() => navigate(`/edit-proposal/${proposal._id}`)}
//                         title="Edit"
//                         className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
//                     >
//                         <Pencil size={18} />
//                     </button>
//                     <button
//                         onClick={() => onDelete(proposal._id)}
//                         title="Delete"
//                         className="p-2 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-600 transition"
//                     >
//                         <Trash2 size={18} />
//                     </button>
//                 </div>
//             </div>

//             <div className="flex items-center justify-between">
//                 <p className="text-sm text-gray-500 truncate mr-4">{proposalLink}</p>
//                 <a
//                   href={proposalLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 font-semibold transition shadow-sm"
//                 >
//                     <Eye size={16} /> View
//                 </a>
//             </div>
//         </div>
//     );
// };


// // Main Dashboard Component
// export default function Dashboard() {
//     const [proposals, setProposals] = useState([]);
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const username = localStorage.getItem("username");

//     useEffect(() => {
//         if (!token) navigate('/login');
//         else fetchProposals();
//     }, [token, navigate]);

//     const fetchProposals = async () => {
//         if (!token) return;
//         try {
//             // Use the new, secure endpoint that relies on the token, not the username
//             const res = await API.get('/user/my-proposals', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setProposals(res.data.girlfriends.reverse());
//         } catch (err) {
//             console.error("Failed to fetch proposals", err);
//         }
//     };

//     const handleDelete = async (girlfriendId) => {
//         if (window.confirm("Are you sure you want to delete this proposal?")) {
//             try {
//                 await API.delete(`/user/girlfriend/${girlfriendId}`, { headers: { Authorization: `Bearer ${token}` } });
//                 fetchProposals();
//             } catch(err) {
//                 alert('Could not delete the proposal.');
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen w-full bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="mb-8">
//                     <h1 className="text-5xl font-extrabold text-gray-900">Welcome, {username}!</h1>
//                     <p className="text-gray-500 mt-1 text-lg">Here are all your beautiful proposals.</p>
//                 </div>

//                 {/* Top Action Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/80 flex items-center justify-between">
//                         <div>
//                             <div className="flex items-center gap-3 mb-1">
//                                 <BarChart2 className="text-gray-400" size={24} />
//                                 <h2 className="text-xl font-bold text-gray-700">Quick Stats</h2>
//                             </div>
//                             <p className="text-gray-500">You have created <span className="font-bold text-gray-800">{proposals.length}</span> proposals.</p>
//                         </div>
//                         <div className="text-gray-800 p-4 rounded-lg text-center">
//                             <span className="font-extrabold text-5xl">{proposals.length}</span>
//                         </div>
//                     </div>
//                     <button
//                         onClick={() => navigate('/propose-form')}
//                         className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
//                     >
//                         <PlusCircle size={32} />
//                         <div>
//                             <h2 className="text-2xl font-bold text-left">Create a New Proposal</h2>
//                             <p className="text-left text-pink-100">Click here to start a new page.</p>
//                         </div>
//                     </button>
//                 </div>

//                 {/* Main content: List of proposals */}
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Proposals</h2>
//                 <div className="space-y-4">
//                     {proposals.length > 0 ? (
//                         proposals.map(p => <ProposalCard key={p._id} proposal={p} username={username} onDelete={handleDelete}/>)
//                     ) : (
//                         <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200/80">
//                             <h3 className="text-2xl font-bold text-gray-700">No Proposals Yet!</h3>
//                             <p className="text-gray-500 mt-2">Click the "Create a New Proposal" button to begin.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
























import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from '../utils/api';
import { Pencil, Trash2, Eye, PlusCircle, BarChart2 } from 'lucide-react';

// Card for a single proposal
const ProposalCard = ({ proposal, username, onDelete }) => {
    const navigate = useNavigate();
    const proposalLink = `${window.location.origin}/propose/${username}/${proposal._id}`;

    return (
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200/80">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 text-xl font-bold">
                        {proposal.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{proposal.name}</h3>
                        <p className="text-sm text-gray-500">Created: {new Date(proposal.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigate(`/edit-proposal/${proposal._id}`)}
                        title="Edit"
                        className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
                    >
                        <Pencil size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(proposal._id)}
                        title="Delete"
                        className="p-2 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-600 transition"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 truncate mr-4">{proposalLink}</p>
                <a
                  href={proposalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 font-semibold transition shadow-sm"
                >
                    <Eye size={16} /> View
                </a>
            </div>
        </div>
    );
};


// Main Dashboard Component
export default function Dashboard() {
    const [proposals, setProposals] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    useEffect(() => {
        if (!token) navigate('/login');
        else fetchProposals();
    }, [token, navigate]);

    const fetchProposals = async () => {
        if (!token) return;
        try {
            // Use the new, secure endpoint that relies on the token, not the username
            const res = await API.get('/user/my-proposals', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProposals(res.data.girlfriends.reverse());
        } catch (err) {
            console.error("Failed to fetch proposals", err);
        }
    };

    const handleDelete = async (girlfriendId) => {
        if (window.confirm("Are you sure you want to delete this proposal?")) {
            try {
                await API.delete(`/user/girlfriend/${girlfriendId}`, { headers: { Authorization: `Bearer ${token}` } });
                fetchProposals();
            } catch(err) {
                alert('Could not delete the proposal.');
            }
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-5xl font-extrabold text-gray-900">Welcome, {username}!</h1>
                    <p className="text-gray-500 mt-1 text-lg">Here are all your beautiful proposals.</p>
                </div>

                {/* Top Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200/80 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <BarChart2 className="text-gray-400" size={24} />
                                <h2 className="text-xl font-bold text-gray-700">Quick Stats</h2>
                            </div>
                            <p className="text-gray-500">You have created <span className="font-bold text-gray-800">{proposals.length}</span> proposals.</p>
                        </div>
                        <div className="text-gray-800 p-4 rounded-lg text-center">
                            <span className="font-extrabold text-5xl">{proposals.length}</span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/propose-form')}
                        className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
                    >
                        <PlusCircle size={32} />
                        <div>
                            <h2 className="text-2xl font-bold text-left">Create a New Proposal</h2>
                            <p className="text-left text-pink-100">Click here to start a new page.</p>
                        </div>
                    </button>
                </div>

                {/* Main content: List of proposals */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Proposals</h2>
                <div className="space-y-4">
                    {proposals.length > 0 ? (
                        proposals.map(p => <ProposalCard key={p._id} proposal={p} username={username} onDelete={handleDelete}/>)
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200/80">
                            <h3 className="text-2xl font-bold text-gray-700">No Proposals Yet!</h3>
                            <p className="text-gray-500 mt-2">Click the "Create a New Proposal" button to begin.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}