import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'C 언어 학습 플랫폼',
  description: 'Interactive C programming learning platform - C 언어 인터랙티브 학습 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
