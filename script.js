let littleRed = {
  color: 'red',
  pluralnoun: ['coconuts', 'apples', 'grapes', 'bananas'],
  adjective: 'aggressive',
  exclamation: 'hello',
  sillyword: 'bumfuzzel',
  verb: ['gone', 'ate', 'began',]

}
// part1
console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralnoun[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyword}?"

"I'm going to my grandmother's house," she said. Then the wolf 
 ${littleRed.verb[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralnoun[1]} you have."

"The better to ${littleRed.verb[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralnoun[2]} you have."

The wolf said, "The better to .${littleRed.verb[2]} you with."

And then she said, "What big ${littleRed.pluralnoun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)

//////////////////////

// part 2

littleRed.color = 'black'// 1 color changed
// change adjective using slice //


littleRed.pluralnoun.splice(2, 1, ' mangoes')


littleRed.adjective = 'nice'

littleRed.exclamation = 'welcome'

littleRed.verb.splice(1, 1, 'ran')


console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralnoun[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyword}?"

"I'm going to my grandmother's house," she said. Then the wolf 
 ${littleRed.verb[1]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralnoun[1]} you have."

"The better to ${littleRed.verb[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralnoun[2]} you have."

The wolf said, "The better to .${littleRed.verb[2]} you with."

And then she said, "What big ${littleRed.pluralnoun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)

// snow white story //
let snowwhite = {
  pluralnoun: ['stories', 'rabbits'],
  number: 5,
  adjective: ['brave', 'fearless', 'beautiful'],
  noun: ['tree', 'boat', 'titanic', 'diamond', 'apple'],
  color: 'blue',
  partofthebody: 'neck',
  adverb: 'happy',
}

console.log(`One of the most popular fairy ${snowwhite.pluralnoun[0]} of all time is Snow White and the
${snowwhite.number} ${snowwhite.pluralnoun[1]}.

Snow White is a princess whose ${snowwhite.adjective[0]} beauty threatens her stepmother,
the queen. Snow White is forced to flee from the ${snowwhite.noun[0]} in which she lives
and hide in a nearby ${snowwhite.noun[1]}.

  Once there, she is discovered by ${ snowwhite.adjective[1]} animals who guide her to the
${ snowwhite.adjective[2]} cottage of the seven dwarfs.The dwarfs take care of her until
the prince, who has traveled the four corners of the ${snowwhite.noun[2]} in search of
Snow ${ snowwhite.color}, arrives and gives her a magical ${snowwhite.noun[3]} on her ${snowwhite.partofthebody}, which miraculously bring her back to life after she eats
a poisonous ${ snowwhite.noun[4]}.Snow White and the prince live ${snowwhite.adverb} ever after.`)

// part 2


snowwhite.number = 8
snowwhite.adjective.splice(0, 1, 'kind')
snowwhite.noun.splice(1, 1, 'house')
snowwhite.noun.splice(3, 1, 'neckless')
snowwhite.color = 'gold'

console.log(`One of the most popular fairy ${snowwhite.pluralnoun[0]} of all time is Snow White and the
${snowwhite.number} ${snowwhite.pluralnoun[1]}.

Snow White is a princess whose ${snowwhite.adjective[0]} beauty threatens her stepmother,
the queen. Snow White is forced to flee from the ${snowwhite.noun[0]} in which she lives
and hide in a nearby ${snowwhite.noun[1]}.

  Once there, she is discovered by ${ snowwhite.adjective[1]} animals who guide her to the
${ snowwhite.adjective[2]} cottage of the seven dwarfs.The dwarfs take care of her until
the prince, who has traveled the four corners of the ${snowwhite.noun[2]} in search of
Snow ${ snowwhite.color}, arrives and gives her a magical ${snowwhite.noun[3]} on her ${snowwhite.partofthebody}, which miraculously bring her back to life after she eats
a poisonous ${ snowwhite.noun[4]}.Snow White and the prince live ${snowwhite.adverb} ever after.`)


