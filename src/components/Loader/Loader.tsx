import { Radio } from "react-loader-spinner";
export default function Loader() {
  return (
    <div style={styles.loaderContainer}>
      <Radio
        visible={true}
        height="80"
        width="80"
        colors={["rgba(79, 169, 77, 1)", "rgba(79, 169, 77, 0.6)", "rgba(79, 169, 77, 0.3)"]}
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
