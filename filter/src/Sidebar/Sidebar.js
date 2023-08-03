import Category from "./Category/Category";
import Price from '../Price/Price'
import Colors from "./Colors/Colors";
import '../Sidebar/Sidebar.css'
const Sidebar = ({handleChange}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
          👟<span className="me">ME<span className="dot">.</span></span>
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </>
  );
};

export default Sidebar;


