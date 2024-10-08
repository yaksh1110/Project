import { Box } from "@mui/material";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagitems = useSelector((store) => store.items);
  const bagIds = useSelector((store) => store.bag);

  // console.log("bagIds:", bagIds);
  // console.log("bagItems:", bagitems[0]);

  const finalItems = bagitems[0]?.filter((item) => {
    const itemIndex = bagIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  // console.log("final:", finalItems);

  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEE = 99;

  finalItems?.forEach((bagitem) => {
    totalMRP += bagitem.original_price;
    totalDiscount += bagitem.original_price - bagitem.current_price;
  });

  let finalAmount = totalMRP - totalDiscount - CONVENIENCE_FEE;

  return (
    <Box className="main-container">
      <Box className="item-container">
        {finalItems?.length !== 0 ? (
          finalItems?.map((item) => <BagItems key={item.id} item={item} />)
        ) : (
          <div className="error_message">
            <div className="oops">OOPS!</div>
            <div>No items in the bag</div>
          </div>
        )}
      </Box>
      <BagSummary
        totalDiscount={totalDiscount}
        totalMRP={totalMRP}
        finalAmount={finalAmount}
        conveneince_fee={CONVENIENCE_FEE}
      />
    </Box>
  );
};

export default Bag;
