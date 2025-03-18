import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SortingSelectProps = {
  label: string;
  labelId: string;
  sortVals: SortingValues[];
  onChangeFn: (event: SelectChangeEvent) => void;
  value: SortDirection | "";
};

export function SortingSelect({
  label,
  labelId,
  sortVals,
  onChangeFn,
  value,
}: SortingSelectProps) {
  return (
    <FormControl
      size="small"
      fullWidth
      sx={{ minWidth: "140px", maxWidth: { md: "296px" } }}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        size="small"
        labelId={labelId}
        label={label}
        value={value}
        onChange={onChangeFn}
      >
        {sortVals.map((sort) => (
          <MenuItem key={sort.name} value={sort.value}>
            {sort.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
