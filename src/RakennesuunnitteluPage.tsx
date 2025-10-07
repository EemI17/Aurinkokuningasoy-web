import { ArrowLeft } from 'lucide-react';

function RakennesuunnitteluPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}>
        <nav className="px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <img
                src="/logo.svg"
                alt="Aurinkokuninkan Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              />
              <span className="text-base font-semibold sm:text-lg" style={{ color: '#3E3326' }}>
                Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy
              </span>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#C9972E]/40 px-4 py-2.5 text-sm font-medium text-[#3E3326] transition-colors hover:bg-[#C9972E]/15 sm:text-base"
            >
              <ArrowLeft className="w-5 h-5" />
              Takaisin
            </a>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default RakennesuunnitteluPage;
