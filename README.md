# Controll Admin ⚙️

Painel administrativo moderno desenvolvido com **React** e **Vite**, focado em gerenciamento de tarefas, cadastros e visualização de métricas empresariais.

## 📋 Sobre o Projeto

O **Controll Admin** é uma Single Page Application (SPA) que simula um dashboard de gestão. O projeto foi construído para demonstrar o uso prático de **React Hooks** (`useState`), renderização condicional de componentes e manipulação de listas.

Diferente de estruturas tradicionais, este projeto gerencia sua própria navegação internamente, oferecendo uma experiência fluida e rápida.

## 🚀 Tecnologias Utilizadas

* **[React](https://react.dev/)** (v19) - Biblioteca para interfaces de usuário.
* **[Vite](https://vitejs.dev/)** - Ferramenta de build extremamente rápida.
* **[SweetAlert2](https://sweetalert2.github.io/)** - Biblioteca para alertas e modais elegantes.
* **CSS3** - Estilização customizada com variáveis e design responsivo (Dark Theme).

## ✨ Funcionalidades

* **🔐 Autenticação:** Tela de login com validação de campos e feedback visual via SweetAlert2.
* **📋 Gerenciador de Tarefas (Home):** Sistema de To-Do List integrado com filtros (Todas, Pendentes, Concluídas).
* **📝 Cadastro Dinâmico:** Formulário inteligente com abas para cadastrar tanto **Clientes** quanto **Produtos**.
* **📦 Gestão de Produtos:** Listagem com **barra de busca** em tempo real e filtro por **categorias**.
* **👥 Base de Clientes:** Tabela para visualização rápida de contatos cadastrados.
* **🚚 Histórico de Entregas:** Visualização de pedidos concluídos com status e valores.
* **📊 Relatórios:** Dashboard com cards de métricas (Vendas, Clientes Ativos) e feed de atividades recentes.

## 📂 Estrutura do Projeto

A organização de pastas segue o padrão de separação por responsabilidades:

```text
src/
├── components/      # Componentes reutilizáveis (Layout, Sidebar)
├── pages/           # Componentes de página (Home, Cadastro, Produtos, etc.)
├── assets/          # Imagens e recursos estáticos
├── App.jsx          # Lógica principal e roteamento de estado
└── main.jsx         # Ponto de entrada da aplicação