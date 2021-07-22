import useAuth from '../hooks/useAuth';



export default function Home() {

  const { user, signin } = useAuth();
  console.log("User: ", user);
  return (
    <div>
      <h1>Aprenda programação direto ao ponto</h1>
      <button onClick={() => signin()}>Entrar com Github</button>
    </div>
  )
}
