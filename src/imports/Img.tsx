import svgPaths from "./svg-1z3gj42wvv";

export default function Img({ color = "black" }: { color?: string }) {
  return (
    <div className="relative size-full" data-name="Img">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 27.5">
        <g clipPath="url(#clip0_187_204)" id="icon-shopping-basket">
          <path d={svgPaths.p24ea4780} fill={color} id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_187_204">
            <rect fill="white" height="27.5" width="27.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}