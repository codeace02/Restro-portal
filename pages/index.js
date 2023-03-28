import Head from 'next/head'
import dynamic from "next/dynamic";
const Main = dynamic(() => import("../src/components/index"));


export default function Home() {
  return (
    <>
      <Main />
    </>
  )
}
