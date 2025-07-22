
import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-[hsl(var(--primary))] font-bold text-xl md:text-2xl">TIFL</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors text-sm">
              Home
            </Link>
            <Link to="/milestones" className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors text-sm">
              Milestone Tracker
            </Link>
            <Link to="/smart-reminders" className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors text-sm">
              Smart Reminders
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors text-sm">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors text-sm">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-[hsl(var(--primary))] text-white text-xs font-semibold">
                        {getInitials(user.firstName, user.lastName)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.firstName} {user.lastName}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/90] text-sm px-4 py-2">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-[hsl(var(--primary))] p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white py-2 px-4 shadow-lg border-t">
          <nav className="flex flex-col space-y-1">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium py-3 px-2 transition-colors border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/milestones" 
              className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium py-3 px-2 transition-colors border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Milestone Tracker
            </Link>
            <Link 
              to="/smart-reminders" 
              className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium py-3 px-2 transition-colors border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Smart Reminders
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium py-3 px-2 transition-colors border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium py-3 px-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-3">
              {user ? (
                <div className="space-y-2">
                  <div className="px-2 py-1 text-sm text-gray-600">
                    Welcome, {user.firstName}!
                  </div>
                  <Link to="/dashboard" className="block">
                    <Button variant="outline" className="w-full text-sm py-3">
                      Dashboard
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleLogout} 
                    variant="outline" 
                    className="w-full text-sm py-3"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/90] w-full text-sm py-3">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
