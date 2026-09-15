import { SectionAccent } from "@/components/ui/SectionAccent";

const STACK = [
  {
    title: "Programming",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Artificial Intelligence",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLMs", "LLM Fine-Tuning", "Prompt Engineering"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "Spring Boot", "Angular", "FastAPI", "OpenCV", "MediaPipe", "YOLOv8"],
  },
  {
    title: "Databases & Tools",
    items: ["SQL Server", "MySQL", "MongoDB", "Git", "GitHub", "Docker", "Postman", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-20 lg:px-20">
      <SectionAccent label="// stack" position="top-right" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-100 text-3xl font-bold tracking-tight">
            Technical Stack
          </h2>
          <p className="text-slate-400 mt-2 font-mono text-sm">
            Structured by domain for clarity
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK.map((group) => (
            <div key={group.title} className="rounded-2xl glass-card p-6">
              <div className="text-sm font-semibold text-[#94b8d4] mb-4">{group.title}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-[#7b8fa8]/25 bg-[#7b8fa8]/8 text-sm text-[#94b8d4]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
