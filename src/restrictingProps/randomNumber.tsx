type RandomNumberType = {
  value: number;
};

type PositiveNumberType = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumberType = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type ZeroType = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveNumberType | NegativeNumberType | ZeroType;

//In this example a user can set isPositive, isNegative and isZero whereas it is wrong behavior
//so we have to set something which can restrict user for doing so

// type RandomNumberProps = {
//   value: number;
//   isPositive?: boolean;
//   isNegative?: boolean;
//   isZero?: boolean;
// };

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};
