import { useState, useRef, useEffect } from "react";
import "../../styles/print.css";
import {
  Package,
  ChevronDown,
  ChevronUp,
  Truck,
  Calendar,
  Hash,
  MapPin,
  ScanBarcode,
  Search,
  X,
  BoxesIcon,
  Snowflake,
  Star,
  Cog,
  Layers,
  PackageCheck,
  AlertCircle,
  CircleCheckBig,
  Info,
  CircleX,
  FileText,
  AlertTriangle,
  Download,
  Zap,
  Sparkles,
  History,
  Pill,
  Thermometer,
  Filter,
  Phone,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Printer,
  ClipboardCheck,
  Mail,
  AtSign,
  Undo,
  Redo,
} from "lucide-react";
import CaisseIcon from "../../imports/Img";
import Vector from "../../imports/Vector";
import mailIcon from "figma:asset/mail-icon.png";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { PrintableLotContent } from "./PrintableLotContent";
import svgPaths from "../../imports/svg-nqcs4ed50i";

// --- Types ---
type LotType = "normale" | "promis" | "automate" | "frigo" | "depannage" | "chronique" | "etradi" | "virtuose" | "completage";

interface Produit {
  id: string;
  refCommandeClient: string;
  cip: string;
  numeroOrdre?: string; // N° d'ordre (10 chiffres)
  designation: string;
  separateur?: string; // Séparateur (ex: "378")
  prixPharmacien: number;
  isFroid: boolean;
  isStup: boolean;
  isNonRemboursé?: boolean;
  canal?: string; // Canal de commande: "Téléphone", "Web", "EDI", etc.
  quantiteAttendue: number;
  prixUnitaireAttendu: number;
  quantiteLivree: number;
  quantiteFacturee: number;
  prixUnitaireFacture: number;
  hasValidationError: boolean;
  hasAvoirEnCours?: boolean; // Si true, un avoir est en cours pour ce produit
  errorMotif?: string; // Motif de l'erreur de validation
  errorInClientFavor?: boolean; // Si true, l'erreur est à la faveur du client (prix/quantité favorable)
  caracteristique?: string; // Conservé pour compatibilité
}

interface Caisse {
  id: string;
  code: string;
  numeroCaisse: number;
  numeroTicketAdresse?: string; // Numéro de ticket d'adresse
  numeroBL?: string; // Numéro de bon de livraison
  libelleMarque: string;
  status?: "verified" | "ko";
  produits: Produit[];
}

interface EO {
  id: string;
  code: string;
  numeroEO: number;
  numeroTicketAdresse?: string; // Numéro de ticket d'adresse
  numeroEtiquette?: string; // Numéro d'étiquette EO
  libelleMarque: string;
  status?: "verified" | "ko";
  produits: Produit[];
}

interface Lot {
  id: string;
  type: LotType;
  caisses: Caisse[];
  eos?: EO[];
}

interface Livraison {
  numeroBL: string;
  dateLivraison: string;
  heureLivraison: string;
  heureEstimee: string; // Conservé pour compatibilité
  pharmacie: string;
  adresse: string;
  lots: Lot[];
  hasProduitReparti?: boolean;
}

// --- Mock Data ---
const mockLivraisons: Livraison[] = [
  {
    numeroBL: "BL-2026-019850",
    dateLivraison: "24/02/2026",
    heureLivraison: "08:30",
    heureEstimee: "08h30",
    pharmacie: "Pharmacie du Centre",
    adresse: "12 Rue de la République, 69001 Lyon",
    lots: [
      {
        id: "lot-today-promis",
        type: "promis",
        caisses: [
          {
            id: "c-today-promis-1",
            code: "PROM-2026-0100",
            numeroCaisse: 100301,
            numeroTicketAdresse: "TA123546794",
            numeroBL: "BL2026-0100-P",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-promis-1", 
                refCommandeClient: "CMD-2026-15500",
                numeroOrdre: "0000000001",
                cip: "3401000", 
                designation: "LEVOTHYROX 75MCG CPR BT/90", 
                prixPharmacien: 4.25,
                isFroid: false,
                isStup: false,
                quantiteAttendue: 5,
                prixUnitaireAttendu: 4.25,
                quantiteLivree: 5,
                quantiteFacturee: 5,
                prixUnitaireFacture: 4.25,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-promis-2", 
                refCommandeClient: "CMD-2026-15500",
                numeroOrdre: "0000000002",
                cip: "3401001", 
                designation: "KARDEGIC 75MG SACHETS BT/30", 
                prixPharmacien: 2.15,
                isFroid: false,
                isStup: false,
                quantiteAttendue: 10,
                prixUnitaireAttendu: 2.15,
                quantiteLivree: 8,
                quantiteFacturee: 9,
                prixUnitaireFacture: 2.15,
                hasValidationError: false,
                hasAvoirEnCours: true,
                caracteristique: "Standard"
              },
            ],
          },
        ],
        eos: [],
      },
      {
        id: "lot-today-frigo",
        type: "frigo",
        caisses: [
          {
            id: "c-today-2",
            code: "FRIG-2026-0050",
            numeroCaisse: 100201,
            numeroTicketAdresse: "TA123546792",
            numeroBL: "BL2026-0050-F",
            libelleMarque: "OCP",
            produits: [
              { 
                id: "p-today-3", 
                refCommandeClient: "CMD-2026-15488",
                numeroOrdre: "0000000003",
                cip: "3400951", 
                designation: "VACCIN GRIPPE INFLUVAC 2025/2026", 
                prixPharmacien: 8.90,
                isFroid: true,
                isStup: false,
                quantiteAttendue: 10,
                prixUnitaireAttendu: 8.90,
                quantiteLivree: 9,
                quantiteFacturee: 9,
                prixUnitaireFacture: 8.90,
                hasValidationError: false,
                caracteristique: "Froid"
              },
              { 
                id: "p-today-3b", 
                refCommandeClient: "CMD-2026-15488",
                numeroOrdre: "0000000004",
                cip: "3400972", 
                designation: "VACCIN TETANOS REVAXIS", 
                prixPharmacien: 18.50,
                isFroid: true,
                isStup: false,
                quantiteAttendue: 7,
                prixUnitaireAttendu: 18.50,
                quantiteLivree: 7,
                quantiteFacturee: 7,
                prixUnitaireFacture: 18.50,
                hasValidationError: false,
                caracteristique: "Froid"
              },
            ],
          },
          {
            id: "c-today-2b",
            code: "FRIG-2026-0051",
            numeroCaisse: 100206,
            numeroTicketAdresse: "TA123546793",
            numeroBL: "BL2026-0051-F",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-today-2b-1", 
                refCommandeClient: "CMD-2026-15488",
                numeroOrdre: "0000000005",
                cip: "3400973", 
                designation: "VACCIN PREVENAR 13 SUSP INJ BT/1", 
                prixPharmacien: 45.60,
                isFroid: true,
                isStup: false,
                quantiteAttendue: 2,
                prixUnitaireAttendu: 45.60,
                quantiteLivree: 2,
                quantiteFacturee: 2,
                prixUnitaireFacture: 45.60,
                hasValidationError: false,
                caracteristique: "Froid"
              },
              { 
                id: "p-today-2b-2", 
                refCommandeClient: "CMD-2026-15488",
                cip: "3400974", 
                designation: "INSULINE NOVORAPID FLEXPEN", 
                prixPharmacien: 29.80,
                isFroid: true,
                isStup: false,
                quantiteAttendue: 4,
                prixUnitaireAttendu: 29.80,
                quantiteLivree: 4,
                quantiteFacturee: 4,
                prixUnitaireFacture: 29.80,
                hasValidationError: false,
                caracteristique: "Froid"
              },
            ],
          },
        ],
      },
      {
        id: "lot-today-automate",
        type: "automate",
        caisses: [
          {
            id: "c-today-automate-1",
            code: "AUTO-2026-0200",
            numeroCaisse: 100401,
            numeroTicketAdresse: "TA123546795",
            numeroBL: "BL2026-0200-A",
            libelleMarque: "OCP",
            produits: [
              { 
                id: "p-ocp-1-4", 
                refCommandeClient: "CMD-2026-16001",
                cip: "3401597458963", 
                designation: "ARKOGELULES OLIVIER GEL BT/45", 
                separateur: "891",
                prixPharmacien: 8.90,
                isFroid: false,
                isStup: false,
                isNonRemboursé: true,
                canal: "Web",
                quantiteAttendue: 10,
                prixUnitaireAttendu: 8.90,
                quantiteLivree: 8,
                quantiteFacturee: 10,
                prixUnitaireFacture: 8.90,
                hasValidationError: false,
                hasAvoirEnCours: true,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-1-5", 
                refCommandeClient: "CMD-2026-16001",
                cip: "3401598745632", 
                designation: "PURESSENTIEL SPRAY NASAL 15ML", 
                separateur: "234",
                prixPharmacien: 6.50,
                isFroid: false,
                isStup: false,
                isNonRemboursé: true,
                canal: "EDI",
                quantiteAttendue: 8,
                prixUnitaireAttendu: 6.50,
                quantiteLivree: 8,
                quantiteFacturee: 8,
                prixUnitaireFacture: 6.50,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-1-6", 
                refCommandeClient: "CMD-2026-16001",
                cip: "3401599856321", 
                designation: "GRANIONS DE MAGNESIUM AMP BT/30", 
                separateur: "456",
                prixPharmacien: 7.20,
                isFroid: false,
                isStup: false,
                isNonRemboursé: true,
                canal: "Téléphone",
                quantiteAttendue: 12,
                prixUnitaireAttendu: 7.20,
                quantiteLivree: 12,
                quantiteFacturee: 12,
                prixUnitaireFacture: 7.20,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "c-ocp-2",
            code: "BLV-2026-0502",
            numeroCaisse: 100146,
            numeroTicketAdresse: "TA987654322",
            numeroBL: "BL2026-0502-B",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-ocp-2-1", 
                refCommandeClient: "CMD-2026-16002",
                cip: "3400938521479", 
                designation: "IBUPROFENE 400MG CPR BT/20", 
                separateur: "789",
                prixPharmacien: 3.50,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 10,
                prixUnitaireAttendu: 3.50,
                quantiteLivree: 10,
                quantiteFacturee: 10,
                prixUnitaireFacture: 3.50,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-2-2", 
                refCommandeClient: "CMD-2026-16002",
                cip: "3400941258963", 
                designation: "AMOXICILLINE 1G CPR BT/12", 
                separateur: "345",
                prixPharmacien: 5.15,
                isFroid: false,
                isStup: false,
                canal: "Web",
                quantiteAttendue: 30,
                prixUnitaireAttendu: 5.15,
                quantiteLivree: 30,
                quantiteFacturee: 30,
                prixUnitaireFacture: 5.15,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-2-3", 
                refCommandeClient: "CMD-2026-16002",
                cip: "3400955874123", 
                designation: "GAVISCON MENTHE 24 SACHETS", 
                separateur: "901",
                prixPharmacien: 5.80,
                isFroid: false,
                isStup: false,
                canal: "Téléphone",
                quantiteAttendue: 12,
                prixUnitaireAttendu: 5.80,
                quantiteLivree: 12,
                quantiteFacturee: 12,
                prixUnitaireFacture: 5.80,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "c-ocp-3",
            code: "BLV-2026-0503",
            numeroCaisse: 100147,
            numeroTicketAdresse: "TA987654323",
            numeroBL: "BL2026-0503-C",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-ocp-3-1", 
                refCommandeClient: "CMD-2026-16003",
                cip: "3400949632587", 
                designation: "MORPHINE SULFATE 10MG/ML SOL INJ FL/1ML", 
                separateur: "156",
                prixPharmacien: 1.95,
                isFroid: false,
                isStup: true,
                canal: "EDI",
                quantiteAttendue: 8,
                prixUnitaireAttendu: 1.95,
                quantiteLivree: 8,
                quantiteFacturee: 8,
                prixUnitaireFacture: 1.95,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-3-2", 
                refCommandeClient: "CMD-2026-16003",
                cip: "3400952147896", 
                designation: "HELICIDINE 10% SIROP FL/250ML", 
                separateur: "423",
                prixPharmacien: 4.95,
                isFroid: false,
                isStup: false,
                canal: "Web",
                quantiteAttendue: 18,
                prixUnitaireAttendu: 4.95,
                quantiteLivree: 18,
                quantiteFacturee: 18,
                prixUnitaireFacture: 4.95,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "c-ocp-4",
            code: "BLV-2026-0504",
            numeroCaisse: 100148,
            numeroTicketAdresse: "TA987654324",
            numeroBL: "BL2026-0504-D",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-ocp-4-1", 
                refCommandeClient: "CMD-2026-16004",
                cip: "3400961258741", 
                designation: "ASPIRINE 1000MG CPR BT/20", 
                separateur: "678",
                prixPharmacien: 2.45,
                isFroid: false,
                isStup: false,
                canal: "Téléphone",
                quantiteAttendue: 22,
                prixUnitaireAttendu: 2.45,
                quantiteLivree: 22,
                quantiteFacturee: 22,
                prixUnitaireFacture: 2.45,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-4-2", 
                refCommandeClient: "CMD-2026-16004",
                cip: "3400963147852", 
                designation: "NUROFEN 400MG CPR BT/12", 
                separateur: "234",
                prixPharmacien: 3.20,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 14,
                prixUnitaireAttendu: 3.20,
                quantiteLivree: 14,
                quantiteFacturee: 14,
                prixUnitaireFacture: 3.20,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-4-3", 
                refCommandeClient: "CMD-2026-16004",
                cip: "3400964852963", 
                designation: "OXYCODONE 10MG CPR BT/28", 
                separateur: "890",
                prixPharmacien: 3.85,
                isFroid: false,
                isStup: true,
                canal: "Web",
                quantiteAttendue: 6,
                prixUnitaireAttendu: 3.85,
                quantiteLivree: 6,
                quantiteFacturee: 6,
                prixUnitaireFacture: 3.85,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "c-ocp-5",
            code: "BLV-2026-0505",
            numeroCaisse: 100149,
            numeroTicketAdresse: "TA987654325",
            numeroBL: "BL2026-0505-E",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-ocp-5-1", 
                refCommandeClient: "CMD-2026-16005",
                cip: "3400965741258", 
                designation: "PARACETAMOL 500MG CPR BT/16", 
                separateur: "512",
                prixPharmacien: 1.85,
                isFroid: false,
                isStup: false,
                canal: "Téléphone",
                quantiteAttendue: 35,
                prixUnitaireAttendu: 1.85,
                quantiteLivree: 35,
                quantiteFacturee: 35,
                prixUnitaireFacture: 1.85,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-5-2", 
                refCommandeClient: "CMD-2026-16005",
                cip: "3400967852147", 
                designation: "VENTOLINE 100MCG/DOSE INH BT/200", 
                separateur: "345",
                prixPharmacien: 3.75,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 16,
                prixUnitaireAttendu: 3.75,
                quantiteLivree: 16,
                quantiteFacturee: 16,
                prixUnitaireFacture: 3.75,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
        ],
        eos: [
          {
            id: "eo-ocp-1",
            code: "EO-2026-2001",
            numeroEO: 2001,
            numeroTicketAdresse: "TA987654326",
            numeroEtiquette: "ETQ-2001-2026",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              {
                id: "p-eo-ocp-1-1",
                refCommandeClient: "CMD-2026-16006",
                cip: "3400970258963",
                designation: "TOPLEXIL SIROP FL/150ML",
                separateur: "678",
                prixPharmacien: 5.45,
                isFroid: false,
                isStup: false,
                canal: "Web",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 5.45,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 5.45,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "eo-ocp-2",
            code: "EO-2026-2002",
            numeroEO: 2002,
            numeroTicketAdresse: "TA987654327",
            numeroEtiquette: "ETQ-2002-2026",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              {
                id: "p-eo-ocp-2-1",
                refCommandeClient: "CMD-2026-16007",
                cip: "3400971369852",
                designation: "RHINADVIL CAPS BT/20",
                separateur: "901",
                prixPharmacien: 4.80,
                isFroid: false,
                isStup: false,
                canal: "Téléphone",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 4.80,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 4.80,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
        ],
      },
      {
        id: "lot-today-normale",
        type: "normale",
        caisses: [
          {
            id: "c-ocp-1",
            code: "BLV-2026-0501",
            numeroCaisse: 100145,
            numeroTicketAdresse: "TA987654321",
            numeroBL: "BL2026-0501-A",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-ocp-1-1", 
                refCommandeClient: "CMD-2026-16001",
                cip: "3400936587412", 
                designation: "DOLIPRANE 1000MG CPR BT/8", 
                separateur: "234",
                prixPharmacien: 2.45,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 20,
                prixUnitaireAttendu: 2.12,
                quantiteLivree: 18,
                quantiteFacturee: 20,
                prixUnitaireFacture: 2.45,
                hasValidationError: true,
                caracteristique: "Standard"
              },
              { 
                id: "p-ocp-1-2", 
                refCommandeClient: "CMD-2026-16001",
                cip: "3400937412589", 
                designation: "SPASFON 80MG CPR BT/30", 
                separateur: "567",
                prixPharmacien: 3.25,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 15,
                prixUnitaireAttendu: 3.15,
                quantiteLivree: 15,
                quantiteFacturee: 15,
                prixUnitaireFacture: 3.25,
                hasValidationError: true,
                caracteristique: "Standard"
              },
            ],
          },
        ],
        eos: [],
      },
      {
        id: "lot-today-etradi",
        type: "etradi",
        caisses: [
          {
            id: "c-etradi-today-1",
            code: "ETRA-2026-0901",
            numeroCaisse: 200850,
            numeroTicketAdresse: "TA888899001",
            numeroBL: "BL2026-0901-E",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-etradi-t-1", 
                refCommandeClient: "CMD-2026-18001",
                cip: "3401040258963", 
                designation: "HUMIRA 40MG SOL INJ BT/2", 
                separateur: "101",
                prixPharmacien: 485.50,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 485.50,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 485.50,
                hasValidationError: false,
                caracteristique: "Standard"
              }
            ],
          }
        ],
        eos: [],
      },
      {
        id: "lot-today-virtuose",
        type: "virtuose",
        caisses: [
          {
            id: "c-virtuose-today-1",
            code: "VIRT-2026-0901",
            numeroCaisse: 300950,
            numeroTicketAdresse: "TA999999001",
            numeroBL: "BL2026-0901-V",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-virtuose-t-1", 
                refCommandeClient: "CMD-2026-19001",
                cip: "3401043852741", 
                designation: "STELARA 45MG SOL INJ BT/1", 
                separateur: "404",
                prixPharmacien: 1856.40,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 1856.40,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 1856.40,
                hasValidationError: false,
                caracteristique: "Standard"
              }
            ],
          }
        ],
        eos: [],
      },
    ],
  },
  {
    numeroBL: "BL-2026-019820",
    dateLivraison: "23/02/2026",
    heureLivraison: "09:15",
    heureEstimee: "09h15",
    pharmacie: "Pharmacie du Centre",
    adresse: "12 Rue de la République, 69001 Lyon",
    lots: [
      {
        id: "lot-1-normale",
        type: "normale",
        caisses: [
          {
            id: "c-etradi-1",
            code: "ETRA-2026-0301",
            numeroCaisse: 100710,
            numeroTicketAdresse: "TA888888801",
            numeroBL: "BL2026-0301-E",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-etradi-1-1", 
                refCommandeClient: "CMD-2026-17001",
                cip: "3401040258963", 
                designation: "HUMIRA 40MG SOL INJ BT/2", 
                separateur: "101",
                prixPharmacien: 485.50,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 2,
                prixUnitaireAttendu: 485.50,
                quantiteLivree: 2,
                quantiteFacturee: 2,
                prixUnitaireFacture: 485.50,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-etradi-1-2", 
                refCommandeClient: "CMD-2026-17001",
                cip: "3401041369852", 
                designation: "ENBREL 50MG SOL INJ BT/4", 
                separateur: "202",
                prixPharmacien: 625.80,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 625.80,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 625.80,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-etradi-1-3", 
                refCommandeClient: "CMD-2026-17001",
                cip: "3401042147896", 
                designation: "REMICADE 100MG PDRE P SOL PERF", 
                separateur: "303",
                prixPharmacien: 512.30,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 512.30,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 512.30,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "c-etradi-2",
            code: "ETRA-2026-0302",
            numeroCaisse: 100711,
            numeroTicketAdresse: "TA888888802",
            numeroBL: "BL2026-0302-E",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-etradi-2-1", 
                refCommandeClient: "CMD-2026-17002",
                cip: "3401043852741", 
                designation: "STELARA 45MG SOL INJ BT/1", 
                separateur: "404",
                prixPharmacien: 1856.40,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 1856.40,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 1856.40,
                hasValidationError: false,
                caracteristique: "Standard"
              },
              { 
                id: "p-etradi-2-2", 
                refCommandeClient: "CMD-2026-17002",
                cip: "3401044741258", 
                designation: "CIMZIA 200MG SOL INJ BT/2", 
                separateur: "505",
                prixPharmacien: 742.15,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 2,
                prixUnitaireAttendu: 742.15,
                quantiteLivree: 2,
                quantiteFacturee: 2,
                prixUnitaireFacture: 742.15,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
        ],
        eos: [
          {
            id: "eo-etradi-1",
            code: "EO-2026-3001",
            numeroEO: 3001,
            numeroTicketAdresse: "TA888888803",
            numeroEtiquette: "ETQ-3001-2026",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              {
                id: "p-eo-etradi-1-1",
                refCommandeClient: "CMD-2026-17003",
                cip: "3401045963852",
                designation: "COSENTYX 150MG SOL INJ BT/1",
                separateur: "606",
                prixPharmacien: 945.60,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 945.60,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 945.60,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "eo-etradi-2",
            code: "EO-2026-3002",
            numeroEO: 3002,
            numeroTicketAdresse: "TA888888804",
            numeroEtiquette: "ETQ-3002-2026",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              {
                id: "p-eo-etradi-2-1",
                refCommandeClient: "CMD-2026-17004",
                cip: "3401046852147",
                designation: "TALTZ 80MG SOL INJ BT/1",
                separateur: "707",
                prixPharmacien: 1124.80,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 1124.80,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 1124.80,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "eo-etradi-3",
            code: "EO-2026-3003",
            numeroEO: 3003,
            numeroTicketAdresse: "TA888888805",
            numeroEtiquette: "ETQ-3003-2026",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              {
                id: "p-eo-etradi-3-1",
                refCommandeClient: "CMD-2026-17005",
                cip: "3401047741369",
                designation: "SIMPONI 50MG SOL INJ BT/1",
                separateur: "808",
                prixPharmacien: 987.35,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 987.35,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 987.35,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
          {
            id: "eo-etradi-4",
            code: "EO-2026-3004",
            numeroEO: 3004,
            numeroTicketAdresse: "TA888888806",
            numeroEtiquette: "ETQ-3004-2026",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              {
                id: "p-eo-etradi-4-1",
                refCommandeClient: "CMD-2026-17006",
                cip: "3401048963258",
                designation: "SKYRIZI 75MG SOL INJ BT/1",
                separateur: "909",
                prixPharmacien: 1658.90,
                isFroid: false,
                isStup: false,
                canal: "EDI",
                quantiteAttendue: 1,
                prixUnitaireAttendu: 1658.90,
                quantiteLivree: 1,
                quantiteFacturee: 1,
                prixUnitaireFacture: 1658.90,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
        ],
      },
    ],
  },
  {
    numeroBL: "BL-2026-019810",
    dateLivraison: "22/02/2026",
    heureLivraison: "14:20",
    heureEstimee: "14h20",
    pharmacie: "Pharmacie du Centre",
    adresse: "12 Rue de la République, 69001 Lyon",
    lots: [
      {
        id: "lot-22-normale",
        type: "normale",
        caisses: [
          {
            id: "c-22-1",
            code: "NORM-2026-0200",
            numeroCaisse: 100405,
            numeroTicketAdresse: "TA123546700",
            numeroBL: "BL2026-0200-N",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-22-1", 
                refCommandeClient: "CMD-2026-16800",
                cip: "3400930", 
                designation: "DOLIPRANE 1000MG CPR BT/8", 
                prixPharmacien: 2.18,
                isFroid: false,
                isStup: false,
                quantiteAttendue: 15,
                prixUnitaireAttendu: 2.18,
                quantiteLivree: 15,
                quantiteFacturee: 15,
                prixUnitaireFacture: 2.18,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
        ],
        eos: [],
      },
    ],
  },
  {
    numeroBL: "BL-2026-019800",
    dateLivraison: "21/02/2026",
    heureLivraison: "10:45",
    heureEstimee: "10h45",
    pharmacie: "Pharmacie du Centre",
    adresse: "12 Rue de la République, 69001 Lyon",
    lots: [
      {
        id: "lot-21-frigo",
        type: "frigo",
        caisses: [
          {
            id: "c-21-1",
            code: "FRIG-2026-0180",
            numeroCaisse: 100305,
            numeroTicketAdresse: "TA123546650",
            numeroBL: "BL2026-0180-F",
            libelleMarque: "OCP",
            produits: [
              { 
                id: "p-21-1", 
                refCommandeClient: "CMD-2026-16700",
                cip: "3400955", 
                designation: "INSULINE LANTUS 100UI/ML", 
                prixPharmacien: 28.40,
                isFroid: true,
                isStup: false,
                quantiteAttendue: 8,
                prixUnitaireAttendu: 28.40,
                quantiteLivree: 8,
                quantiteFacturee: 8,
                prixUnitaireFacture: 28.40,
                hasValidationError: false,
                caracteristique: "Froid"
              },
            ],
          },
        ],
        eos: [],
      },
    ],
  },
  {
    numeroBL: "BL-2026-019790",
    dateLivraison: "20/02/2026",
    heureLivraison: "08:15",
    heureEstimee: "08h15",
    pharmacie: "Pharmacie du Centre",
    adresse: "12 Rue de la République, 69001 Lyon",
    lots: [
      {
        id: "lot-20-normale",
        type: "normale",
        caisses: [
          {
            id: "c-20-1",
            code: "NORM-2026-0170",
            numeroCaisse: 100410,
            numeroTicketAdresse: "TA123546600",
            numeroBL: "BL2026-0170-N",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-20-1", 
                refCommandeClient: "CMD-2026-16600",
                cip: "3400940", 
                designation: "EFFERALGAN 1000MG CPR BT/8", 
                prixPharmacien: 2.35,
                isFroid: false,
                isStup: false,
                quantiteAttendue: 12,
                prixUnitaireAttendu: 2.35,
                quantiteLivree: 12,
                quantiteFacturee: 12,
                prixUnitaireFacture: 2.35,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
        ],
        eos: [],
      },
    ],
  },
  {
    numeroBL: "BL-2026-019780",
    dateLivraison: "19/02/2026",
    heureLivraison: "13:30",
    heureEstimee: "13h30",
    pharmacie: "Pharmacie du Centre",
    adresse: "12 Rue de la République, 69001 Lyon",
    lots: [
      {
        id: "lot-19-automate",
        type: "automate",
        caisses: [
          {
            id: "c-19-1",
            code: "AUTO-2026-0160",
            numeroCaisse: 100505,
            numeroTicketAdresse: "TA123546550",
            numeroBL: "BL2026-0160-A",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-19-1", 
                refCommandeClient: "CMD-2026-16500",
                cip: "3400960", 
                designation: "SPASFON 80MG CPR BT/30", 
                prixPharmacien: 3.25,
                isFroid: false,
                isStup: false,
                quantiteAttendue: 10,
                prixUnitaireAttendu: 3.25,
                quantiteLivree: 10,
                quantiteFacturee: 10,
                prixUnitaireFacture: 3.25,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
        ],
        eos: [],
      },
    ],
  },
  {
    numeroBL: "BL-2026-019770",
    dateLivraison: "18/02/2026",
    heureLivraison: "09:50",
    heureEstimee: "09h50",
    pharmacie: "Pharmacie du Centre",
    adresse: "12 Rue de la République, 69001 Lyon",
    lots: [
      {
        id: "lot-18-normale",
        type: "normale",
        caisses: [
          {
            id: "c-18-1",
            code: "NORM-2026-0150",
            numeroCaisse: 100415,
            numeroTicketAdresse: "TA123546500",
            numeroBL: "BL2026-0150-N",
            libelleMarque: "OCP",
            status: "verified",
            produits: [
              { 
                id: "p-18-1", 
                refCommandeClient: "CMD-2026-16400",
                cip: "3400970", 
                designation: "LYSOPAÏNE MAUX DE GORGE BT/18", 
                prixPharmacien: 4.90,
                isFroid: false,
                isStup: false,
                quantiteAttendue: 8,
                prixUnitaireAttendu: 4.90,
                quantiteLivree: 8,
                quantiteFacturee: 8,
                prixUnitaireFacture: 4.90,
                hasValidationError: false,
                caracteristique: "Standard"
              },
            ],
          },
        ],
        eos: [],
      },
    ],
  },
];

// Populate numeroOrdre for all products
mockLivraisons.forEach(liv => {
  let order = 1;
  liv.lots.forEach(lot => {
    lot.caisses.forEach(c => {
      c.produits.forEach(p => {
        p.numeroOrdre = (order++).toString().padStart(10, '0');
      });
    });
    lot.eos?.forEach(eo => {
      eo.produits.forEach(p => {
        p.numeroOrdre = (order++).toString().padStart(10, '0');
      });
    });
  });
});

// --- Helpers ---
const lotConfig: Record<LotType, { label: string; color: string; bg: string; lightBg: string; borderColor: string; icon: React.ReactNode }> = {
  normale: {
    label: "Normale",
    color: "#2e7d32",
    bg: "#e8f5e9",
    lightBg: "#f1f8f2",
    borderColor: "#a5d6a7",
    icon: <Package className="w-[22px] h-[22px]" style={{ color: "#2e7d32" }} />,
  },
  promis: {
    label: "Promis",
    color: "#e65100",
    bg: "#fff3e0",
    lightBg: "#fff8f0",
    borderColor: "#ffcc80",
    icon: <Star className="w-[22px] h-[22px]" style={{ color: "#e65100" }} />,
  },
  frigo: {
    label: "Froid",
    color: "#0277bd",
    bg: "#e1f5fe",
    lightBg: "#f0f9ff",
    borderColor: "#81d4fa",
    icon: <Snowflake className="w-[22px] h-[22px]" style={{ color: "#0277bd" }} />,
  },
  automate: {
    label: "Automate",
    color: "#6a1b9a",
    bg: "#f3e5f5",
    lightBg: "#faf5fc",
    borderColor: "#ce93d8",
    icon: <Cog className="w-[22px] h-[22px]" style={{ color: "#6a1b9a" }} />,
  },
  depannage: {
    label: "Dépannage",
    color: "#d32f2f",
    bg: "#ffebee",
    lightBg: "#fff5f5",
    borderColor: "#ef9a9a",
    icon: <Zap className="w-[22px] h-[22px]" style={{ color: "#d32f2f" }} />,
  },
  chronique: {
    label: "Chronique",
    color: "#f57c00",
    bg: "#fff3e0",
    lightBg: "#fffaf0",
    borderColor: "#ffb74d",
    icon: <History className="w-[22px] h-[22px]" style={{ color: "#f57c00" }} />,
  },
  etradi: {
    label: "ETRADI",
    color: "#00838f",
    bg: "#e0f7fa",
    lightBg: "#f0fbfc",
    borderColor: "#80deea",
    icon: <Pill className="w-[22px] h-[22px]" style={{ color: "#00838f" }} />,
  },
  virtuose: {
    label: "VIRTUOSE",
    color: "#ad1457",
    bg: "#fce4ec",
    lightBg: "#fef5f8",
    borderColor: "#f48fb1",
    icon: <Sparkles className="w-[22px] h-[22px]" style={{ color: "#ad1457" }} />,
  },
  completage: {
    label: "Complétage",
    color: "#5d4037",
    bg: "#efebe9",
    lightBg: "#f7f5f4",
    borderColor: "#bcaaa4",
    icon: <Layers className="w-[22px] h-[22px]" style={{ color: "#5d4037" }} />,
  },
};

const statusConfig = {
  ecart: {
    color: "#cf1322",
    bg: "#fff1f0",
    label: "Écart",
    icon: <CircleX className="w-4 h-4" style={{ color: "#cf1322" }} />,
  },
  avoir: {
    color: "#ffffff",
    bg: "#006B7D",
    label: "Avoirs en cours",
    icon: <FileText className="w-4 h-4" style={{ color: "#ffffff" }} />,
  },
  rectifie: {
    color: "#000000",
    bg: "#ffffff",
    label: "Factures rectifiées",
    icon: <AlertTriangle className="w-4 h-4" style={{ color: "#000000" }} />,
  },
  ok: {
    color: "#2e7d32",
    bg: "#f1f8f2",
    label: "Aucun écart",
    icon: <CircleCheckBig className="w-4 h-4" style={{ color: "#2e7d32" }} />,
  },
};

const getLotIcon = (type: LotType) => lotConfig[type]?.icon || <Package className="w-[22px] h-[22px]" />;

function getLotEOCount(lot: Lot): number {
  return (lot.eos || []).length;
}

function getTotalEO(livraison: Livraison): number {
  return livraison.lots.reduce((sum, l) => sum + getLotEOCount(l), 0);
}

// Helpers pour compter les produits par type dans un lot
function getAllProduitsFromLot(lot: Lot): Produit[] {
  const produits: Produit[] = [];
  lot.caisses.forEach(caisse => {
    produits.push(...caisse.produits);
  });
  if (lot.eos) {
    lot.eos.forEach(eo => {
      produits.push(...eo.produits);
    });
  }
  return produits;
}

function getFroidProductsCount(lot: Lot): number {
  return getAllProduitsFromLot(lot).filter(p => p.isFroid).length;
}

function getStupProductsCount(lot: Lot): number {
  return getAllProduitsFromLot(lot).filter(p => p.isStup).length;
}

function getExpensiveProductsCount(lot: Lot): number {
  return getAllProduitsFromLot(lot).filter(p => p.prixPharmacien >= 200).length;
}

function getErrorProductsCount(lot: Lot): number {
  return getAllProduitsFromLot(lot).filter(p => p.hasValidationError).length;
}

function getMissingProductsCount(lot: Lot): number {
  return getAllProduitsFromLot(lot).filter(p => {
    const quantiteALivrer = p.quantiteAttendue - p.quantiteLivree;
    return quantiteALivrer > 0;
  }).length;
}

// Helper pour formater le canal en code court
function formatCanal(canal?: string): string {
  if (!canal) return '—';
  switch (canal.toLowerCase()) {
    case 'téléphone':
    case 'telephone':
      return 'TEL';
    case 'edi':
      return 'PML';
    case 'web':
      return 'MAN';
    default:
      return canal.toUpperCase();
  }
}

// Helpers pour compter les produits par type dans une livraison
function getExpensiveProductsCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    count += getExpensiveProductsCount(lot);
  });
  return count;
}

function getPromisProductsCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    if (lot.type === "promis") {
      count += getAllProduitsFromLot(lot).length;
    }
  });
  return count;
}

function getFroidProductsCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    count += getFroidProductsCount(lot);
  });
  return count;
}

function getStupProductsCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    count += getStupProductsCount(lot);
  });
  return count;
}

function getNonRemboursésProductsCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    count += getAllProduitsFromLot(lot).filter(p => p.isNonRemboursé).length;
  });
  return count;
}

function getTelephoneProductsCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    count += getAllProduitsFromLot(lot).filter(p => p.canal === "Téléphone").length;
  });
  return count;
}

function getCompletageProductsCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    if (lot.type === "completage") {
      count += getAllProduitsFromLot(lot).length;
    }
  });
  return count;
}

function getAvoirEnCoursProductsCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    count += getAllProduitsFromLot(lot).filter(p => p.hasAvoirEnCours).length;
  });
  return count;
}

function getQuantitiesRectifiedCountFromLivraison(livraison: Livraison): number {
  let count = 0;
  livraison.lots.forEach(lot => {
    count += getAllProduitsFromLot(lot).filter(p => {
      // Un produit a une facture rectifiée si la quantité livrée ou facturée diffère de la quantité attendue
      // mais qu'il n'y a ni erreur ni avoir en cours
      return (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) && !p.hasValidationError && !p.hasAvoirEnCours;
    }).length;
  });
  return count;
}

// --- Fonctions de détection d'erreurs (remontée automatique) ---
function hasProductError(produit: Produit): boolean {
  return produit.hasValidationError === true;
}

function hasProductAvoir(produit: Produit): boolean {
  return produit.hasAvoirEnCours === true;
}

function hasCaisseError(caisse: Caisse): boolean {
  return caisse.produits.some(p => hasProductError(p));
}

function hasCaisseAvoir(caisse: Caisse): boolean {
  return caisse.produits.some(p => hasProductAvoir(p));
}

function hasEOError(eo: EO): boolean {
  return eo.produits.some(p => hasProductError(p));
}

function hasEOAvoir(eo: EO): boolean {
  return eo.produits.some(p => hasProductAvoir(p));
}

function hasLotError(lot: Lot): boolean {
  const caisseErrors = lot.caisses.some(c => hasCaisseError(c));
  const eoErrors = lot.eos ? lot.eos.some(e => hasEOError(e)) : false;
  return caisseErrors || eoErrors;
}

function hasLivraisonError(livraison: Livraison): boolean {
  return livraison.lots.some(l => hasLotError(l));
}

function getCaisseErrorCount(caisse: Caisse): number {
  return caisse.produits.filter(p => hasProductError(p)).length;
}

function getEOErrorCount(eo: EO): number {
  return eo.produits.filter(p => hasProductError(p)).length;
}

function getLotErrorCount(lot: Lot): number {
  const caisseErrors = lot.caisses.reduce((sum, c) => sum + getCaisseErrorCount(c), 0);
  const eoErrors = lot.eos ? lot.eos.reduce((sum, e) => sum + getEOErrorCount(e), 0) : 0;
  return caisseErrors + eoErrors;
}

function getLivraisonErrorCount(livraison: Livraison): number {
  return livraison.lots.reduce((sum, l) => sum + getLotErrorCount(l), 0);
}

function getDateErrorCount(livraisons: Livraison[]): number {
  return livraisons.reduce((sum, liv) => sum + getLivraisonErrorCount(liv), 0);
}

function hasDateError(livraisons: Livraison[]): boolean {
  return livraisons.some(liv => hasLivraisonError(liv));
}

// Statut d'une caisse basé sur les erreurs système
const getCaisseStatus = (caisse: Caisse) => {
  const hasError = hasCaisseError(caisse);
  const hasAvoir = hasCaisseAvoir(caisse);
  const hasQtyRectified = caisse.produits.some(p => 
    (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) && !p.hasValidationError && !p.hasAvoirEnCours
  );
  
  if (hasError) {
    return {
      label: "Écart",
      color: "#cf1322",
      bg: "#fff1f0",
    };
  }
  
  if (hasAvoir) {
    return {
      label: "Avoir en cours",
      color: "#ffffff",
      bg: "#006B7D",
    };
  }
  
  if (hasQtyRectified) {
    return {
      label: "Facture rectifiée",
      color: "#000000",
      bg: "#ffffff",
    };
  }
  
  return { label: "Aucun écart", color: "#2e7d32", bg: "#e8f5e9" };
};

// Statut d'un EO basé sur les erreurs système
const getEOStatus = (eo: EO) => {
  const hasError = hasEOError(eo);
  const hasAvoir = hasEOAvoir(eo);
  const hasQtyRectified = eo.produits.some(p => 
    (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) && !p.hasValidationError && !p.hasAvoirEnCours
  );
  
  if (hasError) {
    return {
      label: "Écart",
      color: "#cf1322",
      bg: "#fff1f0",
    };
  }
  
  if (hasAvoir) {
    return {
      label: "Avoir en cours",
      color: "#ffffff",
      bg: "#006B7D",
    };
  }
  
  if (hasQtyRectified) {
    return {
      label: "Facture rectifiée",
      color: "#000000",
      bg: "#ffffff",
    };
  }
  
  return { label: "Aucun écart", color: "#2e7d32", bg: "#e8f5e9" };
};

function getAllProduitsFromLivraison(livraison: Livraison): Produit[] {
  const produits: Produit[] = [];
  livraison.lots.forEach(lot => {
    lot.caisses.forEach(caisse => {
      produits.push(...caisse.produits);
    });
    if (lot.eos) {
      lot.eos.forEach(eo => {
        produits.push(...eo.produits);
      });
    }
  });
  return produits;
}

function getTotalCaisses(livraison: Livraison): number {
  return livraison.lots.reduce((sum, l) => sum + l.caisses.length, 0);
}

function getCaisseEOCount(caisse: Caisse): number {
  return caisse.produits.reduce((s, p) => s + p.quantiteLivree, 0);
}

function getEOCount(eo: EO): number {
  return eo.produits.reduce((s, p) => s + p.quantiteLivree, 0);
}

