import { tv } from "tailwind-variants";

export interface HorizontalRuleProps {
  className?: string;
}

const horizontalRule = tv({
  base: "h-px w-full border-0 bg-gradient-to-r from-transparent via-pink-200 to-transparent",
  variants: {
    default: {
      true: "",
    },
  },
  defaultVariants: {
    default: true,
  },
});

export default function HorizontalRule({ className }: HorizontalRuleProps) {
  return <hr className={horizontalRule({ className })} />;
}