"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type AddButtonOption = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

interface AddButtonProps {
  options: AddButtonOption[];
}

export function AddButton({ options }: AddButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleOptionClick = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Popover open={isOpen} onOpenChange={handleOpenChange}>
        <div className="relative">
          <PopoverTrigger asChild>
            <div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  rotate: isOpen ? 135 : 0,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.5,
                  },
                }}
              >
                <Button
                  variant="default"
                  size="icon"
                  className="h-12 w-12 rounded-full shadow-lg"
                >
                  <Plus className="h-6 w-6" />
                </Button>
              </motion.div>
            </div>
          </PopoverTrigger>
        </div>
        <PopoverContent
          side="top"
          align="start"
          className="w-48 p-2"
          sideOffset={16}
        >
          <div className="flex flex-col space-y-1">
            {options.map((option, index) => (
              <Button
                key={index}
                variant="ghost"
                className="justify-start"
                onClick={() => handleOptionClick(option.onClick)}
              >
                {option.icon}
                <span>{option.label}</span>
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
