interface PropsType {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  loading?: boolean;
}

const SearchButton = (props: PropsType) => {
  return (
    <button className={`btn-primary my-14 ${props.loading ? 'animate-pulse' : ''}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default SearchButton;
