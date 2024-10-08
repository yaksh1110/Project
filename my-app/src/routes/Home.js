import { useSelector } from "react-redux";
import HomeItems from "../components/HomeItems";
// import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log("items : ", items[0]);

  return (
    <>
      
      <div className="items">
        {items[0]?.length === 0 ? (
          <h1>empty</h1>
        ) : (
          items[0]?.map((item) => <HomeItems key={item.id} items={item} />)
        )}
      </div>
    </>
  );
};

export default Home;
