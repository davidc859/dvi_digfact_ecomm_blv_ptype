import { useContext } from "react";
import { useNavigate } from "react-router";
import { PageContext } from "./Homepage1905";
import svgPaths from "./svg-2jw7j5ihju";
import imgMicrosoftTeamsImage411 from "figma:asset/dbfa5e366420b93d7558fb7c86002deb90f8d77e.png";
import imgImage from "figma:asset/d5d0f48cc01bc68440e18c2531c337b8446e3bd2.png";
import imgImageLogoDigipharmacie from "figma:asset/a2cbd81fae668763660d179040f4ab4ca66f16cf.png";
import imgImageLogoMarketPlace from "figma:asset/f971762d82a7915d8ed1d02a438f29dc784975db.png";
import imgVector from "figma:asset/431329c96db2b85c736ccef2fd2e9d5ef79c7a25.png";
import imgImagePanierCanalLogo from "figma:asset/9ba1b746700b4bb2db5a17005fac65369cb64178.png";
import { imgGroup } from "./svg-mr5bc";

function Group5() {
  return (
    <div className="absolute left-[25px] size-[25px] top-[-3px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <path d={svgPaths.p18dcede0} fill="var(--fill-0, white)" id="Vector" />
      </svg>
      <div className="absolute inset-[1.25%_-1.25%_-1.25%_1.25%]" data-name="Vector">
        <div className="absolute inset-[-4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
            <path d={svgPaths.p3bd80000} id="Vector" stroke="var(--stroke-0, #343A40)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[16.67%_26.09%_7.56%_11.11%] items-center justify-center">
        <div className="-rotate-17 flex-none h-[16.315px] w-[11.429px]">
          <div className="relative size-full" data-name="🎨-Color">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4286 16.3153">
              <path d={svgPaths.p2af9380} fill="var(--fill-0, #343A40)" id="ð¨-Color" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold inset-[11.8%_34.69%_50.7%_54.07%] justify-center leading-[0] text-[#343a40] text-[10px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">?</p>
      </div>
    </div>
  );
}

function Aide1() {
  return (
    <div className="absolute contents left-[-4px] top-[-3px]" data-name="Aide">
      <Group5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[-4px] text-[#343a40] text-[14px] top-[31px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Besoin d’aide</p>
      </div>
    </div>
  );
}

function Aide() {
  return (
    <div className="absolute inset-[26.39%_11.73%_22.22%_83.87%]" data-name="Aide">
      <Aide1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[19.44%_24.03%_45.83%_74.66%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9354 25">
        <g id="Group 158">
          <ellipse cx="4.15576" cy="4.1667" fill="var(--fill-0, #343A40)" id="Ellipse 75" rx="4.15576" ry="4.1667" />
          <ellipse cx="12.4674" cy="4.1667" fill="var(--fill-0, #343A40)" id="Ellipse 76" rx="4.15584" ry="4.1667" />
          <ellipse cx="20.7795" cy="4.1667" fill="var(--fill-0, #343A40)" id="Ellipse 77" rx="4.15593" ry="4.1667" />
          <ellipse cx="4.15576" cy="12.5003" fill="var(--fill-0, #343A40)" id="Ellipse 78" rx="4.15576" ry="4.1667" />
          <ellipse cx="11.9924" cy="12.3314" fill="var(--fill-0, #343A40)" id="Ellipse 79" rx="4.15593" ry="4.1667" />
          <ellipse cx="20.7794" cy="12.5003" fill="var(--fill-0, #343A40)" id="Ellipse 80" rx="4.15593" ry="4.1667" />
          <ellipse cx="4.15576" cy="20.8332" fill="var(--fill-0, #343A40)" id="Ellipse 81" rx="4.15576" ry="4.1667" />
          <ellipse cx="12.4674" cy="20.8333" fill="var(--fill-0, #343A40)" id="Ellipse 82" rx="4.15584" ry="4.1667" />
          <ellipse cx="20.7794" cy="20.8333" fill="var(--fill-0, #343A40)" id="Ellipse 83" rx="4.15593" ry="4.1667" />
        </g>
      </svg>
    </div>
  );
}

function MesOutils() {
  return (
    <div className="absolute contents inset-[19.44%_22.98%_19.44%_73.56%]" data-name="Mes outils">
      <Group4 />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[58.33%_22.98%_19.44%_73.56%] justify-center leading-[0] text-[#343a40] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mes outils</p>
      </div>
    </div>
  );
}

function MonPanier() {
  const navigate = useNavigate();
  return (
    <div className="absolute contents inset-[19.44%_17.7%_19.44%_78.59%] cursor-pointer" data-name="Mon panier" onClick={() => navigate("/panier")}>
      <div className="absolute inset-[19.44%_19.01%_48%_79.69%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9215 23.4377">
          <path d={svgPaths.p11bb13f0} fill="var(--fill-0, #343A40)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[58.33%_17.7%_19.44%_78.59%] justify-center leading-[0] text-[#343a40] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mon panier</p>
      </div>
    </div>
  );
}

function Utilisateur() {
  return (
    <div className="absolute contents inset-[44.68%_1.68%_33.1%_89.69%]" data-name="Utilisateur">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[44.68%_3.4%_33.1%_89.69%] justify-center leading-[0] text-[#343a40] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Pharmacie de l’église</p>
      </div>
      <div className="absolute inset-[50.02%_1.68%_38.44%_97.38%]" data-name="🎨-Color">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9435 8.30769">
          <path d={svgPaths.p1adb2f80} fill="var(--fill-0, #343A40)" id="ð¨-Color" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[34px] inset-[29.17%_73.22%_26.39%_20.66%] items-center justify-center p-[8px]">
      <div aria-hidden="true" className="absolute border-[#146e55] border-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#343a40] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Produits</p>
      </div>
      <div className="h-[5.697px] relative shrink-0 w-[12.343px]" data-name="🎨-Color">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3429 5.6967">
          <path d={svgPaths.p17740200} fill="var(--fill-0, #343A40)" id="ð¨-Color" />
        </svg>
      </div>
    </div>
  );
}

function SelectionRecherche() {
  return (
    <div className="absolute contents inset-[29.17%_73.22%_26.39%_20.66%]" data-name="Selection recherche">
      <Frame />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[27.78%_37.54%_26.39%_27.54%]">
      <div className="absolute bg-white border-[#146e55] border-[0.5px] border-solid inset-[27.78%_37.54%_26.39%_27.54%]" />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[27.78%_55.3%_26.39%_30.1%] justify-center leading-[0] text-[#778390] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">aspegic</p>
      </div>
      <div className="absolute inset-[37.5%_70.61%_37.5%_28.38%]" data-name="🎨-Color">
        <div className="absolute inset-[-0.56%_-0.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5349 18.2">
            <foreignObject height="26.2" width="27.5349" x="-4" y="-4">
              <div style={{ backdropFilter: "blur(2px)", clipPath: "url(#bgblur_0_398_1686_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p1fd8a900} data-figma-bg-blur-radius="4" fill="var(--fill-0, #778390)" id="ð¨-Color" stroke="var(--stroke-0, #343A40)" strokeWidth="0.1" />
            <defs>
              <clipPath id="bgblur_0_398_1686_clip_path" transform="translate(4 4)">
                <path d={svgPaths.p1fd8a900} />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function MoteurDeRecherche() {
  return (
    <div className="absolute contents inset-[27.78%_37.54%_26.39%_27.54%]" data-name="Moteur de recherche">
      <Group6 />
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute inset-[19.44%_29.48%_45.83%_69.2%]" data-name="Bell 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0526 25">
        <g clipPath="url(#clip0_398_1499)" id="Bell 1">
          <path d={svgPaths.p2d99c800} fill="var(--fill-0, #343A40)" id="ð¨-Color" />
        </g>
        <defs>
          <clipPath id="clip0_398_1499">
            <rect fill="white" height="25" width="25.0526" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Notifs() {
  return (
    <div className="absolute contents inset-[19.44%_28.01%_19.44%_67.75%]" data-name="Notifs">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[58.33%_28.01%_19.44%_67.75%] justify-center leading-[0] text-[#343a40] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Notifications</p>
      </div>
      <Bell />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[15.28%_29.16%_59.72%_69.9%]">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[19.44%_29.32%_63.89%_70.05%] justify-center leading-[0] text-[10px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">33</p>
      </div>
      <div className="absolute inset-[15.28%_29.16%_59.72%_69.9%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9435 18">
          <ellipse cx="8.97173" cy="9" fill="var(--fill-0, #DC3545)" id="Ellipse 89" rx="8.97173" ry="9" />
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[15.28%_28.01%_19.44%_67.75%]">
      <Notifs />
      <Group7 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1460" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1460)">
            <path d={svgPaths.p2c926db0} fill="var(--fill-0, #158567)" id="Vector_2" stroke="var(--stroke-1, #158567)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute inset-[0_7.11%_0_0]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1453" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1453)">
            <path d={svgPaths.p32bf7f00} fill="var(--fill-0, #A6BCC6)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute inset-[0_7.11%_0_0]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1538" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1538)">
            <path d={svgPaths.p32bf7f00} id="Vector_2" stroke="var(--stroke-0, #A6BCC6)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute inset-[0_6.16%_0_0.95%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1444" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1444)">
            <path d={svgPaths.p20890980} fill="var(--fill-0, #A6BCC6)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute inset-[0_6.16%_0_0.95%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1437" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1437)">
            <path d={svgPaths.p20890980} id="Vector_2" stroke="var(--stroke-0, #A6BCC6)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute inset-[0_6.16%_0_0.95%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1423" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1423)">
            <path d={svgPaths.p284cfac0} fill="var(--fill-0, #A6BCC6)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute inset-[0_6.16%_0_0.95%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1432" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1432)">
            <path d={svgPaths.p284cfac0} id="Vector_2" stroke="var(--stroke-0, #A6BCC6)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1414" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1414)">
            <path d={svgPaths.p15eeba00} fill="var(--fill-0, #158567)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1653" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1653)">
            <path d={svgPaths.p15eeba00} id="Vector_2" stroke="var(--stroke-0, #158567)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1547" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1547)">
            <path d={svgPaths.p159bfec0} fill="var(--fill-0, #158567)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1400" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1400)">
            <path d={svgPaths.p159bfec0} id="Vector_2" stroke="var(--stroke-0, #158567)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute inset-[0_3.79%_0_3.32%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1405" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1405)">
            <path d={svgPaths.p129bbb00} fill="var(--fill-0, #158567)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup12() {
  return (
    <div className="absolute inset-[0_3.79%_0_3.32%]" data-name="Clip path group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3707 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_398_1391" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.3707 0H0V14H68.3707V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_398_1391)">
            <path d={svgPaths.p2aa9c280} fill="var(--fill-0, #158567)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[80.1%_32.37%_19.52%_67.61%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.020959 0.0746281">
        <g id="Group">
          <path d={svgPaths.p29eaa900} fill="var(--fill-0, #95BE2E)" id="Vector" />
          <path d={svgPaths.pe335f00} fill="var(--fill-0, #178466)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_0_31.38%_88.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5519 13.6606">
        <g id="Group">
          <path d={svgPaths.pf7f9680} fill="var(--fill-0, #95BE2E)" id="Vector" />
          <path d={svgPaths.p30379c0} fill="var(--fill-0, #178466)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute h-[39px] left-[70px] top-[16px] w-[256px]" data-name="Div">
      <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-start leading-[0] pb-[1338.375px] pr-[9.188px] relative size-full text-[10px] text-white whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[13px]">{`PHOENIX-OCP est certifié ISO 9001:2015 pour son `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[13px]">{`activité de distribution des produits à destination des `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[13px]">officines, des hôpitaux et des établissements de santé.</p>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[55px] left-0 top-0 w-[60px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function DivFooterIso() {
  return (
    <div className="absolute h-[55px] left-[1378.5px] top-[162.08px] w-[326px]" data-name="Div [footer-iso9001]">
      <Div />
      <Image />
    </div>
  );
}

function Icon() {
  return <div className="absolute left-[259px] size-[33px] top-[10px]" data-name="Icon" />;
}

function Icon1() {
  return <div className="absolute left-[206px] size-[33px] top-[10px]" data-name="Icon" />;
}

function Icon2() {
  return <div className="absolute h-[60.5px] left-[15.5px] top-[10px] w-[165px]" data-name="Icon" />;
}

function Div1() {
  return (
    <div className="absolute h-[80.5px] left-[505px] top-[123.38px] w-[302px]" data-name="Div">
      <Icon />
      <Icon1 />
      <Icon2 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[20px] h-[38.19px] items-start leading-[0] left-[260.64px] pb-[10.587px] pl-[10px] pr-[525.875px] pt-[9.4px] text-[14px] text-white top-[70.19px] w-[647px] whitespace-nowrap" data-name="Div">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Données personnelles et cookies</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Informations légales</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Préférences de cookies</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Service client</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Aide</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">CGU</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">CGV</p>
      </div>
    </div>
  );
}

function Icon3() {
  return <div className="absolute h-[35.19px] left-[1159.72px] top-[10px] w-[92.4px]" data-name="Icon" />;
}

function Icon4() {
  return <div className="absolute h-[22px] left-[921.38px] top-[16.59px] w-[187px]" data-name="Icon" />;
}

function Icon5() {
  return <div className="absolute h-[20.9px] left-[773.23px] top-[17.14px] w-[96.8px]" data-name="Icon" />;
}

function ImageLogoDigipharmacie() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10.8px]" data-name="Image [logo-digipharmacie]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLogoDigipharmacie} />
    </div>
  );
}

function LinkDigipharmacie() {
  return (
    <div className="absolute h-[40.8px] left-[572.56px] top-[7.19px] w-[164.83px]" data-name="Link [digipharmacie]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[33px] text-[16px] text-white top-[20.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px]">DIGIPHARMACIE</p>
      </div>
      <ImageLogoDigipharmacie />
    </div>
  );
}

function ImageLogoMarketPlace() {
  return (
    <div className="absolute h-[22px] left-[399.22px] top-[16.59px] w-[143px]" data-name="Image [logo-market-place]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageLogoMarketPlace} />
    </div>
  );
}

function Icon6() {
  return <div className="absolute h-[28.6px] left-[200.48px] top-[13.3px] w-[152.9px]" data-name="Icon" />;
}

function Icon7() {
  return <div className="absolute h-[29.69px] left-[35.84px] top-[12.75px] w-[113.3px]" data-name="Icon" />;
}

function DivFooterRow() {
  return (
    <div className="absolute h-[55.19px] left-[12px] top-0 w-[1288px]" data-name="Div [footer-row]">
      <Icon3 />
      <Icon4 />
      <Icon5 />
      <LinkDigipharmacie />
      <ImageLogoMarketPlace />
      <Icon6 />
      <Icon7 />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="absolute h-[239.02px] left-[292.5px] top-0 w-[1320px]" data-name="Div [container]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[564.23px] text-[10px] text-white top-[224.88px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13px]">© PHOENIX OCP 2024 All rights reserved</p>
      </div>
      <Div1 />
      <Div2 />
      <DivFooterRow />
    </div>
  );
}

function Icon8() {
  return <div className="absolute h-[52px] left-[1745.75px] top-[95.59px] w-[64px]" data-name="Icon" />;
}

function Icon9() {
  return <div className="absolute h-[42px] left-[95.25px] top-[95.59px] w-[41px]" data-name="Icon" />;
}

function FooterFooterMpGlobalHome() {
  return (
    <div className="absolute bg-[#343a40] h-[239px] left-0 top-[1173px] w-[1905px]" data-name="Footer [footer-mp-global-home]">
      <DivFooterIso />
      <DivContainer />
      <Icon8 />
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return <div className="absolute left-[10px] size-[20px] top-[9.91px]" data-name="Icon" />;
}

function DivMarketplacePanierProduitsDispo() {
  return (
    <div className="absolute border border-[#343a40] border-solid h-[42px] left-[1115.61px] rounded-[6px] top-[48px] w-[362.44px]" data-name="Div [marketplace-panier-produits-dispo]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[45px] text-[#343a40] text-[14px] top-[19.81px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Mes produits disponibles à la commande (153)</p>
      </div>
      <Icon10 />
    </div>
  );
}

function Div3() {
  return <div className="absolute bg-white border border-[#178466] border-solid left-[-21px] rounded-[3px] size-[16px] top-[-210px]" data-name="Div" />;
}

function InputML() {
  return (
    <div className="absolute contents left-[-21px] top-[-210px]" data-name="Input [m-l-5]">
      <Div3 />
    </div>
  );
}

function DivW1() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[162.16px]" data-name="Div [w-100]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[40px] text-[14px] text-white top-[17.81px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Mon panier (2)</p>
      </div>
      <InputML />
    </div>
  );
}

function DivMarketplacePanierSelect() {
  return (
    <div className="absolute bg-[#178466] border border-[#178466] border-solid h-[38px] left-0 overflow-clip rounded-[50px] top-0 w-[164.16px]" data-name="Div [marketplace-panier-select]">
      <DivW1 />
    </div>
  );
}

function DivW() {
  return (
    <div className="h-[110px] relative shrink-0 w-[1478.05px]" data-name="Div [w-100]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivMarketplacePanierProduitsDispo />
        <DivMarketplacePanierSelect />
      </div>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_398_1419)" id="Background Image">
          <path d={svgPaths.p2299db00} id="Vector" stroke="var(--stroke-0, #158164)" strokeWidth="2" />
          <path d={svgPaths.p28771f80} fill="var(--fill-0, #158164)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_398_1419">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="Background Images">
      <BackgroundImage />
    </div>
  );
}

