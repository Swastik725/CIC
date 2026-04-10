"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { LogIn, UserPlus, Music } from "lucide-react"
import Link from "next/link"

interface AuthFormProps {
  mode: "login" | "signup"
}

export function AuthForm({ mode }: AuthFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    name: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === "signup" && !formData.role) {
      toast({
        title: "Role Required",
        description: "Please select whether you're a Fan or Organizer.",
        variant: "destructive",
      })
      return
    }

    // Simulate auth
    toast({
      title: mode === "login" ? "Welcome back!" : "Account created!",
      description: mode === "login" ? "Redirecting to your dashboard..." : "Welcome to EchoVault!",
    })

    // Redirect based on role
    if (formData.role === "fan") {
      window.location.href = "/fan"
    } else if (formData.role === "organizer") {
      window.location.href = "/organizer"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
            <Music className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">
            {mode === "login" ? "Welcome Back" : "Join EchoVault"}
          </CardTitle>
          <CardDescription>
            {mode === "login"
              ? "Sign in to your account"
              : "Create your account to get started"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            {mode === "signup" && (
              <div>
                <Label htmlFor="role">I am a...</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fan">Fan - Individual user</SelectItem>
                    <SelectItem value="organizer">Organizer - Artist/Event manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button type="submit" className="w-full">
              {mode === "login" ? (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create Account
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            {mode === "login" ? (
              <p>
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}