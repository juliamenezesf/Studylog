import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import type { AppOutletContext } from "../App";
import SessionCard from "../components/SessionCard";

export default function Home() {
  const { sessions, removeSession } = useOutletContext<AppOutletContext>();

  const stats = useMemo(() => {
    const total = sessions.length;
    const minutos = sessions.reduce((acc, s) => acc + s.minutes, 0);
    const media = total ? Math.round(minutos / total) : 0;
    return { total, minutos, media };
  }, [sessions]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="border rounded-md p-4"><p className="text-sm">Sessões</p><p className="text-xl font-semibold">{stats.total}</p></div>
        <div className="border rounded-md p-4"><p className="text-sm">Minutos</p><p className="text-xl font-semibold">{stats.minutos}</p></div>
        <div className="border rounded-md p-4"><p className="text-sm">Média (min)</p><p className="text-xl font-semibold">{stats.media}</p></div>
      </div>

      <div className="space-y-2">
        {sessions.length === 0
          ? <p className="text-gray-700">Nenhuma sessão. Adicione em “Nova Sessão”.</p>
          : sessions.map(s => <SessionCard key={s.id} session={s} onDelete={removeSession} />)}
      </div>
    </div>
  );
}

