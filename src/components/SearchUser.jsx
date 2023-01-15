const SearchUser = ({ ...rest }) => {
  return (
    <div className="input-group mb-3 w-50">
      <span className="input-group-text button-color" id="inputGroup-sizing-default">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        {...rest}
      />
    </div>
  );
};

export default SearchUser;
