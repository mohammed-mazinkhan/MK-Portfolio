import type { Metadata } from 'next';
import './globals.css';
export const viewport={themeColor:'#090909'};
export const metadata: Metadata={title:'Mohammed Mazin Khan | Automation & Analytics',description:'Portfolio of Mohammed Mazin Khan — automation, analytics and product engineering.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
