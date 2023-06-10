import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import MainView from '@/components/main/Main'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<Layout >
 <MainView/>
</Layout>
  )
//   return (
// <Layout layoutStyles={'px-5'}>
// {/* <MainView/> */}
// </Layout>
//   )
}
