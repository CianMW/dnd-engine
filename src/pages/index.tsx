import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { generateDungeonRoom } from '@/utils/generateDungeonRoom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<Layout layoutStyles={'px-5'}>
  <div>home</div>
  <button className="h-16 bg-blue-200 drop-shadow-md rounded-md px-2" onClick={() =>console.log(generateDungeonRoom())}>generate a room</button>
</Layout>
  )
}
