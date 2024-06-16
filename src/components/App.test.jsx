import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import React from 'react';


import App from "../App";

import Welcome from "./Welcome"

//Test 1
test("si vede il messaggio di benvenuto?" , () => {
  render(<Welcome />);

  const TestoBenvenuto = screen.getByText(/App React Books/i);

  expect(TestoBenvenuto).toBeInTheDocument();
});


//Test 2
test("ci sono tante card quanti gli oggetti del file json?", async () => {
  render(<App />);
  const libri = await screen.findAllByTestId("libro-card");

  expect(libri).toHaveLength(150);

})

//test 3

test("verifico che commentArea viene renderizzato correttamente", async() => {
 render(<App />)
 const card = await screen.getByText("Book Details")
 fireEvent.click(card)

 const CommentArea = screen.getByText(/Inserisci qui il tuo commento/i)
 expect(CommentArea).toBeInTheDocument()


})