import Head from 'next/head'
import Homepage from '@/components/home/Homepage'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Plants and Me</title>
        <meta name="description" content="Plants information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Homepage />
      </main>
    </>
  )
}
