const SvgFilters = () => (
  <svg className="absolute w-0 h-0">
    <filter id="displacementFilter">
      <feTurbulence
        type="turbulence"
        baseFrequency="0.01"
        numOctaves="2"
        result="turbulence"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="turbulence"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
)

export default SvgFilters
