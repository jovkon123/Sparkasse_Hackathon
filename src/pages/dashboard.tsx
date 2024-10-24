import ExistingUserPage from "@/components/base/ExistingUserPage/ExistingUserPage";
import NewUserPage from "@/components/DashBoardPage/NewUserPage";

import NewNavBar from "@/components/NewNavBar";
import SideBar from "@/components/SideBar";

const dashboard = () => {
  return (
    <div>
      <NewNavBar />
      <div className=" flex ">
        <div className="w-[20%] ">
          <SideBar />
        </div>
        <div className=" w-[80%] ml-10 mt-10 ">
          {/* <ExistingUserPage /> */}
          <NewUserPage />/
        </div>
      </div>
    </div>
  );
};

export default dashboard;
