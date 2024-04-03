import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/bootstrap.css"
import "public/assets/css/style.css"
import "public/assets/css/color.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { inter, manrope } from '@/lib/font'
export const metadata = {
    title: 'MetroBank React Template',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
            <body>{children}</body>
        </html>
    )
}
