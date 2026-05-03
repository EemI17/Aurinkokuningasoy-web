import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, AlertTriangle, UserCheck, FileText, Lightbulb, Calculator, Briefcase } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import aurinkokuningasLogo from './assets/aurinkokuningasLogo.webp';
import rakennesuunnitteluBackground from './assets/rakennesuunnitteluBackground.webp';
import Footer from './components/Footer';
import SEO from './components/SEO';

const opasSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Opas rakennushankkeeseen",
  "description": "Kattava opas rakennusprojektin eri vaiheisiin suunnittelusta käyttöönottoon. Vinkkejä ja tietoa rakennushankkeen onnistumiseen.",
  "author": {
    "@type": "Organization",
    "name": "Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy"
  }
};

function OpasPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Use a small timeout to ensure the DOM is fully painted
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      <SEO
        title="Opas rakennushankkeeseen | Aurinkokuningasoy.fi"
        description="Kattava opas rakennusprojektin eri vaiheisiin. Lue asiantuntijan vinkit onnistuneeseen suunnitteluun, lupaprosesseihin ja koko hankkeen hallintaan."
        canonical="https://www.aurinkokuningasoy.fi/opas-rakennushankkeeseen"
        schema={opasSchema}
      />
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}
      >
        <nav className="pl-2 pr-2 sm:pl-3 sm:pr-3 py-4">
          <div className="flex w-full items-center gap-2 sm:gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 transition-opacity hover:opacity-80"
            >
              <img
                src={aurinkokuningasLogo}
                alt="Aurinkokuninkaan Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto flex-shrink-0 object-contain"
              />
              <span className="items-center text-xs font-semibold leading-tight sm:text-base md:text-lg sm:whitespace-nowrap" style={{ color: '#3E3326' }}>
                Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy
              </span>
            </Link>
            <Link
              to="/"
              className="ml-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#C9972E]/40 px-4 py-2.5 text-sm font-medium text-[#3E3326] transition-colors hover:bg-[#C9972E]/15 lg:px-6 lg:py-3 lg:text-base"
            >
              <ArrowLeft className="w-5 h-5" />
              Takaisin
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative pt-36 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 overflow-hidden" 
        style={{ 
          backgroundImage: `linear-gradient(160deg, rgba(33, 24, 16, 0.85), rgba(62, 51, 38, 0.7)), url(${rakennesuunnitteluBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderBottom: '4px solid #C9972E'
        }}
      >
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md">
            Opas rakennushankkeeseen
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto font-medium text-[#FDF3E0] drop-shadow-sm opacity-95">
            Kattava tietopaketti rakennusprojektin onnistuneeseen läpiviemiseen.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl space-y-16">

          {/* 1. Rakennusprojekti vaihe vaiheelta */}
          <div id="vaihe-vaiheelta" className="bg-white rounded-2xl shadow-sm border p-6 sm:p-10" style={{ borderColor: '#C9972E' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#3E3326' }}>
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" style={{ color: '#C9972E' }} />
              Rakennusprojekti vaihe vaiheelta
            </h2>
            <div className="prose prose-lg max-w-none text-[#3E3326] space-y-4">
              <p>Rakennusprojekti on monivaiheinen prosessi, joka alkaa ideasta ja päättyy valmiiseen rakennukseen. Huolellinen suunnittelu ja oikeat asiantuntijat tekevät hankkeesta sujuvamman ja auttavat välttämään kalliita virheitä.</p>
              <p>Tässä oppaassa käydään läpi rakennusprojektin tärkeimmät vaiheet.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Idea ja tarpeiden määrittely</h3>
              <p>Rakennusprojekti alkaa yleensä ajatuksesta tai tarpeesta. Se voi olla esimerkiksi omakotitalo, mökki, talousrakennus, autotalli, varasto tai laajempi rakennushanke.</p>
              <p>Tässä vaiheessa kannattaa pohtia ainakin seuraavia asioita:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>mihin tarkoitukseen rakennus tulee</li>
                <li>kuinka suuri rakennus tarvitaan</li>
                <li>millainen budjetti projektille on</li>
                <li>millainen aikataulu rakentamiselle on toivottava</li>
              </ul>
              <p>Selkeä lähtötilanne helpottaa suunnittelua ja auttaa tekemään järkeviä päätöksiä myöhemmissä vaiheissa.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Suunnittelu</h3>
              <p>Suunnitteluvaihe on yksi koko projektin tärkeimmistä vaiheista. Hyvä suunnittelu varmistaa, että rakennus toimii käytännössä ja täyttää kaikki viranomaisvaatimukset.</p>
              <p>Suunnittelussa määritellään esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>rakennuksen sijainti tontilla</li>
                <li>rakennuksen koko ja pohjaratkaisu</li>
                <li>rakenteet ja materiaalit</li>
                <li>ulkonäkö ja arkkitehtuuri</li>
              </ul>
              <p>Useimmissa rakennushankkeissa tarvitaan myös pääsuunnittelija, joka vastaa suunnittelun kokonaisuudesta ja varmistaa, että suunnitelmat muodostavat toimivan kokonaisuuden.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Rakennuslupa</h3>
              <p>Ennen rakentamisen aloittamista projektille täytyy yleensä hakea rakennuslupa. Lupahakemus tehdään kunnan rakennusvalvontaan.</p>
              <p>Rakennuslupaa varten tarvitaan esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>asemapiirros</li>
                <li>pääpiirustukset</li>
                <li>tarvittavat suunnitelmat</li>
                <li>tiedot hankkeeseen osallistuvista suunnittelijoista</li>
              </ul>
              <p>Lupaprosessin kesto vaihtelee kunnittain, mutta se kestää usein muutamasta viikosta muutamaan kuukauteen.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Rakentaminen</h3>
              <p>Kun rakennuslupa on myönnetty, varsinainen rakentaminen voi alkaa.</p>
              <p>Rakentamisvaiheeseen kuuluu muun muassa:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>maanrakennustyöt</li>
                <li>perustusten tekeminen</li>
                <li>runkorakenteet</li>
                <li>vesikatto ja ulkoverhous</li>
                <li>sisätyöt ja viimeistely</li>
              </ul>
              <p>Rakentamisen aikana työmaan etenemistä seurataan jatkuvasti ja varmistetaan, että rakentaminen etenee suunnitelmien mukaisesti.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Valvonta ja käyttöönotto</h3>
              <p>Rakennustyömaalla valvontaa tehdään koko rakentamisen ajan. Työmaan toteutuksesta ja määräysten mukaisesta rakentamisesta vastaa vastaava työnjohtaja, jonka tehtävänä on huolehtia, että työ tehdään suunnitelmien ja rakentamismääräysten mukaisesti.</p>
              <p>Rakennusprojektin loppuvaiheessa tehdään vielä tarvittavat tarkastukset ja varmistetaan, että rakennus täyttää kaikki vaatimukset ennen käyttöönottoa.</p>
              <p>Kun rakennus on valmis ja viranomainen on hyväksynyt sen käyttöön, projekti voidaan virallisesti päättää.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Sujuva rakennusprojekti alkaa hyvästä suunnittelusta</h3>
              <p>Hyvin suunniteltu projekti säästää aikaa, rahaa ja vaivaa. Kun suunnittelu ja projektin hallinta ovat kunnossa, rakentaminen etenee sujuvammin ja lopputulos vastaa paremmin odotuksia.</p>
              <p>Jos suunnittelet rakennushanketta ja tarvitset apua suunnittelussa tai projektin kokonaisuuden hallinnassa, autan mielelläni eteenpäin.</p>
            </div>
          </div>

          {/* 2. Tarvitseeko rakennusprojektiin pääsuunnittelijan? */}
          <div id="paasuunnittelija" className="bg-white rounded-2xl shadow-sm border p-6 sm:p-10" style={{ borderColor: '#C9972E' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#3E3326' }}>
              <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" style={{ color: '#C9972E' }} />
              Tarvitseeko rakennusprojektiin pääsuunnittelijan?
            </h2>
            <div className="prose prose-lg max-w-none text-[#3E3326] space-y-4">
              <p>Useimmissa rakennushankkeissa tarvitaan pääsuunnittelija, joka vastaa suunnittelun kokonaisuudesta. Pääsuunnittelijan tehtävä on varmistaa, että kaikki hankkeen suunnitelmat muodostavat toimivan ja määräysten mukaisen kokonaisuuden.</p>
              <p>Rakennusvalvonta edellyttää pääsuunnittelijaa lähes kaikissa rakennuslupaa vaativissa hankkeissa.</p>
              
              <h3 className="text-xl font-bold mt-8 mb-2">Mitä pääsuunnittelija tekee?</h3>
              <p>Pääsuunnittelija vastaa rakennushankkeen suunnittelun koordinoinnista ja siitä, että eri suunnittelijat työskentelevät yhtenäisen suunnitelman pohjalta.</p>
              <p>Pääsuunnittelijan tehtäviin kuuluu esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>vastata suunnittelun kokonaisuudesta</li>
                <li>huolehtia, että suunnitelmat täyttävät viranomaisvaatimukset</li>
                <li>koordinoida eri suunnittelijoiden työtä</li>
                <li>varmistaa, että suunnitelmat muodostavat toimivan kokonaisuuden</li>
                <li>osallistua rakennuslupaa varten tarvittavien asiakirjojen valmisteluun</li>
              </ul>
              <p>Pääsuunnittelija toimii usein myös yhteyshenkilönä rakennushankkeen ja viranomaisten välillä.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Milloin pääsuunnittelija tarvitaan?</h3>
              <p>Pääsuunnittelija tarvitaan lähes aina, kun hankkeelle haetaan rakennuslupaa.</p>
              <p>Tällaisia hankkeita voivat olla esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>omakotitalon rakentaminen</li>
                <li>mökin rakentaminen</li>
                <li>autotallin tai talousrakennuksen rakentaminen</li>
                <li>rakennuksen laajennus</li>
                <li>merkittävät muutostyöt olemassa olevaan rakennukseen</li>
              </ul>
              <p>Rakennusvalvonta hyväksyy pääsuunnittelijan osaksi lupaprosessia.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Miksi pääsuunnittelija on tärkeä?</h3>
              <p>Rakennushanke sisältää useita eri suunnitelmia, kuten arkkitehti-, rakenne- ja mahdollisesti taloteknisiä suunnitelmia. Ilman selkeää kokonaisvastuuta suunnitelmat voivat olla ristiriidassa keskenään.</p>
              <p>Pääsuunnittelija varmistaa, että:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>suunnitelmat ovat keskenään yhteensopivia</li>
                <li>hankkeessa noudatetaan rakentamismääräyksiä</li>
                <li>suunnittelu etenee hallitusti</li>
              </ul>
              <p>Hyvin hoidettu suunnittelu vähentää virheitä ja auttaa välttämään muutoksia rakennusvaiheessa.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Pääsuunnittelija osana sujuvaa rakennusprojektia</h3>
              <p>Kun pääsuunnittelija on mukana hankkeen alkuvaiheesta lähtien, suunnittelu etenee selkeästi ja rakennuslupaprosessi sujuu yleensä helpommin.</p>
              <p>Hyvä suunnittelun ohjaus auttaa varmistamaan, että projekti pysyy aikataulussa ja että lopputulos vastaa suunniteltua.</p>
              <p>Jos suunnittelet rakennushanketta ja tarvitset pääsuunnittelijan, autan mielelläni hankkeen suunnittelussa ja kokonaisuuden hallinnassa.</p>
            </div>
          </div>

          {/* 3. Rakennuslupa */}
          <div id="rakennuslupa" className="bg-white rounded-2xl shadow-sm border p-6 sm:p-10" style={{ borderColor: '#C9972E' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#3E3326' }}>
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" style={{ color: '#C9972E' }} />
              Rakennuslupa, milloin sitä tarvitaan ja miten se haetaan
            </h2>
            <div className="prose prose-lg max-w-none text-[#3E3326] space-y-4">
              <p>Useimmat rakennushankkeet vaativat rakennusluvan ennen rakentamisen aloittamista. Rakennuslupa haetaan kunnan rakennusvalvonnasta, ja sen tarkoituksena on varmistaa, että rakentaminen täyttää maankäyttö- ja rakennuslain sekä paikalliset kaavamääräykset.</p>
              <p>Rakennuslupa tarvitaan ennen kuin varsinainen rakentaminen voidaan aloittaa.</p>
              
              <h3 className="text-xl font-bold mt-8 mb-2">Milloin rakennuslupa tarvitaan?</h3>
              <p>Rakennuslupa tarvitaan yleensä silloin, kun rakennetaan uusi rakennus tai tehdään merkittäviä muutoksia olemassa olevaan rakennukseen.</p>
              <p>Tyypillisiä rakennuslupaa vaativia hankkeita ovat esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>omakotitalon rakentaminen</li>
                <li>mökin rakentaminen</li>
                <li>autotallin tai talousrakennuksen rakentaminen</li>
                <li>rakennuksen laajennus</li>
                <li>käyttötarkoituksen muutokset</li>
                <li>suuremmat korjaus- tai muutostyöt</li>
              </ul>
              <p>Joissakin pienemmissä hankkeissa voidaan tarvita toimenpidelupa tai pelkkä ilmoitus, mutta tämä riippuu kunnasta ja hankkeen laajuudesta.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Mitä rakennuslupaa varten tarvitaan?</h3>
              <p>Rakennuslupaa varten tarvitaan useita suunnitelmia ja asiakirjoja, joiden avulla viranomainen voi arvioida hankkeen toteuttamiskelpoisuuden.</p>
              <p>Rakennuslupahakemukseen kuuluu yleensä esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>asemapiirros</li>
                <li>pääpiirustukset (pohjat, leikkaukset ja julkisivut)</li>
                <li>selvitys rakennuspaikasta</li>
                <li>tiedot hankkeen suunnittelijoista</li>
                <li>mahdolliset rakenne- ja muut tekniset suunnitelmat</li>
              </ul>
              <p>Rakennuslupaa varten tarvittavat suunnitelmat laatii yleensä rakennussuunnittelija tai pääsuunnittelija.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Rakennuslupaprosessi</h3>
              <p>Nykyisin rakennuslupa haetaan useimmissa kunnissa sähköisen järjestelmän kautta. Lupahakemus käsitellään kunnan rakennusvalvonnassa.</p>
              <p>Prosessi etenee yleensä seuraavasti:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Suunnitelmien laatiminen</li>
                <li>Rakennuslupahakemuksen jättäminen</li>
                <li>Lupahakemuksen käsittely rakennusvalvonnassa</li>
                <li>Mahdolliset täydennykset tai lisäselvitykset</li>
                <li>Rakennusluvan myöntäminen</li>
              </ul>
              <p>Lupakäsittelyn kesto vaihtelee kunnittain, mutta se kestää usein muutamasta viikosta muutamaan kuukauteen.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Rakentamisen aloittaminen</h3>
              <p>Rakentaminen voidaan aloittaa vasta, kun rakennuslupa on myönnetty ja tarvittavat aloitusedellytykset täyttyvät. Usein ennen rakentamisen aloittamista järjestetään myös aloituskokous rakennusvalvonnan kanssa.</p>
              <p>Rakennusluvan myöntämisen jälkeen rakentaminen voi edetä suunnitelmien mukaisesti.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Hyvin valmisteltu lupahakemus nopeuttaa projektia</h3>
              <p>Huolellisesti laaditut suunnitelmat ja oikein valmisteltu lupahakemus helpottavat rakennuslupaprosessia ja nopeuttavat hankkeen käynnistymistä.</p>
              <p>Kun suunnittelu tehdään alusta asti oikein, myös lupakäsittely etenee yleensä sujuvammin.</p>
              <p>Jos suunnittelet rakennushanketta ja tarvitset apua suunnitelmien laatimisessa tai rakennuslupaprosessissa, autan mielelläni eteenpäin.</p>
            </div>
          </div>

          {/* 4. Paljonko rakennussuunnittelu maksaa? */}
          <div id="hinta" className="bg-white rounded-2xl shadow-sm border p-6 sm:p-10" style={{ borderColor: '#C9972E' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#3E3326' }}>
              <Calculator className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" style={{ color: '#C9972E' }} />
              Paljonko rakennussuunnittelu maksaa?
            </h2>
            <div className="prose prose-lg max-w-none text-[#3E3326] space-y-4">
              <p>Rakennussuunnittelun hinta vaihtelee hankkeen koon, vaativuuden ja tarvittavien suunnitelmien mukaan. Jokainen rakennusprojekti on erilainen, joten tarkka hinta määräytyy yleensä projektikohtaisesti.</p>
              <p>Hyvin tehty suunnittelu on kuitenkin yksi tärkeimmistä tekijöistä onnistuneessa rakennushankkeessa. Huolellinen suunnittelu auttaa välttämään virheitä rakentamisvaiheessa ja voi säästää merkittävästi kustannuksia koko projektin aikana.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Mistä suunnittelun hinta muodostuu?</h3>
              <p>Rakennussuunnittelun kustannuksiin vaikuttavat useat tekijät. Hintaan vaikuttavat esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>rakennuksen koko</li>
                <li>rakennuksen käyttötarkoitus</li>
                <li>tontin ominaisuudet</li>
                <li>suunnitelmien laajuus</li>
                <li>hankkeen tekninen vaativuus</li>
              </ul>
              <p>Yksinkertainen talousrakennus vaatii yleensä vähemmän suunnittelua kuin esimerkiksi omakotitalo tai laajempi rakennushanke.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Mitä suunnitteluun yleensä kuuluu?</h3>
              <p>Rakennushankkeen suunnitteluun voi kuulua useita eri osa-alueita. Tyypillisesti suunnitteluun sisältyy esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>rakennuksen luonnossuunnittelu</li>
                <li>pääpiirustusten laatiminen</li>
                <li>asemapiirros</li>
                <li>rakennuslupaa varten tarvittavat suunnitelmat</li>
                <li>suunnittelun koordinointi</li>
              </ul>
              <p>Joissakin hankkeissa tarvitaan lisäksi rakenne- tai taloteknisiä suunnitelmia.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Hyvä suunnittelu säästää rahaa</h3>
              <p>Rakennusprojektissa suunnittelu on usein pieni osa kokonaiskustannuksista, mutta sen vaikutus koko hankkeen onnistumiseen on suuri.</p>
              <p>Hyvin suunniteltu projekti auttaa:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>välttämään rakentamisen aikaisia muutoksia</li>
                <li>parantamaan rakennuksen toimivuutta</li>
                <li>pitämään kustannukset paremmin hallinnassa</li>
              </ul>
              <p>Suunnitteluun panostaminen kannattaa lähes aina, sillä monet rakennusprojektien ongelmat johtuvat puutteellisesta suunnittelusta.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Suunnittelu kannattaa aloittaa ajoissa</h3>
              <p>Suunnittelun aloittaminen riittävän aikaisin helpottaa koko rakennusprojektin etenemistä. Kun suunnitelmat ovat kunnossa ennen rakennusluvan hakemista, myös lupaprosessi sujuu yleensä nopeammin.</p>
              <p>Jos suunnittelet rakennushanketta ja tarvitset apua suunnittelussa tai rakennuslupaa varten tarvittavien piirustusten laatimisessa, autan mielelläni eteenpäin.</p>
            </div>
          </div>

          {/* 5. Yleisimmät virheet */}
          <div id="yleisimmat-virheet" className="bg-white rounded-2xl shadow-sm border p-6 sm:p-10" style={{ borderColor: '#B11F1F' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#B11F1F' }}>
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
              Yleisimmät virheet rakennushankkeessa
            </h2>
            <div className="prose prose-lg max-w-none text-[#3E3326] space-y-4">
              <p>Rakennusprojekti on monelle elämän suurimpia investointeja. Huolellisella suunnittelulla ja oikeilla asiantuntijoilla monet ongelmat voidaan välttää jo ennen rakentamisen aloittamista.</p>
              <p>Monet rakennushankkeiden haasteet johtuvat samoista yleisistä virheistä. Kun nämä tunnistaa etukäteen, projektin toteutus sujuu yleensä huomattavasti helpommin.</p>
              
              <h3 className="text-xl font-bold mt-8 mb-2 text-[#B11F1F]">Suunnitteluun ei varata riittävästi aikaa</h3>
              <p>Yksi yleisimmistä virheistä on liian kiireinen suunnitteluvaihe. Rakentaminen halutaan usein aloittaa nopeasti, mutta puutteellinen suunnittelu voi aiheuttaa ongelmia myöhemmin.</p>
              <p>Hyvä suunnittelu auttaa:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>välttämään muutoksia rakentamisen aikana</li>
                <li>hallitsemaan kustannuksia</li>
                <li>varmistamaan rakennuksen toimivuuden</li>
              </ul>
              <p>Kun suunnittelu tehdään huolellisesti alusta lähtien, myös rakennuslupaprosessi sujuu yleensä helpommin.</p>

              <h3 className="text-xl font-bold mt-8 mb-2 text-[#B11F1F]">Budjetti arvioidaan liian optimistisesti</h3>
              <p>Rakennushankkeen kokonaiskustannukset voivat yllättää, jos budjettia ei ole mietitty realistisesti.</p>
              <p>Budjetissa kannattaa huomioida esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>suunnittelukustannukset</li>
                <li>rakennusmateriaalit</li>
                <li>työvoima</li>
                <li>mahdolliset lisätyöt</li>
              </ul>
              <p>Pieni varaus odottamattomia kuluja varten auttaa pitämään projektin hallinnassa.</p>

              <h3 className="text-xl font-bold mt-8 mb-2 text-[#B11F1F]">Tontin ominaisuuksia ei huomioida riittävästi</h3>
              <p>Tontin sijainti ja maaperä vaikuttavat merkittävästi rakennushankkeeseen. Esimerkiksi maaston muodot, maaperän laatu ja rakennuspaikan sijainti tontilla voivat vaikuttaa sekä suunnitteluun että kustannuksiin.</p>
              <p>Tontin ominaisuudet kannattaa huomioida jo suunnittelun alkuvaiheessa.</p>

              <h3 className="text-xl font-bold mt-8 mb-2 text-[#B11F1F]">Suunnitelmat eivät ole riittävän selkeitä</h3>
              <p>Rakentaminen perustuu suunnitelmiin. Jos suunnitelmat ovat puutteellisia tai epäselviä, se voi aiheuttaa väärinkäsityksiä työmaalla.</p>
              <p>Selkeät ja tarkat suunnitelmat helpottavat:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>urakoitsijoiden työtä</li>
                <li>kustannusten hallintaa</li>
                <li>rakentamisen sujuvaa etenemistä</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-2 text-[#B11F1F]">Asiantuntijoita ei hyödynnetä riittävästi</h3>
              <p>Rakennushanke sisältää useita eri vaiheita, joissa asiantuntijoiden osaaminen on tärkeää. Suunnittelijat, työnjohto ja muut ammattilaiset auttavat varmistamaan, että projekti etenee oikein.</p>
              <p>Oikeiden asiantuntijoiden mukanaolo auttaa välttämään monia ongelmia jo etukäteen.</p>

              <h3 className="text-xl font-bold mt-8 mb-2 text-[#B11F1F]">Huolellinen suunnittelu ehkäisee ongelmia</h3>
              <p>Suurin osa rakennushankkeiden ongelmista voidaan välttää hyvällä suunnittelulla ja selkeällä projektin hallinnalla.</p>
              <p>Kun suunnittelu tehdään huolellisesti ja projektiin osallistuu oikeat asiantuntijat, rakentaminen etenee yleensä huomattavasti sujuvammin.</p>
              <p>Jos suunnittelet rakennushanketta ja tarvitset apua suunnittelussa tai projektin kokonaisuuden hallinnassa, autan mielelläni eteenpäin.</p>
            </div>
          </div>

          {/* 6. Mitä rakennuttajapalvelu tarkoittaa? */}
          <div id="rakennuttajapalvelu" className="bg-white rounded-2xl shadow-sm border p-6 sm:p-10" style={{ borderColor: '#C9972E' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#3E3326' }}>
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" style={{ color: '#C9972E' }} />
              Mitä rakennuttajapalvelu tarkoittaa?
            </h2>
            <div className="prose prose-lg max-w-none text-[#3E3326] space-y-4">
              <p>Rakennuttajapalvelu tarkoittaa sitä, että rakennushankkeen suunnittelu, kilpailutus ja toteutuksen ohjaus annetaan ammattilaisen hoidettavaksi. Rakennuttaja toimii hankkeessa tilaajan edustajana ja huolehtii, että projekti etenee suunnitellusti.</p>
              <p>Rakennuttajapalvelu helpottaa erityisesti silloin, kun oma kokemus rakentamisesta on vähäistä tai aikaa projektin hallintaan ei ole.</p>
              
              <h3 className="text-xl font-bold mt-8 mb-2">Mitä rakennuttaja tekee?</h3>
              <p>Rakennuttajan tehtävänä on huolehtia koko projektin sujuvasta etenemisestä alusta loppuun.</p>
              <p>Rakennuttajapalveluun voi kuulua esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>hankkeen suunnittelun ohjaus</li>
                <li>eri suunnittelijoiden koordinointi</li>
                <li>urakoitsijoiden kilpailutus</li>
                <li>kustannusten seuranta</li>
                <li>aikataulun hallinta</li>
                <li>työmaan etenemisen seuranta</li>
              </ul>
              <p>Rakennuttaja toimii tilaajan tukena koko projektin ajan.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Milloin rakennuttajapalvelu kannattaa?</h3>
              <p>Rakennuttajapalvelu on hyödyllinen monenlaisissa hankkeissa, mutta erityisesti silloin kun:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>kyseessä on laajempi rakennusprojekti</li>
                <li>projekti sisältää useita eri toimijoita</li>
                <li>aikataulu tai budjetti on tarkka</li>
                <li>oma kokemus rakentamisesta on vähäistä</li>
              </ul>
              <p>Rakennuttaja auttaa pitämään kokonaisuuden hallinnassa ja varmistaa, että projekti etenee suunnitelmien mukaisesti.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Mitä hyötyä rakennuttajasta on?</h3>
              <p>Rakennuttajapalvelu tuo projektiin selkeyttä ja vähentää riskejä.</p>
              <p>Hyötyjä ovat esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>parempi kustannusten hallinta</li>
                <li>sujuvampi projektin eteneminen</li>
                <li>vähemmän virheitä ja muutostöitä</li>
                <li>selkeä vastuunjako projektissa</li>
              </ul>
              <p>Rakennuttaja toimii asiakkaan edunvalvojana koko hankkeen ajan.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Rakennuttaja osana onnistunutta projektia</h3>
              <p>Kun rakennuttaja on mukana hankkeen alkuvaiheesta lähtien, projekti etenee yleensä hallitummin ja lopputulos vastaa paremmin suunnitelmia.</p>
              <p>Rakennuttajapalvelu vapauttaa asiakkaan aikaa ja vähentää stressiä rakennusprojektin aikana.</p>
              <p>Jos suunnittelet rakennushanketta ja tarvitset apua projektin hallinnassa, autan mielelläni rakennuttamiseen liittyvissä asioissa.</p>
            </div>
          </div>

          {/* 7. Aloitus */}
          <div id="aloitus" className="bg-white rounded-2xl shadow-sm border p-6 sm:p-10" style={{ borderColor: '#C9972E' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#3E3326' }}>
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" style={{ color: '#C9972E' }} />
              Miten valmistautua ensimmäiseen suunnittelutapaamiseen
            </h2>
            <div className="prose prose-lg max-w-none text-[#3E3326] space-y-4">
              <p>Ensimmäinen suunnittelutapaaminen on tärkeä askel rakennusprojektin käynnistämisessä. Hyvin valmistautumalla saat tapaamisesta enemmän irti ja projekti pääsee sujuvasti liikkeelle.</p>
              <p>Tapaamisen tarkoituksena on käydä läpi hankkeen lähtökohdat, toiveet ja mahdolliset reunaehdot.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Mitä tietoja kannattaa miettiä etukäteen?</h3>
              <p>Ennen tapaamista on hyvä pohtia muutamia perusasioita. Kaiken ei tarvitse olla valmista, mutta suunta helpottaa suunnittelun aloittamista.</p>
              <p>Hyödyllisiä asioita ovat esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>mitä ollaan rakentamassa (omakotitalo, mökki, autotalli jne.)</li>
                <li>rakennuksen koko ja käyttötarkoitus</li>
                <li>alustava budjetti</li>
                <li>toivottu aikataulu</li>
                <li>tontin sijainti</li>
              </ul>
              <p>Mitä selkeämpi lähtötilanne on, sitä helpompi suunnittelua on viedä eteenpäin.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Tonttiin liittyvät tiedot</h3>
              <p>Jos rakennuspaikka on jo tiedossa, tonttiin liittyvät tiedot auttavat suunnittelua merkittävästi.</p>
              <p>Hyödyllisiä tietoja voivat olla esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>tontin sijainti ja osoite</li>
                <li>asemakaava tai kaavamääräykset</li>
                <li>mahdolliset kuvat tai mittaukset tontista</li>
              </ul>
              <p>Jos kaikkia tietoja ei vielä ole, ne voidaan selvittää suunnittelun aikana.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Ideat ja toiveet</h3>
              <p>Tapaamiseen kannattaa tuoda mukaan myös omia ideoita ja toiveita.</p>
              <p>Näitä voivat olla esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>luonnoksia tai kuvia</li>
                <li>esimerkkejä rakennuksista, joista pidät</li>
                <li>toiveita tilaratkaisuista</li>
                <li>erityiset tarpeet tai vaatimukset</li>
              </ul>
              <p>Näiden avulla suunnittelusta saadaan paremmin juuri sinun tarpeisiisi sopiva.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Mitä tapaamisessa tapahtuu?</h3>
              <p>Suunnittelutapaamisessa käydään läpi hankkeen kokonaisuus ja sovitaan, miten projektia lähdetään viemään eteenpäin.</p>
              <p>Tapaamisessa voidaan esimerkiksi:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>arvioida hankkeen toteutettavuutta</li>
                <li>keskustella eri vaihtoehdoista</li>
                <li>käydä läpi tarvittavat suunnitelmat</li>
                <li>sopia seuraavista vaiheista</li>
              </ul>
              <p>Tavoitteena on saada selkeä käsitys projektin etenemisestä.</p>

              <h3 className="text-xl font-bold mt-8 mb-2">Hyvä alku helpottaa koko projektia</h3>
              <p>Kun projekti käynnistetään huolellisesti, myös sen toteutus sujuu yleensä paremmin. Ensimmäinen tapaaminen auttaa luomaan selkeän pohjan koko rakennushankkeelle.</p>
              <p>Jos suunnittelet rakennusprojektia, ota yhteyttä ja sovitaan aika suunnittelutapaamiselle – käydään yhdessä läpi hankkeesi ja seuraavat askeleet.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#3E3326' }}>
            Aloita oma projektisi asiantuntijan kanssa
          </h2>
          <p className="text-base sm:text-lg mb-8" style={{ color: '#3E3326', opacity: 0.9 }}>
            Yhdessä teemme unelmastasi totta – vaivattomasti ja laadukkaasti alusta loppuun.
          </p>
          <Link
            to="/"
            state={{ scrollTo: 'contact' }}
            className="inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-8 sm:py-4 sm:text-lg"
            style={{ backgroundColor: '#C9972E' }}
          >
            Ota yhteyttä
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OpasPage;
