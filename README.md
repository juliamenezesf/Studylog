StudyLog

Mini app para registrar sessões de estudo. React + TS + Vite + React Router + Tailwind (básico).

🔗 Links

Repositório GitHub: cole aqui a URL do repositório
(Com histórico de commits seguindo GitFlow: main, develop, feature/*)

Deploy (Vercel):
https://studylog-git-main-julias-projects-ab722ade.vercel.app?_vercel_share=fZ2zN8qc19WIU4Tm0TmEmxc8XEcxRk5o

▶️ Como rodar (local)
# 1) instalar dependências
npm install

# 2) ambiente de desenvolvimento
npm run dev
# abre em http://localhost:5173

🧭 Páginas

/ Home – lista sessões e mostra estatísticas (total, minutos, média)

/add Nova Sessão – formulário controlado para criar sessão

/session/:id Detalhes – página dinâmica para uma sessão específica

* 404 – página de rota não encontrada

🧠 Onde estão useMemo / useCallback

useMemo: src/pages/Home.tsx
Calcula as estatísticas (total/minutos/média) a partir da lista de sessões.

useCallback: src/App.tsx
Funções addSession e removeSession (estado em memória) memorizadas com useCallback.

👥 Integrantes e divisão
Integrante	GitHub	Responsabilidades
Júlia Menezes	https://github.com/juliamenezesf
	Setup do projeto, Router + Layout, estado em memória, Outlet com contexto, util de datas, páginas AddSession e 404
Pedro Costa	https://github.com/pedrocostah
	Páginas Home (com useMemo), SessionDetails (rota dinâmica), SessionCard e ajustes finais
🛠️ Notas técnicas (resumo)

SPA em React + TypeScript

Estado somente em memória (useState) — sem backend/localStorage

Rotas estáticas e dinâmicas com Layout + <Outlet> e lazy loading (React.lazy + Suspense)

ErrorBoundary envolvendo as rotas

Datas salvas em ISO yyyy-mm-dd e exibidas em pt-BR com formatDateISOToBR (src/utils/date.ts)
