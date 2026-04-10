import { Outlet, useLocation, useNavigate } from 'react-router';
import { BarChart3, Users, Gift, Gem, Megaphone, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { path: '/organizer/overview', icon: BarChart3, label: 'Overview' },
  { path: '/organizer/segments', icon: Users, label: 'Fan Segments' },
  { path: '/organizer/rewards', icon: Gift, label: 'Reward Engine' },
  { path: '/organizer/analytics', icon: Gem, label: 'NFT Analytics' },
  { path: '/organizer/campaigns', icon: Megaphone, label: 'Campaigns' },
  { path: '/organizer/settings', icon: Settings, label: 'Settings' }
];

export function OrganizerLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full backdrop-blur-xl bg-[rgba(10,10,15,0.95)] border-r border-[rgba(255,255,255,0.08)] transition-all duration-300 z-50 ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-[rgba(255,255,255,0.08)]">
          {!sidebarCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6C3BFF] to-[#00C2A0]"></div>
              <span className="font-bold text-[rgba(255,255,255,0.92)]">EchoVault</span>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-xl hover:bg-[rgba(255,255,255,0.04)] transition-colors text-[rgba(255,255,255,0.65)]"
          >
            {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path || (location.pathname === '/organizer' && path === '/organizer/overview');

            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group ${
                  isActive
                    ? 'bg-[#6C3BFF] text-white'
                    : 'text-[rgba(255,255,255,0.65)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[rgba(255,255,255,0.92)]'
                }`}
                title={sidebarCollapsed ? label : undefined}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-[rgba(255,255,255,0.65)] group-hover:text-[rgba(255,255,255,0.92)]'
                  }`}
                />
                {!sidebarCollapsed && (
                  <span className="font-medium">{label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        {!sidebarCollapsed && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[rgba(255,255,255,0.04)]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C3BFF] to-[#00C2A0]"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)] truncate">
                  Acme Events
                </p>
                <p className="text-xs text-[rgba(255,255,255,0.65)] truncate">
                  Pro Plan
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
