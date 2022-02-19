// position prop can be one of
// "left-center" | "left-top" | "left-bottom" | "center" | "center-top"
// "center-bottom" | "right-center" | "right-top" | "right-bottom"

//we can hard quote these but we want to learn how template literal types work

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

//we still have a problem that we have to pass "center-center" but we want to pass only "center"
// type ToastProps = {
//   position: `${HorizontalPosition}-${VerticalPosition}`;
// };

//so we can exclude "center-center"
//now we can pass only "center"
type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Positon - {position}</div>;
};
