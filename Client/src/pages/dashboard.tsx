import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/slice";

function Dashboard() {
  const count = useSelector((state: any) => state.noOfOpenRequirements.value);
  const dispatch = useDispatch()
  return (
    <div>
      <h4>Dashboard</h4>
      <p>{count}</p>
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
    </div>
  );
}

export default Dashboard;
