function Header(){

  const whatsapp = () => {
    // Logic to execute when the button is clicked
    console.log("WhatsApp button clicked");
  }

  return(
    <header>
      <h1>Los Tacos Menu</h1>
      <nav>
        <ul>
          <button onClick={whatsapp}><a id="whatsapp" href='https://wa.me/17874521745'>Ordena aqui</a></button>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header