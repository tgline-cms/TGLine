import React from "react"
import { ListGroup } from 'react-bootstrap'

const Specification = React.memo(({ product }) => (
  <article className="specification p-2 mt-3 mt-lg-2 p-lg-5">
    <h4 className="m-3 m-lg-0 mb-lg-2">Specyfikacja:</h4>
    <ListGroup variant="flush" className="specification-list ps-4">
      <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
        Wymiary zewnętrzne: {product?.frontmatter?.external_dimensions}
      </ListGroup.Item>
      <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
        Wymiary wewnętrzne: {product?.frontmatter?.internal_dimensions}
      </ListGroup.Item>
      <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
        Wysokość wewnętrzna: {product?.frontmatter?.internal_height}
      </ListGroup.Item>
      <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
        Tolerancja wymiarów: {product?.frontmatter?.dimension_tolerance}
      </ListGroup.Item>
      <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
        Wykończenie: {product?.frontmatter?.decoration}
      </ListGroup.Item>
      <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
        {product?.frontmatter?.wall_image_description}
      </ListGroup.Item>
    </ListGroup>
  </article>
))

export default Specification
