import { useState } from "react";
import * as Styles from "./styles";

export function Selector() {
  const [openOptions, setOpenOptions] = useState(false);
  const [regionSelected, setRegionSelected] = useState("");

  function toggleOptions() {
    setOpenOptions(!openOptions);
  }

  function selectRegion(event) {
    console.log(event);
    setRegionSelected(event.target.innerText);
  }

  return (
    <Styles.SelectorElement>
      <Styles.Selector onClick={toggleOptions}>
        <div>
          <Styles.Title>
            {regionSelected ? regionSelected : "Filter by Region"}
          </Styles.Title>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Chevron Down</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </div>
      </Styles.Selector>
      <OptionsMenu
        className={openOptions ? "" : "hidden"}
        selectRegion={selectRegion}
      />
    </Styles.SelectorElement>
  );
}

function OptionsMenu(props) {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Styles.OptionMenu className={props.className}>
      {regions.map((region) => (
        <Styles.Option key={region} onClick={props.selectRegion}>
          {region}
        </Styles.Option>
      ))}
    </Styles.OptionMenu>
  );
}
