import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <Link to="/home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/purple">Purple</Link>
      <Link to="/green">Green</Link>
    </div>
  );
}
