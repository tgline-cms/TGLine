import React from "react"
import { ListGroup } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

const Equipment = React.memo(({ product }) => (
  <article className="equipment grey-bg p-2 mt-3 mt-lg-2 p-lg-5 shadow-sm rounded">
    <h4 className="m-3 m-lg-0 mb-lg-2">Wyposażenie:</h4>

    <ListGroup variant="flush" className="product-table ps-4">
      {product?.frontmatter?.equipment.map(({ equipment_item }) => (
        <ListGroup.Item className="ps-0" key={uuidv4()}>
          {equipment_item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </article>
))

export default Equipment
