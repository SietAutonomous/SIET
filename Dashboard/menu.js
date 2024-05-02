function sideBarOpen(){
  let sideBar=document.querySelector(".side-bar");
  sideBar.style.display="flex";
  sideBar.style.width="120px";
  sideBar.style.transition = 'display 10.5s'
  let menu = document.querySelector(".menu");
  menu.style.display='none';
  let cancel=document.querySelector('.cancel');
  cancel.style.display='block';
}
function sideBarClose(){
  let sideBar=document.querySelector(".side-bar");
  sideBar.style.display="none";
  let menu = document.querySelector(".menu");
  menu.style.display='block';
  let cancel=document.querySelector('.cancel');
  cancel.style.display='none';
}