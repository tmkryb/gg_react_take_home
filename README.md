# giphy_search

This project is a simple implementation of "giphy gifs browser". It comes with some basic features like trending page, search component and favorites. It uses basic Giphy API, so for full deploy you need to generate giphy api key (you can do this at [this page](https://developers.giphy.com/))

### running locally

To run this project locally, all you have to do is change configuration in .env file, and provide your own **APIKey**:

    REACT_APP_API_KEY=JhchPz8vYFWE8wE3r3RHCcnVa2EGusXe

and simple npm create-react-app stuff:

    npm install
    npm start

It will host host on port 3000, as every CRA does.
You can also change your **basename**:

    REACT_APP_BASE_NAME=/gg_react_take_home
It will start on your basename

### decisions, trade-offs and so on

Project is divided in three main elements:
- pages: simple views presented to end user - every page has own route configured in react-router.
- components: elements used in pages - like ImageGrid or GiphTile
- customhooks: hooks used to query Giphy API.

Project is react-hooks only React (maybe some CRA default elements are classes, but I don't see a reason to change them). It uses some custom hooks that are created specifficaly to run on giphy API. My goal with hooks was to not repeat myself in similar components that are downloading giphs from API. With custom hooks I could just create a ImageGridComponent, that I used in pages with custom hooks for querying the API, and just pass the result to the Component.

Favorites are stored in localStorage - of course for more "production like" application this should be stored in some kind of API.
I use HashRouter because of Github pages lack of proper url-rewrite policy. Normally I would use standard BrowserRouter.
There are little tests - if I had some more time, I would definetely write more tests. I also have many other ideas for this application, like grouping favorites, copying clean gif url (not a "giphy" one), and copying GIF Image to clipboard directly and so on. It was very very fun project to work on :)

### deployment
Project can be deployed to github pages. As a matter of fact it is deployed and hosted on [this address](https://tmkryb.github.io/gg_react_take_home/#/).

If you want to publish it on your github pages, just fork this repo, change homepage in package.json, and run:

    npm run deploy

Page should be deployed as your github page.