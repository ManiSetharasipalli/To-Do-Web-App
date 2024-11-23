
const Button = ({onClick, text, Icon}) => {
    return (
        <div>
        <button
        type="button"
        onClick={onClick}
        className="flex items-center justify-center m-10 px-8 py-3 text-white font-semibold rounded-full \
  shadow-2xl bg-blue-500 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:rotate-6 \
  active:transform active:translate-y-1 active:scale-95 active:rotate-0"
      >
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {text}
      </button></div>
    )
}

export default Button;