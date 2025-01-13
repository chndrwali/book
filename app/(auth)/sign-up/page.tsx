'use client';

import AuthForm from '@/components/authForm';
import { signUp } from '@/lib/actions/auth';
import { signUpSchema } from '@/lib/validation';

const SignUp = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: '',
      email: '',
      password: '',
      universityId: 0,
      universityCard: '',
    }}
    onSubmit={signUp}
  />
);

export default SignUp;
