# Madlibs

## Introduction
Madlibs are a `[Adjective]` for the whole `[Noun]`.

## Objective

For this exercise, you will be demonstrating your understanding of objects, arrays, and template literals to complete four different Madlibs stories. 

## Requirements

The following requirements must be met in order to complete the assignment successfully:

1. Clone this repository from GitHub. **Aside from this README file, there are NO starter files for this project.** 
2. Create a `index.html` file and a `script.js` file. The `index.html` file should contain a standard HTML5 structure and should add `script.js` using the `<script></script>` tag.
3. Follow the instructions below to create 2 versions of Little Red Riding Hood and 2 versions of Snow White. **There will be 4 stories in total.**

### Little Red Riding Hood

#### Part 1

Create a new object, with variable name `littleRed`, for the story "Little Red Riding Hood". The object should contain the following properties:

1.  A **color** as a `string`
2.  An `array of strings` with each string being a **plural noun**. There should be a total of 4 strings
3.  An **adjective** as a `string`
4.  An **exclamation** as a `string`
5.  A **silly word** as a `string`
6.  An `array of strings` with each string being a **verb**. The first verb in the array should be past tense. There should be a total of 3 strings.

Use a template literal and the object described above to complete the following story and output it to the console.

```
One day, Little [color] Riding Hood was going through the forest carrying a 
basket of [plural noun 1] for her grandmother. Suddenly, she met a big 
[adjective] wolf.

"[exclamation]" said the wolf. "Where are you going little [silly word]?"

"I'm going to my grandmother's house," she said. Then the wolf 
[verb 1 (past tense)] away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big [plural noun 2] you have."

"The better to [verb 2] you with," said the wolf.

"And, Grandmother," she said, "what big [plural noun 3]" you have."

The wolf said, "The better to [verb 3] you with."

And then she said, "What big [plural noun 4]" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother
```

#### Part 2

Using the `littleRed` object created above, replace the values of the following properties:

1.  Change the **color** property to a different **
color**
2.  Change the third string in the **plural noun** array to a different **plural noun**
3.  Change the **exclamation** to a different **exclamation**
4.  Change the second string in the **verb** array to a different **verb**

Complete the story above using the update object and output it to the console.

### Snow White

#### Part 1

Create a new object, with the name `snowWhite` for the story "Snow White". The object should contain the following properties:

1.  A `array of strings` with each string being a **plural noun**. There should be a total of 2 strings.
2.  A **number** as a `number`
3.  An `array of strings` with each string being an **adjective**. There should be a total of 3 strings.
4.  An `array of strings` with each string being a **noun**. There should be a total of 5 strings.
5.  A **color** as a `string`
6.  A **part of the body** as a `string`
7.  An **adverb** as a `string`

Use a template literal and the object described above to complete the following story and output it to the console.

```
One of the most popular fairy [plural noun 1] of all time is Snow White and the 
[number] [plural noun 2].

Snow White is a princess whose [adjective 1] beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the [noun 1] in which she lives 
and hide in a nearby [noun 2].

Once there, she is discovered by [adjective 2] animals who guide her to the 
[adjective 3] cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the [noun 3] in search of 
Snow [color], arrives and gives her a magical [noun 4] on her 
[part of the body], which miraculously bring her back to life after she eats 
a poisonous [noun 5]. Snow White and the prince live [adverb] ever after.
```

#### Part 2

Using the `snowWhite` object created above, replace the values of the following properties:

1.  Change the **number** to a different **number**
2.  Change the first item in the **adjective** array to a different **adjective**
3.  Change the second and fourth items in the **noun** array to a different **noun**
4.  Change the **color** to a different **color**

## Example
Here is a small example of how to complete this assignment.

Create a new object for the follow snippet of "The Three Little Pigs". The object should contain the following properties:

1. A **number** as a `number`
2. An **adjective** as a `string`
3. An `array of strings` with each string being a **plural noun**. There should be a total of 2 strings
4. An **noun** as a `string`

Use a template literal and the object described above to complete the following story and output it to the console.

## Example

```
Once upon a time there were [number] 
[adjective] [plural noun 1] who lived with their 
[noun]. One day they decided to leave to build their own 
[plural noun 2].

```
This example could be completed like this:

```javascript
const littlePigs = {
  number: 4,
  adjective: 'fat',
  pluralNouns: ['tigers', 'cars'],
  noun: 'cake'
}

console.log(`Once upon a time there were ${littlePigs.number} 
${littlePigs.adjective} ${littlePigs.pluralNouns[0]} who lived with their 
${littlePigs.noun}. One day they decided to leave to build their own 
${littlePigs.pluralNouns[1]}.`)
```

## Rubric

| Task | Points |
| ---  | :---:  | 
| Completes all tasks for Little Red Riding Hood Part 1 | 3 |
| Completes all tasks for Little Red Riding Hood Part 2  | 2 |
| Completes all tasks for Snow White Part 1  | 3 |
| Completes all tasks for Snow White Part 2  | 2 |
| **Total** | **10** | 


## Submission
When the project is completed, follow the steps below to submit for grading:

1. Create a commit with the message "Completes the Madlibs assignment"
2. Push all commits to GitHub.
3. Submit the URL to your GitHub repository to the **Madlibs** assignment on BrightSpace.  
