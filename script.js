/* .js files add interaction to your website */
/* Generate facts */
var factList = ["Of the 16.9 million people living in poverty in the US, two-thirds cannot afford period products.", "Taxes on period products in the US range from 4.7% to 10%.", "A study done in France found that 49.4% of women experiencing period poverty had at least one psychological symptom of depression and anxiety compared to those who did not experience period poverty.", "10% of girls in the United Kingdom are not able to purchase menstrual products, and 19% of girls have switched to using inappropriate products due to high costs.", "The use of inappropriate period products such as cloth, reusable pads, and leaves can lead to urinary tract infection, bacterial vaginosis, infection, skin irritation, vaginal itching, and white or green discharge.", "In the US 58% of women are ashamed of having a period, and 51% of men believe that it is improper to discuss periods at work.", "According to a study done by the UN, one in ten menstruating adolescents miss school during their period due to lack of access to period products and resources.", "Of the 1.9 billion people who menstruate, about 500 million lack access to menstrual products and hygiene facilities.", "In the United Kingdom, two million girls between the ages 14 and 21 have missed a part day or full day of school per term due to their period.", "In Gambia, some girls skip school five days every month because they cannot afford or access menstrual products and facilities; this sums to one month and a half every year.", "79% of teens feel like they lack proper education on menstrual health.", "Two-thirds of teen report to feeling stressed due to the lack of period products in their school.", "84% of teens either have missed a class or know someone who has missed a class due to their period.", "68.1% of women who experienced period poverty reported symptoms of moderate to severe depression.", "1.25 billion women and girls have no access to a safe, private toilet.", "One in ten girls in sub-Saharan Africa miss school due to their period.", "65% of women and girls in Kenya cannot afford period products.", "A 2019 study is Missouri found that 64% of women were unable to afford period products in the past year." ];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact () {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

/* Generate text */
var message = document.getElementById("message");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", displayMessage);
}


function displayMessage() {
  var recipient = document.getElementById("recipient").value;
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value; 
  var reason = document.getElementById("reason").value;
  message.innerHTML = 
    "Hello " + recipient + ", my name is " + name + ", and I am from " + location + ". I " +
    "wanted to reach out to you regarding making policies that reduce taxes " +
    "on period products and provide period products in public places to help reduce " +
    "period poverty. This is a vital thing to do because " + reason + ". " +
    "Thank you for considering my suggestion.";
}
