import { LoginHoc } from "./LoginHoc";
import { ProfileHocType } from "./ProfileHoc";

type PrivateHocType = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileHocType>;
};

export const PrivateHoc = ({
  isLoggedIn,
  component: Component,
}: PrivateHocType) => {
  return <>{isLoggedIn ? <Component name="Omer" /> : <LoginHoc />}</>;
};
