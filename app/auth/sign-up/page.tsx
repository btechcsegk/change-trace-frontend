"use client"
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';

export default function SignUp() {
	const [name, setName] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const handleClick = async () => {
	    const res = await fetch('http://127.0.0.1:8000/new/user', {
	      method: 'POST',
	      body: JSON.stringify({ 
	      	name: name,
	      	username: username,
	      	password: password 
	      }),
	      headers: {
	        'Content-Type': 'application/json',
	      }
	    });
	    const result = await res.json();
	    alert(result)
	 };

	return(
		<div className="p-4 columns-1">
			<h1 className="font-bold text-4xl text-center py-8">Sign Up</h1>
			<InputField className="justify-center py-4"
	          	placeholder="Full Name"
	          	onChange={(e) => setName(e.target.value)} />
			<InputField className="justify-center"
	          	placeholder="Username"
	          	onChange={(e) => setUsername(e.target.value)} />
          	<InputField className="justify-center py-4"
          		type="password"
	          	placeholder="Password"
	          	onChange={(e) => setPassword(e.target.value)} />
	        <div className="flex justify-center py-4"><Button 
	          label="SignUp"
	          className="w-80"
	          onClick={handleClick} 
	        /></div> 
		</div>
	);
}