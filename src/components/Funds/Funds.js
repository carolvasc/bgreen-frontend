import React from 'react';
import {
  Container, Row, Col, Button, Card, CardHeader, CardBody, CardText, UncontrolledCollapse
} from 'reactstrap';
import axios from 'axios';
import './Funds.css';

export default class Funds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listFunds: [],
      currentFund: ''
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/funds")
      .then((response) => {
        this.setState({ listFunds: response.data });
      })
  }

  render() {
    const { listFunds } = this.state;

    return (
      <Container className="mt-4">
        <Row>
          {listFunds.map(fund => {
            return (
              <Col xs="12" md={{ size: 8, offset: 2 }} key={fund.id}>
                <Button outline color="success" size="lg" id={`fund${fund.id}`} block className="card-button mb-10" onClick={() => this.setState({ currentFund: fund })}>
                  {fund.name}
                </Button>
                <UncontrolledCollapse className="mb-10" toggler={`#fund${fund.id}`}>
                  <Card>
                    <CardBody>{fund.description}</CardBody>
                  </Card>
                </UncontrolledCollapse>
              </Col>
            )
          })}
        </Row>
        <Row className="mt-5">
          <Button outline color="warning" className="float-right">Investir</Button>
        </Row>
      </Container>
    )
  }
};