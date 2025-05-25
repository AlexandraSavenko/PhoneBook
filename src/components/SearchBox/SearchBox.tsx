import { useDispatch, useSelector } from "react-redux";
import { setFilteredContacts } from "../../redux/filters/slice";
import { filteredContacts } from "../../redux/filters/selectors";
import css from "../FormStyles.module.css";
import { FormEvent } from "react";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(filteredContacts);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setFilteredContacts(e.target.value));
  return (
    <div className={css.form}>
    <div className={css.inputwrap}>
      <input
        className={css.input}
        id="search"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder=" " 
        autoComplete="off"
      />
      <label htmlFor="search" className={css.label}>Find contact by name</label>
    </div>
    </div>
  );
}
