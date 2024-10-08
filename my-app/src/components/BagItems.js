import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/BagSlice";

const BagItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    // console.log("removed item");
    dispatch(bagActions.removeFromBag(item.id));
  };

  console.log("items", item.image);

  return (
    <Box className="bagItems">
      <img
        src={`http://localhost:7000/uploads/${item.image}`} 
        alt="Trendy Pants and Shoes"
        className="images"
      />
      <div className="bag_content">
        <Typography variant="h6">{item.company}</Typography>
        <Typography variant="span" sx={{ color: "text.secondary" }}>
          {item.product_details}
        </Typography>
        <Typography variant="div" className="amount_list">
          <span className="current_price">Rs. {item.current_price}</span>
          <span className="original_price">Rs. {item.original_price}</span>
          <span className="discount_amount">
            ({item.discount_percentage} % Off)
          </span>
        </Typography>
        <Typography variant="div">
          <span style={{ fontWeight: "700" }}>
            {item.return_date} days&nbsp;
          </span>
          return available
        </Typography>
        <Typography variant="div">
          Delivery by&nbsp;
          <span style={{ color: "blue" }}>{item.delivery_date}</span>
        </Typography>
      </div>
      <div>
        <DeleteIcon
          style={{ fill: "red" }}
          className="removeBtn"
          onClick={handleRemoveItem}
        />
      </div>
    </Box>
  );
};

export default BagItems;
