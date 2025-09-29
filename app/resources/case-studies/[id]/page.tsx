// import Image from "next/image";
import { notFound } from "next/navigation";
// import partners from "@/data/partners.json";
// import products from "@/data/products.json";
import caseStudies from "@/data/case-study.json";
// import { HiOutlineChip } from "react-icons/hi";
// import { Partner } from "@/utils/interface";

// Type definitions
// interface Feature {
//   title: string;
//   description: string;
//   image?: string;
// }

// interface Benefit {
//   title: string;
//   description: string;
//   image?: string;
// }

// interface SuccessStory {
//   name: string;
//   logo: string;
// }

interface CaseStudyProps {
  id: string | number;
  name: string;
  title?: string;
  // description?: string;
  // heroImage?: string;
  // features?: Feature[];
  // benefits?: Benefit[];
  // successStories?: SuccessStory[];
}

interface PageProps {
  params: {
    id: string;
  };
}

// Generate static params for all products (replaces getStaticPaths)
export async function generateStaticParams() {
  return (caseStudies as CaseStudyProps[]).map((caseStudy) => ({
    id: caseStudy.id.toString(),
  }));
}

// Generate metadata for SEO (optional)
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const caseStudy = (caseStudies as CaseStudyProps[]).find(
    (item) => item.id.toString() === resolvedParams.id
  );

  if (!caseStudy) {
    return {
      title: "Casestudy Not Found",
    };
  }

  return {
    title: `${caseStudy.name} | Fasyl`,
    description: caseStudy.title || `${caseStudy.name}`,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;

  // Find the product with the matching ID
  const caseStudy = (caseStudies as CaseStudyProps[]).find(
    (item) => item.id.toString() === resolvedParams.id
  );

  // If product not found, trigger 404
  if (!caseStudy) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-500 text-white">
        <div className="px-5 md:px-10 pt-16 pb-15">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="title-tip text-secondary-500 mb-6">Case Study</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {caseStudy?.name}
              </h1>
              {/* <p className="text-gray-300 text-lg mb-8">
                {caseStudy?.title || ""}
              </p> */}
              {/* <button className="btn btn-secondary">Schedule a call</button> */}
            </div>

            {/* <div className="relative">
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
            </div> */}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="bg-secondary-500 px-5 py-12">
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
      </section> */}

      {/* Solutions Section */}
      {/* <section className="px-5 py-12">
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
      </section> */}
    </div>
  );
}
