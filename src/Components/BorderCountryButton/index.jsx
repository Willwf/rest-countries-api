import { useQuery } from "react-query";
import { LoadingElement } from "../LoadingElement";
import { useNavigate } from "react-router-dom";

import * as Styles from "./styles";

export function BorderCountryButton({ borderCountries, setCountryIdState }) {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery("borderCountryData", async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borderCountries}`
    );
    return response.json();
  });

  if (isLoading) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function openCountryDetailsPage(event) {
    setCountryIdState(event.currentTarget.id);
    navigate(`/details/${event.currentTarget.id}`);
  }

  return data.map((borderCountry) => {
    return (
      <Styles.BorderCountryButton
        key={borderCountry.cca3}
        id={borderCountry.cca3}
        onClick={openCountryDetailsPage}
      >
        {borderCountry.name.common}
      </Styles.BorderCountryButton>
    );
  });
}
