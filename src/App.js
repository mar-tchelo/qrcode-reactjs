import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setqrcodeLink] = useState('')

  function handleGenereter(link_url){
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin:3, 
     }, function(err, url){
      setqrcodeLink(url)
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value)
    handleGenereter(e.target.value)
  }

  return (
    <div className="container">

      <QRCode
        value={link}
      />

      <input
        className='input'
        placeholder='Digite seu link'
        value={link}
        onChange={(e) => handleQrcode(e)}
        required={true}
      />

      <a href={qrcodeLink} download={`qrcode.jpg`}>Baixar QRCode!</a>
    </div>

    
  );
}

export default App;
