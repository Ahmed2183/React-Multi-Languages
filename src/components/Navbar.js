import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
function Navbar() {
  const {t, i18n} = useTranslation()

  const onChangeLang = (e)=>{
    i18n.changeLanguage(e.target.value)
  }

//   useEffect(()=>{
//     for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
//       const element = document.getElementsByClassName('lang')[index];
//       if(element.value === i18n.language){
//         element.setAttribute("selected", "true")
//       }
//     }
//   })
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">
               {t("home")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
            <button value="en" className="lang" onClick={onChangeLang}>EN</button>  {/* --> value is important otherwise converting language not working */}
            <button value="ur" className="lang" onClick={onChangeLang}>UR</button>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
