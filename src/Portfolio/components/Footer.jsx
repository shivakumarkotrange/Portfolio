import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { profileData } from "../data/profileData";

export function Footer({ navItems, scrollToSection }) {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-white/10 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-xl tracking-wider mb-4">
              {profileData[0].name}
            </h3>
            <p className="text-white/60 text-sm">
              Creating exceptional digital experiences with passion and
              precision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80">Quick Links</h4>
            <div className="space-y-2">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={profileData[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
              >
                <Github className="w-4 h-4 text-white/70 group-hover:text-cyan-400" />
              </a>
              <a
                href={profileData[0].linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
              >
                <Linkedin className="w-4 h-4 text-white/70 group-hover:text-cyan-400" />
              </a>
              <a
                href={`mailto:${profileData[0].email}`}
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
              >
                <Mail className="w-4 h-4 text-white/70 group-hover:text-cyan-400" />
              </a>
              <a
                href={profileData[0].website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
              >
                <Globe className="w-4 h-4 text-white/70 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2025 {profileData[0].name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
