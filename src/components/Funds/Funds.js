import React from 'react';
import {
  Container, Row, Col, Button, Card, CardFooter, CardBody, CardText, UncontrolledCollapse, Jumbotron
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
    await api.get("investiments")
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
            if(index < 4) {
              return (
                <Col xs="12" md={{ size: 6 }}>
                  <Button outline color="primary" size="lg" id={`fund${fund.id}`} block className="card-button mb-10" style={{borderRadius: 0}}>
                    {fund.name}
                  </Button>
                  <UncontrolledCollapse className="mb-10" toggler={`#fund${fund.id}`}>
                    <Card>
                      <CardBody>{fund.description}
                        <Button onClick={() => this.handleSelectedButton(fund)}>Selecionar Fundo</Button>
                      </CardBody>
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
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
            : <Col xs="12" md={{ size: 8, offset: 2 }}><Card>
              <CardBody>Selecione um tipo de investimento
                  </CardBody>
            </Card></Col>
          }
        </Row>
        <Row style={{marginTop: 50, marginBottom: 100}}>
            <Col xs="12" md={{size: 6, offset: 3}}>
              <Button color="primary" size="lg" block onClick={() => this.props.createFunds(currentFund)}>Próximo passo</Button>
            </Col>
        </Row>
      </Container>
    )
  }
};