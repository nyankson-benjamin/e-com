import PropTypes from "prop-types";

export default function Header({text}) {
  return (
    <div> <h3 className="font-bold py-5 bg-white uppercase text-center">
  {text}
  </h3></div>
  )
}

Header.propTypes={
text:PropTypes.string
}