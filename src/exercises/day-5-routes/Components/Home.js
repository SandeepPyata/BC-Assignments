import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Hello! This is Home.</div>
      <Outlet />
    </>
  );
}
