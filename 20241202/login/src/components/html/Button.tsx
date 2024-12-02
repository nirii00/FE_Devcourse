import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
export default function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={twMerge(
        "w-[77px] h-[44px] text-white rounded-lg text-sm ",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
