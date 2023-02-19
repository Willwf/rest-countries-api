import * as Styles from "./styles";

export function DetailsCard() {
  return (
    <Styles.DetailsCard>
      <Styles.BackButton>Back</Styles.BackButton>
      <Styles.FlagImg />
      <Styles.CountryInfoCard>
        <div>
          <Styles.CountryName>Belgium</Styles.CountryName>
          <Styles.Info>
            <span>Native Name:</span>België
          </Styles.Info>
          <Styles.Info>
            <span>Population:</span>11,319,511
          </Styles.Info>
          <Styles.Info>
            <span>Region:</span>Europe
          </Styles.Info>
          <Styles.Info>
            <span>Sub Region:</span>Western Europe
          </Styles.Info>
          <Styles.Info>
            <span>Capital:</span>Brussels
          </Styles.Info>
        </div>
        <div>
          <Styles.Info>
            <span>Top Level Domain:</span>.be
          </Styles.Info>
          <Styles.Info>
            <span>Currencies:</span>Euro
          </Styles.Info>
          <Styles.Info>
            <span>Languages:</span>Dutch, French, German
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
