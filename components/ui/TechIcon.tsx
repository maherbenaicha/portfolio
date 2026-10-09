import {
  siAngular, siC, siCplusplus, siCss, siDeepseek, siDocker, siDotnet, siExpress, siFastapi, siFlutter,
  siGit, siGithub, siGnubash, siHtml5, siHuggingface, siJupyter, siKeras, siLinux, siMediapipe,
  siMongodb, siMysql, siN8n, siNextdotjs, siNodedotjs, siNumpy, siOllama, siOpencv, siOpenjdk, siPandas,
  siPostgresql, siPostman, siPython, siPytorch, siReact, siRedis, siRoboflow, siScikitlearn, siSpringboot,
  siSqlite, siStreamlit, siTensorflow, siTypescript, siUltralytics, siWordpress, siJavascript, siLeaflet,
  type SimpleIcon,
} from "simple-icons";

const ICONS: Record<string, SimpleIcon> = {
  "Hugging Face": siHuggingface,
  Ollama: siOllama,
  DeepSeek: siDeepseek,
  TensorFlow: siTensorflow,
  PyTorch: siPytorch,
  "Scikit-learn": siScikitlearn,
  Keras: siKeras,
  OpenCV: siOpencv,
  MediaPipe: siMediapipe,
  YOLOv8: siUltralytics,
  Roboflow: siRoboflow,
  Python: siPython,
  NumPy: siNumpy,
  Pandas: siPandas,
  Jupyter: siJupyter,
  "C/C++": siCplusplus,
  C: siC,
  Java: siOpenjdk,
  HTML5: siHtml5,
  CSS3: siCss,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  React: siReact,
  "Next.js": siNextdotjs,
  Angular: siAngular,
  "Node.js": siNodedotjs,
  Express: siExpress,
  FastAPI: siFastapi,
  "Spring Boot": siSpringboot,
  ".NET": siDotnet,
  Streamlit: siStreamlit,
  Flutter: siFlutter,
  WordPress: siWordpress,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  SQLite: siSqlite,
  MongoDB: siMongodb,
  Redis: siRedis,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  Linux: siLinux,
  Bash: siGnubash,
  Postman: siPostman,
  n8n: siN8n,
  "Leaflet.js": siLeaflet,
};

/** Text monograms for tools without a brand icon. */
const MONOGRAMS: Record<string, string> = {
  Groq: "gq",
  Gemma: "Gm",
  "Llama 3.3": "L3",
  MATLAB: "ML",
  "SQL Server": "SQ",
};

/** Very dark brand colors are invisible on a dark tile — render those in the text color instead. */
function isTooDark(hex: string) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 70;
}

export function TechIcon({ name, size = 22 }: { name: string; size?: number }) {
  const icon = ICONS[name];
  if (icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        role="img"
        aria-hidden="true"
        fill={isTooDark(icon.hex) ? "currentColor" : `#${icon.hex}`}
      >
        <path d={icon.path} />
      </svg>
    );
  }
  const mono = MONOGRAMS[name] ?? name.slice(0, 2);
  return (
    <span
      aria-hidden="true"
      className="inline-grid place-items-center font-mono font-medium text-accent"
      style={{ width: size, height: size, fontSize: size * 0.55 }}
    >
      {mono}
    </span>
  );
}

export function hasTechIcon(name: string) {
  return name in ICONS || name in MONOGRAMS;
}
