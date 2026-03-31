/**
 * SVG filter definitions for liquid glass effects.
 * Renders an invisible SVG with reusable filter definitions.
 * Apply via CSS: filter: url(#liquid-glass-distortion)
 */
const LiquidGlassFilter = () => (
  <svg
    style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    aria-hidden="true"
  >
    <defs>
      {/* Chromatic aberration + subtle distortion for glass elements */}
      <filter id="liquid-glass-distortion" x="-10%" y="-10%" width="120%" height="120%">
        {/* Create turbulence for organic distortion */}
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.015"
          numOctaves="3"
          seed="2"
          result="turbulence"
        />
        {/* Subtle displacement for refraction feel */}
        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          scale="3"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displaced"
        />
        {/* Chromatic aberration: offset red channel */}
        <feOffset in="displaced" dx="0.5" dy="0" result="redShift" />
        <feColorMatrix
          in="redShift"
          type="matrix"
          values="1 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 1 0"
          result="red"
        />
        {/* Green stays centered */}
        <feColorMatrix
          in="displaced"
          type="matrix"
          values="0 0 0 0 0
                  0 1 0 0 0
                  0 0 0 0 0
                  0 0 0 1 0"
          result="green"
        />
        {/* Blue channel offset opposite */}
        <feOffset in="displaced" dx="-0.5" dy="0" result="blueShift" />
        <feColorMatrix
          in="blueShift"
          type="matrix"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 1 0 0
                  0 0 0 1 0"
          result="blue"
        />
        {/* Composite RGB channels */}
        <feBlend in="red" in2="green" mode="screen" result="rg" />
        <feBlend in="rg" in2="blue" mode="screen" result="rgb" />
        {/* Merge with original alpha */}
        <feComposite in="rgb" in2="SourceGraphic" operator="in" />
      </filter>

      {/* Lighter version for navbar - less distortion */}
      <filter id="liquid-glass-nav" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01"
          numOctaves="2"
          seed="5"
          result="turbulence"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          scale="1.5"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displaced"
        />
        <feOffset in="displaced" dx="0.3" dy="0" result="redShift" />
        <feColorMatrix
          in="redShift"
          type="matrix"
          values="1 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 1 0"
          result="red"
        />
        <feColorMatrix
          in="displaced"
          type="matrix"
          values="0 0 0 0 0
                  0 1 0 0 0
                  0 0 0 0 0
                  0 0 0 1 0"
          result="green"
        />
        <feOffset in="displaced" dx="-0.3" dy="0" result="blueShift" />
        <feColorMatrix
          in="blueShift"
          type="matrix"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 1 0 0
                  0 0 0 1 0"
          result="blue"
        />
        <feBlend in="red" in2="green" mode="screen" result="rg" />
        <feBlend in="rg" in2="blue" mode="screen" result="rgb" />
        <feComposite in="rgb" in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
);

export default LiquidGlassFilter;
