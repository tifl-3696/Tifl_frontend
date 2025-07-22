
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary">About TIFL</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              TIFL (Tools for Innovative Family Learning) is dedicated to improving early childhood development (ECD) outcomes in Pakistan through innovative digital solutions, community engagement, and evidence-based approaches.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that the first five years of a child's life are crucial for their future health, education, and well-being. By equipping parents and caregivers with the right knowledge and tools, we can help create a brighter future for Pakistan's children.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Milestone Tracker</h3>
                <p className="text-gray-700">Track your child's developmental progress with our personalized milestone tracker, get insights and activities tailored to their age and development stage.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Health Assessment Tools</h3>
                <p className="text-gray-700">Get basic assessments for common childhood health issues through our AI-assisted technology, helping you determine when professional medical care is needed.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Expert Consultations</h3>
                <p className="text-gray-700">Connect with pediatric specialists and early childhood development experts for personalized guidance and support.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Resources & Workshops</h3>
                <p className="text-gray-700">Access a wide range of educational materials, participate in workshops, and learn from our community of parents and experts.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">Our Team</h2>
            <p className="text-gray-700 mb-4">
              TIFL brings together experts in pediatrics, early childhood education, technology, and public health. Our multidisciplinary team is committed to creating accessible, culturally-relevant solutions for Pakistani families.
            </p>
            <p className="text-gray-700">
              We collaborate with government agencies, NGOs, and healthcare providers to ensure our platform meets the highest standards and reaches those who need it most.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
