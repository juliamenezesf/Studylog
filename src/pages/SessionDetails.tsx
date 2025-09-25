import { useParams, useOutletContext } from "react-router-dom";
import type { AppOutletContext } from "../App";
import { formatDateISOToBR } from "../utils/date";

export default function SessionDetails() {
  const { id } = useParams();
  const { sessions } = useOutletContext<AppOutletContext>();
  const s = sessions.find(x => x.id === id);
  if (!s) return <p className="border rounded-md p-4 max-w-xl">Sessão não encontrada.</p>;

  return (
    <article className="border rounded-md p-4 max-w-xl">
      <h2 className="text-xl font-semibold">{s.subject}</h2>
      <p className="text-gray-700 mt-1">{s.minutes} min • {formatDateISOToBR(s.date)}</p>
      {s.notes && <p className="mt-3">{s.notes}</p>}
    </article>
  );
}

