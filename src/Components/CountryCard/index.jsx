import * as Styles from "./styles";
import usFlag from "../../assets/us-flag.jpg";

export function CountryCard({ countryData }) {
  return (
    <Styles.CountryCard>
      <Styles.FlagImg src={countryData.flags.svg} alt={countryData.flags.alt} />
      <Styles.Info>
        <Styles.Title>{countryData.name.common}</Styles.Title>
        <Styles.InfoData>
          <span>Population:</span> {countryData.population}
        </Styles.InfoData>
        <Styles.InfoData>
          <span>Region:</span> {countryData.region}
        </Styles.InfoData>
        <Styles.InfoData>
          <span>Capital:</span> {countryData.capital}
        </Styles.InfoData>
      </Styles.Info>
    </Styles.CountryCard>
  );
}
