import React from 'react';
import {
  Container, Row, Col, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';
import api from '../../services/api';

export default class Indication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      email: '',
    }
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  createIndication() {
    api.post("indication", {
      nome: this.state.name,
      email: this.state.email
    }).then(response => alert('Obrigada pela indicação!'));
  }

  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <Jumbotron>
              <h5 className="display-3" style={{ fontSize: '45px' }}>UHUUUL! <br />
                Você acabou de dar o primeiro passo para o seu sonho!</h5>
              <p className="lead">Que tal compartilhar isso com as pessoas próximas a você?
              Indique amigos, familiares e colegas para investir no fundo e você será bonificado!</p>
              <hr className="my-2" />
              <p className="lead">
                <Button color="primary" onClick={() => this.toggle()}>Indicar</Button>
              </p>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Cadastre sua indicação</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup row>
                      <Label sm={2}>Nome</Label>
                      <Col sm={10}>
                        <Input type="text" name="name" value={this.state.name}
                          onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label sm={2}>Email</Label>
                      <Col sm={10}>
                        <Input type="email" name="email" value={this.state.email}
                          onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" onClick={this.createIndication()}>Salvar</Button>{' '}
                  <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                </ModalFooter>
              </Modal>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}