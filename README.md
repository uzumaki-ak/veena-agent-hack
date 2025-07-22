# 🎙️ Veena Agent – AI Voice Assistant for Insurance

**Veena Agent** is a cutting-edge voice-based AI assistant built to handle customer service queries in the insurance domain. It mimics a real human agent on calls — understanding customer intents, answering from a live knowledge base, and speaking with a natural voice.

---

## 🚀 Live Demo

🧪 Coming Soon  
🛠️ Built for Google Agentic AI Hackathon

---

## ✨ Features

- 🔊 **Human-like voice conversations** via STT + TTS
- 🤖 **AI-powered responses** using GPT-4 / Gemini 1.5 Flash
- 📚 **Domain-trained** on real call recordings + FAQs
- 🧠 **RAG-enabled knowledge retrieval**
- ⚡ **Real-time call handling**
- 🔌 Easy integrations with call infra (Vapi / Twilio)
- 🎯 Built with modern web tech (React + Tailwind + Vite)

---

## 🧩 Tech Stack

### 🧠 AI & Agent Stack
| Layer | Tools |
|------|-------|
| Voice-to-Text (STT) | Whisper, Deepgram, Google STT |
| Text-to-Voice (TTS) | ElevenLabs, PlayHT, Coqui, Azure TTS |
| LLM | OpenAI GPT-4, Gemini 1.5 Flash |
| Knowledge Retrieval | RAG, LangChain, Pinecone / Supabase |
| Call Infrastructure | [Vapi](https://vapi.ai), [Twilio Voice](https://www.twilio.com/voice) |
| Agent Orchestration | CrewAI / LangGraph (optional) |

---

### 🖥️ Frontend Stack
- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/jamesbirtles/tailwindcss-animate)
- [Framer Motion](https://www.framer.com/motion/) – animations
- [ShadCN/UI](https://ui.shadcn.com/) – full UI primitives via Radix UI
- [React Router](https://reactrouter.com/en/main)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/) – for dashboards

---

### 🧱 State & Validation
- [Zod](https://github.com/colinhacks/zod) – schema validation
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query/latest)

---

### 📦 Dev & Tooling
- [ESLint](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [PostCSS](https://postcss.org/)
- [Vite Plugin React-SWC](https://github.com/vitejs/vite-plugin-react-swc)

---

## 📁 Project Structure


veena-agent/
├── src/
│ ├── components/
│ ├── pages/ 
│ 
│ └── lib/
├── public/
├── styles/
├── .eslintrc.cjs
├── tailwind.config.ts
└── vite.config.ts



---

## 🛠️ Getting Started

```bash
# Clone this repo
git clone https://github.com/uzumaki-ak/veena-agent-hack.git
cd veena-agent-hack

# Install dependencies
npm install

# Start development server
npm run dev


#contributions?
git checkout -b feature/your-idea
