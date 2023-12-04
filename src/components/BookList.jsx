import React, { useState, useEffect } from 'react'
import '../App'
import { API_URL } from '../API'
import axios from 'axios'
import { useAppContext } from './context/appContext'
import { useNavigate } from 'react-router'

const BookList = () => {
  const [books, setBooks] = useState([])

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext()

  const navigate = useNavigate()

  const favoritesChecker = (id) => {
    const isFavorite = favorites.some((book) => book.id === id)
    return isFavorite
  }

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <h2>
              <img
                src={book.image_url}
                alt="#"
                onClick={() => navigate(`/books/${book.id}`)}
              />
            </h2>
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button onClick={() => removeFromFavorites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookList
