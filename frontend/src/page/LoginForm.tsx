import React, { useState, type FormEvent } from 'react';
import API from '../api';


interface LoginResponse {
  access_token: string;
}

// interface ProfileResponse {
//   id: string;
//   name: string;
//   email: string;
// }

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await API.post<LoginResponse>('/login', { email, password });
        console.log(res.data);
        
      localStorage.setItem('accessToken', res.data.access_token);
      setMsg('Login successful ✅');

    } catch (err: any) {
      console.error('Login error:', err.response?.data?.message);
      setMsg(err.response?.data?.message || 'Login failed ❌');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: '80px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  form: {
    display: 'inline-block',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    display: 'block',
    padding: '10px',
    margin: '10px auto',
    width: '300px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0077cc',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default LoginForm;
