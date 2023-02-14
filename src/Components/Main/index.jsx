import * as Styles from "./styles";
import { Selector } from "../Selector";
import { SearchInput } from "../SearchInput";
import { CountryCard } from "../CountryCard";

export function Main() {
  return (
    <Styles.Main>
      <SearchInput />
      <Selector />

      <CountryCard />
      <CountryCard />
      <CountryCard />
    </Styles.Main>
  );
}
