import * as Styles from "./styles";
import { Selector } from "../Selector";
import { SearchInput } from "../SearchInput";
import { CountryCard } from "../CountryCard";

import { useQuery } from "react-query";

export function Main() {
  const { data, isLoading, error } = useQuery("myData", async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Styles.Main>
      <SearchInput />
      <Selector />

      {data.map((countryData) => {
        return <CountryCard key={countryData.cca3} countryData={countryData} />;
      })}
    </Styles.Main>
  );
}
