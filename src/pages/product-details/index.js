import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Breadcrumb } from 'react-bootstrap'
import ProductTemplate from '../../templates/productTemplate/productTemplate'

const ProductDetailsPage = () => (
  <Layout>
    <Breadcrumb>    
        <Breadcrumb.Item as={Link} to="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item as={Link} to="/">Pavilion</Breadcrumb.Item>
    </Breadcrumb>
    <ProductTemplate />
  </Layout>
)

export const Head = () => <Seo title="Product details" />

export default ProductDetailsPage
