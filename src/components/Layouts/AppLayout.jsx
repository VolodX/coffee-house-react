import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import '@/App.css';

export default function AppLayout() {
  const { pathname } = useLocation();


  return (
    <div className="app">
      <Header currentPath={pathname} />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}