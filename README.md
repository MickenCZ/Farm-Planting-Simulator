# Farm planting simulator
Cíl projektu je vytvořit hru, ve které uživatel pěstuje na poli různou zeleninu. Je ale omezen financemi, musí vydělávat aby ti mohl dovolit lepší a lepší semínka. Dražší semínka mají větší výnos, ale rostou déle. 
Ceny, doba růstu, jména, obrázky semínek jsou teoreticky konfigurovatelná uživatelem v souboru config.js

## Jak hrát?
Aplikace je spusitelná přes live server bez jakýchkoliv závislostí.
V levé části hry je obchod se semínky, v pravé části je momentální množství peněz. Pomocí drag&drop přetahujte semínka do střední části obrazovky, kde je pole, a zelený indikátor bude ukazovat růst plodiny. Až bude celý indikátor zelený, změní se kurzor na pointer a půjde sklidit. V ten moment dostanete peníze.

V dolní části stránky je nastavení, kde člověk může vypnout animaci loga, vyplnit své jméno aby ho hra zdravila, a v druhé kartě save/load uložit hru do localstorage, stáhnout si stav hry jako json soubor nebo si hru načíst.

## Poznámky k implementaci
Na vytvoření validačních a interaktivních toastů při práci z formulářem je využita knihovna toastify.js, která je načtena přes CDN. CSS a JS jsou rozděleny do několika souborů. Vendor prefix je v souboru gamegrid.css na řádku 16, aplikace používá history API na taby, kromě již zmíněného drag&drop a localstorage používá ještě file api na načtení save souboru. Aplikace generuje SVG v javascriptu a v něm s ním také pracuje, v nastavení je použit javascript na vypsání online/offline stavu a video v html je spouštěno také přes javascript.

ve složce js/eventhandling jsou soubory na eventy, v config je konfigurace semínek, growthmeter je svg, farmloader je skript který se spustí jako první a načte všechno co je potřeba dělat přes JS, State je singleton který drží stav aplikace v jednom objektu, a Plant je třída která řeší funkcionalitu růstu a sklízení.