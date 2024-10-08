import * as React from "react";
// import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

const HomeItems = ({ items }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(items.id) >= 0;

  // console.log("bagItems",bagItems);

  const handleAddTobagClick = () => {
    // console.log("btn clicked");
    window.alert("Item added to your bag!");
    dispatch(bagActions.addToBag(items.id));
  };

  const handleRemovebagClick = () => {
    // console.log("btn clicked");
    dispatch(bagActions.removeFromBag(items.id));
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 4,
      }}
    >
      <Box sx={{ margin: 2.5 }}>
        <CardMedia
          component="img"
          image={`http://localhost:7000/uploads/${items.image}`}
          alt="image"
          sx={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: 1,
            height: "200px",
            objectFit: "contain",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <div>{items.rating}</div>
          <StarIcon style={{ fill: "gold", fontSize: "20px" }} /> &nbsp;|&nbsp;
          1234
        </Box>
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.company}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {items.product_details}
        </Typography>
        <Typography variant="div" className="amount_list">
          <span className="current_price">Rs. {items.current_price}</span>
          <span className="original_price">Rs. {items.original_price}</span>
          <span className="discount_amount">
            ({items.discount_percentage} % Off)
          </span>
        </Typography>
        <Box className="addtobagBTN">
          {elementFound ? (
            <Button
              className="bagbtn"
              sx={{ color: "#fff", backgroundColor: "red" }}
              onClick={handleRemovebagClick}
            >
              <DeleteIcon sx={{ fontSize: "20px" }} />
              Remove
            </Button>
          ) : (
            <Button
              className="bagbtn"
              sx={{ color: "#fff" }}
              onClick={handleAddTobagClick}
            >
              <AddBoxIcon sx={{ fontSize: "20px" }} />
              Add to Bag
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
export default HomeItems;
