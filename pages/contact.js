import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '/Users/troysisson/Documents/Dev/personal-website/components/layout.js';
import utilStyles from '/Users/troysisson/Documents/Dev/personal-website/styles/utils.module.css';


export default function Contact() {
    return (
        <Layout>
          <h1>Connect</h1>
          
            <div className={utilStyles.contactLink1}>
              <Link href="https://github.com/tasisso">
                    <Image
                      priority
                      src="/images/github-logo.png"
                      className={utilStyles.borderCircle}
                      height={100}
                      width={100}
                      alt=""
                    />
              </Link>
            </div>
            <div className={utilStyles.contactLink2}>
              <Link href="https://linkedin.com/in/troy-sisson-760410248">
                    <Image
                      priority
                      src="/images/linkedin-logo.png"
                      className={utilStyles.borderCircle}
                      height={100}
                      width={100}
                      alt=""
                    />
              </Link>
            </div>
            <div className={utilStyles.contactLink3}>
              <Link href="mailto:tasisson12@gmail.com">
                    <Image
                      priority
                      src="/images/mail-button.png"
                      className={utilStyles.borderCircle}
                      height={100}
                      width={100}
                      alt=""
                    />
              </Link>
            </div>

            <button className={utilStyles.resume}>
              <Image className={utilStyles.buttonImg}
                        priority
                        src="/images/download-icon.png"
                        height={90}
                        width={90}
                        alt=""
                      />
              <span className={utilStyles.bText}>Download Resume</span>
              <Link href="" download>
                    
              </Link>
            </button>
          
        </Layout>
      );
  }