import { Plus, Bell, Search } from "lucide-react";

const NavbarIcons = () => {
  return (
    <div className="flex items-center gap-4 text-white">
      <Plus size={24} />
      <div className="border border-white px-2 py-1 text-sm">EN</div>
      <Bell size={24} />
      <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold">
      </div>
      <Search size={24} className="text-blue-400" />
    </div>
  );
};

export default NavbarIcons;
