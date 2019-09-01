import React from 'react';
import {
  Container, Row, Col, Card, CardHeader, CardBody, CardText
} from 'reactstrap';
import api from '../../services/api';
import './UserInvestments.css';
import { Link } from 'react-router-dom';

export default class UserInvestments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listInvestments: []
    }
  }

  componentDidMount = async () => {
    await api.get("investments-users")
      .then((response) => {
        this.setState({ listInvestments: response.data });
      })
  }

  render() {
    const { listInvestments } = this.state;
    return (
      <Container className="mt-4">
        <Row>
          {
            (listInvestments.response) ?
            <h1>Nenhum investimento</h1>
            : 
            listInvestments.map(investment => {
            return (
              <Col xs="12" md="6" key={investment.id}>
                <Card style={{ marginBottom: '10px' }}>
                  <CardHeader>
                    {investment.name}
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="6" md="6" style={{ borderRight: '1px solid lightgrey' }}>
                        {investment.description}
                        <Link to={`/home/${investment.id_users}`}>visualizar</Link>
                      </Col>
                      <Col xs="6" md="6">
                        <CardText>
                          <span className="font-weight">Rentabilidade:</span> {investment.profitability}
                        </CardText>
                        <CardText>
                          <span className="font-weight">Aplicação mínima: </span>
                          R$ {investment.valcota}
                        </CardText>
                        <CardText>
                          <span className="font-weight"> Taxa de administração: </span>{investment.administrationFee}
                        </CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }
}