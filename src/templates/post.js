import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div``

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.esaPost
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <Wrapper>
        <Helmet title={`${post.name}`} />
        <h1>{post.name}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.updated_at}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
      </Wrapper>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($number: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    esaPost(number: { eq: $number }) {
      number
      name
      wip
      body_html
      updated_at
    }
  }
`
