import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations.js";
import { AppDispatch } from "../../redux/store";

interface Props {
  singleContact:
  {id: string,
  name: string,
  number: string}
}
const Contact: React.FC<Props> = ({ singleContact: { id, name, number } }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.wrap}>
      <div>
        <div className={css.textPlusIcon}>
          <IoMdPerson />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.textPlusIcon}>
          <FaPhoneAlt className={css.noMargin} />
          <p className={`${css.noMargin} ${css.text}`}>{number}</p>
        </div>
      </div>

      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
export default Contact;