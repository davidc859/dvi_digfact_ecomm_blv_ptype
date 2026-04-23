import svgPaths from "./svg-t94jerv0tz";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router";
import { 
  List as ListIcon, 
  MessageSquareText, 
  ClipboardCheck, 
  FolderOpen, 
  ShoppingBasket, 
  ListTodo,
  Mail,
  Truck
} from "lucide-react";
import BlvPage from "../app/components/BlvPage";
import Panier from "./Panier200825";
import imgImage from "figma:asset/d5d0f48cc01bc68440e18c2531c337b8446e3bd2.png";
import imgMenuOutils from "figma:asset/935622ac98554ad7ffbcdf1e39734380b8fb02aa.png";
import imgImageLogoDigipharmacie from "figma:asset/a2cbd81fae668763660d179040f4ab4ca66f16cf.png";
import imgImageLogoMarketPlace from "figma:asset/f971762d82a7915d8ed1d02a438f29dc784975db.png";
import imgImageImgBorderUp from "figma:asset/3c8ff2f931e9ba02d2389198d1681116fb626d90.png";
import imgImageImgBorderUp1 from "figma:asset/df078394db35279c460604d89ebc87e372b12095.png";
import imgImageImgBorderUp2 from "figma:asset/030a455b69b3f66b01dd47defaff846f4ca3ef00.png";
import imgImageImgPromo from "figma:asset/87dd5852ddd1a5e2a5df14563aab22541544ad68.png";
import imgImageImgPromo1 from "figma:asset/c7d9185d13f74434ca74640e004193e93c824dc2.png";
import imgImageImgPromo2 from "figma:asset/df4f61a574d09b155dafacbf2293d48418f3c25b.png";
import imgImageImgPromo3 from "figma:asset/9db7c41df0fe343f1893be91f557c70b4154b179.png";
import imgImageBanniereElement from "figma:asset/e8580467e047067b3757949a538a120962bd79b3.png";
import imgImageBanniereElement1 from "figma:asset/46b28eb05a63d64322ae8cab3cebb26bfe98a8fd.png";
import imgVector from "figma:asset/2b9afb47283ae852c804ec9391e4ca52846f7162.png";
import imgFrame from "figma:asset/a3a59d6128dc1245f0332aadc2be944e0d464731.png";
import imgMicrosoftTeamsImage411 from "figma:asset/dbfa5e366420b93d7558fb7c86002deb90f8d77e.png";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3, imgGroup4, imgGroup5, imgGroup6 } from "./svg-m97hz";

type PageType = "home" | "blv" | "panier";
export const PageContext = createContext<{ activePage: PageType; setActivePage: (page: PageType) => void }>({ activePage: "home", setActivePage: () => {} });

function Div() {
  return (
    <div className="absolute h-[39px] left-[70px] top-[16px] w-[256px]" data-name="Div">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic pb-[3182.766px] pl-0 pr-[9.188px] pt-0 relative size-full text-[9.5px] text-nowrap text-white">
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[13px] text-nowrap">{`PHOENIX-OCP est certifié ISO 9001:2015 pour son `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[13px] text-nowrap">{`activité de distribution des produits à destination des `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[13px] text-nowrap">officines, des hôpitaux et des établissements de santé.</p>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[55px] left-0 top-0 w-[60px]" data-name="Image">
      <img alt="Logo ISO 9001:2015 - Certification qualité" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function DivFooterIso() {
  return (
    <div className="absolute h-[55px] left-[1378.5px] top-[169.02px] w-[326px]" data-name="Div [footer-iso9001]">
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
    <div className="absolute h-[80.5px] left-[505px] top-[130.69px] w-[302px]" data-name="Div">
      <Icon />
      <Icon1 />
      <Icon2 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[20px] h-[38.19px] items-start leading-[0] left-[260.64px] not-italic pb-[10.587px] pl-[10px] pr-[525.875px] pt-[9.4px] text-[13.2px] text-nowrap text-white top-[77.5px] w-[653px]" data-name="Div">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18.2px] text-nowrap">Données personnelles et cookies</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18.2px] text-nowrap">Informations légales</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18.2px] text-nowrap">Préférences de cookies</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18.2px] text-nowrap">Service client</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18.2px] text-nowrap">Aide</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18.2px] text-nowrap">CGU</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18.2px] text-nowrap">CGV</p>
      </div>
    </div>
  );
}

function Icon3() {
  return <div className="absolute h-[42.5px] left-[1142.98px] top-[10px] w-[111.57px]" data-name="Icon" />;
}

function Icon4() {
  return <div className="absolute h-[22px] left-[907.03px] top-[20.25px] w-[187px]" data-name="Icon" />;
}

function Icon5() {
  return <div className="absolute h-[20.9px] left-[761.28px] top-[20.8px] w-[96.8px]" data-name="Icon" />;
}

function ImageLogoDigipharmacie() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10.8px]" data-name="Image [logo-digipharmacie]">
      <img alt="Logo Digipharmacie" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogoDigipharmacie} />
    </div>
  );
}

function LinkDigipharmacie() {
  return (
    <div className="absolute h-[40.8px] left-[563px] top-[10.84px] w-[164.83px]" data-name="Link [digipharmacie]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[33px] not-italic text-[15.1px] text-nowrap text-white top-[20.1px] translate-y-[-50%]">
        <p className="leading-[20.8px]">DIGIPHARMACIE</p>
      </div>
      <ImageLogoDigipharmacie />
    </div>
  );
}

function ImageLogoMarketPlace() {
  return (
    <div className="absolute h-[22px] left-[392.05px] top-[20.25px] w-[143px]" data-name="Image [logo-market-place]">
      <img alt="Logo Market Place" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogoMarketPlace} />
    </div>
  );
}

function Icon6() {
  return <div className="absolute h-[28.6px] left-[195.7px] top-[16.95px] w-[152.9px]" data-name="Icon" />;
}

function Icon7() {
  return <div className="absolute h-[29.69px] left-[33.45px] top-[16.41px] w-[113.3px]" data-name="Icon" />;
}

function DivFooterRow() {
  return (
    <div className="absolute h-[62.5px] left-[12px] top-0 w-[1288px]" data-name="Div [footer-row]">
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
    <div className="absolute h-[246.33px] left-[292.5px] top-0 w-[1320px]" data-name="Div [container]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[564.23px] not-italic text-[9.5px] text-nowrap text-white top-[232.19px] translate-y-[-50%]">
        <p className="leading-[13px]">© PHOENIX OCP 2024 All rights reserved</p>
      </div>
      <Div1 />
      <Div2 />
      <DivFooterRow />
    </div>
  );
}

function Icon8() {
  return <div className="absolute h-[52px] left-[1745.75px] top-[98.53px] w-[64px]" data-name="Icon" />;
}

function Icon9() {
  return <div className="absolute h-[42px] left-[95.25px] top-[98.53px] w-[41px]" data-name="Icon" />;
}

function FooterFooterMpGlobalHome() {
  return (
    <div className="absolute bg-[#343a40] h-[246.33px] left-0 top-[3010.75px] w-[1905px]" data-name="Footer [footer-mp-global-home]">
      <DivFooterIso />
      <DivContainer />
      <Icon8 />
      <Icon9 />
    </div>
  );
}

function SpanContenu() {
  return (
    <div className="h-[44px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-[16px] text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">vise 2 000 structures labellisées mi-2026</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[23px] text-[#343a40] top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{` Accès aux soins : le réseau France santé `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] top-[11px] translate-y-[-50%]">
          <p className="leading-[16px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute h-[59px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2829.563px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">13/11/2025</p>
        </div>
        <SpanContenu />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[113.19px] left-[20px] top-[685.56px] w-[360px]" data-name="Div [contenu-border]">
      <Div3 />
      <Image1 />
    </div>
  );
}

function SpanContenu1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-[16px] text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[55.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">la vitesse de sédimentation</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{`recommande de ne plus prescrire le test de `}</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[23px] text-[#343a40] top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{` Examens biologiques : la HAS `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] top-[11px] translate-y-[-50%]">
          <p className="leading-[16px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute h-[79px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2676.375px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">17/11/2025</p>
        </div>
        <SpanContenu1 />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder1() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[113.19px] left-[20px] top-[552.38px] w-[360px]" data-name="Div [contenu-border]">
      <Div4 />
      <Image2 />
    </div>
  );
}

