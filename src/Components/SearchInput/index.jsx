import * as Styles from "./styles";

import { useForm } from "@mantine/form";

export function SearchInput({ setCountrySearched, setRegionSelected }) {
  const form = useForm({
    initialValues: {
      searchCountry: "",
    },
    validate: {
      searchCountry: (value) => value.length === 0,
    },
  });

  function handleSubmit(values) {
    setRegionSelected("");
    setCountrySearched(values.searchCountry);
  }

  return (
    <Styles.SearchInputBox>
      <Styles.SearchIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </Styles.SearchIcon>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Styles.SearchInput
          type="search"
          name="searchCountry"
          placeholder="Search for a country..."
          {...form.getInputProps("searchCountry")}
        />
      </form>
    </Styles.SearchInputBox>
  );
}
