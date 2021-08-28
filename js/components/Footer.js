import LoadingAnimation from './LoadingAnimation';
import Wrapper from './Wrapper';
import Link from './Link';

function Footer() {
  return (
    <footer className="footer">
      <LoadingAnimation className="layout--normal">
        <Wrapper className="layout--leading-wide">
          <div className="footer__content">
            <Link href="mailto:gonciarz.krzysztof@gmail.com">gonciarz.krzysztof@gmail.com</Link><br/>
            <Link href="https://github.com/gonciarzkrzysztof">github.com/gonciarzkrzysztof</Link><br/>
            <Link href="http://linkedin.com/in/krzysztof-gonciarz">linkedin.com/in/krzysztof-gonciarz</Link><br/>
            <Link href="tel:48664988164">+48 664 988 164</Link><br/>
            <br/>
            <small className="footer__copyrights">&copy;2021</small>
          </div>
        </Wrapper>
      </LoadingAnimation>
    </footer>
  )
}

export default Footer;
