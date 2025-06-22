<!-- //1. -->
<!-- <!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <title>JS DOM paragraph style</title>
</head>
<body>
  <p id='text'>JavaScript Exercises - w3resource</p>
  <div>
    <button id="jsstyle" onclick="js_style()">Style</button>
  </div>

  <script>
    function js_style() {
      const paragraph = document.getElementById('text');
      paragraph.style.fontFamily = 'Arial';
      paragraph.style.fontSize = '24px';
      paragraph.style.color = 'blue';
    }
  </script>
</body>
</html> -->

<!-- 2. -->

<!-- <!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <title>Return first and last name from a form - w3resource</title>
</head>
<body>
  <form id="form1" onsubmit="return getFormvalue()">
    First name: <input type="text" name="fname" value="David"><br>
    Last name: <input type="text" name="lname" value="Beckham"><br>
    <input type="submit" value="Submit">
  </form>

  <script>
    function getFormvalue() {
      const form = document.getElementById('form1');
      const fname = form.fname.value;
      const lname = form.lname.value;
      alert(`First name: ${fname}, Last name: ${lname}`);
      return false; // prevent form submission
    }
  </script>
</body>
</html> -->

<!-- //3. -->

<!-- <!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <title>Set background color of a paragraph</title>
</head>
<body>
  <p id="paragraph">This is a sample paragraph.</p>
  <button onclick="setBackgroundColor()">Set background color</button>

  <script>
    function setBackgroundColor() {
      const paragraph = document.getElementById('paragraph');
      paragraph.style.backgroundColor = 'grey';
    }
  </script>
</body>
</html> -->

<!-- 4. -->

<!-- <!DOCTYPE html> 
<html><head> 
<meta charset=utf-8 /> 
</head> 
<body> 
<p>
    <a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="http://www.w3resource.com/">w3reso
</a></p> 
<button onclick="getAttributes()">Click here to get attributes value</but
ton> 
<script>
function getAttributes() {
  const link = document.getElementById('w3r');
  const href = link.href;
  const hreflang = link.hreflang;
  const rel = link.rel;
  const target = link.target;
  const type = link.type;
  alert(`href: ${href}, hreflang: ${hreflang}, rel: ${rel}, target: ${target}, type: ${type}`);
}
</script>
</body>
</html>  -->

<!-- 5. -->

<!-- <!DOCTYPE html> 
<html><head><br><meta charset=utf-8 /> 
<title>Insert row in a table - w3resource</title> 
</head><body> 
<table id="sampleTable" border="1"> 
<tr><td>Row1 cell1</td> 
<td>Row1 cell2</td></tr> 
<tr><td>Row2 cell1</td> 
<td>Row2 cell2</td></tr> 
</table><br> 
<input type="button" onclick="insert_Row()" value="Insert row"> 
<script>
    function insert_Row() {
  const table = document.getElementById('sampleTable');
  const row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = 'New row cell1';
  cell2.innerHTML = 'New row cell2';
}
</script>
</body>
</html>  -->

<!-- 8. -->


<!-- 

<!DOCTYPE html>
<html><head> 
<meta charset=utf-8 /> 
<title>Remove items from a dropdown list</title> 
</head><body><form> 
<select id="colorSelect"> 
<option>Red</option> 
<option>Green</option> 
<option>White</option> 
<option>Black</option> 
</select> 
<input type="button" onclick="removecolor()" value="Select and Remove"><br></form>
<script>

function removecolor() {
  const select = document.getElementById('colorSelect');
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}
</script>
</body>
</html> -->

<!-- 9. -->

<!-- <!DOCTYPE html> 
<html><head> 
<meta charset=utf-8 /> 
<style type="text/css"> 
body {margin: 30px;} 
</style> 
<title>Count and display items of a dropdown list - w3resource</title> 
</head>
<body>
<form> 
<h1>Select your favorite Color :</h1> 
<select id="mySelect"> 
<option>Red</option> 
<option>Green</option> 
<option>Blue</option> 
<option>White</option> 
</select> 
<input type="button" onclick="getOptions()" value="Count and Output all items"> 
</form>
<script>
  function getOptions() {
  const select = document.getElementById('mySelect');
  const options = select.options;
  const count = options.length;
  let optionText = '';

  for (let i = 0; i < count; i++) {
    optionText += `${i + 1}. ${options[i].text}\n`;
  }

  alert(`There are ${count} items in the dropdown list:\n${optionText}`);
}
</script>
</body>
</html> --></body>