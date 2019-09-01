import React from 'react';
import {
  Container, Row, Col, Button, Card, CardFooter, CardBody, UncontrolledCollapse, Jumbotron, Alert
} from 'reactstrap';
import api from '../../services/api';
import './Funds.css';

export default class Funds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listFunds: [],
      currentFund: null
    }
  }

  componentDidMount = async () => {
    await api.get("investments")
      .then((response) => {
        this.setState({ listFunds: response.data });
      })
  }

  handleSelectedButton = (fund) => {
    this.setState({ currentFund: fund });
  }

  render() {
    const { listFunds, currentFund } = this.state;
    return (
      <Container className="mt-4">
        <Row>
          {listFunds.map((fund, index) => {
            if (index < 4) {
              return (
                <Col xs="12" md={{ size: 6 }}>
                  <Button outline color="primary" size="lg" id={`fund${fund.id}`} block className="card-button mb-10" style={{ borderRadius: 0 }}>
                    {fund.name}
                  </Button>
                  <UncontrolledCollapse className="mb-10" toggler={`#fund${fund.id}`}>
                    <Card>
                      <CardBody>{fund.description}
                        <Button onClick={() => this.handleSelectedButton(fund)} color="info" className="float-right" size="sm">Selecionar Fundo</Button>
                      </CardBody>
                      <CardFooter>
                        <Row>
                          <Col md="4">Rentabilidade: {fund.profitability}</Col>
                          <Col md="4">Aplicação mínima: R$ {fund.valcota}</Col>
                          <Col md="4">Taxa de administração: {fund.administrationFee}</Col>
                        </Row>
                      </CardFooter>
                    </Card>
                  </UncontrolledCollapse>
                </Col>
              )
            }
          })}
        </Row>
        <Row className="mt-5">
          {
            (currentFund) ?
              <Col xs="12" md={{ size: 8, offset: 2 }} key={currentFund.id}>
                <Jumbotron>
                  <h1 className="display-3">{currentFund.name}</h1>
                  <p className="lead">{currentFund.description}</p>
                  <hr className="my-2" />
                  <Row>
                    <Col md="4">
                      <span class="font-weight">Rentabilidade: </span> {currentFund.profitability}
                    </Col>
                    <Col md="4">
                      <span class="font-weight">Aplicação mínima: </span> R$ {currentFund.valcota}
                    </Col>
                    <Col md="4">
                      <span class="font-weight">Taxa de administração: </span> {currentFund.administrationFee}
                    </Col>
                  </Row>
                </Jumbotron>
              </Col>
              : <Col xs="12" md={{ size: 8, offset: 2 }}>
                <Alert color="info">
                  Selecione o investimento desejado.
                </Alert>
              </Col>
          }
        </Row>
        <Row style={{ marginTop: 50, marginBottom: 100 }}>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            <Button color="primary" size="lg" block disabled={currentFund === null}
              onClick={() => this.props.createFunds(currentFund)}>Próximo passo</Button>
          </Col>
        </Row>
      </Container>
    )
  }
};