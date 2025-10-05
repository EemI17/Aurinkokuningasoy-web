import { Building2, ArrowLeft, Calendar, MapPin, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjektitPage() {
  const projects = [
    {
      title: 'Moderni Huvila',
      category: 'Asuinrakennus',
      area: '450 m²',
      location: 'Espoo',
      year: '2024',
      description: 'Ylellinen ja moderni huvila, jossa yhdistyvät tyylikkäät arkkitehtoniset ratkaisut ja korkealaatuiset materiaalit.',
      features: ['Avoin pohjaratkaisu', 'Suuret ikkunat', 'Energiatehokas', 'Korkealaatuiset materiaalit']
    },
    {
      title: 'Liiketilakompleksi',
      category: 'Liikerakennus',
      area: '1,200 m²',
      location: 'Helsinki',
      year: '2023',
      description: 'Monipuolinen liiketilakompleksi keskeisellä sijainnilla, suunniteltu vastaamaan modernin liiketoiminnan tarpeita.',
      features: ['Modulaarinen suunnittelu', 'Joustavat tilat', 'Hyvät liikenneyhteydet', 'Modernit tekniset ratkaisut']
    },
    {
      title: 'Kaupunkiasunto',
      category: 'Asuinrakennus',
      area: '320 m²',
      location: 'Helsinki',
      year: '2024',
      description: 'Tyylikäs kaupunkiasunto keskellä Helsinkiä, jossa yhdistyvät toimivuus ja viihtyisyys.',
      features: ['Optimoitu tilankäyttö', 'Laadukkaat pintamateriaalit', 'Älykkäät kodinhoitoratkaisut', 'Hyvä äänieristys']
    },
    {
      title: 'Rivitaloalue',
      category: 'Asuinrakennus',
      area: '850 m²',
      location: 'Vantaa',
      year: '2023',
      description: 'Perhekeskeinen rivitaloalue rauhallisessa ympäristössä, suunniteltu yhteisöllisyyden ja yksityisyyden tasapainoon.',
      features: ['Perheystävällinen suunnittelu', 'Yhteiset ulkotilat', 'Energiatehokkuus', 'Lähellä palveluita']
    },
    {
      title: 'Toimistorakennus',
      category: 'Liikerakennus',
      area: '2,100 m²',
      location: 'Tampere',
      year: '2022',
      description: 'Moderni toimistorakennus, joka tarjoaa inspiroivan ja tehokkaan työympäristön.',
      features: ['Avoimet työtilat', 'Neuvottelutilat', 'Lounasravintola', 'Kattoterassi']
    },
    {
      title: 'Omakotitalo',
      category: 'Asuinrakennus',
      area: '280 m²',
      location: 'Kirkkonummi',
      year: '2024',
      description: 'Viihtyisä omakotitalo luonnonläheisessä ympäristössä, suunniteltu perheelämän tarpeisiin.',
      features: ['Tilava olohuone', 'Moderni keittiö', 'Suuri terassi', 'Sauna']
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}>
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img
                src="/logo.svg"
                alt="Aurinkokuninkan Logo"
                className="h-16 w-16 object-contain"
              />
              <span className="text-lg font-semibold" style={{ color: '#3E3326' }}>
                Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
              style={{ color: '#3E3326' }}
            >
              <ArrowLeft className="w-5 h-5" />
              Takaisin
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-6" style={{ color: '#3E3326' }}>
            Projektit
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto" style={{ color: '#3E3326', opacity: 0.9 }}>
            Tutustu toteutettuihin projekteihimme, jotka kuvaavat osaamistamme ja sitoutumistamme laatuun
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                style={{ backgroundColor: '#FEF8EB', border: '2px solid #C9972E' }}
              >
                <div
                  className="h-56 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: 'rgba(201, 151, 46, 0.15)' }}
                >
                  <img
                    src="/project-image.png"
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#3E3326' }}>{project.title}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: '#C9972E' }}>{project.category}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#3E3326', opacity: 0.8 }}>
                      <MapPin className="w-4 h-4" style={{ color: '#C9972E' }} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#3E3326', opacity: 0.8 }}>
                      <Calendar className="w-4 h-4" style={{ color: '#C9972E' }} />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#3E3326', opacity: 0.8 }}>
                      <Ruler className="w-4 h-4" style={{ color: '#C9972E' }} />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  <p className="text-sm mb-4" style={{ color: '#3E3326', opacity: 0.85, lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>Ominaisuudet:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2" style={{ color: '#3E3326', opacity: 0.8 }}>
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
      <section className="py-16 px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#3E3326' }}>
            Aloita Oma Projektisi
          </h2>
          <p className="text-lg mb-8" style={{ color: '#3E3326', opacity: 0.9 }}>
            Haluatko toteuttaa oman rakennusprojektisi? Ota yhteyttä ja keskustellaan, miten voimme auttaa visiosi toteutumisessa.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#C9972E' }}
          >
            Ota Yhteyttä
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ backgroundColor: 'rgba(201, 151, 46, 0.2)' }}>
        <div className="container mx-auto text-center">
          <p style={{ color: '#3E3326' }}>
            &copy; 2025 Aurinkokuninkan Suunnittelu-ja Rakennuspalvelu OY. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ProjektitPage;
