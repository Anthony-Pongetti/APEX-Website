import React from 'react'
import { ArrowUpIcon, ClipboardListIcon, DocumentTextIcon, LogoutIcon, UserIcon} from '@heroicons/react/solid'

const Sidebar = () => {
    return (
      <div className="bg-slate-800 h-screen group relative transition-all duration-300 w-14 sm:w-20 hover:w-48">
        {/* Sidebar Logo */}
        <div className="h-20 flex items-center justify-center">
          <img
            src="../src/assets/APEX_Logo_Background.png"
            alt="Logo"
            width={100}
            className="p-2"
          />
        </div>
  
        {/* Sidebar Icons */}
        <div className="mt-10 flex flex-col items-start space-y-4">
          {[
            { icon: ClipboardListIcon, text: "Tasks", href: "#tasks" },
            { icon: DocumentTextIcon, text: "Documents", href: "#documents" },
            { icon: UserIcon, text: "Profile", href: "#profile" },
          ].map(({ icon: Icon, text, href }, index) => (
            <a
              key={index}
              href={href}
              className="flex items-center w-full transition-all duration-300 p-2 rounded-lg text-gray-300 hover:bg-gray-700"
            >
              <Icon width={30} className="mr-3 flex-shrink-0" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-white text-sm font-medium">
                {text}
              </span>
            </a>
          ))}
        </div>
  
        {/* Bottom Icons */}
        <div className="absolute bottom-4 flex flex-col items-start space-y-4">
          {[
            { icon: ArrowUpIcon, text: "Back to Top", href: "#top" },
            { icon: LogoutIcon, text: "Logout", href: "#logout" },
          ].map(({ icon: Icon, text, href }, index) => (
            <a
              key={index}
              href={href}
              className="flex items-center w-full transition-all duration-300 p-2 rounded-lg text-gray-300 hover:bg-gray-700"
            >
              <Icon width={30} className="mr-3 flex-shrink-0" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-white text-sm font-medium">
                {text}
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;