import React from 'react';
import {
  Container, Row, Col, Jumbotron, Button
} from 'reactstrap';

export default class Indication extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container class="mt-4">
        <Row>
          <Col>
            <Jumbotron>
              <h5 className="display-3" style={{fontSize: '45px'}}>UHUUUL! <br />
                Você acabou de dar o primeiro passo para o seu sonho!</h5>
              <p className="lead">Que tal compartilhar isso com as pessoas próximas a você?
              Indique amigos, familiares e colegas para investir no fundo e você será bonificado!</p>
              <hr className="my-2" />
              <p className="lead">
                <Button color="primary">Indicar</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}