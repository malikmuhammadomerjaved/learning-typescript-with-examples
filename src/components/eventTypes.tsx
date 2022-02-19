// we define the type to be void if there is nothing returned () => void
// we define event type like event: React.MouseEvent
// we can be more specific by adding event: React.MouseEvent<HTMLButtonElement>

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  const { handleClick } = props;

  return (
    <button onClick={(event) => handleClick(event, 1)}>
      Click Event Type Example
    </button>
  );
};

type InputProps = {
  value: string;
};

export const Input = (props: InputProps) => {
  const { value } = props;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log("handle input change", event);
  };

  return <input type="text" value={value} onChange={handleInputChange} />;
};
