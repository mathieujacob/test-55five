function ShowProduct (element) {
//Array with Product Card Content
  [...document.querySelectorAll(".ProductCard__content")]
// filter fct for showing only unique product card content
    .filter(unique)
// filter fct with viewport fonction when interaction
    .filter(InViewport)
// for each = loop with price and name of all the product card (name,price)    
    .forEach((element) => {
      const price = element?.querySelector(".ProductCard__price")?.innerText
      const name = element.querySelector(".ProductCard__title").innerText;
      console.log(name, price);
      element.dataset.alreadySeen = "1";
    });
};
// fonction qui permet de gérer la zonne d'affichage)
function InViewport(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= window.innerHeight &&
    bounding.right <= window.innerWidth
  );
}
function unique(element) {
  return element.dataset.alreadySeen !== "1";
}
//when scroll , log name et price
document.addEventListener("scroll", ShowProduct);
