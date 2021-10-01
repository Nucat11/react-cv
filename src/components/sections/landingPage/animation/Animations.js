import { React } from "react";

export default function Animations() {
  const min = 3;
  const max = 5;
  window.onload = function () {
    const orange = document.querySelector(".orange-line");
    const blue = document.querySelector(".blue-line");
    const blue2 = document.querySelector(".blue-line-2");
    const greenLine = document.querySelector(".green-line");
    const orangeLine2 = document.querySelector(".orange-line-2");

    function setProperty(duration) {
      orange.style.setProperty("animation-duration", duration + "s");
      blue.style.setProperty("animation-duration", duration + "s");
      blue2.style.setProperty("animation-duration", duration + "s");
      greenLine.style.setProperty("animation-duration", duration + "s");
      orangeLine2.style.setProperty("animation-duration", duration + "s");
    }

    function changeAnimationTime() {
      const animationDuration = Math.random() * (max - min) + min;
      setProperty(animationDuration);
    }

    setInterval(changeAnimationTime, 8000);
  };
  return (
    <>
      <div className="orange-line" />
      <div className="blue-line" />
      <div className="green-line" />
      <div className="blue-line-2" />
      <div className="orange-line-2" />
    </>
  );
}
