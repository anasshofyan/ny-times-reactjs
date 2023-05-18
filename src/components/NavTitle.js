import moment from "moment";
import LogoNyTimes from "../assets/images/logo_nytimes.png";

function NavTitle() {
  const currentDate = moment().format("dddd, MMMM DD, YYYY");

  return (
    <div>
      <nav className="navbar bg-body-tertiary d-flex justify-content-center pt-4">
        <img
          className="img-fluid"
          src={LogoNyTimes}
          alt="Logo Ny-Times"
          style={{ maxHeight: "50px" }}
        />
      </nav>
      <hr />
      <div className="pb-4 d-flex justify-content-between">
        <strong className="text-sans-serif f-sm">{currentDate}</strong>
        <span className="text-sans-serif f-sm">United States</span>
      </div>
    </div>
  );
}

export default NavTitle;
