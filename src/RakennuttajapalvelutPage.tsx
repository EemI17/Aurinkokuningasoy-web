import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import aurinkokuningasLogo from './assets/aurinkokuningasLogo.webp';
import SEO from './components/SEO';

const rakennuttajaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Rakennuttajapalvelut",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy"
  },
  "description": "Asiantuntevaa rakennuttajapalvelua, vastaava työnjohtaja ja pääsuunnittelija Mäntässä ja Vilppulassa.",
  "areaServed": "Pirkanmaa"
};

function RakennuttajapalvelutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      <SEO
        title="Rakennuttajapalvelut ja valvonta Mänttä-Vilppula | Aurinkokuningas Oy"
        description="Vastaava työnjohtaja ja pääsuunnittelija palvelut Pirkanmaalla. Varmistamme rakennushankkeesi laadun, aikataulun ja budjetin pysyvyyden."
        canonical="https://www.aurinkokuningasoy.fi/rakennuttajapalvelut"
        schema={rakennuttajaSchema}
      />
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}
      >
        <nav className="px-4 sm:px-6 py-4">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-center justify-center gap-3 sm:gap-4 sm:justify-start">
              <img
                src={aurinkokuningasLogo}
                alt="Aurinkokuninkaan Logo"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              />
              <span className="text-base font-semibold sm:text-lg" style={{ color: '#3E3326' }}>
                Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy
              </span>
            </div>
            <Link
              to="/"
              state={{ scrollTo: 'services' }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#C9972E]/40 px-4 py-2.5 text-sm font-medium text-[#3E3326] transition-colors hover:bg-[#C9972E]/15 sm:text-base"
            >
              <ArrowLeft className="w-5 h-5" />
              Takaisin
            </Link>
          </div>
        </nav>
      </header>

      {/* Content Section */}
      <section className="px-4 sm:px-6 pt-28 pb-16">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mt-20 text-center text-3xl font-bold sm:mt-12 sm:text-4xl md:text-5xl" style={{ color: '#3E3326' }}>
            Rakennuttajapalvelut ja Valvonta Mänttä-Vilppulassa
          </h1>

          <div
            className="mt-10 rounded-2xl border-2 p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8"
            style={{
              backgroundColor: '#FEF8EB',
              border: '2px solid #C9972E',
              boxShadow: '0 10px 30px rgba(201, 151, 46, 0.12)'
            }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{
                color: '#3E3326',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Onnistunut ja laadukas rakennushanke vaatii kokeneen ja ammattitaitoisen rakennuttajan. Aurinkokuningas Oy tarjoaa ensiluokkaiset rakennuttajapalvelut, joiden ytimessä on luotettava projektinjohto ja tarkka valvonta koko Pirkanmaan alueella. Ammattilaisten avulla varmistat, että hankkeesi etenee suunnitelmien mukaisesti, sovitussa aikataulussa ja täsmällisesti budjetissa.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#3E3326' }}>
                Mitä vastaava työnjohtaja tekee?
              </h3>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: '#3E3326',
                  lineHeight: '2',
                  fontSize: '1.1rem',
                  letterSpacing: '0.01em'
                }}
              >
                Kun suunnittelet rakentamista Mänttä-Vilppulassa tai sen lähialueilla, vastaava työnjohtaja on paras mahdollinen sijoituksesi mielenrauhaan ja laatuun. Vastaava työnjohtaja on lakisääteinen rakennusammattilainen, joka vastaa työmaan teknisestä ohjauksesta, työturvallisuudesta ja varmistaa, että rakentaminen tehdään hyväksyttyjen piirustusten ja hyvän rakennustavan mukaisesti. Autan rakennuslupien hakemisessa ja viranomaisneuvotteluissa heti projektin alkumetreiltä asti.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#3E3326' }}>
                Pääsuunnittelijan palvelut Pirkanmaalla
              </h3>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: '#3E3326',
                  lineHeight: '2',
                  fontSize: '1.1rem',
                  letterSpacing: '0.01em'
                }}
              >
                Pääsuunnittelija huolehtii siitä, että rakennushankkeesi eri suunnitelmat (arkkitehti-, rakenne- ja talotekniikkasuunnitelmat) toimivat saumattomasti yhteen. Tämä ehkäisee kalliit ja aikaavievät ristiriidat työmaavaiheessa. Toimin tarvittaessa projektisi pääsuunnittelijana kokoamalla kaikki palaset laadukkaaksi kokonaisuudeksi, hyödyntäen vahvaa asiantuntemustamme arkkitehti- ja rakennesuunnittelussa.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#3E3326' }}>
                Miksi valita paikallinen asiantuntija?
              </h3>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: '#3E3326',
                  lineHeight: '2',
                  fontSize: '1.1rem',
                  letterSpacing: '0.01em'
                }}
              >
                Rakennuttajapalvelut edellyttävät vahvaa paikallistuntemusta ja verkostoja. Vastaava työnjohtaja Mänttä-Vilppulan alueella tuntee paikalliset urakoitsijat ja rakennusvalvonnan käytännöt. Tämä tekee viranomaisyhteistyöstä joustavaa ja auttaa ongelmatilanteiden ratkaisemisessa tehokkaasti – ennen kuin niistä kasvaa haasteita budjetille.
              </p>
            </div>

            <p
              className="text-base sm:text-lg leading-relaxed mt-6"
              style={{
                color: '#3E3326',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Tavoitteenani on taata asukkaille ja rakennuksen omistajille tekniikaltaan asiallinen ja arvoltaan kestävä lopputulos ilman stressiä omien aikataulujen sovittamisesta työmaan tarpeisiin. Edustan asiakasta koko rakennusprojektin ajan, kilpailutuksista aina viralliseen loppukatselmukseen.
            </p>

            <div
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2"
              style={{ borderColor: '#C9972E' }}
            >
              <h2
                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
                style={{ color: '#3E3326' }}
              >
                Palvelut sisältävät
              </h2>
              <ul className="space-y-4">
                {[
                  'Vastaavatyönjohtaja',
                  'Pääsuunnittelija',
                  'Rakennushankkeen hallinta alusta loppuun',
                  'Asiakkaan edunvalvonta koko projektin ajan',
                  'Vaivattomampi ja hallitumpi rakennusprosessi'
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-base sm:text-lg"
                    style={{ color: '#3E3326' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#C9972E' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RakennuttajapalvelutPage;
