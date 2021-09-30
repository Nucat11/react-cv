import { React } from "react";

export default function Animations() {
  const min = 3;
  const max = 5;
  window.onload = function () {
    const orange = document.querySelector(".orangeLine");
    const blue = document.querySelector(".blueLine");
    const blue2 = document.querySelector(".blueLine2");
    const greenLine = document.querySelector(".greenLine");
    const orangeLine2 = document.querySelector(".orangeLine2");

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
      <div className="orangeLine" />
      <div className="blueLine" />
      <div className="greenLine" />
      <div className="blueLine2" />
      <div className="orangeLine2" />
    </>
  );
}
