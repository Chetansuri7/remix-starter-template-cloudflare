import React from "react";
import { Section } from "../shared/Section";

const MODELS = [
	{
		family: "Gemini",
		icon: <IconGemini />,
		names: ["Gemini 2.0 Flash", "Gemini 2.5 Flash", "Gemini 2.5 Pro"],
		color: "from-blue-500/20 to-cyan-500/20",
	},
	{
		family: "GPT",
		icon: <IconGPT />,
		names: ["GPT-4o", "GPT-4 Turbo", "GPT-3.5 Turbo"],
		color: "from-emerald-500/20 to-green-500/20",
	},
	{
		family: "Llama",
		icon: <IconLlama />,
		names: ["Llama-3 70B", "Llama-2 70B"],
		color: "from-orange-500/20 to-yellow-500/20",
	},
	{
		family: "Claude",
		icon: <IconClaude />,
		names: ["Claude 3 Opus", "Claude 3 Sonnet", "Claude 3 Haiku"],
		color: "from-purple-500/20 to-violet-500/20",
	},
	{
		family: "DeepSeek",
		icon: <IconDeepSeek />,
		names: ["DeepSeek-VL", "DeepSeek LLM"],
		color: "from-red-500/20 to-pink-500/20",
	},
	{
		family: "Additional Models",
		icon: <IconMore />,
		names: ["Mistral 7B", "Mixtral 8x22B", "Phi-3-mini", "Qwen-2 72B"],
		color: "from-gray-500/20 to-slate-500/20",
	},
];

export function Models() {
	return (
		<Section
			id="models"
			className="flex flex-col items-center text-center"
			style={{ maxWidth: "90rem" }}
		>
			<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
				Explore Available AI Models
			</h2>
			<p className="text-muted-foreground mb-12 text-lg max-w-2xl">
				Access industry-leading language models—all in one simple interface.
			</p>
			<div className="w-full flex justify-center mb-6">
				<div className="w-full max-w-6xl">
					<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
						{MODELS.map((m) => (
							<div
								key={m.family}
								className="group flex flex-col items-start gap-5 rounded-2xl p-12 bg-background/95 border border-border/60 shadow-md transition-all duration-300 hover:shadow-lg hover:border-border/80 hover:scale-[1.03] relative overflow-hidden"
							>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-20 transition-opacity duration-300 group-hover:opacity-30`}
								/>
								<div className="relative z-10 flex items-center gap-4 w-full">
									<span className="text-primary bg-primary/10 p-3 rounded-xl">
										{m.icon}
									</span>
									<h3 className="font-semibold text-2xl">{m.family}</h3>
								</div>
								<div className="relative z-10 flex flex-wrap gap-3">
									{m.names.map((name) => (
										<span
											key={name}
											className="rounded-full bg-background/90 text-base px-5 py-2 border border-border/60 font-medium shadow"
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
			<div className="text-sm text-muted-foreground mt-4 font-medium">
				...and more models available on the Chat page
			</div>
		</Section>
	);
}

// Model family icons
function IconGemini() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l4.8 2.4L12 10l-4.8-2.4L12 5z" />
		</svg>
	);
}

function IconGPT() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.78.78 0 0 0 .78 0l5.843-3.369v2.332a.074.074 0 0 1-.028.057l-4.832 2.795a4.504 4.504 0 0 1-6.153-1.645zm-.617-8.908a4.476 4.476 0 0 1 2.34-1.973l-.004.161v5.517a.776.776 0 0 0 .389.676l5.843 3.37-2.02 1.168a.076.076 0 0 1-.066.004l-4.831-2.795a4.504 4.504 0 0 1-1.65-6.128zm16.242 3.914l-5.843-3.37 2.02-1.167a.07.07 0 0 1 .066-.004l4.832 2.791a4.484 4.484 0 0 1 1.65 6.132 4.48 4.48 0 0 1-2.34 1.973v-5.677a.78.78 0 0 0-.385-.678zm2.259-3.914a4.476 4.476 0 0 1 .535 3.019l-.142-.086-4.779-2.758a.784.784 0 0 0-.784 0L10.471 13v-2.337a.07.07 0 0 1 .028-.056l4.832-2.796a4.504 4.504 0 0 1 6.153 1.65zM9.896 16.99l-2.02-1.167a.074.074 0 0 1-.037-.057V10.18a4.5 4.5 0 0 1 7.37-3.454l-.142.085-4.778 2.758a.795.795 0 0 0-.393.682zm1.251-5.203l2.6-1.5 2.599 1.5v3l-2.6 1.5-2.599-1.5z" />
		</svg>
	);
}

function IconLlama() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path d="M19 2H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zm-7 15a1 1 0 0 1-1-1v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-1 1z" />
		</svg>
	);
}

function IconClaude() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
			<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" />
		</svg>
	);
}

function IconDeepSeek() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
		</svg>
	);
}

function IconMore() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.83 0-1.5-.67-1.5-1.5S11.17 14 12 14s1.5.67 1.5 1.5S12.83 17 12 17zm1.5-4.5h-3v-1h3v1zm0-3h-3v-1h3v1z" />
		</svg>
	);
}