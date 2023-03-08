import React from "react";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  //   console.log(year);

  return (
    <footer>
      <p>Copyright@{year}</p>
    </footer>
  );
}
