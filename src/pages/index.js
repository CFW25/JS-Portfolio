import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Image from '../components/image';
import Banner from "../components/Banner"
import Hero from "../components/hero/hero"
import Projects from "../components/projects/projects"
import Contact from "../components/contact"
import { graphql } from 'gatsby'
import Design from "../components/design/design"

const IndexPage = ({data}) => (
  <Layout>
    <Hero home="true" img={data.defaultBcg.childImageSharp.fluid}>
                <Banner title="Hey There!"
                        name="I'm Craig Whittington"
                        info="a web developer"
            >
    </Banner>
    </Hero>
    <Projects />
    <Design/>
    <Contact/>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`