function SpanOpenIcon() {
  return (
    <div className="absolute left-[446.89px] size-[40px] top-[1.48px]" data-name="Span [open-icon]">
      <BackgroundImages />
    </div>
  );
}

function Div6() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[42.99px] left-[79.25px] top-0 w-px" data-name="Div" />;
}

function Div5() {
  return (
    <div className="absolute h-[42.99px] left-[346.64px] top-0 w-[60.25px]" data-name="Div">
      <Div6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#158164] text-[18px] top-[30.89px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.4px]">12,88 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Total HT</p>
      </div>
    </div>
  );
}

function Div7() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[42.99px] left-[43px] top-0 w-px" data-name="Div" />;
}

function DivMarketplaceQuantitetotale() {
  return (
    <div className="absolute h-[42.99px] left-[282.63px] top-0 w-[24.02px]" data-name="Div [marketplace-quantitetotale-7510710049]">
      <Div7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[18px] top-[30.89px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.4px]">x 2</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Qté</p>
      </div>
    </div>
  );
}

function Div9() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[42.99px] left-[136.59px] top-0 w-px" data-name="Div" />;
}

function Div8() {
  return (
    <div className="absolute h-[42.99px] left-[125.03px] top-0 w-[117.6px]" data-name="Div">
      <Div9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#dc3545] text-[18px] top-[30.89px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.4px]">0,00 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Economie réalisée</p>
      </div>
    </div>
  );
}

