// @ts-ignore
import { Navigate } from "@store/util-ui";

export default function Root(props) {
  return (
    <>
      <Navigate path="/account">Account</Navigate>
      <Navigate path="/cart">Cart</Navigate>
      <Navigate path="/product">Product</Navigate>
      <Navigate path="/shop">Shop</Navigate>
    </>
  );
}
