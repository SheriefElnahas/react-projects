function Header() {
  return (
    <header className="header" >
      <div className="container header--container">
      <div className="header__logo">
          <img src="react-logo.png" alt="" className="logo__img" />
          <p className="logo__title">ReactFacts</p>
        </div>
        <p className="header__info">React Course - Project 1</p>
      </div>

    </header>
  )
}

export default Header
