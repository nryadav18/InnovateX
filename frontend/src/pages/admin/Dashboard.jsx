import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, Users, Building, Mail, RefreshCw } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('leads'); // leads or contacts
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem('innovateAdminToken');

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === 'leads' ? '/api/admin/leads' : '/api/admin/contacts';
      const res = await axios.get(endpoint, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        handleLogout();
      }
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('innovateAdminToken');
    localStorage.removeItem('innovateAdminUser');
    navigate('/admin/login');
  };

  const updateLeadStatus = async (id, newStatus) => {
    try {
      await axios.put(`/api/admin/leads/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text font-sans flex flex-col pt-20"> {/* PT-20 to clear standard navbar if present, or we can hide main navbar on admin routes */}

      {/* Admin Header */}
      <header className="bg-surface border-b border-border p-4 px-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <div className="font-display text-2xl tracking-widest text-primary">InnovaTe X Admin</div>
          <div className="h-6 w-px bg-border hidden sm:block"></div>
          <div className="hidden sm:block text-sm text-text-muted font-condensed tracking-widest uppercase">Command Center</div>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-text-muted hover:text-red-400 transition-colors bg-card px-4 py-2 rounded border border-border">
          <LogOut size={16} /> Logout
        </button>
      </header>

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-surface/50 border-r border-border p-6 hidden md:block">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab('leads')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${activeTab === 'leads' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-text-muted hover:bg-card hover:text-text'}`}
            >
              <Building size={18} /> School Leads
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${activeTab === 'contacts' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-text-muted hover:bg-card hover:text-text'}`}
            >
              <Mail size={18} /> Contact Messages
            </button>
          </div>
        </aside>

        {/* Mobile Tabs */}
        <div className="flex md:hidden border-b border-border bg-surface p-2 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${activeTab === 'leads' ? 'bg-primary text-bg font-bold' : 'text-text-muted'}`}
          >
            School Leads
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${activeTab === 'contacts' ? 'bg-primary text-bg font-bold' : 'text-text-muted'}`}
          >
            Contact Messages
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">

          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="font-display text-4xl text-text mb-2 animate-fade-in">
                {activeTab === 'leads' ? 'School Partnership Leads' : 'General Inquiries'}
              </h1>
              <p className="text-text-muted text-sm">
                Showing {data.length} {activeTab === 'leads' ? 'leads' : 'messages'} from the database.
              </p>
            </div>
            <button onClick={fetchData} className="p-2 bg-surface border border-border rounded text-text-muted hover:text-primary transition-colors group">
              <RefreshCw size={20} className={loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'} />
            </button>
          </div>

          <div className="bg-surface border border-border rounded-xl shadow-lg overflow-hidden animate-slide-up">
            {loading ? (
              <div className="p-10 text-center text-text-muted font-condensed tracking-widest uppercase animate-pulse">Loading Data...</div>
            ) : data.length === 0 ? (
              <div className="p-10 text-center text-text-muted">No records found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="bg-card border-b border-border font-condensed tracking-widest text-primary uppercase text-xs">
                      {activeTab === 'leads' ? (
                        <>
                          <th className="p-4">Date</th>
                          <th className="p-4">School</th>
                          <th className="p-4">Principal</th>
                          <th className="p-4">Contact</th>
                          <th className="p-4">Size</th>
                          <th className="p-4">Status</th>
                        </>
                      ) : (
                        <>
                          <th className="p-4">Date</th>
                          <th className="p-4">Name</th>
                          <th className="p-4">Email</th>
                          <th className="p-4">Subject</th>
                          <th className="p-4 w-1/3 text-wrap">Message</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {data.map((item) => (
                      <tr key={item._id} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                        <td className="p-4 text-text-muted">{new Date(item.createdAt).toLocaleDateString()}</td>

                        {activeTab === 'leads' ? (
                          <>
                            <td className="p-4 font-bold text-text">{item.schoolName}<br /><span className="text-xs text-text-muted font-normal">{item.city}</span></td>
                            <td className="p-4 text-text">{item.principalName}</td>
                            <td className="p-4 text-text-muted">{item.phone}<br />{item.email}</td>
                            <td className="p-4 text-text-muted">{item.students}</td>
                            <td className="p-4">
                              <select
                                value={item.status}
                                onChange={(e) => updateLeadStatus(item._id, e.target.value)}
                                className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded outline-none appearance-none border cursor-pointer
                                  ${item.status === 'New' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                    item.status === 'Contacted' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                      item.status === 'Proposal Sent' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                        'bg-green-500/10 text-green-400 border-green-500/20'}`}
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Proposal Sent">Proposal Sent</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="p-4 font-bold text-text">{item.name}</td>
                            <td className="p-4 text-text-muted">{item.email}</td>
                            <td className="p-4 text-text">{item.subject}</td>
                            <td className="p-4 text-text-muted text-wrap min-w-[300px]">{item.message}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
};

export default Dashboard;
