import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { LoadingElement } from "../LoadingElement";
import { BorderCountryButton } from "../BorderCountryButton";
import * as Styles from "./styles";
import { useState } from "react";

export function DetailsCard() {
  const { countryId } = useParams();
  const [countryIdState, setCountryIdState] = useState(countryId);
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery(
    ["selectedCountryData", countryIdState],
    async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryIdState}`
      );
      return response.json();
    }
  );

  if (isLoading) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleClick() {
    navigate("/");
  }

  return (
    <Styles.DetailsCard>
      <Styles.BackButton onClick={handleClick}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Arrow Back</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M244 400L100 256l144-144M120 256h292"
            />
          </svg>
        </span>
        Back
      </Styles.BackButton>
      <Styles.CountryDetails>
        <Styles.FlagImg src={data[0].flags.svg} alt={data[0].flags.alt} />
        <Styles.CountryInfoCard>
          <Styles.CountryName>{data[0].name.common}</Styles.CountryName>
          <div>
            <Styles.Info>
              <span>Native Name: </span>
              {data[0].name.nativeName ? (
                Object.keys(data[0].name.nativeName).map((name) => {
                  return data[0].name.nativeName[name].common;
                })[0]
              ) : (
                <span style={{ fontStyle: "italic" }}>Not Available</span>
              )}
            </Styles.Info>
            <Styles.Info>
              <span>Population: </span>
              {data[0].population.toLocaleString()}
            </Styles.Info>
            <Styles.Info>
              <span>Region: </span>
              {data[0].region}
            </Styles.Info>
            <Styles.Info>
              <span>Sub Region: </span>
              {data[0].subregion}
            </Styles.Info>
            <Styles.Info>
              <span>Capital: </span>
              {data[0].capital}
            </Styles.Info>
          </div>
          <div>
            <Styles.Info>
              <span>Top Level Domain: </span>
              {data[0]?.tld ? data[0]?.tld[0] : ""}
            </Styles.Info>
            <Styles.Info>
              <span>Currencies: </span>
              {data[0].currencies ? (
                Object.keys(data[0].currencies)
                  .map((currency) => {
                    return data[0].currencies[currency].name;
                  })
                  .join(", ")
              ) : (
                <span style={{ fontStyle: "italic" }}>Not Available</span>
              )}
            </Styles.Info>
            <Styles.Info>
              <span>Languages: </span>
              {data[0].languages ? (
                Object.keys(data[0].languages)
                  .map((language) => {
                    return data[0].languages[language];
                  })
                  .join(", ")
              ) : (
                <span style={{ fontStyle: "italic" }}>Not Available</span>
              )}
            </Styles.Info>
          </div>

          {data[0].borders ? (
            <div>
              <Styles.BorderCountriesTitle>
                Border Countries:
              </Styles.BorderCountriesTitle>
              <Styles.BorderCountriesCard>
                <BorderCountryButton
                  borderCountries={data[0].borders}
                  setCountryIdState={setCountryIdState}
                />
              </Styles.BorderCountriesCard>
            </div>
          ) : (
            ""
          )}
        </Styles.CountryInfoCard>
      </Styles.CountryDetails>
    </Styles.DetailsCard>
  );
}
