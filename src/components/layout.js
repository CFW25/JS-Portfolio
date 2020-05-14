import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from './globalStyle';
import Nav from './nav/nav';
import Footer from './footer/footer';
import Hero from './hero/hero'

const ContentWrapper = styled.div`
`;
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
          <html lang="en" />
        </Helmet>
        <Nav/>        
        <ContentWrapper>{children}</ContentWrapper>
        <Footer/>
      </>
    )}
  />
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;