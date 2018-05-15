import React from 'react';
import PropTypes from 'prop-types';

import Particles from 'react-particles-js';
import particles from '../data/particles.blocks.json';

import Content, { HTMLContent } from '../components/Content';

import { MuiThemeProvider } from 'material-ui/styles';

import Button from 'material-ui/Button';
import theme from '../themes/default';

export const ParticlesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <Particles
                params={{
                  particles: particles.particles,
                  interactivity: particles.interactivity
                }}
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/random/1280x1024")',
                  backgroundColor: 'purple',
                  backgroundBlendMode: 'screen',
                  backgroundSize: 'cover'
                }}
              />
              <MuiThemeProvider theme={theme}>
                <Button variant="raised" color="primary">
                  Hello World
                </Button>
              </MuiThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ParticlesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ParticlesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ParticlesPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ParticlesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ParticlesPage;

export const aboutPageQuery = graphql`
  query ParticlesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
