type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  const { status } = props;

  let message = "";
  if (status === "loading") {
    message = "loading...";
  } else if (status === "success") {
    message = "success";
  } else if (message === "error") {
    message = "error";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

type ChildrenProps = {
  children: string;
};

export const Children = (props: ChildrenProps) => {
  const { children } = props;

  return <h2>{children}</h2>;
};

type ChildrenElementProps = {
  children: React.ReactNode;
};

export const ChildrenElement = (props: ChildrenElementProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

type OptionalPropsType = {
  name: string;
  count?: number;
  loggedIn: boolean;
};

export const OptionalProps = (props: OptionalPropsType) => {
  const { name, count = 0, loggedIn } = props;

  return (
    <div>
      {loggedIn && (
        <p>
          <strong> {name} </strong>
          <strong>{count}</strong>
        </p>
      )}
    </div>
  );
};
