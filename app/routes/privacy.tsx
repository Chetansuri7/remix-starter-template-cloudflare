import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] py-14 px-4 md:px-0 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="text-base leading-relaxed space-y-5">
          <p>
            [Your privacy policy content goes here. This is where you describe what data is collected, how it is used, your cookie policies (if any), and user rights.]
          </p>
          <p>
            Replace this placeholder with your actual content when your policies are drafted.
          </p>
          <p>
            For questions regarding privacy, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}