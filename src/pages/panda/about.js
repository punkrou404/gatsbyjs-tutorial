import React from "react"
import { graphql } from "gatsby"
import Header from "../../components/header"
import Layout from "../../components/panda/layout"

export default function About({ data }) {
  return (
    <Layout>
      <Header headerText={data.site.siteMetadata.title} />
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`