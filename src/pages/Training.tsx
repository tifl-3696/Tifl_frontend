
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Training = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-6">Training Programs</h1>
        <p className="text-lg">Our training programs and professional development resources will be available here soon.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
