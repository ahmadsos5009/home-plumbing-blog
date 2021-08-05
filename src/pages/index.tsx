import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: '1.45rem' }}
    />
    <p>
      <Container>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
      <br />
      <Link to="/using-typescript/">Go to Using TypeScript</Link>
    </p>
  </Layout>
);

export default IndexPage;
