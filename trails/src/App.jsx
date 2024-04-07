import CardTrilha from "./components/CardTrilha";

function App() {
  const listaTrilhas = [
    {
      nome: "Morro do Cambirela",
      cidade: "Palhoça",
      estado: "SC",
      duracao: 150,
      dificuldade: "dificil",
      url: "https://images.pexels.com/photos/5036668/pexels-photo-5036668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      {listaTrilhas.map((trilha, index) => {
        return <CardTrilha dadosTrilha={trilha} key={index} />;
      })}
    </>
  );
}

export default App;
