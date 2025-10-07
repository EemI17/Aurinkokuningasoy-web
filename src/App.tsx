import { Building2, Ruler, Users, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#3E3326' }}>
            Rakennamme Visiosi
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#3E3326' }}>
            Ammattitaitoista rakennussuunnittelua ja arkkitehtuuripalveluita asuin- ja liikekiinteistöihin
          </p>
          <button
            className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#C9972E' }}
          >
            Aloita Projektisi
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 mt-12" style={{ color: '#3E3326' }}>Palvelut</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Arkkitehtisuunnittelu', desc: '• Asemapiirustus\n\n• Pohjapiirustus\n\n• Leikkauspiirustukset\n\n• Julkisivukuvat', link: '/arkkitehtisuunnittelu' },
              { title: 'Rakennesuunnittelu', desc: '• Turvalliset ja kestävät rakenteet kaikkiin kohteisiin\n\n• Ratkaisut, jotka tukevat arkkitehtisuunnittelua ja helpottavat työmaan toteutusta\n\n• Selkeät ja luotettavat rakennesuunnitelmat, jotka tekevät rakentamisesta sujuvampaa', link: '/rakennesuunnittelu' },
              { title: 'Konsultointipalvelut – pähkinänkuoressa', desc: '• Asiantuntevaa tukea rakennushankkeen eri vaiheisiin\n\n• Suunnitelmien arviointi ja kustannusarvioiden laadinta\n\n• Viranomaisasioiden hoitamisen neuvonta\n\n• Ratkaisut asiakkaan tarpeen mukaan\n\n• Päätöksenteon helpottaminen ja projektin selkeyttäminen', link: '/konsultointipalvelut' },
              { title: 'Rakennuttajapalvelut', desc: '• Vastaavatyönjohtaja\n\n• Pääsuunnittelija\n\n• Rakennushankkeen hallinta alusta loppuun\n\n• Asiakkaan edunvalvonta koko projektin ajan\n\n• Vaivattomampi ja hallitumpi rakennusprosessi', link: '/rakennuttajapalvelut' }
            ].map((service, index) => {
              const ServiceBox = (
                <div
                  key={index}
                  className="p-10 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  style={{
                    backgroundColor: '#FEF8EB',
                    border: '3px solid #C9972E',
                    boxShadow: '0 4px 6px rgba(201, 151, 46, 0.1)',
                    cursor: service.link ? 'pointer' : 'default'
                  }}
                  onClick={() => service.link && window.open(service.link, '_blank')}
                >
                  <h3 className="text-xl font-bold mb-8" style={{ color: '#3E3326', fontSize: '1.35rem', lineHeight: '1.5', letterSpacing: '0.01em' }}>{service.title}</h3>
                  <p style={{
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
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#3E3326' }}>Ota Yhteyttä</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1" style={{ color: '#C9972E' }} />
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#3E3326' }}>Puhelin</h3>
                  <p style={{ color: '#3E3326', opacity: 0.8 }}>+358 XX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1" style={{ color: '#C9972E' }} />
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#3E3326' }}>Sähköposti</h3>
                  <p style={{ color: '#3E3326', opacity: 0.8 }}>info@aurinkokuninkan.fi</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1" style={{ color: '#C9972E' }} />
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#3E3326' }}>Osoite</h3>
                  <p style={{ color: '#3E3326', opacity: 0.8 }}>Helsinki, Finland</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nimi"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: '#FEF8EB',
                  borderColor: '#C9972E',
                  color: '#3E3326'
                }}
              />
              <input
                type="email"
                placeholder="Sähköposti"
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: '#FEF8EB',
                  borderColor: '#C9972E',
                  color: '#3E3326'
                }}
              />
              <textarea
                placeholder="Viesti"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: '#FEF8EB',
                  borderColor: '#C9972E',
                  color: '#3E3326'
                }}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#C9972E' }}
              >
                Lähetä Viesti
              </button>
            </form>
          </div>
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
