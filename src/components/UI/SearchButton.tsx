interface PropsType {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const SearchButton = (props: PropsType) => {
  return (
    <button className="btn-primary my-14" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default SearchButton;
