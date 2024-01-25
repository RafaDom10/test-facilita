import { Layout } from './view/pages/Layout';
import { Theme } from './themes/default';
import { Toaster } from 'react-hot-toast';

export function App() {

  return (
    <Theme>
      <Layout />
      <Toaster />
    </Theme>
  )
}
