import { twMerge } from "tailwind-merge";
type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: "checkbox";
};
export default function Checkbox(props: CheckboxProps) {
  const { children, className, ...rest } = props;
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="chk"
        className={twMerge(
          `w-5 h-5 appearance-none border border-[#4f4f4f] bg-white checked:bg-[#4f4f4f] rounded-[5px] checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center`,
          className
        )}
        {...rest}
      />
      <label htmlFor="chk">{children}</label>
    </div>
  );
}
