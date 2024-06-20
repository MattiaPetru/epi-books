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
// test 4

test("filtra le card in base alla ricerca", async () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Cerca un libro/i);

  fireEvent.change(searchInput, { target: { value: "haroun" } });

  const filteredUserItems = await screen.findAllByTestId("libro-card");

  expect(filteredUserItems).toHaveLength(1);

  expect(screen.getByText("Haroun and the Sea of Stories")).toBeInTheDocument();
});

//test 5
test("controllo che al click si crea un bordo", async () => {

  render(<App />);

  const userItem = await screen.findAllByTestId("libro-card");

  fireEvent.click(userItem[0]);

  expect(userItem[0]).toHaveStyle('border: 2px solid red');
});

//test 6
test("verifico che al click cambia il bordo della card", async () => {
  render(<App />);

  const libro = await screen.findAllByTestId("libro-card");
  const firstCard = libro[0];
  const secondCard = libro[1];

  fireEvent.click(firstCard);

  expect(firstCard).toHaveStyle('border: 2px solid red');

  fireEvent.click(secondCard);

  expect(secondCard).toHaveStyle('border: 2px solid red');
  expect(firstCard).not.toHaveStyle('border: 2px solid red');
});


//test 7
test("verifico che non ci siano commenti al caricamento della pagina", () => {
  render(<App />)
  
  const commento = screen.queryByText(/Add Comment/i);
  expect(commento).not.toBeInTheDocument()
})
//test 3

test('verifico componente CommentArea venga renderizzato correttamente', () => {
  render(<App />)

  const btnDetail = screen.getAllByRole('button', {name: /Book Details/i})
  fireEvent.click(btnDetail[0])
  const commentArea = screen.getAllByPlaceholderText(/Inserisci qui il tuo commento/i);
  expect(commentArea[0]).toBeInTheDocument()
 });


//test 8

test('verifico commenti vengono renderizzati correttamente', () => {
  render(<App />)

  const commentAreaElement = screen.getByTestId('Commentone');
  expect(commentAreaElement).toBeInTheDocument();

});