import React, { Component } from 'react';
import api from '../../services/api';

import { Line } from 'react-chartjs-2';

import { Container, Row, Col, Badge, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default class Dashboard extends Component{
    state = {
        dropdownOpen: false,
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Rendimento ao longo do tempo',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: []
            }
          ]
        }
      }

    handleDataProfitability = response => {
        let arr = [];
        let dataRend = [];
    
        response.map(rendimento => {
          arr.push(parseFloat(rendimento.valor_rendimento));
          dataRend.push(rendimento.data_rendimento.split(" ")[0]);
        });
    
        this.setState(state => {
          state.data.datasets[0].data = arr;
          state.data.labels = dataRend;
    
          return{
            ...state
          }
    
        })
      }

      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    componentDidMount = async () => {
        const response = await api.get(`profitability-user/${this.props.match.params.id}`);
        this.handleDataProfitability(response.data);
    };

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>Olá <Badge color="secondary">Fulano</Badge></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                            <DropdownToggle caret>
                                Button Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md={{size: 8, offset: 2}}>
                        <Line data={this.state.data} />
                    </Col>
                </Row>
            </Container>
        );
    }
}