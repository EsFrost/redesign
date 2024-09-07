"use client";
import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

interface ExpandableDivProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const ExpandableDiv = ({
  title,
  content,
  isOpen,
  onToggle,
}: ExpandableDivProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? (
          <MinusCircle className="w-6 h-6 text-gray-600" />
        ) : (
          <PlusCircle className="w-6 h-6 text-gray-600" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white">{content}</div>
      </div>
    </div>
  );
};

export default ExpandableDiv;
