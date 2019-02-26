import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class Template extends React.Component {
  render() {
    const { children } = this.props

    const header = (
      <h1
        style={{
          marginTop: 0,
          marginBottom: 0,
          padding: 20,
          fontSize: 22,
          fontFamily: 'lato, sans-selif',
          fontWeight: 900
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit'
          }}
          to={'/'}
        >
          Gatsby Starter Esa
        </Link>
      </h1>
    )
    return (
      <div>
        <Header>
          <Container>{header}</Container>
        </Header>
        <Container>{children}</Container>
      </div>
    )
  }
}

const Container = styled.div`
  max-width: 42rem;
  margin: auto;
`

const Header = styled.header`
  border-bottom: 1px solid #eee;
  text-align: center;
`

export default Template
