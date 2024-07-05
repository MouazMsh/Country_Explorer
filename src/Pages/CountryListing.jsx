import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countriez from "../data/data.json";
import { Card, Container, Row, Col } from "react-bootstrap";
import SearchBox from "../components/Searchbox";
import Filter from "../components/Filter";

export default function CountryListing() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriez);
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={5}>
          <SearchBox
            countries={countries}
            setCountries={setCountries}
            countriez={countriez}
          />
        </Col>
        <Col sm={{ span: 3, offset: 4 }}>
          <Filter
            countries={countries}
            setCountries={setCountries}
            countriez={countriez}
          />
        </Col>
        {countries.map((country) => {
          return (
            <>
              <Col key={country.name} sm={12} md={6} lg={3} className="d-flex">
                <Link
                  to={`/${country.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="p-2 mt-3 flex-fill-card">
                    <Card.Img
                      variant="top"
                      src={country.flag}
                      className="card-img-top"
                    />
                    <Card.Body>
                      <Card.Title className="mb-2">{country.name}</Card.Title>
                      <Card.Text className="mb-1">
                        Population: {country.population.toLocaleString()}
                      </Card.Text>
                      <Card.Text className="mb-1">
                        Capital: {country.capital}
                      </Card.Text>
                      <Card.Text>Region: {country.region}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}
