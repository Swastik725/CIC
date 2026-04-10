import { createBrowserRouter } from 'react-router';

// Onboarding
import { Welcome } from './pages/onboarding/Welcome';
import { FanSignup } from './pages/onboarding/FanSignup';
import { OrganizerSignup } from './pages/onboarding/OrganizerSignup';
import { Quiz } from './pages/onboarding/Quiz';

// Fan Portal
import { MemoryTimeline } from './pages/fan/MemoryTimeline';
import { NFTVault } from './pages/fan/NFTVault';
import { ProactiveAgent } from './pages/fan/ProactiveAgent';
import { PrivacyCenter } from './pages/fan/PrivacyCenter';
import { Settings as FanSettings } from './pages/fan/Settings';
import { FanLayout } from './layouts/FanLayout';

// Organizer Dashboard
import { Overview } from './pages/organizer/Overview';
import { FanSegments } from './pages/organizer/FanSegments';
import { RewardEngine } from './pages/organizer/RewardEngine';
import { NFTAnalytics } from './pages/organizer/NFTAnalytics';
import { Campaigns } from './pages/organizer/Campaigns';
import { OrganizerSettings } from './pages/organizer/OrganizerSettings';
import { OrganizerLayout } from './layouts/OrganizerLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Welcome,
  },
  {
    path: '/onboarding',
    Component: Welcome,
  },
  {
    path: '/onboarding/fan-signup',
    Component: FanSignup,
  },
  {
    path: '/onboarding/organizer-signup',
    Component: OrganizerSignup,
  },
  {
    path: '/onboarding/quiz',
    Component: Quiz,
  },
  {
    path: '/fan',
    Component: FanLayout,
    children: [
      { index: true, Component: MemoryTimeline },
      { path: 'memories', Component: MemoryTimeline },
      { path: 'nft-vault', Component: NFTVault },
      { path: 'agent', Component: ProactiveAgent },
      { path: 'privacy', Component: PrivacyCenter },
      { path: 'settings', Component: FanSettings },
    ],
  },
  {
    path: '/organizer',
    Component: OrganizerLayout,
    children: [
      { index: true, Component: Overview },
      { path: 'overview', Component: Overview },
      { path: 'segments', Component: FanSegments },
      { path: 'rewards', Component: RewardEngine },
      { path: 'analytics', Component: NFTAnalytics },
      { path: 'campaigns', Component: Campaigns },
      { path: 'settings', Component: OrganizerSettings },
    ],
  },
]);