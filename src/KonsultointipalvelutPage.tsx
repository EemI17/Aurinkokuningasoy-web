import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import aurinkokuningasLogo from './assets/aurinkokuningasTransparent';
import konsultointipalvelutBackground from './assets/konsultointipalvelutBackground';

function KonsultointipalvelutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}
      >
        <nav className="px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-center justify-center gap-3 sm:gap-4 sm:justify-start">
            <img
              src={aurinkokuningasLogo}
              alt="Aurinkokuninkaan Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto flex-shrink-0 object-contain"
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
            Konsultointipalvelut
          </h1>

          <div
            className="mt-10 rounded-2xl border-2 p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8"
            style={{
              backgroundImage: `linear-gradient(160deg, rgba(33, 24, 16, 0.82), rgba(62, 51, 38, 0.6)), url(${konsultointipalvelutBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              border: '2px solid #C9972E',
              boxShadow: '0 10px 30px rgba(201, 151, 46, 0.12)'
            }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: '#FEF8EB',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Tarjoan konsultointipalveluita, joiden avulla saat asiantuntevaa tukea ja selkeyttä rakennusprojektiisi. Voin auttaa esimerkiksi suunnitelmien arvioinnissa, hankkeen kustannusarvion laatimisessa sekä viranomaisasioiden hoitamisessa. Olen rinnallasi silloin, kun tarvitset neuvoja, vaihtoehtoja ja käytännön kokemusta päätöksenteon tueksi.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: '#FEF8EB',
                lineHeight: '2',
                fontSize: '1.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Konsultoinnin laajuus määräytyy aina tarpeidesi mukaan. Voit hyödyntää osaamistani pienissä yksityiskohdissa tai koko projektin kokonaisvaltaisessa suunnittelussa ja läpiviennissä. Tavoitteeni on tehdä rakennushankkeestasi selkeämpi ja varmistaa, että etenet oikeaan suuntaan ilman turhia mutkia.
            </p>

            <div
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2"
              style={{ borderColor: 'rgba(253, 226, 170, 0.8)' }}
            >
              <h2
                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
                style={{ color: '#FDE2AA' }}
              >
                Palvelut sisältävät
              </h2>
              <ul className="space-y-4">
                {[
                  'Asiantuntevaa tukea rakennushankkeen eri vaiheisiin',
                  'Suunnitelmien arviointi ja kustannusarvioiden laadinta',
                  'Viranomaisasioiden hoitamisen neuvonta',
                  'Ratkaisut asiakkaan tarpeen mukaan',
                  'Päätöksenteon helpottaminen ja projektin selkeyttäminen'
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-base sm:text-lg"
                    style={{ color: '#FEF8EB' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#FDE2AA' }}
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

export default KonsultointipalvelutPage;
