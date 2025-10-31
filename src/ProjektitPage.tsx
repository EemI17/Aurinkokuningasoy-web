import { ArrowLeft, Calendar, MapPin, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import aurinkokuningasLogo from './assets/aurinkokuningasLogo';
import Footer from './components/Footer';

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
      ]
    },
    {
      title: 'Venevaja',
      category: 'Talousrakennus',
      area: '29 m²',
      location: 'Mänttä – Vilppula',
      year: '2022',
      description:
        'Venevaja tarjoaa suojaisan ja käytännöllisen tilan veneille ympäri vuoden. Rakennus suunnitellaan kestämään vaihtelevia sääolosuhteita ja sijoitetaan lähelle rantaa, jotta veneiden käsittely ja vesillelasku on mahdollisimman helppoa. Venevaja yhdistää toimivuuden ja perinteisen rantamiljöön sopivalla tavalla.',
      features: [
        'Suojaisa ja toimiva säilytystila veneille',
        'Pitkäikäinen ja sääolosuhteita hyvin kestävä rakenne',
        'Helppo pääsy vesistöön',
        'Käytännöllinen pohjaratkaisu',
        'Yhdistyy ympäristöön harmonisesti'
      ]
    },
    {
      title: 'Varasto',
      category: 'Talousrakennus',
      area: '32 m²',
      location: 'Mänttä-Vilppula',
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
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}
      >
        <nav className="pl-2 pr-2 sm:pl-3 sm:pr-3 py-4">
          <div className="flex w-full items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 transition-opacity hover:opacity-80"
            >
              <img
                src={aurinkokuningasLogo}
                alt="Aurinkokuninkaan Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto flex-shrink-0 object-contain"
              />
              <span className="whitespace-nowrap items-center text-sm font-semibold leading-tight sm:text-base md:text-lg" style={{ color: '#3E3326' }}>
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
                {(index === 0 || index === 1) && (
                  <div
                    className="h-48 sm:h-56 flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: 'rgba(201, 151, 46, 0.15)' }}
                  >
                    <img
                      src={index === 0 ? "/IMG_1785 copy.jpg" : "/venevaja.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
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
            Aloita Oma Projektisi
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
            Ota Yhteyttä
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjektitPage;
