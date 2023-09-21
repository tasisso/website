import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';


export default function Portfolio() {
  return (
    <Layout portfolio>
      <h1>Portfolio</h1>
      <ul>
        <div>
          <li className={utilStyles.projectEntry}>
            <Link className={utilStyles.prLink} href="https://github.com/tasisso/website">Personal Website (2023)</Link>
            <div className={utilStyles.typewriteBox}>
              <p>&#62; I made this website primarily with React and Node js. 
                This project allowed me to learn some of the basics of HTML, JavaScript, and CSS.
              </p>
            </div>
          </li>
        </div>
        <div>
          <li className={utilStyles.projectEntry}>
            <Link className={utilStyles.prLink} href="https://github.com/tasisso/website">Python Data Visualization Practice (2023)</Link>
            <div className={utilStyles.typewriteBox}>
              <p>&#62; This quick project from Coursera gave me some extra practice with important python libraries like numpy, pandas, and matplotlib.
              </p>
            </div>
          </li>
        </div>
        <div>
          <li className={utilStyles.projectEntry}>
            <Link className={utilStyles.prLink} href="https://docs.google.com/presentation/d/1pybCRwgNIEibDvQiO6HoGZMN-4smN10NzOXvWYdH70g/edit?usp=sharing">BIGDOC Final Presentation (2021)</Link>
            <div className={utilStyles.typewriteBox}>
              <p>&#62; Bruins in Genomics: Dental, Oral & Craniofacial Summer Research Project in collaboration with Leon Zha.
              </p>
            </div>
          </li>
        </div>
      </ul>
      
      
    </Layout>
  );

  

}



