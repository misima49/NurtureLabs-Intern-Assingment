import './Navbar.css';

function Navbar() {
    return (
        <div className="sidenav">
          <div className="company-logo">
            <img src="images/company-logo.png" alt="TermMonitor logo" />
            <h1>Term<span>Monitor</span></h1>
          </div>

            <a href="#" id="current-tab"><i className="material-icons">home</i>Add keywords</a>
            <a href="#"><i className="material-icons">group</i>Matches</a>
            <a href="#"><i className="material-icons">payment</i>Manage sources</a>
            <a href="#"><i className="material-icons">payment</i>Integration</a>
            <a href="#"><i className="material-icons">payment</i>Alerts</a>

            <div className="settings">
              <a href="#"><i className="material-icons">group</i>Settings<i className="material-icons downArrow">arrow_drop_down</i></a>
              <a href="#">Billings</a>
            </div>
          
        </div>
    );
}

export default Navbar;