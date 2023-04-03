import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"

type LoaderData = {
  character: string // TEMPORARY
}

export async function loader({ params }: LoaderFunctionArgs) {
  const character = params.id // LOGIC TO RETRIEVE CHARACTER DETAILS GOES HERE AND IS RETURNED

  return { character };
}

export default function CharacterDetails() {
  const { character } = useLoaderData() as LoaderData

  return (
    <div>Details for Character with ID: {character}</div>
  )
}