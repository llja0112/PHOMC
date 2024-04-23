import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css'
import HomeNavbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: 'PHOM 2024',
  description: 'PHOM 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HomeNavbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
