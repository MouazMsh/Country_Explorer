import { useState } from "react";
import { Form } from "react-bootstrap";

export default function SearchBox({ countries, setCountries, countriez }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") {
      setCountries(countriez);
    } else {
      setCountries(
        countries.filter((country) => {
          return input.toLowerCase() === country.name.toLowerCase();
        })
      );
    }
  }

  return (
    <Form inline className="mt-3" onSubmit={handleSubmit}>
      <Form.Control
        value={input}
        onChange={handleChange}
        type="text"
        placeholder="Search for a country..."
      />
    </Form>
  );
}
