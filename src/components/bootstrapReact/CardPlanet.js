import React, { Component } from "react";
import UlCard from "../UlCard";
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';

const urlApi = "https://swapi.dev/api/planets/?page=";
const imgUbication = '../../assets/'
const extension ='.jpg'

class CardPlanet extends Component {
  constructor() {
    super();
    this.state = {
      planetList: [],
    };
  }

  componentDidMount() {
    fetch(urlApi)
      .then((res) => res.json())
      .then((respuesta) => {
        this.setState({ planetList: respuesta.results });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row lg={2}>
          {this.state.planetList.map((item, index) => {
            return (
              <Card style={{ width: "18rem" }} key={index + item.url}>
                <Card.Img variant="top" src={imgUbication + (item.name) + extension} alt={item.name} />
                <Card.Body >
                  <Card.Title>Planeta: {item.name}</Card.Title>
                  
                    <UlCard
                      diameter={item.diameter}
                      climate= {item.climate}
                      terrain= {item.terrain}
                    />
                   
                </Card.Body>
              </Card>
            );
          })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default CardPlanet;
