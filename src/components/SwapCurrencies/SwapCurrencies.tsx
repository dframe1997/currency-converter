import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";

export const SwapCurrencies = ({ swapFn }: { swapFn: () => void }) => (
  <div className={styles.buttonContainer}>
    <button type="button" className={styles.swap} onClick={swapFn}>
      Swap <FontAwesomeIcon icon={faUpDown} />
    </button>
  </div>
);
