import Head from 'next/head';
import Link from 'next/link';
import Layout from '/Users/troysisson/Documents/Dev/personal-website/components/layout.js';


export default function Contact() {
    return (
        <Layout>
          <h1>Contact</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </Layout>
      );
  }