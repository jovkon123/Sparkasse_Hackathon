interface Props {
  setVariable: (prevState: boolean) => void;
  variable: boolean;
  value: string;
  id: string;
}

const AfterRegisterCheckBox = ({ setVariable, variable, value, id }: Props) => {
  return (
    <div className="w-[50%] space-x-2">
      <input
        className="accent-[#2870ED] border-[[#2870ED]"
        checked={variable}
        onChange={() => setVariable(!variable)}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default AfterRegisterCheckBox;
