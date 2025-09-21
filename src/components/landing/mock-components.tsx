import Image from "next/image";

export const CodeSnippet = () => (
    <div className="p-4 bg-muted/80 rounded-lg border text-xs text-muted-foreground font-code relative overflow-hidden h-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-card to-transparent pointer-events-none"></div>
        <pre className="text-xs"><code>{`switch (type) {
  case 'success':
    return {
      border: 'border-green-200',
      icon: (
        <svg fill="none" ...>
          <path d="..."
            stroke="#22C55E"
            ... />
        </svg>
      )
    }
  case 'error':
    // ...
}`}</code></pre>
    </div>
);

export const MockAppList = () => (
    <div className="space-y-2 h-40 flex flex-col justify-center">
        <div className="flex items-center gap-3 p-2 bg-card rounded-md border shadow-sm">
            <Image data-ai-hint="figma logo" src="https://picsum.photos/24/24?random=figma" width={24} height={24} alt="Figma" className="rounded-sm" />
            <span className="font-semibold text-sm flex-1">Figma</span>
        </div>
        <div className="flex items-center gap-3 p-2 bg-card rounded-md border shadow-sm">
            <Image data-ai-hint="nextjs logo" src="https://picsum.photos/24/24?random=nextjs" width={24} height={24} alt="Next.js" className="rounded-sm" />
            <span className="font-semibold text-sm flex-1">Next.js</span>
            <span className="text-xs text-primary font-medium">Installed</span>
        </div>
         <div className="flex items-center gap-3 p-2 bg-card rounded-md border shadow-sm">
            <Image data-ai-hint="tailwind logo" src="https://picsum.photos/24/24?random=tailwind" width={24} height={24} alt="Tailwind CSS" className="rounded-sm" />
            <span className="font-semibold text-sm flex-1">Tailwind CSS</span>
        </div>
    </div>
);

export const CommitList = () => (
    <div className="space-y-2 text-sm h-40 flex flex-col justify-center">
        <div className="p-2 rounded-md bg-muted/80 border">
            <p className="font-medium text-foreground/80 text-xs">Update buttons</p>
            <p className="text-xs text-muted-foreground">12k tokens • o3 • pointer/update-pain...</p>
        </div>
        <div className="p-2 rounded-md bg-muted/80 border">
            <p className="font-medium text-foreground/80 text-xs">Fix sanity issue</p>
            <p className="text-xs text-muted-foreground">12k tokens • claude-sonnet-4 • ...</p>
        </div>
        <div className="p-2 rounded-md bg-muted/80 border">
            <p className="font-medium text-foreground/80 text-xs">Plan for seamless toast</p>
            <p className="text-xs text-muted-foreground">30k tokens • o3 • ...</p>
        </div>
    </div>
);

// New clean mock components replacing raw logs
export const MockEditorLight = () => (
    <div className="p-4 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/50 dark:to-violet-950/50 rounded-lg border h-40 flex flex-col justify-center">
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Écrire en français</span>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 rounded p-2 text-xs text-slate-700 dark:text-slate-300">
                "Crée-moi une page d'accueil moderne avec un hero et un CTA"
            </div>
            <div className="text-xs text-muted-foreground">→ IA génère le code automatiquement</div>
        </div>
    </div>
);

export const MockTerminalClean = () => (
    <div className="p-4 bg-slate-900 rounded-lg h-40 flex flex-col justify-center">
        <div className="space-y-1 text-xs">
            <div className="text-green-400">✓ Site créé</div>
            <div className="text-blue-400">✓ Design appliqué</div>
            <div className="text-yellow-400">✓ Déployé en ligne</div>
            <div className="text-white mt-2">🌐 https://ton-projet.netlify.app</div>
        </div>
    </div>
);

export const MockWorkshopRoom = () => (
    <div className="p-4 bg-amber-50 rounded-lg border h-40 flex items-center justify-center">
        <div className="text-center space-y-2">
            <div className="flex justify-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-xs">👨‍💻</div>
                <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-xs">👩‍💻</div>
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-xs">👨‍🎨</div>
            </div>
            <div className="text-sm font-medium">Atelier Paris</div>
            <div className="text-xs text-muted-foreground">10 places • Coaching • Pratique</div>
        </div>
    </div>
);

export const MockCardsGrid = () => (
    <div className="p-4 h-40 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2 w-full">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 p-3 rounded-lg border">
                <div className="text-xs font-medium text-purple-800 dark:text-purple-200">Idée</div>
                <div className="text-xs text-purple-600 dark:text-purple-300">💡</div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 p-3 rounded-lg border">
                <div className="text-xs font-medium text-blue-800 dark:text-blue-200">Code</div>
                <div className="text-xs text-blue-600 dark:text-blue-300">⚡</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 p-3 rounded-lg border">
                <div className="text-xs font-medium text-green-800 dark:text-green-200">Design</div>
                <div className="text-xs text-green-600 dark:text-green-300">✨</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 p-3 rounded-lg border">
                <div className="text-xs font-medium text-orange-800 dark:text-orange-200">Live</div>
                <div className="text-xs text-orange-600 dark:text-orange-300">🚀</div>
            </div>
        </div>
    </div>
);

export const MockPeopleAvatars = () => (
    <div className="p-4 h-40 flex items-center justify-center">
        <div className="flex -space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm">A</div>
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm">M</div>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm">S</div>
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">+7</div>
        </div>
        <div className="ml-4 text-xs text-center">
            <div className="font-medium">Team Spirit</div>
            <div className="text-muted-foreground">Ensemble on va plus loin</div>
        </div>
    </div>
);

export const MockBadgeRareté = () => (
    <div className="p-4 h-40 flex items-center justify-center">
        <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <span>⚡</span>
                <span>Compétence Rare</span>
            </div>
            <div className="text-xs text-muted-foreground">
                Maîtrise IA + Code + Design
            </div>
        </div>
    </div>
);
