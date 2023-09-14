import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <h1>About Me</h1>
        <div className={utilStyles.contentBox}>
          <p>Hello world! My name is Troy.
            I grew up in Fort Collins, CO, and completed my undergrad at the University of
            California, Los Angeles. When I stumbled upon my first computer science course in college, 
            I searched for ways to integrate my blossoming passion for the subject with my existing interests 
            in biological sciences. Specifically, I am interested in studying applications of ML/DL tools in Genomics. After taking time off to recover from hip surgery, I am excited to continue 
            this journey through UCLA's Data Science in Biomedicine M.S. Program in the fall of 2023. 
            The program is part-time, allowing me to work and study concurrently.
          </p>
          <p />
          <p className={utilStyles.lineBreak}>
            Aside from learning new tools, I like to stay active by cycling, lifting weights, and rock climbing in my free time. 
            I also enjoy playing classical piano, basketball (go Bruins), and video games with friends.
          </p>
          <h3 className={utilStyles.tableHeader}>Relevant Coursework</h3>
          <table className={utilStyles.tble}>
            <thead className={utilStyles.thea}>
              <tr>
                <th className={[utilStyles.th1, styles.thea].join(' ')}>Computer Science</th>
                <th className={[utilStyles.th2, styles.thea].join(' ')}>Math</th>
                <th className={[utilStyles.th3, styles.thea].join(' ')}>Biochemistry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={utilStyles.tdat}>Introduction to Computer Science I & II</td>
                <td className={utilStyles.tdat}>Differential and Integral Calculus</td>
                <td className={utilStyles.tdat}>Biochemical Methods I & II</td>
              </tr>
              <tr>
                <td className={utilStyles.tdat}>Introduction to Algorthims & Complexity</td>
                <td className={utilStyles.tdat}>Calculus of Several Variables</td>
                <td className={utilStyles.tdat}>DNA, RNA & Protein Synthesis</td>
              </tr>
              <tr>
                <td className={utilStyles.tdat}>Introduction to Computer Organization</td>
                <td className={utilStyles.tdat}>Linear Algebra</td>
                <td className={utilStyles.tdat}>Enzymes, Structures & Metabolism</td>
              </tr>
              <tr>
                <td className={utilStyles.tdat}>Algorithms in Bioinformatics</td>
                <td className={utilStyles.tdat}>Introduction to Discrete Structures</td>
                <td className={utilStyles.tdat}>Physical Thermodynamics</td>
              </tr>
            </tbody>
          </table>
          <figcaption className={utilStyles.fig}>Upcoming: Machine Learning Applications in Biomedicine (Fall 2023)</figcaption>
        </div>
      </section>
    </Layout>
  );
}
