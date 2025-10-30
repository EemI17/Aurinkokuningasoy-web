import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import aurinkokuningasLogo from './assets/aurinkokuningasLogo.svg';

function YhteystiedotPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF8EB' }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: 'rgba(254, 248, 235, 0.95)', borderColor: '#C9972E' }}
      >
        <nav className="px-4 sm:px-6 py-4">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-center justify-center gap-3 sm:gap-4 sm:justify-start">
              <img
                src={aurinkokuningasLogo}
                alt="Aurinkokuninkaan Logo"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
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
              Takaisin etusivulle
            </a>
          </div>
        </nav>
      </header>

      <main className="px-4 sm:px-6 pt-28 pb-16">
        <div className="container mx-auto max-w-5xl">
          <section className="text-center mb-14 sm:mb-16">
            <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-semibold mb-5" style={{ color: '#C9972E' }}>
              Ota yhteyttä
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: '#3E3326' }}>
              Yhdessä teemme seuraavasta projektistasi onnistuneen
            </h1>
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#3E3326' }}>
              Olipa kyseessä uusi rakennusprojekti tai nykyisen hankkeen tukeminen, Tami auttaa sinua varmistamaan, että
              kokonaisuus pysyy hallittuna ja tavoitteet saavutetaan. Valitse itsellesi sopivin yhteydenottotapa, niin
              palaamme asiaan nopeasti.
            </p>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="rounded-3xl border shadow-2xl p-6 sm:p-8 lg:p-10 space-y-8"
              style={{ backgroundColor: '#FEF8EB', borderColor: '#C9972E', boxShadow: '0 25px 45px rgba(201, 151, 46, 0.18)' }}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="text-left space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: '#3E3326' }}>
                    Tami
                  </h2>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.25em]" style={{ color: '#C9972E' }}>
                    Yrittäjä, rakennusalan asiantuntija
                  </p>
                </div>
                <div
                  className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 flex items-center justify-center"
                  style={{ borderColor: '#C9972E', backgroundColor: 'rgba(201, 151, 46, 0.08)' }}
                >
                  <span className="text-3xl sm:text-4xl font-semibold" style={{ color: '#C9972E' }}>TT</span>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {[
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Puhelin',
                    value: '+358 40 154 7538',
                    helper: 'Parhaiten tavoitat arkisin klo 8–17',
                    emphasize: true
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: 'Toimialue',
                    value: 'Pirkanmaa ja koko Suomi sopimuksen mukaan',
                    helper: 'Joustavat ratkaisut myös etäpalavereilla'
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: 'Sähköposti',
                    value: 'tami.takala@aurinkokuningasoy.fi',
                    helper: 'Vastaamme viesteihin yhden arkipäivän sisällä',
                    wrapperClassName: 'md:col-span-2',
                    emphasize: true
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                      item.wrapperClassName ?? ''
                    }`}
                    style={{ backgroundColor: '#FEF8EB', borderColor: '#C9972E', color: '#3E3326' }}
                  >
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                      style={{ backgroundColor: 'rgba(201, 151, 46, 0.12)', color: '#C9972E' }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#3E3326' }}>
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed break-words ${
                        item.emphasize ? 'font-medium' : ''
                      }`}
                      style={{ color: '#3E3326' }}
                    >
                      {item.value}
                    </p>
                    {item.helper && (
                      <p className="mt-3 text-xs sm:text-sm" style={{ color: '#3E3326', opacity: 0.75 }}>
                        {item.helper}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div
                className="rounded-3xl border shadow-lg p-6 sm:p-8"
                style={{ backgroundColor: '#FEF8EB', borderColor: '#C9972E', boxShadow: '0 16px 30px rgba(201, 151, 46, 0.12)' }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: '#3E3326' }}>
                  Suunnitellaan seuraava askel yhdessä
                </h2>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#3E3326' }}>
                  Ota yhteyttä, niin rakennamme yhdessä selkeän suunnitelman seuraaville askelille. Saat asiantuntevan
                  näkemyksen, realistisen aikataulun sekä läpinäkyvän tavan seurata projektin etenemistä.
                </p>
              </div>

              <div
                className="rounded-3xl border p-6 sm:p-8 space-y-5"
                style={{ backgroundColor: 'rgba(201, 151, 46, 0.08)', borderColor: '#C9972E' }}
              >
                <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#3E3326' }}>
                  Miten voimme auttaa?
                </h3>
                <ul className="space-y-3 text-sm sm:text-base" style={{ color: '#3E3326' }}>
                  {[
                    'Rakennushankkeen kokonaisvaltainen suunnittelu ja koordinointi',
                    'Pää- ja vastaavan työnjohtajan palvelut eri kohteisiin',
                    'Rakenteiden turvallisuuden ja kustannustehokkuuden varmistaminen',
                    'Asiantunteva neuvonta viranomaisasioissa ja lupaprosesseissa'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: '#C9972E' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default YhteystiedotPage;
