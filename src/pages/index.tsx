import { Photo } from '@/types';
import Head from 'next/head'
import Layout from '../components/common/layout/Layout';
import Gallery from '../components/gallery/Gallery';
import { GetServerSideProps } from 'next';
import { Upload } from '@/components/upload/Upload';
import { UploadContextProvider} from '@/contexts/upload';

interface HomeProps {
  photos: Photo[];
}

const Home = ({ photos }: HomeProps) => {
  return (
    <div id="container">
      <Head>
        <title>Listella Frontend Test</title>
        <meta name="description" content="Some meaningful description for SEO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UploadContextProvider>
          <Layout>
            <div style={{marginBottom: "78px"}}>
              <Gallery photos={photos} />
            </div>
            <Upload />
          </Layout>
        </UploadContextProvider>
      </main>
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let response;
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API}`;
  
  try {
      response = await fetch(URL);
  } catch (error) {
      throw new Error();
  }

  if (response.status >= 400) {
    if (response.status === 404) {
      return {
        notFound: true,
      };
    }
    if (response.status === 500) {
      throw new Error();
    }
    return {
      redirect: { destination: `/error/${response.status}`, permanent: false },
    };
  }

  const data: { photos?: Photo[] } = await response.json();

  return {
    props: { photos: data.photos },
  };
};