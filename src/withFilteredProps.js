const whitFilteredProps =
  (Component) =>
  ({ list, side }) => {
    const folteredList = list.filter((char) => char.side === side);
    return <Component list={folteredList} />;
  };

export default whitFilteredProps;
