import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


const name = 'Troy Sisson';
export const siteTitle = 'Troy Sisson';

export default function Layout({ children, home }) {
  return (
    //className={styles.container}
    <div > 
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className={styles.sidebar}>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
            
                alt=""
              />
              <h1 className={utilStyles.headingLg}>{name}</h1>
              <ul>
                <li className = {styles.degree}>
                  B.S. Biochemistry, Minor in Bioinformatics (2022)
                </li>
                <li className = {styles.degree}>
                  M.S. Data Science in Biomedicine (Expected 2025)
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        {/* NAVBAR */}
        <nav className="sidebar">
          <div className="flex">
            <ul className="navlist">
              <div className="tab1">
                <li className={[styles.aboutme, styles.navlink].join(' ')}>
                  <Link className={styles.aSide} href="/">About Me</Link>
                </li>
              </div>
              <div className="tab2">
                <li className={[styles.portfolio, styles.navlink].join(' ')}>
                  <Link className={styles.aSide} href="/portfolio">Portfolio</Link>
                </li>
              </div>
              <div className="tab3">
                <li className={[styles.contact, styles.navlink].join(' ')}>
                  <Link className={styles.aSide} href="/contact">Contact</Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
      <main className={styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}