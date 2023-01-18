import { useSelector } from "react-redux";

function RequestList() {
  const count = useSelector((state: any) => state.noOfOpenRequirements.value);
    return (
      <div>
        <h4>Request List</h4>
        Current Open requests : {count}
      </div>
      

    );
  }
  
  export default RequestList;
  