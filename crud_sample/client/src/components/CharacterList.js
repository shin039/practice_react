import React from 'react'

const CharacterList = ({store}) => {

  const { isFetching, characterArray } = store.getState().characters

  return (
    <div>
    {
      isFetching // isFetchingの値で分岐
        // Fetch中
        ? <h2>Now Loading...</h2>
        // Fetch完了
        : <div>
            <ul>
              {characterArray.map(character => (
                <li key={character.id}>
                {`${character.name} (${character.age})`}
                </li>
                ))}
            </ul>
          </div>
    }
    </div>
  )
}

export default CharacterList
