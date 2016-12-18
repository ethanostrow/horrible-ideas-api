var express = require('express');
var app = express();

var router = express.Router();
var cities = ["San Francisco", "New York", "St. Louis", "Denver", "Munich", "Barcelona", "Madrid", "Geneva", "Beijing"];
var people = ["your Best-Friend's Mother", "an Unfriendly Relative", "your Least-Favorite Sibiling", "a huge jerk", "a Neighbor", "a total idiot", "your boss", "A friend you haven\'t seen in over a year"];
var communications= ["Snapchat", "Call", "Text", "Email", "Facetime", "DM"];
var ideas = ["ask them where to find some weed", "tell them you won\'t ever talk to them again without payment of $20", "inform them you just went on a hot date", "invite them to your house for the weekend", "offer to shine their shoes the next time you see them"];

var city = function (){
  return cities[Math.floor(Math.random()*cities.length)];
}
var person = function(){
  return people[Math.floor(Math.random()*people.length)];
}
var comunicationMethod = function(){
  return communications[Math.floor(Math.random()*communications.length)];
}
var idea = function(){
  return ideas[Math.floor(Math.random()*ideas.length)];
}
function horribleidea(){
  var pull = comunicationMethod() + ' ' + person() + ' and ' + idea() + ".";

}
router.get('/', function (req, res) {
  res.status(500).json({ error: 'bad request; please also specify a type' });
});

router.get('/city', function (req, res) {
  res.send(city());
});

router.get('/person', function (req, res) {
  res.send(person());
});

router.get('/communicationmethod', function (req, res) {
  res.send(comunicationMethod());
});

router.get('/idea', function (req, res) {
  res.send(idea());
});

router.get('/horribleidea', function (req, res) {
  res.json({ idea : comunicationMethod() + ' ' + person() + ' and ' + idea() + "." });
});

app.use('/', router);

app.listen(process.env.PORT || 4000);
console.log('All good @ port 4000');
