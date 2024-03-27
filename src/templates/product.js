import React from "react"
import * as PropTypes from "prop-types"

import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../layouts";

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ProductTemplate extends React.Component {
  render() {
    console.log("test",this.props.data);
   
    return (
      <Layout>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          product page
        </div>
      </Layout>
    )
  }
}

ProductTemplate.propTypes = propTypes

export default ProductTemplate

export const pageResult = graphql
  `query($id: String)
    {
      allContentfulProduct(filter: {id: {eq: $id}}) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
