import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Taxi Tam Kỳ - Gọi Taxi 0963500547 | Dịch vụ Taxi Giá Rẻ Quảng Nam',
  description: 'Dịch vụ taxi tư nhân tại Tam Kỳ, Quảng Nam. Tài xế Trần Văn Giáp, phục vụ 24/7, giá rẻ, an toàn. Gọi taxi ngay: 0963500547. Phục vụ Tam Kỳ, Đà Nẵng, Hội An, Chu Lai.',
  keywords: 'taxi Tam Kỳ, gọi taxi Quảng Nam, taxi giá rẻ Tam Kỳ, taxi Trần Văn Giáp, taxi 24/7 Tam Kỳ, đặt taxi Quảng Nam, taxi sân bay Chu Lai, taxi Đà Nẵng Tam Kỳ',
  authors: [{ name: 'Trần Văn Giáp' }],
  creator: 'Trần Văn Giáp',
  publisher: 'Taxi Tam Kỳ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://web-quang-cao-taxi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Taxi Tam Kỳ - Gọi Taxi 0963500547 | Dịch vụ Taxi Giá Rẻ Quảng Nam',
    description: 'Dịch vụ taxi tư nhân tại Tam Kỳ, Quảng Nam. Tài xế Trần Văn Giáp, phục vụ 24/7, giá rẻ, an toàn. Gọi taxi ngay: 0963500547.',
    url: 'https://web-quang-cao-taxi.vercel.app',
    siteName: 'Taxi Tam Kỳ - Trần Văn Giáp',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/images/background2.png',
        width: 1200,
        height: 630,
        alt: 'Taxi Tam Kỳ - Dịch vụ taxi uy tín tại Quảng Nam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Tam Kỳ - Gọi Taxi 0963500547 | Dịch vụ Taxi Giá Rẻ Quảng Nam',
    description: 'Dịch vụ taxi tư nhân tại Tam Kỳ, Quảng Nam. Tài xế Trần Văn Giáp, phục vụ 24/7, giá rẻ, an toàn.',
    images: ['/images/background2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Thay bằng code từ Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF9900" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Taxi Tam Kỳ" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Taxi Tam Kỳ - Trần Văn Giáp",
              "description": "Dịch vụ taxi tư nhân tại Tam Kỳ, Quảng Nam. Phục vụ 24/7, giá rẻ, an toàn.",
              "url": "https://web-quang-cao-taxi.vercel.app",
              "telephone": "+84963500547",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tam Kỳ",
                "addressRegion": "Quảng Nam",
                "addressCountry": "VN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "15.5736",
                "longitude": "108.4740"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "serviceType": "Taxi Service",
              "areaServed": [
                "Tam Kỳ",
                "Quảng Nam", 
                "Đà Nẵng",
                "Hội An",
                "Chu Lai"
              ],
              "sameAs": [
                "https://zalo.me/0963500547"
              ],
              "image": "https://web-quang-cao-taxi.vercel.app/images/background2.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
