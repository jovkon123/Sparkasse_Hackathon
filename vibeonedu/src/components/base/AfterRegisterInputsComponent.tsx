import AfterRegisterInput from "./AfterRegisterInput";

const AfterRegisterInputsComponent = () => {

  return (
    <div className="space-y-2">
      <p className="font-bold">Социјални профили</p>
      <p>останете во контакт и споделете го вашиот напредок со заедницата</p>
      <div className="space-y-4">
        <AfterRegisterInput socialNewtork="facebook" />
        <AfterRegisterInput socialNewtork="instagram" />
        <AfterRegisterInput socialNewtork="linkedin" />
      </div>
    </div>
  );
};

export default AfterRegisterInputsComponent;
