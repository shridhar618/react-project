import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import app2 from './componenta/App2.jsx'
import Navbar from "./componenta/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <div class="center">
      <table border="0">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>

  <tr>
    <td>Shridhar</td>
    <td>21</td>
  </tr>
</table>
</div>


<h2>Special Character Example</h2>

<p>Ampersand : &amp; character</p>
<p>Less than : &lt; character</p>
<p>Greater than : &gt; character</p>
<p>Double quote : &quot; character</p>
<p>Single quote : &apos; character</p>
<p>One Quarter : &frac14;</p>
<p>One Half : &frac12;</p>
<p>Three Quarter : &frac34;</p>
<p>Degree Symbol : 45&deg;</p>
<p>Non breaking space : X&nbsp;&nbsp;&nbsp;Y</p>

<p>Double Digit Fraction : 3 11&frasl;10</p>
<p>Double Digit (Sup & Sub): <sup>10</sup>&frasl;<sub>10</sub></p>


<p> X<sup>12</sup><sub>34</sub> </p>

<p> X<sub>56</sub><sup>78</sup> </p>

<p>My favorite color is <del>blue</del> <ins>red</ins></p>

<b>welcome</b>
<strong>welcome</strong>

<strike>End of the program</strike>

<br />

<ul>
  <li>fff</li>
  <li>fff</li>
  <li>fff</li>
</ul>

<ul type="square">
  <li>fff</li>
  <li>fff</li>
  <li>fff</li>
</ul>

<ul type="circle">
  <li>fff</li>
  <li>fff</li>
  <li>fff</li>
</ul>

<ol>
  <li>ff</li>
  <li>ff</li>
  <li>ff</li>
</ol>

<ol type='I'>
  <li>fff</li>
  <li>fff</li>
  <li>fff</li>
</ol>

<ol reversed>
  <li>fff</li>
  <li>fff</li>
  <li>fff</li>
</ol>

<ol start="4">
  <li>fff</li>
  <li>fff</li>
  <li>fff</li>
  <li>fff</li>
</ol>


<dl>
  <dt>cvnjnvjgnjgn</dt>
  <dd>jfjfjffb</dd>
  <dt>cvnjnvjgnjgn</dt>
  <dd>jfjfjffb</dd>
  <dt>cvnjnvjgnjgn</dt>
  <dd>jfjfjffb</dd>
</dl>


<ol>
  <li>Programming Languages
      <ol type='a'>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
      </ol>
  </li>

  <li>Web Technologies
      <ol type='a'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
      </ol>
  </li>

  <li>Database
      <ol type='a'> 
          <li>MySQL</li>
          <li>PostgreSQL</li>
      </ol>
  </li>

</ol>


<div class="shridhar">
      <table border="3">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr> 

  <tr>
    <td>Shridhar</td>
    <td>21</td>
  </tr>

  <tr>
    <td>Virat</td>
    <td>36</td>
  </tr>
</table>

<table border="border">
    <caption>The align and valign attributes</caption>
    <tr align="center">
      <th></th>
      <th>Column Label</th>
      <th>Another One</th>
      <th>Still Another One</th>
    </tr>

    <tr>
      <th>align</th>
      <td align="left" >Left</td>
      <td align="ceter" >Center</td>
      <td align="right" >Right</td>
    </tr>
</table>


</div>




    </>
  )
}

export default App
