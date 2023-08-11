import Head from 'next/head';
import Link from 'next/link';
import Layout from '/Users/troysisson/Documents/Dev/personal-website/components/layout.js';

export default function Portfolio() {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}