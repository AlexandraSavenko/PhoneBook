import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { selectIsLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectIsLoading);
  return (
    <div>
      <div>{loading && <Loader />}</div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
