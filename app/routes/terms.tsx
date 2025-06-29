import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] py-14 px-4 md:px-0 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        <div className="text-base leading-relaxed space-y-5">
          <p>
            [Your terms and conditions content goes here. This page uses the same header and footer as the landing page, with a centered single-column layout for readability.]
          </p>
          <p>
            Replace this placeholder with your actual terms. You may include sections as needed for Acceptable Use, Limitations of Liability, Service Levels, etc.
          </p>
          <p>
            For questions, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}