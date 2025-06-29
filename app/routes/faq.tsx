import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

export default function FAQ() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] py-14 px-4 md:px-0 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-7 text-base leading-relaxed">
          <div>
            <strong>What is KriviLak AI?</strong>
            <p>
              KriviLak AI is a unified chat application that lets you use multiple AI providers like ChatGPT, Gemini, Meta, and more within a single interface.
            </p>
          </div>
          <div>
            <strong>How much does it cost?</strong>
            <p>
              We offer a Starter (free) plan and paid Pro/Pro Plus options. See our Pricing section for details.
            </p>
          </div>
          <div>
            <strong>How is my data secured?</strong>
            <p>
              We prioritize your privacy and data security. Please read our Privacy Policy for more information.
            </p>
          </div>
          <div>
            <strong>How do I contact support?</strong>
            <p>
              Reach out via our contact page or through our support email listed in the footer.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}