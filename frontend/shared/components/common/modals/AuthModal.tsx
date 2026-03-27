"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, Dialog } from "../../ui";
import { DialogContent } from "../../ui/dialog";
import { LoginForm, RegisterForm } from "../forms";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TypeModalForm = "login" | "register";

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [formType, setFormType] = useState<TypeModalForm>("login");

  const onSwitchType = () => {
    setFormType(formType === "login" ? "register" : "login");
  };

  const handleOpenChange = () => {
    onClose();
  };

  const handleGitHubClick = () => {
    signIn("github", {
      callbackUrl: "/",
      redirect: false,
    });
  };

  const handleGoogleClick = () => {
    signIn("google", {
      callbackUrl: "/",
      redirect: false,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[450px] bg-white p-10">
        {formType === "login" ? (
          <LoginForm onClose={handleOpenChange} />
        ) : (
          <RegisterForm />
        )}
        <hr />
        <div className="flex gap-2 justify-center">
          <Button
            className="p-6 w-1/2"
            variant={"secondary"}
            onClick={handleGitHubClick}
          >
            <img
              src="https://github.githubassets.com/favorites/favicon.svg"
              alt="GitHub"
              width={30}
              height={30}
            />
            GitHub
          </Button>

          <Button
            className="p-6 w-1/2"
            variant={"secondary"}
            onClick={handleGoogleClick}
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              width={30}
              height={30}
            />
            Google
          </Button>
        </div>
        <Button
          variant={"outline"}
          className="hover:bg-primary hover:text-white transition duration-300"
          onClick={onSwitchType}
        >
          {formType === "login" ? "Вход" : "Регистрация"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
