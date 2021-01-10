import './Banner.scss';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Banner() {
  function getElementOffset(element) {
    let top = 0,
      left = 0;
    // Loop through the DOM tree
    // and add it's parent's offset to get page offset
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);

    return { top, left };
  }

  function scrollTo(parentElm, to, time, prop) {
    if (!parentElm) {
      return;
    }
    var from = window.scrollY;
    var start = new Date().getTime();

    var timer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - start) / time);

      if (prop) {
        parentElm['scrollTop'] = from + step * (to - from);
      } else {
        parentElm.style['scrollTop'] = from + step * (to - from);
      }
      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);

    if (prop) {
      parentElm['scrollTop'] = from;
    } else {
      parentElm.style['scrollTop'] = from;
    }
  }

  function findParentWithAttr(el, attr) {
    while (el.parentNode) {
      el = el.parentNode;
      if (el.getAttribute(attr)) {
        return el.getAttribute(attr);
      }
    }
    return null;
  }

  function onClickNav(e) {
    e.preventDefault();

    var targetId = e.target.getAttribute('href');

    if (!targetId) {
      targetId = findParentWithAttr(e.target, 'href');
    }

    if (targetId) {
      var target = document.getElementById(targetId.substr(1));
      var toPosition = getElementOffset(target).top;
      scrollTo(
        document.scrollingElement || document.documentElement,
        toPosition,
        400,
        true
      );
    }
  }

  return (
    <div className="banner">
      <div className="backdrop" />
      <Grid className="myInfo">
        <ButtonBase focusRipple href="#intro" onClick={onClickNav}>
          <Typography
            component="span"
            variant="h2"
            align="center"
            className="myName"
          >
            Rachanee Saengkrajai
            <span className="nameMarked" />
          </Typography>
        </ButtonBase>

        <Typography variant="h5" align="center" className="myDesc">
          A Lifelong learning developer
          <br />
          who is skilled, enthusiastic and innovative.
        </Typography>
      </Grid>
    </div>
  );
}

export default Banner;
