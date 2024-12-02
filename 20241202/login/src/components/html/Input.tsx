type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "email" | "number" | "password" | "tel";
};
export default function Input(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input {...rest} />
    </>
  );
}
