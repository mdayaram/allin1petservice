//Start of Drop down Menu.
showMenu = function() {
  var subMenuItems = document.getElementById("topMenu").getElementsByTagName("li");
  for (var i=0; i<subMenuItems.length; i++) {
    subMenuItems[i].onmouseover=function() {
      this.className+=" showMenu";
    }
    subMenuItems[i].onmouseout=function() {
      this.className=this.className.replace(new RegExp(" showMenu\\b"), "");
    }
  }
}
	
if (window.attachEvent) window.attachEvent("onload", showMenu);
//End of drop down menu


home=new Image(75,35);home.src="imgs/home.png";
services=new Image(95,35);services.src="imgs/services.png";
contact=new Image(100,35);contact.src="imgs/contact.png";
links=new Image(122,35);links.src="imgs/links.png";
staff=new Image(70,35);staff.src="imgs/staff.png";
references=new Image(115,35);references.src="imgs/references.png";
cared=new Image(170,35);cared.src="imgs/cared.png";

homep=new Image(75,35);homep.src="imgs/home-p.png";
servicesp=new Image(95,35);servicesp.src="imgs/services-p.png";
contactp=new Image(100,35);contactp.src="imgs/contact-p.png";
linksp=new Image(122,35);linksp.src="imgs/links-p.png";
staffp=new Image(70,35);staffp.src="imgs/staff-p.png";
referencesp=new Image(115,35);referencesp.src="imgs/references-p.png";
caredp=new Image(170,35);caredp.src="imgs/cared-p.png";

function mouse(imgDocID, imgObjName, comment) {
document.images[imgDocID].src = eval(imgObjName + ".src");
window.status = comment; 
return true;
}