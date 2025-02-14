'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth';

import Logo from '../assets/logo.png'

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isAuthenticated = login(username, password);
    if (isAuthenticated) {
      navigate('/task');
    } else {
      alert('Usuário ou senha inválidos!');
    }
  };

  return (
    <div className="bg-greenLogo w-full h-screen flex items-center justify-center">

      <div className='bg-gray-200 lg:rounded-2xl w-full lg:w-[400px] h-screen lg:h-[500px] flex flex-col items-center justify-center gap-10 p-8'>
        <img alt='logo' src={Logo} className='w-[120px]' />
        <h1 className='font-semibold text-2xl text-gray-900'>Acesse sua Conta</h1>

        <form onSubmit={handleSubmit} className='w-[300px] flex flex-col gap-4'>
          <div className="flex flex-col gap-2">
            <h1 className='font-semibold text-gray-900'>Usuário:</h1>
            <input
              type="text"
              className="border p-2 w-full rounded-lg"
              placeholder="Digite seu Usuário..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className='font-semibold text-gray-900'>Senha:</h1>
            <input
              type="password"
              className="border p-2 w-full rounded-lg"
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="bg-greenLogo hover:bg-green-950 font-semibold text-white text-center p-2 w-full rounded-lg mt-2">
            ACESSAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
