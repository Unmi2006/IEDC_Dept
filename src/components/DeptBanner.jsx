import React from "react";
import "./DeptBanner.css";

export default function DeptBanner() {
  return (
    <section className="dept-banner">
      {/* Animated background */}
      <div className="dept-bg">

        {/* Left circuit network */}
        <svg
          className="circuit circuit-left"
          viewBox="0 0 600 100"
          preserveAspectRatio="none"
        >
          <g className="circuit-lines">
            <path d="M0 20 H75 L110 45 H205 L245 20 H350 L390 48 H475 L515 25 H600" />
            <path d="M0 72 H55 L95 50 H175 L215 75 H310 L350 55 H430 L470 78 H600" />
            <path d="M55 0 V25 L90 45" />
            <path d="M280 0 V25 L320 48" />
            <path d="M440 100 V75 L470 55" />
          </g>

          <g className="circuit-nodes">
            <circle cx="75" cy="20" r="2.5" />
            <circle cx="110" cy="45" r="2.5" />
            <circle cx="205" cy="45" r="2.5" />
            <circle cx="245" cy="20" r="2.5" />
            <circle cx="350" cy="20" r="2.5" />
            <circle cx="390" cy="48" r="2.5" />
            <circle cx="475" cy="48" r="2.5" />
            <circle cx="515" cy="25" r="2.5" />

            <circle cx="55" cy="72" r="2.5" />
            <circle cx="95" cy="50" r="2.5" />
            <circle cx="175" cy="50" r="2.5" />
            <circle cx="215" cy="75" r="2.5" />
            <circle cx="310" cy="75" r="2.5" />
            <circle cx="350" cy="55" r="2.5" />
            <circle cx="430" cy="55" r="2.5" />
            <circle cx="470" cy="78" r="2.5" />
          </g>
        </svg>

        {/* Right circuit network */}
        <svg
          className="circuit circuit-right"
          viewBox="0 0 600 100"
          preserveAspectRatio="none"
        >
          <g className="circuit-lines">
            <path d="M0 25 H85 L125 48 H210 L250 20 H350 L390 50 H485 L525 25 H600" />
            <path d="M0 78 H70 L110 55 H190 L230 80 H320 L360 55 H440 L480 75 H600" />
            <path d="M60 0 V28 L100 48" />
            <path d="M300 0 V25 L340 50" />
            <path d="M455 100 V75 L485 55" />
          </g>

          <g className="circuit-nodes">
            <circle cx="85" cy="25" r="2.5" />
            <circle cx="125" cy="48" r="2.5" />
            <circle cx="210" cy="48" r="2.5" />
            <circle cx="250" cy="20" r="2.5" />
            <circle cx="350" cy="20" r="2.5" />
            <circle cx="390" cy="50" r="2.5" />
            <circle cx="485" cy="50" r="2.5" />
            <circle cx="525" cy="25" r="2.5" />

            <circle cx="70" cy="78" r="2.5" />
            <circle cx="110" cy="55" r="2.5" />
            <circle cx="190" cy="55" r="2.5" />
            <circle cx="230" cy="80" r="2.5" />
            <circle cx="320" cy="80" r="2.5" />
            <circle cx="360" cy="55" r="2.5" />
            <circle cx="440" cy="55" r="2.5" />
            <circle cx="480" cy="75" r="2.5" />
          </g>
        </svg>

        {/* Moving light particles */}
        <span className="moving-dot dot-1"></span>
        <span className="moving-dot dot-2"></span>
        <span className="moving-dot dot-3"></span>
        <span className="moving-dot dot-4"></span>

        {/* Center glow */}
        <div className="center-glow"></div>

        {/* Diagonal center panels */}
        <div className="diagonal diagonal-left"></div>
        <div className="diagonal diagonal-right"></div>
      </div>

      {/* Banner text */}
      <div className="dept-title">
        <span>IEDC Lab: Department of CST, CSIT, CSE(Cyber Security), CSE(Networks)</span>
      </div>
    </section>
  );
}