function Div11() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[42.99px] left-[104.02px] top-0 w-px" data-name="Div" />;
}

function Div10() {
  return (
    <div className="absolute h-[42.99px] left-0 top-0 w-[85.04px]" data-name="Div">
      <Div11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[18px] top-[30.89px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.4px]">0,00 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Frais de port</p>
      </div>
    </div>
  );
}

function DivOrderStats() {
  return (
    <div className="absolute h-[42.99px] left-[938.16px] top-[22.3px] w-[486.9px]" data-name="Div [order-stats]">
      <SpanOpenIcon />
      <Div5 />
      <DivMarketplaceQuantitetotale />
      <Div8 />
      <Div10 />
    </div>
  );
}

function DivOrderDescription() {
  return (
    <div className="absolute h-[43px] left-[21px] top-[21px] w-[217.9px]" data-name="Div [order-description]">
      <div className="content-stretch flex flex-col gap-[4.091px] items-start leading-[0] pb-[371.8px] relative size-full text-[#343a40] whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[23.4px]">Commande Répartition</p>
        </div>
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18.2px]">Compte n°7510710049 - OCP</p>
        </div>
      </div>
    </div>
  );
}

function DivOrderRecap() {
  return (
    <div className="bg-white h-[87.58px] relative rounded-[6px] shrink-0 w-[1446.05px]" data-name="Div [order-recap]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivOrderStats />
        <DivOrderDescription />
      </div>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Background Image">
          <path clipRule="evenodd" d={svgPaths.p1be64700} fill="var(--fill-0, #158164)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundImages1() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Images">
      <BackgroundImage1 />
    </div>
  );
}

function DivDeleteIcon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Div [delete-icon]">
      <BackgroundImages1 />
    </div>
  );
}

function DivPointer() {
  return (
    <div className="absolute h-[24px] left-[1245.61px] top-[15px] w-[185.44px]" data-name="Div [pointer]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[31px] text-[#343a40] text-[14px] top-[11.81px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[18.2px] underline">Supprimer la commande</p>
      </div>
      <DivDeleteIcon />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[14.58%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-3.5px] mask-size-[24px_24px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.0004">
        <g id="Group">
          <path d={svgPaths.p291d7780} fill="var(--fill-0, #158164)" id="Vector" />
          <path d={svgPaths.p3e209800} fill="var(--fill-0, #158164)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup13() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function BackgroundImage2() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Image">
      <ClipPathGroup13 />
    </div>
  );
}

function BackgroundImages2() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Images">
      <BackgroundImage2 />
    </div>
  );
}

function DivAjouterCipIcon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Div [ajouter-cip-icon]">
      <BackgroundImages2 />
    </div>
  );
}

function LinkMarketplaceAjoutProduitsSaisie() {
  return (
    <div className="h-[24px] relative shrink-0 w-[111.47px]" data-name="Link [marketplace-ajoutProduits-saisie]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[31px] text-[#343a40] text-[14px] top-[11.81px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="decoration-solid leading-[18.2px] underline">Ajout via CIP</p>
        </div>
        <DivAjouterCipIcon />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[16.67%_16.67%_12.5%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
        <g id="Group">
          <path d={svgPaths.p341ecd00} fill="var(--fill-0, #158164)" id="Vector" />
          <path d={svgPaths.p13e00d80} fill="var(--fill-0, #158164)" id="Vector_2" />
          <path d={svgPaths.p32afe500} fill="var(--fill-0, #158164)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup14() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function BackgroundImage3() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Image">
      <ClipPathGroup14 />
    </div>
  );
}

function BackgroundImages3() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Images">
      <BackgroundImage3 />
    </div>
  );
}

function DivImportIcon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Div [import-icon]">
      <BackgroundImages3 />
    </div>
  );
}

function LinkMarketplaceAjoutProduitsImport() {
  return (
    <div className="h-[24px] relative shrink-0 w-[204.61px]" data-name="Link [marketplace-ajoutProduits-import]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[31px] text-[#343a40] text-[14px] top-[11.81px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="decoration-solid leading-[18.2px] underline">Import fichier (csv, xls, xlsx)</p>
        </div>
        <DivImportIcon />
      </div>
    </div>
  );
}

function DivLinkList() {
  return (
    <div className="absolute h-[24px] left-[915.53px] top-[15px] w-[316.08px]" data-name="Div [link-list]">
      <div className="content-stretch flex gap-[7px] items-start pr-[746.922px] relative size-full">
        <LinkMarketplaceAjoutProduitsSaisie />
        <LinkMarketplaceAjoutProduitsImport />
      </div>
    </div>
  );
}

function InputSellerItems() {
  return (
    <div className="absolute bg-white border border-[#158164] border-solid left-0 rounded-[3px] size-[16px] top-[1.09px]" data-name="Input [seller-items]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[18.2px] justify-center leading-[0] left-[4px] overflow-hidden text-[14px] text-black text-ellipsis top-[7px] w-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px] overflow-hidden text-ellipsis">on</p>
      </div>
    </div>
  );
}

function DivSellerCheckbox() {
  return (
    <div className="absolute h-[18.19px] left-0 top-0 w-[95.88px]" data-name="Div [seller-checkbox]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[21px] text-[#343a40] text-[14px] top-[8.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[18.2px] underline">Tout cocher</p>
      </div>
      <InputSellerItems />
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute h-[18.19px] left-[15px] top-[17.91px] w-[893.54px]" data-name="Div">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[115.88px] text-[#aaa] text-[14px] top-[8.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[18.2px] underline">Supprimer les produits cochés</p>
      </div>
      <DivSellerCheckbox />
    </div>
  );
}

function DivSellerToolbox() {
  return (
    <div className="h-[55px] relative shrink-0 w-[1446.05px]" data-name="Div [seller-toolbox]">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivPointer />
        <DivLinkList />
        <Div12 />
      </div>
    </div>
  );
}

function BackgroundImage4() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_398_1658)" id="Background Image">
          <path clipRule="evenodd" d={svgPaths.p1b62df40} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_398_1658">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages4() {
  return (
    <div className="absolute left-0 overflow-clip size-[18px] top-0" data-name="Background Images">
      <BackgroundImage4 />
    </div>
  );
}

function SpanDeleteIcon() {
  return (
    <div className="absolute left-[9px] size-[18px] top-[9px]" data-name="Span [delete-icon]">
      <BackgroundImages4 />
    </div>
  );
}

