import { ArrowLeft } from 'lucide-react';

function RakennesuunnitteluPage() {
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
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-16 mt-8" style={{ color: '#3E3326' }}>
            Rakennesuunnittelu
          </h1>

          <div
            className="p-12 rounded-2xl space-y-8"
            style={{
              backgroundColor: '#FEF8EB',
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
              Rakennesuunnittelussa varmistan, että rakennus ei ole ainoastaan kaunis ja toimiva, vaan myös turvallinen ja kestävä. Suunnittelen rakenteet aina huolellisesti kohteen ja käyttötarkoituksen mukaan, jotta rakennus täyttää kaikki vaatimukset ja kestää aikaa.
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
              Olen tehnyt rakennesuunnittelua erityisesti pientaloihin ja talousrakennuksiin, mutta toteutan ratkaisuja myös muihin rakennuskohteisiin tarpeen mukaan. Huolehdin siitä, että suunnitelmat tukevat rakennuksen arkkitehtuuria ja mahdollistavat sujuvan toteutuksen työmaalla.
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
              Tavoitteeni on, että saat selkeät ja luotettavat rakennesuunnitelmat, jotka helpottavat rakentamista ja varmistavat, että lopputulos on turvallinen, toimiva ja pitkäikäinen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RakennesuunnitteluPage;
