export function eventHandler(setState) {
  return function onChange(e) {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
}

export const submitHandler = (onSubmit, arg) => (e) => {
  e.preventDefault();
  onSubmit(arg);
};
