# C Learning Platform - Next.js Edition

Interactive C programming learning platform built with Next.js 16, TypeScript, and Node.js.

## Features

- 🎮 **Interactive Learning** - Step-by-step C programming tutorials
- 💻 **Code Editor** - Monaco editor (VS Code engine) with syntax highlighting
- ⚡ **Real-time Compilation** - Compile and run C code directly in the browser
- 📚 **Comprehensive Curriculum** - Beginner to advanced lessons
- 💾 **Progress Tracking** - Automatic saving of progress with localStorage
- 🌐 **Web-based** - Access from any browser, no installation required

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **UI**: React 19
- **Code Editor**: Monaco Editor
- **Backend**: Next.js API Routes (Node.js)
- **Compiler**: GCC (system-level)

## Prerequisites

You need to have the following installed on your system:

- **Node.js** (v18.0.0 or higher)
- **npm** or **pnpm**
- **GCC** (GNU Compiler Collection)

### Installing GCC

**Windows:**
1. Download MinGW from http://mingw.org
2. Install and add to PATH
3. Verify: `gcc --version`

**macOS:**
```bash
xcode-select --install
```

**Linux:**
```bash
sudo apt-get install gcc  # Ubuntu/Debian
sudo yum install gcc      # CentOS/RHEL
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Or with pnpm
pnpm install
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## Project Structure

```
c-learning-platform-nextjs/
├── app/
│   ├── api/
│   │   ├── compile/
│   │   │   └── route.ts       # C code compilation endpoint
│   │   └── health/
│   │       └── route.ts       # Health check endpoint
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Main application page
│   └── globals.css            # Global styles
├── components/
│   ├── CodeEditor.tsx         # Monaco code editor
│   ├── LessonNavigator.tsx    # Sidebar navigation
│   ├── OutputPanel.tsx        # Compilation results
│   └── TutorialContent.tsx    # Lesson content display
├── hooks/
│   ├── useLocalStorage.ts     # LocalStorage hook
│   └── useTypingEffect.ts     # Typing animation hook
├── lib/
│   ├── api.ts                 # API client functions
│   └── types.ts               # TypeScript type definitions
├── data/
│   └── lessons.ts             # Tutorial content (3,580 lines)
├── temp/                      # Temporary C compilation files
├── public/                    # Static assets
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## How It Works

### Frontend
- React 19 components with Next.js App Router
- Monaco Editor for code editing (VS Code's editor)
- Client-side state management with React hooks
- Progress saved to browser localStorage

### Backend
- Next.js API Routes handle compilation requests
- Uses Node.js `child_process` to execute GCC
- Temporary files created with UUID-based names
- 5-second timeout protection for infinite loops
- Automatic cleanup of temporary files

### Compilation Flow
1. User writes C code in Monaco editor
2. Code sent to `/api/compile` endpoint via fetch
3. Server writes code to temporary `.c` file
4. GCC compiles the code
5. Compiled binary is executed
6. Output returned to client
7. Temporary files cleaned up

## Security Considerations

⚠️ **Important**: This application executes arbitrary C code on the server. For production use, consider:

- **Rate limiting** - Prevent abuse
- **Input validation** - Check code size and content
- **Sandboxing** - Use Docker containers for isolation
- **Resource limits** - Memory and CPU constraints
- **Authentication** - User management and access control

## Migration from Tauri

This project was migrated from a Tauri desktop application to a Next.js web application:

- **Old**: React + Vite + Tauri (Rust backend)
- **New**: Next.js + TypeScript + Node.js backend

### What Changed
- Tauri IPC → Next.js API Routes (fetch)
- Desktop app → Web application
- Rust compilation → Node.js child_process
- Local execution → Server-side execution

### What Stayed the Same
- All UI components and functionality
- Lesson content and curriculum
- Monaco editor integration
- Progress tracking system
- Korean language interface

## Deployment

### Recommended Platforms

1. **Vercel** (Recommended for Next.js)
   - Easy deployment with git integration
   - Note: May need custom runtime for GCC

2. **VPS (DigitalOcean, AWS EC2)**
   - Full control over environment
   - Can install GCC and dependencies
   - Better suited for C compilation

3. **Docker Container**
   - Consistent environment
   - Security isolation
   - Can be deployed anywhere

## License

ISC

## Author

C Learning Platform Team

---

**Happy Learning! 🚀**
