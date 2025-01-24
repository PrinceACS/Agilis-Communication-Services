import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LoginModal from "./LoginModal";
import { Button } from "./ui/button";

const Login = () => {
  return (
    <div className="sm:flex space-x-4">
      {/* Use shadcn Dialog component */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Login</Button>
        </DialogTrigger>
        <LoginModal />
      </Dialog>
    </div>
  );
};

export default Login;
