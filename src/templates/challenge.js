import React from 'react';
import { graphql } from 'gatsby';
import createDOMPurify from 'dompurify';

import Layout from '../components/layout';
import Tag from '../components/tag';

const ChallengePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, tags } = frontmatter;
  const tagText = tags.split(/\s*,\s*/);
  const purify = typeof window !== 'undefined' ? createDOMPurify(window) : null;
  const sanitizedHtml = purify
    ? purify.sanitize(html)
    : 'could not purify html';
  return (
    <Layout>
      <h1>{title}</h1>
      {tagText.map((text) => <Tag key={text} text={text} />)}
      <section dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </Layout>
  );
};

export default ChallengePage;

export const challengePageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`;
