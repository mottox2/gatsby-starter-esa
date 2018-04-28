import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'

import Auther from '../components/Auther'

import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div`
  padding: 12px;
`

const Title = styled.h1`
  font-size: 24px;
`

const Content = styled.div`
  margin-top: 24px;
  .hidden {
    display: none;
  }
`

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.esaPost
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <Wrapper>
        <Helmet title={`${post.name}`} />
        <Title style={{ marginBottom: 0, marginTop: 12 }}>{post.name}</Title>
        <Auther post={post} />
        <Content dangerouslySetInnerHTML={{ __html: post.body_html }} />
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
      updated_by {
        name
        screen_name
        icon
      }
    }
  }
`
