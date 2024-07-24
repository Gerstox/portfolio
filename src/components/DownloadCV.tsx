'use client';

import { jsPDF } from "jspdf";
import { useTranslations } from "next-intl";

export default function DownloadCV() {

    const cvName = "GersonPinedaCV";

    const t = useTranslations("DownloadCVComponent");

    function download() {
        const doc = new jsPDF('portrait', 'px', 'a4', false);
        doc.addImage(`/downloadable/${cvName}.png`, 'PNG', 0, 0, 417, 653);
        doc.save(`${cvName}.pdf`);
    }

  return (
    <div>
        <button className="w-full font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg dark:border-none dark:bg-teal-500 dark:hover:bg-teal-300 dark:text-gray-800  px-4 py-2 rounded-md " onClick={download}>{t('button.text')}</button>
    </div>
  );
}
