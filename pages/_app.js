import { AuthProvider } from '@/context/auth';
import { MediaProvider } from '@/context/media';
import { PostProvider } from '@/context/post';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PostProvider>
        <MediaProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MediaProvider>
      </PostProvider>
    </AuthProvider>
  );
}
