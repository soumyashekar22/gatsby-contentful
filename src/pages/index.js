 
import React, { useEffect, useState } from "react";
//import * as PropTypes from "prop-types";
 
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
 
import { rhythm } from "../utils/typography";
import Layout from "../layouts";
 
// const propTypes = {
//   data: PropTypes.object.isRequired,
// };
 
 
const IndexPage = (props) => {
  const [data, setData] = useState([]);
 
    // const usProductEdges = this.props.data.us.edges
    // const deProductEdges = this.props.data.german.edges
    //const products = props.data.allContentfulProduct.nodes;
    // const data = useStaticQuery(graphql`
    // query($slug: String) {
    //   allContentfulProduct(filter: {slug: {eq: $slug}}) {
    //     nodes {
    //       slug
    //     }
    //   }
    // }`, {
    //   variables: {
    //     slug:  "soumyas-coffee-mug",
    //   },
    // })
    // console.log("data",data)
   
      const {allContentfulProduct} = useStaticQuery(graphql`
      query {
        allContentfulProduct {
          nodes {
            id
            title
            price
            image {
              fluid {
                src
              }
              gatsbyImageData(layout: FIXED, width: 200, height: 150)
            }
          }
        }
      }`)
      //setData(allContentfulProduct.nodes)

    //}
//     useEffect(() => {
  
//  fetchData()

//     },[])
    return (
      <Layout>
        <div style={{ marginBottom: rhythm(2) }}>
          <h2>{`Gatsby's`} integration with the Contentful Image API</h2>
          <br />
          <br />
          <br />
          <h2>Products</h2>
 
          {allContentfulProduct.nodes.map((product, i) => (
            <>
              <GatsbyImage
                image={getImage(product.image.gatsbyImageData)}
                alt={product.title}
              />
              {/* <img src={product.image.fluid.src}/> */}
              <div>{`Title: ${product.title}`}</div>
              <div>{`Price: ${product.price}`}</div>
              <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/products/${product.id}/`}
    >Click here for more details</Link>
              <br />
              <br />
            </>
          ))}
        </div>
      </Layout>
  
    );
  
}
 
//IndexPage.propTypes = propTypes;
 
export default IndexPage;
 
// export const pageQuery = graphql`
//   query {
//     us: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
//       edges {
//         node {
//           id
//           gatsbyPath(filePath: "/products/{ContentfulProduct.id}")
//           productName {
//             productName
//           }
//           image {
//             gatsbyImageData(layout: FIXED, width: 75)
//           }
//         }
//       }
//     }
//     german: allContentfulProduct(filter: { node_locale: { eq: "de" } }) {
//       edges {
//         node {
//           id
//           gatsbyPath(filePath: "/products/{ContentfulProduct.id}")
//           productName {
//             productName
//           }
//           image {
//             gatsbyImageData(layout: FIXED, width: 75)
//           }
//         }
//       }
//     }
//   }
// `
 
// export const pageQuery = graphql`
//   query {
//     allContentfulProduct {
//       nodes {
//         id
//         title
//         price
//         image {
//           fluid {
//             src
//           }
//           gatsbyImageData(layout: FIXED, width: 200, height: 150)
//         }
//       }
//     }
//   }`



 
 
 

 
 

 
 
