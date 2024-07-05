import { useState } from "react";
import { Dropdown, CloseButton, Button } from "react-bootstrap";

export default function Filter({ countries, setCountries, countriez }) {
  const [isRegion, setIsRegion] = useState("");
  function handleClick(region) {
    setIsRegion(region);
    setCountries(
      countries.filter((country) => {
        return country.region === region;
      })
    );
  }

  function handleClose() {
    setCountries(countriez);
    setIsRegion("");
  }

  return (
    <Dropdown className="mt-3">
      {isRegion === "" ? (
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter By Region
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                handleClick("Asia");
              }}
            >
              Asia
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleClick("Africa");
              }}
            >
              Africa
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleClick("Americas");
              }}
            >
              Americas
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleClick("Antarctic");
              }}
            >
              Antarctic
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleClick("Europe");
              }}
            >
              Europe
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleClick("Oceania");
              }}
            >
              Oceania
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Toggle>
      ) : (
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {isRegion}
        </Dropdown.Toggle>
      )}

      {isRegion === "" ? null : (
        <Button variant="danger" className="ms-2">
          <CloseButton onClick={handleClose} />
        </Button>
      )}
    </Dropdown>
  );
}
