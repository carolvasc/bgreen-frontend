import React, { Component } from 'react';
import { Container, Row, Col, Badge, Button, Input, Label } from 'reactstrap';
import InputRange from 'react-input-range';
import { Redirect } from 'react-router-dom'
import api from '../../services/api';

export default class CreateInvestment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: { min: 500, max: 1000 },
      user: null,
      prevision: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentDidMount = async () => {
    await api.get("users")
      .then((response) => {
        this.setState({ user: response.data });
      })
  }

  createInvestment() {
    const { user, value, prevision } = this.state;
    const { fund } = this.props;

    api.post("investments-users-store", {
      id_user: user.id,
      tipo_investimento: fund.id,
      valor_investido: value,
      previsao: new Date(prevision),
    }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }).then(response => <Redirect to='/indicacao' />);
  }

  handleChange(event) {
    this.setState({ prevision: event.target.value });
  }

  handleChangeValue(value) {
    this.setState({ value });
  }

  render() {
    const { fund } = this.props;
    const { value } = this.state;

    return (
      <Container className="mt-4">
        <h2>{fund.name}</h2>
        <hr />
        <Row style={{ marginTop: '50px', marginBottom: '50px' }}>
          <Col xs="12" md="12">
            <h4>Saldo Disponível
                <Badge color="danger" size="md" className="ml-4">R$ {value.min}</Badge>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="mb-5">Valor do investimento: {value.max}</h4>
            <InputRange
              maxValue={3000}
              minValue={500}
              value={value}
              onChange={this.handleChangeValue} />
          </Col>
          <Col>
            <Label sm={2}>Previsão</Label>
            <Input type="text" name="prevision" value={this.state.prevision}
              onChange={this.handleChange} />
          </Col>
        </Row>
        <Row style={{ marginTop: '100px' }}>
          <Button color="primary" onClick={() => this.createInvestment()}>
            Finalizar investimento
            </Button>
        </Row>
      </Container>
    )
  }
}