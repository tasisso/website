import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '/Users/troysisson/Documents/Dev/personal-website/components/layout.js';
import utilStyles from '/Users/troysisson/Documents/Dev/personal-website/styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <h1>About Me</h1>
        <div className={utilStyles.contentBox}>
          <p>Hello, my name is Troy.
            I grew up in Fort Collins, CO, and completed my undergrad at the University of
            California, Los Angeles. After taking my first Computer Science class there, I was 
            immediately hooked on the subject. From then on, I searched for ways to integrate this newfound passion
            with my existing interest in medicine. I am excited to continue this journey through
            UCLA's Data Science in Biomedicine M.S. Program in the fall of 2023. Since the program is part-time,
            I plan to work and study concurrently.
          </p>
          <p>

          </p>
          <p>
            Aside from work, I like to spend time outdoors running, cycling,
            snowboarding, and rock climbing. I also enjoy playing piano, basketball (go Bruins),
            and games like Super Smash Bros. 
          </p>
        </div>
      </section>
    </Layout>
  );
}
