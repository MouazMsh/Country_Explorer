import React, { useEffect, useState } from "react";
import countriez from "../data/data.json";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Map from "../components/Map";

export default function CountryDetail() {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    setCountry(
      countriez.filter((cou) => {
        return countryName === cou.name;
      })
    );
  }, []);
  return (
    <Container>
      <Link to={"/"}>
        <Button className="mt-5" variant="primary">
          Back
        </Button>
      </Link>
      <Row className="mt-5">
        {country.map((countr) => {
          return (
            <React.Fragment key={countr.name}>
              <Col xs={12} md={6}>
                <Image src={countr.flag} fluid />
              </Col>
              <Col className="detail-div mt-3 mt-md-0" xs={12} md={6}>
                <>
                  <h1 className="mt-3 text-center">{countr.name}</h1>
                  <Row className="mt-3">
                    <Col xs={12} lg={6}>
                      <p>
                        <strong>Native Name:</strong> {countr.nativeName}
                      </p>
                      <p>
                        <strong>Population: </strong>
                        {countr.population.toLocaleString()}
                      </p>
                      <p>
                        <strong>Region:</strong> {countr.region}
                      </p>
                      <p>
                        <strong>Sub Region:</strong> {countr.subregion}
                      </p>
                      <p>
                        <strong>Capital:</strong> {countr.capital}
                      </p>
                      <p>
                        <strong>Area:</strong> {countr.area.toLocaleString()}
                      </p>
                    </Col>
                    <Col xs={12} lg={6}>
                      <p>
                        <strong>Top Level Domain:</strong>
                        {countr.topLevelDomain}
                      </p>
                      <p>
                        <strong>Currencies: </strong>
                        {countr.currencies.map((curr, index) => {
                          return (
                            <React.Fragment key={index}>
                              {curr.name}
                            </React.Fragment>
                          );
                        })}
                      </p>
                      <p>
                        <strong>Calling Code:</strong> {countr.callingCodes}
                      </p>
                      <p>
                        <strong>Languages: </strong>
                        {countr.languages.map((lang, index) => {
                          return (
                            <React.Fragment key={index}>
                              {lang.name + " "}
                            </React.Fragment>
                          );
                        })}
                      </p>
                      <p>
                        <strong>Time zone: </strong>
                        {countr.timezones.map((element, index) => {
                          return (
                            <React.Fragment key={index}>
                              {element + " "}
                            </React.Fragment>
                          );
                        })}
                      </p>
                      <p>
                        <strong>Independent: </strong>
                        {countr.independent ? "Yes" : "No"}
                      </p>
                    </Col>
                  </Row>
                </>
              </Col>
              <Col xs={12}>
                <Map country={country} />
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
}
