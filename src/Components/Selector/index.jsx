import * as Styles from "./styles";

export function Selector(children) {
  return (
    <Styles.SelectorElement>
      <Styles.Selector>
        <div>
          <Styles.Title>{children.children}</Styles.Title>
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
      <OptionsMenu />
    </Styles.SelectorElement>
  );
}

function OptionsMenu() {
  return (
    <Styles.OptionMenu>
      <Styles.Option>Africa</Styles.Option>
      <Styles.Option>Americas</Styles.Option>
      <Styles.Option>Asia</Styles.Option>
      <Styles.Option>Europe</Styles.Option>
      <Styles.Option>Oceania</Styles.Option>
    </Styles.OptionMenu>
  );
}
