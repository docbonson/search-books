import React from 'react'
import { useAppContext } from './context/appContext'
import '../App'
const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext()

  const favoritesChecker = (id) => {
    const isFavorite = favorites.some((book) => book.id === id)
    return isFavorite
  }

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <h2>
                <img src={book.image_url} alt="#" />
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
        ))
      ) : (
        <h1 className="fav-message">You don't have any favorite books yet.</h1>
      )}
    </div>
  )
}

export default Favorites
