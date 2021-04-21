// EXAMINE THE DOCUMENT OBJECT //

		// console.dir(document);
			/*
			- This displays all the properties & methods in "document" object in the console.
			- Its helpful to examine "document" object 
			*/
		// console.log(document.domain);
			/*
			 - gives the value of "domain" property that is inside the "document" object
			*/
		// console.log(document.URL);
		// console.log(document.title);
		// document.title =  123;
			/*
			 - this directly assigns(overriding existing value) 123 to the property 
			"title" inside "document"
			*/
		// console.log(document.doctype);
		// console.log(document.head);
		// console.log(document.body);
		// console.log(document.all);
			/*
			- logs an "htmlCollection" (seems similar to an array but not quite) that has 
			indices for each & every html of that webpage.
			*/
		// console.log(document.all[10]);
			/*
			- logs the html element which has '10' as its index in the "all" html collection.
			*/
		// document.all[10].textContent = 'Hello';
			/*
			- assigns(by overriding the existing content) the string 'Hello' as the text in 
			the html element that has the index 	'10'
			*/
		// console.log(document.forms[0]);
		// console.log(document.links);
		// console.log(document.images);

// GETELEMENTBYID //
		// console.log(document.getElementById('header-title'));
		// var headerTitle = document.getElementById('header-title');
		// var header = document.getElementById('main-header');

		// console.log(headerTitle);
		// headerTitle.textContent = 'Hello';
			/*
			- "textContent" property accounts for all the text-content in a certain html element
			- Let's say, there's an "inline style attribute" written on a child-element of
				our "headerTitle" element, where "display: none" is written.
			- In the above scenario, the child-element becomes invisible on the web-page
			- But, "textContent" property even takes that invisible text into consideration too
			*/
		// headerTitle.innerText = 'Goodbye';
			/*
			- Almost same as above, but this doesn't account for (or vary) the 
			elements (or child elements) that has hidden display properties for their 
			inline style attributes.
			- Only visible html text is taken into consideration by the "innerText" property
			*/
		// console.log(headerTitle.innerText);

		// headerTitle.innerHTML = '<h3>Hello</h3>';
			/*
			- Here, "innerHTML" property accounts to the child html element of 
			"headerTitle" element
			- Note that, no changes are done on the "headerTitle" element content/tag
			*/
		// header.style.borderBottom = 'solid 3px #000';
			/*
			- below inline css is added to "header" element 
			border-bottom: 'solid 3px #000';
			*/

// GETELEMENTSBYCLASSNAME //
		// var items = document.getElementsByClassName('list-group-item');
			/*
			- "items" is a "htmlCollection" with list of html element with their 
				corresponding indices.
			- We can access "htmlCollection" item using its corresponding index 
				(just like an array)
			*/
		// console.log(items);
		// console.log(items[1]);
		// items[1].textContent = 'Hello 2';
		// items[1].style.fontWeight = 'bold';
		// items[1].style.backgroundColor = 'yellow';

		// // Gives error
		// //items.style.backgroundColor = '#f4f4f4';

		// for(var i = 0; i < items.length; i++){
		//   items[i].style.backgroundColor = '#f4f4f4';
		// }

// GETELEMENTSBYTAGNAME //
		// var li = document.getElementsByTagName('li');
			/*
			- "items" is a "htmlCollection" with list of html element with their 
				corresponding indices.
			- We can access "htmlCollection" item using its corresponding index 
				(just like an array but not quite)		
			*/

		// console.log(li);
		// console.log(li[1]);
		// li[1].textContent = 'Hello 2';
		// li[1].style.fontWeight = 'bold';
		// li[1].style.backgroundColor = 'yellow';

		// // Gives error
		// //items.style.backgroundColor = '#f4f4f4';

		// for(var i = 0; i < li.length; i++){
		//   li[i].style.backgroundColor = '#f4f4f4';
		// }

// QUERYSELECTOR //
		// var header = document.querySelector('#main-header');
		// header.style.borderBottom = 'solid 4px #ccc';
			/* 
			- a "querySelector" always returns a single html or "null"
			*/
		// var input = document.querySelector('input');
		// input.value = 'Hello World'

		// var submit = document.querySelector('input[type="submit"]');

		// submit.value="SEND"

		// var item = document.querySelector('.list-group-item');
		// item.style.color = 'red';

		// var lastItem = document.querySelector('.list-group-item:last-child');
				/*
				- funky pseudo-selector involved 'last-child'
				- of all ".list-group-item" items, the last one gets selected
				*/
		// lastItem.style.color = 'blue';

		// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
				/*
				- funky pseudo-selector involved 'last-child'
				- of all ".list-group-item" items, the second one in the list gets selected
				*/
		// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
		// var titles = document.querySelectorAll('.title');
			/*
			- returns a "NodeList" which is quite similar to array.
			- Unlike "htmlCollection", a "NodeList" has a lot of array properties & methods
			*/

		// console.log(titles);
		// titles[0].textContent = 'Hello';

		// var odd = document.querySelectorAll('li:nth-child(odd)');
				/*
				- funky pseudo-selector involved 'last-child'
				- of all ".list-group-item" items in serial order, the odd-positioned 
				 items get selected
				*/
		// var even= document.querySelectorAll('li:nth-child(even)');
				/*
				- funky pseudo-selector involved 'last-child'
				- of all ".list-group-item" items in serial order, the even -positioned 
				 items get selected
				*/
		// for(var i = 0; i < odd.length; i++){
		//   odd[i].style.backgroundColor = '#f4f4f4';
		//   even[i].style.backgroundColor = '#ccc';
		// }



 // Note 1: "for" loop works on htmlCollection, NodeList, Arrays etc
	 /* "NodeList" is similar to "htmlCollection", except that we can most of 
	 	run array methods on "NodeList"
	 */
 // Note 2: So, most of the array methods are not appliccable to "htmlCollection"