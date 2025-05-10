import React from 'react';
import { Award, Clock, Shield, Scale, LucideIcon } from 'lucide-react';
interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white  shadow-md p-4 h-full border-l-4 border-black/20">
            <div className="flex items-center mb-2">
                <div className="p-2 bg-main/10  mr-3">
                    <Icon className="text-main" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default function UnicoLegacySection() {
    const features: Feature[] = [
        {
            icon: Award,
            title: "Quality Excellence",
            description: "Delivering the highest quality EPCC services with precision and expertise across the Oil & Gas industry."
        },
        {
            icon: Shield,
            title: "Safety First",
            description: "Maintaining rigorous safety standards that exceed industry requirements in all our operations."
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description: "Consistent track record of completing complex projects on schedule and within budget constraints."
        },
        {
            icon: Scale,
            title: "Reliability",
            description: "Building lasting partnerships through dependable service and unwavering commitment to client satisfaction."
        }
    ];

    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-1">
                    <p className="text-header-sm md:text-header-md font-medium text-center  ">
                        Our Legacy
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mb-10   p-6">
                    <p className="text-desc-lg leading-relaxed text-center  font-normal text-textColor">
                        Over the years, <span className='text-main font-bold'>Unico</span> petroleum developed a reputation across the region
                        as a reliable provider of <b className='mx-1'>EPCC</b> services in the Oil and Gas industry.
                        Its commitment to the highest standards of quality, safety, and service level has been evident
                        in the variety of projects it has completed on time and within budget and continues to be
                        at the heart of the company vision for the future.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}