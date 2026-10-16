import styles from "./styles.module.css";

export const ErrorToast = ({ message }: { message: string }) => {
  return (
    <div className={styles.errorToast} role="alert">
      {message}
    </div>
  );
};
