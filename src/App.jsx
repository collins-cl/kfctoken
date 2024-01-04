/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import "./App.scss";
import Hero from "./assets/hero2.png";
import Tokenomics from "./assets/tokenomics.gif";
import Gif from "./assets/giphy.gif";
import Footer from "./assets/200w.webp";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="hero-section">
          <div className="header">
            <div className="title">Kentucky Fried Chicken</div>
            <div className="sub">Powered by solana</div>
          </div>

          <div className="hero">
            <div className="box">
              <img src={Hero} alt="" />
            </div>

            <div className="text">
              <div className="desc">
                <span>Kentucky Fried Chicken</span> is a degenerate gambler with
                the original KFC narrative on the Solana network.
              </div>

              <div className="links">
                <a
                  className="dex"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy $KFC
                </a>

                <div className="socials">
                  <a href="https://www.x.com/kfc_token_sol" target="_blank" rel="noopener noreferrer">
                    X
                  </a>
                  <a href="https://t.me/kentuckfriedchicken" target="_blank" rel="noopener noreferrer">
                    TG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <marquee direction="" scrolldelay="60" scrollamount="10">
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
          $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC $KFC
        </marquee>

        <div className="tokenomics">
          <div className="wrapper">
            <div className="head">Tokenomic</div>

            <div className="info">
              $KentuckyFriedChicken was made into 10 Billion Pieces to make sure
              it all goes round amongst it's customers.
              <span> It's Finger Lickin' Good</span>
            </div>

            <div className="section">
              <div className="gif1">
                <img src={Tokenomics} alt="" />
              </div>

              <div className="nomics">
                <div className="supply">
                  <p>Total Supply</p>
                  <span>10, 000, 000, 000 $KFC</span>
                </div>

                <div className="address">
                  <p>Token Address</p>
                  <span>***********************************************</span>
                </div>
              </div>
            </div>

            <div className="buy-dex">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                BUy $KFC here
              </a>
            </div>
          </div>
        </div>

        <div className="fun-gif">
          <img src={Gif} alt="" />
        </div>

        <div className="footer">
          <div className="header">Socials</div>

          <p>Join the $KFC community</p>

          <div className="links">
            <div className="socials">
              <a href="https://www.x.com/kfc_token_sol" target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href="https://t.me/kentuckfriedchicken" target="_blank" rel="noopener noreferrer">
                TG
              </a>
            </div>
          </div>

          <div className="gif2">
            <img src={Footer} alt="" />
          </div>

          <div className="logo">Kentucky Fried Chicken</div>
        </div>
      </div>
    </div>
  );
}

export default App;
