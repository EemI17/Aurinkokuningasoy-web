import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Arkkitehtisuunnittelu',
    desc: '• Asemapiirustus\n\n• Pohjapiirustus\n\n• Leikkauspiirustukset\n\n• Julkisivukuvat',
    link: '/arkkitehtisuunnittelu',
    logo: '/arkkitehtisuunnittelu-logo.svg'
  },
  {
    title: 'Rakennesuunnittelu',
    desc: '• Turvalliset ja kestävät rakenteet kaikkiin kohteisiin\n\n• Ratkaisut, jotka tukevat arkkitehtisuunnittelua ja helpottavat työmaan toteutusta\n\n• Selkeät ja luotettavat rakennesuunnitelmat, jotka tekevät rakentamisesta sujuvampaa',
    link: '/rakennesuunnittelu',
    logo: '/rakennesuunnittelu-logo.svg'
  },
  {
    title: 'Konsultointipalvelut – pähkinänkuoressa',
    desc: '• Asiantuntevaa tukea rakennushankkeen eri vaiheisiin\n\n• Suunnitelmien arviointi ja kustannusarvioiden laadinta\n\n• Viranomaisasioiden hoitamisen neuvonta\n\n• Ratkaisut asiakkaan tarpeen mukaan\n\n• Päätöksenteon helpottaminen ja projektin selkeyttäminen',
    link: '/konsultointipalvelut',
    logo: '/konsultointipalvelut-logo.svg'
  },
  {
    title: 'Rakennuttajapalvelut',
    desc: '• Vastaavatyönjohtaja\n\n• Pääsuunnittelija\n\n• Rakennushankkeen hallinta alusta loppuun\n\n• Asiakkaan edunvalvonta koko projektin ajan\n\n• Vaivattomampi ja hallitumpi rakennusprosessi',
    link: '/rakennuttajapalvelut',
    logo: '/rakennuttajapalvelut-logo.svg'
  }
];

