import Card from "@mui/material/Card";
import "./employeesList.scss";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, ButtonGroup, Pagination, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { Employee, State } from "../../store/state";
import { Roles } from "../../utils/types";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteEmployee,
  getEmployeesList,
  getSuggestions,
} from "../../store/backend.action";
import ReactPaginate from "react-paginate";

export default function EmployeesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const role = "Admin";
  const [accountName, setAccountName] = useState("");
  const [filteredList, setFilteredList] = useState<Employee[]>([]);
  const employeesList = useSelector((state: State) => state.employeesList);
  const [page, setPage] = useState(0);
  const isView = useRef(false);
  const employeesPerPage = 5;
  const employeesVisited = page * employeesPerPage;
  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected);
  };
  useEffect(() => {
    setFilteredList(employeesList as Employee[]);
  }, [employeesList]);

  //to fetch employees list
  useEffect(() => {
    dispatch(getEmployeesList());
  }, []);
  function navigateToForm(req?: Employee) {
    dispatch(getSuggestions());
    navigate("/employeeForm", {
      state: { details: req, isView: isView.current },
    });
  }
  function deleteForm(req: Employee) {
    dispatch(deleteEmployee(req.empId));
  }
  const filteredListData = filteredList?.slice(
    employeesVisited,
    employeesVisited + employeesPerPage
  );
  function employeeFilter(searchString: string) {
    setPage(0);
    setFilteredList(
      (employeesList as Employee[])?.filter((request) => {
        return request.empName
          .toLowerCase()
          .includes(searchString.toLowerCase());
      })
    );
  }
  const pageCount =
    filteredList?.length > 0
      ? Math.ceil(filteredList.length / employeesPerPage)
      : 0;

  return (
    <>
      <div className="row pb-2 m-4">
        <div className="col">
          <h4>Employees List</h4>
        </div>
        <div className=" col form-outline form-white">
          <TextField
            className="form-control"
            id="outlined-required"
            size="small"
            label="search"
            value={accountName}
            onChange={(event) => {
              setAccountName(event.target.value);
              return employeeFilter(event?.target.value);
            }}
          />
        </div>
        {role === Roles.admin && (
          <div className="col">
            <Button
              variant="outlined"
              className="float-end"
              onClick={() => navigateToForm()}
            >
              Add New Employee
            </Button>
          </div>
        )}
      </div>
      {filteredListData?.length > 0 ? (
        filteredListData.map((req: Employee, i: number) => (
          <Card key={i}>
            <CardContent>
              <div className="discription">
                <div>
                  <Typography variant="overline">Emp id</Typography>
                  <Typography>{req.empId}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Name</Typography>
                  <Typography>{req.empName}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Experience</Typography>
                  <Typography>{req.experience}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Role</Typography>
                  <Typography>{req.role}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Skills</Typography>
                  <Typography>{req.skills.toString()}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Practice</Typography>
                  <Typography>{req.practice}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Reporting Manager</Typography>
                  <Typography>{req.reportingManager}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Billing Status</Typography>
                  <Typography>{req.billingStatus}</Typography>
                </div>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined primary button group"
                >
                  <Button
                    onClick={() => {
                      isView.current = true;
                      navigateToForm(req);
                    }}
                  >
                    View
                  </Button>
                  <Button onClick={() => navigateToForm(req)}>Edit</Button>
                  <Button onClick={() => deleteForm(req)}>Delete</Button>
                </ButtonGroup>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center pt-5">No results found</div>
      )}
      {filteredListData?.length > 0 && (
        <div className="d-flex justify-content-flex-end me-5 mt-4">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeLinkClassName={"paginationActive"}
          />
        </div>
      )}
    </>
  );
}
