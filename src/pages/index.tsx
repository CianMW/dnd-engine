import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import MainView from '@/components/main/Main'
import MainStore from '@/context'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainStore>
<Layout >
 <MainView/>
</Layout>
    </MainStore>
  )
//   return (
// <Layout layoutStyles={'px-5'}>
// {/* <MainView/> */}
// </Layout>
//   )
}