function SpanContenu2() {
  return (
    <div className="h-[44px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-[16px] text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">accessible à tous les assurés</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[23px] text-[#343a40] top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{` L'application carte Vitale est enfin `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] top-[11px] translate-y-[-50%]">
          <p className="leading-[16px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute h-[59px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2583.188px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">18/11/2025</p>
        </div>
        <SpanContenu2 />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder2() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[93.19px] left-[20px] top-[439.19px] w-[360px]" data-name="Div [contenu-border]">
      <Div5 />
      <Image3 />
    </div>
  );
}

function SpanPuceInfo() {
  return (
    <div className="bg-[#ededed] h-[25px] mb-[-5.813px] relative rounded-[42px] shrink-0 w-[166px]" data-name="Span [puce-info]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#778390] text-[13.2px] text-nowrap top-[9.6px] translate-y-[-50%]">
          <p className="leading-[16.8px]">Auteur : APM International</p>
        </div>
      </div>
    </div>
  );
}

function SpanContenu3() {
  return (
    <div className="h-[116px] relative shrink-0 w-[360px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[101.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px] text-nowrap">fauteuils roulants</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[72.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px] text-nowrap">{`du remboursement intégral des `}</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[43.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px] text-nowrap">{`précisions pour l'entrée en vigueur `}</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[29.75px] text-[#343a40] text-[22px] top-[14.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px] text-nowrap">{` Un décret fixe les dernières `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] text-[22.2px] top-[15px] translate-y-[-50%]">
          <p className="leading-[22px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function DivPT3() {
  return (
    <div className="h-[133px] mb-[-5.813px] relative shrink-0 w-[390px]" data-name="Div [p-t-20]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[21.1px] items-start pb-[2389.387px] pl-0 pr-[30px] pt-[20px] relative size-full">
        <SpanContenu3 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[13.2px] text-nowrap">
          <p className="leading-[16.8px]">Publié le 01/12/2025</p>
        </div>
      </div>
    </div>
  );
}

function DivPT() {
  return (
    <div className="absolute h-[158px] left-[20px] top-[200px] w-[400px]" data-name="Div [p-t-5]">
      <div className="content-stretch flex flex-col items-start pb-[2202.813px] pt-[15px] px-[5px] relative size-full">
        <SpanPuceInfo />
        <DivPT3 />
      </div>
    </div>
  );
}

function ImageImgBorderUp() {
  return (
    <div className="absolute h-[200px] left-0 rounded-tl-[20px] rounded-tr-[20px] top-0 w-[400px]" data-name="Image [img-border-up]">
      <img alt="Image de présentation des outils" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-tl-[20px] rounded-tr-[20px] size-full" src={imgImageImgBorderUp} />
    </div>
  );
}

function DivCategoriesColumn() {
  return (
    <div className="bg-[#f7f7f7] h-[798.75px] relative rounded-[20px] shrink-0 w-[400px]" data-name="Div [categories-column]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivContenuBorder />
        <DivContenuBorder1 />
        <DivContenuBorder2 />
        <DivPT />
        <ImageImgBorderUp />
      </div>
    </div>
  );
}

function DivColonnesALaUne() {
  return (
    <div className="h-[834.75px] relative shrink-0 w-[440px]" data-name="Div [colonnes-a-la-une]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.5px] items-start pb-[1302.25px] pt-[22.5px] px-[20px] relative size-full">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#343a40] text-[30px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[36px]">Actualités professionnelles</p>
        </div>
        <DivCategoriesColumn />
      </div>
    </div>
  );
}

function SpanActualitePuce() {
  return (
    <div className="absolute bg-[orange] h-[19px] left-0 rounded-[5px] top-[2px] w-[84px]" data-name="Span [actualite-puce]">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[4px] text-[14px] text-nowrap text-white top-[9.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.8px]">Laboratoire</p>
      </div>
    </div>
  );
}

function SpanContenu4() {
  return (
    <div className="h-[64px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[16px] text-nowrap top-[55.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px]">monde est concerné</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[16px] text-nowrap top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px]">{`traumatisme ou reprise d’activité, tout le `}</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[116.66px] text-[#343a40] text-[16px] text-nowrap top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px]">{` Entorse de la cheville : `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[93.66px] not-italic text-[#1da881] text-[16px] text-nowrap top-[11px] translate-y-[-50%]">
          <p className="leading-[16px]"></p>
        </div>
        <SpanActualitePuce />
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute h-[79px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2731.563px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">02/06/2025</p>
        </div>
        <SpanContenu4 />
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder3() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[133.19px] left-[20px] top-[607.56px] w-[360px]" data-name="Div [contenu-border]">
      <Div6 />
      <Image4 />
    </div>
  );
}

function SpanContenu5() {
  return (
    <div className="h-[44px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-[16px] text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{`d’urgence : les chiffres à l'officine`}</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[23px] text-[#343a40] top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{` Marché des préservatifs et contraception `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] top-[11px] translate-y-[-50%]">
          <p className="leading-[16px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute h-[59px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2638.375px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">14/07/2025</p>
        </div>
        <SpanContenu5 />
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder4() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[93.19px] left-[20px] top-[494.38px] w-[360px]" data-name="Div [contenu-border]">
      <Div7 />
      <Image5 />
    </div>
  );
}

function SpanContenu6() {
  return (
    <div className="h-[44px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-[16px] text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">contraception</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[23px] text-[#343a40] top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{` En vacances, on oublie tout… sauf la `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] top-[11px] translate-y-[-50%]">
          <p className="leading-[16px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute h-[59px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2525.188px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">15/07/2025</p>
        </div>
        <SpanContenu6 />
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder5() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[93.19px] left-[20px] top-[381.19px] w-[360px]" data-name="Div [contenu-border]">
      <Div8 />
      <Image6 />
    </div>
  );
}

function SpanPuceInfo1() {
  return (
    <div className="bg-[#ededed] h-[25px] mb-[-5.813px] relative rounded-[42px] shrink-0 w-[125px]" data-name="Span [puce-info]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#778390] text-[13.2px] text-nowrap top-[9.6px] translate-y-[-50%]">
          <p className="leading-[16.8px]">Auteur : Laboratoire</p>
        </div>
      </div>
    </div>
  );
}

function SpanActualitePuce1() {
  return (
    <div className="absolute bg-[orange] h-[19px] left-0 rounded-[5px] top-[8px] w-[84px]" data-name="Span [actualite-puce]">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[4px] text-[14px] text-nowrap text-white top-[9.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.8px]">Laboratoire</p>
      </div>
    </div>
  );
}

function SpanContenu7() {
  return (
    <div className="h-[58px] relative shrink-0 w-[360px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[22px] text-nowrap top-[43.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px]">sevrage tabagique avec Nicorette®</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[123.41px] text-[#343a40] text-[22px] text-nowrap top-[14.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px]">{` Kenvue engagé sur le `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[93.66px] not-italic text-[#1da881] text-[22.2px] text-nowrap top-[15px] translate-y-[-50%]">
          <p className="leading-[22px]"></p>
        </div>
        <SpanActualitePuce1 />
      </div>
    </div>
  );
}

function DivPT4() {
  return (
    <div className="h-[75px] mb-[-5.813px] relative shrink-0 w-[390px]" data-name="Div [p-t-20]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[21.1px] items-start pb-[2389.387px] pl-0 pr-[30px] pt-[20px] relative size-full">
        <SpanContenu7 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[13.2px] text-nowrap">
          <p className="leading-[16.8px]">Publié le 15/12/2025</p>
        </div>
      </div>
    </div>
  );
}

function DivPT1() {
  return (
    <div className="absolute h-[100px] left-[20px] top-[200px] w-[400px]" data-name="Div [p-t-5]">
      <div className="content-stretch flex flex-col items-start pb-[2260.813px] pt-[15px] px-[5px] relative size-full">
        <SpanPuceInfo1 />
        <DivPT4 />
      </div>
    </div>
  );
}

function ImageImgBorderUp1() {
  return (
    <div className="absolute h-[200px] left-0 rounded-tl-[20px] rounded-tr-[20px] top-0 w-[400px]" data-name="Image [img-border-up]">
      <img alt="Image de présentation des services" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-tl-[20px] rounded-tr-[20px] size-full" src={imgImageImgBorderUp1} />
    </div>
  );
}

function DivCategoriesColumn1() {
  return (
    <div className="bg-[#f7f7f7] h-[740.75px] relative rounded-[20px] shrink-0 w-[400px]" data-name="Div [categories-column]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivContenuBorder3 />
        <DivContenuBorder4 />
        <DivContenuBorder5 />
        <DivPT1 />
        <ImageImgBorderUp1 />
      </div>
    </div>
  );
}

function DivColonnesALaUne1() {
  return (
    <div className="h-[776.75px] relative shrink-0 w-[440px]" data-name="Div [colonnes-a-la-une]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.5px] items-start pb-[1360.25px] pt-[22.5px] px-[20px] relative size-full">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#343a40] text-[30px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[36px]">Dossiers</p>
        </div>
        <DivCategoriesColumn1 />
      </div>
    </div>
  );
}

function SpanActualitePuce2() {
  return (
    <div className="absolute bg-[#73ab19] h-[19px] left-0 rounded-[5px] top-[2px] w-[74px]" data-name="Span [actualite-puce]">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[4px] text-[14px] text-nowrap text-white top-[9.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.8px]">Important</p>
      </div>
    </div>
  );
}

function SpanContenu8() {
  return (
    <div className="h-[44px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#343a40] text-[16px] text-nowrap top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px]">DM</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[106.8px] text-[#343a40] text-[16px] text-nowrap top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px]">{` Fiches Covid-19 : Vaccins et `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[83.8px] not-italic text-[#1da881] text-[16px] text-nowrap top-[11px] translate-y-[-50%]">
          <p className="leading-[16px]"></p>
        </div>
        <SpanActualitePuce2 />
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute h-[59px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2800.563px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">30/09/2025</p>
        </div>
        <SpanContenu8 />
      </div>
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder6() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[113.19px] left-[20px] top-[656.56px] w-[360px]" data-name="Div [contenu-border]">
      <Div9 />
      <Image7 />
    </div>
  );
}

function SpanContenu9() {
  return (
    <div className="h-[44px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-[16px] text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">Ile-de-France</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[23px] text-[#343a40] top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{` L'épidémie de bronchiolite se confirme en `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] top-[11px] translate-y-[-50%]">
          <p className="leading-[16px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute h-[59px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2687.375px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">06/11/2025</p>
        </div>
        <SpanContenu9 />
      </div>
    </div>
  );
}

function Image8() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder7() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[93.19px] left-[20px] top-[543.38px] w-[360px]" data-name="Div [contenu-border]">
      <Div10 />
      <Image8 />
    </div>
  );
}

function SpanContenu10() {
  return (
    <div className="h-[64px] relative shrink-0 w-[325px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-[16px] text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[55.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">février et août</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] top-[33.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{`immunisé en ville avec Beyfortus entre `}</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[23px] text-[#343a40] top-[11.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[19.2px] text-nowrap">{` VRS : moins d'un nourrisson sur deux `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] top-[11px] translate-y-[-50%]">
          <p className="leading-[16px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute h-[79px] left-[30px] top-[15px] w-[325px]" data-name="Div">
      <div className="content-stretch flex flex-col gap-[6.988px] items-start pb-[2534.188px] pt-[1.8px] px-0 relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[11.8px] text-nowrap">
          <p className="leading-[14.4px]">13/11/2025</p>
        </div>
        <SpanContenu10 />
      </div>
    </div>
  );
}

function Image9() {
  return (
    <div className="absolute left-0 size-[20px] top-[45.3px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p33ab7680} id="Vector" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" />
        </g>
      </svg>
    </div>
  );
}

function DivContenuBorder8() {
  return (
    <div className="absolute border-[#8dd0bf] border-[1px_0px_0px] border-solid h-[113.19px] left-[20px] top-[410.19px] w-[360px]" data-name="Div [contenu-border]">
      <Div11 />
      <Image9 />
    </div>
  );
}

function SpanPuceInfo2() {
  return (
    <div className="bg-[#ededed] h-[25px] mb-[-5.813px] relative rounded-[42px] shrink-0 w-[166px]" data-name="Span [puce-info]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#778390] text-[13.2px] text-nowrap top-[9.6px] translate-y-[-50%]">
          <p className="leading-[16.8px]">Auteur : APM International</p>
        </div>
      </div>
    </div>
  );
}

function SpanContenu11() {
  return (
    <div className="h-[87px] relative shrink-0 w-[360px]" data-name="Span [contenu]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] overflow-clip relative rounded-[inherit] size-full text-nowrap">
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[72.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px] text-nowrap">bronchiolite</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[43.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px] text-nowrap">{`métropole, sur fond diffus de `}</p>
        </div>
        <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[29.75px] text-[#343a40] text-[22px] top-[14.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26.4px] text-nowrap">{` La grippe atteint trois régions de `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] text-[22.2px] top-[15px] translate-y-[-50%]">
          <p className="leading-[22px] text-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function DivPT5() {
  return (
    <div className="h-[104px] mb-[-5.813px] relative shrink-0 w-[390px]" data-name="Div [p-t-20]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[21.1px] items-start pb-[2389.387px] pl-0 pr-[30px] pt-[20px] relative size-full">
        <SpanContenu11 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#778390] text-[13.2px] text-nowrap">
          <p className="leading-[16.8px]">Publié le 04/12/2025</p>
        </div>
      </div>
    </div>
  );
}

function DivPT2() {
  return (
    <div className="absolute h-[129px] left-[20px] top-[200px] w-[400px]" data-name="Div [p-t-5]">
      <div className="content-stretch flex flex-col items-start pb-[2231.813px] pt-[15px] px-[5px] relative size-full">
        <SpanPuceInfo2 />
        <DivPT5 />
      </div>
    </div>
  );
}

function ImageImgBorderUp2() {
  return (
    <div className="absolute h-[200px] left-0 rounded-tl-[20px] rounded-tr-[20px] top-0 w-[400px]" data-name="Image [img-border-up]">
      <img alt="Image de présentation des produits" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-tl-[20px] rounded-tr-[20px] size-full" src={imgImageImgBorderUp2} />
    </div>
  );
}

function DivCategoriesColumn2() {
  return (
    <div className="bg-[#f7f7f7] h-[769.75px] relative rounded-[20px] shrink-0 w-[400px]" data-name="Div [categories-column]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivContenuBorder6 />
        <DivContenuBorder7 />
        <DivContenuBorder8 />
        <DivPT2 />
        <ImageImgBorderUp2 />
      </div>
    </div>
  );
}

function DivColonnesALaUne2() {
  return (
    <div className="h-[805.75px] relative shrink-0 w-[440px]" data-name="Div [colonnes-a-la-une]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.5px] items-start pb-[1331.25px] pt-[22.5px] px-[20px] relative size-full">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#343a40] text-[30px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[36px]">Actus Pathos</p>
        </div>
        <DivCategoriesColumn2 />
      </div>
    </div>
  );
}

function DivRow() {
  return (
    <div className="absolute content-stretch flex h-[909.75px] items-start left-[0.5px] pl-[139px] pr-0 py-0 top-[297px] w-[1320px]" data-name="Div [row]">
      <DivColonnesALaUne />
      <DivColonnesALaUne1 />
      <DivColonnesALaUne2 />
    </div>
  );
}

function SpanPx() {
  return (
    <div className="absolute bg-[#ededed] h-[25px] left-[20px] rounded-[42px] top-[171px] w-[182px]" data-name="Span [px-2]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] not-italic text-[#778390] text-[13.2px] text-nowrap top-[9.6px] translate-y-[-50%]">
        <p className="leading-[16.8px]">Auteur : APM International</p>
      </div>
    </div>
  );
}

function DivTruncateOver() {
  return (
    <div className="absolute h-[92px] leading-[0] left-[20px] overflow-clip text-nowrap top-[59px] w-[270px]" data-name="Div [truncate-over-3]">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[43.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`substituable à l'officine`}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[29.75px] text-[#343a40] text-[22px] top-[14.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{` L'aflibercept désormais `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] text-[22.2px] top-[15px] translate-y-[-50%]">
        <p className="leading-[22px] text-nowrap"></p>
      </div>
    </div>
  );
}

function DivShadowHighlightBig() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[216px] left-0 overflow-clip rounded-[20px] top-0 w-[310px]" data-name="Div [shadow-highlight-big]">
      <SpanPx />
      <DivTruncateOver />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[20px] not-italic text-[#778390] text-[13.2px] text-nowrap top-[29.6px] translate-y-[-50%]">
        <p className="leading-[16.8px]">Publié le 09/12/2025</p>
      </div>
    </div>
  );
}

function SpanPx1() {
  return (
    <div className="absolute bg-[#ededed] h-[25px] left-[20px] rounded-[42px] top-[171px] w-[208px]" data-name="Span [px-2]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] not-italic text-[#778390] text-[13.2px] text-nowrap top-[9.6px] translate-y-[-50%]">
        <p className="leading-[16.8px]">Auteur : Pharmacien rédacteur</p>
      </div>
    </div>
  );
}

function DivTruncateOver1() {
  return (
    <div className="absolute h-[92px] leading-[0] left-[20px] overflow-clip text-nowrap top-[59px] w-[270px]" data-name="Div [truncate-over-3]">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[101.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">2026</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[72.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`prévus au mois de janvier `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[43.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`changements de prix `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[29.75px] text-[#343a40] text-[22px] top-[14.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{` De nombreux `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] text-[22.2px] top-[15px] translate-y-[-50%]">
        <p className="leading-[22px] text-nowrap"></p>
      </div>
    </div>
  );
}

function DivShadowHighlightBig1() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[216px] left-[325px] overflow-clip rounded-[20px] top-0 w-[310px]" data-name="Div [shadow-highlight-big]">
      <SpanPx1 />
      <DivTruncateOver1 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[20px] not-italic text-[#778390] text-[13.2px] text-nowrap top-[29.6px] translate-y-[-50%]">
        <p className="leading-[16.8px]">Publié le 04/12/2025</p>
      </div>
    </div>
  );
}

function SpanPx2() {
  return (
    <div className="absolute bg-[#ededed] h-[25px] left-[20px] rounded-[42px] top-[171px] w-[182px]" data-name="Span [px-2]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] not-italic text-[#778390] text-[13.2px] text-nowrap top-[9.6px] translate-y-[-50%]">
        <p className="leading-[16.8px]">Auteur : APM International</p>
      </div>
    </div>
  );
}

function DivTruncateOver2() {
  return (
    <div className="absolute h-[92px] leading-[0] left-[20px] overflow-clip text-nowrap top-[59px] w-[270px]" data-name="Div [truncate-over-3]">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[159.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">Arexvy et Beyfortus</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[130.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`déclarés avec Abrysvo, `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[101.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`de pharmacovigilance `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[72.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`fréquentes parmi les cas `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[43.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`médicamenteuses `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[29.75px] text-[#343a40] text-[22px] top-[14.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{` VRS : des erreurs `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] text-[22.2px] top-[15px] translate-y-[-50%]">
        <p className="leading-[22px] text-nowrap"></p>
      </div>
    </div>
  );
}

function DivShadowHighlightBig2() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[216px] left-[650px] overflow-clip rounded-[20px] top-0 w-[310px]" data-name="Div [shadow-highlight-big]">
      <SpanPx2 />
      <DivTruncateOver2 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[20px] not-italic text-[#778390] text-[13.2px] text-nowrap top-[29.6px] translate-y-[-50%]">
        <p className="leading-[16.8px]">Publié le 04/12/2025</p>
      </div>
    </div>
  );
}

function SpanPx3() {
  return (
    <div className="absolute bg-[#ededed] h-[25px] left-[20px] rounded-[42px] top-[171px] w-[182px]" data-name="Span [px-2]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] not-italic text-[#778390] text-[13.2px] text-nowrap top-[9.6px] translate-y-[-50%]">
        <p className="leading-[16.8px]">Auteur : APM International</p>
      </div>
    </div>
  );
}

function DivTruncateOver3() {
  return (
    <div className="absolute h-[92px] leading-[0] left-[20px] overflow-clip text-nowrap top-[59px] w-[270px]" data-name="Div [truncate-over-3]">
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[130.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`d'absence`}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[101.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`Spray après cinq ans `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[72.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`nasal Octim et Minirin `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#343a40] text-[22px] top-[43.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{`desmopressines en spray `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-[29.75px] text-[#343a40] text-[22px] top-[14.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px] text-nowrap">{` Prochain retour des `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center left-0 not-italic text-[#1da881] text-[22.2px] top-[15px] translate-y-[-50%]">
        <p className="leading-[22px] text-nowrap"></p>
      </div>
    </div>
  );
}

function DivShadowHighlightBig3() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[216px] left-[975px] overflow-clip rounded-[20px] top-0 w-[310px]" data-name="Div [shadow-highlight-big]">
      <SpanPx3 />
      <DivTruncateOver3 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[20px] not-italic text-[#778390] text-[13.2px] text-nowrap top-[29.6px] translate-y-[-50%]">
        <p className="leading-[16.8px]">Publié le 04/12/2025</p>
      </div>
    </div>
  );
}

function DivCarouselItem() {
  return (
    <div className="absolute h-[216px] left-[29.03px] top-[71px] w-[1285px]" data-name="Div [carousel-item]">
      <DivShadowHighlightBig />
      <DivShadowHighlightBig1 />
      <DivShadowHighlightBig2 />
      <DivShadowHighlightBig3 />
    </div>
  );
}

function DivCarouselInner() {
  return (
    <div className="absolute h-[297px] left-[55.73px] overflow-clip top-0 w-[1358.06px]" data-name="Div [carousel-inner]">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[30px] text-[#343a40] text-[30px] text-nowrap top-[40.5px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[36px]">Actualités produits</p>
      </div>
      <DivCarouselItem />
    </div>
  );
}

function DivSlideshowElementActu() {
  return (
    <div className="absolute h-[297px] left-[67.23px] top-0 w-[1461.531px]" data-name="Div [slideshowElementActu]">
      <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[1439.53px] not-italic text-[20px] text-black text-nowrap top-[147.47px] translate-y-[-50%]">
        <p className="leading-[24px]"></p>
      </div>
      <DivCarouselInner />
      <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center leading-[0] left-0 not-italic text-[20px] text-black text-nowrap top-[147.47px] translate-y-[-50%]">
        <p className="leading-[24px]"></p>
      </div>
    </div>
  );
}

function DivRow1() {
  return (
    <div className="absolute h-[1207px] left-[-15.5px] top-[98px] w-[1529px]" data-name="Div [row]">
      <DivRow />
      <DivSlideshowElementActu />
    </div>
  );
}

function DivHomepageDownPanel() {
  return (
    <div className="absolute h-[1304.75px] left-[164.5px] top-0 w-[1568px]" data-name="Div [homepageDownPanel]">
      <DivRow1 />
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[719.19px] text-[#343a40] text-[36px] text-nowrap top-[74.4px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[43.2px]">À la une</p>
      </div>
    </div>
  );
}

function ChevronPagination() {
  return (
    <div className="absolute h-[32px] left-[188px] top-[248px] w-[18px]" data-name="chevron pagination">
      <div className="absolute inset-[-0.26%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 32.0837">
          <g id="chevron pagination">
            <path d={svgPaths.p3d6bfb70} fill="var(--fill-0, black)" id="Icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChevronPagination1() {
  return (
    <div className="h-[32px] relative w-[18.286px]" data-name="chevron pagination">
      <div className="absolute inset-[-1.03%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2857 32.331">
          <g id="chevron pagination">
            <path d={svgPaths.p17e20100} fill="var(--fill-0, black)" id="Icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DivHomepageActualites() {
  return (
    <div className="absolute bg-[#8dd0bf] h-[1304.75px] left-0 top-[1579px] w-[1905px]" data-name="Div [homepageActualites]">
      <div className="absolute flex h-[32px] items-center justify-center left-[1667px] top-[248px] w-[18.286px]">
        <div className="flex-none rotate-[180deg]">
          <ChevronPagination1 />
        </div>
      </div>
      <DivHomepageDownPanel />
      <ChevronPagination />
    </div>
  );
}

function ImageImgPromo() {
  return (
    <div className="absolute h-[245px] left-0 top-0 w-[343px]" data-name="Image [img-promo]">
      <img alt="Image promotionnelle" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageImgPromo} />
    </div>
  );
}

function DivMesPromosEncartVisuel() {
  return (
    <div className="absolute bg-white h-[245px] left-[0.85px] overflow-clip top-[0.85px] w-[343px]" data-name="Div [mes-promos-encart-visuel]">
      <ImageImgPromo />
    </div>
  );
}

function DivMesPromosLabelRemise() {
  return (
    <div className="absolute bg-[#dc3545] h-[35px] left-[52.47px] rounded-[20px] top-[81.6px] w-[219.52px]" data-name="Div [mes-promos-label-remise]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[77.1px] not-italic text-[15.1px] text-nowrap text-white top-[14.85px] translate-y-[-50%]">
        <p className="leading-[19.2px]">- 30%</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartDateValidite() {
  return (
    <div className="absolute h-[13px] left-0 top-[116.45px] w-[343px]" data-name="Div [mes-promos-encart-date-validite]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[96.33px] not-italic text-[#888] text-[9.5px] text-nowrap top-[5.1px] translate-y-[-50%]">
        <p className="leading-[13px]">Date de validité: 31/12/25</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartBottomContainer() {
  return (
    <div className="absolute h-[130px] left-[0.85px] top-[209.1px] w-[343px]" data-name="Div [mes-promos-encart-bottom-container]">
      <DivMesPromosLabelRemise />
      <DivMesPromosEncartDateValidite />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[80.27px] not-italic text-[#222] text-[15.1px] text-nowrap top-[46.85px] translate-y-[-50%]">
        <p className="leading-[20.8px]">{`Articulation & Muscle`}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[93.1px] not-italic text-[#222] text-[17px] text-nowrap top-[20.18px] translate-y-[-50%]">
        <p className="leading-[28.6px]">Puressentiel</p>
      </div>
    </div>
  );
}

function DivEncartPromo() {
  return (
    <div className="bg-[#f7f7f7] h-[400px] mr-[-6.141px] relative rounded-[4px] shrink-0 w-[345px]" data-name="Div [encart-promo]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <DivMesPromosEncartVisuel />
        <DivMesPromosEncartBottomContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DivMesPromosLabelRemise1() {
  return (
    <div className="absolute bg-[#dc3545] h-[35px] left-[52.47px] rounded-[20px] top-[81.6px] w-[219.52px]" data-name="Div [mes-promos-label-remise]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[51.74px] not-italic text-[15.1px] text-nowrap text-white top-[14.85px] translate-y-[-50%]">
        <p className="leading-[19.2px]">{`Jusqu'à - 20%`}</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartDateValidite1() {
  return (
    <div className="absolute h-[13px] left-0 top-[116.45px] w-[343px]" data-name="Div [mes-promos-encart-date-validite]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[96.33px] not-italic text-[#888] text-[9.5px] text-nowrap top-[5.1px] translate-y-[-50%]">
        <p className="leading-[13px]">Date de validité: 31/12/25</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartBottomContainer1() {
  return (
    <div className="absolute h-[130px] left-[0.85px] top-[209.1px] w-[343px]" data-name="Div [mes-promos-encart-bottom-container]">
      <DivMesPromosLabelRemise1 />
      <DivMesPromosEncartDateValidite1 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[94.81px] not-italic text-[#222] text-[15.1px] text-nowrap top-[46.85px] translate-y-[-50%]">
        <p className="leading-[20.8px]">Pack découverte</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[120.87px] not-italic text-[#222] text-[17px] text-nowrap top-[20.18px] translate-y-[-50%]">
        <p className="leading-[28.6px]">Ouate</p>
      </div>
    </div>
  );
}

function ImageImgPromo1() {
  return (
    <div className="absolute h-[245px] left-0 top-0 w-[343px]" data-name="Image [img-promo]">
      <img alt="Image promotionnelle" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageImgPromo1} />
    </div>
  );
}

function DivMesPromosEncartVisuel1() {
  return (
    <div className="absolute bg-white h-[245px] left-0 overflow-clip top-0 w-[343px]" data-name="Div [mes-promos-encart-visuel]">
      <ImageImgPromo1 />
    </div>
  );
}

function DivMesPromosPuce() {
  return (
    <div className="absolute bg-[#3f8276] h-[36.19px] left-[4.25px] top-[4.25px] w-[137.07px]" data-name="Div [mes-promos-puce]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16.15px] not-italic text-[11.3px] text-nowrap text-white top-[15.28px] translate-y-[-50%] uppercase">
        <p className="leading-[18.2px]">MARKETPLACE</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartTopContainer() {
  return (
    <div className="absolute h-[245px] left-[0.85px] top-[0.85px] w-[343px]" data-name="Div [mes-promos-encart-top-container]">
      <DivMesPromosEncartVisuel1 />
      <DivMesPromosPuce />
    </div>
  );
}

function DivEncartPromo1() {
  return (
    <div className="bg-[#f7f7f7] h-[400px] mr-[-6.141px] relative rounded-[4px] shrink-0 w-[345px]" data-name="Div [encart-promo]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <DivMesPromosEncartBottomContainer1 />
        <DivMesPromosEncartTopContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DivMesPromosLabelRemise2() {
  return (
    <div className="absolute bg-[#dc3545] h-[35px] left-[52.47px] rounded-[20px] top-[81.6px] w-[219.52px]" data-name="Div [mes-promos-label-remise]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[51.74px] not-italic text-[15.1px] text-nowrap text-white top-[14.85px] translate-y-[-50%]">
        <p className="leading-[19.2px]">{`Jusqu'à - 50%`}</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartDateValidite2() {
  return (
    <div className="absolute h-[13px] left-0 top-[116.45px] w-[343px]" data-name="Div [mes-promos-encart-date-validite]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[96.33px] not-italic text-[#888] text-[9.5px] text-nowrap top-[5.1px] translate-y-[-50%]">
        <p className="leading-[13px]">Date de validité: 31/12/25</p>
      </div>
    </div>
  );
}

function DivMesPromosTexte() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[45px] leading-[0] left-0 not-italic text-[#222] text-[15.1px] text-nowrap top-[38.25px] w-[343px]" data-name="Div [mes-promos-texte]">
      <div className="absolute flex flex-col justify-center left-[29.99px] top-[8.6px] translate-y-[-50%]">
        <p className="leading-[20.8px] text-nowrap">{`Aromathérapie Bio, Phytothérapie Bio, `}</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[41.2px] top-[26.28px] translate-y-[-50%]">
        <p className="leading-[20.8px] text-nowrap">Micronutrition, Infusions Bio, Thés</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartBottomContainer2() {
  return (
    <div className="absolute h-[130px] left-[0.85px] top-[209.1px] w-[343px]" data-name="Div [mes-promos-encart-bottom-container]">
      <DivMesPromosLabelRemise2 />
      <DivMesPromosEncartDateValidite2 />
      <DivMesPromosTexte />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[114.42px] not-italic text-[#222] text-[17px] text-nowrap top-[20.18px] translate-y-[-50%]">
        <p className="leading-[28.6px]">Dayang</p>
      </div>
    </div>
  );
}

function ImageImgPromo2() {
  return (
    <div className="absolute h-[245px] left-0 top-0 w-[343px]" data-name="Image [img-promo]">
      <img alt="Image promotionnelle" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageImgPromo2} />
    </div>
  );
}

function DivMesPromosEncartVisuel2() {
  return (
    <div className="absolute bg-white h-[245px] left-0 overflow-clip top-0 w-[343px]" data-name="Div [mes-promos-encart-visuel]">
      <ImageImgPromo2 />
    </div>
  );
}

function DivMesPromosPuce1() {
  return (
    <div className="absolute bg-[#ad5999] h-[36.19px] left-[4.25px] top-[4.25px] w-[217.33px]" data-name="Div [mes-promos-puce]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16.15px] not-italic text-[11.3px] text-nowrap text-white top-[15.28px] translate-y-[-50%] uppercase">
        <p className="leading-[18.2px]">OFFRE QUADRIMESTRIELLE</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartTopContainer1() {
  return (
    <div className="absolute h-[245px] left-[0.85px] top-[0.85px] w-[343px]" data-name="Div [mes-promos-encart-top-container]">
      <DivMesPromosEncartVisuel2 />
      <DivMesPromosPuce1 />
    </div>
  );
}

function DivEncartPromo2() {
  return (
    <div className="bg-[#f7f7f7] h-[400px] mr-[-6.141px] relative rounded-[4px] shrink-0 w-[345px]" data-name="Div [encart-promo]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <DivMesPromosEncartBottomContainer2 />
        <DivMesPromosEncartTopContainer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ImageImgPromo3() {
  return (
    <div className="absolute h-[245px] left-0 top-0 w-[343px]" data-name="Image [img-promo]">
      <img alt="Image promotionnelle" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageImgPromo3} />
    </div>
  );
}

function DivMesPromosEncartVisuel3() {
  return (
    <div className="absolute bg-white h-[245px] left-[0.85px] overflow-clip top-[0.85px] w-[343px]" data-name="Div [mes-promos-encart-visuel]">
      <ImageImgPromo3 />
    </div>
  );
}

function DivMesPromosLabelRemise3() {
  return (
    <div className="absolute bg-[#dc3545] h-[35px] left-[52.47px] rounded-[20px] top-[81.6px] w-[219.52px]" data-name="Div [mes-promos-label-remise]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[51.74px] not-italic text-[15.1px] text-nowrap text-white top-[14.85px] translate-y-[-50%]">
        <p className="leading-[19.2px]">{`Jusqu'à - 16%`}</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartDateValidite3() {
  return (
    <div className="absolute h-[13px] left-0 top-[116.45px] w-[343px]" data-name="Div [mes-promos-encart-date-validite]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[96.33px] not-italic text-[#888] text-[9.5px] text-nowrap top-[5.1px] translate-y-[-50%]">
        <p className="leading-[13px]">Date de validité: 31/12/25</p>
      </div>
    </div>
  );
}

function DivMesPromosEncartBottomContainer3() {
  return (
    <div className="absolute h-[130px] left-[0.85px] top-[209.1px] w-[343px]" data-name="Div [mes-promos-encart-bottom-container]">
      <DivMesPromosLabelRemise3 />
      <DivMesPromosEncartDateValidite3 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[83.51px] not-italic text-[#222] text-[15.1px] text-nowrap top-[46.85px] translate-y-[-50%]">
        <p className="leading-[20.8px]">Lipikar Eco-recharge</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[118.1px] not-italic text-[#222] text-[17px] text-nowrap top-[20.18px] translate-y-[-50%]">
        <p className="leading-[28.6px]">L’Oréal</p>
      </div>
    </div>
  );
}

function DivEncartPromo3() {
  return (
    <div className="bg-[#f7f7f7] h-[400px] mr-[-6.141px] relative rounded-[4px] shrink-0 w-[345px]" data-name="Div [encart-promo]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <DivMesPromosEncartVisuel3 />
        <DivMesPromosEncartBottomContainer3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function DivCarouselItem1() {
  return (
    <div className="absolute content-stretch flex h-[400px] items-start left-[10px] pb-0 pl-[5px] pr-[6.141px] pt-[30px] top-[129px] w-[1380px]" data-name="Div [carousel-item]">
      <DivEncartPromo />
      <DivEncartPromo1 />
      <DivEncartPromo2 />
      <DivEncartPromo3 />
    </div>
  );
}

function DivCarouselInner1() {
  return (
    <div className="absolute h-[529px] left-[67px] overflow-clip top-0 w-[1355.45px]" data-name="Div [carousel-inner]">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[20px] text-[#343a40] text-[30px] text-nowrap top-[128.5px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[36px]">Dernières nouveautés exclusives</p>
      </div>
      <DivCarouselItem1 />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[20px] not-italic text-[#222] text-[33.3px] text-nowrap top-[74.4px] translate-y-[-50%]">
        <p className="leading-[43.2px]">Les offres à ne pas manquer</p>
      </div>
    </div>
  );
}

function DivSlideshowElement() {
  return (
    <div className="absolute h-[529px] left-[204.5px] top-0 w-[1558px]" data-name="Div [slideshowElement]">
      <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[1427.45px] not-italic text-[20px] text-black text-nowrap top-[262px] translate-y-[-50%]">
        <p className="leading-[32px]"></p>
      </div>
      <DivCarouselInner1 />
      <div className="absolute flex flex-col font-['Inter:Black','Noto_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[5px] not-italic text-[20px] text-black text-nowrap top-[262px] translate-y-[-50%]">
        <p className="leading-[32px]"></p>
      </div>
    </div>
  );
}

function ChevronPagination2() {
  return (
    <div className="h-[32px] relative w-[18.286px]" data-name="chevron pagination">
      <div className="absolute inset-[-1.03%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2857 32.331">
          <g id="chevron pagination">
            <path d={svgPaths.p17e20100} fill="var(--fill-0, black)" id="Icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChevronPagination3() {
  return (
    <div className="absolute h-[32px] left-[188px] top-[248px] w-[18px]" data-name="chevron pagination">
      <div className="absolute inset-[-0.26%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 32.0837">
          <g id="chevron pagination">
            <path d={svgPaths.p3d6bfb70} fill="var(--fill-0, black)" id="Icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DivHomepageSlideShow() {
  return (
    <div className="absolute bg-white h-[529px] left-0 top-[1050px] w-[1905px]" data-name="Div [homepageSlideShow]">
      <div className="absolute flex h-[32px] items-center justify-center left-[1667px] top-[248px] w-[18.286px]">
        <div className="flex-none rotate-[180deg]">
          <ChevronPagination2 />
        </div>
      </div>
      <DivSlideshowElement />
      <ChevronPagination3 />
    </div>
  );
}

function ImageBanniereElement() {
  return (
    <div className="absolute h-[300px] left-0 rounded-[20px] shadow-[0px_0px_0px_1px_#c0c0c0] top-0 w-[500px]" data-name="Image [banniere-element]">
      <img alt="Bannière publicitaire" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[20px] size-full" src={imgImageBanniereElement} />
    </div>
  );
}

function DivHomepageBanniereSpe1() {
  return (
    <div className="h-[300px] relative rounded-[20px] shrink-0 w-[500px]" data-name="Div [homepageBanniereSpe1]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageBanniereElement />
      </div>
    </div>
  );
}

function ImageBanniereElement1() {
  return (
    <div className="absolute h-[300px] left-0 rounded-[20px] shadow-[0px_0px_0px_1px_#c0c0c0] top-0 w-[500px]" data-name="Image [banniere-element]">
      <img alt="Bannière publicitaire" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[20px] size-full" src={imgImageBanniereElement1} />
    </div>
  );
}

function DivHomepageBanniereSpe2() {
  return (
    <div className="h-[300px] relative rounded-[20px] shrink-0 w-[500px]" data-name="Div [homepageBanniereSpe2]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageBanniereElement1 />
      </div>
    </div>
  );
}

function DivHomepageBanniereSpe() {
  return (
    <div className="absolute content-stretch flex gap-[48px] h-[300px] items-start left-[168.5px] pl-[240.406px] pr-0 py-0 top-[716px] w-[1000px]" data-name="Div [homepageBanniereSpe]">
      <DivHomepageBanniereSpe1 />
      <DivHomepageBanniereSpe2 />
    </div>
  );
}

function ImageSvgIcon() {
  return (
    <div className="absolute h-[22.21px] left-[13.76px] top-[16.39px] w-[27.49px]" data-name="Image [svg-icon]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.49 22.21">
        <g id="Image [svg-icon]">
          <path d={svgPaths.p1e02cb80} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p24a82380} fill="var(--fill-0, #146E55)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function DivNotifIcon() {
  return (
    <div className="absolute bg-[#8dd0bf] left-[1245px] rounded-full size-[55px] top-[3px] flex items-center justify-center border-2 border-white shadow-sm" data-name="Div [notif-icon]">
      <Mail className="text-[#146e55] size-6" strokeWidth={2.5} />
    </div>
  );
}

function DivOnglet2({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  const isActive = activeTab === "offres";
  return (
    <div 
      className={`absolute border-[#8dd0bf] border-[2px_2px_0px] border-solid h-[61px] left-[495.75px] rounded-tl-[25px] rounded-tr-[25px] top-0 w-[218.47px] cursor-pointer hover:bg-gray-50 transition-colors ${isActive ? "bg-[#8dd0bf]" : "bg-white"}`}
      onClick={() => setActiveTab("offres")}
      data-name="Div [onglet3]"
    >
      <div className={`absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[18px] not-italic text-[20.1px] text-nowrap top-[29.8px] translate-y-[-50%] ${isActive ? "text-[#146e55]" : "text-[#222]"}`}>
        <p className="leading-[26.4px]">{`Espace Offres `}</p>
      </div>
    </div>
  );
}

function DivOnglet1({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  const isActive = activeTab === "client";
  return (
    <div 
      className={`absolute border-[#8dd0bf] border-[2px_2px_0px] border-solid h-[61px] left-[261.3px] rounded-tl-[25px] rounded-tr-[25px] top-0 w-[214.46px] cursor-pointer hover:bg-gray-50 transition-colors ${isActive ? "bg-[#8dd0bf]" : "bg-white"}`}
      onClick={() => setActiveTab("client")}
      data-name="Div [onglet2]"
    >
      <div className="absolute bg-[#fc825c] left-[175px] rounded-full size-[18px] top-[12px]" />
      <div className={`absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[18px] not-italic text-[20.1px] text-nowrap top-[29.8px] translate-y-[-50%] ${isActive ? "text-[#146e55]" : "text-[#222]"}`}>
        <p className="leading-[26.4px]">{`Espace Client `}</p>
      </div>
    </div>
  );
}

function DivOnglet({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  const isActive = activeTab === "produits";
  return (
    <div 
      className={`absolute border-[#8dd0bf] border-[2px_2px_0px] border-solid h-[61px] left-0 rounded-tl-[25px] rounded-tr-[25px] top-0 w-[241.3px] cursor-pointer transition-colors ${isActive ? "bg-[#8dd0bf]" : "bg-white"}`}
      onClick={() => setActiveTab("produits")}
      data-name="Div [onglet1]"
    >
      <div className="absolute bg-[#fc825c] left-[200px] rounded-full size-[18px] top-[12px]" />
      <div className={`absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[18px] not-italic text-[20.1px] text-nowrap top-[29.8px] translate-y-[-50%] ${isActive ? "text-[#146e55]" : "text-[#222]"}`}>
        <p className="leading-[26.4px]">{`Espace Produits `}</p>
      </div>
    </div>
  );
}

function DivTabs({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  return (
    <div className="h-[61px] relative shrink-0 w-[1300px]" data-name="Div [tabs]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivNotifIcon />
        <DivOnglet2 activeTab={activeTab} setActiveTab={setActiveTab} />
        <DivOnglet1 activeTab={activeTab} setActiveTab={setActiveTab} />
        <DivOnglet activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

function DivCircleCounter() {
  return (
    <div className="absolute bg-white left-[343.03px] rounded-[25px] size-[50px] top-[15px]" data-name="Div [circle-counter]">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[19.83px] not-italic text-[#343a40] text-[14.8px] text-nowrap top-[24.6px] translate-y-[-50%]">
        <p className="leading-[23.4px]">0</p>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute inset-[11.25%_12.12%_11.24%_10.41%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.737 38.7546">
        <g id="Clip path group">
          <mask height="39" id="mask0_1_1693" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="39" x="0" y="0">
            <g id="SVGID_00000021107549911673516880000007710411705248236467_">
              <path d="M0 0H38.737V38.7546H0V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1693)">
            <path d={svgPaths.p13924500} fill="var(--fill-0, #009B74)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute inset-[11.25%_12.12%_11.24%_10.41%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.737 38.7546">
        <g id="Clip path group">
          <mask height="39" id="mask0_1_1442" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="39" x="0" y="0">
            <g id="SVGID_00000162340752265385786700000005751719153079170448_">
              <path d={svgPaths.p31713400} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1442)">
            <path d={svgPaths.p172c9680} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Calque() {
  return (
    <div className="absolute contents inset-[11.25%_12.12%_11.24%_10.41%]" data-name="Calque_3">
      <ClipPathGroup />
      <ClipPathGroup1 />
    </div>
  );
}

function ImageSvgLeftPicto() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[50px] top-[15px]" data-name="Image [svg-left-picto]">
      <Calque />
    </div>
  );
}

function LinkEssentialsItem() {
  return (
    <div className="absolute bg-[#e8fcf7] h-[80px] left-[877.06px] rounded-[20px] top-[126px] w-[403.04px] cursor-pointer hover:bg-[#d0f0e9] transition-colors" data-name="Link [essentials-item]">
      <DivCircleCounter />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[70px] not-italic text-[#5c6670] text-[17.7px] text-nowrap top-[40px] translate-y-[-50%]">
        <p className="leading-[24px]">Alternatives aux ruptures</p>
      </div>
      <ImageSvgLeftPicto />
    </div>
  );
}

function DivCircleCounter1() {
  return (
    <div className="absolute bg-white left-[343.03px] rounded-[25px] size-[50px] top-[15px]" data-name="Div [circle-counter]">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[19.83px] not-italic text-[#343a40] text-[14.8px] text-nowrap top-[24.6px] translate-y-[-50%]">
        <p className="leading-[23.4px]">0</p>
      </div>
    </div>
  );
}

function DivTextMiddle() {
  return (
    <div className="absolute h-[48px] left-[70px] top-[13px] w-[263.04px]" data-name="Div [text-middle]">
      <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[3px] items-start leading-[0] not-italic pb-[697px] pl-0 pr-[51.75px] pt-[1.5px] relative size-full text-[#5c6670] text-[17.7px] text-nowrap">
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">{`Infos ANSM ruptures et `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">retraits</p>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute inset-[8.61%_12.12%_13.88%_10.41%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.737 38.7546">
        <g id="Clip path group">
          <mask height="39" id="mask0_1_1674" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="39" x="0" y="0">
            <g id="SVGID_00000142861927593438409170000015944799194611338925_">
              <path d="M0 0H38.737V38.7546H0V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1674)">
            <path d={svgPaths.p22e0da80} fill="var(--fill-0, #009B74)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute inset-[22.7%_26.2%_27.98%_24.48%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6604 24.6604">
        <g id="Clip path group">
          <mask height="25" id="mask0_1_1679" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="25" x="0" y="0">
            <g id="SVGID_00000067939423333280774970000006449491595238410112_">
              <path d={svgPaths.p131bd000} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1679)">
            <path d={svgPaths.p3c1fbf70} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute inset-[8.61%_12.12%_13.88%_10.41%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.737 38.7546">
        <g id="Clip path group">
          <mask height="39" id="mask0_1_1662" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="39" x="0" y="0">
            <g id="SVGID_00000124145191114118451320000002337559103158091148_">
              <path d={svgPaths.p8da4b80} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1662)">
            <path d={svgPaths.p3ff72180} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Calque1() {
  return (
    <div className="absolute contents inset-[8.61%_12.12%_13.88%_10.41%]" data-name="Calque_4">
      <ClipPathGroup2 />
      <ClipPathGroup3 />
      <ClipPathGroup4 />
    </div>
  );
}

function ImageSvgLeftPicto1() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[50px] top-[15px]" data-name="Image [svg-left-picto]">
      <Calque1 />
    </div>
  );
}

function LinkEssentialsItem1() {
  return (
    <div className="absolute bg-[#e8fcf7] h-[80px] left-[448.03px] rounded-[20px] top-[126px] w-[403.04px] cursor-pointer hover:bg-[#d0f0e9] transition-colors" data-name="Link [essentials-item]">
      <DivCircleCounter1 />
      <DivTextMiddle />
      <ImageSvgLeftPicto1 />
    </div>
  );
}

function DivCircleCounter2() {
  return (
    <div className="absolute bg-white left-[343.03px] rounded-[25px] size-[50px] top-[15px]" data-name="Div [circle-counter]">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[19.83px] not-italic text-[#343a40] text-[14.8px] text-nowrap top-[24.6px] translate-y-[-50%]">
        <p className="leading-[23.4px]">0</p>
      </div>
    </div>
  );
}

function DivTextMiddle1() {
  return (
    <div className="absolute h-[48px] left-[70px] top-[13px] w-[263.04px]" data-name="Div [text-middle]">
      <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[3px] items-start leading-[0] not-italic pb-[697px] pl-0 pr-[78.203px] pt-[1.5px] relative size-full text-[#5c6670] text-[17.7px] text-nowrap">
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">{`Mes produits favoris `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">disponibles</p>
        </div>
      </div>
    </div>
  );
}

function ImageSvgLeftPicto2() {
  return (
    <div className="absolute h-[50px] left-[10.78px] top-[15px] w-[48.44px]" data-name="Image [svg-left-picto]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.44 50">
        <g id="Image [svg-left-picto]">
          <path d={svgPaths.p3bb33200} fill="var(--fill-0, #009B74)" id="Vector" />
          <path d={svgPaths.p38aa5800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pe174300} id="Vector_3" stroke="var(--stroke-0, #009B74)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LinkEssentialsItem2() {
  return (
    <div className="absolute bg-[#e8fcf7] h-[80px] left-[19px] rounded-[20px] top-[126px] w-[403.04px] cursor-pointer hover:bg-[#d0f0e9] transition-colors" data-name="Link [essentials-item]">
      <DivCircleCounter2 />
      <DivTextMiddle1 />
      <ImageSvgLeftPicto2 />
    </div>
  );
}

function DivCircleAlert() {
  return <div className="absolute bg-[#fc825c] left-[35px] rounded-[10px] size-[20px] top-[2px]" data-name="Div [circle-alert]" />;
}

function DivCircleCounter3() {
  return (
    <div className="absolute bg-white left-[343.03px] rounded-[25px] size-[50px] top-[15px]" data-name="Div [circle-counter]">
      <DivCircleAlert />
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[14.67px] not-italic text-[#343a40] text-[14.8px] text-nowrap top-[24.6px] translate-y-[-50%]">
        <p className="leading-[23.4px]">{`66 `}</p>
      </div>
    </div>
  );
}

function DivTextMiddle2() {
  return (
    <div className="absolute h-[48px] left-[70px] top-[13px] w-[263.04px]" data-name="Div [text-middle]">
      <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[3px] items-start leading-[0] not-italic pb-[591px] pl-0 pr-[35.859px] pt-[1.5px] relative size-full text-[#5c6670] text-[17.7px] text-nowrap">
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">{`Retours en stock du jour `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">dans votre établissement</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[11.11%_11.29%_11.29%_11.11%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.088px] mask-size-[38.712px_38.712px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8001 38.8001">
        <g id="Group">
          <path d={svgPaths.pe793c00} fill="var(--fill-0, #009B74)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[11.29%]" data-name="Mask group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[24.69%_25.04%_24.87%_24.87%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0.001px_0.087px] mask-size-[25.22px_25.22px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.045 25.22">
        <g id="Group">
          <path d={svgPaths.p32178f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-[24.87%_24.69%_24.69%_24.87%]" data-name="Mask group">
      <Group1 />
    </div>
  );
}

function ImageSvgLeftPicto3() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[50px] top-[15px]" data-name="Image [svg-left-picto]">
      <MaskGroup />
      <MaskGroup1 />
    </div>
  );
}

function LinkEssentialsItem3() {
  return (
    <div className="absolute bg-[#e8fcf7] h-[80px] left-[877.06px] rounded-[20px] top-[23px] w-[403.04px] cursor-pointer hover:bg-[#d0f0e9] transition-colors" data-name="Link [essentials-item]">
      <DivCircleCounter3 />
      <DivTextMiddle2 />
      <ImageSvgLeftPicto3 />
    </div>
  );
}

function DivCircleCounter4() {
  return (
    <div className="absolute bg-white left-[343.03px] rounded-[25px] size-[50px] top-[15px]" data-name="Div [circle-counter]">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[9.5px] not-italic text-[#343a40] text-[14.8px] text-nowrap top-[24.6px] translate-y-[-50%]">
        <p className="leading-[23.4px]">160</p>
      </div>
    </div>
  );
}

function DivTextMiddle3() {
  return (
    <div className="absolute h-[48px] left-[70px] top-[13px] w-[263.04px]" data-name="Div [text-middle]">
      <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[3px] items-start leading-[0] not-italic pb-[591px] pl-0 pr-[62.25px] pt-[1.5px] relative size-full text-[#5c6670] text-[17.7px] text-nowrap">
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">{`Nouveautés dans mon `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">établissement</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.61%_12.12%_13.88%_10.41%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[38.736px_38.756px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.737 38.755">
        <g id="Group">
          <path d={svgPaths.p246e5480} fill="var(--fill-0, #009B74)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-[8.61%_12.12%_13.88%_10.41%]" data-name="Mask group">
      <Group2 />
    </div>
  );
}

function ImageSvgLeftPicto4() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[50px] top-[15px]" data-name="Image [svg-left-picto]">
      <MaskGroup2 />
      <div className="absolute inset-[28%_30%_32%_30%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1288f200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function LinkEssentialsItem4() {
  return (
    <div className="absolute bg-[#e8fcf7] h-[80px] left-[448.03px] rounded-[20px] top-[23px] w-[403.04px] cursor-pointer hover:bg-[#d0f0e9] transition-colors" data-name="Link [essentials-item]">
      <DivCircleCounter4 />
      <DivTextMiddle3 />
      <ImageSvgLeftPicto4 />
    </div>
  );
}

function DivCircleAlert1() {
  return <div className="absolute bg-[#fc825c] left-[35px] rounded-[10px] size-[20px] top-[2px]" data-name="Div [circle-alert]" />;
}

function DivCircleCounter5() {
  return (
    <div className="absolute bg-white left-[343.03px] rounded-[25px] size-[50px] top-[15px]" data-name="Div [circle-counter]">
      <DivCircleAlert1 />
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[14.67px] not-italic text-[#343a40] text-[14.8px] text-nowrap top-[24.6px] translate-y-[-50%]">
        <p className="leading-[23.4px]">{`14 `}</p>
      </div>
    </div>
  );
}

function DivTextMiddle4() {
  return (
    <div className="absolute h-[48px] left-[70px] top-[13px] w-[263.04px]" data-name="Div [text-middle]">
      <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[3px] items-start leading-[0] not-italic pb-[591px] pl-0 pr-[55.312px] pt-[1.5px] relative size-full text-[#5c6670] text-[17.7px] text-nowrap">
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">{`Produits commandés à `}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="leading-[24px] text-nowrap">nouveau disponibles</p>
        </div>
      </div>
    </div>
  );
}

function ImageSvgLeftPicto5() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[50px] top-[15px]" data-name="Image [svg-left-picto]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <path d={svgPaths.p19a4a080} fill="var(--fill-0, #009B74)" id="Vector" />
      </svg>
      <div className="absolute inset-[13.33%_10%_10%_13.33%]" data-name="Vector">
        <img alt="Icône décorative" className="block max-w-none size-full" height="38.333" src={imgVector} width="38.333" />
      </div>
    </div>
  );
}

function LinkEssentialsItem5() {
  return (
    <div className="absolute bg-[#e8fcf7] h-[80px] left-[19px] rounded-[20px] top-[23px] w-[403.04px] cursor-pointer hover:bg-[#d0f0e9] transition-colors" data-name="Link [essentials-item]">
      <DivCircleCounter5 />
      <DivTextMiddle4 />
      <ImageSvgLeftPicto5 />
    </div>
  );
}

function ClientCard({ title, icon: Icon, badge, alert, onClick }: { title: string, icon: any, badge?: string, alert?: boolean, onClick?: () => void }) {
  return (
    <div 
      className="bg-[#e8fcf7] h-[80px] rounded-[20px] flex items-center px-4 relative cursor-pointer hover:bg-[#d0f0e9] transition-all w-[405px] shadow-sm"
      onClick={onClick}
    >
      <div className="bg-[#009B74] rounded-full p-2 mr-4 flex items-center justify-center size-[50px] shrink-0">
        <Icon className="text-white size-6" strokeWidth={2.5} />
      </div>
      <div className="flex-grow">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#146e55] text-[18px] leading-tight">{title}</p>
      </div>
      {badge && (
        <div className="bg-white rounded-full size-[50px] flex items-center justify-center relative shadow-sm ml-2 shrink-0">
          {alert && <div className="absolute top-[2px] right-[2px] bg-[#fc825c] size-[18px] rounded-full border-2 border-white" />}
          <span className="text-[#343a40] font-bold text-[18px]">{badge}</span>
        </div>
      )}
    </div>
  );
}

function ClientSpaceContent() {
  const { setActivePage } = useContext(PageContext);
  return (
    <div className="content-stretch flex flex-col gap-6 p-[23px] relative size-full overflow-hidden">
      <div className="flex flex-row gap-6">
        <ClientCard 
          title=" Mes livraisons " 
          icon={Truck} 
          onClick={() => setActivePage("blv")}
        />
        <ClientCard 
          title="Mes réclamations" 
          icon={MessageSquareText} 
          badge="2" 
          alert={true} 
        />
        <ClientCard 
          title="Mes retours & avoirs" 
          icon={ClipboardCheck} 
        />
      </div>
      <div className="flex flex-row gap-6">
        <ClientCard 
          title="Mes documents commerciaux" 
          icon={FolderOpen} 
        />
        <ClientCard 
          title="Historique de mes commandes" 
          icon={ShoppingBasket} 
        />
        <ClientCard 
          title="Suivi de mes achats et retours" 
          icon={ListTodo} 
        />
      </div>
    </div>
  );
}

function DivTabsContent({ activeTab }: { activeTab: string }) {
  return (
    <div className="bg-[#8dd0bf] h-[228px] relative rounded-bl-[30px] rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[1300px]" data-name="Div [tabs-content]">
      {activeTab === "produits" ? (
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <LinkEssentialsItem />
          <LinkEssentialsItem1 />
          <LinkEssentialsItem2 />
          <LinkEssentialsItem3 />
          <LinkEssentialsItem4 />
          <LinkEssentialsItem5 />
        </div>
      ) : activeTab === "client" ? (
        <ClientSpaceContent />
      ) : (
        <div className="flex items-center justify-center h-full text-[#146e55] font-bold text-xl">
          Contenu Espace Offres en cours de développement
        </div>
      )}
    </div>
  );
}

function DivTabsContainer() {
  const [activeTab, setActiveTab] = useState("produits");

  return (
    <div className="h-[289px] relative shrink-0 w-[1300px]" data-name="Div [tabs-container]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[308px] pt-0 px-0 relative size-full">
        <DivTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <DivTabsContent activeTab={activeTab} />
      </div>
    </div>
  );
}

function DivContainer1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-4 h-[333px] items-start left-[292.5px] pb-[168px] pl-0 pr-[20px] pt-0 top-[330px] w-[1320px]" data-name="Div [container]">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[33.3px] text-nowrap">
        <p className="leading-[43.2px]">Vos essentiels en 1 clic</p>
      </div>
      <DivTabsContainer />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[70.77%_31.02%_26.58%_65.82%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-10.115px_-5.858px] mask-size-[15.451px_14.553px]" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.336 3.742">
        <g id="Group">
          <path d={svgPaths.p13e4c200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents inset-[66.61%_31.02%_23.06%_59.83%]" data-name="Mask group">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[70.31%_31.45%_23.06%_62.55%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-4.591px_-5.205px] mask-size-[15.451px_14.553px]" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.149 9.356">
        <g id="Group">
          <path d={svgPaths.pae2d600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents inset-[66.61%_31.02%_23.06%_59.83%]" data-name="Mask group">
      <Group4 />
    </div>
  );
}

function Image10() {
  return (
    <div className="absolute h-[141px] left-[790.98px] overflow-clip top-[26px] w-[169px]" data-name="Image">
      <div className="absolute inset-[88.64%_38.12%_3.61%_54.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.958 10.9298">
          <path d={svgPaths.p1f90480} fill="var(--fill-0, #F7A491)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93.76%_37.64%_3.02%_54.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.155 4.545">
          <path d={svgPaths.p221e5080} fill="var(--fill-0, #3C8F7C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[88.81%_46.93%_3.61%_45.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.96 10.6917">
          <path d={svgPaths.p11f35780} fill="var(--fill-0, #F7A491)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93.76%_46.45%_3.02%_45.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1554 4.545">
          <path d={svgPaths.p22c12a00} fill="var(--fill-0, #3C8F7C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.45%_29.75%_74.98%_54.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2616 29.0071">
          <path d={svgPaths.p15042900} fill="var(--fill-0, #F7A491)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.07%_37.93%_8.42%_49.29%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5866 75.454">
          <path d={svgPaths.p1ac86800} fill="var(--fill-0, #50BFA5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.04%_44.16%_8.69%_43.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2445 79.344">
          <path d={svgPaths.p20de6380} fill="var(--fill-0, #50BFA5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.35%_42.71%_70.45%_37.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5335 41.1741">
          <path d={svgPaths.p1a402480} fill="var(--fill-0, #184655)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.3%_55.45%_50.56%_33.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6699 35.4577">
          <path d={svgPaths.p21776470} fill="var(--fill-0, #F48C7F)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.99%_38.39%_61.54%_40.52%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.633 33.0988">
          <path d={svgPaths.p242c8800} fill="var(--fill-0, #96D9C9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.54%_46.34%_79.88%_49.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.22295 14.9092">
          <path d={svgPaths.p3e2b2700} fill="var(--fill-0, #F7A491)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.54%_46.34%_88.1%_50.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.266 3.31651">
          <path d={svgPaths.p20d63280} fill="var(--fill-0, #F47458)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.83%_44.9%_88.55%_48.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4624 13.5532">
          <path d={svgPaths.p38f3a100} fill="var(--fill-0, #F7A491)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[4.98%_44.35%_92.58%_54.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.98628 3.43947">
          <path d={svgPaths.p32fa4500} fill="var(--fill-0, #F7A491)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.81%_48.38%_90.97%_47.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5887 10.18">
          <path d={svgPaths.p1305a780} fill="var(--fill-0, #184655)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.39%_50.39%_91.14%_48.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.58021 3.48513">
          <path d={svgPaths.p1c96d8f0} fill="var(--fill-0, #F7A491)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.87%_18.63%_52.74%_76.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.47699 14.655">
          <path d={svgPaths.p33236700} fill="var(--fill-0, #184655)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.29%_13.13%_55.6%_67.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.293 31.179">
          <path d={svgPaths.p3674cc00} fill="var(--fill-0, #184655)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.9%_16.3%_72.77%_83.17%]" data-name="Vector">
        <div className="absolute inset-[0_0_0.03%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.897003 3.289">
            <path d="M0 3.289H0.897003V0H0V3.289Z" fill="var(--fill-0, #184655)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.58%_46.35%_90.31%_51.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.30805 1.56543">
          <path d={svgPaths.p1c23b6f1} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.07%_1.29%_0.95%_35.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.236 70.468">
          <path d={svgPaths.p1b71d800} fill="var(--fill-0, #96D9C9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.07%_64.75%_0.95%_3.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.296 70.468">
          <path d={svgPaths.p113ccc80} fill="var(--fill-0, #50BFA5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.26%_0.03%_50.93%_0.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168.54 2.55">
          <path d={svgPaths.paa69200} fill="var(--fill-0, #327F6B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.61%_73.9%_10.89%_19.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2141 62.745">
          <path d={svgPaths.p216bfdf0} fill="var(--fill-0, #215E4B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.44%_67.79%_10.89%_20%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.649 29.1431">
          <path d={svgPaths.p29c95780} fill="var(--fill-0, #3C8F7C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.63%_81.6%_10.89%_10.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9637 69.767">
          <path d={svgPaths.p1cca2200} fill="var(--fill-0, #215E4B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.54%_79.81%_10.89%_7.26%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8371 47.345">
          <path d={svgPaths.p9d61200} fill="var(--fill-0, #3C8F7C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.53%_81.11%_10.89%_13.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.87764 47.346">
          <path d={svgPaths.pb442d00} fill="var(--fill-0, #327F6B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[86.06%_73.76%_0.84%_12.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6157 18.468">
          <path d={svgPaths.p3a1d5e80} fill="var(--fill-0, #EAFCFC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.29%_27.41%_18.48%_56.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.114 27.114">
          <path d={svgPaths.p3e55d580} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[63.19%_28.16%_19.37%_57.29%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5862 24.5863">
          <path d={svgPaths.p95a00} fill="var(--fill-0, #50BFA5)" id="Vector" />
        </svg>
      </div>
      <MaskGroup3 />
      <MaskGroup4 />
      <div className="absolute inset-[70.31%_36.37%_27.06%_60.49%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.312 3.71">
          <path d={svgPaths.p225d3900} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.62%_33.08%_26.77%_60.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.149 9.32401">
          <path d={svgPaths.p3fa38300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[0_1.25%_0.96%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[132.99px_29.7px]" data-name="Group" style={{ maskImage: `url('${imgGroup4}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.322 29.4142">
        <g id="Group">
          <path d={svgPaths.p7773f0} fill="var(--fill-0, #079777)" id="Vector" />
          <path d={svgPaths.p2b0f76f0} fill="var(--fill-0, #A5BCC7)" id="Vector_2" />
          <path d={svgPaths.p1cf606c0} fill="var(--fill-0, #A5BCC7)" id="Vector_3" />
          <path d={svgPaths.pccf3800} fill="var(--fill-0, #A5BCC7)" id="Vector_4" />
          <path d={svgPaths.p32a97c00} fill="var(--fill-0, #A5BCC7)" id="Vector_5" />
          <path d={svgPaths.p34938240} fill="var(--fill-0, #079777)" id="Vector_6" />
          <path d={svgPaths.pe64b200} fill="var(--fill-0, #079777)" id="Vector_7" />
          <path d={svgPaths.p29abb00} fill="var(--fill-0, #079777)" id="Vector_8" />
          <path d={svgPaths.p3cfb6e00} fill="var(--fill-0, #079777)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function ImageSvgLogo() {
  return (
    <div className="absolute h-[29.7px] left-[28.5px] overflow-clip top-[20.14px] w-[132.99px]" data-name="Image [svg-logo]">
      <div className="absolute inset-[4.53%_81.35%_22.14%_16.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.2137 21.7793">
          <path d={svgPaths.p1633df80} fill="var(--fill-0, #079777)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup5 />
    </div>
  );
}

function DivDicodocBtn() {
  return (
    <div className="bg-white h-[70px] relative rounded-[86px] shrink-0 w-[190px] cursor-pointer hover:shadow-lg transition-all" data-name="Div [dicodoc-btn]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageSvgLogo />
      </div>
    </div>
  );
}

function DivDicodocBtnContainer() {
  return (
    <div className="absolute h-[106px] left-0 top-[24px] w-[790.99px]" data-name="Div [dicodoc-btn-container]">
      <div className="content-stretch flex flex-col gap-[10.5px] items-start pb-[224px] pl-0 pr-[389.218px] pt-[2.5px] relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-nowrap text-white">
          <p className="leading-[36px]">Votre assistant de recherche :</p>
        </div>
        <DivDicodocBtn />
      </div>
    </div>
  );
}

function DivDownContainer() {
  return (
    <div className="absolute h-[167px] left-[200.02px] top-[143px] w-[1099.98px]" data-name="Div [down-container]">
      <Image10 />
      <DivDicodocBtnContainer />
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute h-[11px] left-[210.34px] top-[10.09px] w-[20px]" data-name="Background Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11">
        <g clipPath="url(#clip0_1_1473)" id="Background Image">
          <path d={svgPaths.p296d3700} fill="var(--fill-0, #343A40)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1473">
            <rect fill="white" height="11" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundImages() {
  return (
    <div className="absolute h-[31.19px] left-0 overflow-clip rounded-bl-[86px] rounded-tl-[86px] top-0 w-[230.35px]" data-name="Background Images">
      <BackgroundImage />
    </div>
  );
}

function SelectGlobalSearchBoxSelect() {
  return (
    <div className="absolute h-[31.19px] left-0 rounded-bl-[86px] rounded-tl-[86px] top-[16.91px] w-[230.35px]" data-name="Select [globalSearchBoxSelect]">
      <BackgroundImages />
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[31.21px] justify-center leading-[0] left-[25px] overflow-ellipsis overflow-hidden text-[24px] text-black text-nowrap top-[15.6px] translate-y-[-50%] w-[160.35px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[31.2px] overflow-ellipsis overflow-hidden">Produits</p>
      </div>
    </div>
  );
}

function DivHomeSearchboxSelect() {
  return (
    <div className="bg-white h-[65px] relative rounded-bl-[60px] rounded-tl-[60px] shrink-0 w-[237.35px]" data-name="Div [home-searchbox__select]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SelectGlobalSearchBoxSelect />
      </div>
    </div>
  );
}

function ImageML() {
  return (
    <div className="absolute left-[155.69px] size-[30px] top-0" data-name="Image [m-l-5]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Image [m-l-5]">
          <path d={svgPaths.p1f8cd80} fill="var(--fill-0, #009B74)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return <div className="absolute h-[26.94px] left-0 top-[1.53px] w-[150.69px]" data-name="Icon" />;
}

function DivDFlex() {
  return (
    <div className="absolute h-[30px] left-[656.95px] top-[17.5px] w-[185.69px]" data-name="Div [d-flex]">
      <ImageML />
      <Icon10 />
    </div>
  );
}

function InputGlobalSearchBoxInput() {
  return (
    <div className="absolute h-[33.19px] left-0 overflow-clip top-[15.91px] w-[656.96px]" data-name="Input [globalSearchBoxInput]">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[28.8px] justify-center leading-[0] left-[20px] overflow-ellipsis overflow-hidden text-[24px] text-black text-nowrap top-[16.59px] translate-y-[-50%] w-[656.96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28.8px] overflow-ellipsis overflow-hidden">Rechercher un produit</p>
      </div>
    </div>
  );
}

function DivHomeSearchboxInput() {
  return (
    <div className="bg-white h-[65px] relative rounded-br-[86px] rounded-tr-[86px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)] shrink-0 w-[862.65px]" data-name="Div [home-searchbox__input]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivDFlex />
        <InputGlobalSearchBoxInput />
      </div>
    </div>
  );
}

function FormGlobalSearchBoxForm() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-start left-[200.02px] pb-0 pt-[15px] px-0 top-[63px] w-[1100px]" data-name="Form [globalSearchBoxForm]">
      <DivHomeSearchboxSelect />
      <DivHomeSearchboxInput />
    </div>
  );
}

function DivContainer2() {
  return (
    <div className="absolute h-[310px] left-[6.75px] top-0 w-[1320px]" data-name="Div [container]">
      <DivDownContainer />
      <FormGlobalSearchBoxForm />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[200.02px] not-italic text-[32.2px] text-nowrap text-white top-[39.4px] translate-y-[-50%]">
        <p className="leading-[43.2px]">Que recherchez-vous ?</p>
      </div>
    </div>
  );
}

function DivRechercheBox() {
  return (
    <div className="absolute h-[310px] left-0 opacity-80 rounded-br-[60px] top-0 w-[1333.5px]" data-name="Div [recherche-box]" style={{ backgroundImage: "linear-gradient(134.802deg, rgb(0, 155, 116) 42.68%, rgb(20, 110, 85) 84.7%)" }}>
      <DivContainer2 />
    </div>
  );
}

function DivDFlex1() {
  return (
    <div className="absolute h-[310px] left-0 top-0 w-[1905px]" data-name="Div [d-flex]">
      <DivRechercheBox />
    </div>
  );
}

function DivHomeContainer() {
  return (
    <div className="absolute bg-[#f0f6f4] h-[2883.75px] left-0 top-[127px] w-[1905px]" data-name="Div [home-container]">
      <DivHomepageActualites />
      <DivHomepageSlideShow />
      <DivHomepageBanniereSpe />
      <DivContainer1 />
      <DivDFlex1 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute h-[16px] left-[5px] top-[29px] w-[117px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 16">
        <g clipPath="url(#clip0_1_1470)" id="Icon">
          <path d={svgPaths.p53b5ac0} id="Vector" stroke="var(--stroke-0, #FBB07A)" strokeWidth="4" />
        </g>
        <defs>
          <clipPath id="clip0_1_1470">
            <rect fill="white" height="16" width="117" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DivWcbAgent() {
  return (
    <div className="absolute bg-[#fc825c] h-[50px] left-[10px] rounded-[15px] top-px w-[180.8px] cursor-pointer hover:bg-[#e0724b] transition-colors" data-name="Div [wcbAgent]">
      <Icon11 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[17px] text-nowrap text-white top-[24.61px] translate-y-[-50%]">
        <p className="leading-[23.4px]">Nous contacter</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[18.03%_37.21%_40.51%_15.82%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-0.383px_-0.376px] mask-size-[25.711px_22.337px]" data-name="Group" style={{ maskImage: `url('${imgGroup5}')` }}>
      <div className="absolute inset-[-2.32%_-2.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.896 22.5574">
          <g id="Group">
            <path d={svgPaths.p2a992680} fill="var(--fill-0, #FC825C)" id="Vector" stroke="var(--stroke-0, #FBB07A)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents inset-[18.27%_37.34%_40.7%_16.04%]" data-name="Mask group">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[44.23%_19.18%_18.47%_43.4%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[19.836px_19.393px]" data-name="Group" style={{ maskImage: `url('${imgGroup6}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8343 19.3933">
        <g id="Group">
          <path d={svgPaths.p335bfc80} fill="var(--fill-0, #FC825C)" id="Vector" />
          <g id="Mask group">
            <mask height="20" id="mask0_1_1560" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="20" x="0" y="0">
              <g id="Group_2">
                <path d={svgPaths.p335bfc80} fill="var(--fill-0, white)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_1_1560)">
              <path d={svgPaths.paec3100} fill="var(--fill-0, #FBB07A)" id="Vector_3" />
            </g>
          </g>
          <path d={svgPaths.p2c2cf800} fill="var(--fill-0, #FC825C)" id="Vector_4" />
          <g id="Mask group_2">
            <mask height="2" id="mask1_1_1560" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="4" y="9">
              <g id="Group_3">
                <path d={svgPaths.p2c2cf800} fill="var(--fill-0, white)" id="Vector_5" />
              </g>
            </mask>
            <g mask="url(#mask1_1_1560)">
              <path d={svgPaths.p3e7e1d00} fill="var(--fill-0, #FBB07A)" id="Vector_6" />
            </g>
          </g>
          <path d={svgPaths.p31e71b00} fill="var(--fill-0, #FC825C)" id="Vector_7" />
          <g id="Mask group_3">
            <mask height="2" id="mask2_1_1560" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="4" y="7">
              <g id="Group_4">
                <path d={svgPaths.p31e71b00} fill="var(--fill-0, white)" id="Vector_8" />
              </g>
            </mask>
            <g mask="url(#mask2_1_1560)">
              <path d={svgPaths.pda392c0} fill="var(--fill-0, #FBB07A)" id="Vector_9" />
            </g>
          </g>
          <path d={svgPaths.p11908900} fill="var(--fill-0, #FC825C)" id="Vector_10" />
          <g id="Mask group_4">
            <mask height="1" id="mask3_1_1560" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="9" x="7" y="12">
              <g id="Group_5">
                <path d={svgPaths.p11908900} fill="var(--fill-0, white)" id="Vector_11" />
              </g>
            </mask>
            <g mask="url(#mask3_1_1560)">
              <path d={svgPaths.p26c1c3e0} fill="var(--fill-0, #FBB07A)" id="Vector_12" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="absolute contents inset-[45.19%_20.12%_19.44%_44.34%]" data-name="Mask group">
      <Group7 />
    </div>
  );
}

function ImageIconSticky() {
  return (
    <div className="absolute h-[52px] left-[160.8px] overflow-clip top-0 w-[53px]" data-name="Image [IconSticky]">
      <div className="absolute inset-[1.92%_1.89%_1.76%_2.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.732 50.085">
          <path d={svgPaths.p36a6d500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.82%_2.77%_2.66%_3.27%]" data-name="Vector">
        <div className="absolute inset-[-2.03%_-2.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.797 51.149">
            <path d={svgPaths.p687980} id="Vector" stroke="var(--stroke-0, #FBB07A)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <MaskGroup5 />
      <MaskGroup6 />
    </div>
  );
}

function DivDFlex2() {
  return (
    <div className="absolute h-[52px] left-[1661.2px] top-[860px] w-[213.8px]" data-name="Div [d-flex]">
      <DivWcbAgent />
      <ImageIconSticky />
    </div>
  );
}

function BodyHeaderSticky() {
  return (
    <div className="absolute bg-white h-[3257.08px] left-0 overflow-clip top-0 w-[1905px]" data-name="Body [header-sticky]">
      <FooterFooterMpGlobalHome />
      <DivHomeContainer />
      <DivDFlex2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[250px] left-0 right-0 top-0" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Image de fond décorative" className="absolute left-0 max-w-none size-full top-0" src={imgFrame} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute aspect-[280/215] left-0 right-0 top-0" data-name="Frame">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[250px] left-[1538px] overflow-clip right-[87px] shadow-[0px_0px_0px_1px_#c0c0c0] top-[154px]" data-name="Frame">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return <div className="absolute bg-[#d9d9d9] left-[calc(50%-10.5px)] opacity-50 rounded-[12.5px] size-[15px] top-[10px] translate-x-[-50%]" data-name="Frame" />;
}

function Frame4() {
  return <div className="absolute bg-[#009b74] left-[calc(50%+10.5px)] rounded-[12.5px] size-[15px] top-[10px] translate-x-[-50%]" data-name="Frame" />;
}

function Frame5() {
  return (
    <div className="relative size-full" data-name="Frame">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[1538px] right-[87px] top-[154px]">
      <Frame2 />
      <div className="absolute flex h-[35px] items-center justify-center left-[1547px] right-[92px] top-[404px]">
        <div className="flex-none h-[35px] rotate-[180deg] scale-y-[-100%] w-[266px]">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[55px] left-1/2 top-0 translate-x-[-50%] w-[118.53px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[78.851px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Mes promos</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="h-[55px] relative shrink-0 w-[118.53px]" data-name="Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[55px] left-1/2 top-0 translate-x-[-50%] w-[118.53px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[78.851px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Marketplace</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[55px] relative shrink-0 w-[118.53px]" data-name="Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[55px] left-[calc(50%-0.44px)] top-0 translate-x-[-50%] w-[178px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[55px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon groupement Pharmactiv
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="h-[55px] relative shrink-0 w-[179px]" data-name="Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[55px] left-1/2 top-0 translate-x-[-50%] w-[103.61px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.2px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[64.006px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Actualités</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="h-[55px] relative shrink-0 w-[103.61px]" data-name="Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[55px] left-1/2 top-0 translate-x-[-50%] w-[132.59px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[92.933px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Conseils santé</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="h-[55px] relative shrink-0 w-[132.59px]" data-name="Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[55px] left-1/2 top-0 translate-x-[-50%] w-[164.08px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.2px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[124.472px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Piloter mon officine</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="h-[55px] relative shrink-0 w-[164.08px]" data-name="Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[55px] left-1/2 top-0 translate-x-[-50%] w-[93.98px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[54.346px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Services</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="h-[55px] relative shrink-0 w-[93.98px]" data-name="Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[55px] left-[calc(50%+0.16px)] top-0 translate-x-[-50%] w-[74.174px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-1/2 text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[74.174px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Mon équipe</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="h-[55px] relative shrink-0 w-[113.86px]" data-name="Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[55px] left-1/2 top-0 translate-x-[-50%] w-[121.98px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[82.307px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Mes patients</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="h-[55px] relative shrink-0 w-[121.98px]" data-name="Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[55px] left-1/2 top-0 translate-x-[-50%] w-[101px] cursor-pointer hover:bg-white/10 transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.65px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[82.307px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">MAD</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="h-[55px] relative shrink-0 w-[75px]" data-name="Item">
      <Link9 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex gap-[5px] h-[55px] items-center left-[247px] overflow-clip right-[373px] top-0" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute bg-[#146e55] h-[55px] overflow-clip right-0 top-0 w-[150.75px] cursor-pointer hover:bg-[#105c47] transition-colors" data-name="Link">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[14px] text-center text-white top-[27.5px] translate-x-[-50%] translate-y-[-50%] w-[111.121px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[55px]">Mon abonnement</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#178466] h-[55px] left-0 right-0 top-[72px]" data-name="Background">
      <List />
      <Link10 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute left-[25px] size-[25px] top-[-3px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
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
        <div className="flex-none h-[16.315px] rotate-[343deg] w-[11.429px]">
          <div className="relative size-full" data-name="🎨-Color">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4286 16.3153">
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

function Aide() {
  return (
    <div className="absolute contents left-[-4px] top-[-3px]" data-name="Aide">
      <Group9 />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[-4px] text-[#343a40] text-[14px] text-nowrap top-[31px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Besoin d’aide</p>
      </div>
    </div>
  );
}

function Aide1() {
  return (
    <div className="absolute inset-[26.39%_11.73%_22.22%_83.87%]" data-name="Aide">
      <Aide />
    </div>
  );
}

function Group8() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setActivePage } = useContext(PageContext);

  return (
    <div className="absolute inset-[19.44%_24.03%_45.83%_74.66%]">
      <button 
        className="block size-full cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu outils"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9485 25">
          <g id="Group 158">
            <ellipse cx="4.15794" cy="4.1667" fill="var(--fill-0, #343A40)" id="Ellipse 75" rx="4.15794" ry="4.1667" />
            <ellipse cx="12.474" cy="4.1667" fill="var(--fill-0, #343A40)" id="Ellipse 76" rx="4.15803" ry="4.1667" />
            <ellipse cx="20.7904" cy="4.1667" fill="var(--fill-0, #343A40)" id="Ellipse 77" rx="4.15811" ry="4.1667" />
            <ellipse cx="4.15794" cy="12.5003" fill="var(--fill-0, #343A40)" id="Ellipse 78" rx="4.15794" ry="4.1667" />
            <ellipse cx="11.9987" cy="12.3314" fill="var(--fill-0, #343A40)" id="Ellipse 79" rx="4.15811" ry="4.1667" />
            <ellipse cx="20.7903" cy="12.5003" fill="var(--fill-0, #343A40)" id="Ellipse 80" rx="4.15811" ry="4.1667" />
            <ellipse cx="4.15794" cy="20.8332" fill="var(--fill-0, #343A40)" id="Ellipse 81" rx="4.15794" ry="4.1667" />
            <ellipse cx="12.474" cy="20.8333" fill="var(--fill-0, #343A40)" id="Ellipse 82" rx="4.15803" ry="4.1667" />
            <ellipse cx="20.7903" cy="20.8333" fill="var(--fill-0, #343A40)" id="Ellipse 83" rx="4.15811" ry="4.1667" />
          </g>
        </svg>
      </button>
      
      {isMenuOpen && (
        <div 
          className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
          style={{ minWidth: '220px' }}
        >
          <div className="relative leading-[0]">
            <div className="overflow-hidden" style={{ height: '48px' }}>
              <img 
                src={imgMenuOutils} 
                alt="Menu Mes outils" 
                className="block w-full h-auto"
              />
            </div>
            <button 
              aria-label="Accéder à l'outil BLV"
              className="flex items-center gap-[10px] h-[48px] pl-[35px] pr-4 leading-normal cursor-pointer w-full text-left border-none bg-transparent hover:bg-gray-50 transition-colors"
              onClick={() => { setActivePage("blv"); setIsMenuOpen(false); }}
            >
              <ListIcon className="w-5 h-5 text-[#28A745] flex-shrink-0" strokeWidth={1.8} />
              <span className="text-[14px] font-['Roboto',sans-serif] text-[#343A40] leading-[20px] font-bold">BLV</span>
            </button>
            <div className="overflow-hidden">
              <img 
                src={imgMenuOutils} 
                alt="Menu Mes outils" 
                className="block w-full h-auto"
                style={{ marginTop: '-48px' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MesOutils() {
  return (
    <div className="absolute contents inset-[19.44%_22.98%_19.44%_73.56%]" data-name="Mes outils">
      <Group8 />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[58.33%_22.98%_19.44%_73.56%] justify-center leading-[0] text-[#343a40] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Mes outils</p>
      </div>
    </div>
  );
}

function MonPanier() {
  const navigate = useNavigate();
  const { setActivePage } = useContext(PageContext);
  return (
    <div 
      className="absolute inset-[19.44%_17.69%_19.44%_78.59%] cursor-pointer pointer-events-auto z-50" 
      data-name="Mon panier"
      onClick={() => {
        setActivePage("panier");
        navigate("/panier");
      }}
    >
      {/* Icône Panier */}
      <div className="absolute inset-0 flex flex-col items-center justify-start">
        <div className="h-[21px] w-[25px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9346 23.4377">
            <path d={svgPaths.p3c052bf0} fill="var(--fill-0, #343A40)" id="Vector" />
          </svg>
        </div>
        {/* Texte Mon panier */}
        <div className="mt-1 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[normal] text-[#343a40] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p>Mon panier</p>
        </div>
      </div>
    </div>
  );
}

function Utilisateur() {
  return (
    <div className="absolute contents inset-[44.68%_1.68%_33.1%_89.69%]" data-name="Utilisateur">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[44.68%_3.39%_33.1%_89.69%] justify-center leading-[0] text-[#343a40] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Pharmacie de l’église</p>
      </div>
      <div className="absolute inset-[50.02%_1.68%_38.44%_97.38%]" data-name="🎨-Color">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9529 8.30769">
          <path d={svgPaths.p13d39600} fill="var(--fill-0, #343A40)" id="ð¨-Color" />
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[34px] inset-[29.17%_73.22%_26.39%_20.66%] items-center justify-center p-[8px]">
      <div aria-hidden="true" className="absolute border-[#146e55] border-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#343a40] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Produits</p>
      </div>
      <div className="h-[5.697px] relative shrink-0 w-[12.343px]" data-name="🎨-Color">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3429 5.6967">
          <path d={svgPaths.p17740200} fill="var(--fill-0, #343A40)" id="ð¨-Color" />
        </svg>
      </div>
    </div>
  );
}

function SelectionRecherche() {
  return (
    <div className="absolute contents inset-[29.17%_73.22%_26.39%_20.66%]" data-name="Selection recherche">
      <Frame6 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[27.78%_37.54%_26.39%_27.54%]">
      <div className="absolute bg-white border-[#146e55] border-[0.5px] border-solid inset-[27.78%_37.54%_26.39%_27.54%]" />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[27.78%_55.3%_26.39%_30.1%] justify-center leading-[0] text-[#778390] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">aspegic</p>
      </div>
      <div className="absolute inset-[37.5%_70.61%_37.5%_28.38%]" data-name="🎨-Color">
        <div className="absolute inset-[-0.56%_-0.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.545 18.2">
            <path d={svgPaths.p3a06ea00} data-figma-bg-blur-radius="4" fill="var(--fill-0, #778390)" id="ð¨-Color" stroke="var(--stroke-0, #343A40)" strokeWidth="0.1" />
            <defs>
              <clipPath id="bgblur_0_1_1606_clip_path" transform="translate(4 4)">
                <path d={svgPaths.p3a06ea00} />
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
      <Group10 />
    </div>
  );
}

function Bell() {
  return (
    <div className="absolute inset-[19.44%_29.48%_45.83%_69.2%]" data-name="Bell 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0658 25">
        <g clipPath="url(#clip0_1_1447)" id="Bell 1">
          <path d={svgPaths.pc953800} fill="var(--fill-0, #343A40)" id="ð¨-Color" />
        </g>
        <defs>
          <clipPath id="clip0_1_1447">
            <rect fill="white" height="25" width="25.0658" />
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

function Group11() {
  return (
    <div className="absolute contents inset-[15.28%_29.16%_59.72%_69.9%]">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[19.44%_29.32%_63.89%_70.05%] justify-center leading-[0] text-[10px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">33</p>
      </div>
      <div className="absolute inset-[15.28%_29.16%_59.72%_69.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9529 18">
          <ellipse cx="8.97644" cy="9" fill="var(--fill-0, #DC3545)" id="Ellipse 89" rx="8.97644" ry="9" />
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[15.28%_28.01%_19.44%_67.75%]">
      <Notifs />
      <Group11 />
    </div>
  );
}

function Clickadoc() {
  return (
    <div className="absolute inset-[40.28%_38.27%_43.36%_57.8%]" data-name="clickadoc">
      <div className="absolute inset-[-4.24%_-0.98%_0_-0.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.0384 12.2818">
          <g id="Group">
            <path d={svgPaths.p25d85e80} fill="var(--fill-0, #146E55)" id="Vector" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
            <path d={svgPaths.p375fe580} fill="var(--fill-0, #146E55)" id="Vector_2" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
            <path d={svgPaths.p252d1200} fill="var(--fill-0, #146E55)" id="Vector_3" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
            <path d={svgPaths.p4b4ac70} fill="var(--fill-0, #146E55)" id="Vector_4" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
            <path d={svgPaths.p1faaa100} fill="var(--fill-0, #146E55)" id="Vector_5" stroke="var(--stroke-0, #146E55)" strokeMiterlimit="10" />
            <path d={svgPaths.p28f63a0} fill="var(--fill-0, #146E55)" id="Vector_6" />
            <path d={svgPaths.pd030b00} fill="var(--fill-0, #A3B8CB)" id="Vector_7" stroke="var(--stroke-0, #A3B8CB)" strokeMiterlimit="10" />
            <path d={svgPaths.p3842ae80} fill="var(--fill-0, #A3B8CB)" id="Vector_8" stroke="var(--stroke-0, #A3B8CB)" strokeMiterlimit="10" />
            <path d={svgPaths.p2aee0900} fill="var(--fill-0, #A3B8CB)" id="Vector_9" stroke="var(--stroke-0, #A3B8CB)" strokeMiterlimit="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1713" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1713)">
            <path d={svgPaths.p3952c830} fill="var(--fill-0, #158567)" id="Vector_2" stroke="var(--stroke-1, #158567)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute inset-[0_7.11%_0_0]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1412" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1412)">
            <path d={svgPaths.p18edad00} fill="var(--fill-0, #A6BCC6)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute inset-[0_7.11%_0_0]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1654" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1654)">
            <path d={svgPaths.p18edad00} id="Vector_2" stroke="var(--stroke-0, #A6BCC6)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute inset-[0_6.16%_0_0.95%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1407" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1407)">
            <path d={svgPaths.p30dc7fc0} fill="var(--fill-0, #A6BCC6)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute inset-[0_6.16%_0_0.95%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1374" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1374)">
            <path d={svgPaths.p30dc7fc0} id="Vector_2" stroke="var(--stroke-0, #A6BCC6)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute inset-[0_6.16%_0_0.95%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1369" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1369)">
            <path d={svgPaths.p1e0dd080} fill="var(--fill-0, #A6BCC6)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup12() {
  return (
    <div className="absolute inset-[0_6.16%_0_0.95%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1437" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1437)">
            <path d={svgPaths.p1e0dd080} id="Vector_2" stroke="var(--stroke-0, #A6BCC6)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup13() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1364" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1364)">
            <path d={svgPaths.p2a60f400} fill="var(--fill-0, #158567)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup14() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1359" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1359)">
            <path d={svgPaths.p2a60f400} id="Vector_2" stroke="var(--stroke-0, #158567)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup15() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1354" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1354)">
            <path d={svgPaths.p210f9000} fill="var(--fill-0, #158567)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup16() {
  return (
    <div className="absolute inset-[0_0_0_7.11%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1644" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1644)">
            <path d={svgPaths.p210f9000} id="Vector_2" stroke="var(--stroke-0, #158567)" strokeMiterlimit="10" strokeWidth="1.277" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup17() {
  return (
    <div className="absolute inset-[0_3.79%_0_3.32%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1349" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1349)">
            <path d={svgPaths.p19017100} fill="var(--fill-0, #158567)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup18() {
  return (
    <div className="absolute inset-[0_3.79%_0_3.32%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.4066 14">
        <g id="Clip path group">
          <mask height="14" id="mask0_1_1611" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="69" x="0" y="0">
            <g id="SVGID_00000155868714534494184170000017481742326154752435_">
              <path d="M68.4066 0H0V14H68.4066V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1611)">
            <path d={svgPaths.p30e21972} fill="var(--fill-0, #158567)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Dicodoc() {
  return (
    <div className="absolute inset-[40.28%_32.99%_40.28%_63.14%]" data-name="Dicodoc">
      <ClipPathGroup6 />
      <ClipPathGroup7 />
      <ClipPathGroup8 />
      <ClipPathGroup9 />
      <ClipPathGroup10 />
      <ClipPathGroup11 />
      <ClipPathGroup12 />
      <ClipPathGroup13 />
      <ClipPathGroup14 />
      <ClipPathGroup15 />
      <ClipPathGroup16 />
      <ClipPathGroup17 />
      <ClipPathGroup18 />
    </div>
  );
}

function Phiv() {
  return (
    <div className="absolute inset-[33.33%_80.37%_39.02%_13.35%]" data-name="Phiv">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.686 19.9078">
        <g id="Phiv">
          <path d={svgPaths.p10ebea00} fill="var(--fill-0, #178466)" id="Vector" />
          <path d={svgPaths.p2acaa800} fill="var(--fill-0, #178466)" id="Vector_2" />
          <path d={svgPaths.p2c35700} fill="var(--fill-0, #178466)" id="Vector_3" />
          <path d={svgPaths.p1add5b70} fill="var(--fill-0, #178466)" id="Vector_4" />
          <path d={svgPaths.p29bd4100} fill="var(--fill-0, #178466)" id="Vector_5" />
          <path d={svgPaths.p2af1b00} fill="var(--fill-0, #95BE2E)" id="Vector_6" />
          <path d={svgPaths.p23d26500} fill="var(--fill-0, #95BE2E)" id="Vector_7" />
          <path d={svgPaths.p1de79f00} fill="var(--fill-0, #95BE2E)" id="Vector_8" />
          <path d={svgPaths.p33764680} fill="var(--fill-0, #95BE2E)" id="Vector_9" />
          <path d={svgPaths.p3c3c400} fill="var(--fill-0, #95BE2E)" id="Vector_10" />
          <g id="Group">
            <path d={svgPaths.p3a566e00} fill="var(--fill-0, #95BE2E)" id="Vector_11" />
            <path d={svgPaths.p3312b600} fill="var(--fill-0, #178466)" id="Vector_12" />
          </g>
          <path d={svgPaths.p17526d00} fill="var(--fill-0, #178466)" id="Vector_13" />
          <path d={svgPaths.p93f100} fill="var(--fill-0, #178466)" id="Vector_14" />
          <path d={svgPaths.p11285880} fill="var(--fill-0, #178466)" id="Vector_15" />
          <path d={svgPaths.p3f68d250} fill="var(--fill-0, #178466)" id="Vector_16" />
          <path d={svgPaths.p16df7b00} fill="var(--fill-0, #178466)" id="Vector_17" />
          <path d={svgPaths.p1caa8f00} fill="var(--fill-0, #95BE2E)" id="Vector_18" />
          <path d={svgPaths.p36c76580} fill="var(--fill-0, #95BE2E)" id="Vector_19" />
          <path d={svgPaths.p24687000} fill="var(--fill-0, #95BE2E)" id="Vector_20" />
          <path d={svgPaths.p128abd80} fill="var(--fill-0, #95BE2E)" id="Vector_21" />
          <path d={svgPaths.p383c8280} fill="var(--fill-0, #95BE2E)" id="Vector_22" />
          <g id="Group_2">
            <path d={svgPaths.p2f3bf800} fill="var(--fill-0, #95BE2E)" id="Vector_23" />
            <path d={svgPaths.p1907c00} fill="var(--fill-0, #178466)" id="Vector_24" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderBlancPhiv() {
  const navigate = useNavigate();
  const { setActivePage } = useContext(PageContext);
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[1905px]" data-name="Header blanc PHIV">
      <div className="absolute bg-white border-[#146e55] border-[0.5px] border-solid inset-0" data-name="Header blanc" />
      <Aide1 />
      <MesOutils />
      <MonPanier />
      <Utilisateur />
      <SelectionRecherche />
      <MoteurDeRecherche />
      <Group12 />
      <Clickadoc />
      <div className="absolute flex flex-col font-['Roboto:Condensed_Medium_Italic',sans-serif] font-medium inset-[38.89%_86.91%_40.28%_11.31%] italic justify-center leading-[0] text-[#343a40] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal]">pour</p>
      </div>
      <Dicodoc />
      <div className="absolute inset-[38.89%_88.9%_38.18%_0.63%]" data-name="MicrosoftTeams-image (4) (1) 1">
        <img 
          alt="Logo de l'entreprise" 
          className="absolute inset-0 max-w-none object-50%-50% object-contain cursor-pointer size-full" 
          src={imgMicrosoftTeamsImage411} 
          onClick={() => {
            setActivePage("home");
            navigate("/");
          }}
        />
      </div>
      <Phiv />
    </div>
  );
}

function BlvPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f6f4] w-[1905px]">
      <div className="flex-grow pt-[127px]">
        <BlvPage />
      </div>
      {/* Footer en bas de page - Fin du scroll */}
      <div className="relative bg-[#343a40] h-[246.33px] w-[1905px] shrink-0 overflow-hidden">
        <DivFooterIso />
        <DivContainer />
        <Icon8 />
        <Icon9 />
      </div>
    </div>
  );
}

export default function Homepage() {
  const [activePage, setActivePage] = useState<PageType>("home");

  return (
    <PageContext.Provider value={{ activePage, setActivePage }}>
      <div className="relative w-[1905px] min-h-screen" data-name="Homepage  1905">
        {activePage === "home" ? (
          <div className="relative min-h-screen flex flex-col">
            <div className="flex-grow">
              <BodyHeaderSticky />
              <Group13 />
            </div>
          </div>
        ) : activePage === "blv" ? (
          <BlvPageContent />
        ) : (
          <Panier />
        )}
        {(activePage === "home" || activePage === "blv") && (
          <>
            <Background />
            <HeaderBlancPhiv />
          </>
        )}
      </div>
    </PageContext.Provider>
  );
}