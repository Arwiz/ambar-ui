import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useState, ChangeEvent, FormEvent } from 'react';
import { z } from "zod";

const UserLogin = z.object({
  email: z.string({
    'required_error': "Email is required",
    'invalid_type_error': "Email must be a string",
  }).email({ message: "Invalid email address" }),
  password: z.string({'required_error': "Password is required"}),
});

interface ApiResponse {
  [x: string]: any;
  data: AuthResponse;
}

interface AuthResponse {
  access_token: string;
  user: User
}

interface User {
  first_name: string;
  email: string;
}


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const router = useRouter();



  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here


    axios.post<ApiResponse>('http://192.168.1.9:3000/auth/login',
      {
        email,
        password
      })
      .then((response: AxiosResponse<ApiResponse>) => {
        // Cast the response data to the expected type
        const responseData: ApiResponse = response.data;

        // Access the properties of the response
        const access_token = responseData.access_token;
        const user  = responseData.user;

        console.log(access_token);
        if (access_token) {
          router.push({
            pathname: '/CallHelp',
            query: { name : 'arvind Singh rawat',  data: JSON.stringify(user) },
          }
          );
        }
      })
      .catch(error => {
        console.error(error);
      });
  }


  //   // Function to make the authentication request to the server
  // const handleAuthClick = () => {
  //   console.log("I am called authClick");
  //   // window.open('http://192.168.1.9:3000/auth/google');
  //     // , { withCredentials: true })
  //     //   .then(response => {
  //     //      console.error('Response', response);
  //     // })
  //     // .catch(error => {
  //     //   console.error('Error fetching user data:', error);
  //     // });




  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
        >
         Sign in
        </button>
      </form>
    </div>
  );
};