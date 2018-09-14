import * as React from "react";
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component{
       public render(){
        return(
            <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" ><i className="icon-speedometer"/> Dashboard <span className="badge badge-info">NEW</span></Link>
            </li>
             <li className="nav-item">
              <Link to={'/expenses'} className="nav-link"><i className="icon-wallet"/>Expenses</Link>
            </li>
            <li className="nav-item">
              <Link to={'/budgets'} className="nav-link"><i className="icon-calculator"/>Budgets</Link>
            </li>
            <li className="nav-item">
              <Link to={'/charts'} className="nav-link" ><i className="icon-pie-chart"/> Reports</Link>
            </li>
            <li className="divider"/>
             <li className={this.activeRoute("/components")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className="options-vertical"/>Settings</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/accounts'} className="nav-link"><i className="icon-wallet"/> Accounts</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/social-buttons'} className="nav-link"><i className="icon-list"/> Categories</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/components/cards'} className="nav-link"><i className="icon-options"/> Preferences</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
        );
        
}
private activeRoute(routeName:any) {
    return 'nav-item nav-dropdown';
   // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }
  private handleClick(e:any) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }
}