import { AuthCard, LoginForm } from '@/features/auth';

export default function LoginPage() {
  return (
    <AuthCard 
      title="Welcome Back" 
      subtitle="Sign in to your account to continue"
    >
      <LoginForm />
    </AuthCard>
  );
}
