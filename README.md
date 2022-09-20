# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Author](#author)


### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

[desktop.png](./screenshots)


### Links

- Solution URL: [frontendmentor.io/solutions/expenses-chart-component-using-flexbox-UinTEEnyXh]
- Live Site URL: [https://awsmpuff.github.io/expenses-chart-component-main/]

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
/* To auto change :before content in css and javascript */
.bar-value:hover::before {
    content: attr(data-before);
    position: absolute;
    top: -36px;
    background-color: var(--dark-brown);
    color: var(--very-pale-orange);
    padding: 6px;
    border-radius: 3px;
    font-size: 15px;
    left: -6px;
    right: -6px;
    display: flex;
    justify-content: center;
}
```
```js
/* To auto change :before content in css and javascript */
if (item.day == weekdays[currentDay]) {
        value = `<div class="bar-value active" style="height:${item.amount * 1.1}%" data-before="$${item.amount}"></div>`;
    } else {
        value = `<div class="bar-value" style="height:${item.amount * 1.1}%" data-before="$${item.amount}"></div>`;
    }

// fetch json from data.json
const data = fetch('data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => console.log(error));
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Useful resources

- [Youtube - VAIB](https://www.youtube.com/watch?v=wfbeDrcchNc) - This helped me with some javascript.


## Author

- Website - [Wanxia Xie](https://www.your-site.com)
- Frontend Mentor - [@awsmPuff](https://www.frontendmentor.io/profile/awsmPuff)


