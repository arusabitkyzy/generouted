import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30%', backgroundColor: 'grey' }}>Sidebar</div>
      <Outlet />
    </div>
  );
}
