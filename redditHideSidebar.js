/*	Author: Brandon Presley
 *	GitHub: https://github.com/brandonp2412
 *	Date: 10/9/2017
 *
 *	Description: Deletes the right hand sidebar of Reddit.
 */

(function redditHideSidebar() {
	let sidebar = document.getElementsByClassName('side')[0];
	sidebar.parentNode.removeChild(sidebar);
})();