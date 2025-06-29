import React from "react";
import { Section } from "../shared/Section";

const MODELS = [
  { family: "Gemini", names: ["Gemini 2.0 Flash", "Gemini 2.5 Flash", "Gemini 2.5 Pro"] },
  { family: "GPT", names: ["GPT-4o", "GPT-4 Turbo", "GPT-3.5 Turbo"] },
  { family: "Llama", names: ["Llama-3 70B", "Llama-2 70B"] },
  { family: "Claude", names: ["Claude 3 Opus", "Claude 3 Sonnet", "Claude 3 Haiku"] },
  { family: "DeepSeek", names: ["DeepSeek-VL", "DeepSeek LLM"] },
  { family: "Additional Models", names: ["Mistral 7B", "Mixtral 8x22B", "Phi-3-mini", "Qwen-2 72B"] }
];

export function Models() {
  return (
    <Section
      id="models"
      className="flex flex-col items-center text-center"
      style={{ maxWidth: "90rem" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Explore Available AI Models
      </h2>
      <p className="text-muted-foreground mb-8 text-base max-w-2xl">
        Access industry-leading language models—all in one simple interface.
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl rounded-2xl bg-card border border-border shadow-md py-10 px-4 md:px-12">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {MODELS.map((m) => (
              <div key={m.family} className="flex flex-col items-start gap-1 bg-background/70 rounded-xl p-5 min-h-[108px]">
                <div className="font-semibold mb-2 text-primary">{m.family}</div>
                <div className="flex flex-wrap gap-2">
                  {m.names.map((name) => (
                    <span
                      key={name}
                      className="rounded-full bg-background text-xs px-3 py-1 border border-border font-medium"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-4">
        ...and more. Check the complete model list on the Chat page.
      </div>
    </Section>
  );
}