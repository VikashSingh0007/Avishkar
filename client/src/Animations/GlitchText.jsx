import "./glitchText.css"

const GlitchText = ({title}) => {
  return (
    <div className="loader bg-transparent">
      <div data-glitch="Avishkar" className="glitch text-[5vw]">
        {title}
      </div> 
    </div>
  );
};

export default GlitchText;
