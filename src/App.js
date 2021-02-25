import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav>
        <div className="nav-title">
            <a>I'm IU</a>
        </div>
        <div className="hamburger">
           
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

        <ul className="nav-links" id="content">
            <li><a href="index.html">Home</a></li>
            <li><a href="hot.html">Hot</a></li> 
            <li><a href="opera.html">Opera</a></li>
            <li><a href="store.html">Store</a></li>
            <li><a href="concert.html">Concert</a></li>                  
        </ul>  
    </nav>
    <div className="navsquare"></div>
    <div className="bigIU">
        <img src="images/1920/组 230@2x.png" className="IMIU"/>
    </div>

    <section className="about" class="about"> 
        <div className="aboutlyrics">"<br>
            I’ll be there, 홀로 걷는 너의 뒤에<br>
            Singing till the end, 그치지 않을 이 노래<br>
            아주 잠시만 귀 기울여 봐<br>
            유난히 긴 밤을 걷는 널 위해 부를게<br>
            love poem<br>
            "
        </div>
        <div className="aboutpages">
            <div>
                <p>Name<br>이지은</p>
                <p>Birthday<br>1993.05.16</p>
                <p>Debut Day<br>2008.09.18</p>

            </div>
            <div>
                <p>Music Style<br>KPOP.R B</p>
                <p>Fans name<br>U-ana</p>
                <p>Debut Day<br>2008.09.18</p>
            </div>
            <div>
                <img src="images\1920\jeNsfGG@2x.png" className="bgiu"/>
            </div>
        </div>

    
  <footer>
    <div className="footericon">
        <a href="https://www.facebook.com/iu.loen/" className="aicon"><img src="images/1920/facebook.png"  class="icon"/></a>
        <a href="https://www.instagram.com/dlwlrma/" className="aicon"><img src="images/1920/instagram.png" class="icon"/></a>
        <a href="https://twitter.com/_iuofficial" className="aicon"><img src="images/1920/twitter.png"   class="icon"/></a>
        <a href="https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww" class="aicon"><img src="images/1920/youtube.png"   class="icon"/></a>
    </div>
    <div className="footerword">©2019-2020 I'M IU.ALL RIGHTS RESERVED. </div>
</footer>

</body>


  );
}

export default App;
