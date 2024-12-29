import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Avator from "@/components/Avatar";
import Image from "next/image";
import avator1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avator2 from "@/assets/images/avatar-florence-shaw.jpg"
import avator3 from "@/assets/images/avatar-lula-meyers.jpg"
import avator4 from "@/assets/images/avatar-owen-garcia.jpg"
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
               <div className="flex justify-center">
               <Tag>Features</Tag>
               </div>
               <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                Where power meets{" "} 
                <span className="text-lime-400">simplicity</span>
               </h2>
               <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                <FeatureCard 
                  title="Real-time Collaboration" 
                  description="Work together seamlessy with conflict-free team
                            editing"
                  className="md:col-span-2 lg:col-span-1 group">
                  <div className="aspect-video flex items-center justify-center">
                    <Avator className="z-40">
                        <Image src={avator1} alt="avator1" className="rounded-full"/>
                    </Avator>
                    <Avator className="-ml-6 border-indigo-500 z-30">
                        <Image src={avator2} alt="avator2" className="rounded-full"/>
                    </Avator>
                    <Avator className="-ml-6 border-amber-500 z-20">
                        <Image src={avator3} alt="avator1=3" className="rounded-full"/>
                    </Avator>
                    <Avator className="-ml-6 border-transparent group-hover:border-green-500 transition ">
                        <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                            <Image src={avator4} alt="avator4"
                             className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"/>
                            {Array.from({length: 3}).map((_, i) => (
                                <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                            ))}
                        </div>
                    </Avator>
                  </div>              
                </FeatureCard>
                <FeatureCard 
                  title="Interactive Prototyping" 
                  description="Engage your clients with prototypes that react to user action" className="md:col-span-2 lg:col-span-1 group">
                  <div className="aspect-video flex items-center justify-center">
                    <p className="text-4xl font-extrabold text-white/20  group-hover:text-white/10 transition duration-500 text-center">
                        We&apos;ve achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                            <span>incredible</span>
                            <video 
                              src="/assests/gif-incredible.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" 
                             />
                            </span>{" "}
                            growth this year
                    </p>
                  </div>  
                </FeatureCard>
                <FeatureCard 
                  title="Keyboard Quick Actions" 
                  description="Powerful commands to help you create designs 
                  more quickly" className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group">
                  <div className="aspect-video flex items-center justify-center gap-2">
                    <Key className="w-28 outline outline-2 outline-offset-4 
                    outline-transparent group-hover:outline-lime-400
                    transiton-all duration-500 group-hover:translate-y-1 delay-150">
                        shift
                    </Key>
                    <Key className="outline outline-2 outline-offset-4 
                    outline-transparent group-hover:outline-lime-400
                    transiton-all duration-500 group-hover:translate-y-1 delay-150">
                        alt
                    </Key>
                    <Key className="outline outline-2 outline-offset-4 
                    outline-transparent group-hover:outline-lime-400
                    transiton-all duration-500 group-hover:translate-y-1 delay-150">
                        C
                    </Key>
                  </div>  
                </FeatureCard>
               </div>
               <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {features.map((feature) => (
                    <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-2 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transiton duration-500">&#10038;</span>
                        <span className="font-medium md:text-lg">{feature}</span>
                    </div>

                ))}
               </div>
            </div>
        </section>
    );
}