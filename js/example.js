// ADD NEW ITEM TO END OF LIST
li = document.getElementsByTagName("li");
newItem = document.createElement("li");
newItem.innerHTML = "milk";
li[0].parentNode.appendChild(newItem);

// ADD NEW ITEM START OF LIST
newItem1 = document.createElement("li");
newItem1.innerHTML = "cereal";
li[0].parentNode.insertBefore(newItem1, li[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (i = 0; i < li.length; i++){
    li[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
numItems = li.length.toString();
text = document.createTextNode(" " + numItems);
grocHeader = document.getElementsByTagName("h2");
grocHeader[0].appendChild(text);
