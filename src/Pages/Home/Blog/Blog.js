/** @format */

import React from "react";
import useTitle from "../../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-700 to-slate-600">
      <div className="text-center shadow-2xl py-5 my-10 mx-14 rounded-3xl font-bold">
        <h3 className="text-success text-2xl">
          What'sDifference between SQL and NoSQL?
        </h3>
        <p className="text-white px-5">
          Ans : SQL databases are relational, whereas NoSQL databases are not.
          SQL databases have a predefined schema and use structured query
          language. For unstructured data, NoSQL databases use dynamic schemas.
          SQL databases scale vertically, whereas NoSQL databases scale
          horizontally. NoSQL databases are document, key-value, graph, or
          wide-column stores, whereas SQL databases are table-based. SQL
          databases are better suited for multi-row transactions, whereas NoSQL
          databases are better suited for unstructured data such as documents or
          JSON.
        </p>
      </div>
      <div className="text-center shadow-2xl py-5 my-10 mx-14 rounded-3xl font-bold">
        <h3 className="text-success text-2xl">
          What is JWT, and how does it work?
        </h3>
        <p className="text-white px-5">
          Ans : JWT means json web token. which transmitting information between
          two parties as an object. It is compact, readable and digitally signed
          using a private key. The purpose of jwt is to give the authenticity of
          data so that no one other than those two parties can use that piece of
          information. Its a token based system. It has 3 layers header,
          payload,signature.When user logged in a system server gives a token
          and client site store it , whenever client request for anything server
          verifies the token and then give requested data.
        </p>
      </div>
      <div className="text-center shadow-2xl py-5 my-10 mx-14 rounded-3xl font-bold">
        <h3 className="text-success text-2xl">
          What is the difference between javascript and NodeJS??
        </h3>
        <p className="text-white px-5">
          Ans :Javascript is a programming language that is used for writing
          scripts on the website but NodeJS is a Javascript runtime
          environment.Javascript can only be run in the browsers whereas,We can
          run Javascript outside the browser with the help of NodeJS.Javascript
          is capable enough to add HTML and play with the DOM but Nodejs does
          not have capability to add HTML tags.Javascript is used in frontend
          development and Nodejs is used in server-side development.
        </p>
      </div>
      <div className="text-center shadow-2xl py-5 my-10 mx-14 rounded-3xl">
        <h3 className="text-success text-2xl">
          How does NodeJS handle multiple requests at the same time?
        </h3>
        <p className="text-white px-5">
          Ans : When NodeJS receives multiple client requests and places them
          into EventQueue. NodeJS has a event driven architecture and has it's
          own event loop which is an infinite loop receives requests and
          processes them. It separates asynchronous requests and when it
          completes it goes into the queue and event loop to throw them into to
          stack meanwhile executes the stacks request.by the time stack becomes
          empty then event loop throws the completed asynchronous requests from
          queue to stack .
        </p>
      </div>
    </div>
  );
};

export default Blog;
