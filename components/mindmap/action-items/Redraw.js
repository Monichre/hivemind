import React, { useContext } from 'react'
import { Repeat } from 'react-feather'
import { Button } from 'reactstrap'
import { getOptions } from '../../../utils/cyHelpers'
import GlobalContext from '../../GlobalContext'

function cyReset (cy) {
  const animate = cy.nodes().length <= 50
  if (animate) {
    const nodes = cy.nodes()
    const fit = nodes.length > 1
    cy.layout(getOptions(animate, fit)).run()
  }
}

export default function redraw () {
  const { cyWrapper } = useContext(GlobalContext)

  return <Button className="ml-1" color="primary" onClick={() => cyReset(cyWrapper.cy)}>
    <Repeat size={16}/> Redraw
  </Button>
};
