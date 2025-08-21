import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "./LoginModal";
import cicssoLogo from "@/assets/cicsso-logo.png";
import marsuLogo from "@/assets/marsu-logo.png";
import cicsLogo from "@/assets/cics-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Resolutions", path: "/resolutions" },
    { name: "Events", path: "/events" },
    { name: "Financials", path: "/financials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Announcements", path: "/announcements" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-background shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logos */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <img src={marsuLogo} alt="MarSU Logo" className="h-10 w-10" />
                <img src={cicsLogo} alt="CICS Logo" className="h-10 w-10" />
                <div className="text-left">
                  <div className="text-lg font-bold text-primary">CICSSO</div>
                  <div className="text-xs text-muted-foreground">MarSU</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Auth Button */}
              <div className="ml-4">
                {isAuthenticated ? (
                  <div className="flex items-center space-x-2">
                    <Link to="/dashboard">
                      <Button variant="outline" size="sm">
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={logout}
                      className="text-foreground"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="default" 
                    size="sm" 
                    onClick={() => setShowLoginModal(true)}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Auth Button */}
                <div className="pt-2 border-t">
                  {isAuthenticated ? (
                    <div className="space-y-1">
                      <Link
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-primary"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-primary"
                      >
                        <LogOut className="h-4 w-4 mr-2 inline" />
                        Logout
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setShowLoginModal(true);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground"
                    >
                      <LogIn className="h-4 w-4 mr-2 inline" />
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};

export default Navigation;