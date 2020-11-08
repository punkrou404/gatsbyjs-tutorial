import React from "react"
import Header from "../../components/header"
import PostHeadline from "../../components/post-headline"
import Layout from "../../components/panda/layout"
import { css } from "@emotion/core"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <Header css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
          headerText="Amazing Pandas Eating Things" 
        />
        <div>
          <img
            src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
            alt="Group of pandas eating bamboo"
          />
        </div>
        <h4>
          {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostHeadline 
            id={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(
    sort: { 
      fields: [frontmatter___date], order: DESC
    }
  ) {
    totalCount
    edges {
      node {
        id
        excerpt
        html
        timeToRead
        frontmatter {
          date
          title
        }
      }
    }
  }
}
`