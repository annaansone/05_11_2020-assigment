function array(items)
{

return items[Math.floor(Math.random()*items.length)];

}

var items = [1, 2, 3, 4, 5 ];

const end = array(items);
document.getElementById('myid').innerHTML = end ;
