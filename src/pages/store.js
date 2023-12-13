import React from 'react';
import Layout from '@theme/Layout';

export default function Store() {
  return (
    <Layout title="AIS store" description="AI-Speaker OpenSource Store">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '20px',
        }}>
        <iframe src="https://sviete.pl" style={{width:"100%", height: "100%"}}>

        </iframe>
      </div>
    </Layout>
  );
}


