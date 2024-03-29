import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css'
import HomeNavbar from "@/components/navbar";

export const metadata = {
  title: 'PHOMC 2024',
  description: 'PHOMC 2024',
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
      </body>
    </html>
  )
}
