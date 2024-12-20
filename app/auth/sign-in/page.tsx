
import InputField from '@/components/InputField';
import Button from '@/components/Button';

export default function SignIn(){
	return(
		<div className="container p-4 columns-1">
			<h1 className="font-bold text-4xl text-center py-8">Sign In</h1>
			<InputField className="justify-center"
	          	placeholder="username" />
          	<InputField className="py-2 justify-center py-4"
          		type="password"
	          	placeholder="password" />

          	<div className="flex justify-center py-4"><Button 
	          label="SignIn" 
	          className="w-80" 
	        /></div>
		</div>
	);
}