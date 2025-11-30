"use client";

import { useEffect, useRef } from "react";

type MermaidDiagramProps = {
  code: string;
};

export function MermaidDiagram({ code }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    const renderDiagram = async () => {
      try {
        const mermaidModule = await import("mermaid");
        const mermaid =
          "default" in mermaidModule
            ? (mermaidModule.default as typeof import("mermaid"))
            : (mermaidModule as unknown as typeof import("mermaid"));

        mermaid.initialize({
          startOnLoad: false,
          theme: "default",
        });

        if (!isMounted || !containerRef.current) return;

        const { svg } = await mermaid.render(
          `mermaid-${Math.random().toString(36).slice(2, 9)}`,
          code,
        );

        if (!isMounted || !containerRef.current) return;

        containerRef.current.innerHTML = svg;
      } catch {
        if (!isMounted || !containerRef.current) return;

        containerRef.current.innerHTML =
          '<div class="text-xs text-red-600 dark:text-red-400">Mermaid の描画中にエラーが発生しました。</div>';
      }
    };

    void renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [code]);

  return (
    <div
      ref={containerRef}
      className="min-h-24 w-full overflow-x-auto rounded-lg bg-white/70 p-3 text-sm dark:bg-zinc-900/80"
    />
  );
}