function DivColumnAction() {
  return (
    <div className="absolute bg-[#158164] border border-[#158164] border-solid left-0 rounded-[38px] size-[38px] top-[38.78px]" data-name="Div [column-action]">
      <SpanDeleteIcon />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[7.39px] size-[24px] top-[7.39px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13c1880} id="Vector" stroke="var(--stroke-0, #FF0000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DivDFlex() {
  return (
    <div className="absolute h-[76.79px] left-[1392.27px] top-[11.78px] w-[38.79px]" data-name="Div [d-flex]">
      <DivColumnAction />
      <Icon11 />
    </div>
  );
}

function DivColumnTotal() {
  return (
    <div className="absolute h-[40px] left-[1200.22px] top-[30.69px] w-[156.05px]" data-name="Div [column-total]">
      <div className="content-stretch flex flex-col gap-[0.094px] items-start leading-[0] pb-[568.866px] pr-[53.047px] relative size-full text-[#343a40] whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Prix commande HT</p>
        </div>
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[23.4px]">12,88 €</p>
        </div>
      </div>
    </div>
  );
}

function Div13() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[66.19px] left-[321.05px] top-0 w-px" data-name="Div" />;
}

function InputTextAlign() {
  return (
    <div className="bg-white h-[35px] relative rounded-[5px] shrink-0 w-[60px]" data-name="Input [textAlign]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15.61px] justify-center leading-[0] left-[5px] overflow-hidden text-[12px] text-black text-ellipsis top-[17.51px] w-[58px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px] overflow-hidden text-ellipsis">2</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Span() {
  return (
    <div className="h-[31.19px] relative shrink-0 w-[60px]" data-name="Span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative size-full text-[#343a40] text-[12px] whitespace-nowrap">
        <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[19.83px] top-[22.79px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">60u</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[10.38px] top-[7.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">{`Carton: `}</p>
        </div>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="absolute h-[66.19px] left-[252.06px] top-0 w-[60px]" data-name="Div">
      <div className="content-stretch flex flex-col items-start pb-[547.469px] relative size-full">
        <InputTextAlign />
        <Span />
      </div>
    </div>
  );
}

function DivDisponibiliteValue() {
  return (
    <div className="h-[32px] relative shrink-0 w-[247.07px]" data-name="Div [disponibilite-value]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Roboto:Bold',sans-serif] font-bold items-start leading-[0] pb-[588.359px] pr-[10px] relative size-full text-[#158164] text-[12px] uppercase whitespace-nowrap">
        <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">{`Disponible pour prochaine livraison `}</p>
        </div>
        <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">si commande immédiate</p>
        </div>
      </div>
    </div>
  );
}

function DivMarketplaceResultsDisponibilite() {
  return (
    <div className="absolute h-[48px] left-0 top-[9.7px] w-[247.07px]" data-name="Div [marketplace-results-disponibilite]">
      <div className="content-stretch flex flex-col gap-[0.794px] items-start pb-[557.172px] relative size-full">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#343a40] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Disponibilité</p>
        </div>
        <DivDisponibiliteValue />
      </div>
    </div>
  );
}

function DivColumnDispoQty() {
  return (
    <div className="absolute h-[66.19px] left-[852.16px] top-[17.08px] w-[312.07px]" data-name="Div [column-dispo-qty]">
      <Div13 />
      <Div14 />
      <DivMarketplaceResultsDisponibilite />
    </div>
  );
}

function Div15() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[44.38px] left-[321.05px] top-0 w-px" data-name="Div" />;
}

function Div16() {
  return (
    <div className="absolute h-[37px] left-0 top-[4px] w-[84.44px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[0.394px] items-start leading-[0] pb-[572.763px] relative size-full text-[#343a40] whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Prix de base HT</p>
        </div>
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20.8px]">6,44 €</p>
        </div>
      </div>
    </div>
  );
}

function DivColumnPrices() {
  return (
    <div className="absolute h-[44.4px] left-[504.09px] top-[27.98px] w-[312.07px]" data-name="Div [column-prices]">
      <Div15 />
      <Div16 />
    </div>
  );
}

function Div17() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[90.32px] left-[475.09px] top-[5px] w-px" data-name="Div" />;
}

function DivItemTitle() {
  return (
    <div className="absolute h-[90.36px] leading-[0] left-[117px] text-[#343a40] top-0 w-[242.21px] whitespace-nowrap" data-name="Div [item-title]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[14px] top-[81.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Code : 3400934735905</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[14px] top-[57.88px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">boîte 15 sachets-doses</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[14px] top-[34.7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">poudre pour solution buvable 1000 mg</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[16px] top-[10.1px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px]">ASPEGIC ADULTE</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[60px] left-[42.49px] overflow-clip top-[15.17px] w-[59.02px]" data-name="Image">
      <div className="absolute inset-[0.82%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.02 59.0164">
          <path d={svgPaths.p2f78ea00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.02%_8.33%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="49.18" src={imgVector} width="49.183" />
      </div>
    </div>
  );
}

function InputPointer() {
  return (
    <div className="absolute bg-white border border-[#158164] border-solid left-[11px] rounded-[3px] size-[16px] top-[35.08px]" data-name="Input [pointer]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[18.2px] justify-center leading-[0] left-[4px] overflow-hidden text-[14px] text-black text-ellipsis top-[7px] w-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px] overflow-hidden text-ellipsis">on</p>
      </div>
    </div>
  );
}

function DivColumnTitle() {
  return (
    <div className="absolute border-[#178466] border-l-4 border-solid h-[100.36px] left-[-2px] top-0 w-[470.1px]" data-name="Div [column-title]">
      <Div17 />
      <DivItemTitle />
      <Image1 />
      <InputPointer />
    </div>
  );
}

function DivMarketplaceOrderLine() {
  return (
    <div className="absolute h-[100.36px] left-0 top-[15px] w-[1431.05px]" data-name="Div [marketplace-order-line]">
      <DivDFlex />
      <DivColumnTotal />
      <DivColumnDispoQty />
      <DivColumnPrices />
      <DivColumnTitle />
    </div>
  );
}

function DivMarketplacePanierArticles() {
  return (
    <div className="bg-[#f7f7f7] h-[140.36px] relative rounded-[20px] shrink-0 w-[1446.05px]" data-name="Div [marketplace-panier-articles]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivMarketplaceOrderLine />
      </div>
    </div>
  );
}

function DivSellersContainerC7Bee27C8E6D4CbdB05B3Ca954D795CdOcp() {
  return (
    <div className="h-[195.36px] relative shrink-0 w-[1446.05px]" data-name="Div [sellers-container-c7bee27c-8e6d-4cbd-b05b-3ca954d795cd-OCP-7510710049]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15px] items-start pb-[366.219px] relative size-full">
        <DivSellerToolbox />
        <DivMarketplacePanierArticles />
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[282.94px] items-start left-[16px] pb-[158.641px] top-[20px] w-[1446.05px]" data-name="Div">
      <DivOrderRecap />
      <DivSellersContainerC7Bee27C8E6D4CbdB05B3Ca954D795CdOcp />
    </div>
  );
}

function DivMarketplacePanier() {
  return (
    <div className="bg-[#f7f7f7] h-[357.94px] relative rounded-[6px] shrink-0 w-[1478.05px]" data-name="Div [marketplace-panier]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Div4 />
      </div>
    </div>
  );
}

function BackgroundImage5() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_398_1419)" id="Background Image">
          <path d={svgPaths.p2299db00} id="Vector" stroke="var(--stroke-0, #158164)" strokeWidth="2" />
          <path d={svgPaths.p28771f80} fill="var(--fill-0, #158164)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_398_1419">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages5() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="Background Images">
      <BackgroundImage5 />
    </div>
  );
}

function SpanOpenIcon1() {
  return (
    <div className="absolute left-[457.22px] size-[40px] top-[1.48px]" data-name="Span [open-icon]">
      <BackgroundImages5 />
    </div>
  );
}

function Div20() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[42.99px] left-[79.25px] top-0 w-px" data-name="Div" />;
}

function Div19() {
  return (
    <div className="absolute h-[42.99px] left-[356.97px] top-0 w-[60.25px]" data-name="Div">
      <Div20 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#158164] text-[18px] top-[30.89px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.4px]">15,75 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Total HT</p>
      </div>
    </div>
  );
}

function Div21() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[42.99px] left-[53.34px] top-0 w-px" data-name="Div" />;
}

function DivMarketplaceQuantitetotale1() {
  return (
    <div className="absolute h-[42.99px] left-[282.63px] top-0 w-[34.35px]" data-name="Div [marketplace-quantitetotale-7510723487]">
      <Div21 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[18px] top-[30.89px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.4px]">x 15</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Qté</p>
      </div>
    </div>
  );
}

function Div23() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[42.99px] left-[136.59px] top-0 w-px" data-name="Div" />;
}

function Div22() {
  return (
    <div className="absolute h-[42.99px] left-[125.03px] top-0 w-[117.6px]" data-name="Div">
      <Div23 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#dc3545] text-[18px] top-[30.89px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.4px]">0,30 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Economie réalisée</p>
      </div>
    </div>
  );
}

function Div25() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[42.99px] left-[104.02px] top-0 w-px" data-name="Div" />;
}

