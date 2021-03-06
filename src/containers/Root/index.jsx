import React from "react"
import { Container, Alert } from "reactstrap"

import Spinner from "components/Spinner"

const Root = props => {
  return (
    <Container>
      <Alert color="info" className="mt-5">
        <code>containers/Root</code>
      </Alert>
      <div className="text-center">
        <h5>Beispielcomponent:</h5>
        <Spinner size={42} />
      </div>
    </Container>
  )
}

export default Root
