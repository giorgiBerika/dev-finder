import { Header, SearchDiv, Result } from './app-body/main';

function App()  {


  return (
    <>
   <div className="w-screen 
                  h-screen 
                  bg-greySecond 
                  font-custom
                  font-normal
                  flex
                  flex-col
                  items-center
                  justify-center
                  "> 
      <Header />
      <SearchDiv />
      <Result />
   </div>
   </> 
  )
}

export default App;
