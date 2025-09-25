# StudyLog

Aplicação simples para registrar sessões de estudo. Feita com **React + TypeScript + Vite + React Router + TailwindCSS (básico)**.

---

## 🔗 Links

- **Repositório:** https://github.com/juliamenezesf/Studylog  
- **Deploy (Vercel):** https://studylog-git-main-julias-projects-ab722ade.vercel.app?_vercel_share=fZ2zN8qc19WIU4Tm0TmEmxc8XEcxRk5o

---

## ▶️ Como rodar localmente

1. **Instalar dependências**
   ```bash
   npm install
Iniciar o ambiente de desenvolvimento

bash
Copy code
npm run dev
Acesse: http://localhost:5173

📄 Páginas
/ Home — lista sessões e mostra estatísticas (total, minutos, média)

/add Nova Sessão — formulário controlado para criar sessão

/session/:id Detalhes — página dinâmica para uma sessão específica

* 404 — página de rota não encontrada

🧠 Onde estão useMemo e useCallback
useMemo: src/pages/Home.tsx — calcula estatísticas (total/minutos/média) a partir da lista de sessões.

useCallback: src/App.tsx — funções addSession e removeSession (estado em memória) memorizadas com useCallback.

🧰 Stack / Técnicas
React + TypeScript (SPA)

React Router com Layout + <Outlet> e lazy loading (React.lazy + Suspense)

ErrorBoundary envolvendo as rotas

Estado somente em memória (useState) — sem backend/localStorage

Datas salvas em ISO yyyy-mm-dd e exibidas em pt-BR com formatDateISOToBR (src/utils/date.ts)

👥 Integrantes e divisão
Integrante	GitHub	Responsabilidades
Júlia Menezes	https://github.com/juliamenezesf	Setup do projeto, Router + Layout, estado em memória, Outlet com contexto, util de datas, AddSession e 404
Pedro Costa	https://github.com/pedrocostah	Home (com useMemo), SessionDetails (rota dinâmica), SessionCard e ajustes finais

