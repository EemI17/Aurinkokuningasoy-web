import { type ChangeEvent, type FormEvent, type MouseEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CalendarCheck, ClipboardList, Mail, Megaphone, Menu, Phone, User, X, ChevronDown } from 'lucide-react';
import aurinkokuningasLogo from './assets/aurinkokuningasLogo.webp';
import arkkitehtisuunnitteluBackground from './assets/arkkitehtisuunnitteluBackground.webp';
import konsultointipalvelutBackground from './assets/konsultointipalvelutBackground.webp';
import rakennuttajapalvelutBackground from './assets/rakennuttajapalvelutBackground.webp';
import rakennesuunnitteluBackground from './assets/rakennesuunnitteluBackground.webp';
import Footer from './components/Footer';
import SEO from './components/SEO';

type Service = {
  title: string;
  desc: string;
  link?: string;
  image: string;
};

const services: Service[] = [
  {
    title: 'Arkkitehtisuunnittelu',
    desc: '• Asemapiirustus\n\n• Pohjapiirustus\n\n• Leikkauspiirustukset\n\n• Julkisivukuvat',
    link: '/arkkitehtisuunnittelu',
    image: arkkitehtisuunnitteluBackground
  },
  {
    title: 'Rakennesuunnittelu',
    desc: '• Turvalliset ja kestävät rakenteet kaikkiin kohteisiin\n\n• Ratkaisut, jotka tukevat arkkitehtisuunnittelua ja helpottavat työmaan toteutusta\n\n• Selkeät ja luotettavat rakennesuunnitelmat, jotka tekevät rakentamisesta sujuvampaa',
    link: '/rakennesuunnittelu',
    image: rakennesuunnitteluBackground
  },
  {
    title: 'Konsultointipalvelut',
    desc: '• Asiantuntevaa tukea rakennushankkeen eri vaiheisiin\n\n• Suunnitelmien arviointi ja kustannusarvioiden laadinta\n\n• Viranomaisasioiden hoitamisen neuvonta\n\n• Ratkaisut asiakkaan tarpeen mukaan\n\n• Päätöksenteon helpottaminen ja projektin selkeyttäminen',
    link: '/konsultointipalvelut',
    image: konsultointipalvelutBackground
  },
  {
    title: 'Rakennuttajapalvelut',
    desc: '• Vastaavatyönjohtaja\n\n• Pääsuunnittelija\n\n• Rakennushankkeen hallinta alusta loppuun\n\n• Asiakkaan edunvalvonta koko projektin ajan\n\n• Vaivattomampi ja hallitumpi rakennusprosessi',
    link: '/rakennuttajapalvelut',
    image: rakennuttajapalvelutBackground
  }
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy",
  "image": "https://www.aurinkokuningasoy.fi/og-image.jpg",
  "@id": "https://www.aurinkokuningasoy.fi",
  "url": "https://www.aurinkokuningasoy.fi",
  "telephone": "+358 40 154 7538",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mänttä-Vilppula",
    "addressRegion": "Pirkanmaa",
    "addressCountry": "FI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 62.0294,
    "longitude": 24.6242
  },
  "description": "Asiantuntevaa arkkitehti- ja rakennesuunnittelua, konsultointipalveluita sekä rakennuttajapalveluita Mäntässä ja Vilppulassa.",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "16:00"
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    contactSource: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success' | 'error' | 'submitting'
  >('idle');
  const [submissionError, setSubmissionError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      navigate('.', { replace: true });
    }
  }, [location, navigate]);

  const handleServiceNavigation = (link?: string) => {
    if (!link) {
      return;
    }
    if (link.startsWith('/')) {
      navigate(link);
      return;
    }
    window.location.href = link;
  };

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleContactFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
    if (submissionStatus !== 'idle') {
      setSubmissionStatus('idle');
    }
    if (submissionError) {
      setSubmissionError('');
    }
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmissionError('Täytä vähintään nimi, sähköposti ja viesti.');
      setSubmissionStatus('error');
      return;
    }

    setSubmissionError('');
    setSubmissionStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@aurinkokuningasoy.fi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          projectType: formData.projectType || undefined,
          contactSource: formData.contactSource || undefined,
          message: formData.message.trim()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      setFormData({ name: '', email: '', phone: '', projectType: '', contactSource: '', message: '' });
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Contact form submission failed', error);
      setSubmissionError(
        'Viestin lähetys epäonnistui. Yritä uudelleen tai ota yhteyttä suoraan sähköpostitse info@aurinkokuningasoy.fi.'
      );
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      <SEO
        title="Arkkitehti- ja rakennesuunnittelu Mänttä-Vilppula | Aurinkokuningas Oy"
        description="Asiantuntevaa arkkitehtisuunnittelua, rakennesuunnittelua ja rakennuttajapalveluita Mänttä-Vilppulassa ja Pirkanmaalla. Pyydä tarjous projektillesi!"
        canonical="https://www.aurinkokuningasoy.fi/"
        schema={homeSchema}
      />
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}
      >
        <nav className="pl-2 pr-2 sm:pl-3 sm:pr-3 py-4">
          <div className="flex w-full items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <img
                src={aurinkokuningasLogo}
                alt="Aurinkokuninkaan Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto flex-shrink-0 object-contain"
              />
              <span
                className="items-center text-xs font-semibold leading-tight sm:text-base md:text-lg sm:whitespace-nowrap"
                style={{ color: '#3E3326' }}
              >
                Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy
              </span>
            </div>
            <div className="hidden md:flex space-x-2 lg:space-x-4 ml-auto">
              <div className="relative group">
                <a
                  href="#services"
                  onClick={(event) => handleAnchorClick(event, 'services')}
                  className="flex items-center gap-1.5 px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg text-base lg:text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                  style={{ color: '#3E3326' }}
                >
                  Palvelut
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-[80%] left-0 pt-4 w-[280px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-[#FEF8EB] rounded-xl border-2 shadow-xl overflow-hidden py-2" style={{ borderColor: '#C9972E' }}>
                    <Link
                      to="/arkkitehtisuunnittelu"
                      className="block px-5 py-3 text-base font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Arkkitehtisuunnittelu
                    </Link>
                    <Link
                      to="/rakennesuunnittelu"
                      className="block px-5 py-3 text-base font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Rakennesuunnittelu
                    </Link>
                    <Link
                      to="/konsultointipalvelut"
                      className="block px-5 py-3 text-base font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Konsultointipalvelut
                    </Link>
                    <Link
                      to="/rakennuttajapalvelut"
                      className="block px-5 py-3 text-base font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Rakennuttajapalvelut
                    </Link>
                  </div>
                </div>
              </div>
              <a
                href="#about"
                onClick={(event) => handleAnchorClick(event, 'about')}
                className="px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg text-base lg:text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                style={{ color: '#3E3326' }}
              >
                Minusta
              </a>
              <Link
                to="/projektit"
                className="px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg text-base lg:text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                style={{ color: '#3E3326' }}
              >
                Projektit
              </Link>
              <div className="relative group">
                <Link
                  to="/opas-rakennushankkeeseen"
                  className="flex items-center gap-1.5 px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg text-base lg:text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                  style={{ color: '#3E3326' }}
                >
                  Opas
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-[80%] right-0 pt-4 w-[360px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-[#FEF8EB] rounded-xl border-2 shadow-xl overflow-hidden py-2" style={{ borderColor: '#C9972E' }}>
                    <Link
                      to="/opas-rakennushankkeeseen#vaihe-vaiheelta"
                      className="block px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Rakennusprojekti vaihe vaiheelta
                    </Link>
                    <Link
                      to="/opas-rakennushankkeeseen#paasuunnittelija"
                      className="block px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Tarvitseeko rakennusprojekti pääsuunnittelijan
                    </Link>
                    <Link
                      to="/opas-rakennushankkeeseen#rakennuslupa"
                      className="block px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Rakennuslupa, milloin sitä tarvitaan ja miten se haetaan
                    </Link>
                    <Link
                      to="/opas-rakennushankkeeseen#hinta"
                      className="block px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Paljonko rakennussuunnittelu maksaa?
                    </Link>
                    <Link
                      to="/opas-rakennushankkeeseen#yleisimmat-virheet"
                      className="block px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Yleisimmät virheet rakennushankkeessa
                    </Link>
                    <Link
                      to="/opas-rakennushankkeeseen#rakennuttajapalvelu"
                      className="block px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Mitä rakennuttajapalvelu tarkoittaa
                    </Link>
                    <Link
                      to="/opas-rakennushankkeeseen#aloitus"
                      className="block px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                      style={{ color: '#3E3326' }}
                    >
                      Miten valmistautua ensimmäiseen suunnittelutapaamiseen
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/yhteystiedot"
                className="px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg text-base lg:text-lg font-medium transition-all duration-300 hover:bg-[#C9972E]"
                style={{ color: '#3E3326' }}
              >
                Yhteystiedot
              </Link>
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-[#C9972E]/30 p-2 text-[#3E3326] transition-colors hover:bg-[#C9972E]/10"
              aria-label="Avaa valikko"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'pointer-events-none max-h-0 opacity-0'
              }`}
          >
            <div className="flex flex-col gap-2 rounded-2xl border p-4 shadow-lg" style={{ backgroundColor: '#FEF8EB', borderColor: '#C9972E' }}>
              <div className="flex flex-col">
                <a
                  href="#services"
                  onClick={(event) => handleAnchorClick(event, 'services')}
                  className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-[#C9972E]/15"
                  style={{ color: '#3E3326' }}
                >
                  Palvelut
                </a>
                <div className="flex flex-col mt-1 mb-2 border-l-2 ml-6 space-y-1" style={{ borderColor: '#C9972E', opacity: 0.9 }}>
                  <Link
                    to="/arkkitehtisuunnittelu"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-r-xl px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                    style={{ color: '#3E3326' }}
                  >
                    Arkkitehtisuunnittelu
                  </Link>
                  <Link
                    to="/rakennesuunnittelu"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-r-xl px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                    style={{ color: '#3E3326' }}
                  >
                    Rakennesuunnittelu
                  </Link>
                  <Link
                    to="/konsultointipalvelut"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-r-xl px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                    style={{ color: '#3E3326' }}
                  >
                    Konsultointipalvelut
                  </Link>
                  <Link
                    to="/rakennuttajapalvelut"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-r-xl px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#C9972E]/15"
                    style={{ color: '#3E3326' }}
                  >
                    Rakennuttajapalvelut
                  </Link>
                </div>
              </div>
              <a
                href="#about"
                onClick={(event) => handleAnchorClick(event, 'about')}
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-[#C9972E]/15"
                style={{ color: '#3E3326' }}
              >
                Minusta
              </a>
              <Link
                to="/projektit"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-[#C9972E]/15"
                style={{ color: '#3E3326' }}
              >
                Projektit
              </Link>
              <div className="flex flex-col">
                <Link
                  to="/opas-rakennushankkeeseen"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-[#C9972E]/15"
                  style={{ color: '#3E3326' }}
                >
                  Opas
                </Link>
                <div className="flex flex-col mt-1 mb-2 border-l-2 ml-6 space-y-1" style={{ borderColor: '#C9972E', opacity: 0.9 }}>
                  <Link
                    to="/opas-rakennushankkeeseen#vaihe-vaiheelta"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-r-xl px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-[#C9972E]/15 break-words whitespace-normal"
                    style={{ color: '#3E3326' }}
                  >
                    Rakennusprojekti vaihe vaiheelta
                  </Link>
                  <Link
                    to="/opas-rakennushankkeeseen#paasuunnittelija"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-r-xl px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-[#C9972E]/15 break-words whitespace-normal"
                    style={{ color: '#3E3326' }}
                  >
                    Tarvitseeko rakennusprojekti pääsuunnittelijan
                  </Link>
                  <Link
                    to="/opas-rakennushankkeeseen#rakennuslupa"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-r-xl px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-[#C9972E]/15 break-words whitespace-normal"
                    style={{ color: '#3E3326' }}
                  >
                    Rakennuslupa, milloin sitä tarvitaan ja miten se haetaan
                  </Link>
                  <Link
                    to="/opas-rakennushankkeeseen#hinta"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-r-xl px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-[#C9972E]/15 break-words whitespace-normal"
                    style={{ color: '#3E3326' }}
                  >
                    Paljonko rakennussuunnittelu maksaa?
                  </Link>
                  <Link
                    to="/opas-rakennushankkeeseen#yleisimmat-virheet"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-r-xl px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-[#C9972E]/15 break-words whitespace-normal"
                    style={{ color: '#3E3326' }}
                  >
                    Yleisimmät virheet rakennushankkeessa
                  </Link>
                  <Link
                    to="/opas-rakennushankkeeseen#rakennuttajapalvelu"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-r-xl px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-[#C9972E]/15 break-words whitespace-normal"
                    style={{ color: '#3E3326' }}
                  >
                    Mitä rakennuttajapalvelu tarkoittaa
                  </Link>
                  <Link
                    to="/opas-rakennushankkeeseen#aloitus"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-r-xl px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-[#C9972E]/15 break-words whitespace-normal"
                    style={{ color: '#3E3326' }}
                  >
                    Miten valmistautua ensimmäiseen suunnittelutapaamiseen
                  </Link>
                </div>
              </div>
              <Link
                to="/yhteystiedot"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-[#C9972E]/15"
                style={{ color: '#3E3326' }}
              >
                Yhteystiedot
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 pb-16">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{ color: '#3E3326' }}>
            Arkkitehti- ja Rakennuspalvelut Mänttä-Vilppulassa sekä Pirkanmaalla
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold max-w-2xl mx-auto" style={{ color: '#C9972E' }}>
            Tarkkaa suunnittelua, varmaa valvontaa
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="scroll-mt-28 md:scroll-mt-40 flex items-center justify-center px-4 sm:px-6 py-16"
        style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12" style={{ color: '#3E3326' }}>
            Palvelut
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const ServiceBox = (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border-2 transition-transform duration-500 ease-out hover:-translate-y-1"
                  style={{
                    backgroundImage: `linear-gradient(160deg, rgba(33, 24, 16, 0.82), rgba(62, 51, 38, 0.55)), url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    border: '2px solid #C9972E',
                    boxShadow: '0 4px 18px rgba(201, 151, 46, 0.25)',
                    cursor: service.link ? 'pointer' : 'default'
                  }}
                  onClick={() => handleServiceNavigation(service.link)}
                  role={service.link ? 'link' : undefined}
                  tabIndex={service.link ? 0 : -1}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handleServiceNavigation(service.link);
                    }
                  }}
                >
                  <div className="relative z-10 flex h-full flex-col gap-6 p-6 sm:p-8 lg:p-10">
                    <h3
                      className="text-xl sm:text-2xl font-bold"
                      style={{ color: '#FEF8EB', lineHeight: '1.4', letterSpacing: '0.01em' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg"
                      style={{
                        color: '#FDF3E0',
                        whiteSpace: 'pre-line',
                        lineHeight: '1.8',
                        fontWeight: 400,
                        letterSpacing: '0.01em'
                      }}
                    >
                      {service.desc}
                    </p>
                    {service.link && (
                      <span
                        className="mt-auto inline-flex items-center text-sm font-semibold uppercase tracking-widest text-[#FDE2AA] transition-transform duration-200 group-hover:translate-x-1"
                      >
                        Tutustu palveluun →
                      </span>
                    )}
                  </div>
                </div>
              );
              return ServiceBox;
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="scroll-mt-28 md:scroll-mt-40 flex items-center justify-center px-4 sm:px-6 py-16"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#3E3326' }}>
              Minusta
            </h2>
          </div>
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,320px)_1fr] items-start">
            <div
              className="rounded-3xl border shadow-lg p-8 flex flex-col items-center text-center"
              style={{ backgroundColor: '#FEF8EB', borderColor: '#C9972E', color: '#3E3326' }}
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-6 border-4" style={{ borderColor: '#C9972E' }}>
                <img
                  src="/tami_profiilikuva.webp"
                  alt="Tami Takala"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold">Tami Takala</h3>
                <div className="space-y-1 text-sm sm:text-base" style={{ color: '#3E3326', opacity: 0.85 }}>
                  <p className="font-medium" style={{ opacity: 0.9 }}>Yrittäjä</p>
                  <p className="block font-medium" style={{ color: '#3E3326' }}>
                    +358 40 154 7538
                  </p>
                  <p className="block font-medium" style={{ color: '#3E3326' }}>
                    tami.takala@aurinkokuningasoy.fi
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 text-base sm:text-lg leading-relaxed">
              <div className="rounded-3xl border p-6 sm:p-8 shadow-sm" style={{ backgroundColor: '#FEF8EB', borderColor: '#C9972E' }}>
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

      {/* Why Choose Us Section */}
      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: '#FEF8EB' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: '#3E3326' }}>
            Miksi valita meidät?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-2xl border-2 transition-all hover:shadow-lg" style={{ borderColor: '#C9972E' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3E3326' }}>Asiantuntemus</h3>
              <p style={{ color: '#3E3326', opacity: 0.9 }}>
                Vahva kokemus rakennusalan eri vaiheista takaa, että suunnitelmat ovat paitsi tyylikkäitä, myös teknisesti toteutuskelpoisia.
              </p>
            </div>
            <div className="p-8 rounded-2xl border-2 transition-all hover:shadow-lg" style={{ borderColor: '#C9972E' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3E3326' }}>Asiakaslähtöisyys</h3>
              <p style={{ color: '#3E3326', opacity: 0.9 }}>
                Kuuntelemme toiveitasi ja tarpeitasi tarkasti. Jokainen projekti on yksilöllinen, ja tavoitteemme on ylittää odotuksesi.
              </p>
            </div>
            <div className="p-8 rounded-2xl border-2 transition-all hover:shadow-lg" style={{ borderColor: '#C9972E' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3E3326' }}>Sujuva prosessi</h3>
              <p style={{ color: '#3E3326', opacity: 0.9 }}>
                Hoidamme viranomaisasiat ja lupaprosessit puolestasi, jotta voit keskittyä unelmasi rakentumiseen ilman turhaa stressiä.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: 'rgba(201, 151, 46, 0.05)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#3E3326' }}>
            Palvelualue
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed" style={{ color: '#3E3326' }}>
            Palvelemme asiakkaita pääasiassa <strong>Mänttä-Vilppulan</strong>, <strong>Ruoveden</strong>, <strong>Keuruun</strong>, <strong>Jämsän</strong>, <strong>Oriveden</strong>, <strong>Jyväskylän</strong> ja <strong>Pirkanmaan</strong> alueella.
            Tarvittaessa toteutamme arkkitehti- ja rakennesuunnittelua sekä konsultointia koko Suomen alueella.
            Ota yhteyttä ja kysy lisää palveluistamme omalla paikkakunnallasi!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-28 md:scroll-mt-40 px-4 sm:px-6 py-16"
        style={{ backgroundColor: 'rgba(201, 151, 46, 0.1)' }}
      >
        <div className="container mx-auto max-w-5xl">
          <div
            className="rounded-[32px] border shadow-2xl overflow-hidden"
            style={{ backgroundColor: '#FEF8EB', borderColor: '#C9972E' }}
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] items-stretch">
              <div
                className="px-6 py-8 sm:px-10 sm:py-12 border flex flex-col"
                style={{ backgroundColor: '#C9972E', borderColor: '#000000' }}
              >
                <div className="max-w-xl space-y-6 text-left">
                  <span
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em]"
                    style={{ color: '#FEF8EB' }}
                  >
                    <Mail className="h-4 w-4" />
                    Ota yhteyttä
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#FEF8EB' }}>
                    Kerro projektistasi – palaan sinulle yhden arkipäivän sisällä
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#FEF8EB', opacity: 0.92 }}>
                    Täytä viereinen lomake mahdollisimman kattavasti. Saat sähköpostitse vahvistuksen, jossa yhteenveto lähettämistäsi tiedoista, ja palaan sinulle henkilökohtaisesti.
                  </p>
                  <div className="grid gap-4 text-sm sm:text-base text-white/90">
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5" />
                      <div>
                        <p className="font-semibold text-white">Suora puhelin</p>
                        <p className="text-white font-medium">
                          +358 40 154 7538
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CalendarCheck className="mt-1 h-5 w-5" />
                      <div>
                        <p className="font-semibold text-white">Toiminta-alue</p>
                        <p>Pirkanmaa ja koko Suomi sopimuksen mukaan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form
                noValidate
                onSubmit={handleContactSubmit}
                className="space-y-8 px-6 py-8 sm:px-8 sm:py-10"
              >
                <div className="space-y-2 text-left">
                  <p
                    className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]"
                    style={{ color: '#C9972E' }}
                  >
                    Aloitetaan yhteistyö
                  </p>
                  <p className="text-sm sm:text-base" style={{ color: '#3E3326', opacity: 0.85 }}>
                    Täytä vähintään nimi, sähköposti ja lyhyt kuvaus tarpeestasi. Voit lisätä myös puhelinnumeron ja projektin vaiheen.
                  </p>
                </div>
                <div className="grid gap-5 sm:gap-6">
                  <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                    <label className="block text-left">
                      <span className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                        <User className="h-4 w-4" />
                        Nimi
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleContactFieldChange}
                        required
                        placeholder="Etunimi Sukunimi"
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                        style={{
                          backgroundColor: '#FEF8EB',
                          borderColor: '#C9972E',
                          color: '#3E3326'
                        }}
                      />
                    </label>
                    <label className="block text-left">
                      <span className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                        <Mail className="h-4 w-4" />
                        Sähköposti
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleContactFieldChange}
                        required
                        placeholder="nimi@yritys.fi"
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                        style={{
                          backgroundColor: '#FEF8EB',
                          borderColor: '#C9972E',
                          color: '#3E3326'
                        }}
                      />
                    </label>
                  </div>
                  <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                    <label className="block text-left">
                      <span className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                        <Phone className="h-4 w-4" />
                        Puhelin (valinnainen)
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleContactFieldChange}
                        placeholder="+358 40 123 4567"
                        autoComplete="tel"
                        className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                        style={{
                          backgroundColor: '#FEF8EB',
                          borderColor: '#C9972E',
                          color: '#3E3326'
                        }}
                      />
                    </label>
                    <label className="block text-left">
                      <span className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                        <CalendarCheck className="h-4 w-4" />
                        Projektin vaihe (valinnainen)
                      </span>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleContactFieldChange}
                        className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                        style={{
                          backgroundColor: '#FEF8EB',
                          borderColor: '#C9972E',
                          color: '#3E3326'
                        }}
                      >
                        <option value="">Valitse palvelu</option>
                        <option value="Arkkitehtisuunnittelu">Arkkitehtisuunnittelu</option>
                        <option value="Rakennesuunnittelu">Rakennesuunnittelu</option>
                        <option value="Konsultointipalvelut">Konsultointipalvelut</option>
                        <option value="Rakennuttajapalvelut">Rakennuttajapalvelut</option>
                        <option value="Muu">Muu tai useampi palvelu</option>
                      </select>
                    </label>
                  </div>
                  <label className="block text-left">
                    <span className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                      <Megaphone className="h-4 w-4" />
                      Mistä kuulit meistä? (valinnainen)
                    </span>
                    <select
                      name="contactSource"
                      value={formData.contactSource}
                      onChange={handleContactFieldChange}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                      style={{
                        backgroundColor: '#FEF8EB',
                        borderColor: '#C9972E',
                        color: '#3E3326'
                      }}
                    >
                      <option value="">Valitse vaihtoehto</option>
                      <option value="Google-haku">Google-haku</option>
                      <option value="Suosittelu">Suosittelu</option>
                      <option value="Sosiaalinen media">Sosiaalinen media</option>
                      <option value="Tapahtuma tai messut">Tapahtuma tai messut</option>
                      <option value="Muualta">Muualta</option>
                    </select>
                  </label>
                  <label className="block text-left">
                    <span className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#3E3326' }}>
                      <ClipboardList className="h-4 w-4" />
                      Viesti
                    </span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleContactFieldChange}
                      required
                      placeholder="Kuvaile lyhyesti projektisi, aikataulutoiveesi ja tärkeimmät taustatiedot"
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-[#C9972E]/20 focus:border-[#C9972E] transition-all"
                      style={{
                        backgroundColor: '#FEF8EB',
                        borderColor: '#C9972E',
                        color: '#3E3326',
                        resize: 'vertical'
                      }}
                    />
                  </label>
                </div>
                <div className="space-y-4">
                  {submissionError && (
                    <p className="text-sm font-semibold" style={{ color: '#B11F1F' }} role="alert">
                      {submissionError}
                    </p>
                  )}
                  {submissionStatus === 'submitting' && (
                    <p className="text-sm" style={{ color: '#3E3326' }} role="status">
                      Lähetetään viestiä...
                    </p>
                  )}
                  {submissionStatus === 'success' && !submissionError && (
                    <p className="text-sm" style={{ color: '#3E3326' }} role="status">
                      Kiitos viestistäsi! Olen vastaanottanut yhteydenottosi ja palaan asiaan yhden arkipäivän sisällä.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submissionStatus === 'submitting'}
                    className="w-full py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0"
                    style={{ backgroundColor: '#C9972E', boxShadow: '0 12px 24px rgba(201, 151, 46, 0.25)' }}
                  >
                    {submissionStatus === 'submitting' ? 'Lähetetään...' : 'Lähetä viesti'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
