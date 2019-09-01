import React, {Component} from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import InputRange from 'react-input-range';


export default class CreateInvestment extends Component{

  state = {
    value: { min: 500, max: 1000 },
  };

  render(){
    const { fund } = this.props;
    const { value } = this.state;
    
    return(
      <div>
        <Container>
          <Row style={{marginTop: 50}}>
            <Col xs="12" md={{size: 8, offset:2}}>
              <h1>Saldo Disponível <Badge color="secondary">R$ 500</Badge></h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Valor do investimento: <h3>{value.max}</h3></p>
              <InputRange
                maxValue={3000}
                minValue={500}
                value={value}
                onChange={value => this.setState({ value })} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  } 
}