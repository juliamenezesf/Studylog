import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const link = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-semibold text-gray-900" : "text-gray-700";

  return (
    <div>
      <header className="bg-white border-b">
        <nav className="container h-12 flex items-center gap-4">
          <Link to="/" className="font-bold">StudyLog</Link>
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/add" className={link}>Nova Sessão</NavLink>
        </nav>
      </header>
      <main className="container py-4">
        <Outlet />
      </main>
    </div>
  );
}
