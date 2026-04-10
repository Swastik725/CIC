import { AuthForm } from '@/components/auth-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
      <AuthForm mode="login" />
    </div>
  )
}