function Div24() {
  return (
    <div className="absolute h-[42.99px] left-0 top-0 w-[85.04px]" data-name="Div">
      <Div25 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[18px] top-[30.89px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[23.4px]">0,00 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Frais de port</p>
      </div>
    </div>
  );
}

function DivOrderStats1() {
  return (
    <div className="absolute h-[42.99px] left-[927.83px] top-[29.5px] w-[497.22px]" data-name="Div [order-stats]">
      <SpanOpenIcon1 />
      <Div19 />
      <DivMarketplaceQuantitetotale1 />
      <Div22 />
      <Div24 />
    </div>
  );
}

function ImagePanierCanalLogo() {
  return (
    <div className="absolute h-[60px] left-[226.41px] top-[21px] w-[195.11px]" data-name="Image [panier-canal-logo]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePanierCanalLogo} />
    </div>
  );
}

function DivOrderDescription1() {
  return (
    <div className="absolute h-[43px] left-[21px] top-[28.2px] w-[190.41px]" data-name="Div [order-description]">
      <div className="content-stretch flex flex-col gap-[4.091px] items-start leading-[0] pb-[766.941px] relative size-full text-[#343a40] whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[23.4px]">Commande Etradi</p>
        </div>
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18.2px]">Compte n°7510723487 - ETRA</p>
        </div>
      </div>
    </div>
  );
}

function DivOrderRecap1() {
  return (
    <div className="bg-white h-[102px] relative rounded-[6px] shrink-0 w-[1446.05px]" data-name="Div [order-recap]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivOrderStats1 />
        <ImagePanierCanalLogo />
        <DivOrderDescription1 />
      </div>
    </div>
  );
}

function BackgroundImage6() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Background Image">
          <path clipRule="evenodd" d={svgPaths.p1be64700} fill="var(--fill-0, #158164)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundImages6() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Images">
      <BackgroundImage6 />
    </div>
  );
}

function DivDeleteIcon1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Div [delete-icon]">
      <BackgroundImages6 />
    </div>
  );
}

function DivPointer1() {
  return (
    <div className="absolute h-[24px] left-[1245.61px] top-[15px] w-[185.44px]" data-name="Div [pointer]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[31px] text-[#343a40] text-[14px] top-[11.81px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[18.2px] underline">Supprimer la commande</p>
      </div>
      <DivDeleteIcon1 />
    </div>
  );
}

function InputSellerItems1() {
  return (
    <div className="absolute bg-white border border-[#158164] border-solid left-0 rounded-[3px] size-[16px] top-[1.09px]" data-name="Input [seller-items]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[18.2px] justify-center leading-[0] left-[4px] overflow-hidden text-[14px] text-black text-ellipsis top-[7px] w-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px] overflow-hidden text-ellipsis">on</p>
      </div>
    </div>
  );
}

function DivSellerCheckbox1() {
  return (
    <div className="absolute h-[18.19px] left-0 top-0 w-[95.88px]" data-name="Div [seller-checkbox]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[21px] text-[#343a40] text-[14px] top-[8.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[18.2px] underline">Tout cocher</p>
      </div>
      <InputSellerItems1 />
    </div>
  );
}

function Div26() {
  return (
    <div className="absolute h-[18.19px] left-[15px] top-[17.91px] w-[1223.61px]" data-name="Div">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[115.88px] text-[#aaa] text-[14px] top-[8.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[18.2px] underline">Supprimer les produits cochés</p>
      </div>
      <DivSellerCheckbox1 />
    </div>
  );
}

function DivSellerToolbox1() {
  return (
    <div className="h-[55px] relative shrink-0 w-[1446.05px]" data-name="Div [seller-toolbox]">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivPointer1 />
        <Div26 />
      </div>
    </div>
  );
}

function BackgroundImage7() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_398_1658)" id="Background Image">
          <path clipRule="evenodd" d={svgPaths.p1b62df40} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_398_1658">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages7() {
  return (
    <div className="absolute left-0 overflow-clip size-[18px] top-0" data-name="Background Images">
      <BackgroundImage7 />
    </div>
  );
}

function SpanDeleteIcon1() {
  return (
    <div className="absolute left-[9px] size-[18px] top-[9px]" data-name="Span [delete-icon]">
      <BackgroundImages7 />
    </div>
  );
}

function DivColumnAction1() {
  return (
    <div className="absolute bg-[#158164] border border-[#158164] border-solid left-[1393.05px] rounded-[38px] size-[38px] top-[31.17px]" data-name="Div [column-action]">
      <SpanDeleteIcon1 />
    </div>
  );
}

function DivColumnTotal1() {
  return (
    <div className="absolute h-[40px] left-[1200.91px] top-[30.69px] w-[156.15px]" data-name="Div [column-total]">
      <div className="content-stretch flex flex-col gap-[0.094px] items-start leading-[0] pb-[971.225px] pr-[53.141px] relative size-full text-[#343a40] whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Prix commande HT</p>
        </div>
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[23.4px]">15,75 €</p>
        </div>
      </div>
    </div>
  );
}

function Div28() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[50.6px] left-[321.27px] top-0 w-px" data-name="Div" />;
}

function InputTextAlign1() {
  return (
    <div className="absolute bg-white border border-[#e4e4e4] border-solid h-[35px] left-[4.66px] overflow-clip rounded-[5px] top-0 w-[60px]" data-name="Input [textAlign]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15.61px] justify-center leading-[0] left-[4px] overflow-hidden text-[12px] text-black text-ellipsis top-[16.51px] w-[58px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px] overflow-hidden text-ellipsis">15</p>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div className="absolute h-[50.6px] left-[242.95px] top-0 w-[69.32px]" data-name="Div">
      <InputTextAlign1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[12px] top-[42.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[15.6px]">Carton: 300u</p>
      </div>
    </div>
  );
}

function DivMarketplaceResultsDisponibilite1() {
  return (
    <div className="absolute h-[32px] left-0 top-[9.7px] w-[220.11px]" data-name="Div [marketplace-results-disponibilite]">
      <div className="content-stretch flex flex-col items-start leading-[0] pb-[982.922px] relative size-full text-[12px] whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center mb-[-0.006px] relative shrink-0 text-[#343a40]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Disponibilité</p>
        </div>
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center mb-[-0.006px] relative shrink-0 text-[#158164] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Disponible si commande immédiate</p>
        </div>
      </div>
    </div>
  );
}

function DivColumnDispoQty1() {
  return (
    <div className="absolute h-[50.6px] left-[852.64px] top-[24.88px] w-[312.27px]" data-name="Div [column-dispo-qty]">
      <Div28 />
      <Div29 />
      <DivMarketplaceResultsDisponibilite1 />
    </div>
  );
}

function Div30() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[49.77px] left-[321.25px] top-0 w-px" data-name="Div" />;
}

function Div31() {
  return (
    <div className="absolute h-[37px] left-[231.63px] top-[4px] w-[80.63px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[5.784px] items-start leading-[0] pb-[972.419px] relative size-full whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#343a40] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Prix net remisé</p>
        </div>
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#dc3545] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20.8px]">1,05 €</p>
        </div>
      </div>
    </div>
  );
}

function SpanRemise() {
  return (
    <div className="bg-[#dc3545] h-[24.19px] relative rounded-[30px] shrink-0 w-[55.54px]" data-name="Span [remise]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[6px] text-[14px] text-white top-[11.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18.2px]">-1,87%</p>
        </div>
      </div>
    </div>
  );
}

function Div32() {
  return (
    <div className="absolute h-[40.19px] left-[130.27px] top-[4px] w-[55.54px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[2.794px] items-start pb-[975.031px] relative size-full">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#343a40] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Remise</p>
        </div>
        <SpanRemise />
      </div>
    </div>
  );
}

function Div33() {
  return (
    <div className="absolute h-[37px] left-0 top-[4px] w-[84.44px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[5.784px] items-start leading-[0] pb-[972.419px] relative size-full text-[#343a40] whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Prix de base HT</p>
        </div>
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20.8px]">1,07 €</p>
        </div>
      </div>
    </div>
  );
}

function DivColumnPrices1() {
  return (
    <div className="absolute h-[49.79px] left-[504.39px] top-[25.28px] w-[312.25px]" data-name="Div [column-prices]">
      <Div30 />
      <Div31 />
      <Div32 />
      <Div33 />
    </div>
  );
}

function Div34() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[90.32px] left-[475.39px] top-[5px] w-px" data-name="Div" />;
}

