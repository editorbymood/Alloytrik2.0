import { Github, Linkedin, Mail } from 'lucide-react';
import InteractiveButton from '../ui/InteractiveButton';
import LiquidSocialIcon from '../ui/LiquidSocialIcon';
import XIcon from '../ui/XIcon';
import Logo from '../ui/Logo';

const Footer = () => {
  // 3D Depth Text Effect Logic (based on Framer component)
  const shadowAngle = 45; // degrees
  const shadowOffset = 40; // px
  const shadowColor = '#cc292b'; // Matte Red

  const angleRad = (shadowAngle * Math.PI) / 180;
  const offsetX = Math.cos(angleRad) * shadowOffset;
  const offsetY = Math.sin(angleRad) * shadowOffset;

  const textShadowArray = [];
  for (let i = 1; i <= shadowOffset; i++) {
    const x = (offsetX * i) / shadowOffset;
    const y = (offsetY * i) / shadowOffset;
    textShadowArray.push(`${x}px ${y}px 0px ${shadowColor}`);
  }
  const depthTextShadow = textShadowArray.join(', ');

  return (
    <footer className="bg-transparent border-t border-border pt-32 pb-0 relative overflow-hidden">

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Logo className="w-10 h-10 text-foreground" />
              <span className="text-2xl tracking-tight text-foreground" style={{ fontWeight: 600, letterSpacing: "-0.5px" }}>Alloytrik</span>
            </div>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-xs mb-8">
              A private network for elite developers and designers.
              We build the future with zero compromises.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { name: "GitHub", icon: <Github size={20} />, href: "#" },
                { name: "X", icon: <XIcon size={20} />, href: "https://x.com/alloytrik" },
                { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/alloytrik/" }
              ].map((social, idx) => (
                <LiquidSocialIcon
                  key={idx}
                  name={social.name}
                  icon={social.icon}
                  href={social.href}
                />
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 tracking-tight">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Architecture</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Intelligence</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Web3 Protocols</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Open Source</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 tracking-tight">Ecosystem</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Community Feed</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Member Directory</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 tracking-tight">Get in Touch</h4>
            <div className="flex items-center space-x-3 mb-6">
              <Mail size={16} className="text-muted-foreground" />
              <a href="mailto:hello@alloytrik.network" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                hello@alloytrik.network
              </a>
            </div>
            <InteractiveButton href="#">
              Request Invite
            </InteractiveButton>
          </div>
        </div>

      </div>

      {/* Massive Typography - 3D Depth Effect */}
      <div className="w-full flex justify-center items-end outline-none px-4 sm:px-8 pt-8 pb-16">
        {/* We add a specific -ml-[20px] offset to perfectly compensate for the 40px right-skewed 3D shadow, ensuring visual centering. */}
        <h1
          className="text-[14vw] md:text-[15vw] xl:text-[16.5vw] leading-[0.7] font-black whitespace-nowrap select-none tracking-tighter text-foreground -ml-[20px]"
          style={{ textShadow: depthTextShadow }}
        >
          ALLOYTRIK
        </h1>
      </div>

      {/* Bottom Bar - Moved under the typography */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-8">
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} AlloyTrik Network. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
