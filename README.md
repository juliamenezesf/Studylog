# 📘 StudyLog

Aplicação simples para registrar sessões de estudo.  
Feita com **React + TypeScript + Vite + React Router + TailwindCSS (básico)**.

---

## 🔗 Links

- **Repositório:** [github.com/juliamenezesf/Studylog](https://github.com/juliamenezesf/Studylog)  
- **Deploy (Vercel):** [Acessar aqui](https://studylog-git-main-julias-projects-ab722ade.vercel.app?_vercel_share=fZ2zN8qc19WIU4Tm0TmEmxc8XEcxRk5o)

---

## ▶️ Como rodar localmente

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o ambiente de desenvolvimento
```bash
npm run dev
```

### 3. Acessar no navegador
[http://localhost:5173](http://localhost:5173)

---

## 📄 Páginas

- `/` **Home** — lista sessões e mostra estatísticas (total, minutos, média).  
- `/add` **Nova Sessão** — formulário controlado para criar sessão.  
- `/session/:id` **Detalhes da Sessão** — página dinâmica para uma sessão específica.  
- `*` **404** — página de rota não encontrada.  

---

## 🧠 Hooks utilizados

### `useMemo`
- **Arquivo:** `src/pages/Home.tsx`  
- **Uso:** calcula estatísticas (total, minutos, média) a partir da lista de sessões.  

### `useCallback`
- **Arquivo:** `src/App.tsx`  
- **Uso:** funções `addSession` e `removeSession` (estado em memória) memorizadas para evitar recriação desnecessária.  

---

## 🧰 Stack / Técnicas

- **React + TypeScript** (SPA)  
- **React Router** com Layout + `<Outlet>` e lazy loading (`React.lazy` + `Suspense`)  
- **ErrorBoundary** envolvendo as rotas  
- **Estado somente em memória** (`useState`) — sem backend/localStorage  
- **Datas em ISO** (`yyyy-mm-dd`), exibidas em **pt-BR** via `formatDateISOToBR` (`src/utils/date.ts`)  

---

## 👥 Integrantes e responsabilidades

| Integrante     | GitHub                                        | Responsabilidades                                                                 |
|----------------|-----------------------------------------------|-----------------------------------------------------------------------------------|
| Júlia Menezes  | [@juliamenezesf](https://github.com/juliamenezesf) | Setup do projeto, Router + Layout, estado em memória, Outlet com contexto, util de datas, AddSession e 404 |
| Pedro Costa    | [@pedrocostah](https://github.com/pedrocostah) | Home (com `useMemo`), SessionDetails (rota dinâmica), SessionCard e ajustes finais |
