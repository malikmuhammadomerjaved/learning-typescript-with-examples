// type ButtonProps = {
//   variant: "primary" | "secondary";
// } & React.ComponentProps<"button">;

// lets say we want children type to string only and not an HTML Node
//we can we-write using Omit keyword like this

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const HTMLButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={variant} {...rest}>
      {children}
    </button>
  );
};