function DivItemTitle1() {
  return (
    <div className="absolute h-[90.36px] leading-[0] left-[117px] text-[#343a40] top-0 w-[145.18px] whitespace-nowrap" data-name="Div [item-title]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[14px] top-[81.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Code : 3400934809408</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[14px] top-[57.88px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">boîte 10</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[14px] top-[34.7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">suppositoire 150 mg</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[16px] top-[10.1px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px]">DOLIPRANE</p>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[60px] left-[42.49px] overflow-clip top-[15.17px] w-[59.02px]" data-name="Image">
      <div className="absolute inset-[0.82%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.02 59.0164">
          <path d={svgPaths.p2f78ea00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.02%_8.33%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="49.18" src={imgVector} width="49.183" />
      </div>
    </div>
  );
}

function InputPointer1() {
  return (
    <div className="absolute bg-white border border-[#158164] border-solid left-[11px] rounded-[3px] size-[16px] top-[35.08px]" data-name="Input [pointer]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[18.2px] justify-center leading-[0] left-[4px] overflow-hidden text-[14px] text-black text-ellipsis top-[7px] w-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px] overflow-hidden text-ellipsis">on</p>
      </div>
    </div>
  );
}

function DivColumnTitle1() {
  return (
    <div className="absolute border-[#178466] border-l-4 border-solid h-[100.36px] left-[-2px] top-0 w-[470.4px]" data-name="Div [column-title]">
      <Div34 />
      <DivItemTitle1 />
      <Image2 />
      <InputPointer1 />
    </div>
  );
}

function DivMarketplaceOrderLine1() {
  return (
    <div className="h-[100.36px] relative shrink-0 w-[1431.05px]" data-name="Div [marketplace-order-line]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivColumnAction1 />
        <DivColumnTotal1 />
        <DivColumnDispoQty1 />
        <DivColumnPrices1 />
        <DivColumnTitle1 />
      </div>
    </div>
  );
}

function SelectFormControl() {
  return (
    <div className="absolute h-[34px] left-0 rounded-[6px] top-0 w-[256px]" data-name="Select [form-control]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[5px] overflow-hidden text-[#647c94] text-[14px] text-ellipsis top-[17px] w-[178px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[21px] overflow-hidden text-ellipsis">AVP 60 jours</p>
      </div>
    </div>
  );
}

function Div35() {
  return (
    <div className="absolute h-[34px] left-[233.75px] top-0 w-[12.25px]" data-name="Div">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center leading-[0] left-0 not-italic text-[#647c94] text-[11px] top-[17px] whitespace-nowrap">
        <p className="leading-[34px]"></p>
      </div>
    </div>
  );
}

function DivCustomSelect() {
  return (
    <div className="absolute h-[34px] left-0 top-0 w-[256px]" data-name="Div [custom__select]">
      <SelectFormControl />
      <Div35 />
    </div>
  );
}

function DivTotalLine() {
  return (
    <div className="bg-[rgba(0,155,116,0.1)] h-[34px] relative shrink-0 w-[1431.05px]" data-name="Div [totalLine]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivCustomSelect />
      </div>
    </div>
  );
}

function Div27() {
  return (
    <div className="absolute h-[134.36px] left-0 top-[15px] w-[1431.05px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[929.938px] relative size-full">
        <DivMarketplaceOrderLine1 />
        <DivTotalLine />
      </div>
    </div>
  );
}

function DivMarketplacePanierArticles1() {
  return (
    <div className="bg-[#f7f7f7] h-[174.36px] relative rounded-[20px] shrink-0 w-[1446.05px]" data-name="Div [marketplace-panier-articles]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Div27 />
      </div>
    </div>
  );
}

function DivSellersContainer8C3777823B004C65A0Dd8170Da496F55Etra() {
  return (
    <div className="h-[229.36px] relative shrink-0 w-[1446.05px]" data-name="Div [sellers-container-8c377782-3b00-4c65-a0dd-8170da496f55-ETRA-7510723487]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15px] items-start pb-[734.578px] relative size-full">
        <DivSellerToolbox1 />
        <DivMarketplacePanierArticles1 />
      </div>
    </div>
  );
}

function Div18() {
  return (
    <div className="absolute h-[331.36px] left-[16px] top-[20px] w-[1446.05px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[512.578px] relative size-full">
        <DivOrderRecap1 />
        <DivSellersContainer8C3777823B004C65A0Dd8170Da496F55Etra />
      </div>
    </div>
  );
}

function DivMarketplacePanier1() {
  return (
    <div className="bg-[#f7f7f7] h-[406.36px] relative rounded-[6px] shrink-0 w-[1478.05px]" data-name="Div [marketplace-panier]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Div18 />
      </div>
    </div>
  );
}

function DivPanierCommandesContent() {
  return (
    <div className="h-[764.3px] relative shrink-0 w-[1478.05px]" data-name="Div [panier-commandes-content]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[30px] items-start relative size-full">
        <DivMarketplacePanier />
        <DivMarketplacePanier1 />
      </div>
    </div>
  );
}

function DivMainPanierContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] h-[874.3px] items-start left-0 pl-[20px] pr-[45px] pt-[5px] top-[77px] w-[1543.05px]" data-name="Div [main-panier-container]">
      <DivW />
      <DivPanierCommandesContent />
    </div>
  );
}

function DivMarketplacePanierTitleNormal() {
  return (
    <div className="h-[67.18px] relative shrink-0 w-[253.75px]" data-name="Div [marketplace-panier-title-normal]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] relative size-full text-[#343a40] whitespace-nowrap">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[14px] top-[57.88px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p>
            <span className="leading-[18.2px]">Total HT :</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[18.2px] text-[#343a40]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
            <span className="leading-[18.2px] text-[#158164]">12,88 €</span>
          </p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-0 text-[14px] top-[34.7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18.2px]">1 Article</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[16px] top-[10.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20.8px]">Commande Répartition</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage8() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[20px]" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.2">
        <g clipPath="url(#clip0_398_1475)" id="Background Image">
          <path d={svgPaths.p39b03400} fill="var(--fill-0, #009B74)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_398_1475">
            <rect fill="white" height="19.2" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages8() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="Background Images">
      <BackgroundImage8 />
    </div>
  );
}

function SpanPanierAjout() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[11px]" data-name="Span [panier-ajout]">
      <BackgroundImages8 />
    </div>
  );
}

function ButtonMarketplacePasserCommande() {
  return (
    <div className="bg-white h-[42px] relative rounded-[20px] shrink-0 w-[193.66px]" data-name="Button [marketplace-passer-commande]">
      <div aria-hidden="true" className="absolute border border-[#158164] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[46px] text-[#158164] text-[14px] top-[19.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18.2px]">{` Passer la commande`}</p>
        </div>
        <SpanPanierAjout />
      </div>
    </div>
  );
}

function DivRecapItem() {
  return (
    <div className="bg-[#f7f7f7] h-[163px] relative rounded-[6px] shrink-0 w-[286px]" data-name="Div [recap-item]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[302px] pt-[17px] px-[17px] relative size-full">
        <DivMarketplacePanierTitleNormal />
        <ButtonMarketplacePasserCommande />
      </div>
    </div>
  );
}

function ImagePanierCanalLogo1() {
  return (
    <div className="absolute h-[27.3px] left-[102.08px] top-0 w-[88.82px]" data-name="Image [panier-canal-logo]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePanierCanalLogo} />
    </div>
  );
}

function DivItemDesignation() {
  return (
    <div className="absolute h-[27.3px] left-0 top-0 w-[253.75px]" data-name="Div [item-designation]">
      <ImagePanierCanalLogo1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[16px] top-[13.35px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20.8px]">{`Commande `}</p>
      </div>
    </div>
  );
}

function DivMarketplacePanierTitleNormal1() {
  return (
    <div className="h-[73.68px] relative shrink-0 w-[253.75px]" data-name="Div [marketplace-panier-title-normal]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[14px] top-[64.38px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p>
            <span className="leading-[18.2px]">Total HT :</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[18.2px] text-[#343a40]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
            <span className="leading-[18.2px] text-[#158164]">15,75 €</span>
          </p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#343a40] text-[14px] top-[41.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18.2px]">1 Article</p>
        </div>
        <DivItemDesignation />
      </div>
    </div>
  );
}

function BackgroundImage9() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[20px]" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.2">
        <g clipPath="url(#clip0_398_1475)" id="Background Image">
          <path d={svgPaths.p39b03400} fill="var(--fill-0, #009B74)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_398_1475">
            <rect fill="white" height="19.2" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages9() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="Background Images">
      <BackgroundImage9 />
    </div>
  );
}

function SpanPanierAjout1() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[11px]" data-name="Span [panier-ajout]">
      <BackgroundImages9 />
    </div>
  );
}

