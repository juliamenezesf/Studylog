import { Link } from "react-router-dom";
import type { StudySession } from "../types";
import { formatDateISOToBR } from "../utils/date";

type Props = { session: StudySession; onDelete?: (id: string) => void };

export default function SessionCard({ session, onDelete }: Props) {
  return (
    <div className="border rounded-md p-4 bg-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-medium">{session.subject}</div>
          <div className="text-sm text-gray-700">
            {session.minutes} min • {formatDateISOToBR(session.date)}
          </div>
          {session.notes && <div className="mt-1 text-sm">{session.notes}</div>}
        </div>
        <div className="flex gap-2">
          <Link to={`/session/${session.id}`} className="border rounded-md px-3 py-2 text-sm">Detalhes</Link>
          {onDelete && (
            <button onClick={() => onDelete(session.id)} className="border rounded-md px-3 py-2 text-sm">
              Remover
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

