import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '/Users/troysisson/Documents/Dev/personal-website/components/layout.js';
import utilStyles from '/Users/troysisson/Documents/Dev/personal-website/styles/utils.module.css';
import styles from '/components/layout.module.css';

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
            California, Los Angeles. After encountering C++ in my first Computer Science course, I was understandably
            hooked on the subject. From then on, I searched for ways to integrate this newfound passion
            with my existing interest in medicine. I am excited to continue this journey through
            UCLA's Data Science in Biomedicine M.S. Program in the fall of 2023. Since the program is part-time,
            I plan to work and study concurrently.
          </p>
          <p>

          </p>
          <p className={utilStyles.lineBreak}>
            Aside from school, I like to spend time outdoors running, cycling, and rock climbing. I also enjoy playing piano, basketball (go Bruins),
            and games like Super Smash Bros. or Elden Ring.
          </p>
          <h3 className={styles.tableHeader}>Relevant Coursework</h3>
          <table className={styles.courses}>
          <tr>
              <th className={styles.th1}>Computer Science</th>
              <th className={styles.th2}>Math</th>
              <th className={styles.th3}>Biochemistry</th>
            </tr>
            <tr>
              <td>Introduction to Computer Science I & II</td>
              <td>Differential and Integral Calculus</td>
              <td>Biochemical Methods I & II</td>
            </tr>
            <tr>
              <td>Introduction to Algorthims & Complexity</td>
              <td>Calculus of Several Variables</td>
              <td>DNA, RNA & Protein Synthesis</td>
            </tr>
            <tr>
              <td>Introduction to Bioinformatics</td>
              <td>Linear Algebra</td>
              <td>Enzymes, Structures & Metabolism</td>
            </tr>
            <tr>
              <td>Algorithms in Bioinformatics</td>
              <td>Introduction to Discrete Structures</td>
              <td>Physical Thermodynamics</td>
            </tr>
          </table>
          <figcaption>Upcoming: Machine Learning Applications in Biomedicine (Fall 2023)</figcaption>
        </div>
      </section>
    </Layout>
  );
}
