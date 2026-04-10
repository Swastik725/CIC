import { useState } from 'react';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { GlassInput } from '../../components/glass/GlassInput';
import { User, Wallet, Bell, Moon, Sun, Share2, LogOut, Camera } from 'lucide-react';

export function Settings() {
  const [notificationSettings, setNotificationSettings] = useState({
    push: true,
    email: false,
    sms: false
  });
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('dark');

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-[rgba(10,10,15,0.9)] border-b border-[rgba(255,255,255,0.08)] px-6 py-6">
        <h1 className="text-2xl font-bold text-[rgba(255,255,255,0.92)]">
          Settings
        </h1>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Profile */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-6">
            Profile
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6C3BFF] to-[#00C2A0]"></div>
              <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#6C3BFF] flex items-center justify-center border-2 border-[#0A0A0F]">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[rgba(255,255,255,0.92)]">Alex Johnson</h3>
              <p className="text-sm text-[rgba(255,255,255,0.65)]">alex.johnson@email.com</p>
            </div>
          </div>
          <GlassInput
            label="Display Name"
            placeholder="Alex Johnson"
          />
        </GlassCard>

        {/* Wallet */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-4 flex items-center gap-2">
            <Wallet className="w-5 h-5" />
            Wallet Connection
          </h2>
          <div className="p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] mb-4">
            <p className="text-sm text-[rgba(255,255,255,0.65)] mb-1">Status</p>
            <p className="text-[rgba(255,255,255,0.92)] font-mono">Not Connected</p>
          </div>
          <GlassButton variant="ghost" size="md" fullWidth>
            Connect Wallet
          </GlassButton>
        </GlassCard>

        {/* Notifications */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[rgba(255,255,255,0.92)]">Push Notifications</span>
              <button
                onClick={() => setNotificationSettings({ ...notificationSettings, push: !notificationSettings.push })}
                className={`w-12 h-6 rounded-full transition-all ${
                  notificationSettings.push ? 'bg-[#00C2A0]' : 'bg-[rgba(255,255,255,0.2)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    notificationSettings.push ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[rgba(255,255,255,0.92)]">Email Updates</span>
              <button
                onClick={() => setNotificationSettings({ ...notificationSettings, email: !notificationSettings.email })}
                className={`w-12 h-6 rounded-full transition-all ${
                  notificationSettings.email ? 'bg-[#00C2A0]' : 'bg-[rgba(255,255,255,0.2)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    notificationSettings.email ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[rgba(255,255,255,0.92)]">SMS Alerts</span>
              <button
                onClick={() => setNotificationSettings({ ...notificationSettings, sms: !notificationSettings.sms })}
                className={`w-12 h-6 rounded-full transition-all ${
                  notificationSettings.sms ? 'bg-[#00C2A0]' : 'bg-[rgba(255,255,255,0.2)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    notificationSettings.sms ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Theme */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-4">
            Appearance
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'dark', icon: Moon, label: 'Dark' },
              { value: 'light', icon: Sun, label: 'Light' },
              { value: 'system', icon: User, label: 'System' }
            ].map(({ value, icon: Icon, label }) => (
              <button
                key={value}
                onClick={() => setTheme(value as any)}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  theme === value
                    ? 'border-[#6C3BFF] bg-[rgba(108,59,255,0.1)]'
                    : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]'
                }`}
              >
                <Icon className="w-5 h-5 text-[rgba(255,255,255,0.92)] mx-auto mb-2" />
                <span className="text-sm text-[rgba(255,255,255,0.92)]">{label}</span>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Referral */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-2 flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Refer a Friend
          </h2>
          <p className="text-sm text-[rgba(255,255,255,0.65)] mb-4">
            You and your friend both get 10% off your next ticket
          </p>
          <div className="flex gap-2">
            <div className="flex-1 p-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
              <p className="text-sm text-[rgba(255,255,255,0.92)] font-mono">ALEX10OFF</p>
            </div>
            <GlassButton variant="ghost" size="md">
              Copy
            </GlassButton>
          </div>
        </GlassCard>

        {/* Logout */}
        <GlassButton variant="danger" size="lg" fullWidth>
          <LogOut className="w-5 h-5 mr-2 inline" />
          Log Out
        </GlassButton>
      </div>
    </div>
  );
}
