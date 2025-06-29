import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const faqData = [
  {
    id: "q1",
    question: "What is KriviLak AI?",
    answer:
      "KriviLak AI is a unified chat interface that allows you to interact with multiple leading Large Language Models (LLMs) like OpenAI's GPT models, Google's Gemini, Anthropic's Claude, and more, all from a single platform. No more switching tabs!",
  },
  {
    id: "q2",
    question: "How is KriviLak AI different from using ChatGPT or Gemini directly?",
    answer:
      "While direct platforms are great, KriviLak AI offers convenience by bringing multiple models under one roof. Key differences include: \n - **Model Switching:** Easily switch AI models within the same chat conversation. \n - **Response Comparison:** Compare responses from different models side-by-side for the same prompt. \n - **Unified History:** All your cross-model conversations are stored in one place. \n - **Consistent UI:** A familiar interface regardless of the underlying model.",
  },
  {
    id: "q3",
    question: "Which AI models can I access through KriviLak AI?",
    answer:
      "You can access top language models, including: OpenAI GPT-4o, GPT-4 Turbo, Google Gemini 1.5 Pro, Anthropic Claude 3 Opus and Sonnet, and more. We're always adding new integrations!",
  },
  {
    id: "q4",
    question: "How do I choose or switch between models in KriviLak AI?",
    answer:
      "Within the KriviLak AI chat interface, you'll find a dropdown menu or a similar selection mechanism (usually near the input area or chat header) that allows you to select the desired AI model for your next message or the entire conversation.",
  },
  {
    id: "q5",
    question: "Is KriviLak AI free to use?",
    answer:
      "KriviLak AI offers a free tier with limited access to certain models and usage caps. For more extensive use and access to premium models, we have various subscription plans available. Please check our Pricing page for details.",
  },
  {
    id: "q6",
    question: "How is my conversation data handled by KriviLak AI? Is it private?",
    answer:
      "Your privacy is paramount. KriviLak AI acts as an intermediary. Your prompts are sent securely to the respective AI provider (OpenAI, Google, Anthropic, etc.) you select. We only store your conversation history for your convenience within your account. We do **not** use your conversation data to train any models. Please refer to our detailed Privacy Policy for more information.",
  },
  {
    id: "q7",
    question: "Can I compare responses from different models in KriviLak AI?",
    answer:
      "Yes! This is one of the core features of KriviLak AI. You can submit a prompt and request responses from multiple selected models simultaneously to easily compare their outputs and choose the best one for your needs.",
  },
  {
    id: "q8",
    question: "What should I do if I encounter an error with KriviLak AI?",
    answer:
      "First, try refreshing the page or selecting a different AI model, as the issue might be temporary or specific to one provider's API. If the problem persists, please check our status page (if available) or contact our support team via the 'Help' or 'Contact Us' section, providing details about the error message and what you were doing.",
  },
];

export function FAQ() {
  return (
    <div id="faq" className="py-12 px-4 sm:px-6 md:px-10 lg:px-16 flex justify-center">
      <div className="w-full max-w-6xl rounded-2xl bg-card border border-border shadow-md py-10 px-4 md:px-12 flex justify-center">
        <Card className="w-full border-none rounded-2xl bg-transparent p-0 shadow-none">
          <CardHeader className="text-center px-0 pt-0 pb-3">
            <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </CardTitle>
            <CardDescription className="mt-2 text-base text-muted-foreground">
              Find answers to common questions about KriviLak AI.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="border-b-border">
                  <AccordionTrigger className="text-base font-medium text-left hover:no-underline py-3 text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground whitespace-pre-line leading-relaxed pt-1 pb-3">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}