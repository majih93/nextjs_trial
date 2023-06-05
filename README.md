# NextJS

## Folder Structure Guides

`layout.tsx` 
- main entry point of the application
- provides a common layout, or template for all the pages in the app
- -> checkout more on the NextJS document


`page.tsx`
- This is the homepage for the application.

`globals.css`
- style to be applied for all pages in the app


## Client Components vs Server Components

React 18 and Next 13 introduced Server Components 

Server Components are rendered in the Server

Client Components are rendered by the Client ( to make a component a Client Component, you have to state "use client" on top of the file)
-> we can leverage between advantages of both CSR and SSR

If somehow a component utilizes states or hooks, it is important to make the component a Client Component (state management in React is primarily handled on the Client side)

[When to use Server vs. Client Components?](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components)

## Routing in NextJS

Very simple. Just create a directory under the app directory, and create a `page.js` or `page.tsx` file under the directory. The `page` file is what is going to be shown when a user access the `/directory_name` route.

How about **nested routing**?

To achieve nested routing in React, you'd have to write some code that looks like this

```JSX
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='posts' element={<Home/>}>
    <Route path='new' element={<NewPost />} />
  <Route/>
<Routes/>
```

how do I do this in NextJS?

Just create another folder inside a folder, and add a `page.js` or `page.tsx` file for the folder. Quite simple and explicit!!

How about **dynamic routing**?

The react version

```JSX
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='posts' element={<Home/>}>
    <Route path='new' element={<NewPost />} />
    <Route path=':postId' element={<Post />} />
  <Route/>
<Routes/>
```

The NextJS version

create a directory with the name in the form of `[postId]` and just like other cases create a `page.js` or `page.tsx`

Additionally, you can also add a `layout.js` file for every sub-directory for the app directory. 

Also, you can add a `loading.js` file, which is responsible for holding a View code which is going be shown for a loading process. -> While the `page.js` is being rendered, the contents in the `loading.js` file is going to be displayed.

What if an error occurs? You can create an `error.js` file, which is going to be shown in case of errors. ( Error components must be client components. Why? Because errors happen in the Client Side...! )


## Data Fetching

NextJS provides three choices for data fetching.

1. Server Side Rendering (SSR)
   - fetch data from server everytime
2. Static Site Generation (SSG)
   - fetch data and cache data in the client side
3. Incremental Static Generation (ISR)
   - fetch data in pre-set intervals for refresh.

How can I utilize the Full Stack capabilities NextJS provides?
-> Serverless Route handlers

