import fonts from '@/fonts';
import { iPropChildren } from '@/interfaces';
import './globals.css';

export const metadata = {
  title: 'Luan Florencio Portfolio',
  description: 'Porfolio profissional como desenvolvedor Web Full Stack',
}

const RootLayout = ({children}: iPropChildren) => {
  return (
    <html lang="pt-br" className={fonts}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
