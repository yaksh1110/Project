import { CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <CircularProgress
        size={"5rem"}
      />
      ;
    </div>
  );
};

export default LoadingSpinner;
