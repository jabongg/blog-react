import React from 'react';
import authService from '../appwrite/auth';

const LoginButton = () => {
    const handleLogin = async () => {
        try {
            const session = await authService.login();
            console.log('Login successful:', session);
            const user = await authService.getCurrentUser();
            console.log('Logged in user:', user.name);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
};

export default LoginButton;
