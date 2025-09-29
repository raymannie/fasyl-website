import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import { HiOutlineChip } from "react-icons/hi";

// Type definitions
interface Feature {
  title: string;
  description: string;
  image?: string;
}

interface Benefit {
  title: string;
  description: string;
  image?: string;
}

interface SuccessStory {
  name: string;
  logo: string;
}

interface Product {
  id: string | number;
  name: string;
  title?: string;
  description?: string;
  heroImage?: string;
  features?: Feature[];
  benefits?: Benefit[];
  successStories?: SuccessStory[];
}

interface PageProps {
  params: {
    id: string;
  };
}

// Generate static params for all products (replaces getStaticPaths)
export async function generateStaticParams() {
  return (products as Product[]).map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate metadata for SEO (optional)
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = (products as Product[]).find(
    (item) => item.id.toString() === resolvedParams.id
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} Solutions | Fasyl`,
    description: product.description || `Digital solutions for ${product.name}`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;

  // Find the product with the matching ID
  const product = (products as Product[]).find(
    (item) => item.id.toString() === resolvedParams.id
  );

  // If product not found, trigger 404
  if (!product) {
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
                Product - {product.name}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {product.title}
              </h1>
              <div
                className="text-gray-300 text-lg mb-8 content"
                dangerouslySetInnerHTML={{ __html: product.description || "" }}
              ></div>
              <button className="btn btn-secondary">Schedule a call</button>
            </div>

            <div className="relative">
              <div className="w-full bg-gray-700 flex items-center justify-center max-w-[554px] h-[700px] ml-auto clip-Card clip-Card-left-brand">
                {product.heroImage && (
                  <Image
                    src={product.heroImage}
                    height={700}
                    width={554}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-5 py-20">
        <p className="title-tip-brand mb-4 flex items-center justify-center">
          {product.name}
        </p>
        <h3 className="text-center text-5xl mb-20 font-medium">
          Features of {product.name}
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          {product.features?.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="p-6 bg-secondary-500 space-y-6 rounded-2xl"
            >
              <div className="h-[350px] w-full">
                <Image
                  src={feature.image || "/images/office.jpg"}
                  height={688}
                  width={555}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="title-tip-brand font-medium text-2xl text-brand-500">
                {feature.title}
              </h4>
              <p className="text-sm leading-[150%]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="px-5 py-30">
        <h3 className="text-center text-lg font-medium mb-4">
          Our Success Stories
        </h3>

        <div className="flex justify-center items-center space-x-6">
          {product.successStories?.map((story: SuccessStory, index: number) => (
            <div key={index} className="py-4">
              <Image
                src={story.logo}
                height={40}
                width={100}
                alt={story.name}
                className="h-15 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-5 py-12">
        <h3 className="text-center text-5xl mb-20 font-medium">
          Benefits of {product.name}
        </h3>
        <div className=" inline-flex flex-wrap  justify-center gap-5 text-white">
          {product.benefits?.map((benefit: Benefit, index: number) => (
            <div
              key={index}
              className="p-6 md:max-w-[30%] bg-brand-500 space-y-4 rounded-2xl"
            >
              <div className="h-[180px] w-full">
                <div className="w-12 h-12 bg-secondary-500 text-brand-500 flex items-center justify-center rounded-xl">
                  <HiOutlineChip className="text-2xl" />
                </div>
              </div>
              <h4 className="font-medium text-lg text-secondary-500">
                {benefit.title}
              </h4>
              <p className="text-sm leading-[150%]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
