import * as Styles from "./styles";
import flagImgExample from "../../assets/flag.jpg";

export function DetailsCard() {
  return (
    <Styles.DetailsCard>
      <Styles.BackButton>
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
      <Styles.FlagImg src={flagImgExample} alt={"Flag Img Example"} />
      <Styles.CountryInfoCard>
        <Styles.CountryName>Belgium</Styles.CountryName>
        <div>
          <Styles.Info>
            <span>Native Name: </span>België
          </Styles.Info>
          <Styles.Info>
            <span>Population: </span>11,319,511
          </Styles.Info>
          <Styles.Info>
            <span>Region: </span>Europe
          </Styles.Info>
          <Styles.Info>
            <span>Sub Region: </span>Western Europe
          </Styles.Info>
          <Styles.Info>
            <span>Capital: </span>Brussels
          </Styles.Info>
        </div>
        <div>
          <Styles.Info>
            <span>Top Level Domain: </span>.be
          </Styles.Info>
          <Styles.Info>
            <span>Currencies: </span>Euro
          </Styles.Info>
          <Styles.Info>
            <span>Languages: </span>Dutch, French, German
          </Styles.Info>
        </div>
        <div>
          <Styles.BorderCountriesTitle>
            Border Countries:
          </Styles.BorderCountriesTitle>
          <Styles.BorderCountriesCard>
            <Styles.BorderCountriesButton>France</Styles.BorderCountriesButton>
            <Styles.BorderCountriesButton>Germany</Styles.BorderCountriesButton>
            <Styles.BorderCountriesButton>
              Netherlands
            </Styles.BorderCountriesButton>
          </Styles.BorderCountriesCard>
        </div>
      </Styles.CountryInfoCard>
    </Styles.DetailsCard>
  );
}
