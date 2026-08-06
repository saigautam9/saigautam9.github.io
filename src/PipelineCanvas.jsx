import { useEffect, useRef } from "react";

// Ambient medallion-pipeline animation: particles move left to right through
// bronze → silver → gold lanes, changing color as they clear each stage gate.
// Pauses entirely under prefers-reduced-motion (renders one static frame).

const LANES = [
  { name: "BRONZE", y: 0.26, color: "#B0784A" },
  { name: "SILVER", y: 0.53, color: "#93A1AB" },
  { name: "GOLD", y: 0.8, color: "#C09A2E" },
];

const GATES = [
  { at: 0.3, label: "INGEST" },
  { at: 0.56, label: "MODEL" },
  { at: 0.82, label: "SERVE" },
];

const LINE = "#E4E9ED";
const MUTED = "#8B98A5";
const LABEL_W = 62;

export default function PipelineCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dots = [];
    let frame = 0;

    function seed() {
      dots = [];
      const perLane = Math.max(5, Math.round(width / 58));
      LANES.forEach((_, lane) => {
        for (let i = 0; i < perLane; i++) {
          dots.push({
            lane,
            x: LABEL_W + Math.random() * Math.max(1, width - LABEL_W),
            speed: 0.18 + Math.random() * 0.42 + lane * 0.12,
            radius: 1.1 + Math.random() * 1.4,
            drift: (Math.random() - 0.5) * 6,
          });
        }
      });
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.font =
        '10px ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
      ctx.textBaseline = "middle";

      // stage gates
      ctx.strokeStyle = LINE;
      ctx.lineWidth = 1;
      GATES.forEach((gate) => {
        const x = Math.round(width * gate.at) + 0.5;
        ctx.beginPath();
        ctx.moveTo(x, height * 0.1);
        ctx.lineTo(x, height * 0.94);
        ctx.stroke();
        ctx.fillStyle = MUTED;
        ctx.textAlign = "left";
        ctx.fillText(gate.label, x + 6, height * 0.08);
      });

      // lane rules + labels
      LANES.forEach((lane) => {
        const y = Math.round(height * lane.y) + 0.5;
        ctx.strokeStyle = LINE;
        ctx.beginPath();
        ctx.moveTo(LABEL_W, y);
        ctx.lineTo(width, y);
        ctx.stroke();
        ctx.fillStyle = MUTED;
        ctx.textAlign = "left";
        ctx.fillText(lane.name, 0, y);
      });

      // particles
      const firstGate = width * GATES[0].at;
      dots.forEach((dot) => {
        const lane = LANES[dot.lane];
        const y = height * lane.y + dot.drift;
        const cleared = dot.x > firstGate;

        ctx.fillStyle = cleared ? lane.color : MUTED;
        ctx.globalAlpha = cleared ? 0.9 : 0.4;
        ctx.beginPath();
        ctx.arc(dot.x, y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        if (!reduced) {
          dot.x += dot.speed;
          if (dot.x > width + 4) {
            dot.x = LABEL_W;
            dot.drift = (Math.random() - 0.5) * 6;
          }
        }
      });

      if (!reduced) frame = requestAnimationFrame(draw);
    }

    const observer = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    observer.observe(canvas);

    resize();
    draw();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <figure className="mt-14 overflow-hidden rounded-lg border border-line bg-white">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          Medallion lakehouse
        </span>
        <span className="text-xs text-muted">
          Raw data → engineering → analysis → ML → business insight
        </span>
      </figcaption>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Animated diagram of a medallion data pipeline: records flow through bronze, silver, and gold layers across ingest, model, and serve stages."
        className="block h-[120px] w-full px-5 sm:h-[150px]"
      />
    </figure>
  );
}
