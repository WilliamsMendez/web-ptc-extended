import Router from './Pages/Router'
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import AnalyticsTracker from './components/analytics/AnalyticsTracker';
import { Auth0Provider } from '@auth0/auth0-react';

export default function App() {
  useEffect(() => {
    ReactGA.initialize('G-3K09HY978C');
  },[])
  return (
    <>
      <AnalyticsTracker/>
        <Router />      
    </>
  )
}
