
import { order, reFund } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

function IcecreamView() {
    const numberOfIcecream = useAppSelector(state => state.icecream.numberOfIcecreams);
    const dispatch = useAppDispatch();
    return (
      <div>
          <p>Number of icecream - {numberOfIcecream}</p>
          <button onClick={() => dispatch(order())}>Order Icecream</button>
          <button onClick={() => dispatch(reFund(20))}>Refund Icecream</button>
      </div>
    )
  }
  
  export default IcecreamView