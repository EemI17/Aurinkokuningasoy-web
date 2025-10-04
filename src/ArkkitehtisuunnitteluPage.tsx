import { ArrowLeft } from 'lucide-react';

function ArkkitehtisuunnitteluPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}>
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/logo.svg"
                alt="Aurinkokuninkan Logo"
                className="h-16 w-16 object-contain"
              />
              <span className="text-lg font-semibold" style={{ color: '#3E3326' }}>
                Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy
              </span>
            </div>
            <a
              href="/"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
              style={{ color: '#3E3326' }}
            >
              <ArrowLeft className="w-5 h-5" />
              Takaisin
            </a>
          </div>
        </nav>
      </header>

      {/* Content Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-16" style={{ color: '#3E3326' }}>
            Arkkitehtisuunnittelu
          </h1>

          <div
            className="p-12 rounded-2xl space-y-8"
            style={{
              backgroundColor: '#FFFFFF',
              border: '3px solid #C9972E',
              boxShadow: '0 10px 30px rgba(201, 151, 46, 0.15)'
            }}
          >
            <p
              className="text-lg leading-relaxed"
              style={{
                color: '#3E3326',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Autan sinua tekemään rakennusprojektistasi selkeän ja hallitun alusta loppuun.
              Suunnittelen rakennukset aina asiakkaan toiveiden, tarpeiden ja viranomaisvaatimusten
              pohjalta, jotta lopputulos on toimiva, tyylikäs ja sujuvasti etenevä.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{
                color: '#3E3326',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Tyypillisiä kohteitani ovat pientalot ja talousrakennukset, mutta teen
              arkkitehtisuunnittelua monipuolisesti myös muihin kohteisiin projektin laajuuden mukaan.
              Laadin kaikki tarvittavat piirustukset asemapiirroksista pohjaratkaisuihin, leikkauskuviin
              ja julkisivuihin aina huolellisesti ja asiakkaan näkökulmasta.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{
                color: '#3E3326',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Tavoitteeni on, että saat rakennusprojektiisi suunnitelman, joka helpottaa lupaprosessia,
              tekee rakentamisesta sujuvampaa ja varmistaa, että lopputulos vastaa sekä käytännön
              tarpeita että esteettisiä toiveita.
            </p>

            <div
              className="mt-12 pt-8 border-t-2"
              style={{ borderColor: '#C9972E' }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: '#3E3326' }}
              >
                Palvelut sisältävät
              </h2>
              <ul className="space-y-4">
                {[
                  'Asemapiirustus',
                  'Pohjapiirustus',
                  'Leikkauspiirustukset',
                  'Julkisivukuvat'
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg"
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

export default ArkkitehtisuunnitteluPage;
