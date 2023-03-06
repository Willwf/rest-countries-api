import * as Styles from "./styles";
import { Selector } from "../Selector";
import { SearchInput } from "../SearchInput";
import { CountryCard } from "../CountryCard";
import { LoadingElement } from "../LoadingElement";

import { useQuery } from "react-query";
import { useState } from "react";

export function Main() {
  const [regionSelected, setRegionSelected] = useState("");
  const [countrySearched, setCountrySearched] = useState("");

  const createUrlToFetch = (regionSelected, countrySearched) => {
    if (regionSelected) {
      const regionParameters = `region/${regionSelected}`;
      return regionParameters;
    }

    if (countrySearched) {
      const countryNameParameters = `name/${countrySearched}`;
      return countryNameParameters;
    }

    return "all";
  };

  const baseUrl = `https://restcountries.com/v3.1/${createUrlToFetch(
    regionSelected,
    countrySearched
  )}`;

  const { data, isLoading, error } = useQuery(
    ["countriesData", regionSelected, countrySearched],
    async () => {
      const response = await fetch(baseUrl);
      return response.json();
    }
  );

  if (isLoading) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <Styles.Main>
      <Styles.SearchElements>
        <SearchInput
          setCountrySearched={setCountrySearched}
          setRegionSelected={setRegionSelected}
        />
        <Selector
          regionSelected={regionSelected}
          setRegionSelected={setRegionSelected}
        />
      </Styles.SearchElements>

      <Styles.CountriesDiv>
        {data.status === 404 ? (
          <Styles.NotFoundElement>{data.message}</Styles.NotFoundElement>
        ) : (
          data.map((countryData) => {
            return (
              <CountryCard key={countryData.cca3} countryData={countryData} />
            );
          })
        )}
      </Styles.CountriesDiv>
    </Styles.Main>
  );
}
