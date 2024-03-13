import { useState } from 'react';
import './App.css';

function App() {
	const carrito = JSON.parse(localStorage.getItem('carrito'));
	const [books, setBooks] = useState(carrito?.length ? carrito : []);

	function addBook() {
		const newBook = {
			titulo: 'Libro especial',
			author: 'Carlos',
			paginas: 70,
			editorial: 'Santillanas',
		};
		if (carrito?.length) {
			localStorage.setItem('carrito', JSON.stringify([...carrito, newBook]));
			sessionStorage.setItem('carrito', JSON.stringify([...carrito, newBook]));
		} else {
			localStorage.setItem('carrito', JSON.stringify([newBook])); //Se mantiene si cierro el navegador
			sessionStorage.setItem('carrito', JSON.stringify([newBook])); //Se borra cuando cierro el navegador
		}

		setBooks([...books, newBook]);
	}

	function deleteCart() {
		setBooks([]);
		localStorage.removeItem('carrito');
	}

	return (
		<>
			<div>
				{books.length ? (
					books.map((book, index) => {
						return (
							<div key={index}>
								<h1>{book.titulo}</h1>
								<h2>{book.author}</h2>
								<p>{book.paginas}</p>
							</div>
						);
					})
				) : (
					<h1>No hay Libros</h1>
				)}
			</div>
			<button onClick={addBook}>Agregar Libro</button>

			<button onClick={deleteCart}>Borrar carrito</button>
		</>
	);
}

export default App;
