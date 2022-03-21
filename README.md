# python-trading-bot-front-end

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Domain

## Homepage (_parent component_ )

[Image-of-home-page (with each component circled with a 1, 2, 3)]

- Link to unit tests:
- Should have a header with the site title
- Should have a banner with the site title & logo
- should have a body-homepage

## 1 -Header (_child component_)

- Link to unit tests:
- should RECEIVE the site title from a parent component
- should DISPLAY the site title

## 2 -Banner (_child component_)

- Link to unit tests:
- should receive a title and logo image from a parent component
- (unfinished) should render the Banner title component and send it the title and logo image

### Banner title (_child component_)

- Link to unit tests:
- should RECEIVE the title and logo image from a parent component
- should DISPLAY the title and logo image which it received from the parent component

## 3 -Body-homepage (_child component_)

- Link to unit tests:
- should display the title: Thicc Dough Crypto Bots
- should contain the names and logo images of all the bots
- (unfinished) should render the Bot Tile Component and send it the bot names and logo images
- (todo) should navigate to the relevant bot page when you click on one of the bots tiles

### Bot Tile Component (_child component_)

- Link to unit tests:
- (todo) should RECEIVE the bot name and image from the parent component
- (todo) should DISPLAY the bot logo image from the parent component

### UAT

- Link to cypress/E2E tests
