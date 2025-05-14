import React from 'react';
import { Award, Clock, Shield, Scale, LucideIcon } from 'lucide-react';
import CardWithAnimatedBorder from './../../ui/card/card';
import SectionContainer from '@/components/styles-wrappers/SectionContainer';
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
        <SectionContainer title='mock'            description= "Building lasting partnerships through dependable service and unwavering commitment to client satisfaction">
          
          <div className='flex gap-2'>
            
             <CardWithAnimatedBorder imageUrl="/images/hero-img/slider4.jpg" altText='img' title="web sites"
                description="A modern fashonisstaaaa " />
                            <CardWithAnimatedBorder imageUrl="/images/hero-img/slider4.jpg" altText='img' title="web sites"
                description="A modern fashonisstaaaa " />

            <CardWithAnimatedBorder imageUrl="/images/hero-img/slider4.jpg" altText='img' title="web sites"
                description="A modern fashonisstaaaa " />

            
            </div> 
        </SectionContainer>
    );
}