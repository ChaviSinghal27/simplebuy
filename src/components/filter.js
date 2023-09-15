import { useFilter } from "../Context/filterContext";

export function Filter() {
  const { state, dispatch } = useFilter();

  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <label>
          <input
            name="sort-by"
            onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
            type="radio"
          ></input>
          Low to high
        </label>
        <label>
          <input
            name="sort-by"
            type="radio"
            onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
          ></input>
          High to low
        </label>
        <div>
          <label>
            <input
              type="checkbox"
              name="gender"
              onClick={() => dispatch({ type: "GENDER", payload: "MEN" })}
            ></input>
            Men
          </label>
          <label>
            <input
              type="checkbox"
              name="gender"
              onClick={() => dispatch({ type: "GENDER", payload: "WOMEN" })}
            ></input>
            Women
          </label>
        </div>
      </div>
    </>
  );
}
