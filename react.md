


# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.



# 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework



# 2. What are 'smart'(logic) and 'dumb'(display) components? Explain the difference and also add why we bother to make the distinction between them.

 // Your Answer

 Smart components contain functions and state, essentially controlling the 'brains of the operation'.

 Dumb components only receive information and/or 'call' smart components to action.

 The distinction maintains control of logic flow. Otherwise complex apps with many components would be a cluster F, not knowing who controls what.

 // Googled Answer

 Smart components (container components) keep track of state and care about how the app works.

 Dumb components ('presentational' components) only present something to the DOM. Once that is done, the component is done with it.

 This design pattern is good because it provides separation of concerns. Designers can work on the UI Dumb Component without the need to know all the logic. It also makes the component more reusable, as you can pass different logic to the same component or pass the same logic to different components.



# 3. When we use 'yarn add ...' in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

 // Your Answer

 Yarn is a program/application installation manager, so 'yarn add' begins this process. So far we've used it for creating React Apps.

 // Googled Answer

 'Yarn Install' is used to install all dependencies for a project. This is most commonly used when you have just checked out code for a project. This command has been replaced by 'yarn add'.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.



# 4. ???



# 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react'

    class Recipes extends Component {
      constructor(props) {
        super(props)
        this.state = {
          recipes:
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
        }
      }

      render() {

        let recipes = this.state.recipes.map(function(recipe) {
          return (
            <li key = {recipe.name} > {recipe.name} </li>
        })

        return (

          <ul>
            {recipes}
          </ul>

        )
      }
    }

    export default Recipes



# 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 // Your Answer

 meta tag
 image url
 inline styling

 // Googled Answer

 <input type='button'>
 <input type='checkbox'>
 <input type='color'>



# 7. How would you explain state to a friend who doesn't know code?  

 // Your Answer

 State is a preset value of information or property of an object, like a person's name or hair color. It can be changed however, and then it will retain the new info until it is manually changed again. It's a snapshot of the current 'state' of digital reality.

 // Googled Answer

 State is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state (i think my answer is more understandable to the layperson, but i see how this answer is more technically precise)



# 8. What is the difference between component state and props? Your answer should include a short explanation of both.

 // Your Answer

 Both are changeable values of an object, however State is fully managed within its own component, whereas are Props are passed into the constructor from an outside source, similar to the placeholder in a function.

 // Googled Answer

 Props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.



# 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

 We have not yet built tic-tac-toe, although I know Treasure Hunt is closely related, and I'm still trying to get through that one. I can say that it's very challenging to keep track of all the proper labels, syntax and logic flow (river in reverse ha). However I really like React and understand the overall principles. It's an awesomely powerful tool that I'm eager to master, especially considering it's use by behemoths such as Facebook, Uber, Airbnb, etc.

 Throughout this coding experience, I'm learning to be more comfortable with not knowing everything as fast as I'd like. I'm generally the type of person who likes mental order and having a strong grasp on my surroundings, but clearly this will not always be the case as a burgeoning developer. Sometimes I'll be ahead of the curve but often times the person next to me will be in the 'lead'. Thriving even in the discomfort and knowing it's not a competition are critical traits for me to accept and appreciate. I can already feel this change in myself, and look forward to watching it blossom and bear fruit.
