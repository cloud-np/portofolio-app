import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import '../styles/Home.module.css'
import gsap from 'gsap'

export default function Home() {
  useEffect(() => {
    gsap.to(".animTitle", {
      y: 100,
      opacity: 1,
      duration: 1,
      stagger: .1,
   });
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Portofolio | cloud-np</title>
        <meta name="description" content="Portofolio site" />
        <link rel="icon" href="/cloud.png" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={`animTitle ${styles.title}`}>
            <span className={styles.constructionIcon}>🚧</span>
            Welcome to <a href="https://github.com/cloud-np">cloud-np!</a>
          </h1>
        </div>
        <h3 className={styles.descriptionTitle}>The site is under construction soo...</h3>
        
        <p className={styles.titleUndertext}>Check my <a className={styles.githubLink} href="https://github.com/cloud-np">github</a> in the meanwhile</p>
        <p className={styles.description}>
           {/* In the meanwhile check: <a href="https://github.com/cloud-np" >github</a> */}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
