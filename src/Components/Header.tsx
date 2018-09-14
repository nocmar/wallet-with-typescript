import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';

interface IState{
    dropdownOpen: boolean
}
class Header extends React.Component<{},IState> {

  constructor(props:any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  public toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  public sidebarToggle(e:any) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  public mobileSidebarToggle(e:any) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  public asideToggle(e:any) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  public render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"/>>
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#">Budget</a>
          </li>
         </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="icon-bell"/><span className="badge badge-pill badge-danger">5</span></a>
          </li>
           <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="icon-cloud-upload"/></a>
          </li>
           <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="icon-magnifier-add"/></a>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle} className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <img src={'img/avatars/marta.jpg'} className="img-avatar" alt="martanocon@gmail.com"/>
                <span className="hidden-md-down">Marta</span>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header={true} className="text-center"><strong>Account</strong></DropdownItem>
                <DropdownItem><i className="fa fa-bell-o"/> Updates<span className="badge badge-info">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-envelope-o"/> Messages<span className="badge badge-success">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-tasks"/> Tasks<span className="badge badge-danger">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-comments"/> Comments<span className="badge badge-warning">42</span></DropdownItem>
                <DropdownItem divider={true} />
                <DropdownItem><i className="fa fa-shield"/> Lock Account</DropdownItem>
                <DropdownItem><i className="fa fa-lock"/> Logout</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
          </ul>
      </header>
    )
  }
}

export default Header;