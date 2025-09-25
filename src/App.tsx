import React, { useState, useCallback, lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import { StudySession } from "./types";

const Home = lazy(() => import("./pages/Home."));
const AddSession = lazy(() => import("./pages/AddSessions"));
const SessionDetails = lazy(() => import("./pages/SessionDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

export type AppOutletContext = {
  sessions: StudySession[];
  addSession: (s: Omit<StudySession, "id">) => void;
  removeSession: (id: string) => void;
};

function ContextOutlet(props: AppOutletContext) {
  // se o VS Code insistir em sublinhar, troque por:  <Outlet context={props as any} />
  return <Outlet context={props} />;
}

export default function App() {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  const addSession = useCallback((s: Omit<StudySession, "id">) => {
    const id = Date.now().toString();
    setSessions(prev => [{ id, ...s }, ...prev]);
  }, []);

  const removeSession = useCallback((id: string) => {
    setSessions(prev => prev.filter(s => s.id !== id));
  }, []);

  const ctx: AppOutletContext = { sessions, addSession, removeSession };

  return (
    <ErrorBoundary>
      <Suspense fallback={<p className="container py-4">Carregando...</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<ContextOutlet {...ctx} />}>
              <Route index element={<Home />} />
              <Route path="add" element={<AddSession />} />
              <Route path="session/:id" element={<SessionDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
