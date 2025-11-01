import { Outlet } from "react-router-dom";

function RootElement() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RootElement;
