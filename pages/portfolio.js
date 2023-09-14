import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';


export default function Portfolio() {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <ul>
        <div>
          <li className={utilStyles.projectEntry}>
            <Link className={utilStyles.prLink} href="https://github.com/tasisso/website">Personal Website (2023)</Link>
            <div className={utilStyles.typewriteBox}>
              <p>&#62; I made this website using Node js. 
                This project allowed me to practice the basics of HTML, JavaScript, and CSS.
              </p>
            </div>
          </li>
        </div>
        <div>
          <li className={utilStyles.projectEntry}>
            <Link className={utilStyles.prLink} href="https://github.com/tasisso/website">Python Data Visualization Practice (2023)</Link>
            <div className={utilStyles.typewriteBox}>
              <p>&#62; Oh here's another good one. I completed some python Coursera refreshers and 
                and got practice with some different libraries.
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



