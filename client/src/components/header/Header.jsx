import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MERN Stack</span>
        <span className="headerTitleLg">Blog App</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1228517/pexels-photo-1228517.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  );
}
