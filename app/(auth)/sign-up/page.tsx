'use client';

import AuthForm from '@/components/authForm';
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
    onSubmit={() => {}}
  />
);

export default SignUp;
