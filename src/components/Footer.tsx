import { Facebook, Instagram } from 'lucide-react';
import type { SVGProps } from 'react';

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      d="M21 8.5c-1.8 0-3.4-.6-4.7-1.6v7.3c0 3.5-2.8 6.3-6.3 6.3S3.7 17.7 3.7 14.2c0-3.2 2.3-5.8 5.3-6.2v3.4c-1.1.3-2 1.3-2 2.6 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7V3h3.6c.2 1.9 1.7 3.4 3.6 3.6V8.5z"
    />
  </svg>
);

const iconStyle = { color: '#3E3326' } as const;

const socialLinks = [
  {
    label: 'Instagram',
    Icon: Instagram,
    href: 'https://www.instagram.com/ak_suunnittelu_ja_rakennus?igsh=MXJzampkdDRhNWZtdw=='
  },
  {
    label: 'Facebook',
    Icon: Facebook,
    href: 'https://www.facebook.com/share/1APfb3Bzrz/?mibextid=wwXIfr'
  },
  {
    label: 'TikTok',
    Icon: TikTokIcon,
    href: 'https://www.tiktok.com/@ak.suunnittelu.ja'
  }
];

function Footer() {
  return (
    <footer className="px-6 py-6" style={{ backgroundColor: '#C9972E' }}>
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium" style={{ color: '#3E3326' }}>
            &copy; 2025 Aurinkokuninkaan Suunnittelu-ja Rakennuspalvelu OY. All rights reserved.
          </p>
          <p className="text-sm sm:text-base" style={{ color: '#3E3326' }}>
            Purolantie 9 35800 Mänttä
          </p>
          <p className="text-sm sm:text-base" style={{ color: '#3E3326' }}>
            Y-tunnus 3569037-1
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 transition-transform hover:-translate-y-0.5"
              style={{ borderColor: '#3E3326', color: '#3E3326' }}
            >
              <Icon className="h-5 w-5" style={iconStyle} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
