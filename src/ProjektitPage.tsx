import { ArrowLeft, Calendar, MapPin, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import aurinkokuningasLogo from './assets/aurinkokuningasLogo.webp';
import Footer from './components/Footer';
import SEO from './components/SEO';

const projektitSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Referenssit ja Projektit",
  "description": "Tutustu toteutettuihin arkkitehti- ja rakennesuunnitteluprojekteihimme Mäntässä, Vilppulassa ja lähialueilla.",
  "url": "https://www.aurinkokuningasoy.fi/projektit"
};

function ProjektitPage() {
  const projects = [
    {
      title: 'Autotalli laajennus',
      category: 'Talousrakennus',
      area: '88 m²',
      location: 'Mänttä',
      year: '2022',
      description:
        'Olemassa oleva autokatos muutetaan autotalliksi/autosuojaksi. Lisäksi rakennetaan pyöräkatos talousrakennuksen eteläpuolelle.',
      features: [
        'Toimiva ja käytännöllinen ratkaisu arjen tarpeisiin',
        'Suojaisa tila autoille ja polkupyörille',
        'Energiatehokas ja kestävä rakenne',
        'Yhdistyy harmonisesti olemassa olevaan talousrakennukseen'
      ],
      image: '/autotalli.webp'
    },
    {
      title: 'Venevaja',
      category: 'Talousrakennus',
      area: '29 m²',
      location: 'Mänttä',
      year: '2022',
      description:
        'Venevaja tarjoaa suojaisan ja käytännöllisen tilan veneille ympäri vuoden. Rakennus suunnitellaan kestämään vaihtelevia sääolosuhteita ja sijoitetaan lähelle rantaa, jotta veneiden käsittely ja vesillelasku on mahdollisimman helppoa. Venevaja yhdistää toimivuuden ja perinteisen rantamiljöön sopivalla tavalla.',
      features: [
        'Suojaisa ja toimiva säilytystila veneille',
        'Pitkäikäinen ja sääolosuhteita hyvin kestävä rakenne',
        'Helppo pääsy vesistöön',
        'Käytännöllinen pohjaratkaisu',
        'Yhdistyy ympäristöön harmonisesti'
      ],
      image: '/venevaja.webp'
    },
    {
      title: 'Varasto',
      category: 'Talousrakennus',
      area: '32 m²',
      location: 'Ylä-Kolkki',
      year: '2023',
      description:
        'Rakennetaan uusi talousrakennus varastokäyttöön. Rakennus tarjoaa käytännöllisen ja suojaisan säilytystilan pihapiirin tarpeisiin sekä täydentää kokonaisuutta toimivalla tavalla.',
      features: [
        'Tilava ja helposti muunneltava varastotila',
        'Pitkäikäinen ja huoltovapaa rakenne',
        'Käytännöllinen sijainti pihapiirissä',
        'Selkeä ja toimiva pohjaratkaisu',
        'Sopii yhteen ympäröivän rakennuskannan ja maiseman kanssa'
      ]
    },
    {
      title: 'Konesuoja',
      category: 'Talousrakennus',
      area: '147 m²',
      location: 'Vilppula',
      year: '2025',
      description:
        'Rakennetaan avoin konesuoja maatalouskoneiden ja ajoneuvojen säilytystä varten. Rakennus tarjoaa suojan sateelta ja auringolta, mutta pysyy ilmavana ja helposti käytettävänä vuoden ympäri. Konesuoja suunnitellaan tukemaan tehokasta käyttöä ja sulautumaan harmonisesti ympäröivään pihapiiriin.',
      features: [
        'Avoin ja käytännöllinen suoja koneille ja laitteille',
        'Säältä suojaava mutta hyvin tuulettuva rakenne',
        'Pitkäikäinen ja huoltovapaa toteutus',
        'Helppo pääsy ajoneuvoille ja työkoneille',
        'Yhdistyy tyyliltään ympäröivään rakennuskantaan'
      ]
    },
    {
      title: 'Konesuoja',
      category: 'Talousrakennus',
      area: '219 m²',
      location: 'Vilppula',
      year: '2025',
      description:
        'Laajempi konesuoja tarjoaa reilusti tilaa raskaalle kalustolle ja työkoneille. Rakennus on avonainen ja käytännöllinen ratkaisu, joka suojaa kaluston säältä ja helpottaa päivittäistä käyttöä. Kestävät rakenteet ja selkeä muotokieli tekevät siitä toimivan ja huoltovapaan osan pihapiiriä.',
      features: [
        'Tilava ja avonainen rakenne raskaalle kalustolle',
        'Suojaa sateelta ja auringolta, säilyttäen hyvän ilmanvaihdon',
        'Vankka ja pitkäikäinen rakenne',
        'Helppo liikkua ja käsitellä koneita',
        'Sopii luontevasti osaksi ympäröivää maisemaa ja rakennuksia'
      ]
    },
    {
      title: 'Autotalli Mänttä',
      category: 'Talousrakennus',
      area: '67 m²',
      location: 'Mänttä',
      year: '2025–2026',
      description:
        'Suunnittelimme asiakkaalle käytännöllisen ja monipuolisen autotallin rakennuslupaa varten Tammikankaan alueelle Mäntässä. Projekti sisältää kokonaisvaltaisen suunnittelun asemapiirroksesta pohjakuviin, julkisivuihin ja rakennusvalvontaan toimitettaviin lupakuviin sekä työmaavalvonnan rakentamisen aikana. Tavoitteena on luoda toimiva, pitkäikäinen ja ympäristöön sopiva talousrakennus, joka palvelee sekä ajoneuvosuojana että varasto- ja harrastetilana.',
      features: [
        'Rakennuslupasuunnittelu ja viranomaisasiat kokonaispalveluna',
        '67 m² toimiva autotalli / talousrakennus',
        'Asemapiirros, pohjapiirustus, julkisivut ja leikkauskuvat',
        'Työmaavalvonta ja rakennuttajan tuki',
        'Suunniteltu asiakkaan tarpeisiin ja tontin ominaisuuksiin',
        'Rakentamisen arvioitu aloitus keväällä 2026'
      ]
    },
    {
      title: 'Vapaa-ajan mökin muutoslupa',
      category: 'Vapaa-ajan rakennus',
      area: 'Muutos- ja kehityssuunnittelu',
      location: 'Makkoskylä',
      year: '2025',
      description:
        'Toteutimme vapaa-ajan rakennuksen kokonaisvaltaisen muutoslupaprojektin Makkoskylässä, jossa päivitettiin mökin pohjakuvat, laadittiin asemapiirros sekä suunniteltiin toimiva harmaavesijärjestelmä viranomaisvaatimusten mukaisesti. Tavoitteena oli modernisoida vapaa-ajan kohde käytännöllisemmäksi ja määräysten mukaiseksi säilyttäen samalla rakennuksen käyttömukavuus ja ympäristöön sopivuus.',
      features: [
        'Mökin pohjakuvien päivitys ja rakennuksen kehityssuunnittelu',
        'Asemapiirros',
        'Harmaavesijärjestelmän suunnittelu',
        'Työmaavalvonta ja rakennuttajan tuki',
        'Käytännöllinen ja määräystenmukainen ratkaisu vapaa-ajan käyttöön'
      ]
    },
    {
      title: 'Sauna / Tupa / Autotalli – Ruovesi',
      category: 'Talousrakennus',
      area: 'n. 80–90 m²',
      location: 'Ruovesi',
      year: '2026',
      description:
        'Käynnissä oleva monipuolinen sauna / tupa / autotalli -kokonaisuus Ruovedellä suunnitellaan asiakkaalle luonnosvaiheessa urakkalaskentaa varten. Projektin ensimmäinen vaihe keskittyy toimivan pohjaratkaisun, julkisivujen ja rakenneleikkausten suunnitteluun, jotta tilaaja voi kilpailuttaa urakoitsijat ja materiaalitoimittajat tehokkaasti ennen varsinaista rakennuslupa- ja toteutusvaihetta. Tavoitteena on yhdistää vapaa-ajan käyttö, käytännölliset tilaratkaisut ja pitkäikäinen rakennuskokonaisuus yhdeksi ympäristöön sopivaksi talousrakennukseksi.',
      features: [
        'Vaihe 1: luonnossuunnittelu urakkalaskentaa varten',
        'Sauna, tupa ja autotalli samassa rakennuskokonaisuudessa',
        'Arvioitu koko noin 80–90 m²',
        'Pohjakuva, julkisivut ja rakenneleikkaus',
        'Suunniteltu tarjouspyyntöjen ja kustannusvertailun tueksi',
        'Jatkovaihe mahdollistaa rakennuslupa-, pääsuunnittelu- ja valvontapalvelut',
        'Käytännöllinen ja asiakkaan tarpeisiin räätälöity kokonaisuus'
      ]
    },
    {
      title: 'Tallirakennus 135 m² – Halli',
      category: 'Talousrakennus',
      area: '135 m²',
      location: 'Halli',
      year: '2026',
      description:
        'Suunnitteilla oleva 135 m² tallirakennus Hallissa tarjoaa asiakkaalle laajan ja käytännöllisen ratkaisun monipuoliseen käyttöön. Projekti kattaa kokonaisvaltaisesti rakennuslupakuvat, pääsuunnittelun sekä vastaavan työnjohdon, mikä mahdollistaa sujuvan etenemisen suunnittelusta lupaprosessin kautta toteutukseen. Tavoitteena on luoda toimiva, pitkäikäinen ja asiakkaan tarpeisiin räätälöity tallirakennus, jossa yhdistyvät tehokas tilankäyttö, rakennusmääräysten mukaisuus ja ammattimainen projektinhallinta.',
      features: [
        '135 m² tallirakennuksen kokonaisvaltainen suunnittelu',
        'Rakennuslupakuvat ja viranomaisprosessin koordinointi',
        'Pääsuunnittelijan tehtävät (PS)',
        'Vastaavan työnjohtajan palvelut (VTJ)',
        'Rakennuksen sijoittuminen tontille ja toiminnallinen suunnittelu',
        'Sopii monipuoliseen varasto-, harraste- tai työtilakäyttöön',
        'Suunniteltu tehokkaaseen toteutukseen ja hallittuun rakennusprosessiin'
      ]
    },
    {
      title: 'Autotallin muutos asuinhuoneeksi – Ylöjärvi',
      category: 'Muutossuunnittelu / Asuinrakennus',
      area: 'n. 15 m² käyttötarkoituksen muutos',
      location: 'Ylöjärvi',
      year: '2026',
      description:
        'Tässä projektissa olemassa oleva autotalli muutetaan toimivaksi ja määräystenmukaiseksi asuinhuoneeksi osaksi kodin nykyisiä tiloja. Suunnittelu kattaa rakennuslupaa varten tarvittavat piirustukset, tilaratkaisun, julkisivumuutokset sekä ilmanvaihdon liittämisen olemassa olevaan LTO-järjestelmään. Kokonaisuus sisältää myös Lupapisteen hoitamisen, viranomaisyhteydet ja projektin käytännön neuvonnan, mikä tekee käyttötarkoituksen muutoksesta asiakkaalle sujuvan ja hallitun prosessin.',
      features: [
        'Autotallin muuttaminen asuinhuoneeksi',
        'Uusi noin 15 m² huonetila osaksi nykyistä asuntoa',
        'Pohjapiirros, asemapiirros, julkisivut ja leikkauskuvat',
        'Autotallin oven korvaaminen ikkunaratkaisulla',
        'Ilmanvaihdon suunnittelu olemassa olevaan LTO-järjestelmään',
        'Lupapisteen ja rakennuslupaprosessin hoitaminen',
        'Käytännöllinen lisätila asumiseen ilman uudisrakentamista'
      ]
    },
    {
      title: 'Valesokkelitalon korjaussuunnittelu – Ylöjärvi',
      category: 'Korjausrakentaminen / Omakotitalo',
      area: 'Kokonaisvaltainen rakennekorjaus',
      location: 'Ylöjärvi',
      year: '2026',
      description:
        'Laaja omakotitalon korjaushanke Ylöjärvellä keskittyy valesokkelirakenteisen talon rakenteelliseen korjaukseen, asumisterveyden parantamiseen ja rakennuksen pitkäikäisyyden varmistamiseen. Projekti sisältää valesokkelin kengityksen suunnittelun, ulkoseinä–lattialiittymän rakenneratkaisut, lattiarakenteen uusimisen vesikiertoiselle lattialämmitykselle sekä salaoja- ja sadevesijärjestelmien suunnittelun. Kokonaisuus kattaa myös rakennuslupasuunnittelun, pääsuunnittelijan ja vastaavan työnjohtajan vastuut sekä lisälupahakemukset, mikä tekee hankkeesta asiakkaalle hallitun ja turvallisen kokonaispalvelun.',
      features: [
        'Valesokkelin kengityksen suunnittelu',
        'Ulkoseinä–lattialiittymän rakennekorjaus',
        'Lattiarakenteen uusiminen vesikiertoiselle lattialämmitykselle',
        'Salaoja- ja sadevesijärjestelmien suunnittelu',
        'Rakennuslupakuvat ja viranomaisprosessin hoitaminen',
        'Pääsuunnittelija (PS) ja vastaava työnjohtaja (VTJ)',
        'Ilmavesilämpöpumpun ja katon muutostöiden lupahakemukset',
        'Rakennuksen terveellisyyden, energiatehokkuuden ja käyttöiän parantaminen'
      ]
    },
    {
      title: 'Autotalli työhuoneeksi – Ylöjärvi',
      category: 'Muutossuunnittelu / Työtila',
      area: 'n. 20 m² käyttötarkoituksen muutos',
      location: 'Ylöjärvi',
      year: '2026',
      description:
        'Tässä hankkeessa olemassa oleva autotalli muutetaan moderniksi ja toimivaksi työhuoneeksi osaksi asuinkiinteistöä. Projekti sisältää käyttötarkoituksen muutoksen kokonaisvaltaisen suunnittelun, rakennuslupakuvat, pääsuunnittelun sekä vastaavan työnjohdon, minkä lisäksi mukana ovat materiaalilaskenta ja urakoitsijoiden kilpailutus. Tavoitteena on luoda tehokas, viihtyisä ja teknisesti toimiva työtila, joka integroituu saumattomasti olemassa olevaan rakennukseen sekä ilmanvaihto- ja lämmitysjärjestelmiin.',
      features: [
        'Autotallin muuttaminen työhuoneeksi',
        'Noin 20 m² uusi työtila',
        'Oviaukko talon ja autotallin välille',
        'Nosto-oven muuttaminen ikkunaseinäksi',
        'Ilmanvaihdon ja lämmityksen integrointi olemassa olevaan järjestelmään',
        'Rakennuslupakuvat, pääsuunnittelu (PS) ja vastaava työnjohto (VTJ)',
        'Materiaalilaskenta ja budjetointi',
        'Urakoitsijoiden kilpailutus',
        'Käytännöllinen lisätila etätyöhön tai yrityskäyttöön'
      ]
    },
    {
      title: 'Korjaus- ja muutostyö / valesokkelikorjaus – Jyväskylä',
      category: 'Korjausrakentaminen / Omakotitalo',
      area: 'Rakenteellinen korjaus ja tilamuutos',
      location: 'Jyväskylä',
      year: '2026',
      description:
        'Suunnitteilla oleva laaja korjaus- ja muutostyöhanke Jyväskylässä keskittyy olemassa olevan rakennuksen energiatehokkuuden, terveellisyyden ja rakenteellisen toimivuuden parantamiseen. Projekti sisältää valesokkelikorjauksen rajatulle osuudelle, ulkoseinien ja lattiarakenteiden lisäeristyksen, vesikiertoisen lattialämmityksen suunnittelun sekä merkittävät tilamuutokset. Kohteessa ei ole valmiita portaita kerrosten välillä, joten suunnitelmaan kuuluu betonilattian läpivienti ja uuden aukon tekeminen kulkuyhteyttä varten, mikä mahdollistaa täysin uuden yhteyden rakennuksen tasojen välille. Kokonaisuus yhdistää rakennuslupasuunnittelun, rakennekuvat, talotekniikan yhteensovituksen sekä pääsuunnittelijan ja vastaavan työnjohdon tehtävät hallituksi kokonaispalveluksi.',
      features: [
        'Valesokkelikorjauksen suunnittelu rajatulle osuudelle',
        'Ulkoseinien ja lattiarakenteiden lisäeristys',
        'Betonilattian puhkaisu uuden kulkuyhteyden toteuttamiseksi',
        'Uuden kerrosten välisen yhteyden suunnittelu ilman olemassa olevia portaita',
        'Vesikiertoinen lattialämmitys ja vesi-ilmalämpöpumppu',
        'Koneellinen ilmanvaihto lämmöntalteenotolla',
        'Salaojien ja sadevesijärjestelmän suunnittelu',
        'Rakennuslupakuvat, rakennekuvat ja detaljit',
        'Pääsuunnittelija (PS) ja vastaava työnjohtaja (VTJ)',
        'Rakennuksen käyttöiän, energiatehokkuuden ja toiminnallisuuden merkittävä parantaminen'
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      <SEO
        title="Referenssit & Projektit | Aurinkokuningasoy.fi"
        description="Tutustu toteutettuihin arkkitehti- ja rakennesuunnitteluprojekteihimme. Referenssimme kattavat pientalot, autotallit ja muut talousrakennukset."
        canonical="https://www.aurinkokuningasoy.fi/projektit"
        schema={projektitSchema}
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
      <section className="pt-28 pb-14 px-4 sm:px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: '#3E3326' }}>
            Projektit
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto" style={{ color: '#3E3326', opacity: 0.9 }}>
            Tutustu toteutettuihin projekteihini, jotka kuvaavat osaamistani ja sitoutumistani laatuun
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-14 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ backgroundColor: '#FEF8EB', border: '2px solid #C9972E' }}
              >
                {project.image && (
                  <div
                    className="h-48 sm:h-56 flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: 'rgba(201, 151, 46, 0.15)' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                      style={project.image === '/venevaja.webp' ? { objectPosition: 'center 40%' } : {}}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="flex flex-grow flex-col gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#3E3326' }}>{project.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C9972E] sm:text-sm">
                      {project.category}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#3E3326', opacity: 0.8 }}>
                      <MapPin className="w-4 h-4" style={{ color: '#C9972E' }} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#3E3326', opacity: 0.8 }}>
                      <Calendar className="w-4 h-4" style={{ color: '#C9972E' }} />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: '#3E3326', opacity: 0.8 }}>
                      <Ruler className="w-4 h-4" style={{ color: '#C9972E' }} />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  <p className="text-sm" style={{ color: '#3E3326', opacity: 0.85, lineHeight: '1.7' }}>
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>Ominaisuudet:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#3E3326', opacity: 0.8 }}>
                          <span style={{ color: '#C9972E' }}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#3E3326' }}>
            Aloita oma projektisi
          </h2>
          <p className="text-base sm:text-lg mb-8" style={{ color: '#3E3326', opacity: 0.9 }}>
            Haluatko toteuttaa oman rakennusprojektisi? Ota yhteyttä ja keskustellaan, miten voin auttaa visiosi toteutumisessa.
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

export default ProjektitPage;
