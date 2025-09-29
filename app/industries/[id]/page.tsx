import Image from "next/image";
import { notFound } from "next/navigation";
// import partners from "@/data/partners.json";
import industries from "@/data/industries.json";
// import { PiCaretRightLight } from "react-icons/pi";
import { Partner } from "@/utils/interface";

// Type definitions
interface Solution {
  title: string;
  description: string;
  image?: string;
}

interface Industry {
  id: string | number;
  name: string;
  title?: string;
  description?: string;
  heroImage?: string;
  solutions?: Solution[];
  successStories?: Partner[];
}

interface PageProps {
  params: {
    id: string;
  };
}

// Generate static params for all industries (replaces getStaticPaths)
export async function generateStaticParams() {
  return (industries as Industry[]).map((industry) => ({
    id: industry.id.toString(),
  }));
}

// Generate metadata for SEO (optional)
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const industry = (industries as Industry[]).find(
    (item) => item.id.toString() === resolvedParams.id
  );

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.name} Solutions | Fasyl`,
    description:
      industry.description ||
      `Digital solutions for the ${industry.name} industry`,
  };
}

export default async function IndustriesPage({ params }: PageProps) {
  const resolvedParams = await params;

  // Find the industry with the matching ID
  const industry = (industries as Industry[]).find(
    (item) => item.id.toString() === resolvedParams.id
  );

  // If industry not found, trigger 404
  if (!industry) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-500 text-white">
        <div className="px-5 md:px-10 pt-16 pb-15">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="title-tip text-secondary-500 mb-6">
                {industry.name}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {industry.title ||
                  `Enabling Efficient Solutions for ${industry.name}`}
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                {industry.description ||
                  `Fasyl has worked with the ${industry.name.toLowerCase()} sector to develop and deploy
                robust digital platforms that enable seamless service delivery
                and optimize internal workflows. Through strategic collaboration
                with industry leaders, Fasyl has helped digitize manual
                processes, enhance transparency, and improve access to essential
                services. Our solutions are built to meet regulatory standards while ensuring scalability, security, and
                ease of use.`}
              </p>
              <button className="btn btn-secondary">Schedule a call</button>
            </div>

            <div className="relative">
              <div className="w-full bg-gray-700 flex items-center justify-center max-w-[554px] h-[700px] ml-auto clip-Card clip-Card-left-brand">
                {industry.heroImage && (
                  <Image
                    src={industry.heroImage}
                    height={700}
                    width={554}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-secondary-500 px-5 py-12">
        <h3 className="text-center text-2xl font-semibold mb-2">
          Our Success Stories
        </h3>

        <div className="flex justify-center items-center space-x-2.5">
          {(industry.successStories as Partner[]).map(
            (item: Partner, index: number) => (
              <div key={index} className="py-4">
                <Image
                  src={item.logo}
                  height={40}
                  width={100}
                  alt={item.name}
                  className="h-15 object-contain mx-auto"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="px-5 py-12">
        <h3 className="text-center text-3xl font-semibold mb-12">
          Solutions for {industry.name}
        </h3>

        <div className="grid md:grid-cols-3 text-white gap-5">
          {industry.solutions &&
            industry.solutions.map((solution: Solution, index: number) => (
              <div
                key={index}
                className="p-6 bg-[#00162D] space-y-4 rounded-2xl"
              >
                <div className="h-[260px] w-full">
                  <Image
                    src={solution.image || "/images/office.jpg"}
                    height={688}
                    width={555}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="title-tip-white text-lg text-white">
                  {solution.title}
                </h4>
                <p className="text-sm leading-[150%]">{solution.description}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
