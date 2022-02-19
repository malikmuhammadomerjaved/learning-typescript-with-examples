type GreetProps = {
  name: string;
  count: number;
  loggedIn: boolean;
};

export const SimplePropsExample = (props: GreetProps) => {
  const { name, count, loggedIn } = props;

  return (
    <div>
      {loggedIn && (
        <p>
          Welcome
          <strong> {name} </strong>
          <strong>{count}</strong>! ================ We have Learned Type of
          Props here
        </p>
      )}
    </div>
  );
};

type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

export const ObjectExample = (props: PersonProps) => {
  const { name } = props;

  return (
    <div>
      <p>{name.firstName}</p>
      <p>{name.lastName}</p>
    </div>
  );
};

type ArrayProps = {
  list: {
    first: string;
    last: string;
  }[];
};

export const ArrayExample = (props: ArrayProps) => {
  const { list } = props;

  return (
    <div>
      {list.map((data, index) => {
        const { first, last } = data;

        return (
          <div key={index}>
            <p>{first}</p>
            <p>{last}</p>
          </div>
        );
      })}
      <p>omer</p>
    </div>
  );
};
