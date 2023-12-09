import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [quote, setQuote] = useState({})

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:9000/quote", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        console.log("called")
        setQuote({...result,number:generateRandomNumber()});
        
      })
      .catch(error => console.log('error', error));
  }, []);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5" 
        style={{
          backgroundImage: `url(${quote.number || 0}.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" style={{ maxWidth: '500px' }}>
          <div className="w-full pt-1 pb-5">
            <div className="text-center">
              <h2 class="text-2xl font-extrabold">Quotes of the Day For Vidhi Dubey</h2>
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p className="text-sm text-gray-600 text-center px-5">{quote?.content} </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
          </div>
          <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">{quote?.author}</p>
            {/* <p className="text-xs text-gray-500 text-center">@scott.windon</p> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
