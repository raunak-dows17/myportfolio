import Head from "next/head";

const SITE_URL = "https://raunak-pandey-portfolio.vercel.app";

export default function Seo({ title, description, path = "" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Raunak Pandey" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
      <meta property="og:image" content={`${SITE_URL}/images/profile.jpeg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/images/profile.jpeg`} />
    </Head>
  );
}
