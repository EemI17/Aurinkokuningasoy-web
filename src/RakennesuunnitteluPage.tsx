import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import aurinkokuningasLogo from '../assets/aurinkokuningas-logo.svg';

function RakennesuunnitteluPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}
      >
        <nav className="px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <img
                src={aurinkokuningasLogo}
                alt="Aurinkokuninkaan Logo"
                className="h-14 w-auto object-contain mix-blend-multiply sm:h-16 md:h-20"
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
            Rakennesuunnittelu
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
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: '#3E3326',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Rakennesuunnittelussa varmistan, että rakennus ei ole ainoastaan kaunis ja toimiva, vaan myös turvallinen ja kestävä. Suunnittelen rakenteet aina huolellisesti kohteen ja käyttötarkoituksen mukaan, jotta rakennus täyttää kaikki vaatimukset ja kestää aikaa.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: '#3E3326',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Olen tehnyt rakennesuunnittelua erityisesti pientaloihin ja talousrakennuksiin, mutta toteutan ratkaisuja myös muihin rakennuskohteisiin tarpeen mukaan. Huolehdin siitä, että suunnitelmat tukevat rakennuksen arkkitehtuuria ja mahdollistavat sujuvan toteutuksen työmaalla.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: '#3E3326',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Tavoitteeni on, että saat selkeät ja luotettavat rakennesuunnitelmat, jotka helpottavat rakentamista ja varmistavat, että lopputulos on turvallinen, toimiva ja pitkäikäinen.
            </p>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2" style={{ borderColor: '#C9972E' }}>
              <h2
                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
                style={{ color: '#3E3326' }}
              >
                Palvelut sisältävät
              </h2>
              <ul className="space-y-4">
                {[
                  'Rakennesuunnitelmat pientaloihin ja talousrakennuksiin',
                  'Kantavien rakenteiden ja liitosten mitoitukset',
                  'Perustusten ja rungon suunnittelu',
                  'Rakennedetaljit ja rakennepiirustukset',
                  'Yhteensovitus arkkitehti- ja LVI-sähkösuunnitelmien kanssa',
                  'Rakennusluvan edellyttämät rakennesuunnitelmat ja laskelmat'
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

export default RakennesuunnitteluPage;
