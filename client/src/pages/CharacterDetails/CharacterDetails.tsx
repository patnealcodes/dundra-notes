import { useEffect, useState } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import CharactersAPI from "../../apis/CharactersAPI";

type LoaderData = {
  id: string // TEMPORARY
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params // LOGIC TO RETRIEVE CHARACTER DETAILS GOES HERE AND IS RETURNED

  return { id };
}

export default function CharacterDetails() {
  const { id } = useLoaderData() as LoaderData
  const [character, setCharacter] = useState({} as { imageUrl: string, name: string })

  useEffect(() => {
    CharactersAPI.get(id)
    .then((res: any) => {
      setCharacter(res)
    })
  }, [id])

  return (
    <div>
      Details for Character with ID: {id}

      {
        character && (
          <div>
            <img src={character.imageUrl} />
            <strong>{character.name}</strong>
          </div>
        )
      }
    </div>
  )
}