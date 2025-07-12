import { useEffect } from "react";
import { AppBar } from "~/components/layout/AppBar";
import { Footer } from "~/components/layout/Footer";
import { useAppBarContext } from "~/contexts/AppBarContext";

export default function Contact() {
  const { setNavMode } = useAppBarContext();

  useEffect(() => {
    setNavMode('page');
  }, [setNavMode]);

  return (
    <>
      <AppBar />
      <main className="min-h-[60vh] py-14 px-4 md:px-0 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="text-base leading-relaxed space-y-5">
          <p>
            Have questions, feedback, or partnership inquiries? Fill out the form below or reach out using the details provided.
          </p>
          <form
            className="space-y-4"
            method="post"
            action="mailto:support@krivilak.ai"
            encType="text/plain"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border rounded px-3 py-2"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border rounded px-3 py-2"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-background px-4 py-2 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
          <p>
            Alternatively, you can email us directly at{" "}
            <a
              href="mailto:support@krivilak.ai"
              className="text-primary underline"
            >
              support@krivilak.ai
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}