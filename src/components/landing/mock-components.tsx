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

export const DeploymentLog = () => (
    <div className="p-3 bg-black rounded-lg text-xs font-code overflow-hidden relative h-40">
        <pre className="relative z-10 whitespace-pre-wrap"><code className="text-green-400">{`[16:37:25.637] Running build in Washington, D.C., USA (East)`}</code><code className="text-gray-400">{`
[16:37:30.914] bun install v1.2.19 (aad3abea)
[16:37:34.436] Resolved, downloaded and extracted [1116]
[16:37:41.439] ✓ Compiled successfully
[16:38:01.099] Build Completed in /vercel/output [30s]
`}</code><code className="text-white">{`🚀 Deployment complete – Easy!`}</code></pre>
    </div>
);
