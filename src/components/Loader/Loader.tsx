import { Radio } from "react-loader-spinner";
export default function Loader() {
  return (
    <div style={styles.loaderContainer}>
      <Radio
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
