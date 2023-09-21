import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


const name = 'Troy Sisson';
export const siteTitle = 'Troy Sisson';

export default function Layout({ children, home }) {
  return (
    
    <div > 
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="../site.webmanifest" />
        <meta
          name="troy.sisson"
          content="Personal website"
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
                src="/images/portrait.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
              
            
                alt=""
                
              />
              <h1 className={utilStyles.headingLg}>{name}</h1>
              <ul>
                <li className = {styles.degree}>
                  M.S. Data Science in Biomedicine (Expected 2025)
                </li>
                <li className = {styles.degree}>
                B.S. Biochemistry, Minor in Bioinformatics (2022)
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/cat.jpg"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt=""
                />
              </Link>
              <h1 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h1>
              <ul>
                <li className = {styles.degree}>
                  M.S. Data Science in Biomedicine (Expected 2025)
                </li>
                <li className = {styles.degree}>
                  B.S. Biochemistry, Minor in Bioinformatics (2022)
                </li>
              </ul>
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
                  <Link className={styles.aSide} href="/contact">Connect</Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}