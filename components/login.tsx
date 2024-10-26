import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LoginModal from "./LoginModal";

const Login = () => {
  return (
    <div className="sm:flex space-x-4">
      {/* Use shadcn Dialog component */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-[#FFD700] hover:bg-[#f8db5a] focus:ring-4 focus:ring-yellow-400 text-[#000000] px-4 py-2 rounded-md transition-all duration-300 ease-in-out font-semibold">
            Login
          </button>
        </DialogTrigger>
        <LoginModal />
      </Dialog>
    </div>
  );
};

export default Login;
