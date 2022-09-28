## Objective

The objective of this site is to be a free, easy to use eCard creator specifically for people giving to effective charitites as gifts.


## To do list/Concerns

To do list:

-Write the code to have the charity list be different depending on the cause area tab selected

-Collect the art from the artists that have said they would donate and size them all to be the same, then replace the stand in art with the real art

-Write code to have the charity blerb/impact text (each tab has it's own json with the charity dictionary) show up on the card above the personal message (I think that is a good spot for it?)

-Deploy site

Concerns/Wish List:

-The art on the site right now are just placeholders, when I get the real art from the artists I will size it so they are consistent

-Right now the text of the card is put on top of the image becuase that is what I could figure out as of now. I want to try to get the art up top, then the text below more similar to a real card

-I think I need to change the charity drop down list to https://tailwind-elements.com/docs/standard/forms/select/ so that it is easier to have the selection be an input (the selection will determine the blerb on the card)

-Maybe there should be a spot for a write-in charity (not sure if it is too exclusive to only do TLYCS charitites and GiveWell funds), if someone chooses to write in the charity they gave to then there will be a very short generic bleb/text

-I put a spot to specify the donation amount so that I could do an impact calculation, but I think I should remove this since not all the charities have a very clear impact statement, plus people might not want to specify the amount and if they do they can always write it in the personal message section

-I want to add an instructions paragraph at the top that explains the site and directs people to GiveWell and The Life You Can Save to make their charity or charitable fund choices and donate



## Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
