import { Building2, Ruler, Users, Award, Phone, Mail, MapPin } from 'lucide-react';

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
                Meistä
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                style={{ color: '#3E3326' }}
              >
                Projektit
              </a>
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
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#3E3326' }}>Palvelumme</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: 'Arkkitehtisuunnittelu', desc: 'Innovatiivisia ja toiminnallisia arkkitehtuuriratkaisuja tarpeisiisi' },
              { icon: Ruler, title: 'Rakennussuunnittelu', desc: 'Yksityiskohtaista suunnittelua ja projektinhallintaa ideasta toteutukseen' },
              { icon: Users, title: 'Konsultointipalvelut', desc: 'Asiantuntevaa ohjausta ja neuvontaa kaikkiin rakennusprojekteihin' },
              { icon: Award, title: 'Laadunvarmistus', desc: 'Tiukka laadunvalvonta takaa erinomaisuuden jokaisessa projektissa' }
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: '#FEF8EB', border: '2px solid #C9972E' }}
              >
                <service.icon className="w-12 h-12 mb-4" style={{ color: '#C9972E' }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#3E3326' }}>{service.title}</h3>
                <p style={{ color: '#3E3326', opacity: 0.8 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#3E3326' }}>Meistä</h2>
          <div className="space-y-6 text-lg" style={{ color: '#3E3326' }}>
            <p>
              Aurinkokuninkan Suunnittelu-ja Rakennuspalvelu OY on johtava rakennussuunnitteluyritys, joka on omistautunut toteuttamaan arkkitehtuuriset unelmasi. Vuosien kokemuksella alalta erikoistumme innovatiivisten, kestävien ja esteettisesti miellyttävien suunnitelmien luomiseen.
            </p>
            <p>
              Asiantuntija-arkkitehtien ja suunnittelijoiden tiimimme työskentelee tiiviisti asiakkaiden kanssa ymmärtääkseen heidän visionsa ja toteuttaakseen odotukset ylittäviä projekteja. Yhdistämme perinteisen käsityötaidon moderniin teknologiaan varmistaaksemme, että jokainen projekti valmistuu korkeimpien standardien mukaisesti.
            </p>
            <p>
              Asuinrakennuksista liikerakennuksiin käsittelemme kaikenkokoiset projektit samalla omistautumisella ja huomiolla yksityiskohtiin.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#3E3326' }}>Esittelyssä Projektit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Moderni Huvila', category: 'Asuinrakennus', area: '450 m²' },
              { title: 'Liiketilakompleksi', category: 'Liikerakennus', area: '1,200 m²' },
              { title: 'Kaupunkiasunto', category: 'Asuinrakennus', area: '320 m²' }
            ].map((project, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                style={{ backgroundColor: '#FEF8EB', border: '2px solid #C9972E' }}
              >
                <div
                  className="h-64 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(201, 151, 46, 0.2)' }}
                >
                  <Building2 className="w-24 h-24" style={{ color: '#C9972E' }} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#3E3326' }}>{project.title}</h3>
                  <p className="mb-2" style={{ color: '#C9972E' }}>{project.category}</p>
                  <p style={{ color: '#3E3326', opacity: 0.8 }}>Kokonaispinta-ala: {project.area}</p>
                </div>
              </div>
            ))}
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
