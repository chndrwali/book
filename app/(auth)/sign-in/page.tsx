'use client';

import AuthForm from '@/components/authForm';
import { signInSchema } from '@/lib/validation';

const SignIn = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: '',
      password: '',
    }}
    onSubmit={() => {}}
  />
);

export default SignIn;
