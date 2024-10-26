import { PageAnimationWrapper } from "@/widget/animationwrapper";
import { Link } from "react-router-dom";

const Laws = () => {
  return (
    <PageAnimationWrapper>
      <ol className="px-4 flex flex-col gap-4">
        <Link to="1">
          <li className="text-xl md:text-2xl p-2 border-b">
            1. Konsullyk gullugy hakynda
          </li>
        </Link>
        <Link to="1">
          <li className="text-xl  md:text-2xl p-2 border-b">
            2. Adatdan daşary ýagdaýda halkara ynsanperwer kömegi hakynda
          </li>
        </Link>
        <Link to="1">
          <li className="text-xl md:text-2xl p-2 border-b">
            3. Bedenterbiýe we sport hakynda
          </li>
        </Link>
        <Link to="1">
          <li className="text-xl md:text-2xl p-2 border-b">
            4. Hukuk bozulmalarynyň öňüni almak hakynda
          </li>
        </Link>
        <Link to="1">
          <li className="text-xl md:text-2xl p-2 border-b">
            5. Elektron resminama, elektron resminama dolanyşygy we sanly
            hyzmatlar hakynda
          </li>
        </Link>
        <Link to="1">
          <li className="text-xl md:text-2xl p-2 border-b">
            6. Kiçi we orta telekeçiligi döwlet tarapyndan goldamak hakynda
          </li>
        </Link>

        <li className="text-xl md:text-2xl p-2 border-b">
          7. Daýhan birleşikleri hakynda (rejelenen görnüşi)
        </li>
        <li className="text-xl md:text-2xl p-2 border-b">
          8. Radiasiýa howpsuzlygy hakynda
        </li>
        <li className="text-xl md:text-2xl p-2 border-b">
          9. Ösümlikleriň karantini hakynda
        </li>
        <li className="text-xl md:text-2xl p-2 border-b">
          10. Aragatnaşyk hakynda
        </li>
        <li className="text-xl md:text-2xl p-2 border-b">
          11. Türkmenistanyň halkara şertnamalary hakynda
        </li>
        <li className="text-xl md:text-2xl p-2 border-b">
          12. Türkmenistanda adwokatura we adwokatlyk işi hakynda
        </li>
        <li className="text-xl md:text-2xl p-2 border-b">
          13. Türkmenistanyň Jenaýat kodeksini ulanmagyň tertibi hakynda
        </li>
        <li className="text-xl md:text-2xl p-2 border-b">
          14. Daşary ýurt döwletleriniň Türkmenistandaky diplomatik
          wekilhanalary hakynda
        </li>
        <li className="text-xl md:text-2xl p-2 border-b">
          15. Algoritmleriň, elektron hasaplaýjy maşynlar (EHM) üçin
          programmalaryň, maglumat bazalarynyň we integral mikroshemalaryň
          topologiýasynyň hukuk taýdan goralyşy hakynda
        </li>
      </ol>
    </PageAnimationWrapper>
  );
};

export default Laws;
