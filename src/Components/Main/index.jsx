import * as Styles from "./styles";
import { Selector } from "../Selector";
import { SearchInput } from "../SearchInput";
import { CountryCard } from "../CountryCard";

import { useQuery } from "react-query";
import { useState } from "react";

export function Main() {
  const [regionSelected, setRegionSelected] = useState("");

  const { data, isLoading, error } = useQuery(
    ["countriesData", regionSelected],
    async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/${
          !regionSelected ? "all" : "region/" + regionSelected
        }`
      );
      return response.json();
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Styles.Main>
      <SearchInput />
      <Selector
        regionSelected={regionSelected}
        setRegionSelected={setRegionSelected}
      />

      {data.map((countryData) => {
        return <CountryCard key={countryData.cca3} countryData={countryData} />;
      })}
    </Styles.Main>
  );
}
