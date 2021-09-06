import React, { useEffect } from "react";

export default function Favorites({ title }) {
  useEffect(() => <h1>{title}</h1>);
  return (
    <div className="favorites-wrapper">
      <h1 className="">Favorites {title}</h1>
    </div>
  );
}
