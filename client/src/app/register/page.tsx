import { AuthCard, RegisterForm } from '@/features/auth';

export default function RegisterPage() {
  return (
    <AuthCard 
      title="Create Account" 
      subtitle="Join us and start taking better notes today"
    >
      <RegisterForm />
    </AuthCard>
  );
}
