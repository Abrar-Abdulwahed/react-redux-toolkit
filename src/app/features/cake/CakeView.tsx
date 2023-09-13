import { order, reFund } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

function CakeView() {
    const numberOfCake = useAppSelector(state => state.cake.numberOfCakes);
    const dispatch = useAppDispatch();
  return (
    <div>
        <p>Number of cakes - {numberOfCake}</p>
        <button onClick={() => dispatch(order())}>Order Cake</button>
        <button onClick={() => dispatch(reFund(10))}>Refund Cake</button>
    </div>
  )
}

export default CakeView