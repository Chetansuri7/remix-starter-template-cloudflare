import { Section } from "../shared/Section";
import { Button } from "../ui/button";
import { AI_CHAT_URL } from "../../lib/constants";

export function CTA() {
  return (
    <Section
      id="cta"
      className="text-center flex flex-col items-center justify-center py-20"
      style={{ maxWidth: "90rem" }}
    >
      <div className="w-full max-w-4xl rounded-2xl bg-card/70 backdrop-blur-xl backdrop-saturate-150 border border-border/20 py-16 px-6 md:px-12 flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Start Using All Top AI Models, Now.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Sign up once. No more switching accounts or losing context. Get
          started in less than 60 seconds with total privacy.
        </p>
        <Button
          asChild
          size="lg"
          className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <a href={AI_CHAT_URL} target="_blank" rel="noopener noreferrer">
            Get Started Free
          </a>
        </Button>
      </div>
    </Section>
  );
}
