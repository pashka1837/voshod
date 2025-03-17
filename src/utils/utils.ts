export function errBldr(errorName: string, msg?: string) {
  const error = new Error(msg);
  error.name = errorName;
  return error;
}
