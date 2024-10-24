interface Props {
    socijalnaMreza: string;
}

const ProfiliInput = ({ socijalnaMreza }: Props) => {
    return (
        <div>
            <div className="flex space-x-4 w-full ">
                <label htmlFor={socijalnaMreza} className="flex items-center">
                    <img className="h-[80%]" src={`/images/filip/${socijalnaMreza}.png`} alt={socijalnaMreza} />
                </label>
                <input
                    id={socijalnaMreza}
                    className="w-full focus:border-none focus:outline-gray-300 focus-border-gray-300 border border-gray-300 rounded-2xl px-2"
                    type="text"
                    placeholder={`https://www.${socijalnaMreza}.com/your-username`}
                />
            </div>
        </div>
    );
};

export default ProfiliInput;
