type StyleProps = {
  styles: React.CSSProperties;
};

export const StyleContainer = (props: StyleProps) => {
  const { styles } = props;

  return (
    <div style={styles}>
      <p>Hello Styling!!</p>
    </div>
  );
};
