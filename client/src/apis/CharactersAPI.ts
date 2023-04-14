const CharactersAPI = {
  get: async (id: string) => {
    const res = await fetch(`http://localhost:8000/characters/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })

    return res.json()
  }
}

export default CharactersAPI