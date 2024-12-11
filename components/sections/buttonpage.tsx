import React from "react";
import ButtonLayout from "@/components/ui/buttonlayout";

const ButtonPage = () => {
  const buttons = [
    { label: "Live TV", onClick: () => alert("Live TV clicked!") },
    { label: "Ideas Of India", onClick: () => alert("Ideas Of India clicked!") },
    { label: "India @ 2047", onClick: () => alert("India @ 2047 clicked!") },
    { label: "Petrol Prices", onClick: () => alert("Petrol Prices clicked!") },
    { label: "Diesel Prices", onClick: () => alert("Diesel Prices clicked!") },
  ];

  return (
    <div className="flex items-center justify-center bg-black p-4">
      <ButtonLayout buttons={buttons} />
    </div>
  );
};

export default ButtonPage;
