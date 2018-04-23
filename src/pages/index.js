import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const esaPosts = get(this, 'props.data.allEsaPost.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {
          esaPosts.map(({ node }) => {
            return <div key={node.number}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
              <Link style={{ boxShadow: 'none' }} to={`/posts/${node.number}`}>
                {node.name}
              </Link>
              </h3>
              <small>{node.updated_at}</small>
              <p dangerouslySetInnerHTML={{ __html: node.body_md }} />
            </div>
          })
        }
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    allEsaPost {
      edges {
        node {
          number
          name
          body_md
          updated_at
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
