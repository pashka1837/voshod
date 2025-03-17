import Button from "@mui/material/Button";

type CartBtnProps = {
  isLoading?: boolean;
  handleClick(): void;
  desc: string;
};

export function CartBtn({ isLoading, handleClick, desc }: CartBtnProps) {
  return (
    <Button
      loading={isLoading}
      variant="outlined"
      onClick={handleClick}
      sx={{ width: "100%" }}
    >
      {desc}
    </Button>
  );
}
