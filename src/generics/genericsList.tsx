// type GenericsListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };

// export const GenericsList = ({ items, onClick }: GenericsListProps) => {
//   return (
//     <div>
//       <h2>List of items</h2>
//       {items.map((item, index) => {
//         return (
//           <div key={index} onClick={() => onClick(item)}>
//             {item}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// we-write types for a generic type of array

type GenericsListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

//if we want <T> as only string on number then we can write <T extends string | number>
//suppose we want id in our array of objects
export const GenericsList = <T extends { id: string }>({
  items,
  onClick,
}: GenericsListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
