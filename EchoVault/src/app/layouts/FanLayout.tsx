import { Outlet, useLocation, useNavigate } from 'react-router';
import { Brain, Ticket, Sparkles, Shield, User } from 'lucide-react';

const tabs = [
  { path: '/fan/memories', icon: Brain, label: 'Memory' },
  { path: '/fan/nft-vault', icon: Ticket, label: 'Vault' },
  { path: '/fan/agent', icon: Sparkles, label: 'Agent' },
  { path: '/fan/privacy', icon: Shield, label: 'Privacy' },
  { path: '/fan/settings', icon: User, label: 'Profile' }
];

export function FanLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Main Content */}
      <main className="pb-20">
        <Outlet />
      </main>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[rgba(255,255,255,0.08)] backdrop-blur-xl bg-[rgba(10,10,15,0.95)]">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-around">
            {tabs.map(({ path, icon: Icon, label }) => {
              const isActive = location.pathname === path || (location.pathname === '/fan' && path === '/fan/memories');
              
              return (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className="flex flex-col items-center gap-1 min-w-[60px] group"
                >
                  <div className={`relative transition-all ${isActive ? 'scale-110' : 'scale-100'}`}>
                    <Icon 
                      className={`w-6 h-6 transition-colors ${
                        isActive 
                          ? 'text-[#6C3BFF]' 
                          : 'text-[rgba(255,255,255,0.40)] group-hover:text-[rgba(255,255,255,0.65)]'
                      }`}
                    />
                    {isActive && (
                      <div 
                        className="absolute -inset-2 rounded-xl bg-[#6C3BFF] opacity-20 blur-lg"
                      />
                    )}
                  </div>
                  <span 
                    className={`text-[10px] font-medium transition-colors ${
                      isActive 
                        ? 'text-[#6C3BFF]' 
                        : 'text-[rgba(255,255,255,0.40)] group-hover:text-[rgba(255,255,255,0.65)]'
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
