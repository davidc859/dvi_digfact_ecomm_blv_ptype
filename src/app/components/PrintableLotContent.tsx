import React from "react";
import { Snowflake } from "lucide-react";

// Types
type LotType = "normale" | "promis" | "automate" | "frigo" | "depannage" | "chronique" | "etradi" | "virtuose" | "completage";

interface Produit {
  id: string;
  refCommandeClient: string;
  cip: string;
  designation: string;
  separateur?: string;
  prixPharmacien: number;
  isFroid: boolean;
  isStup: boolean;
  isNonRemboursé?: boolean;
  canal?: string;
  quantiteAttendue: number;
  prixUnitaireAttendu: number;
  quantiteLivree: number;
  quantiteFacturee: number;
  prixUnitaireFacture: number;
  hasValidationError: boolean;
  hasAvoirEnCours?: boolean;
  errorMotif?: string;
  errorInClientFavor?: boolean;
  caracteristique?: string;
}

interface Caisse {
  id: string;
  code: string;
  numeroCaisse: number;
  numeroTicketAdresse?: string;
  numeroBL?: string;
  libelleMarque: string;
  status?: "verified" | "ko";
  produits: Produit[];
}

interface EO {
  id: string;
  code: string;
  numeroEO: number;
  numeroTicketAdresse?: string;
  numeroEtiquette?: string;
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

interface PrintableLotContentProps {
  lot: Lot;
  lotLabel: string;
}

export const PrintableLotContent: React.FC<PrintableLotContentProps> = ({ lot, lotLabel }) => {
  const getLotDisplayName = (label: string) => {
    const labelLower = label.toLowerCase();
    if (labelLower === "frigo") return "OCP - FROID";
    if (labelLower === "normale") return "OCP";
    if (labelLower === "automate") return "OCP - AUTOM";
    if (labelLower === "promis") return "OCP - PROMI";
    if (labelLower === "dépannage") return "OCP - DEPAN";
    if (labelLower === "chronique") return "OCP - CHRON";
    if (labelLower === "virtuose") return "VIRTUOSE - CDT ZENTIVA";
    if (labelLower === "complétage") return "COMPLETAGE";
    return label;
  };

  return (
    <div className="p-8 bg-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
        {/* En-tête du document */}
        <div className="mb-6 pb-4 border-b-2 border-gray-300">
          <h1 className="text-2xl font-bold mb-2">Bon de Livraison - {getLotDisplayName(lotLabel)}</h1>
          <p className="text-sm text-gray-600">Date d'impression : {new Date().toLocaleDateString('fr-FR')} à {new Date().toLocaleTimeString('fr-FR')}</p>
        </div>

        {/* Section Caisses */}
        {lot.caisses.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Caisses ({lot.caisses.length})</h2>
            
            {lot.caisses.map((caisse, index) => (
              <div key={caisse.id} className="mb-6 break-inside-avoid">
                {/* En-tête de caisse */}
                <div className="bg-gray-100 p-3 mb-2 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-base">Caisse #{caisse.numeroCaisse}</p>
                      <p className="text-sm text-gray-600">Code: {caisse.code}</p>
                    </div>
                    <div className="text-right text-sm">
                      {caisse.numeroTicketAdresse && (
                        <p className="text-gray-600">Ticket: {caisse.numeroTicketAdresse}</p>
                      )}
                      {caisse.numeroBL && (
                        <p className="text-gray-600">BL: {caisse.numeroBL}</p>
                      )}
                      <p className="text-gray-800 font-semibold">{caisse.libelleMarque}</p>
                    </div>
                  </div>
                </div>

                {/* Tableau des produits de la caisse */}
                <table className="w-full border-collapse text-xs mb-4">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Ref. Cde</th>
                      <th className="border border-gray-300 p-2 text-left">Canal</th>
                      <th className="border border-gray-300 p-2 text-left">Code produit</th>
                      <th className="border border-gray-300 p-2 text-left">Désignation</th>
                      <th className="border border-gray-300 p-2 text-center">Car.</th>
                      <th className="border border-gray-300 p-2 text-right">Qté Att.</th>
                      <th className="border border-gray-300 p-2 text-right">Qté Liv.</th>
                      <th className="border border-gray-300 p-2 text-right">Qté Fact.</th>
                      <th className="border border-gray-300 p-2 text-right">PU Att.</th>
                      <th className="border border-gray-300 p-2 text-right">PU Fact.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {caisse.produits.map((produit) => (
                      <tr key={produit.id} className={produit.hasValidationError ? 'bg-red-50' : ''}>
                        <td className="border border-gray-300 p-2">{produit.refCommandeClient}</td>
                        <td className="border border-gray-300 p-2">{produit.canal || '-'}</td>
                        <td className="border border-gray-300 p-2">{produit.cip}</td>
                        <td className="border border-gray-300 p-2">
                          <div className="flex items-center gap-1">
                            {produit.isFroid && <Snowflake className="w-3 h-3 inline text-blue-600 cursor-pointer" title="Froid" />}
                            {produit.isStup && <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-white border border-black text-black text-[8px] font-bold cursor-pointer" title="Stupéfiant">S</span>}
                            {produit.isNonRemboursé && <span className="inline-flex items-center justify-center px-1 h-4 rounded bg-white border border-black text-black text-[7px] font-bold cursor-pointer" title="Non remboursé">NR</span>}
                            {produit.prixPharmacien >= 50 && <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-white border border-black text-black text-[9px] font-bold cursor-pointer" title="Produit cher">€</span>}
                            {produit.designation}
                          </div>
                        </td>
                        <td className="border border-gray-300 p-2 text-center">{produit.separateur || '-'}</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.quantiteAttendue}</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.quantiteLivree}</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.quantiteFacturee}</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.prixUnitaireAttendu.toFixed(2)}€</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.prixUnitaireFacture.toFixed(2)}€</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}

        {/* Section Emballages d'origine */}
        {lot.eos && lot.eos.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Emballages d'origine ({lot.eos.length})</h2>
            
            {lot.eos.map((eo) => (
              <div key={eo.id} className="mb-6 break-inside-avoid">
                {/* En-tête EO */}
                <div className="bg-gray-100 p-3 mb-2 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-base">Emballage d'origine #{eo.numeroEO}</p>
                      <p className="text-sm text-gray-600">Code: {eo.code}</p>
                    </div>
                    <div className="text-right text-sm">
                      {eo.numeroTicketAdresse && (
                        <p className="text-gray-600">Ticket: {eo.numeroTicketAdresse}</p>
                      )}
                      {eo.numeroEtiquette && (
                        <p className="text-gray-600">Étiquette: {eo.numeroEtiquette}</p>
                      )}
                      <p className="text-gray-800 font-semibold">{eo.libelleMarque}</p>
                    </div>
                  </div>
                </div>

                {/* Tableau des produits de l'EO */}
                <table className="w-full border-collapse text-xs mb-4">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Ref. Cde</th>
                      <th className="border border-gray-300 p-2 text-left">Canal</th>
                      <th className="border border-gray-300 p-2 text-left">Code produit</th>
                      <th className="border border-gray-300 p-2 text-left">Désignation</th>
                      <th className="border border-gray-300 p-2 text-center">Car.</th>
                      <th className="border border-gray-300 p-2 text-right">Qté Att.</th>
                      <th className="border border-gray-300 p-2 text-right">Qté Liv.</th>
                      <th className="border border-gray-300 p-2 text-right">Qté Fact.</th>
                      <th className="border border-gray-300 p-2 text-right">PU Att.</th>
                      <th className="border border-gray-300 p-2 text-right">PU Fact.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eo.produits.map((produit) => (
                      <tr key={produit.id} className={produit.hasValidationError ? 'bg-red-50' : ''}>
                        <td className="border border-gray-300 p-2">{produit.refCommandeClient}</td>
                        <td className="border border-gray-300 p-2">{produit.canal || '-'}</td>
                        <td className="border border-gray-300 p-2">{produit.cip}</td>
                        <td className="border border-gray-300 p-2">
                          <div className="flex items-center gap-1">
                            {produit.isFroid && <Snowflake className="w-3 h-3 inline text-blue-600 cursor-pointer" title="Froid" />}
                            {produit.isStup && <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-white border border-black text-black text-[8px] font-bold cursor-pointer" title="Stupéfiant">S</span>}
                            {produit.isNonRemboursé && <span className="inline-flex items-center justify-center px-1 h-4 rounded bg-white border border-black text-black text-[7px] font-bold cursor-pointer" title="Non remboursé">NR</span>}
                            {produit.prixPharmacien >= 50 && <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-white border border-black text-black text-[9px] font-bold cursor-pointer" title="Produit cher">€</span>}
                            {produit.designation}
                          </div>
                        </td>
                        <td className="border border-gray-300 p-2 text-center">{produit.separateur || '-'}</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.quantiteAttendue}</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.quantiteLivree}</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.quantiteFacturee}</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.prixUnitaireAttendu.toFixed(2)}€</td>
                        <td className="border border-gray-300 p-2 text-right">{produit.prixUnitaireFacture.toFixed(2)}€</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}

        {/* Pied de page */}
        <div className="mt-8 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
          <p>Document généré automatiquement - Système de contrôle BLV</p>
        </div>
      </div>
    );
};