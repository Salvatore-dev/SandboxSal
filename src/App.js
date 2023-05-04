function Mylogo() {
  return (
    <div className="logo">
      <img
        className="logo"
        alt=""
        src="https://4.bp.blogspot.com/-8ZUuncM3-qE/U8p1s-hn2FI/AAAAAAAALis/gQ5Ho5nTDpA/s1600/Elder+Sign.png"
      ></img>
    </div>
  );
}

function Mysection() {
  return (
    <div className="sections">
      <ol>
        <li>
          <a href="#">Great Ones</a>
        </li>
        <li>
          <a href="#">Outer Gods</a>
        </li>
        <li>
          <a href="#">Elder Gods</a>
        </li>
      </ol>
    </div>
  );
}

function Myenroll() {
  return (
    <div className="enroll">
      Become a <span>cultist</span>!
    </div>
  );
}

function Myheader() {
  return (
    <header>
      <Mylogo />
      <Mysection />
      <Myenroll />
    </header>
  );
}

function Card1() {
  return (
    <div className="images">
      <img
        className="cats"
        alt=""
        src="https://i.pinimg.com/originals/d7/70/d9/d770d9d10878c4bcfcfb046ed6506fab.jpg"
      ></img>
    </div>
  );
}
function Card2() {
  return (
    <div className="images">
      <img
        className="cats"
        alt=""
        src="https://ih0.redbubble.net/image.346546992.9119/flat,550x550,075,f.jpg"
      ></img>
    </div>
  );
}
function Card3() {
  return (
    <div className="images">
      <img
        className="cats"
        alt=""
        src="https://i.pinimg.com/originals/c7/be/72/c7be7267aecd054d7cc61049060d53a5.jpg"
      ></img>
    </div>
  );
}
function Card4() {
  return (
    <div className="images">
      <img
        className="cats"
        alt=""
        src="https://i.pinimg.com/originals/39/4f/86/394f86053a7681d14b5ace9617d26e28.jpg"
      ></img>
    </div>
  );
}
function Card5() {
  return (
    <div className="images">
      <img
        className="cats"
        alt=""
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h7X2HFE_Gx6SYlOeNOBx-gHaGa%26pid%3DApi&f=1&ipt=4dea072e29048dc6dc4b05417e2f25088ebdc1ec8426a056326b4504bd0596e1&ipo=images"
      ></img>
    </div>
  );
}
function Card6() {
  return (
    <div className="images">
      <img
        className="cats"
        alt=""
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.unFIkXw0Z9BAp1595r62uwAAAA%26pid%3DApi&f=1&ipt=ac7fe15472b343b2fe7808df62fc0b9aa3e2b325d820e119adab471ad3c2f947&ipo=images"
      ></img>
    </div>
  );
}

function Mycenter() {
  return (
    <div className="center">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Myfooter() {
  return (
    <div className="firma">
      <h2>fatto in casa by Salva</h2>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <Myheader />
      <Mycenter />
      <Myfooter />
    </div>
  );
}
