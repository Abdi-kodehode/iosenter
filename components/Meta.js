import Head from 'next/head';

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf8" />
      <link rel="icon" href="/islamsk.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Islamsk Opplæringssenter',
  description: 'Moske i Stavanger. Mosque in Stavanger',
  keywords: 'Fredagsbønn, bønn, veiledning, samhold, integrering,',
};

export default Meta;
