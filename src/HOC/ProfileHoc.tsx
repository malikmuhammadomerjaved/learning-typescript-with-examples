export type ProfileHocType = {
  name: string;
};

export const ProfileHoc = ({ name }: ProfileHocType) => {
  return <div>Private Profile component : name is {name}</div>;
};