function ButtonMarketplacePasserCommande1() {
  return (
    <div className="bg-white h-[42px] relative rounded-[20px] shrink-0 w-[193.66px]" data-name="Button [marketplace-passer-commande]">
      <div aria-hidden="true" className="absolute border border-[#158164] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[46px] text-[#158164] text-[14px] top-[19.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18.2px]">{` Passer la commande`}</p>
        </div>
        <SpanPanierAjout1 />
      </div>
    </div>
  );
}

function DivRecapItem1() {
  return (
    <div className="bg-[#f7f7f7] h-[173px] relative rounded-[6px] shrink-0 w-[286px]" data-name="Div [recap-item]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[464.172px] pt-[17px] px-[17px] relative size-full">
        <DivMarketplacePanierTitleNormal1 />
        <ButtonMarketplacePasserCommande1 />
      </div>
    </div>
  );
}

function DivRecapCommandes() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] h-[336px] items-start left-[0.09px] pb-[189.328px] top-0 w-[286px]" data-name="Div [recap-commandes]">
      <DivRecapItem />
      <DivRecapItem1 />
    </div>
  );
}

function Div36() {
  return <div className="absolute border-[#e4e4e4] border-r border-solid h-[49.19px] left-[92.63px] top-0 w-px" data-name="Div" />;
}

function DivTotalLine1() {
  return (
    <div className="h-[49.19px] relative shrink-0 w-[73.65px]" data-name="Div [totalLine]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Div36 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#158164] text-[22px] top-[34.29px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28.6px]">28,63 €</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#222] text-[12px] top-[7.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Total HT</p>
        </div>
      </div>
    </div>
  );
}

function DivTotalLine2() {
  return (
    <div className="h-[45px] relative shrink-0 w-[75.13px]" data-name="Div [totalLine]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.994px] items-start leading-[0] pb-[638.244px] relative size-full text-[#222] whitespace-nowrap">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[15.6px]">Qté produit</p>
        </div>
        <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28.6px]">17</p>
        </div>
      </div>
    </div>
  );
}

function DivMarketplaceCommandeTotaleRecap() {
  return (
    <div className="h-[49.19px] relative shrink-0 w-[148.78px]" data-name="Div [marketplace-commande-totale-recap]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40px] items-start pl-[10px] pr-[1486.969px] relative size-full">
        <DivTotalLine1 />
        <DivTotalLine2 />
      </div>
    </div>
  );
}

function BackgroundImage10() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[20px]" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.2">
        <g clipPath="url(#clip0_398_1368)" id="Background Image">
          <path d={svgPaths.p39b03400} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_398_1368">
            <rect fill="white" height="19.2" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages10() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="Background Images">
      <BackgroundImage10 />
    </div>
  );
}

function SpanPanierAjout2() {
  return (
    <div className="absolute left-[11px] size-[20px] top-[11px]" data-name="Span [panier-ajout]">
      <BackgroundImages10 />
    </div>
  );
}

function ButtonMarketplacePasserCommandeTotale() {
  return (
    <div className="bg-[#008565] h-[42px] relative rounded-[20px] shrink-0 w-[246.33px]" data-name="Button [marketplace-passer-commandeTotale]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[41px] text-[14px] text-white top-[19.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[18.2px]">{` Passer la commande complète`}</p>
        </div>
        <SpanPanierAjout2 />
      </div>
    </div>
  );
}

function DivMarketplaceCommandeTotaleDiv() {
  return (
    <div className="absolute h-[91.19px] left-[0.09px] top-[356px] w-[285.75px]" data-name="Div [marketplace-commande-totale-div]">
      <div className="content-stretch flex flex-col gap-[18px] items-start pb-[646.844px] relative size-full">
        <DivMarketplaceCommandeTotaleRecap />
        <ButtonMarketplacePasserCommandeTotale />
      </div>
    </div>
  );
}

function DivVoletTemplateContent() {
  return (
    <div className="absolute h-[466px] left-0 top-[34px] w-[287px]" data-name="Div [volet-template-content]">
      <DivRecapCommandes />
      <DivMarketplaceCommandeTotaleDiv />
    </div>
  );
}

function BackgroundImage11() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_398_1682)" id="Background Image">
          <path d={svgPaths.p206ef000} id="Vector" stroke="var(--stroke-0, #158164)" strokeWidth="2" />
          <path d={svgPaths.p1053aa00} fill="var(--fill-0, #158164)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_398_1682">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages11() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Images">
      <BackgroundImage11 />
    </div>
  );
}

function SpanIconToggle() {
  return (
    <div className="absolute left-[65.44px] size-[24px] top-0" data-name="Span [icon-toggle]">
      <BackgroundImages11 />
    </div>
  );
}

function DivCloseVoletTemplate() {
  return (
    <div className="absolute h-[24px] left-[196.41px] top-0 w-[89.44px]" data-name="Div [close-volet-template]">
      <SpanIconToggle />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#158164] text-[14px] top-[8.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[18.2px] underline">{`Masquer `}</p>
      </div>
    </div>
  );
}

function DivRecapPanier() {
  return (
    <div className="absolute h-[389px] left-[1562px] top-[160px] w-[286px]" data-name="Div [recap-panier]">
      <DivVoletTemplateContent />
      <DivCloseVoletTemplate />
    </div>
  );
}

function LinkViewCart() {
  const navigate = useNavigate();
  return (
    <div 
      className="group bg-white h-[34.19px] relative rounded-[3px] shrink-0 w-[125.33px] cursor-pointer hover:bg-[#178466] transition-colors" 
      data-name="Link [view-cart]"
      onClick={() => navigate("/panier")}
    >
      <div aria-hidden="true" className="absolute border border-[#178466] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[13px] text-[#178466] group-hover:text-white text-[14px] top-[16.9px] whitespace-nowrap transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Voir mon panier</p>
      </div>
    </div>
  );
}

function LinkViewBlv() {
  const navigate = useNavigate();
  const { setActivePage } = useContext(PageContext);
  return (
    <div 
      className="group bg-[#1D4D59] h-[34.19px] relative rounded-[3px] shrink-0 w-[165px] cursor-pointer hover:bg-white transition-colors" 
      data-name="Link [view-blv]"
      onClick={() => {
        setActivePage("blv");
        navigate("/blv");
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#1D4D59] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium inset-x-0 justify-center leading-[0] text-white group-hover:text-[#1D4D59] text-[14px] top-[16.9px] whitespace-nowrap transition-colors text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Voir mes livraisons</p>
      </div>
    </div>
  );
}

function LinkOcpBtn() {
  return (
    <div className="bg-[#178466] h-[34.19px] relative rounded-[3px] shrink-0 w-[254.35px]" data-name="Link [ocp-btn]">
      <div aria-hidden="true" className="absolute border border-[#178466] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[13px] text-[14px] text-white top-[16.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Mon panier précommande IVRY LAB</p>
      </div>
    </div>
  );
}

function LinkOcpBtn1() {
  return (
    <div className="bg-[#178466] h-[34.19px] relative rounded-[3px] shrink-0 w-[162.6px]" data-name="Link [ocp-btn]">
      <div aria-hidden="true" className="absolute border border-[#178466] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[13px] text-[14px] text-white top-[16.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Voir mes commandes</p>
      </div>
    </div>
  );
}

function LinkOcpBtn2() {
  return (
    <div className="bg-[#178466] h-[34.19px] relative rounded-[3px] shrink-0 w-[191.82px]" data-name="Link [ocp-btn]">
      <div aria-hidden="true" className="absolute border border-[#178466] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[13px] text-[14px] text-white top-[16.9px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18.2px]">Voir mes achats et retours</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[1063.92px] top-[10.91px]">
      <LinkViewCart />
      <LinkOcpBtn />
      <LinkOcpBtn1 />
      <LinkViewBlv />
      <LinkOcpBtn2 />
    </div>
  );
}

function BackgroundImage12() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Background Image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_398_1480)" id="Background Image">
          <path d={svgPaths.p15ed0480} fill="var(--fill-0, #158164)" id="Vector" />
          <path d={svgPaths.p2062dc00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_398_1480">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages12() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Background Images">
      <BackgroundImage12 />
    </div>
  );
}

function SpanIconBackPanier() {
  return (
    <div className="relative size-[24px]" data-name="Span [icon-back-panier]">
      <BackgroundImages12 />
    </div>
  );
}

