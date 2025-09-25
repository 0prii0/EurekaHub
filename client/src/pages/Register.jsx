import React from 'react'
import Auth from '../components/Auth'

const Register = () => {
    const handleRegister = (data) => {
    console.log("🚀 ~ handleRegister ~ data:", data)
    alert("Registering...")
    };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <Auth type= "register" onSubmit= {handleRegister} />

            <p className="mt-4 text-sm text-center">
                Already have and account? {""}
                <a href='/login' className="text-blue-600 hover:underline">
                Login
                </a>
            </p>
        </div>
    </div>
  );
};

export default Register;