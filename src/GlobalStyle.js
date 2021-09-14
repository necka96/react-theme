import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 list-style: none;
}
a{
 text-decoration: none;
 color: #fff;
}
:root{
  --bg-header: #f2f6ff;
  --bg-body: #fff;
  --bg-menu: #f655f1;
  --text-1: #bdbdbd;
  --text-2: #828282;
  --boredr: #ffc700;
  --btn-color: #f2f6f1;
  --circle: red

}
.light{
 --bg-header: #f2f6ff;
  --bg-body: pink;
  --bg-menu: #FAC9B8;
  --text-1: #000;
  --text-2: #fff;
  --border: #000;
  --btn-color: #fff;
    --circle: #fff
}
.dark{
 --bg-header: #004FFF;
  --bg-body: #333;
  --bg-menu: #368F8B;
  --text-1: #000;
  --text-2: #828282;
  --border: #F18701;
  --btn-color: #f2f6f1;
    --circle: black
}
.green{
 --bg-header: #8E4A49;
  --bg-body: #14fc5a;
  --bg-menu: #80FFEC;
  --text-1: #333;
  --text-2: #828282;
  --border: #14fc5a;
  --btn-color: #f2f6f1;
    --circle: green
}
.blue{
 --bg-header: #F2E86D;
  --bg-body: #6622CC;
  --bg-menu: #f655f1;
  --text-1: #000;
  --text-2: #828282;
  --border: #6622CC;
  --btn-color: #f2f6f1;
    --circle: blue
}
body{
 background-color: var(--bg-body);
}
`

export default GlobalStyle