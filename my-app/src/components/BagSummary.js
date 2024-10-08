import { Box, Divider, Button } from "@mui/material";
// import { Alert } from "bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const BagSummary = ({
  totalDiscount,
  totalMRP,
  finalAmount,
  conveneince_fee,
}) => {
  const bag = useSelector((store) => store.bag);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handlePlaceorder = () => {
    console.log("ORDER PLACED!!!");
    setOpen(true);
  };

  return (
    <Box className="bagSummary">
      <div style={{ fontWeight: "700" }}>
        Price Details ({bag.length} items)
      </div>
      <div className="mrp">
        <span>Total MRP</span>
        <span>Rs. {totalMRP}</span>
      </div>
      <div className="discount">
        <span>Discount on MRP</span>
        <span style={{ color: "red" }}>- Rs. {totalDiscount}</span>
      </div>
      <div className="convenience_fee">
        <span>Convenience Fee</span>
        <span style={{ color: "red" }}>- Rs. {conveneince_fee}</span>
      </div>
      <Divider style={{ backgroundColor: "black", fontWeight: "700" }} />
      <div className="total_amount">
        <span style={{ fontWeight: "700" }}>Total amount</span>
        <span>Rs. {finalAmount}</span>
      </div>
      <Divider style={{ backgroundColor: "black", fontWeight: "700" }} />
      <div style={{ textAlign: "center", margin: "8px 0" }}>
        <Button
          sx={{
            backgroundColor: "red",
            width: "100%",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#FF8A8A",
              // Change background color on hover
              color: "", // Change text color on hover
            },
          }}
          onClick={handlePlaceorder}
        >
          PLACE ORDER
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#C4D7FF", // Set your desired background color here
            },
          }}
        >
          <DialogTitle id="alert-dialog-title">{"ORDER PLACED"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Thank you for your order! We truly appreciate your business and
              are excited to fulfill your purchase.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: "blue" }} onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
};

export default BagSummary;
