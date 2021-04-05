# svelte-webcomponent-in-react-vue

Simple experiments to integrate web components created with Svelte in React or Vue applications.

The code was written for [this article](https://www.worldlink.com.cn/post/integrating-web-components-created-with-svelte-in-react-or-vue-apps.html).

## bolt branch

Adding project management with [bolt](https://github.com/boltpkg/bolt). If it is not already installed, you can install it with the following command.

```bash
yarn global add bolt 
```

Then:

```bash
git clone https://github.com/vulcangz/svelte-webcomponent-in-react-vue.git
cd svelte-webcomponent-in-react-vue
bolt install
bolt svelte
bolt vue

# In another terminal window
bolt react
```

## Credits and Inspiration

* [All the Ways to Make a Web Component - January 2021 Update](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) on WebComponents.dev By [&lt;div&gt;riots](https://divriots.com/)
* [USING SVELTE IN PRODUCTION](https://javascript-conference.com/blog/using-svelte-in-production/) By Daniel Mies
* [Integrate Web Components with Your Vue.js App](https://svelte.dev/tutorial/context-api) By Joshua Bemenderfer