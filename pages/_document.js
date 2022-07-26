import { Html, Head, Main, NextScript } from 'next/document'

const DEFAULT = {
  sitename: 'Indigofera',
  domain: 'http://indigofera.site/',
  description:
    'Terdapat berbagai manfaat Indigofera mulai dari pakan ternak hingga sebagai pewarna',
  image: '/logo-ugm.png'
}

export default function Document() {
  const data = { ...DEFAULT }
  const supertitle = data.title
    ? `${data.title} — ${data.sitename} `
    : data.sitename

  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/logo-ugm.png' />
        <meta name='robots' content='follow, index' />
        <meta name='description' content={data.description} />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={supertitle} />
        <meta property='og:site_name' content={supertitle} />
        <meta property='og:description' content={data.description} />
        <meta property='og:image' name='image' content={data.image} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={supertitle} />
        <meta name='twitter:title' content={supertitle} />
        <meta name='twitter:description' content={data.description} />
        <meta name='twitter:image' content={data.image} />
      </Head>
      <body className='overflow-x-hidden antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
