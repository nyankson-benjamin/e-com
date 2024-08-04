import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell,
  Button,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import useScreenWidth from "../../Hooks/useScreenWidth";
import { useSelector } from "react-redux";
import Header from "../typography/Header";

export default function CartTable({ data, cart, handleDelete }) {
  const [screenWidth] = useScreenWidth();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn)

console.log(cart)
  return (
    <div style={{ margin: "10px " }}>
      <Header text="My Cart"/>
      <br />
      {screenWidth > 600 ? (
        <TableContainer
          component={Paper}
          // sx={{ textAlign: "center", margin: "10px" }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  fontSize: "3px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <TableCell>ID</TableCell>
                <TableCell></TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Unit Price ($)</TableCell>
                <TableCell>Total Price ($)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            {cart?.length >= 1 ? (
              <TableBody>
                {cart?.map((cart, index) => (
                  <TableRow key={cart._id}>
                    <TableCell>{index}</TableCell>
                    <TableCell>
                      <img src={cart.image} style={{ width: "30px" }} />
                    </TableCell>
                    <TableCell>{cart.item}</TableCell>
                    <TableCell>{cart.quantity}</TableCell>
                    <TableCell>{cart.unitPrice}</TableCell>
                    <TableCell>{cart.totalPrice}</TableCell>
                    <TableCell>{cart.purchased ? "Purchased" :"-"}</TableCell>

                    <TableCell>
                      {!cart.purchased ? <ButtonGroup variant="contained">
                        <Button className="w-32"
                          variant="contained"
                          onClick={() => {
                            if (isLoggedIn) {
                              navigate(`/cartItem/buy/${cart._id}`);
                            } else {
                              navigate("/login");
                            }
                          }}
                        >
                          BUY
                        </Button>
                        <IconButton
                          onClick={() => handleDelete(cart._id, cart.item)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ButtonGroup> :<div className="flex justify-end">
                      <IconButton 
                          onClick={() => handleDelete(cart._id, cart.item)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div> }
                      
                    </TableCell>
                    <TableRow></TableRow>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={5}>
                    No item found.
                    <Button onClick={() => navigate("/products")}>
                      Add new Item
                    </Button>{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      ) : (
        <TableContainer
          component={Paper}
          sx={{ textAlign: "center", margin: "10px" }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  fontSize: "3px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <TableCell>ID</TableCell>

                <TableCell>Item</TableCell>
                <TableCell>Qty</TableCell>

                <TableCell>Price ($)</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            {cart?.length >= 1 ? (
              <TableBody>
                {cart?.map((cart) => (
                  <TableRow key={cart.id}>
                    <TableCell>{cart.id}</TableCell>

                    <TableCell>{cart.item}</TableCell>
                    <TableCell>{cart.quantity}</TableCell>

                    <TableCell>{cart.totalPrice}</TableCell>

                    <TableCell>
                      <ButtonGroup variant="contained" fullWidth>
                        {!cart.purchased && <Button
                          variant="contained"
                          onClick={() => {
                            if (isLoggedIn) {
                              navigate(`/cartItem/buy/${cart.id}`);
                            } else {
                              navigate("/login");
                            }
                          }}
                        >
                          BUY
                        </Button>}
                        <IconButton onClick={() => handleDelete(cart.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </ButtonGroup>
                    </TableCell>
                    <TableRow></TableRow>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={5}>
                    No item found.
                    <Button onClick={() => navigate("/products")}>
                      Add new Item
                    </Button>{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
