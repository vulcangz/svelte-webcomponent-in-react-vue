# svelte-webcomponent-in-react-vue

Simple experiments to integrate web components created with Svelte in React or Vue applications.

在 React 或 Vue 2, Vue 3 应用程序中整合用 Svelte 创建的 Web 组件的简单实验。

The code was written for [this article](https://www.worldlink.com.cn/post/integrating-web-components-created-with-svelte-in-react-or-vue-apps.html).

## lerna branch(default)

To add a demo package for Vue 3, Using [lerna](https://github.com/lerna/lerna) as monorepo tool. If it is not already installed, you can install it with the following command.

```bash
# via npm
npm install -g lerna
# via yarn
yarn global add lerna
```

Then:

```bash
git clone https://github.com/vulcangz/svelte-webcomponent-in-react-vue.git
cd svelte-webcomponent-in-react-vue
npm run init
npm run build

# after that, you can test my-counter web component now
npm run react
# or
npm run vue2
# or
npm run vue3
```

## bolt branch

Adding project management with [bolt](https://github.com/boltpkg/bolt). If it is not already installed, you can install it with the following command.

```bash
yarn global add bolt 
```

Then:

```bash
git clone https://github.com/vulcangz/svelte-webcomponent-in-react-vue.git -b bolt
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