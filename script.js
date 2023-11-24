//your code here!
const count=1;
const myList = document.getElementById("infi-list");
  for (let i=0; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    myList.appendChild(listItem);
	
  }
  myList.addEventListener("scroll", function () {
    if (myList.scrollTop + myList.clientHeight >= myList.scrollHeight) {
      // User has reached the end of the list, add 2 more items
      for (let i = 1; i < 2; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Item ${myList.children.length + i}`;
        myList.appendChild(listItem);
      }
    }
  });