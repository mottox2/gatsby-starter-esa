import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const Cell = styled.div`
  padding: 24px;
  border: 1px solid #eee;
  margin-bottom: 24px;
`

const UpdatedBy = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`

const Avatar = styled.img`
  border-radius: 50%;
  min-width: 30px;
  width: 30px;
  height: 30px;
  margin: 0;
  margin-right: 8px;
`

const UpdatedUser = styled.div`
  font-size: 12px;
  line-height: 1;
`

const UpdatedAt = styled.div`
  opacity: 0.5;
  font-size: 10px;
  line-height: 1;
  margin-top: 4px;
`

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const esaPosts = get(this, 'props.data.allEsaPost.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {esaPosts.map(({ node }) => {
          return (
            <Cell key={node.number}>
              <div style={{ fontSize: 14, opacity: 0.5, marginBottom: 8 }}>{node.category}</div>
              <Link style={{ boxShadow: 'none', color: 'inherit' }} to={`/posts/${node.number}`}>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: rhythm(1 / 4)
                  }}
                >
                  {node.name}
                </h3>
                <p
                  style={{ margin: 0, opacity: 0.6, fontSize: 14 }}
                  dangerouslySetInnerHTML={{ __html: node.body_md.slice(0, 60) }}
                />
              </Link>
              <UpdatedBy>
                <Avatar src={node.updated_by.icon} width="30" height="30" />
                <div>
                  <UpdatedUser>{node.updated_by.screen_name}</UpdatedUser>
                  <UpdatedAt>{node.updated_at}</UpdatedAt>
                </div>
              </UpdatedBy>
            </Cell>
          )
        })}
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
          category
          name
          body_md
          updated_by {
            name
            screen_name
            icon
          }
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
