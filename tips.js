
function text() {};

function tip(){
text = new text();
number = 0;
// textArray

text[number++] = "Play with your puppy's feet when it is young so it becomes used to the idea of having its nails cut.";
text[number++] = "Cold-blooded pets, such as lizards and snakes, should have two different sources in their cages in order to stay healthy.";
text[number++] = "Dogs\' sweat glands are located only on their paws so they pant to cool off.";
text[number++] = "The hair inside a dog\'s ear helps protect the ear canal and eadrum from dust.";
text[number++] = "Raisins and grapes can be toxic to dogs.  Raisin toxicity causes acute Renal failure.";
text[number++] = "When dogs exercise, their tongues become longer from increased blood flow.";
text[number++] = "Report Animal Cruelty!  NJ State SPCA Humane Police.  1-800-582-5979.  <a href='http://www.njspca.org'>www.NJSPCA.org</a>";
text[number++] = "<a href='http://network.bestfriends.org/newjersey/news/18224.html'>What to do</a> if you see animal cruelty.";

increment = Math.floor(Math.random() * number);
document.write(text[increment]);
}