// --- Lot overview card ---
function LotOverviewCard({ lot, onClick, isSelected }: { lot: Lot; onClick?: () => void; isSelected?: boolean }) {
  const config = lotConfig[lot.type];
  const eoCount = getLotEOCount(lot);
  const hasError = hasLotError(lot);
  const errorCount = getLotErrorCount(lot);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Lot ${config.label} - ${lot.caisses.length} caisses${eoCount > 0 ? `, ${eoCount} Emballages d'origine` : ''}`}
      className="flex-1 min-w-[220px] rounded-[12px] border bg-white overflow-hidden cursor-pointer transition-all"
      style={{
        borderColor: isSelected ? config.color : config.borderColor,
        boxShadow: isSelected ? `0 0 0 2px ${config.color}33` : "none",
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="h-[4px]" style={{ backgroundColor: config.color }} />
      <div className="px-[20px] py-[18px]">
        <div className="flex items-center gap-[12px]">
          <div
            className="flex items-center justify-center w-[44px] h-[44px] rounded-[10px]"
            style={{ backgroundColor: config.bg }}
          >
            {config.icon}
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between gap-[8px]">
              <span className="text-[16px] font-['Roboto',sans-serif] text-[#343a40]" style={{ fontWeight: 700 }}>
                {config.label.toLowerCase() === "frigo" 
                  ? "Froid" 
                  : config.label.toLowerCase() === "normale" 
                    ? "OCP" 
                    : config.label}
              </span>
              {hasError ? (
                <span className="text-[9px] font-bold text-[#cf1322]">Écart</span>
              ) : (
                <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", fontWeight: 700 }}>Aucun écart</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LotDetailSectionProps {
  lot: Lot;
  defaultOpen?: boolean;
  expandedCaisseId?: string | null;
  setExpandedCaisseId?: (id: string | null) => void;
  expandedLotId?: string | null;
  setExpandedLotId?: (id: string | null) => void;
  lotFilter?: 'caisse' | 'eo' | null;
  setLotFilter?: (filter: 'caisse' | 'eo' | null) => void;
  highlightedProduitIds?: string[];
  sortConfig?: { column: string; direction: 'asc' | 'desc' } | null;
  onSort?: (column: string) => void;
  numeroBL?: string;
  setExpandedDates?: (numeroBL: string) => void;
  onPrint?: (lot: Lot, label: string) => void;
}

const PrinterIconCustom = ({ color = '#178466' }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
    <path d={svgPaths.p312dd500} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p3cf31900} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d={svgPaths.p19ecaf00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);

// Fonction pour trier les données
const sortData = <T extends Record<string, any>>(data: T[], column: string, direction: 'asc' | 'desc'): T[] => {
  return [...data].sort((a, b) => {
    let aVal = a[column];
    let bVal = b[column];
    
    // Gestion spéciale pour le tableau produits (on trie par longueur)
    if (column === 'produits' && Array.isArray(aVal) && Array.isArray(bVal)) {
      return direction === 'asc' ? aVal.length - bVal.length : bVal.length - aVal.length;
    }
    
    // Gestion des valeurs numériques
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return direction === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    // Gestion des chaînes de caractères (insensible à la casse)
    const aStr = String(aVal || '').toLowerCase();
    const bStr = String(bVal || '').toLowerCase();
    
    if (aStr < bStr) return direction === 'asc' ? -1 : 1;
    if (aStr > bStr) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

function LotDetailSection({
  lot,
  defaultOpen = false,
  expandedCaisseId: externalExpandedCaisseId,
  setExpandedCaisseId: externalSetExpandedCaisseId,
  expandedLotId: externalExpandedLotId,
  setExpandedLotId: externalSetExpandedLotId,
  lotFilter,
  setLotFilter,
  highlightedProduitIds = [],
  sortConfig,
  onSort,
  numeroBL,
  setExpandedDates,
  onPrint,
}: LotDetailSectionProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const [internalExpandedCaisseId, setInternalExpandedCaisseId] = useState<string | null>(null);
  const [isEOSectionOpen, setIsEOSectionOpen] = useState(false); // État pour déplier/replier la section EO
  const [expandedCaisses, setExpandedCaisses] = useState<Set<string>>(new Set()); // Gérer plusieurs caisses ouvertes
  const [caisseSortConfig, setCaisseSortConfig] = useState<Record<string, { column: string; direction: 'asc' | 'desc' }>>({});
  
  // Définir config avant de l'utiliser
  const config = lotConfig[lot.type];
  const eoCount = getLotEOCount(lot);
  const errorCount = getLotErrorCount(lot);
  
  // Gestionnaire d'impression
  const handlePrint = () => {
    console.log('Bouton d\'impression cliqué', { lot, label: config.label });
    if (onPrint) {
      onPrint(lot, config.label);
    }
  };
  
  const internalSortData = sortData; // Référence à la fonction globale
  
  // Use external state if provided, otherwise use internal state
  const isOpen = externalExpandedLotId !== undefined ? externalExpandedLotId === lot.id : internalIsOpen;
  const setIsOpen = (open: boolean) => {
    if (externalSetExpandedLotId) {
      externalSetExpandedLotId(open ? lot.id : null);
    } else {
      setInternalIsOpen(open);
    }
    
    // Quand on ferme le lot, replier toutes les caisses
    if (!open) {
      setExpandedCaisses(new Set());
    } else {
      // Quand on ouvre le lot et qu'il n'y a qu'une seule caisse, la déplier automatiquement
      if (lot.caisses.length === 1) {
        setExpandedCaisses(new Set([lot.caisses[0].id]));
      }
    }
  };
  
  const expandedCaisseId = externalExpandedCaisseId !== undefined ? externalExpandedCaisseId : internalExpandedCaisseId;
  const setExpandedCaisseId = externalSetExpandedCaisseId || setInternalExpandedCaisseId;
  
  // Auto-open lot if it contains the expanded caisse
  useEffect(() => {
    if (expandedCaisseId && lot.caisses.some(c => c.id === expandedCaisseId)) {
      setIsOpen(true);
    }
  }, [expandedCaisseId, lot.caisses]);

  // Auto-expand single caisse when lot is opened
  useEffect(() => {
    if (isOpen && lot.caisses.length === 1 && expandedCaisses.size === 0) {
      setExpandedCaisses(new Set([lot.caisses[0].id]));
    }
  }, [isOpen, lot.caisses]);

  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] overflow-hidden">
      <div
        aria-label={`${isOpen ? 'Réduire' : 'Développer'} le lot ${config.label}`}
        className="w-full flex items-center px-[24px] py-[14px] hover:bg-[#fafafa] transition-colors"
        style={
          config.label.toLowerCase() === "complétage" 
            ? { 
                backgroundColor: 'rgba(29, 77, 89, 0.5)'
              } 
            : undefined
        }
      >
        <div className="flex items-center w-[340px] flex-shrink-0">
          <div
            className="flex items-center justify-center w-[38px] h-[38px] rounded-[10px] shrink-0"
            style={{ backgroundColor: "#ffffff" }}
          >
            {config.icon}
          </div>
          <span className={`text-[15px] font-['Roboto',sans-serif] ml-[16px] ${config.label.toLowerCase() === "complétage" ? "text-[#ffffff]" : "text-[#343a40]"}`} style={{ fontWeight: 700 }}>
            {config.label.toLowerCase() === "frigo" || config.label.toLowerCase() === "froid"
              ? "OCP - FROID" 
              : config.label.toLowerCase() === "normale" 
                ? "OCP" 
                : config.label.toLowerCase() === "automate"
                  ? "OCP - AUTOM"
                  : config.label.toLowerCase() === "promis"
                    ? "OCP - PROMI"
                    : config.label.toLowerCase() === "dépannage"
                      ? "OCP - DEPAN"
                      : config.label.toLowerCase() === "chronique"
                        ? "OCP - CHRON"
                        : config.label.toLowerCase() === "virtuose"
                          ? "VIRTUOSE - CDT ZENTIVA"
                          : config.label.toLowerCase() === "complétage"
                            ? "COMPLETAGE"
                            : config.label}
          </span>
        </div>

        <div className="flex items-center gap-[12px] w-[570px] flex-shrink-0">
          {lot.caisses.length > 0 && config.label.toLowerCase() !== "complétage" && (
            <div 
              className="flex items-center gap-[6px] cursor-pointer transition-opacity hover:opacity-70"
              onClick={(e) => {
                e.stopPropagation();
                if (setLotFilter) {
                  const newFilter = lotFilter === 'caisse' ? null : 'caisse';
                  setLotFilter(newFilter);
                  if (newFilter && lot.caisses.length > 0) {
                    if (numeroBL && setExpandedDates) {
                      setExpandedDates(numeroBL);
                    }
                    if (externalSetExpandedLotId) {
                      externalSetExpandedLotId(lot.id);
                    }
                  }
                }
              }}
            >
              <span 
                className={`text-[18px] flex items-center justify-center w-[36px] h-[36px] rounded-full border-2 ${config.label.toLowerCase() === "complétage" ? "text-[#ffffff] border-[#ffffff]" : "text-[#000000] border-[#000000]"}`}
                style={{ fontWeight: 700 }}
              >
                {lot.caisses.length}
              </span>
              <span className={`text-[14px] ${config.label.toLowerCase() === "complétage" ? "text-[#ffffff]" : "text-[#000000]"}`} style={{ fontWeight: 600 }}>
                Caisse{lot.caisses.length > 1 ? "s" : ""}
              </span>
            </div>
          )}
          {lot.caisses.length > 0 && eoCount > 0 && (
            <div className="w-[1px] h-[24px] bg-[#178466]"></div>
          )}
          {eoCount > 0 && (
            <div 
              className="flex items-center gap-[6px] cursor-pointer transition-opacity hover:opacity-70"
              onClick={(e) => {
                e.stopPropagation();
                if (setLotFilter) {
                  const newFilter = lotFilter === 'eo' ? null : 'eo';
                  setLotFilter(newFilter);
                  if (newFilter && eoCount > 0) {
                    if (numeroBL && setExpandedDates) {
                      setExpandedDates(numeroBL);
                    }
                    if (externalSetExpandedLotId) {
                      externalSetExpandedLotId(lot.id);
                    }
                  }
                }
              }}
            >
              <span 
                className={`text-[18px] flex items-center justify-center w-[36px] h-[36px] rounded-full border-2 ${config.label.toLowerCase() === "complétage" ? "text-[#ffffff] border-[#ffffff]" : "text-[#000000] border-[#000000]"}`}
                style={{ fontWeight: 700 }}
              >
                {eoCount}
              </span>
              <span className={`text-[14px] ${config.label.toLowerCase() === "complétage" ? "text-[#ffffff]" : "text-[#000000]"}`} style={{ fontWeight: 600 }}>
                Emballage{eoCount > 1 ? "s" : ""} d'origine
              </span>
            </div>
          )}
        </div>

        <div className="w-[40px] flex items-center justify-center flex-shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrint();
            }}
            className="cursor-pointer hover:opacity-70 transition-opacity p-1 flex items-center justify-center"
            aria-label={`Imprimer le lot ${config.label}`}
          >
            <PrinterIconCustom color={config.label.toLowerCase() === "complétage" ? '#ffffff' : '#178466'} />
          </button>
        </div>

        <div className="flex items-center gap-[16px] flex-shrink-0 ml-auto">
          {config.label.toLowerCase() !== "complétage" && (() => {
            const avoirCount = lot.caisses.reduce((count, caisse) => {
              return count + caisse.produits.filter(p => p.hasAvoirEnCours && !p.hasValidationError).length;
            }, 0) + (lot.eos?.reduce((count, eo) => {
              return count + eo.produits.filter(p => p.hasAvoirEnCours && !p.hasValidationError).length;
            }, 0) || 0);
            
            const rectifiedCount = lot.caisses.reduce((count, caisse) => {
              return count + caisse.produits.filter(p => 
                (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) && !p.hasValidationError && !p.hasAvoirEnCours
              ).length;
            }, 0) + (lot.eos?.reduce((count, eo) => {
              return count + eo.produits.filter(p => 
                (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) && !p.hasValidationError && !p.hasAvoirEnCours
              ).length;
            }, 0) || 0);
            
            if (hasLotError(lot)) {
              return <span className="px-[6px] py-[2px] rounded-full inline-block text-[11px]" style={{ backgroundColor: '#ffebee', color: '#cf1322', fontWeight: 700 }}>{errorCount} Écart{errorCount > 1 ? 's' : ''} à traiter</span>;
            } else if (avoirCount > 0) {
              return <span className="px-[6px] py-[2px] rounded-full inline-block text-[11px]" style={{ backgroundColor: '#006B7D', color: '#ffffff', fontWeight: 700 }}>{avoirCount} Avoir{avoirCount > 1 ? 's' : ''} en cours</span>;
            } else if (rectifiedCount > 0) {
              return <span className="px-[6px] py-[2px] rounded-full inline-block text-[11px] border border-black" style={{ backgroundColor: '#ffffff', color: '#000000', fontWeight: 700 }}>{rectifiedCount} Facture{rectifiedCount > 1 ? 's' : ''} rectifiée{rectifiedCount > 1 ? 's' : ''}</span>;
            } else {
              return <span className="px-[6px] py-[2px] rounded-full inline-block text-[11px]" style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', fontWeight: 700 }}>Aucun écart</span>;
            }
          })()}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer hover:opacity-70 transition-opacity p-1"
            aria-label={`${isOpen ? 'Réduire' : 'Développer'} le lot ${config.label}`}
          >
            {isOpen ? <ChevronUp className="w-[18px] h-[18px]" style={{ color: config.label.toLowerCase() === "complétage" ? '#ffffff' : '#9e9e9e' }} /> : <ChevronDown className="w-[18px] h-[18px]" style={{ color: config.label.toLowerCase() === "complétage" ? '#ffffff' : '#9e9e9e' }} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[#e0e0e0]">
          {config.label.toLowerCase() === "complétage" ? (
            // Pour le lot Complétage : afficher directement tous les produits sans header
            <div className="overflow-x-auto">
              <table className="w-full text-[11px] table-fixed" style={{ minWidth: '1100px' }}>
                <colgroup>
                  <col style={{ width: '85px' }} />
                  <col style={{ width: '45px' }} />
                  <col style={{ width: '85px' }} />
                  <col style={{ width: 'auto' }} />
                  <col style={{ width: '60px' }} />
                  <col style={{ width: '35px' }} />
                  <col style={{ width: '60px' }} />
                  <col style={{ width: '60px' }} />
                  <col style={{ width: '60px' }} />
                  <col style={{ width: '75px' }} />
                  <col style={{ width: '90px' }} />
                  <col style={{ width: '70px' }} />
                  <col style={{ width: '85px' }} />
                  <col style={{ width: '65px' }} />
                </colgroup>
                <thead>
                  <tr className="bg-[#f0f2f4]">
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-left" style={{ fontWeight: 600 }}>
                      <div className="flex items-center gap-0.5">
                        Ref. Cde
                        <button onClick={() => onSort?.('refCommandeClient')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par référence commande">
                          {sortConfig?.column === 'refCommandeClient' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                      <div className="flex items-center justify-center gap-0.5">
                        Canal
                        <button onClick={() => onSort?.('canal')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par canal">
                          {sortConfig?.column === 'canal' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-left" style={{ fontWeight: 600 }}>
                      <div className="flex items-center gap-0.5">
                        Code produit
                        <button onClick={() => onSort?.('cip')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par code produit">
                          {sortConfig?.column === 'cip' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-left" style={{ fontWeight: 600 }}>
                      <div className="flex items-center gap-0.5">
                        Produit
                        <button onClick={() => onSort?.('designation')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par libellé produit">
                          {sortConfig?.column === 'designation' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Sép.</th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Type</th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                      <div className="flex items-center justify-center gap-0.5">
                        Qté att.
                        <button onClick={() => onSort?.('quantiteAttendue')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par quantité attendue">
                          {sortConfig?.column === 'quantiteAttendue' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                      <div className="flex items-center justify-center gap-0.5">
                        Qté liv.
                        <button onClick={() => onSort?.('quantiteLivree')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par quantité livrée">
                          {sortConfig?.column === 'quantiteLivree' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                      <div className="flex items-center justify-center gap-0.5">
                        Qté fact.
                        <button onClick={() => onSort?.('quantiteFacturee')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par quantité facturée">
                          {sortConfig?.column === 'quantiteFacturee' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-right" style={{ fontWeight: 600 }}>
                      <div className="flex items-center justify-end gap-0.5">
                        PU HT
                        <button onClick={() => onSort?.('prixPharmacien')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par prix unitaire HT">
                          {sortConfig?.column === 'prixPharmacien' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-right" style={{ fontWeight: 600 }}>
                      <div className="flex items-center justify-end gap-0.5">
                        PU att.
                        <button onClick={() => onSort?.('prixUnitaireAttendu')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par prix unitaire attendu">
                          {sortConfig?.column === 'prixUnitaireAttendu' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                      <div className="flex items-center justify-center gap-0.5">
                        Qté à liv.
                        <button onClick={() => onSort?.('quantiteALivrer')} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par quantité à livrer">
                          {sortConfig?.column === 'quantiteALivrer' ? (sortConfig.direction === 'asc' ? <ArrowUp className="w-[10px] h-[10px]" /> : <ArrowDown className="w-[10px] h-[10px]" />) : <ArrowUpDown className="w-[10px] h-[10px]" />}
                        </button>
                      </div>
                    </th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Date</th>
                    <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center pr-[12px]" style={{ fontWeight: 600 }}>Heure</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    // Collecter tous les produits (caisses + EO)
                    const allProducts = [
                      ...lot.caisses.flatMap((caisse) => caisse.produits),
                      ...(lot.eos?.flatMap((eo) => eo.produits) || [])
                    ];
                    
                    // Appliquer le tri
                    const sortedProducts = sortConfig?.column 
                      ? sortData(allProducts, sortConfig.column, sortConfig.direction)
                      : sortData(allProducts, 'numeroOrdre', 'asc');
                    
                    return sortedProducts.map((p) => {
                      const isHighlighted = highlightedProduitIds.includes(p.id);
                      // Calculer les données spécifiques au complétage
                      const quantiteALivrer = p.quantiteAttendue - p.quantiteLivree;
                      // Générer une date à venir (par exemple, demain ou après-demain)
                      const dateFuture = new Date();
                      dateFuture.setDate(dateFuture.getDate() + Math.floor(Math.random() * 3) + 1); // Entre 1 et 3 jours
                      const dateLivraison = dateFuture.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
                      // Générer une heure aléatoire entre 8h et 18h
                      const heureAleatoire = 8 + Math.floor(Math.random() * 10); // Entre 8 et 17
                      const minuteAleatoire = Math.floor(Math.random() * 60);
                      const heureLivraison = `${heureAleatoire.toString().padStart(2, '0')}:${minuteAleatoire.toString().padStart(2, '0')}`;
                      
                      return (
                        <tr key={p.id} className="border-t border-[#e0e0e0] hover:bg-[#fafafa]" style={{ backgroundColor: isHighlighted ? '#e8f5e9' : 'transparent' }}>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] pl-[12px] px-[4px] py-[6px] font-mono text-left whitespace-nowrap">{p.refCommandeClient}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] px-[4px] py-[6px] text-center">{formatCanal(p.canal)}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] px-[4px] py-[6px] font-mono text-left">{p.cip}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] px-[4px] py-[6px] max-w-[200px] truncate text-left" style={{ fontWeight: 500 }} title={p.designation}>{p.designation}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] px-[4px] py-[6px] text-center">{p.separateur || '—'}</td>
                          <td className="px-[4px] py-[6px]">
                            <div className="flex items-center justify-center gap-1">
                              {p.isFroid && (
                                <div className="flex items-center justify-center w-5 h-5 rounded-[4px] bg-blue-50 border border-blue-200 cursor-pointer" title="Froid">
                                  <Snowflake className="w-2.5 h-2.5 text-blue-600" />
                                </div>
                              )}
                              {p.isStup && (
                                <div className="flex items-center justify-center w-5 h-5 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Stupéfiant">
                                  S
                                </div>
                              )}
                              {p.isNonRemboursé && (
                                <div className="flex items-center justify-center px-1 h-5 rounded-[4px] bg-white border border-black text-[8px] text-black font-bold cursor-pointer" title="Non remboursé">
                                  NR
                                </div>
                              )}
                              {p.prixPharmacien >= 50 && (
                                <div className="flex items-center justify-center w-5 h-5 rounded-[4px] bg-white border border-black text-[10px] text-black font-bold cursor-pointer" title="Produit cher">
                                  €
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="text-[11px] font-['Roboto',sans-serif] px-[4px] py-[6px] text-center" style={{
                            fontWeight: (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteAttendue !== p.quantiteLivree) ? 700 : 'normal',
                            color: (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteAttendue !== p.quantiteLivree) ? '#000000' : '#000000'
                          }}>{p.quantiteAttendue}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] px-[4px] py-[6px] text-center" style={{
                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : 'normal',
                            color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : '#000000'
                          }}>{p.quantiteLivree}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] px-[4px] py-[6px] text-center" style={{
                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : 'normal',
                            color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : '#000000'
                          }}>{p.quantiteFacturee}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#000000] px-[4px] py-[6px] text-right whitespace-nowrap pr-[8px]">{p.prixPharmacien?.toFixed(2) || '—'} €</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] px-[4px] py-[6px] text-right whitespace-nowrap pr-[8px]" style={{
                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : 'normal',
                            color: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#000000' : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : '#000000'
                          }}>{p.prixUnitaireAttendu?.toFixed(2) || '—'} €</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] px-[4px] py-[6px] text-center">{quantiteALivrer}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] px-[4px] py-[6px] text-center">{dateLivraison}</td>
                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] px-[4px] py-[6px] text-center pr-[12px]">{heureLivraison}</td>
                        </tr>
                      );
                    });
                  })()}
                </tbody>
              </table>
            </div>
          ) : (
            <>
          {/* Section Caisses */}
          {(!lotFilter || lotFilter === 'caisse') && (
          <Table>
            <TableBody>
              {(() => {
                // Appliquer le tri aux caisses
                const sortedCaisses = sortConfig?.column 
                  ? sortData(lot.caisses, sortConfig.column, sortConfig.direction)
                  : lot.caisses;
                
                return sortedCaisses.flatMap((caisse, idx) => {
                const eo = getCaisseEOCount(caisse);
                const isExpanded = expandedCaisses.has(caisse.id) || expandedCaisseId === caisse.id;
                const statusInfo = getCaisseStatus(caisse);
                
                const rows = [
                  <TableRow
                    key={caisse.id}
                    id={`caisse-${caisse.id}`}
                    className="transition-colors"
                    style={{ backgroundColor: '#e8f5e9' }}
                  >
                    <TableCell className="text-[12px] font-['Roboto',sans-serif] text-[#343a40] pl-[12px]" style={{ fontWeight: 500 }}>
                      <div className="flex items-center gap-[8px]">
                        <div className="size-[12px] text-[#2e7d32]">
                          <Vector />
                        </div>
                        <span className="whitespace-nowrap">N° CAISSE: {caisse.numeroCaisse}</span>
                        <span className="ml-[28px] whitespace-nowrap">N° TICKET ADRESSE: {caisse.numeroTicketAdresse || 'N/A'}</span>
                        <span className="ml-[36px] whitespace-nowrap">N° d'ordre: {caisse.numeroBL || 'N/A'}</span>
                      </div>
                    </TableCell>
                    <TableCell className="pr-[12px]">
                      <div className="flex items-center justify-end gap-[8px]">
                        <span
                          className={`px-[6px] py-[2px] rounded-full inline-block text-[10px] whitespace-nowrap ${statusInfo.bg === '#ffffff' ? 'border border-black' : ''}`}
                          style={{ backgroundColor: statusInfo.bg, color: statusInfo.color, fontWeight: 700 }}
                        >
                          {statusInfo.label === "Écart" 
                            ? `${getCaisseErrorCount(caisse)} Écart${getCaisseErrorCount(caisse) > 1 ? 's' : ''} à traiter` 
                            : statusInfo.label}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const newSet = new Set(expandedCaisses);
                            if (isExpanded) {
                              newSet.delete(caisse.id);
                            } else {
                              newSet.add(caisse.id);
                            }
                            setExpandedCaisses(newSet);
                            setExpandedCaisseId(isExpanded ? null : caisse.id);
                          }}
                          className="cursor-pointer hover:opacity-70 transition-opacity p-1 flex-shrink-0"
                          aria-label={`${isExpanded ? 'Réduire' : 'Développer'} la caisse ${caisse.numeroCaisse}`}
                        >
                          {isExpanded ? <ChevronUp className="w-[14px] h-[14px] text-[#9e9e9e]" /> : <ChevronDown className="w-[14px] h-[14px] text-[#9e9e9e]" />}
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>,
                ];
                if (isExpanded) {
                  rows.push(
                    <TableRow key={`${caisse.id}-detail`}>
                      <TableCell colSpan={4} className="p-0">
                        <div className="bg-[#fafbfc] border-t border-b border-[#e8e8e8] overflow-x-auto">
                          <div>
                            <table className="w-full text-[11px] table-fixed" style={{ minWidth: '1100px' }}>
                              <colgroup>
                                <col style={{ width: '85px' }} />
                                <col style={{ width: '45px' }} />
                                <col style={{ width: '85px' }} />
                                <col style={{ width: 'auto' }} />
                                <col style={{ width: '60px' }} />
                                <col style={{ width: '35px' }} />
                                <col style={{ width: '60px' }} />
                                <col style={{ width: '60px' }} />
                                <col style={{ width: '60px' }} />
                                <col style={{ width: '75px' }} />
                                <col style={{ width: '90px' }} />
                                <col style={{ width: '90px' }} />
                                <col style={{ width: '125px' }} />
                              </colgroup>
                              <thead>
                                <tr className="bg-[#f0f2f4]">
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] pl-[12px] px-[10px] py-[8px] text-left" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center gap-0.5">
                                      Ref. Cde
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'refCommandeClient' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'refCommandeClient', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par référence commande">
                                        {caisseSortConfig[caisse.id]?.column === 'refCommandeClient' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center justify-center gap-0.5">
                                      Canal
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'canal' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'canal', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par canal">
                                        {caisseSortConfig[caisse.id]?.column === 'canal' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-left" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center gap-0.5">
                                      Code produit
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'cip' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'cip', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par code produit">
                                        {caisseSortConfig[caisse.id]?.column === 'cip' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-left" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center gap-0.5">
                                      Produit
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'designation' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'designation', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par libellé produit">
                                        {caisseSortConfig[caisse.id]?.column === 'designation' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>Séparateur</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[1px] py-[8px] text-center" style={{ fontWeight: 600, width: '30px', minWidth: '30px', maxWidth: '30px' }}>Type</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center justify-center gap-0.5">
                                      Qté attendue
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'quantiteAttendue' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'quantiteAttendue', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par quantité attendue">
                                        {caisseSortConfig[caisse.id]?.column === 'quantiteAttendue' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center justify-center gap-0.5">
                                      Qté livrée
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'quantiteLivree' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'quantiteLivree', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par quantité livrée">
                                        {caisseSortConfig[caisse.id]?.column === 'quantiteLivree' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center justify-center gap-0.5">
                                      Qté facturée
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'quantiteFacturee' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'quantiteFacturee', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par quantité facturée">
                                        {caisseSortConfig[caisse.id]?.column === 'quantiteFacturee' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-right" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center justify-end gap-0.5">
                                      PU HT
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'prixPharmacien' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'prixPharmacien', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par prix unitaire HT">
                                        {caisseSortConfig[caisse.id]?.column === 'prixPharmacien' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-right" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center justify-end gap-0.5">
                                      PU attendu
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'prixUnitaireAttendu' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'prixUnitaireAttendu', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par prix unitaire attendu">
                                        {caisseSortConfig[caisse.id]?.column === 'prixUnitaireAttendu' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-right" style={{ fontWeight: 600 }}>
                                    <div className="flex items-center justify-end gap-0.5">
                                      PU facturé
                                      <button onClick={() => {
                                        setCaisseSortConfig(prev => {
                                          const currentSort = prev[caisse.id];
                                          const newDirection = currentSort?.column === 'prixUnitaireFacture' && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                          return { ...prev, [caisse.id]: { column: 'prixUnitaireFacture', direction: newDirection } };
                                        });
                                      }} className="cursor-pointer hover:opacity-70 transition-opacity" aria-label="Trier par prix unitaire facturé">
                                        {caisseSortConfig[caisse.id]?.column === 'prixUnitaireFacture' ? (caisseSortConfig[caisse.id].direction === 'asc' ? <ArrowUp className="w-[11px] h-[11px]" /> : <ArrowDown className="w-[11px] h-[11px]" />) : <ArrowUpDown className="w-[11px] h-[11px]" />}
                                      </button>
                                    </div>
                                  </th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center pr-[12px]" style={{ fontWeight: 600 }}>Contrôle</th>
                                </tr>
                              </thead>
                              <tbody>
                                {(() => {
                                  const caisseSort = caisseSortConfig[caisse.id];
                                  const sortedProducts = caisseSort 
                                    ? sortData(caisse.produits, caisseSort.column, caisseSort.direction)
                                    : sortData(caisse.produits, 'numeroOrdre', 'asc');
                                  
                                  return sortedProducts.map((p) => {
                                  const isHighlighted = highlightedProduitIds.includes(p.id);
                                  return (
                                  <tr key={p.id} className="border-t border-[#eee] hover:bg-[#f5f7f6]" style={{ backgroundColor: isHighlighted ? '#e8f5e9' : undefined }}>
                                    <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] pl-[12px] py-[7px] font-mono text-left whitespace-nowrap">{p.refCommandeClient}</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{formatCanal(p.canal)}</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] font-mono text-left">{p.cip}</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-left" style={{ fontWeight: 500 }}>{p.designation}</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{p.separateur || '—'}</td>
                                    <td className="py-[7px] px-[1px] w-[30px] max-w-[30px]">
                                      <div className="flex flex-col items-center justify-center gap-0.5">
                                        {p.isFroid && (
                                          <div className="flex items-center justify-center w-4 h-4 rounded-[3px] bg-blue-50 border border-blue-200 cursor-pointer" title="Froid">
                                            <Snowflake className="w-2 h-2 text-blue-600" />
                                          </div>
                                        )}
                                        {p.isStup && (
                                          <div className="flex items-center justify-center w-4 h-4 rounded-[3px] bg-white border border-black text-[7px] text-black font-bold cursor-pointer" title="Stupéfiant">
                                            S
                                          </div>
                                        )}
                                        {p.isNonRemboursé && (
                                          <div className="flex items-center justify-center px-0.5 h-4 rounded-[3px] bg-white border border-black text-[7px] text-black font-bold cursor-pointer" title="Non remboursé">
                                            NR
                                          </div>
                                        )}
                                        {p.prixPharmacien >= 50 && (
                                          <div className="flex items-center justify-center w-4 h-4 rounded-[3px] bg-white border border-black text-[7px] text-black font-bold cursor-pointer" title="Produit cher">
                                            €
                                          </div>
                                        )}
                                        {!p.isFroid && !p.isStup && !p.isNonRemboursé && p.prixPharmacien < 50 && <span className="text-[9px] text-[#9e9e9e]">—</span>}
                                      </div>
                                    </td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{
                                      fontWeight: 600,
                                      color: '#000000'
                                    }}>{p.quantiteAttendue}</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{
                                      fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : 600,
                                      color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : '#000000'
                                    }}>{p.quantiteLivree}</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{
                                      fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (p.errorInClientFavor ? 700 : 600),
                                      color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : (p.errorInClientFavor ? '#2e7d32' : '#000000')
                                    }}>{p.quantiteFacturee}</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-right pr-[8px]" style={{ fontWeight: 600 }}>{p.prixPharmacien.toFixed(2)}€</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ 
                                      fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : 'normal',
                                      color: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#000000' : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : '#000000'
                                    }}>{p.prixUnitaireAttendu.toFixed(2)}€</td>
                                    <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{
                                      fontWeight: (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : (p.errorInClientFavor ? 700 : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 600 : 600),
                                      color: (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : (p.errorInClientFavor ? '#2e7d32' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#000000' : '#343a40')
                                    }}>{p.prixUnitaireFacture.toFixed(2)}€</td>
                                    <td className="py-[7px] pr-[12px]">
                                      <div className="flex items-center justify-center gap-[8px]">
                                        {p.hasValidationError ? (
                                          <button 
                                            aria-label={`Signaler un écart pour ${p.designation}`}
                                            className="px-[8px] py-[4px] rounded-[6px] text-[9px] font-medium text-white bg-[#cf1322] hover:bg-[#a61021] transition-colors"
                                          >
                                            Signaler l'écart
                                          </button>
                                        ) : p.hasAvoirEnCours ? (
                                          <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#006B7D", color: "#ffffff", fontWeight: 700 }}>Avoir en cours</span>
                                                                                ) : (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) ? (
                                          <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap border border-black" style={{ backgroundColor: "#ffffff", color: "#000000", fontWeight: 700 }}>Facture rectifiée</span>
                                        ) : (
                                          <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", fontWeight: 700 }}>Aucun écart</span>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                  );
                                });
                                })()}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                }
                return rows;
              });
              })()}
            </TableBody>
          </Table>
          )}

          {/* Section EO (Emballages d'Origine) */}
          {(!lotFilter || lotFilter === 'eo') && lot.eos && lot.eos.length > 0 && (() => {
            // Calculate total number of product references in all EOs
            const totalEOProducts = lot.eos.reduce((sum, eo) => sum + eo.produits.length, 0);
            
            return (
            <div className="mt-[16px]">
              <div className="flex flex-col gap-[12px] p-[12px] bg-[#fafbfc]">
                  {(() => {
                    // Collecter tous les produits EO avec leur référence EO
                    const allEOProducts = lot.eos.flatMap((eo) =>
                      eo.produits.map((p) => ({ ...p, parentEO: eo }))
                    );
                    
                    // Appliquer le tri
                    const sortedEOProducts = sortConfig?.column 
                      ? sortData(allEOProducts, sortConfig.column, sortConfig.direction)
                      : allEOProducts;
                    
                    return sortedEOProducts.map((p) => {
                      const isHighlighted = highlightedProduitIds.includes(p.id);
                      const eo = p.parentEO;
                      
                      return (
                        <div key={p.id} className="bg-white rounded-[8px] border border-[#d0e3fc] overflow-hidden shadow-sm">
                          {/* Header EO spécifique à ce produit */}
                          <div className="bg-[#f0f6ff] px-[16px] py-[8px] border-b border-[#d0e3fc] flex items-center justify-between">
                            <div className="flex items-center gap-[12px]">
                              <div className="flex items-center gap-[6px]">
                                <Package className="w-[14px] h-[14px] text-[#006B7D]" />
                                <span className="text-[12px] font-['Roboto',sans-serif] text-[#343a40] uppercase" style={{ fontWeight: 700 }}>
                                  N° Étiquette EO: {eo.numeroEtiquette || 'N/A'}
                                </span>
                              </div>
                              <span className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] uppercase font-bold">
                                N° d'ordre: {p.numeroOrdre || 'N/A'}
                              </span>

                            </div>
                            <div className="flex items-center gap-[8px]">
                               {p.hasValidationError && (
                                 <span className="px-[6px] py-[2px] rounded-full text-[10px] font-bold bg-[#ffebee] text-[#cf1322]">À traiter</span>
                               )}
                            </div>
                          </div>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full text-[11px] table-fixed" style={{ minWidth: '1100px' }}>
                              <colgroup>
                                <col style={{ width: '85px' }} />
                                <col style={{ width: '50px' }} />
                                <col style={{ width: '105px' }} />
                                <col style={{ width: 'auto' }} />
                                <col style={{ width: '60px' }} />
                                <col style={{ width: '40px' }} />
                                <col style={{ width: '65px' }} />
                                <col style={{ width: '65px' }} />
                                <col style={{ width: '65px' }} />
                                <col style={{ width: '75px' }} />
                                <col style={{ width: '85px' }} />
                                <col style={{ width: '85px' }} />
                                <col style={{ width: '120px' }} />
                              </colgroup>
                              <thead>
                                <tr className="bg-[#f8fbff]">
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] pl-[12px] px-[10px] py-[6px] text-left" style={{ fontWeight: 600 }}>Ref. Cde</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Canal</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-left" style={{ fontWeight: 600 }}>Code produit</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-left" style={{ fontWeight: 600 }}>Produit</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Séparateur</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[1px] py-[6px] text-center" style={{ fontWeight: 600 }}>Type</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Qté attendue</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Qté livrée</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Qté facturée</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-right" style={{ fontWeight: 600 }}>PU HT</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-right" style={{ fontWeight: 600 }}>PU attendu</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-right" style={{ fontWeight: 600 }}>PU facturé</th>
                                  <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center pr-[12px]" style={{ fontWeight: 600 }}>Contrôle</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t border-[#d0e3fc] hover:bg-[#f0f6ff]" style={{ backgroundColor: isHighlighted ? '#e8f5e9' : 'transparent' }}>
                                  <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] pl-[12px] py-[7px] font-mono text-left whitespace-nowrap">{p.refCommandeClient}</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{formatCanal(p.canal)}</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] font-mono text-left">{p.cip}</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-left whitespace-nowrap" style={{ fontWeight: 500 }}>{p.designation}</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{p.separateur || '—'}</td>
                                  <td className="py-[7px]">
                                    <div className="flex items-center justify-center gap-0.5">
                                      {p.isFroid && (
                                        <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-blue-50 border border-blue-200 cursor-pointer" title="Froid">
                                          <Snowflake className="w-3 h-3 text-blue-600" />
                                        </div>
                                      )}
                                      {p.isStup && (
                                        <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Stupéfiant">
                                          S
                                        </div>
                                      )}
                                      {p.isNonRemboursé && (
                                        <div className="flex items-center justify-center px-1.5 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Non remboursé">
                                          NR
                                        </div>
                                      )}
                                      {p.prixPharmacien >= 50 && (
                                        <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Produit cher">
                                          €
                                        </div>
                                      )}
                                      {!p.isFroid && !p.isStup && !p.isNonRemboursé && p.prixPharmacien < 50 && <span className="text-[9px] text-[#9e9e9e]">—</span>}
                                    </div>
                                  </td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ 
                                    fontWeight: (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteAttendue !== p.quantiteLivree) ? 700 : 600,
                                    color: (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteAttendue !== p.quantiteLivree) ? '#000000' : '#343a40'
                                  }}>{p.quantiteAttendue}</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ 
                                    fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteLivree !== p.quantiteAttendue) ? 700 : (p.quantiteLivree !== p.quantiteAttendue ? 700 : 600),
                                    color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteLivree !== p.quantiteAttendue) ? '#000000' : (p.quantiteLivree !== p.quantiteAttendue ? '#cf1322' : '#343a40')
                                  }}>{p.quantiteLivree}</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ 
                                    fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteFacturee !== p.quantiteAttendue) ? 700 : (p.errorInClientFavor ? 700 : 600),
                                    color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteFacturee !== p.quantiteAttendue) ? '#000000' : (p.errorInClientFavor ? '#2e7d32' : '#343a40')
                                  }}>{p.quantiteFacturee}</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-right pr-[8px]" style={{ fontWeight: 600 }}>{p.prixPharmacien.toFixed(2)}€</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ 
                                    fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : 'normal',
                                    color: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#000000' : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : '#000000'
                                  }}>{p.prixUnitaireAttendu.toFixed(2)}€</td>
                                  <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ 
                                    fontWeight: (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : (p.errorInClientFavor ? 700 : 600), 
                                    color: (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : (p.errorInClientFavor ? '#2e7d32' : '#343a40')
                                  }}>{p.prixUnitaireFacture.toFixed(2)}€</td>
                                  <td className="py-[7px] pr-[12px]">
                                    <div className="flex items-center justify-center gap-[8px]">
                                      {p.hasValidationError ? (
                                        <>
                                          <button 
                                            aria-label={`Signaler un écart pour ${p.designation}`}
                                            className="px-[8px] py-[4px] rounded-[6px] text-[9px] font-medium text-white bg-[#cf1322] hover:bg-[#a61021] transition-colors"
                                          >
                                            Signaler l'écart
                                          </button>
                                        </>
                                      ) : p.hasAvoirEnCours ? (
                                        <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#006B7D", color: "#ffffff", fontWeight: 700 }}>Avoir en cours</span>
                                                                    ) : (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) ? (
                                        <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap border border-black" style={{ backgroundColor: "#ffffff", color: "#000000", fontWeight: 700 }}>Facture rectifiée</span>
                                      ) : (
                                        <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", fontWeight: 700 }}>Aucun écart</span>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
            </div>
            );
          })()}
            </>
          )}
        </div>
      )}
      
    </div>
  );
}

interface ScanCaisseSectionProps {
  livraison: Livraison;
  onNavigate?: (date: string, blNumber: string, caisseId?: string) => void;
  showSimulation?: boolean;
}

function ScanCaisseSection({
  livraison,
  onNavigate,
  showSimulation = true,
}: ScanCaisseSectionProps) {
  const [scanInput, setScanInput] = useState("");
  const [searchResults, setSearchResults] = useState<{
    livraisons: Livraison[];
    expandInfo: {
      blNumber: string;
      lotIds: string[];
      caisseIds: string[];
      produitIds: string[];
      searchType: 'produit' | 'caisse' | 'bl';
    }[];
  } | null>(null);
  const [scanError, setScanError] = useState(false);
  const [expandedSearchBL, setExpandedSearchBL] = useState<string[]>([]);
  const [expandedSearchLots, setExpandedSearchLots] = useState<string[]>([]);
  const [expandedSearchCaisses, setExpandedSearchCaisses] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<Record<string, { column: string; direction: 'asc' | 'desc' } | null>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const allCaisses: { caisse: Caisse; lotType: LotType; blNumber: string; date: string }[] = [];
  for (const bl of mockLivraisons) {
    for (const lot of bl.lots) {
      for (const caisse of lot.caisses) {
        allCaisses.push({ caisse, lotType: lot.type, blNumber: bl.numeroBL, date: bl.dateLivraison });
      }
    }
  }

  // Build allEOs list for search
  const allEOs: { eo: Caisse; lotType: LotType; blNumber: string; date: string; lotId: string }[] = [];
  for (const bl of mockLivraisons) {
    for (const lot of bl.lots) {
      if (lot.eos) {
        for (const eo of lot.eos) {
          allEOs.push({ eo, lotType: lot.type, blNumber: bl.numeroBL, date: bl.dateLivraison, lotId: lot.id });
        }
      }
    }
  }

  const handleScan = () => {
    const trimmed = scanInput.trim().toUpperCase();
    if (!trimmed) return;

    const foundLivraisons: Livraison[] = [];
    const expandInfo: {
      blNumber: string;
      lotIds: string[];
      caisseIds: string[];
      produitIds: string[];
      searchType: 'produit' | 'caisse' | 'bl';
    }[] = [];

    // 1. Check if it's a Caisse code or Numero
    const caisseMatches = allCaisses.filter(
      (c) => c.caisse.code.toUpperCase() === trimmed || 
             c.caisse.numeroCaisse.toString() === trimmed ||
             c.caisse.numeroTicketAdresse?.toUpperCase() === trimmed ||
             c.caisse.numeroBL?.toUpperCase() === trimmed
    );
    
    if (caisseMatches.length > 0) {
      caisseMatches.forEach(match => {
        const livraison = mockLivraisons.find(bl => bl.numeroBL === match.blNumber);
        if (livraison && !foundLivraisons.find(l => l.numeroBL === livraison.numeroBL)) {
          foundLivraisons.push(livraison);
        }
        
        // Find the lot containing this caisse
        const lot = livraison?.lots.find(lot => 
          lot.caisses.some(c => c.id === match.caisse.id) || 
          lot.eos?.some(eo => eo.id === match.caisse.id)
        );
        
        if (lot && !expandInfo.find(info => info.blNumber === match.blNumber)) {
          expandInfo.push({
            blNumber: match.blNumber,
            lotIds: [lot.id],
            caisseIds: [match.caisse.id],
            produitIds: [],
            searchType: 'caisse'
          });
        }
      });
    }

    // 1b. Check if it's an EO code or numeroEO
    const eoMatches = allEOs.filter(
      (e) => e.eo.code.toUpperCase() === trimmed || 
             (e.eo as any).numeroEO?.toString() === trimmed ||
             e.eo.numeroTicketAdresse?.toUpperCase() === trimmed ||
             e.eo.numeroEtiquette?.toUpperCase() === trimmed
    );
    
    if (eoMatches.length > 0) {
      eoMatches.forEach(match => {
        const livraison = mockLivraisons.find(bl => bl.numeroBL === match.blNumber);
        if (livraison && !foundLivraisons.find(l => l.numeroBL === livraison.numeroBL)) {
          foundLivraisons.push(livraison);
        }
        
        if (!expandInfo.find(info => info.blNumber === match.blNumber && info.lotIds.includes(match.lotId))) {
          expandInfo.push({
            blNumber: match.blNumber,
            lotIds: [match.lotId],
            caisseIds: [match.eo.id],
            produitIds: [],
            searchType: 'caisse'
          });
        }
      });
    }

    // 2. Check if it's a BL number or date
    const blMatches = mockLivraisons.filter((bl) => 
      bl.numeroBL.toUpperCase() === trimmed || 
      bl.dateLivraison === trimmed ||
      bl.dateLivraison.includes(trimmed)
    );
    
    if (blMatches.length > 0) {
      blMatches.forEach(bl => {
        if (!foundLivraisons.find(l => l.numeroBL === bl.numeroBL)) {
          foundLivraisons.push(bl);
        }
        
        if (!expandInfo.find(info => info.blNumber === bl.numeroBL)) {
          expandInfo.push({
            blNumber: bl.numeroBL,
            lotIds: [],
            caisseIds: [],
            produitIds: [],
            searchType: 'bl'
          });
        }
      });
    }

    // 3. Check for Product (designation or CIP)
    const productMatches: { caisse: any; lotType: LotType; blNumber: string; date: string; produit: Produit; lotId: string }[] = [];
    
    allCaisses.forEach(({ caisse, lotType, blNumber, date }) => {
      const productFound = caisse.produits.filter(
        (p: Produit) => p.designation.toUpperCase().includes(trimmed) || 
                       p.cip.toUpperCase() === trimmed ||
                       p.numeroOrdre?.toUpperCase() === trimmed
      );

      if (productFound.length > 0) {
        const livraison = mockLivraisons.find(bl => bl.numeroBL === blNumber);
        const lot = livraison?.lots.find(lot => 
          lot.caisses.some(c => c.id === caisse.id) || 
          lot.eos?.some(eo => eo.id === caisse.id)
        );
        
        productFound.forEach((p: Produit) => {
          productMatches.push({
            caisse,
            lotType,
            blNumber,
            date,
            produit: p,
            lotId: lot?.id || ''
          });
        });
      }
    });

    if (productMatches.length > 0) {
      // Group by livraison
      const livraisonMap = new Map<string, { lotIds: Set<string>; caisseIds: Set<string>; produitIds: Set<string> }>();
      
      productMatches.forEach(match => {
        const livraison = mockLivraisons.find(bl => bl.numeroBL === match.blNumber);
        if (livraison && !foundLivraisons.find(l => l.numeroBL === livraison.numeroBL)) {
          foundLivraisons.push(livraison);
        }
        
        if (!livraisonMap.has(match.blNumber)) {
          livraisonMap.set(match.blNumber, {
            lotIds: new Set(),
            caisseIds: new Set(),
            produitIds: new Set()
          });
        }
        
        const info = livraisonMap.get(match.blNumber)!;
        info.lotIds.add(match.lotId);
        info.caisseIds.add(match.caisse.id);
        info.produitIds.add(match.produit.id);
      });
      
      livraisonMap.forEach((info, blNumber) => {
        if (!expandInfo.find(e => e.blNumber === blNumber)) {
          expandInfo.push({
            blNumber,
            lotIds: Array.from(info.lotIds),
            caisseIds: Array.from(info.caisseIds),
            produitIds: Array.from(info.produitIds),
            searchType: 'produit'
          });
        }
      });
    }

    if (foundLivraisons.length > 0) {
      setSearchResults({ livraisons: foundLivraisons, expandInfo });
      
      // Auto-expand based on search type
      const blsToExpand: string[] = [];
      const lotsToExpand: string[] = [];
      const caissesToExpand: string[] = [];
      
      expandInfo.forEach(info => {
        if (info.searchType === 'produit') {
          // Pour recherche produit: déployer BL, lots ET caisses
          blsToExpand.push(info.blNumber);
          lotsToExpand.push(...info.lotIds);
          caissesToExpand.push(...info.caisseIds);
        } else if (info.searchType === 'caisse') {
          // Pour recherche caisse: déployer BL et lots seulement
          blsToExpand.push(info.blNumber);
          lotsToExpand.push(...info.lotIds);
        }
        // For 'bl' type, we don't expand anything (livraison stays collapsed)
      });
      
      setExpandedSearchBL(blsToExpand);
      setExpandedSearchLots(lotsToExpand);
      setExpandedSearchCaisses(caissesToExpand);
      setScanError(false);
    } else {
      setSearchResults(null);
      setScanError(true);
    }
  };

  const handleQuickSelect = (val: string) => {
    setScanInput(val);
    // Auto-trigger scan for simulation feel
    setTimeout(() => {
      const trimmed = val.trim().toUpperCase();
      const foundLivraisons: Livraison[] = [];
      const expandInfo: {
        blNumber: string;
        lotIds: string[];
        caisseIds: string[];
        produitIds: string[];
        searchType: 'produit' | 'caisse' | 'bl';
      }[] = [];

      // 1. Check if it's a Caisse code or Numero
      const caisseMatches = allCaisses.filter(
        (c) => c.caisse.code.toUpperCase() === trimmed || 
               c.caisse.numeroCaisse.toString() === trimmed ||
               c.caisse.numeroTicketAdresse?.toUpperCase() === trimmed ||
               c.caisse.numeroBL?.toUpperCase() === trimmed
      );
      
      if (caisseMatches.length > 0) {
        caisseMatches.forEach(match => {
          const livraison = mockLivraisons.find(bl => bl.numeroBL === match.blNumber);
          if (livraison && !foundLivraisons.find(l => l.numeroBL === livraison.numeroBL)) {
            foundLivraisons.push(livraison);
          }
          
          const lot = livraison?.lots.find(lot => 
            lot.caisses.some(c => c.id === match.caisse.id) || 
            lot.eos?.some(eo => eo.id === match.caisse.id)
          );
          
          if (lot && !expandInfo.find(info => info.blNumber === match.blNumber)) {
            expandInfo.push({
              blNumber: match.blNumber,
              lotIds: [lot.id],
              caisseIds: [match.caisse.id],
              produitIds: [],
              searchType: 'caisse'
            });
          }
        });
      }

      // 1b. Check if it's an EO code or numeroEO
      const eoMatches = allEOs.filter(
        (e) => e.eo.code.toUpperCase() === trimmed || 
               (e.eo as any).numeroEO?.toString() === trimmed ||
               e.eo.numeroTicketAdresse?.toUpperCase() === trimmed ||
               e.eo.numeroEtiquette?.toUpperCase() === trimmed
      );
      
      if (eoMatches.length > 0) {
        eoMatches.forEach(match => {
          const livraison = mockLivraisons.find(bl => bl.numeroBL === match.blNumber);
          if (livraison && !foundLivraisons.find(l => l.numeroBL === livraison.numeroBL)) {
            foundLivraisons.push(livraison);
          }
          
          if (!expandInfo.find(info => info.blNumber === match.blNumber && info.lotIds.includes(match.lotId))) {
            expandInfo.push({
              blNumber: match.blNumber,
              lotIds: [match.lotId],
              caisseIds: [match.eo.id],
              produitIds: [],
              searchType: 'caisse'
            });
          }
        });
      }

      // 2. Check if it's a BL number or date
      const blMatches = mockLivraisons.filter((bl) => 
        bl.numeroBL.toUpperCase() === trimmed || 
        bl.dateLivraison === trimmed ||
        bl.dateLivraison.includes(trimmed)
      );
      
      if (blMatches.length > 0) {
        blMatches.forEach(bl => {
          if (!foundLivraisons.find(l => l.numeroBL === bl.numeroBL)) {
            foundLivraisons.push(bl);
          }
          
          if (!expandInfo.find(info => info.blNumber === bl.numeroBL)) {
            expandInfo.push({
              blNumber: bl.numeroBL,
              lotIds: [],
              caisseIds: [],
              produitIds: [],
              searchType: 'bl'
            });
          }
        });
      }

      // 3. Check for Product (designation or CIP)
      const productMatches: { caisse: any; lotType: LotType; blNumber: string; date: string; produit: Produit; lotId: string }[] = [];
      
      allCaisses.forEach(({ caisse, lotType, blNumber, date }) => {
        const productFound = caisse.produits.filter(
          (p: Produit) => p.designation.toUpperCase().includes(trimmed) || p.cip.toUpperCase() === trimmed
        );

        if (productFound.length > 0) {
          const livraison = mockLivraisons.find(bl => bl.numeroBL === blNumber);
          const lot = livraison?.lots.find(lot => 
            lot.caisses.some(c => c.id === caisse.id) || 
            lot.eos?.some(eo => eo.id === caisse.id)
          );
          
          productFound.forEach((p: Produit) => {
            productMatches.push({
              caisse,
              lotType,
              blNumber,
              date,
              produit: p,
              lotId: lot?.id || ''
            });
          });
        }
      });

      if (productMatches.length > 0) {
        const livraisonMap = new Map<string, { lotIds: Set<string>; caisseIds: Set<string>; produitIds: Set<string> }>();
        
        productMatches.forEach(match => {
          const livraison = mockLivraisons.find(bl => bl.numeroBL === match.blNumber);
          if (livraison && !foundLivraisons.find(l => l.numeroBL === livraison.numeroBL)) {
            foundLivraisons.push(livraison);
          }
          
          if (!livraisonMap.has(match.blNumber)) {
            livraisonMap.set(match.blNumber, {
              lotIds: new Set(),
              caisseIds: new Set(),
              produitIds: new Set()
            });
          }
          
          const info = livraisonMap.get(match.blNumber)!;
          info.lotIds.add(match.lotId);
          info.caisseIds.add(match.caisse.id);
          info.produitIds.add(match.produit.id);
        });
        
        livraisonMap.forEach((info, blNumber) => {
          if (!expandInfo.find(e => e.blNumber === blNumber)) {
            expandInfo.push({
              blNumber,
              lotIds: Array.from(info.lotIds),
              caisseIds: Array.from(info.caisseIds),
              produitIds: Array.from(info.produitIds),
              searchType: 'produit'
            });
          }
        });
      }

      if (foundLivraisons.length > 0) {
        setSearchResults({ livraisons: foundLivraisons, expandInfo });
        
        const blsToExpand: string[] = [];
        const lotsToExpand: string[] = [];
        const caissesToExpand: string[] = [];
        
        expandInfo.forEach(info => {
          if (info.searchType === 'produit') {
            // Pour recherche produit: déployer BL, lots ET caisses
            blsToExpand.push(info.blNumber);
            lotsToExpand.push(...info.lotIds);
            caissesToExpand.push(...info.caisseIds);
          } else if (info.searchType === 'caisse') {
            // Pour recherche caisse: déployer BL et lots seulement
            blsToExpand.push(info.blNumber);
            lotsToExpand.push(...info.lotIds);
          }
        });
        
        setExpandedSearchBL(blsToExpand);
        setExpandedSearchLots(lotsToExpand);
        setExpandedSearchCaisses(caissesToExpand);
        setScanError(false);
      } else {
        setSearchResults(null);
        setScanError(true);
      }
    }, 10);
  };

  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] overflow-hidden">
      <div className="px-[24px] py-[18px] border-b border-[#e0e0e0] bg-[#fafbfc]">
        <div className="flex items-center gap-[12px]">
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-[#e3f2fd]">
              <ScanBarcode className="w-[20px] h-[20px] text-[#1565c0]" />
            </div>
            <span className="text-[16px] font-['Roboto',sans-serif] text-[#343a40]" style={{ fontWeight: 700 }}>Rechercher dans les livraisons du jour</span>
          </div>
          <div className="flex items-center gap-[12px] flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#9e9e9e]" />
                            <input
                ref={inputRef}
                type="text"
                value={scanInput}
                onChange={(e) => { setScanInput(e.target.value); setScanError(false); }}
                placeholder="N° ticket d’adresse/N° étiquette Emballage Origine/N° caisse/N° ordre/Code produit (CIP13,EAN,CIP7)/Libellé produit"
                onKeyDown={(e) => e.key === "Enter" && handleScan()}
                aria-label="Champ de recherche"
                className="w-full h-[42px] pl-[40px] pr-[40px] rounded-[8px] border border-[#d0d5dd] bg-white text-[11px] font-['Roboto',sans-serif] text-[#343a40] focus:outline-none focus:border-[#178466] focus:ring-[2px] focus:ring-[#178466]/20 transition-colors"
              />
              {scanInput && (
                <button
                  aria-label="Effacer la recherche"
                  onClick={() => { setScanInput(""); setSearchResults(null); }}
                  className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#9e9e9e] hover:text-[#343a40]"
                >
                  <X className="w-[14px] h-[14px]" />
                </button>
              )}
            </div>
            <button
              aria-label="Lancer la recherche"
              onClick={handleScan}
              className="h-[42px] px-[20px] rounded-[8px] text-[14px] font-['Roboto',sans-serif] text-white flex items-center gap-[8px] cursor-pointer transition-colors hover:bg-white hover:text-[#178466] border-2 border-[#178466]"
              style={{ backgroundColor: "#178466", fontWeight: 600 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#178466';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#178466';
                e.currentTarget.style.color = 'white';
              }}
            >
              <ScanBarcode className="w-[16px] h-[16px]" />
              Rechercher
            </button>
          </div>
        </div>
      </div>
      {showSimulation && (
        <div className="px-[24px] py-[20px]">
          <div className="flex items-center gap-[12px] mb-[16px] flex-wrap">
            <div className="flex items-center gap-[8px] flex-wrap">
              <span className="text-[11px] font-['Roboto',sans-serif] text-[#9e9e9e] mr-[4px]">Simulation de recherche :</span>
              <button
                aria-label="Simuler une recherche de produit"
                onClick={() => handleQuickSelect("3401597458963")}
                className="h-[26px] px-[10px] rounded-[6px] border border-[#e0e0e0] bg-white text-[11px] font-['Roboto',sans-serif] text-[#6c757d] cursor-pointer transition-all hover:shadow-sm"
              >
                Recherche produit
              </button>
              <button
                aria-label="Simuler une recherche par ticket d'adresse"
                onClick={() => handleQuickSelect("TA123546789")}
                className="h-[26px] px-[10px] rounded-[6px] border border-[#e0e0e0] bg-white text-[11px] font-['Roboto',sans-serif] text-[#6c757d] cursor-pointer transition-all hover:shadow-sm"
              >
                Ticket d'adresse
              </button>
              <button
                aria-label="Simuler une recherche par numéro de BL"
                onClick={() => handleQuickSelect("BL2026-0500-A")}
                className="h-[26px] px-[10px] rounded-[6px] border border-[#e0e0e0] bg-white text-[11px] font-['Roboto',sans-serif] text-[#6c757d] cursor-pointer transition-all hover:shadow-sm"
              >
                Numéro BL
              </button>
              <button
                aria-label="Simuler une recherche d'emballage d'origine"
                onClick={() => handleQuickSelect("EO-2026-1003")}
                className="h-[26px] px-[10px] rounded-[6px] border border-[#e0e0e0] bg-white text-[11px] font-['Roboto',sans-serif] text-[#6c757d] cursor-pointer transition-all hover:shadow-sm"
              >
                Code EO
              </button>
              <button
                aria-label="Simuler une recherche par étiquette EO"
                onClick={() => handleQuickSelect("ETQ-1001-2026")}
                className="h-[26px] px-[10px] rounded-[6px] border border-[#e0e0e0] bg-white text-[11px] font-['Roboto',sans-serif] text-[#6c757d] cursor-pointer transition-all hover:shadow-sm"
              >
                Étiquette EO
              </button>
            </div>
          </div>
          {scanError && (
          <div className="flex items-center gap-[10px] px-[16px] py-[12px] rounded-[8px] bg-[#fef2f2] border border-[#fecaca] mb-[16px]">
            <AlertCircle className="w-[16px] h-[16px] text-[#dc2626]" />
            <span className="text-[13px] font-['Roboto',sans-serif] text-[#dc2626]">Aucun r{"\u00e9"}sultat trouv{"\u00e9"} pour cette recherche.</span>
          </div>
        )}
        {searchResults && (
          <div className="flex flex-col gap-[16px] animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="text-[13px] font-semibold text-[#343a40] flex items-center gap-2">
              <Search className="w-4 h-4 text-[#178466]" />
              {searchResults.livraisons.length} résultat{searchResults.livraisons.length > 1 ? "s" : ""} trouvé{searchResults.livraisons.length > 1 ? "s" : ""}
            </div>
            {searchResults.livraisons.map((livraison) => {
              const expandInfo = searchResults.expandInfo.find(info => info.blNumber === livraison.numeroBL);
              const isExpanded = expandedSearchBL.includes(livraison.numeroBL);
              const isTodayDelivery = livraison.dateLivraison === "24/02/2026";

              // Calculer les totaux de caisses et EO
              const totalCaisses = livraison.lots.reduce((sum, lot) => sum + lot.caisses.length, 0);
              const totalEO = livraison.lots.reduce((sum, lot) => sum + (lot.eos?.length || 0), 0);

              return (
                <div
                  key={livraison.numeroBL}
                  className="rounded-[12px] overflow-hidden"
                  style={{
                    border: `2px solid ${isTodayDelivery ? '#2e7d32' : '#e0e0e0'}`,
                    background: isTodayDelivery 
                      ? 'linear-gradient(135deg, rgba(232,245,233,0.95) 0%, rgba(200,230,201,0.85) 100%)' 
                      : 'white'
                  }}
                >
                  {/* Livraison Header */}
                  <div className="px-[20px] py-[16px]">
                    <div className="flex items-center gap-[16px]">
                      <div className={isTodayDelivery
                        ? "flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#178466]"
                        : "flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#f0fcf9]"
                      }>
                        <Calendar className={isTodayDelivery ? "w-[20px] h-[20px] text-white" : "w-[20px] h-[20px] text-[#178466]"} />
                      </div>
                      <div className="flex flex-col items-start flex-1">
                        <div className="flex items-center justify-center gap-[12px]">
                          <span className={isTodayDelivery 
                            ? "text-[17px] font-['Roboto',sans-serif] text-[#178466]" 
                            : "text-[17px] font-['Roboto',sans-serif] text-[#343a40]"
                          } style={{ fontWeight: 700 }}>
                            Livraison du {livraison.dateLivraison} {livraison.heureLivraison}
                          </span>
                          {(totalCaisses > 0 || totalEO > 0) && (
                            <>
                              <Separator orientation="vertical" className={isTodayDelivery ? "h-[14px] bg-[#178466]" : "h-[14px] bg-[#e0e0e0]"} />
                              <div className="flex items-center justify-center gap-[12px] ml-[64px]">
                                {totalCaisses > 0 && (
                                  <div className="flex items-center gap-[6px]">
                                    <span className="text-[18px] text-[#000000] flex items-center justify-center w-[36px] h-[36px] rounded-full border-2 border-[#000000]" style={{ fontWeight: 700 }}>{totalCaisses}</span>
                                    <span className="text-[14px] text-[#000000]" style={{ fontWeight: 600 }}>
                                      Caisse{totalCaisses > 1 ? "s" : ""}
                                    </span>
                                  </div>
                                )}
                                {totalCaisses > 0 && totalEO > 0 && (
                                  <div className="w-[1px] h-[24px] bg-[#178466]"></div>
                                )}
                                {totalEO > 0 && (
                                  <div className="flex items-center gap-[6px]">
                                    <span className="text-[18px] text-[#000000] flex items-center justify-center w-[36px] h-[36px] rounded-full border-2 border-[#000000]" style={{ fontWeight: 700 }}>{totalEO}</span>
                                    <span className="text-[14px] text-[#000000]" style={{ fontWeight: 600 }}>
                                      Emballage{totalEO > 1 ? "s" : ""} d'origine
                                    </span>
                                  </div>
                                )}
                                {livraison.hasProduitReparti && (
                                  <>
                                    <Separator orientation="vertical" className={isTodayDelivery ? "h-[14px] bg-[#178466]" : "h-[14px] bg-[#e0e0e0]"} />
                                    <span className="text-[11px] text-[#6c757d]" style={{ fontWeight: 700 }}>
                                      *Produit réparti sur plusieurs contenants
                                    </span>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-[12px] mt-[4px]">
                          
                          {expandInfo && expandInfo.searchType !== 'bl' && (
                            <>
                              <Separator orientation="vertical" className="h-[12px] bg-[#e0e0e0]" />
                              <div className="text-[11px] text-[#178466] bg-[#f0f6f4] px-[10px] py-[4px] rounded-[6px] font-medium">
                                {expandInfo.searchType === 'produit' ? `${expandInfo.produitIds.length} produit(s)` : `${expandInfo.caisseIds.length} caisse(s)`}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (isExpanded) {
                            setExpandedSearchBL(expandedSearchBL.filter(bl => bl !== livraison.numeroBL));
                          } else {
                            setExpandedSearchBL([...expandedSearchBL, livraison.numeroBL]);
                          }
                        }}
                        className="flex items-center gap-[8px] px-[12px] py-[6px] rounded-[8px] cursor-pointer transition-all bg-[#178466] hover:bg-[#146b55] border border-[#178466] hover:shadow-md"
                      >
                        <span className="text-[12px] font-['Roboto',sans-serif] text-white" style={{ fontWeight: 600 }}>
                          {isExpanded ? "Masquer" : "Voir"}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-[16px] h-[16px] text-white" />
                        ) : (
                          <ChevronDown className="w-[16px] h-[16px] text-white" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Lots Section */}
                  {isExpanded && (
                    <div className="border-t border-[#e0e0e0] bg-[#f8fbf9] px-[20px] py-[16px]">
                      <div className="flex flex-col gap-[10px]">
                        {livraison.lots
                          .map((lot) => {
                            // Si recherche produit, filtrer le lot pour ne garder que les caisses/EO contenant les produits recherchés
                            if (expandInfo?.searchType === 'produit') {
                              const filteredCaisses = lot.caisses
                                .map(caisse => ({
                                  ...caisse,
                                  produits: caisse.produits.filter(p => expandInfo.produitIds.includes(p.id))
                                }))
                                .filter(caisse => caisse.produits.length > 0);
                              
                              const filteredEos = (lot.eos || [])
                                .map(eo => ({
                                  ...eo,
                                  produits: eo.produits.filter(p => expandInfo.produitIds.includes(p.id))
                                }))
                                .filter(eo => eo.produits.length > 0);
                              
                              // Ne pas afficher le lot s'il ne contient aucune caisse/EO avec le produit
                              if (filteredCaisses.length === 0 && filteredEos.length === 0) {
                                return null;
                              }
                              
                              return {
                                ...lot,
                                caisses: filteredCaisses,
                                eos: filteredEos
                              };
                            }
                            
                            // Si recherche caisse, filtrer pour ne garder que les caisses recherchées
                            if (expandInfo?.searchType === 'caisse') {
                              const filteredCaisses = lot.caisses.filter(c => expandInfo.caisseIds.includes(c.id));
                              const filteredEos = (lot.eos || []).filter(eo => expandInfo.caisseIds.includes(eo.id));
                              
                              if (filteredCaisses.length === 0 && filteredEos.length === 0) {
                                return null;
                              }
                              
                              return {
                                ...lot,
                                caisses: filteredCaisses,
                                eos: filteredEos
                              };
                            }
                            
                            return lot;
                          })
                          .filter(lot => lot !== null)
                          .map((lot) => {
                            const lotShouldExpand = expandInfo && expandInfo.lotIds.includes(lot.id);
                            const lotIsExpanded = expandedSearchLots.includes(lot.id);
                            
                            // Trouver les caisses de ce lot qui doivent être dépliées
                            const allCaisseIdsInLot = [...lot.caisses.map(c => c.id), ...(lot.eos?.map(eo => eo.id) || [])];
                            const caissesToExpandInThisLot = expandedSearchCaisses.filter(id => allCaisseIdsInLot.includes(id));
                            const firstCaisseToExpand = caissesToExpandInThisLot.length > 0 ? caissesToExpandInThisLot[0] : null;

                            return (
                              <LotDetailSection
                                key={lot.id}
                                lot={lot}
                                expandedLotId={lotIsExpanded ? lot.id : null}
                                setExpandedLotId={(id) => {
                                  if (id) {
                                    if (!expandedSearchLots.includes(id)) {
                                      setExpandedSearchLots([...expandedSearchLots, id]);
                                    }
                                  } else {
                                    setExpandedSearchLots(expandedSearchLots.filter(l => l !== lot.id));
                                  }
                                }}
                                expandedCaisseId={firstCaisseToExpand}
                                setExpandedCaisseId={(id) => {
                                  if (id && !expandedSearchCaisses.includes(id)) {
                                    setExpandedSearchCaisses([...expandedSearchCaisses, id]);
                                  } else if (!id) {
                                    setExpandedSearchCaisses(expandedSearchCaisses.filter(c => !allCaisseIdsInLot.includes(c)));
                                  }
                                }}
                                highlightedProduitIds={expandInfo?.produitIds || []}
                                sortConfig={sortConfig[lot.id] || null}
                                onSort={(column) => {
                                  setSortConfig(prev => {
                                    const currentSort = prev[lot.id];
                                    const newDirection = currentSort?.column === column && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                    return { ...prev, [lot.id]: { column, direction: newDirection } };
                                  });
                                }}
                                onPrint={(lot, label) => {
                                  console.log('onPrint appelé avec:', { lot, label });
                                  setPrintLot({ lot, label });
                                  setTimeout(() => {
                                    console.log('Lancement de window.print()');
                                    window.print();
                                  }, 100);
                                }}
                              />
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        </div>
      )}
    </div>
  );
}

// --- Main BLV Page ---
export default function BlvPage() {
  const [expandedBL, setExpandedBL] = useState<string | null>(null);
  const [selectedLotType, setSelectedLotType] = useState<LotType | null>(null);
  const [expandedCaisseId, setExpandedCaisseId] = useState<string | null>(null);
  const [expandedLotId, setExpandedLotId] = useState<string | null>(null);
  const [lotFilters, setLotFilters] = useState<Record<string, 'caisse' | 'eo' | null>>({});
  const [showSimulation, setShowSimulation] = useState<boolean>(false);
  const [showSwitcher, setShowSwitcher] = useState<boolean>(false);
  const [quickFilters, setQuickFilters] = useState<Record<string, 'expensive' | 'promis' | 'froid' | 'stup' | 'nonRemboursé' | 'telephone' | null>>({});
  const [kpiFilters, setKpiFilters] = useState<Record<string, 'ecarts' | 'avoirEnCours' | 'qtesRectifiees' | null>>({});
  const [sortConfig, setSortConfig] = useState<Record<string, { column: string; direction: 'asc' | 'desc' } | null>>({});
  const [printLot, setPrintLot] = useState<{ lot: Lot; label: string } | null>(null);
  const [expandedCaisses, setExpandedCaisses] = useState<Set<string>>(new Set()); // Gérer les caisses ouvertes globalement
  const [caisseOnlyMode, setCaisseOnlyMode] = useState<Record<string, boolean>>({}); // Mode "vue caisses uniquement" par livraison
  const [eoOnlyMode, setEoOnlyMode] = useState<Record<string, boolean>>({}); // Mode "vue EO uniquement" par livraison

  // Effet pour logger les changements de printLot
  useEffect(() => {
    console.log('printLot a changé:', printLot);
    if (printLot) {
      console.log('Lot à imprimer:', { 
        lotId: printLot.lot.id, 
        label: printLot.label,
        nbCaisses: printLot.lot.caisses.length,
        nbEOs: printLot.lot.eos?.length || 0
      });
    }
  }, [printLot]);

  // Sort all livraisons by date and time
  const sortedLivraisons = [...mockLivraisons].sort((a, b) => {
    const dateA = a.dateLivraison.split("/").reverse().join("");
    const dateB = b.dateLivraison.split("/").reverse().join("");
    const dateCompare = dateB.localeCompare(dateA);
    if (dateCompare !== 0) return dateCompare;
    // If same date, sort by time (descending)
    return b.heureLivraison.localeCompare(a.heureLivraison);
  });

  const [expandedDates, setExpandedDates] = useState<string | null>(null);

  const toggleDate = (numeroBL: string) => {
    const isExpanding = expandedDates !== numeroBL;
    
    // If expanding, set this as the only expanded date and BL
    if (isExpanding) {
      setExpandedDates(numeroBL);
      setExpandedBL(numeroBL);
    } else {
      // If collapsing, close everything
      setExpandedDates(null);
      setExpandedBL(null);
    }
  };

  const handleLotFilter = (lotType: LotType, numeroBL: string) => {
    const newSelectedType = selectedLotType === lotType ? null : lotType;
    setSelectedLotType(newSelectedType);
    
    if (newSelectedType) {
      // Find the livraison
      const livraison = mockLivraisons.find(l => l.numeroBL === numeroBL);
      
      if (livraison && livraison.lots.some(lot => lot.type === newSelectedType)) {
        // Expand the BL
        setExpandedBL(numeroBL);
        
        // Ensure delivery is expanded
        setExpandedDates(numeroBL);
        
        // Scroll to the BL
        setTimeout(() => {
          const element = document.getElementById(`bl-${numeroBL}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    } else {
      // Clear expansion when filter is removed
      setExpandedBL(null);
    }
  };

  return (
    <div className="w-full bg-[#f0f6f4]">
      <div className="max-w-[1320px] mx-auto py-[32px] px-[24px]">
        {/* Page title */}
        <div className="flex items-center justify-between mb-[28px]">
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-[#178466]">
              <Truck className="w-[20px] h-[20px] text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[22px] font-['Roboto',sans-serif] text-[#343a40]" style={{ fontWeight: 700, lineHeight: "28px" }}>
                Mes livraisons OCP
              </h1>
            </div>
          </div>
        </div>

        {/* Texte de présentation */}
        <div className="mb-[24px]">
          <div className="bg-white border border-[#e0e0e0] rounded-[8px] p-[20px] shadow-sm flex gap-[16px]">
            <div className="flex items-start justify-center mt-[2px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-[#e3f2fd]">
                <Info className="w-[20px] h-[20px] text-[#1565c0]" />
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-[15px] font-['Roboto',sans-serif] text-black leading-[1.6]">
                Message de votre établissement: Livraison retardée d'une heure
              </p>
            </div>
          </div>
        </div>

        {/* Section: Livraisons */}
        <div className="flex flex-col gap-[24px] mb-[32px]">
          {(() => {
            const today = "24/02/2026"; // Date du jour fixe
            const todayLivraisons = sortedLivraisons.filter(l => l.dateLivraison === today);
            const previousLivraisons = sortedLivraisons.filter(l => l.dateLivraison !== today).slice(0, 10);

            const renderLivraisonSection = (livraison: Livraison, isToday: boolean) => {
              const totalCaisses = getTotalCaisses(livraison);
              const totalEO = getTotalEO(livraison);
              const isExpanded = expandedDates === livraison.numeroBL;
              const hasErrors = hasLivraisonError(livraison);
              const anomalieCount = getLivraisonErrorCount(livraison);
              
              // Compter les produits par type pour cette livraison
              const expensiveCount = getExpensiveProductsCountFromLivraison(livraison);
              const promisCount = getPromisProductsCountFromLivraison(livraison);
              const froidCount = getFroidProductsCountFromLivraison(livraison);
              const stupCount = getStupProductsCountFromLivraison(livraison);
              const nonRemboursésCount = getNonRemboursésProductsCountFromLivraison(livraison);
              const telephoneCount = getTelephoneProductsCountFromLivraison(livraison);
              const completageCount = getCompletageProductsCountFromLivraison(livraison);
              const avoirEnCoursCount = getAvoirEnCoursProductsCountFromLivraison(livraison);
              const quantitiesRectifiedCount = getQuantitiesRectifiedCountFromLivraison(livraison);
              
              const quickFilter = quickFilters[livraison.numeroBL] || null;
              const kpiFilter = kpiFilters[livraison.numeroBL] || null;

              return (
                <div 
                  key={livraison.numeroBL} 
                  className={isToday 
                    ? "bg-gradient-to-br from-[#e8f5f1] to-[#f0fcf9] rounded-[16px] border-2 border-[#178466] overflow-hidden shadow-lg" 
                    : "bg-white rounded-[16px] border border-[#e0e0e0] overflow-hidden shadow-sm"
                  }
                >
                  <div
                    className={isToday 
                      ? "w-full flex items-center justify-between px-[24px] py-[18px] hover:bg-[#dff2eb] transition-colors"
                      : "w-full flex items-center justify-between px-[24px] py-[18px] hover:bg-[#fafafa] transition-colors"
                    }
                  >
                    <div className="flex items-center gap-[16px]">
                      <div className={isToday
                        ? "flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#178466]"
                        : "flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#f0fcf9]"
                      }>
                        <Calendar className={isToday ? "w-[20px] h-[20px] text-white" : "w-[20px] h-[20px] text-[#178466]"} />
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center justify-center gap-[12px]">
                          <span 
                            className={isToday 
                              ? "text-[17px] font-['Roboto',sans-serif] text-[#178466] cursor-pointer hover:opacity-70 transition-opacity" 
                              : "text-[17px] font-['Roboto',sans-serif] text-[#343a40] cursor-pointer hover:opacity-70 transition-opacity"
                            } 
                            style={{ fontWeight: 700 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                              setExpandedDates(livraison.numeroBL);
                            }}
                          >
                            Livraison du {livraison.dateLivraison} {livraison.heureLivraison}
                          </span>
                          {(totalCaisses > 0 || totalEO > 0) && (
                            <>
                              <Separator orientation="vertical" className={isToday ? "h-[14px] bg-[#178466]" : "h-[14px] bg-[#e0e0e0]"} />
                              <div className="flex items-center justify-center gap-[12px] ml-[64px]">
                                {totalCaisses > 0 && (
                                  <div 
                                    className="flex items-center gap-[6px] cursor-pointer hover:opacity-70 transition-opacity"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // Toggle le mode caisses
                                      if (caisseOnlyMode[livraison.numeroBL]) {
                                        setCaisseOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false }));
                                      } else {
                                        setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                        setKpiFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                        setExpandedCaisses(new Set()); // Fermer toutes les caisses
                                        setEoOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false })); // Désactiver le mode EO
                                        setCaisseOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: true })); // Activer le mode "vue caisses uniquement"
                                        setExpandedDates(livraison.numeroBL);
                                      }
                                    }}
                                  >
                                    <span className="text-[18px] text-[#000000] flex items-center justify-center w-[36px] h-[36px] rounded-full border-2 border-[#000000]" style={{ fontWeight: 700 }}>{totalCaisses}</span>
                                    <span className="text-[14px] text-[#000000]" style={{ fontWeight: 600 }}>
                                      Caisse{totalCaisses > 1 ? "s" : ""}
                                    </span>
                                  </div>
                                )}
                                {totalCaisses > 0 && totalEO > 0 && (
                                  <div className="w-[1px] h-[24px] bg-[#178466]"></div>
                                )}
                                {totalEO > 0 && (
                                  <div 
                                    className="flex items-center gap-[6px] cursor-pointer hover:opacity-70 transition-opacity"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      // Toggle le mode EO
                                      if (eoOnlyMode[livraison.numeroBL]) {
                                        setEoOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false }));
                                      } else {
                                        setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                        setKpiFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                        setExpandedCaisses(new Set()); // Fermer toutes les caisses
                                        setCaisseOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false })); // Désactiver le mode caisses
                                        setEoOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: true })); // Activer le mode "vue EO uniquement"
                                        setExpandedDates(livraison.numeroBL);
                                      }
                                    }}
                                  >
                                    <span className="text-[18px] text-[#000000] flex items-center justify-center w-[36px] h-[36px] rounded-full border-2 border-[#000000]" style={{ fontWeight: 700 }}>{totalEO}</span>
                                    <span className="text-[14px] text-[#000000]" style={{ fontWeight: 600 }}>
                                      Emballage{totalEO > 1 ? "s" : ""} d'origine
                                    </span>
                                  </div>
                                )}
                                {livraison.hasProduitReparti && (
                                  <>
                                    <Separator orientation="vertical" className={isToday ? "h-[14px] bg-[#178466]" : "h-[14px] bg-[#e0e0e0]"} />
                                    <span className="text-[11px] text-[#6c757d]" style={{ fontWeight: 700 }}>
                                      *Produit réparti sur plusieurs contenants
                                    </span>
                                  </>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                        {/* Section avec Accès rapide à gauche et Statistiques à droite */}
                        <div className="flex items-center justify-between mt-[6px]">
                          {/* Accès rapide à gauche */}
                          {(expensiveCount > 0 || promisCount > 0 || stupCount > 0 || nonRemboursésCount > 0 || telephoneCount > 0) && (
                            <div className="flex items-center gap-[8px] mt-[12px]">
                                <Zap className="w-[12px] h-[12px] text-[#6c757d]" />
                                <span className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] whitespace-nowrap" style={{ fontWeight: 500 }}>Accès rapide :</span>
                                {promisCount > 0 && (
                                  <Badge
                                    variant="outline"
                                    className="text-[12px] py-0 px-[6px] h-[24px] cursor-pointer transition-all"
                                    style={{ 
                                      backgroundColor: quickFilter === 'promis' ? '#2e7d32' : '#fff', 
                                      color: quickFilter === 'promis' ? 'white' : '#6c757d', 
                                      borderColor: quickFilter === 'promis' ? '#2e7d32' : '#e0e0e0' 
                                    }}
                                    onMouseEnter={(e) => {
                                      const isActive = quickFilter === 'promis';
                                      e.currentTarget.style.backgroundColor = isActive ? '#fff' : '#6c757d';
                                      e.currentTarget.style.color = isActive ? '#2e7d32' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                      const isActive = quickFilter === 'promis';
                                      e.currentTarget.style.backgroundColor = isActive ? '#2e7d32' : '#fff';
                                      e.currentTarget.style.color = isActive ? 'white' : '#6c757d';
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const newFilter = quickFilter === 'promis' ? null : 'promis';
                                      setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: newFilter }));
                                      // Si on active le filtre et qu'il y a des produits, on déplie
                                      if (newFilter && promisCount > 0) {
                                        setExpandedDates(livraison.numeroBL);
                                      }
                                    }}
                                  >
                                    Promis
                                  </Badge>
                                )}

                                {stupCount > 0 && (
                                  <Badge
                                    variant="outline"
                                    className="text-[12px] py-0 px-[6px] h-[24px] cursor-pointer transition-all"
                                    style={{ 
                                      backgroundColor: quickFilter === 'stup' ? '#2e7d32' : '#fff', 
                                      color: quickFilter === 'stup' ? 'white' : '#6c757d', 
                                      borderColor: quickFilter === 'stup' ? '#2e7d32' : '#e0e0e0' 
                                    }}
                                    onMouseEnter={(e) => {
                                      const isActive = quickFilter === 'stup';
                                      e.currentTarget.style.backgroundColor = isActive ? '#fff' : '#6c757d';
                                      e.currentTarget.style.color = isActive ? '#2e7d32' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                      const isActive = quickFilter === 'stup';
                                      e.currentTarget.style.backgroundColor = isActive ? '#2e7d32' : '#fff';
                                      e.currentTarget.style.color = isActive ? 'white' : '#6c757d';
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const newFilter = quickFilter === 'stup' ? null : 'stup';
                                      setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: newFilter }));
                                      // Si on active le filtre et qu'il y a des produits, on déplie
                                      if (newFilter && stupCount > 0) {
                                        setExpandedDates(livraison.numeroBL);
                                      }
                                    }}
                                  >
                                    Stups
                                  </Badge>
                                )}
                                {expensiveCount > 0 && (
                                  <Badge
                                    variant="outline"
                                    className="text-[12px] py-0 px-[6px] h-[24px] cursor-pointer transition-all"
                                    style={{ 
                                      backgroundColor: quickFilter === 'expensive' ? '#2e7d32' : '#fff', 
                                      color: quickFilter === 'expensive' ? 'white' : '#6c757d', 
                                      borderColor: quickFilter === 'expensive' ? '#2e7d32' : '#e0e0e0' 
                                    }}
                                    onMouseEnter={(e) => {
                                      const isActive = quickFilter === 'expensive';
                                      e.currentTarget.style.backgroundColor = isActive ? '#fff' : '#6c757d';
                                      e.currentTarget.style.color = isActive ? '#2e7d32' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                      const isActive = quickFilter === 'expensive';
                                      e.currentTarget.style.backgroundColor = isActive ? '#2e7d32' : '#fff';
                                      e.currentTarget.style.color = isActive ? 'white' : '#6c757d';
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const newFilter = quickFilter === 'expensive' ? null : 'expensive';
                                      setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: newFilter }));
                                      // Si on active le filtre et qu'il y a des produits, on déplie
                                      if (newFilter && expensiveCount > 0) {
                                        setExpandedDates(livraison.numeroBL);
                                      }
                                    }}
                                  >
                                    Produits chers
                                  </Badge>
                                )}
                                {nonRemboursésCount > 0 && (
                                  <Badge
                                    variant="outline"
                                    className="text-[12px] py-0 px-[8px] h-[24px] cursor-pointer transition-all"
                                    style={{ 
                                      backgroundColor: quickFilter === 'nonRemboursé' ? '#2e7d32' : '#fff', 
                                      color: quickFilter === 'nonRemboursé' ? 'white' : '#6c757d', 
                                      borderColor: quickFilter === 'nonRemboursé' ? '#2e7d32' : '#e0e0e0' 
                                    }}
                                    onMouseEnter={(e) => {
                                      const isActive = quickFilter === 'nonRemboursé';
                                      e.currentTarget.style.backgroundColor = isActive ? '#fff' : '#6c757d';
                                      e.currentTarget.style.color = isActive ? '#2e7d32' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                      const isActive = quickFilter === 'nonRemboursé';
                                      e.currentTarget.style.backgroundColor = isActive ? '#2e7d32' : '#fff';
                                      e.currentTarget.style.color = isActive ? 'white' : '#6c757d';
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const newFilter = quickFilter === 'nonRemboursé' ? null : 'nonRemboursé';
                                      setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: newFilter }));
                                      // Si on active le filtre et qu'il y a des produits, on déplie
                                      if (newFilter && nonRemboursésCount > 0) {
                                        setExpandedDates(livraison.numeroBL);
                                      }
                                    }}
                                  >
                                    Non remboursés
                                  </Badge>
                                )}
                                {telephoneCount > 0 && (
                                  <Badge
                                    variant="outline"
                                    className="text-[12px] py-0 px-[8px] h-[24px] cursor-pointer transition-all"
                                    style={{ 
                                      backgroundColor: quickFilter === 'telephone' ? '#2e7d32' : '#fff', 
                                      color: quickFilter === 'telephone' ? 'white' : '#6c757d', 
                                      borderColor: quickFilter === 'telephone' ? '#2e7d32' : '#e0e0e0' 
                                    }}
                                    onMouseEnter={(e) => {
                                      const isActive = quickFilter === 'telephone';
                                      e.currentTarget.style.backgroundColor = isActive ? '#fff' : '#6c757d';
                                      e.currentTarget.style.color = isActive ? '#2e7d32' : '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                      const isActive = quickFilter === 'telephone';
                                      e.currentTarget.style.backgroundColor = isActive ? '#2e7d32' : '#fff';
                                      e.currentTarget.style.color = isActive ? 'white' : '#6c757d';
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const newFilter = quickFilter === 'telephone' ? null : 'telephone';
                                      setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: newFilter }));
                                      // Si on active le filtre et qu'il y a des produits, on déplie
                                      if (newFilter && telephoneCount > 0) {
                                        setExpandedDates(livraison.numeroBL);
                                      }
                                    }}
                                  >
                                    Téléphone
                                  </Badge>
                                )}
                            </div>
                          )}
                          
                        </div>
                      </div>
                    </div>
                    <div className="w-[500px] flex flex-row items-center gap-[16px] justify-end">
                      {/* KPI à gauche du chevron */}
                      {(anomalieCount > 0 || avoirEnCoursCount > 0 || quantitiesRectifiedCount > 0) && (
                        <div className="flex flex-col gap-[6px] mr-auto">
                          <span className="text-[13px] font-['Roboto',sans-serif] text-[#000000] flex items-center gap-[6px]" style={{ fontWeight: 500 }}>
                            <ClipboardCheck className="w-[16px] h-[16px]" />
                            Bilan de vérification:
                          </span>
                          <div className="flex items-center gap-[12px]">
                          {anomalieCount > 0 && (
                            <button 
                              className="flex items-center gap-[8px] px-[14px] py-[4px] rounded-[6px] transition-all border-2 cursor-pointer" 
                              style={{ 
                                backgroundColor: '#cf1322', 
                                borderColor: kpiFilter === 'ecarts' ? '#ffffff' : '#cf1322',
                                boxShadow: kpiFilter === 'ecarts' ? '0 0 0 3px rgba(207, 19, 34, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
                                opacity: kpiFilter && kpiFilter !== 'ecarts' ? 0.4 : 1
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                const newFilter = kpiFilter === 'ecarts' ? null : 'ecarts';
                                setKpiFilters(prev => ({ ...prev, [livraison.numeroBL]: newFilter }));
                                // Réinitialiser le quickFilter si on active un kpiFilter
                                if (newFilter) {
                                  setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                  setEoOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false }));
                                  setExpandedDates(livraison.numeroBL);
                                }
                              }}
                              onMouseEnter={(e) => {
                                if (kpiFilter !== 'ecarts') {
                                  e.currentTarget.style.opacity = '0.7';
                                  e.currentTarget.style.transform = 'scale(1.05)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = kpiFilter && kpiFilter !== 'ecarts' ? '0.4' : '1';
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              <span className="text-[16px] text-[#ffffff]" style={{ fontWeight: 700, lineHeight: 1 }}>{anomalieCount}</span>
                              <span className="text-[13px] text-[#ffffff]" style={{ fontWeight: 600, opacity: 0.95 }}>{anomalieCount === 1 ? "Écart à traiter" : "Écarts à traiter"}</span>
                            </button>
                          )}
                          {avoirEnCoursCount > 0 && (
                            <button 
                              className="flex items-center gap-[8px] px-[14px] py-[4px] rounded-[6px] transition-all border-2 cursor-pointer" 
                              style={{ 
                                backgroundColor: '#006B7D', 
                                borderColor: kpiFilter === 'avoirEnCours' ? '#ffffff' : '#006B7D',
                                boxShadow: kpiFilter === 'avoirEnCours' ? '0 0 0 3px rgba(0, 107, 125, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
                                opacity: kpiFilter && kpiFilter !== 'avoirEnCours' ? 0.4 : 1
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                const newFilter = kpiFilter === 'avoirEnCours' ? null : 'avoirEnCours';
                                setKpiFilters(prev => ({ ...prev, [livraison.numeroBL]: newFilter }));
                                // Réinitialiser le quickFilter si on active un kpiFilter
                                if (newFilter) {
                                  setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                  setEoOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false }));
                                  setExpandedDates(livraison.numeroBL);
                                }
                              }}
                              onMouseEnter={(e) => {
                                if (kpiFilter !== 'avoirEnCours') {
                                  e.currentTarget.style.opacity = '0.7';
                                  e.currentTarget.style.transform = 'scale(1.05)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = kpiFilter && kpiFilter !== 'avoirEnCours' ? '0.4' : '1';
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              <span className="text-[16px] text-[#ffffff]" style={{ fontWeight: 700, lineHeight: 1 }}>{avoirEnCoursCount}</span>
                              <span className="text-[13px] text-[#ffffff]" style={{ fontWeight: 600, opacity: 0.95 }}>Avoirs en cours</span>
                            </button>
                          )}
                          {quantitiesRectifiedCount > 0 && (
                                                        <button 
                              className="flex items-center gap-[8px] px-[14px] py-[4px] rounded-[6px] transition-all border-2 cursor-pointer" 
                              style={{ 
                                backgroundColor: '#ffffff', 
                                borderColor: '#000000',
                                boxShadow: kpiFilter === 'qtesRectifiees' ? '0 0 0 3px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
                                opacity: kpiFilter && kpiFilter !== 'qtesRectifiees' ? 0.4 : 1
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                const newFilter = kpiFilter === 'qtesRectifiees' ? null : 'qtesRectifiees';
                                setKpiFilters(prev => ({ ...prev, [livraison.numeroBL]: newFilter }));
                                // Réinitialiser le quickFilter si on active un kpiFilter
                                if (newFilter) {
                                  setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                  setEoOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false }));
                                  setExpandedDates(livraison.numeroBL);
                                }
                              }}
                              onMouseEnter={(e) => {
                                if (kpiFilter !== 'qtesRectifiees') {
                                  e.currentTarget.style.opacity = '0.7';
                                  e.currentTarget.style.transform = 'scale(1.05)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = kpiFilter && kpiFilter !== 'qtesRectifiees' ? '0.4' : '1';
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              <span className="text-[16px] text-[#000000]" style={{ fontWeight: 700, lineHeight: 1 }}>{quantitiesRectifiedCount}</span>
                              <span className="text-[13px] text-[#000000]" style={{ fontWeight: 600, opacity: 0.95 }}>{quantitiesRectifiedCount === 1 ? "Facture rectifiée" : "Factures rectifiées"}</span>
                            </button>
                          )}
                          </div>
                        </div>
                      )}
                      
                      {!hasErrors && (
                        <span className="px-[6px] py-[2px] rounded-full inline-block text-[11px]" style={{ backgroundColor: isToday ? '#ffffff' : '#e8f5e9', color: '#2e7d32', fontWeight: 700 }}>Aucun écart</span>
                      )}
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDate(livraison.numeroBL);
                        }}
                        className="cursor-pointer hover:opacity-70 transition-opacity p-1"
                        aria-label={`${isExpanded ? 'Réduire' : 'Développer'} la livraison du ${livraison.dateLivraison}`}
                      >
                        {isExpanded ? <ChevronUp className={isToday ? "w-[20px] h-[20px] text-[#178466]" : "w-[20px] h-[20px] text-[#9e9e9e]"} /> : <ChevronDown className={isToday ? "w-[20px] h-[20px] text-[#178466]" : "w-[20px] h-[20px] text-[#9e9e9e]"} />}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className={isToday ? "border-t-2 border-[#178466] bg-[#fcfdfd]" : "border-t border-[#e0e0e0] bg-[#fcfdfd]"}>
                      <div className="p-[12px]">
                        <div id={`bl-${livraison.numeroBL}`} className="bg-white rounded-[12px] border border-[#e8eceb] overflow-hidden">
                          {caisseOnlyMode[livraison.numeroBL] ? (
                            // Mode "vue caisses uniquement" : afficher toutes les caisses sans les lots
                            <div className="border-t border-[#e0e0e0] bg-[#f8fbf9] px-[24px] py-[20px]">
                              <div className="mb-[16px] flex items-center justify-between">
                                <div className="flex items-center gap-[10px]">
                                  <Package className="w-[16px] h-[16px] text-[#178466]" />
                                  <span className="text-[14px] font-['Roboto',sans-serif] text-[#343a40]" style={{ fontWeight: 600 }}>
                                    Toutes les caisses ({getTotalCaisses(livraison)})
                                  </span>
                                </div>
                                <button
                                  onClick={() => {
                                    setCaisseOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false }));
                                  }}
                                  className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-[6px] text-[12px] font-['Roboto',sans-serif] text-[#6c757d] hover:bg-[#f0f0f0] transition-colors"
                                  style={{ fontWeight: 500 }}
                                >
                                  <X className="w-[14px] h-[14px]" />
                                  Retour à la vue par lots
                                </button>
                              </div>
                              
                              <Table>
                                <TableBody>
                                  {(() => {
                                    // Récupérer toutes les caisses de tous les lots
                                    const allCaisses: Caisse[] = [];
                                    livraison.lots.forEach(lot => {
                                      lot.caisses.forEach(caisse => {
                                        allCaisses.push(caisse);
                                      });
                                    });
                                    
                                    return allCaisses.flatMap((caisse) => {
                                      const isExpanded = expandedCaisses.has(caisse.id) || expandedCaisseId === caisse.id;
                                      const statusInfo = getCaisseStatus(caisse);
                                      
                                      const rows = [
                                        <TableRow
                                          key={caisse.id}
                                          id={`caisse-${caisse.id}`}
                                          className="transition-colors"
                                          style={{ backgroundColor: '#e8f5e9' }}
                                        >
                                          <TableCell className="text-[12px] font-['Roboto',sans-serif] text-[#343a40] pl-[12px]" style={{ fontWeight: 500 }}>
                                            <div className="flex items-center gap-[8px]">
                                              <div className="size-[12px] text-[#2e7d32]">
                                                <Vector />
                                              </div>
                                              <span className="whitespace-nowrap">N° CAISSE: {caisse.numeroCaisse}</span>
                                              <span className="ml-[28px] whitespace-nowrap">N° TICKET ADRESSE: {caisse.numeroTicketAdresse || 'N/A'}</span>
                                              <span className="ml-[36px] whitespace-nowrap">N° BL: {caisse.numeroBL || 'N/A'}</span>
                                            </div>
                                          </TableCell>
                                          <TableCell className="pr-[12px]">
                                            <div className="flex items-center justify-end gap-[8px]">
                                              <span
                                                className={`px-[6px] py-[2px] rounded-full inline-block text-[10px] whitespace-nowrap ${statusInfo.bg === '#ffffff' ? 'border border-black' : ''}`}
                                                style={{ backgroundColor: statusInfo.bg, color: statusInfo.color, fontWeight: 700 }}
                                              >
                                                {statusInfo.label === "Écart" 
                                                  ? `${getCaisseErrorCount(caisse)} Écart${getCaisseErrorCount(caisse) > 1 ? 's' : ''}` 
                                                  : statusInfo.label}
                                              </span>
                                              <button
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  const newSet = new Set(expandedCaisses);
                                                  if (isExpanded) {
                                                    newSet.delete(caisse.id);
                                                  } else {
                                                    newSet.add(caisse.id);
                                                  }
                                                  setExpandedCaisses(newSet);
                                                  setExpandedCaisseId(isExpanded ? null : caisse.id);
                                                }}
                                                className="cursor-pointer hover:opacity-70 transition-opacity p-1 flex-shrink-0"
                                                aria-label={`${isExpanded ? 'Réduire' : 'Développer'} la caisse ${caisse.numeroCaisse}`}
                                              >
                                                {isExpanded ? <ChevronUp className="w-[14px] h-[14px] text-[#9e9e9e]" /> : <ChevronDown className="w-[14px] h-[14px] text-[#9e9e9e]" />}
                                              </button>
                                            </div>
                                          </TableCell>
                                        </TableRow>
                                      ];
                                      
                                      if (isExpanded) {
                                        rows.push(
                                          <TableRow key={`${caisse.id}-detail`}>
                                            <TableCell colSpan={4} className="p-0">
                                              <div className="bg-[#fafbfc] border-t border-b border-[#e8e8e8] overflow-x-auto">
                                                <div>
                                                  <table className="w-full text-[11px] table-fixed" style={{ minWidth: '1100px' }}>
                                                    <colgroup>
                                                      <col style={{ width: '75px' }} />
                                                      <col style={{ width: '85px' }} />
                                                      <col style={{ width: '45px' }} />
                                                      <col style={{ width: '85px' }} />
                                                      <col style={{ width: 'auto' }} />
                                                      <col style={{ width: '60px' }} />
                                                      <col style={{ width: '35px' }} />
                                                      <col style={{ width: '60px' }} />
                                                      <col style={{ width: '60px' }} />
                                                      <col style={{ width: '60px' }} />
                                                      <col style={{ width: '75px' }} />
                                                      <col style={{ width: '90px' }} />
                                                      <col style={{ width: '90px' }} />
                                                      <col style={{ width: '125px' }} />
                                                    </colgroup>
                                                    <thead>
                                                      <tr className="bg-[#f0f2f4]">
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] pl-[12px] px-[10px] py-[8px] text-left" style={{ fontWeight: 600 }}>Ref. Cde</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>Canal</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-left" style={{ fontWeight: 600 }}>Code produit</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-left" style={{ fontWeight: 600 }}>Produit</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>Séparateur</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[1px] py-[8px] text-center" style={{ fontWeight: 600, width: '30px', minWidth: '30px', maxWidth: '30px' }}>Type</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>Qté attendue</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>Qté livrée</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center" style={{ fontWeight: 600 }}>Qté facturée</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-right" style={{ fontWeight: 600 }}>PU HT</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-right" style={{ fontWeight: 600 }}>PU attendu</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-right" style={{ fontWeight: 600 }}>PU facturé</th>
                                                        <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[8px] text-center pr-[12px]" style={{ fontWeight: 600 }}>Contrôle</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      {caisse.produits.map((p) => (
                                                        <tr key={p.id} className="border-t border-[#eee] hover:bg-[#f5f7f6]">
                                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] pl-[12px] py-[7px] font-mono text-left whitespace-nowrap">{p.refCommandeClient}</td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{formatCanal(p.canal)}</td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] font-mono text-left">{p.cip}</td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-left" style={{ fontWeight: 500 }}>{p.designation}</td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{p.separateur || '—'}</td>
                                                          <td className="py-[7px]">
                                                            <div className="flex items-center justify-center gap-0.5">
                                                              {p.isFroid && (
                                                                <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-blue-50 border border-blue-200 cursor-pointer" title="Froid">
                                                                  <Snowflake className="w-3 h-3 text-blue-600" />
                                                                </div>
                                                              )}
                                                              {p.isStup && (
                                                                <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Stupéfiant">
                                                                  S
                                                                </div>
                                                              )}
                                                              {p.isNonRemboursé && (
                                                                <div className="flex items-center justify-center px-1.5 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Non remboursé">
                                                                  NR
                                                                </div>
                                                              )}
                                                              {p.prixPharmacien >= 50 && (
                                                                <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Produit cher">
                                                                  €
                                                                </div>
                                                              )}
                                                              {!p.isFroid && !p.isStup && !p.isNonRemboursé && p.prixPharmacien < 50 && <span className="text-[9px] text-[#9e9e9e]">—</span>}
                                                            </div>
                                                          </td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ 
                                                            fontWeight: (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteAttendue !== p.quantiteLivree) ? 700 : 600,
                                                            color: (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteAttendue !== p.quantiteLivree) ? '#000000' : '#343a40'
                                                          }}>{p.quantiteAttendue}</td>
                                                          <td className="font-['Roboto',sans-serif] py-[7px] text-center text-[11px]" style={{ 
                                                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteAttendue) ? 700 : 700,
                                                            color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteAttendue) ? '#000000' : (p.quantiteLivree === 18 ? '#cf1322' : '#000000')
                                                          }}>{p.quantiteLivree}</td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ 
                                                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteFacturee !== p.quantiteAttendue) ? 700 : (p.errorInClientFavor ? 700 : 600),
                                                            color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteFacturee !== p.quantiteAttendue) ? '#000000' : (p.quantiteFacturee === 20 ? '#cf1322' : (p.errorInClientFavor ? '#2e7d32' : '#343a40'))
                                                          }}>{p.quantiteFacturee}</td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-right pr-[8px]" style={{ fontWeight: 600 }}>{p.prixPharmacien.toFixed(2)}€</td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ 
                                                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : (p.prixUnitaireAttendu === 3.15 ? 'bold' : 'normal'),
                                                            color: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#000000' : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : (p.prixUnitaireAttendu === 3.15 ? '#cf1322' : '#000000')
                                                          }}>{p.prixUnitaireAttendu.toFixed(2)}€</td>
                                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ 
                                                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : (p.prixUnitaireFacture === 3.25 ? 'bold' : (p.errorInClientFavor ? 700 : 600)), 
                                                            color: (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : (p.prixUnitaireFacture === 3.25 ? '#cf1322' : (p.errorInClientFavor ? '#2e7d32' : '#343a40'))
                                                          }}>{p.prixUnitaireFacture.toFixed(2)}€</td>
                                                          <td className="py-[7px] pr-[12px]">
                                                            <div className="flex items-center justify-center gap-[8px]">
                                                              {p.hasValidationError ? (
                                                                <button 
                                                                  aria-label={`Signaler un écart pour ${p.designation}`}
                                                                  className="px-[8px] py-[4px] rounded-[6px] text-[9px] font-medium text-white bg-[#cf1322] hover:bg-[#a61021] transition-colors"
                                                                >Signaler l'écart</button>
                                                              ) : p.hasAvoirEnCours ? (
                                                                <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#006B7D", color: "#ffffff", fontWeight: 700 }}>Avoir en cours</span>
                                                              ) : (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) ? (
                                                                <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#ffffff", color: "#000000", fontWeight: 700 }}>Facture rectifiée</span>
                                                              ) : (
                                                                <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", fontWeight: 700 }}>Aucun écart</span>
                                                              )}
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      ))}
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </TableCell>
                                          </TableRow>
                                        );
                                      }
                                      
                                      return rows;
                                    });
                                  })()}
                                </TableBody>
                              </Table>
                            </div>
                          ) : eoOnlyMode[livraison.numeroBL] ? (
                            // Mode "vue EO uniquement" : afficher tous les produits EO
                            <div>
                              <div 
                                className="w-full px-[24px] py-[12px] bg-[#e8f0fe] border-t border-b border-[#d0e3fc] flex items-center justify-between"
                              >
                                <div className="flex items-center gap-[10px]">
                                  <Package className="w-[16px] h-[16px] text-[#006B7D]" />
                                  <span className="text-[13px] font-['Roboto',sans-serif] text-[#343a40]" style={{ fontWeight: 600 }}>
                                    Tous les emballages d'origine ({getTotalEO(livraison)})
                                  </span>
                                </div>
                                <button
                                  onClick={() => {
                                    setEoOnlyMode(prev => ({ ...prev, [livraison.numeroBL]: false }));
                                  }}
                                  className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-[6px] text-[12px] font-['Roboto',sans-serif] text-[#6c757d] hover:bg-[#d0e3fc] transition-colors"
                                  style={{ fontWeight: 500 }}
                                >
                                  <X className="w-[14px] h-[14px]" />
                                  Retour à la vue par lots
                                </button>
                              </div>
                              <div className="overflow-x-auto">
                                <table className="w-full text-[11px] table-fixed" style={{ minWidth: '1100px' }}>
                                  <colgroup>
                                    <col style={{ width: '85px' }} />
                                    <col style={{ width: '50px' }} />
                                    <col style={{ width: '105px' }} />
                                    <col style={{ width: 'auto' }} />
                                    <col style={{ width: '60px' }} />
                                    <col style={{ width: '40px' }} />
                                    <col style={{ width: '65px' }} />
                                    <col style={{ width: '65px' }} />
                                    <col style={{ width: '65px' }} />
                                    <col style={{ width: '75px' }} />
                                    <col style={{ width: '85px' }} />
                                    <col style={{ width: '85px' }} />
                                    <col style={{ width: '120px' }} />
                                  </colgroup>
                                  <thead>
                                    <tr className="bg-[#f0f2f4]">
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] pl-[12px] px-[10px] py-[6px] text-left" style={{ fontWeight: 600 }}>Ref. Cde</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Canal</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-left" style={{ fontWeight: 600 }}>Code produit</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-left" style={{ fontWeight: 600 }}>Produit</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Séparateur</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[1px] py-[6px] text-center" style={{ fontWeight: 600 }}>Type</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Qté attendue</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Qté livrée</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center" style={{ fontWeight: 600 }}>Qté facturée</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-right" style={{ fontWeight: 600 }}>PU HT</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-right" style={{ fontWeight: 600 }}>PU attendu</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-right" style={{ fontWeight: 600 }}>PU facturé</th>
                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[10px] py-[6px] text-center pr-[12px]" style={{ fontWeight: 600 }}>Contrôle</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {(() => {
                                      // Collecter tous les produits EO
                                      const allEOProducts: (Produit & { eoCode: string })[] = [];
                                      livraison.lots.forEach(lot => {
                                        if (lot.eos) {
                                          lot.eos.forEach(eo => {
                                            eo.produits.forEach(p => {
                                              allEOProducts.push({ ...p, eoCode: eo.code });
                                            });
                                          });
                                        }
                                      });
                                      
                                      return sortData(allEOProducts, 'numeroOrdre', 'asc').map((p) => (
                                        <tr key={p.id} className="border-t border-[#d0e3fc] hover:bg-[#f0f6ff]" style={{ backgroundColor: '#f8fbff' }}>
                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] pl-[12px] py-[7px] font-mono text-left whitespace-nowrap">{p.refCommandeClient}</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{formatCanal(p.canal)}</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] font-mono text-left">{p.cip}</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-left whitespace-nowrap" style={{ fontWeight: 500 }}>{p.designation}</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{p.separateur || '—'}</td>
                                          <td className="py-[7px]">
                                            <div className="flex items-center justify-center gap-0.5">
                                              {p.isFroid && (
                                                <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-blue-50 border border-blue-200 cursor-pointer" title="Froid">
                                                  <Snowflake className="w-3 h-3 text-blue-600" />
                                                </div>
                                              )}
                                              {p.isStup && (
                                                <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Stupéfiant">
                                                  S
                                                </div>
                                              )}
                                              {p.isNonRemboursé && (
                                                <div className="flex items-center justify-center px-1.5 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Non remboursé">
                                                  NR
                                                </div>
                                              )}
                                              {p.prixPharmacien >= 50 && (
                                                <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Produit cher">
                                                  €
                                                </div>
                                              )}
                                              {!p.isFroid && !p.isStup && !p.isNonRemboursé && p.prixPharmacien < 50 && <span className="text-[9px] text-[#9e9e9e]">—</span>}
                                            </div>
                                          </td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ 
                                            fontWeight: (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteAttendue !== p.quantiteLivree) ? 700 : 600,
                                            color: (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteAttendue !== p.quantiteLivree) ? '#000000' : '#343a40'
                                          }}>{p.quantiteAttendue}</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ 
                                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteLivree !== p.quantiteAttendue) ? 700 : (p.quantiteLivree !== p.quantiteAttendue ? 700 : 600),
                                            color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteLivree !== p.quantiteAttendue) ? '#000000' : (p.quantiteLivree !== p.quantiteAttendue ? '#cf1322' : '#343a40')
                                          }}>{p.quantiteLivree}</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ 
                                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteFacturee !== p.quantiteAttendue) ? 700 : (p.errorInClientFavor ? 700 : 600),
                                            color: (p.hasAvoirEnCours && p.quantiteLivree < p.quantiteAttendue) ? '#006B7D' : (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#cf1322' : (!p.hasValidationError && !p.hasAvoirEnCours && p.quantiteLivree !== p.quantiteFacturee && p.quantiteFacturee !== p.quantiteAttendue) ? '#000000' : (p.errorInClientFavor ? '#2e7d32' : '#343a40')
                                          }}>{p.quantiteFacturee}</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-right pr-[8px]" style={{ fontWeight: 600 }}>{p.prixPharmacien.toFixed(2)}€</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ 
                                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? 700 : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : 'normal',
                                            color: (p.hasValidationError && p.prixUnitaireFacture === p.prixUnitaireAttendu) ? '#000000' : (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : '#000000'
                                          }}>{p.prixUnitaireAttendu.toFixed(2)}€</td>
                                          <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ 
                                            fontWeight: (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? 700 : (p.errorInClientFavor ? 700 : 600), 
                                            color: (p.hasValidationError && p.prixUnitaireFacture > p.prixUnitaireAttendu) ? '#cf1322' : (p.errorInClientFavor ? '#2e7d32' : '#343a40')
                                          }}>{p.prixUnitaireFacture.toFixed(2)}€</td>
                                          <td className="py-[7px] pr-[12px]">
                                            <div className="flex items-center justify-center gap-[8px]">
                                              {p.hasValidationError ? (
                                                <>
                                                  <span className="px-[6px] py-[2px] rounded-full inline-block text-[11px]" style={{ backgroundColor: '#ffebee', color: '#cf1322', fontWeight: 700 }}>Écart</span>
                                                  <button 
                                                    aria-label={`Signaler un écart pour ${p.designation}`}
                                                    className="px-[8px] py-[4px] rounded-[6px] text-[9px] font-medium text-white bg-[#cf1322] hover:bg-[#a61021] transition-colors"
                                                  >
                                                    Signaler
                                                  </button>
                                                </>
                                              ) : p.hasAvoirEnCours ? (
                                                <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#006B7D", color: "#ffffff", fontWeight: 700 }}>Avoir en cours</span>
                                              ) : (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) ? (
                                                <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap border border-black" style={{ backgroundColor: "#ffffff", color: "#000000", fontWeight: 700 }}>Facture rectifiée</span>
                                              ) : (
                                                <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap" style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", fontWeight: 700 }}>Aucun écart</span>
                                              )}
                                            </div>
                                          </td>
                                        </tr>
                                      ));
                                    })()}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ) : (quickFilter || kpiFilter) ? (
                            // Vue filtrée : afficher les produits selon le filtre actif
                            <div className="bg-[#fafbfc] p-[24px]">
                              {(() => {
                                // Regrouper les produits par caisse/EO
                                const groupedByContainer: Array<{
                                  type: 'caisse' | 'eo';
                                  container: Caisse | EO;
                                  produits: Produit[];
                                  lotType: LotType;
                                }> = [];
                                
                                let filterLabel = '';
                                
                                // Parcourir tous les lots
                                livraison.lots.forEach(lot => {
                                  // Traiter les caisses
                                  lot.caisses.forEach(caisse => {
                                    const filteredProduits = caisse.produits.filter(p => {
                                      if (quickFilter) {
                                        switch (quickFilter) {
                                          case 'expensive':
                                            return p.prixPharmacien > 50;
                                          case 'promis':
                                            return lot.type === 'promis';
                                          case 'froid':
                                            return p.isFroid;
                                          case 'stup':
                                            return p.isStup;
                                          case 'nonRemboursé':
                                            return p.isNonRemboursé;
                                          case 'telephone':
                                            return p.canal === 'Téléphone';
                                          case 'completage':
                                            return lot.type === 'completage';
                                          case 'avoir':
                                            return p.hasAvoirEnCours;
                                          default:
                                            return false;
                                        }
                                      } else if (kpiFilter) {
                                        switch (kpiFilter) {
                                          case 'ecarts':
                                            return p.hasValidationError;
                                          case 'avoirEnCours':
                                            return p.hasAvoirEnCours;
                                          case 'qtesRectifiees':
                                            return (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) && !p.hasValidationError && !p.hasAvoirEnCours;
                                          default:
                                            return false;
                                        }
                                      }
                                      return false;
                                    });
                                    
                                    if (filteredProduits.length > 0) {
                                      groupedByContainer.push({
                                        type: 'caisse',
                                        container: caisse,
                                        produits: filteredProduits,
                                        lotType: lot.type
                                      });
                                    }
                                  });
                                  
                                  // Traiter les EO
                                  if (lot.eos) {
                                    lot.eos.forEach(eo => {
                                      const filteredProduits = eo.produits.filter(p => {
                                        if (quickFilter) {
                                          switch (quickFilter) {
                                            case 'expensive':
                                              return p.prixPharmacien > 50;
                                            case 'promis':
                                              return lot.type === 'promis';
                                            case 'froid':
                                              return p.isFroid;
                                            case 'stup':
                                              return p.isStup;
                                            case 'nonRemboursé':
                                              return p.isNonRemboursé;
                                            case 'telephone':
                                              return p.canal === 'Téléphone';
                                            case 'completage':
                                              return lot.type === 'completage';
                                            case 'avoir':
                                              return p.hasAvoirEnCours;
                                            default:
                                              return false;
                                          }
                                        } else if (kpiFilter) {
                                          switch (kpiFilter) {
                                            case 'ecarts':
                                              return p.hasValidationError;
                                            case 'avoirEnCours':
                                              return p.hasAvoirEnCours;
                                            case 'qtesRectifiees':
                                              return (p.quantiteLivree !== p.quantiteAttendue || p.quantiteFacturee !== p.quantiteAttendue) && !p.hasValidationError && !p.hasAvoirEnCours;
                                            default:
                                              return false;
                                          }
                                        }
                                        return false;
                                      });
                                      
                                      if (filteredProduits.length > 0) {
                                        filteredProduits.forEach(p => {
                                          groupedByContainer.push({
                                            type: 'eo',
                                            container: eo,
                                            produits: [p],
                                            lotType: lot.type
                                          });
                                        });
                                      }
                                    });
                                  }
                                });
                                
                                // Définir le label du filtre
                                if (quickFilter) {
                                  switch (quickFilter) {
                                    case 'expensive':
                                      filterLabel = 'Produits chers (> 50€)';
                                      break;
                                    case 'promis':
                                      filterLabel = 'Produits promis';
                                      break;
                                    case 'froid':
                                      filterLabel = 'Produits froids';
                                      break;
                                    case 'stup':
                                      filterLabel = 'Stupéfiants';
                                      break;
                                    case 'nonRemboursé':
                                      filterLabel = 'Produits non remboursés';
                                      break;
                                    case 'telephone':
                                      filterLabel = 'Commandes par téléphone';
                                      break;
                                    case 'completage':
                                      filterLabel = 'Produits complétage';
                                      break;
                                    case 'avoir':
                                      filterLabel = 'Avoir en cours';
                                      break;
                                  }
                                } else if (kpiFilter) {
                                  switch (kpiFilter) {
                                    case 'ecarts':
                                      filterLabel = 'Produits avec écart';
                                      break;
                                    case 'avoirEnCours':
                                      filterLabel = 'Produits avec avoir en cours';
                                      break;
                                    case 'qtesRectifiees':
                                      filterLabel = 'Produits avec factures rectifiées';
                                      break;
                                  }
                                }
                                
                                const totalProduits = groupedByContainer.reduce((sum, group) => sum + group.produits.length, 0);
                                
                                return (
                                  <>
                                    <div className="mb-[16px] flex items-center justify-between">
                                      <div className="flex items-center gap-[10px]">
                                        <Filter className="w-[16px] h-[16px] text-[#178466]" />
                                        <span className="text-[14px] font-['Roboto',sans-serif] text-[#343a40]" style={{ fontWeight: 600 }}>
                                          {filterLabel} : {totalProduits} produit{totalProduits > 1 ? 's' : ''} trouvé{totalProduits > 1 ? 's' : ''}
                                        </span>
                                      </div>
                                      <button
                                        onClick={() => {
                                          setQuickFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                          setKpiFilters(prev => ({ ...prev, [livraison.numeroBL]: null }));
                                        }}
                                        className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-[6px] text-[12px] font-['Roboto',sans-serif] text-[#6c757d] hover:bg-[#f0f0f0] transition-colors"
                                        style={{ fontWeight: 500 }}
                                      >
                                        <X className="w-[14px] h-[14px]" />
                                        {quickFilter ? 'Annuler l\'accès rapide' : 'Annuler le filtre'}
                                      </button>
                                    </div>
                                    
                                    {groupedByContainer.length === 0 ? (
                                      <div className="text-center py-[48px] text-[13px] text-[#9e9e9e]">
                                        Aucun produit trouvé pour ce filtre
                                      </div>
                                    ) : (
                                      <div className="flex flex-col gap-[16px]">
                                        {groupedByContainer.map((group, groupIndex) => {
                                          const container = group.container;
                                          const isEO = group.type === 'eo';
                                          
                                          return (
                                            <div key={`${group.type}-${container.id}-${group.produits[0]?.id || ''}`} className="bg-white rounded-[12px] border border-[#d0e3fc] overflow-hidden shadow-sm mb-[16px]">
                                              {/* Header caisse/EO */}
                                              <div className="bg-[#f8fbff] px-[16px] py-[10px] border-b border-[#d0e3fc]">
                                                <div className="flex items-center gap-[12px]">
                                                  <Package className="w-[18px] h-[18px] text-[#006B7D]" />
                                                  <div className="flex items-center gap-[16px] flex-1">
                                                    <span className="text-[13px] font-['Roboto',sans-serif] text-[#006B7D]" style={{ fontWeight: 700 }}>
                                                      {isEO ? `EO ${(container as EO).numeroEO}` : `CAISSE ${(container as Caisse).numeroCaisse}`}
                                                    </span>
                                                    <div className="flex items-center gap-[12px]">
                                                      {isEO ? (
                                                        <>
                                                          <span className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d]" style={{ fontWeight: 500 }}>
                                                            N° TICKET ADRESSE: <span className="text-[#343a40] font-semibold">{(container as EO).numeroTicketAdresse || 'N/A'}</span>
                                                          </span>
                                                          <span className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d]" style={{ fontWeight: 500 }}>
                                                            N° ÉTIQUETTE EO: <span className="text-[#343a40] font-semibold">{(container as EO).numeroEtiquette || 'N/A'}</span>
                                                          </span>
                                                        </>
                                                      ) : (
                                                        <>
                                                          <span className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d]" style={{ fontWeight: 500 }}>
                                                            N° TICKET ADRESSE: <span className="text-[#343a40] font-semibold">{(container as Caisse).numeroTicketAdresse || 'N/A'}</span>
                                                          </span>
                                                          <span className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d]" style={{ fontWeight: 500 }}>
                                                            N° BON DE LIVRAISON: <span className="text-[#343a40] font-semibold">{(container as Caisse).numeroBL || 'N/A'}</span>
                                                          </span>
                                                        </>
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              {/* Liste des produits filtrés */}
                                              <div className="overflow-x-auto">
                                                <table className="w-full text-[11px] table-fixed" style={{ minWidth: '1100px' }}>
                                                  <colgroup>
                                                    <col style={{ width: '85px' }} />
                                                    <col style={{ width: '45px' }} />
                                                    <col style={{ width: '85px' }} />
                                                    <col style={{ width: 'auto' }} />
                                                    <col style={{ width: '60px' }} />
                                                    <col style={{ width: '35px' }} />
                                                    <col style={{ width: '60px' }} />
                                                    <col style={{ width: '60px' }} />
                                                    <col style={{ width: '60px' }} />
                                                    <col style={{ width: '75px' }} />
                                                    <col style={{ width: '90px' }} />
                                                    <col style={{ width: '70px' }} />
                                                    <col style={{ width: '85px' }} />
                                                  </colgroup>
                                                  <thead>
                                                    <tr className="bg-[#f0f2f4]">
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-left" style={{ fontWeight: 600 }}>Ref. Cde</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Canal</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-left" style={{ fontWeight: 600 }}>Code produit</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-left" style={{ fontWeight: 600 }}>Produit</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Sép.</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Type</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Qté att.</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Qté liv.</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Qté fact.</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-right" style={{ fontWeight: 600 }}>PU HT</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-right" style={{ fontWeight: 600 }}>PU att.</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-right" style={{ fontWeight: 600 }}>PU fact.</th>
                                                      <th className="text-[9px] font-['Roboto',sans-serif] text-[#9e9e9e] px-[4px] py-[8px] text-center" style={{ fontWeight: 600 }}>Status</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody className="divide-y divide-[#eee]">
                                                    {group.produits.map((p) => (
                                                      <tr key={p.id} className="hover:bg-[#f5f7f6]">
                                                        <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] pl-[12px] py-[7px] font-mono text-left whitespace-nowrap">{p.refCommandeClient}</td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{formatCanal(p.canal)}</td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] font-mono text-left">{p.cip}</td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-left" style={{ fontWeight: 500 }}>{p.designation}</td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] text-[#6c757d] py-[7px] text-center">{p.separateur || '—'}</td>
                                                        <td className="py-[7px]">
                                                          <div className="flex items-center justify-center gap-0.5">
                                                            {p.isFroid && (
                                                              <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-blue-50 border border-blue-200 cursor-pointer" title="Froid">
                                                                <Snowflake className="w-3 h-3 text-blue-600" />
                                                              </div>
                                                            )}
                                                            {p.isStup && (
                                                              <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Stupéfiant">
                                                                S
                                                              </div>
                                                            )}
                                                            {p.isNonRemboursé && (
                                                              <div className="flex items-center justify-center px-1.5 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Non remboursé">
                                                                NR
                                                              </div>
                                                            )}
                                                            {p.prixPharmacien >= 50 && (
                                                              <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-white border border-black text-[9px] text-black font-bold cursor-pointer" title="Produit cher">
                                                                €
                                                              </div>
                                                            )}
                                                            {!p.isFroid && !p.isStup && !p.isNonRemboursé && p.prixPharmacien < 50 && <span className="text-[9px] text-[#9e9e9e]">—</span>}
                                                          </div>
                                                        </td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ fontWeight: 600 }}>{p.quantiteAttendue}</td>
                                                        <td className="font-['Roboto',sans-serif] py-[7px] text-center text-[11px]" style={{ fontWeight: 700 }}>{p.quantiteLivree}</td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-center" style={{ fontWeight: 600 }}>{p.quantiteFacturee}</td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] text-[#343a40] py-[7px] text-right pr-[8px]" style={{ fontWeight: 600 }}>{p.prixPharmacien.toFixed(2)}€</td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ fontWeight: p.hasValidationError ? 700 : 600, color: p.hasValidationError ? '#cf1322' : '#343a40' }}>{p.prixUnitaireAttendu.toFixed(2)}€</td>
                                                        <td className="text-[11px] font-['Roboto',sans-serif] py-[7px] text-right pr-[8px]" style={{ fontWeight: p.hasValidationError ? 700 : 600, color: p.hasValidationError ? '#cf1322' : '#343a40' }}>{p.prixUnitaireFacture.toFixed(2)}€</td>
                                                        <td className="py-[7px] pr-[12px]">
                                                          <div className="flex items-center justify-center gap-[8px]">
                                                            {p.hasValidationError ? (
                                                              <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap bg-[#cf1322] text-white font-bold">signaler un écart</span>
                                                            ) : p.hasAvoirEnCours ? (
                                                              <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap bg-[#006B7D] text-white font-bold">Avoir en cours</span>
                                                            ) : (
                                                              <span className="px-[6px] py-[2px] rounded-full inline-block text-[9px] whitespace-nowrap bg-[#e8f5e9] text-[#2e7d32] font-bold">Facture rectifiée</span>
                                                            )}
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    ))}
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </>
                                );
                              })()}
                            </div>
                          ) : (
                            // Vue normale : afficher les lots
                            <div className="border-t border-[#e0e0e0] bg-[#f8fbf9] px-[24px] py-[20px]">
                              <div className="flex flex-col gap-[10px]">
                                {livraison.lots.map((lot) => (
                                  <LotDetailSection 
                                    key={lot.id}
                                    lot={lot} 
                                    defaultOpen={true}
                                    expandedCaisseId={expandedCaisseId}
                                    setExpandedCaisseId={setExpandedCaisseId}
                                    expandedLotId={expandedLotId}
                                    setExpandedLotId={setExpandedLotId}
                                    lotFilter={lotFilters[lot.id] || null}
                                    setLotFilter={(filter) => {
                                      setLotFilters(prev => ({ ...prev, [lot.id]: filter }));
                                    }}
                                    sortConfig={sortConfig[lot.id] || null}
                                    onSort={(column) => {
                                      setSortConfig(prev => {
                                        const currentSort = prev[lot.id];
                                        const newDirection = currentSort?.column === column && currentSort.direction === 'asc' ? 'desc' : 'asc';
                                        return { ...prev, [lot.id]: { column, direction: newDirection } };
                                      });
                                    }}
                                    numeroBL={livraison.numeroBL}
                                    setExpandedDates={setExpandedDates}
                                    onPrint={(lot, label) => {
                                      console.log('onPrint appelé (sans simulation) avec:', { lot, label });
                                      setPrintLot({ lot, label });
                                      setTimeout(() => {
                                        console.log('Lancement de window.print() (sans simulation)');
                                        window.print();
                                      }, 100);
                                    }}
                                  />
                                ))}
                                
                                {/* Section incident sous le dernier lot */}
                                <div className="mt-[10px] flex items-center justify-center gap-[12px]">
                                  <span className="text-[13px] font-['Roboto',sans-serif] text-[#343a40]">
                                    Signaler un incident non détecté:
                                  </span>
                                  <button className="px-[16px] py-[6px] bg-[#178466] hover:bg-[#146b54] text-white text-[13px] font-['Roboto',sans-serif] rounded-[6px] transition-colors flex items-center gap-[8px] cursor-pointer">
                                    <Redo size={16} />
                                    E-retour
                                  </button>
                                  <button className="px-[16px] py-[6px] bg-[#178466] hover:bg-[#146b54] text-white text-[13px] font-['Roboto',sans-serif] rounded-[6px] transition-colors flex items-center gap-[8px] cursor-pointer">
                                    <AtSign size={16} />
                                    E-demande
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            };

            return (
              <>
                {/* Livraisons du jour */}
                {todayLivraisons.length > 0 && (
                  <div className="mb-[16px]">
                    <div className="flex items-center gap-[12px] mb-[12px] px-[4px]">
                      <div className="flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-[#d4f4e8]">
                        <Truck className="w-[20px] h-[20px] text-[#178466]" />
                      </div>
                      <span className="text-[16px] font-['Roboto',sans-serif] text-[#178466]" style={{ fontWeight: 700 }}>
                        Livraison(s) du jour
                      </span>
                    </div>
                    
                    {/* Section: Rechercher dans un BL */}
                    <div className="mb-[16px]">
                      <ScanCaisseSection 
                        livraison={mockLivraisons[0]} 
                        showSimulation={showSimulation}
                        onNavigate={(date, blNumber, caisseId) => {
                          console.log('Navigation triggered:', { date, blNumber, caisseId });
                          setExpandedDates(prev => ({ ...prev, [blNumber]: true }));
                          setExpandedBL([blNumber]);
                          if (caisseId) {
                            setExpandedCaisseId(caisseId);
                          }
                          // Scroll to the element with increased delay to allow lot expansion
                          setTimeout(() => {
                            const element = caisseId 
                              ? document.getElementById(`caisse-${caisseId}`)
                              : document.getElementById(`bl-${blNumber}`);
                            console.log('Scrolling to element:', element);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                          }, caisseId ? 500 : 100);
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-[12px]">
                      {todayLivraisons.map((livraison) => renderLivraisonSection(livraison, true))}
                    </div>
                  </div>
                )}

                {/* Livraisons précédentes */}
                {previousLivraisons.length > 0 && (
                  <div>
                    <div className="flex items-center gap-[12px] mb-[12px] px-[4px]">
                      <div className="flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-[#f5f5f5]">
                        <Truck className="w-[20px] h-[20px] text-[#6c757d]" />
                      </div>
                      <span className="text-[16px] font-['Roboto',sans-serif] text-[#6c757d]" style={{ fontWeight: 700 }}>
                        Livraisons pr{"\u00e9"}c{"\u00e9"}dentes
                      </span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      {previousLivraisons.map((livraison) => renderLivraisonSection(livraison, false))}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </div>

        {/* Switcher for simulation */}
        <div className="fixed bottom-[24px] right-[24px] z-50 flex flex-col items-end gap-[12px]">
          {showSwitcher ? (
            <div className="bg-white rounded-[12px] border border-[#e0e0e0] shadow-lg overflow-hidden w-[220px] transition-all animate-in fade-in slide-in-from-bottom-2">
              <div className="px-[16px] py-[12px] bg-[#fafbfc] border-b border-[#e0e0e0] flex items-center justify-between">
                <span className="text-[12px] font-['Roboto',sans-serif] text-[#6c757d]" style={{ fontWeight: 600 }}>Mode d'affichage</span>
                <button 
                  onClick={() => setShowSwitcher(false)}
                  className="p-[4px] hover:bg-[#e9ecef] rounded-full transition-colors text-[#adb5bd] hover:text-[#6c757d]"
                  title="Masquer le simulateur"
                >
                  <X className="w-[14px] h-[14px]" />
                </button>
              </div>
              <div className="p-[8px]">
                <button
                  onClick={() => setShowSimulation(false)}
                  className={`w-full px-[14px] py-[8px] rounded-[6px] text-[13px] font-['Roboto',sans-serif] transition-all mb-[4px] flex items-center justify-between ${
                    !showSimulation 
                      ? 'bg-[#178466] text-white shadow-sm' 
                      : 'bg-transparent text-[#6c757d] hover:bg-[#f5f5f5]'
                  }`}
                  style={{ fontWeight: !showSimulation ? 600 : 400 }}
                >
                  <span>Sans simulation</span>
                  {!showSimulation && <CircleCheckBig className="w-[14px] h-[14px] text-white" />}
                </button>
                <button
                  onClick={() => setShowSimulation(true)}
                  className={`w-full px-[14px] py-[8px] rounded-[6px] text-[13px] font-['Roboto',sans-serif] transition-all flex items-center justify-between ${
                    showSimulation 
                      ? 'bg-[#178466] text-white shadow-sm' 
                      : 'bg-transparent text-[#6c757d] hover:bg-[#f5f5f5]'
                  }`}
                  style={{ fontWeight: showSimulation ? 600 : 400 }}
                >
                  <span>Avec simulation</span>
                  {showSimulation && <CircleCheckBig className="w-[14px] h-[14px] text-white" />}
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowSwitcher(true)}
              className="w-[44px] h-[44px] rounded-full bg-white border border-[#e0e0e0] shadow-md flex items-center justify-center text-[#6c757d] hover:bg-[#f8f9fa] hover:text-[#178466] transition-all group overflow-hidden"
              title="Afficher le simulateur"
            >
              <Zap className="w-[20px] h-[20px] group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>

      </div>
      
      {/* Composant d'impression global */}
      {printLot && (
        <div className="print-content">
          <PrintableLotContent lot={printLot.lot} lotLabel={printLot.label} />
        </div>
      )}
    </div>
  );
}
