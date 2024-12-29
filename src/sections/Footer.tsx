import Image from "next/image";
import LogoIcon from "@/assets/images/logo.svg"

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        
        <section className="py-16 overflow-hidden ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div>
                      <Image src={LogoIcon} alt="logo"/>
                    </div>
                    <div>
                      <nav className="flex gap-6 ">
                        {footerLinks.map((link) => (
                            <a href={link.href} className="text-white/50 text-sm" key={link.label}>{link.label}</a>
                        ))}
                      </nav>
                    </div>
                </div>

            </div>
        </section>
    );
}
