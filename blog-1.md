# Why is `unknown` Safer than `any` in TypeScript?

## Introduction

When learning TypeScript, many beginners use `any` because it removes type errors quickly. At first, it feels easy and flexible. But in real projects, using `any` too much can create serious problems. That’s why TypeScript provides another type called `unknown`, which is much safer.

In this blog, I will explain why `any` is called a “type safety hole” and why `unknown` is the better choice for handling unpredictable data.


# What is `any`?

The `any` type disables TypeScript checking completely.


let value: any = "Hello";

value = 123;
value.toUpperCase();