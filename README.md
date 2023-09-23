# Framer Motion Practise Project

Practise project using Framer motion from tutorial "Framer Motion (for React)":

https://www.youtube.com/playlist?list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i

The tutorial is old, so some of the codes on it needs to change
<br /><br />
New react router implementation
```
<BrowserRouter basename="/app">
  <Routes>
    <Route path="/" />
  </Routes>
</BrowserRouter>
```
> Check the react-router-dom for the new format of Routes component implementation: https://reactrouter.com/en/main

<br /><br />
When implementing the following:

yoyo transition
```
yoyo: Infinity,
```
<br />
  Change it to:

```
repeatType: "mirror",
repeat: Infinity,
```
<br /><br />
AnimatePresence exitBeforeEnter
```
<AnimatePresence exitBeforeEnter>
```
<br />
Change it to:

```
<AnimatePresence mode="wait">
```

<br /><br />
> Link on the Framer Motion documentation: https://www.framer.com/motion/<br />
> Original github repo: https://github.com/iamshaunjp/framer-motion/tree/master