function App() {
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
            <div className="hidden md:flex space-x-4">
              <a
                href="#services"
                className="px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                style={{ color: '#3E3326' }}
              >
                Palvelut
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                style={{ color: '#3E3326' }}
              >
                Minusta
              </a>
              <Link
                to="/projektit"
                className="px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                style={{ color: '#3E3326' }}
              >
                Projektit
              </Link>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                style={{ color: '#3E3326' }}
              >
                Yhteystiedot
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#3E3326' }}>
            Tarkkaa suunnittelua, varmaa valvontaa
          </h2>
          <p className="text-2xl md:text-3xl font-semibold mb-6 max-w-2xl mx-auto" style={{ color: '#C9972E' }}>
            Yhdessä teemme unelmastasi totta
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 mt-12" style={{ color: '#3E3326' }}>Palvelut</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const ServiceBox = (
                <div
                  key={index}
                  className="p-10 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative overflow-hidden"
                  style={{
                    backgroundColor: '#FEF8EB',
                    border: '3px solid #C9972E',
                    boxShadow: '0 4px 6px rgba(201, 151, 46, 0.1)',
                    cursor: service.link ? 'pointer' : 'default'
                  }}
                  onClick={() => service.link && window.open(service.link, '_blank')}
                >
                  {service.logo && (
                    <img
                      src={service.logo}
                      alt={`${service.title} logo`}
                      className="absolute -top-6 -right-6 w-36 h-36 opacity-10 select-none pointer-events-none"
                      style={{ color: '#3E3326' }}
                    />
                  )}
                  <h3
                    className="text-xl font-bold mb-8 relative z-10"
                    style={{ color: '#3E3326', fontSize: '1.35rem', lineHeight: '1.5', letterSpacing: '0.01em' }}
                  >
                    {service.title}
                  </h3>
                  <p className="relative z-10" style={{
                    color: '#3E3326',
                    whiteSpace: 'pre-line',
                    lineHeight: '2',
                    fontSize: '1rem',
                    fontWeight: '400',
                    letterSpacing: '0.01em'
                  }}>{service.desc}</p>
                </div>
              );
              return ServiceBox;
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold" style={{ color: '#3E3326' }}>Minusta</h2>
            </div>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] items-start">
              <div
                className="rounded-3xl border shadow-lg p-8 flex flex-col items-center text-center"
                style={{ backgroundColor: '#FEF8EB', borderColor: '#E0D2BF', color: '#3E3326' }}
              >
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4" style={{ borderColor: '#C9972E' }}>
                  <img
                    src="/IMG_1785.jpg"
                    alt="Tami Takala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Tami Takala</h3>
                  <div className="space-y-1 text-base" style={{ color: '#3E3326', opacity: 0.85 }}>
                    <p className="font-medium" style={{ opacity: 0.9 }}>Yrittäjä</p>
                    <p>+358 XX XXX XXXX</p>
                    <p>kristian@aurinkokuningas.fi</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <div className="rounded-3xl border p-8 shadow-sm" style={{ backgroundColor: '#FEF8EB', borderColor: '#E0D2BF' }}>
                  <p style={{ color: '#3E3326' }}>
                    Taustani ulottuu käytännön rakennustöistä työnjohtoon ja projektinhallintaan, joten ymmärrän rakentamista
                    monesta näkökulmasta. Työskentelyssäni yhdistyvät asiantuntemus, käytännön kokemus ja halu tehdä rakennusprojekteista
                    asiakkaille selkeitä ja sujuvia. Johdan projekteja ihmisläheisesti, kuunnellen asiakkaiden tarpeita ja etsien
                    ratkaisuja, jotka tuovat arvoa sekä lyhyellä että pitkällä tähtäimellä.
                  </p>
                  <p style={{ color: '#3E3326' }}>
                    Uskon, että vahva vuorovaikutus ja läpinäkyvä viestintä ovat onnistuneiden hankkeiden kulmakivet. Siksi pidän
                    asiakkaani ajan tasalla jokaisessa projektin vaiheessa ja varmistun siitä, että lopputulos täyttää sovitut tavoitteet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto max-w-2xl">
          <form
            className="rounded-3xl border shadow-lg p-10 space-y-8"
            style={{ backgroundColor: '#FEF8EB', borderColor: '#E0D2BF' }}
          >
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold" style={{ color: '#3E3326' }}>
                Ota yhteyttä
              </h2>
              <p className="text-base" style={{ color: '#3E3326', opacity: 0.8 }}>
                Täytä lomake ja palaamme sinulle pian.
              </p>
            </div>
            <div className="space-y-6">
              <label className="block text-left">
                <span className="block text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                  Nimi
                </span>
                <input
                  type="text"
                  placeholder="Kirjoita koko nimesi"
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                  style={{
                    backgroundColor: '#FEF8EB',
                    borderColor: '#E0D2BF',
                    color: '#3E3326'
                  }}
                />
              </label>
              <label className="block text-left">
                <span className="block text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                  Sähköposti
                </span>
                <input
                  type="email"
                  placeholder="esimerkki@yritys.fi"
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                  style={{
                    backgroundColor: '#FEF8EB',
                    borderColor: '#E0D2BF',
                    color: '#3E3326'
                  }}
                />
              </label>
              <label className="block text-left">
                <span className="block text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                  Viesti
                </span>
                <textarea
                  placeholder="Kerro lyhyesti projektistasi ja toiveistasi"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                  style={{
                    backgroundColor: '#FEF8EB',
                    borderColor: '#E0D2BF',
                    color: '#3E3326',
                    resize: 'vertical'
                  }}
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: '#C9972E', boxShadow: '0 12px 24px rgba(201, 151, 46, 0.25)' }}
            >
              Lähetä viesti
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto text-center">
          <p style={{ color: '#3E3326' }}>
            &copy; 2025 Aurinkokuninkan Suunnittelu-ja Rakennuspalvelu OY. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
