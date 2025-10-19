import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Home, Package, Info, Mail, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Products", path: "/products", icon: Package },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-indigo-400/50 transition-all"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      
      <nav
        className={`hidden md:flex fixed left-0 top-0 h-screen bg-gradient-to-br from-indigo-600 to-purple-600 shadow-xl transition-all duration-300 z-40 flex-col ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all">
              <ShoppingBag className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold text-white">ShopHub</span>
            )}
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex-1 py-6 px-3 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all group ${
                  isActive(link.path)
                    ? "bg-white/20 text-white shadow-inner backdrop-blur-sm"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    isActive(link.path) ? "scale-110" : "group-hover:scale-110"
                  } transition-transform`}
                />
                {!isCollapsed && <span>{link.name}</span>}
                {isActive(link.path) && !isCollapsed && (
                  <ChevronRight className="h-4 w-4 ml-auto" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Collapse Button */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Toggle sidebar"
          >
            <ChevronRight
              className={`h-5 w-5 transition-transform ${
                isCollapsed ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Sidebar */}
      {isMobileOpen && (
        <nav className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-br from-indigo-600 to-purple-600 shadow-xl flex flex-col animate-slide-in-left">
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
              <Link
                to="/"
                className="flex items-center space-x-3"
                onClick={() => setIsMobileOpen(false)}
              >
                <div className="p-2 bg-white/10 rounded-xl">
                  <ShoppingBag className="h-7 w-7 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ShopHub</span>
              </Link>
            </div>

            {/* Links */}
            <div className="flex-1 py-6 px-3 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive(link.path)
                        ? "bg-white/20 text-white shadow-inner backdrop-blur-sm"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.name}</span>
                    {isActive(link.path) && (
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
