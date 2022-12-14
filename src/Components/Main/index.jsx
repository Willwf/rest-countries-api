import * as Styles from "./styles";
import usFlag from "../../assets/us-flag.jpg";
import { Selector } from "../Selector";
import { SearchInput } from "../SearchInput";

export function Main() {
  return (
    <Styles.Main>
      <SearchInput />
      <Selector />

      <Styles.CountryCard>
        <Styles.FlagImg src={usFlag} />
        <Styles.Info>
          <Styles.Title>United States of America</Styles.Title>
          <Styles.InfoData>
            <span>Population:</span> 323,947,000
          </Styles.InfoData>
          <Styles.InfoData>
            <span>Region:</span> Americas
          </Styles.InfoData>
          <Styles.InfoData>
            <span>Capital:</span> Washington, D.C.
          </Styles.InfoData>
        </Styles.Info>
      </Styles.CountryCard>

      <Styles.CountryCard>
        <Styles.FlagImg src={usFlag} />
        <Styles.Info>
          <Styles.Title>United States of America</Styles.Title>
          <Styles.InfoData>
            <span>Population:</span> 323,947,000
          </Styles.InfoData>
          <Styles.InfoData>
            <span>Region:</span> Americas
          </Styles.InfoData>
          <Styles.InfoData>
            <span>Capital:</span> Washington, D.C.
          </Styles.InfoData>
        </Styles.Info>
      </Styles.CountryCard>

      <Styles.CountryCard>
        <Styles.FlagImg src={usFlag} />
        <Styles.Info>
          <Styles.Title>United States of America</Styles.Title>
          <Styles.InfoData>
            <span>Population:</span> 323,947,000
          </Styles.InfoData>
          <Styles.InfoData>
            <span>Region:</span> Americas
          </Styles.InfoData>
          <Styles.InfoData>
            <span>Capital:</span> Washington, D.C.
          </Styles.InfoData>
        </Styles.Info>
      </Styles.CountryCard>
    </Styles.Main>
  );
}
