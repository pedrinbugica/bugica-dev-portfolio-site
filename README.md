# Portfólio Pedro Bugica — Dev de IA & Automação

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

🌐 **Site ao vivo:** [pedrobugica.dev](https://pedrobugica.dev)

---

## Sobre

Site de portfólio pessoal com assistente de IA integrado. Desenvolvido para apresentar projetos, serviços e habilidades de forma moderna e interativa.

O chat com IA utiliza a API da OpenAI (`gpt-4o-mini`) através de uma **Vercel Serverless Function** (`api/chat.ts`), garantindo que a chave de API nunca fique exposta no frontend — toda a comunicação com a OpenAI acontece no servidor.

---

## Funcionalidades

- Apresentação de projetos e serviços com design moderno e responsivo
- **Chat de IA** que responde perguntas sobre o desenvolvedor, projetos, serviços e formas de contato
- Animação de "digitando..." durante as respostas do assistente
- Formulário de contato funcional
- Layout totalmente responsivo para mobile e desktop

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React 18 + TypeScript + Vite |
| Estilo | Tailwind CSS + shadcn/ui |
| IA | OpenAI API (gpt-4o-mini) |
| Backend | Vercel Serverless Functions (`api/chat.ts`) |
| Deploy | Vercel (CI/CD automático via GitHub) |

---

## Como rodar localmente

O projeto usa a pasta `/api` para serverless functions, que requer o **Vercel CLI** para funcionar localmente.

**1. Clone o repositório**
```bash
git clone https://github.com/pedrinbugica/bugica-dev-portfolio-site.git
cd bugica-dev-portfolio-site
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o .env e adicione sua chave da OpenAI
```

**4. Instale o Vercel CLI**
```bash
npm install -g vercel
```

**5. Inicie o servidor de desenvolvimento**
```bash
vercel dev
```

> Acesse `http://localhost:3000`. O `vercel dev` serve tanto o frontend Vite quanto as serverless functions da pasta `/api` juntos.

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
OPENAI_API_KEY=sua_chave_aqui
```

Obtenha sua chave em [platform.openai.com/api-keys](https://platform.openai.com/api-keys).

> O arquivo `.env` está no `.gitignore` e nunca é commitado.

---

## Deploy

O projeto é hospedado na **Vercel** com deploy automático a cada push na branch `main`.

Para fazer seu próprio deploy:

1. Importe o repositório em [vercel.com/new](https://vercel.com/new)
2. Adicione a variável `OPENAI_API_KEY` em **Settings → Environment Variables**
3. Deploy feito — a Vercel detecta o Vite automaticamente e serve a pasta `/api` como serverless functions

---

## Contato

- 📧 pedrobugica2@gmail.com
- 💬 WhatsApp: [(44) 98827-1929](https://api.whatsapp.com/send/?phone=5544988271929)
- 🐙 GitHub: [@pedrinbugica](https://github.com/pedrinbugica)
- 📸 Instagram: [@pedro.bugica](https://instagram.com/pedro.bugica)
