import { useState, FormEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { AppOutletContext } from "../App";
import { todayISO } from "../utils/date";

export default function AddSession() {
  const { addSession } = useOutletContext<AppOutletContext>();
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState(30);
  const [date, setDate] = useState(todayISO());
  const [notes, setNotes] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!subject.trim() || minutes <= 0) return;
    addSession({ subject: subject.trim(), minutes, date, notes: notes.trim() || undefined });
    navigate("/");
  }

  return (
    <form onSubmit={onSubmit} className="border rounded-md p-4 max-w-xl space-y-3">
      <h2 className="text-lg font-semibold">Nova Sessão</h2>
      <div>
        <label className="block text-sm mb-1">Assunto</label>
        <input className="w-full border rounded-md px-3 py-2"
               value={subject} onChange={e => setSubject(e.target.value)} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1">Minutos</label>
          <input type="number" min={1} className="w-full border rounded-md px-3 py-2"
                 value={minutes} onChange={e => setMinutes(Number(e.target.value))} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Data</label>
          <input type="date" className="w-full border rounded-md px-3 py-2"
                 value={date} onChange={e => setDate(e.target.value)} required />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Notas (opcional)</label>
        <textarea className="w-full border rounded-md px-3 py-2" rows={3}
                  value={notes} onChange={e => setNotes(e.target.value)} />
      </div>
      <div className="flex justify-end">
        <button className="border rounded-md px-3 py-2 text-sm">Salvar</button>
      </div>
    </form>
  );
}
