import * as Styles from "./styles";
import { useNavigate } from "react-router-dom";

export function CountryCard({ countryData }) {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate(`/details/${event.currentTarget.id}`);
    navigate(0);
  }

  return (
    <Styles.CountryCard id={countryData.cca3} onClick={handleClick}>
      <Styles.FlagImg src={countryData.flags.svg} alt={countryData.flags.alt} />
      <Styles.Info>
        <Styles.Title>{countryData.name.common}</Styles.Title>
        <Styles.InfoData>
          <span>Population:</span> {countryData.population.toLocaleString()}
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
