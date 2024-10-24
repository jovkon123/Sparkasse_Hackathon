interface Props {
  socialNewtork: string;
}

const AfterRegisterInput = ({ socialNewtork }: Props) => {
  return (
    <div>
      <div className="flex space-x-4 w-full ">
        <label htmlFor={socialNewtork} className="flex items-center">
          <img
            className="h-[80%]"
            src={`/images/popups/AfterRegisterPopUpImgs/${socialNewtork}.svg`}
            alt={socialNewtork}
          />
        </label>
        <input
          id={socialNewtork}
          className="w-full focus:border-none focus:outline-gray-300 focus-border-gray-300 border border-gray-300 rounded-2xl px-2"
          type="text"
          placeholder={`https://www.${socialNewtork}.com/your-username`}
        />
      </div>
    </div>
  );
};

export default AfterRegisterInput;
