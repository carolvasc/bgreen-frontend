import React from 'react';
import { Card, Button, CardBody, CardFooter, CardText } from 'reactstrap';

export default class UserInvestments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listInvestments: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/investments")
      .then((response) => {
        this.setState({ listInvestments: response.data });
      })
  }

  render() {
    const { listInvestments } = this.state;
    return (
      <Container>
        <Row>
          {listInvestments.map(investment => {
            <Card>
              <CardBody>{fund.description}</CardBody>
              <CardFooter>
                <CardText>
                  <Row>
                    <Col md="4">Rentabilidade: {fund.profitability}</Col>
                    <Col md="4">Aplicação mínima: R$ {fund.minimalApplication}</Col>
                    <Col md="4">Data de administração: {fund.administrationFee}</Col>
                  </Row>
                </CardText>
              </CardFooter>
            </Card>
          })}
        </Row>
      </Container>
    );
  }
}