function LinkBlackLink() {
  const { setActivePage } = useContext(PageContext);
  return (
    <div className="absolute h-[24px] left-[5px] top-[16px] w-[172.15px] cursor-pointer" data-name="Link [black-link]" onClick={() => setActivePage("home")}>
      <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SpanIconBackPanier />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[34px] text-[#158164] text-[14px] top-[11.81px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="decoration-solid leading-[18.2px] underline">Continuer mes achats</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[56px] left-[12px] top-0 w-[1873px]" data-name="List">
      <Frame1 />
      <LinkBlackLink />
    </div>
  );
}

function DivOngletsPanier() {
  return (
    <div className="absolute bg-white border-[#178466] border-b border-solid h-[57px] left-0 top-0 w-[1905px]" data-name="Div [onglets-panier]">
      <List />
    </div>
  );
}

function DivContentVue() {
  return (
    <div className="absolute h-[1046.3px] left-0 top-[127px] w-[1905px]" data-name="Div [content-vue]">
      <DivMainPanierContainer />
      <DivRecapPanier />
      <DivOngletsPanier />
    </div>
  );
}

function BodyHeaderSticky() {
  return (
    <div className="absolute bg-white h-[1412.32px] left-0 overflow-clip top-0 w-[1905px]" data-name="Body [header-sticky]">
      <FooterFooterMpGlobalHome />
      <DivContentVue />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[30.91%_85.77%_30.91%_8.95%]">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold inset-[30.91%_85.77%_30.91%_8.95%] justify-center leading-[0] text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mes promos</p>
      </div>
    </div>
  );
}

function MonGroupement() {
  return (
    <div className="absolute contents inset-[30.91%_75.77%_30.91%_16.33%]" data-name="Mon groupement">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold inset-[30.91%_75.77%_30.91%_16.33%] justify-center leading-[0] text-[18px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mon groupement</p>
      </div>
    </div>
  );
}

function MesAbonnements() {
  return (
    <div className="absolute contents inset-[0_0_0_92.15%]" data-name="Mes abonnements">
      <div className="absolute bg-[#146e55] inset-[0_0.02%_0_92.15%]" />
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold inset-[0_0_0_92.15%] justify-center leading-[0] text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mon abonnement</p>
      </div>
    </div>
  );
}

function HeaderVert() {
  return (
    <div className="absolute bg-[#178466] h-[55px] left-0 top-0 w-[1911px]" data-name="Header vert">
      <Group8 />
      <MonGroupement />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[503px] text-[18px] text-white top-[27.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Actualités</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[625px] text-[18px] text-white top-[27.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Pilotage de mon officine</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[54px] justify-center leading-[0] left-[898.5px] text-[18px] text-center text-white top-[28px] w-[121px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Services</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[973px] text-[18px] text-white top-[27.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Equipement</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[1110px] text-[18px] text-white top-[27.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mon équipe</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[1246px] text-[18px] text-white top-[27.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mes patients</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[1391px] text-[18px] text-white top-[27.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">MAD</p>
      </div>
      <MesAbonnements />
    </div>
  );
}

export default function Panier() {
  const navigate = useNavigate();
  const { setActivePage } = useContext(PageContext);
  return (
    <div className="relative size-full" data-name="Panier 20/08/25">
      <div className="absolute h-[127px] left-0 top-0 w-[1905px] z-50">
        <div className="relative h-[72px] w-full">
          <div className="absolute bg-white border-[#146e55] border-[0.5px] border-solid inset-0" data-name="Header blanc" />
          <Aide />
          <MesOutils />
          <MonPanier />
          <Utilisateur />
          <SelectionRecherche />
          <MoteurDeRecherche />
          <Group9 />
          <div className="absolute inset-[40.28%_38.27%_43.36%_57.8%]" data-name="clickadoc">
            <div className="absolute inset-[-4.24%_-0.98%_0_-0.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.999 12.2818">
                <g id="Group">
                  <path d={svgPaths.pecd2200} fill="var(--fill-0, #146E55)" id="Vector" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
                  <path d={svgPaths.p1a6e9200} fill="var(--fill-0, #146E55)" id="Vector_2" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
                  <path d={svgPaths.p2e1ee800} fill="var(--fill-0, #146E55)" id="Vector_3" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
                  <path d={svgPaths.p1b0ff500} fill="var(--fill-0, #146E55)" id="Vector_4" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
                  <path d={svgPaths.p203f8000} fill="var(--fill-0, #146E55)" id="Vector_5" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
                  <path d={svgPaths.p1996ce00} fill="var(--fill-0, #146E55)" id="Vector_6" />
                  <path d={svgPaths.p29309400} fill="var(--fill-0, #A3B8CB)" id="Vector_7" stroke="var(--stroke-0, #A3B8CB)" strokeMiterlimit="10" />
                  <path d={svgPaths.p35cb7580} fill="var(--fill-0, #A3B8CB)" id="Vector_8" stroke="var(--stroke-0, #A3B8CB)" strokeMiterlimit="10" />
                  <path d={svgPaths.p2fbac500} fill="var(--fill-0, #A3B8CB)" id="Vector_9" stroke="var(--stroke-0, #A3B8CB)" strokeMiterlimit="10" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Roboto:Condensed_Medium_Italic',sans-serif] font-medium inset-[38.89%_86.91%_40.28%_11.31%] italic justify-center leading-[0] text-[#343a40] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 75" }}>
            <p className="leading-[normal]">pour</p>
          </div>
          <div className="absolute inset-[40.28%_32.99%_40.28%_63.14%]" data-name="Dicodoc">
            <ClipPathGroup />
            <ClipPathGroup1 />
            <ClipPathGroup2 />
            <ClipPathGroup3 />
            <ClipPathGroup4 />
            <ClipPathGroup5 />
            <ClipPathGroup6 />
            <ClipPathGroup7 />
            <ClipPathGroup8 />
            <ClipPathGroup9 />
            <ClipPathGroup10 />
            <ClipPathGroup11 />
            <ClipPathGroup12 />
          </div>
          <div className="absolute inset-[38.89%_88.9%_38.18%_0.63%]" data-name="MicrosoftTeams-image (4) (1) 1">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-contain cursor-pointer size-full" 
              src={imgMicrosoftTeamsImage411} 
              onClick={() => {
                setActivePage("home");
                navigate("/");
              }} 
            />
          </div>
          <div className="absolute inset-[33.33%_80.37%_39.02%_13.35%]" data-name="Phiv">
            <div className="absolute inset-[80.21%_32.52%_19.36%_67.47%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0145272 0.0858483">
                <path d={svgPaths.p3e47b280} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.2%_32.5%_19.36%_67.48%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0142901 0.0884614">
                <path d={svgPaths.pd407100} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.33%_32.49%_19.35%_67.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.016667 0.0629805">
                <path d={svgPaths.p3103d480} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.33%_32.48%_19.36%_67.51%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.00836624 0.0616353">
                <path d={svgPaths.pffc8b80} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.33%_32.46%_19.36%_67.52%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0242983 0.0617559">
                <path d={svgPaths.p16a51880} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.33%_32.44%_19.35%_67.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0183855 0.0637143">
                <path d={svgPaths.p2a623b00} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.33%_32.43%_19.35%_67.56%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0144709 0.0637143">
                <path d={svgPaths.p1bb39300} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.25%_32.42%_19.35%_67.57%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0130823 0.079442">
                <path d={svgPaths.p177be300} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.21%_32.41%_19.36%_67.58%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.00562467 0.0863366">
                <path d={svgPaths.p1b05ad00} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[80.34%_32.4%_19.36%_67.59%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.0171093 0.0602954">
                <path d={svgPaths.p2ff8dc80} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <Group />
            <div className="absolute inset-[19.69%_92.14%_1.35%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.39764 15.719">
                <path d={svgPaths.p12b4e800} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[17.06%_83.54%_1.57%_8.73%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.24374 16.1973">
                <path d={svgPaths.p1c29be80} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.74%_73.47%_0.34%_17.52%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7812 11.5317">
                <path d={svgPaths.p203ce200} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.74%_67.92%_1.57%_27.56%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.41014 11.2854">
                <path d={svgPaths.p21fd7680} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.74%_53.91%_1.46%_32.95%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7154 11.3078">
                <path d={svgPaths.p3360d7f0} fill="var(--fill-0, #178466)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.4%_42.88%_0_47.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8973 11.6661">
                <path d={svgPaths.p2b67fe00} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[41.4%_34.7%_0_57.47%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.36014 11.6661">
                <path d={svgPaths.p2ddba8c0} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[26.82%_27.41%_0.11%_65.51%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.46302 14.5461">
                <path d={svgPaths.p25330500} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[19.13%_23.42%_1.46%_73.54%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.63838 15.8086">
                <path d={svgPaths.p24d7e810} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[43.08%_13.29%_1.46%_77.46%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.069 11.0402">
                <path d={svgPaths.p28a2e200} fill="var(--fill-0, #95BE2E)" id="Vector" />
              </svg>
            </div>
            <Group1 />
          </div>
        </div>
        <div className="relative h-[55px] w-full">
          <HeaderVert />
        </div>
      </div>
      <BodyHeaderSticky />
    </div>
  );
}
