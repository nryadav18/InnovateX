import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button } from '../../components/ui/Button';
import { Lock } from 'lucide-react';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const token = localStorage.getItem('innovateAdminToken');
    if (token) navigate('/admin');
  }, [navigate]);

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/admin/login', data);
      if (res.data.success) {
        localStorage.setItem('innovateAdminToken', res.data.data.token);
        localStorage.setItem('innovateAdminUser', JSON.stringify(res.data.data));
        navigate('/admin');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-surface p-10 rounded-2xl border border-border shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-primary" size={28} />
          </div>
          <h2 className="mt-6 text-center font-display text-4xl text-text">Admin Portal</h2>
          <p className="mt-2 text-center text-sm text-text-muted font-sans">
            Authorized personnel only
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded text-sm text-center">{error}</div>}
          <div className="rounded-md space-y-4 shadow-sm">
            <div>
              <label className="sr-only">Username</label>
              <input
                {...register('username')}
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-border bg-card placeholder-text-muted text-text focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                {...register('password')}
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-border bg-card placeholder-text-muted text-text focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4"
              disabled={loading}
            >
              <span className="font-condensed tracking-widest uppercase">
                {loading ? 'Authenticating...' : 'Sign In'}
              </span>
            </Button>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-xs text-text-muted font-sans">Default test credentials require setting up via DB or `/api/admin/setup-initial`.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
