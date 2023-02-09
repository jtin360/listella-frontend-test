import { Photo } from '@/types';
import Head from 'next/head'
import Layout from '../components/common/layout/Layout';
import Gallery from '../components/gallery/Gallery';
import { GetServerSideProps } from 'next';
import { Upload } from '@/components/upload/Upload';
import { UploadContextProvider} from '@/contexts/upload';
import { getRover } from '@/pages/api/nasa';

interface HomeProps {
  photos: Photo[]
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
  try {
    const rover = await getRover();
    return { props: { photos: rover.photos, status: 'success' }};
  } catch (e) {
    return { 
      props: { photos: [], status: 'error' },
    }
  }
};