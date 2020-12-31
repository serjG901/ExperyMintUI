import React from "react";

export default function PersonManifest({ children }) {

  return (
    <div className="w-1/2 italic">
      <p className="font-bold break-words">{children}</p>
    </div>
  );
}
