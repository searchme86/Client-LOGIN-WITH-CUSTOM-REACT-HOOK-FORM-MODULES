/***
 * YouTube
 *  */

import React, { useState } from 'react';
import { decode as base64_decode, encode as base64_encode } from 'base-64';

function AgainImageUpload() {
  const [filebase64, setFileBase64] = useState<string>('');

  const formSubmit = (e: any) => {
    e.preventDefault();
    // Submit your form with the filebase64 as
    // one of your fields
    console.log('ddd');
    console.log({ filebase64 });
    alert(
      "here you'd submit the form using\n the filebase64 like any other field"
    );
  };

  const convertFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || '';
      const fileType: string = fileRef.type || '';
      console.log('This file upload is of type:', fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        let encoded = base64_encode(`${ev.target.result}`);
        setFileBase64(`data:${fileType};base64,${encoded}`);
      };
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        Choose an image to to upload
        <form onSubmit={formSubmit}>
          <input type="file" onChange={(e) => convertFile(e.target.files)} />
          <hr />
          {filebase64 && (
            <>
              <p>
                It's ready to be submitted!
                <br />
                Simply include the 'filebase64' variable
                <br />
                as one of the things you submit
              </p>

              {/* if it's an image */}
              {/* if it's an image */}
              {/* if it's an image */}
              {filebase64.indexOf('image/') > -1 && (
                <img src={filebase64} width={300} alt="upload" />
              )}
              {/* if it's an image */}
              {/* if it's an image */}
              {/* if it's an image */}

              {/* if it's a video */}
              {/* if it's a video */}
              {/* if it's a video */}
              {filebase64.indexOf('video/') > -1 && (
                <video controls>
                  <source src={filebase64} />
                </video>
              )}
              {/* if it's a video */}
              {/* if it's a video */}
              {/* if it's a video */}

              {/* if it's a audio (music, sound) */}
              {/* if it's a audio (music, sound) */}
              {/* if it's a audio (music, sound) */}
              {filebase64.indexOf('audio/') > -1 && (
                <audio controls>
                  <source src={filebase64} />
                </audio>
              )}
              {/* if it's a audio (music, sound) */}
              {/* if it's a audio (music, sound) */}
              {/* if it's a audio (music, sound) */}

              {/* if it's a PDF */}
              {/* if it's a PDF */}
              {/* if it's a PDF */}
              {filebase64.indexOf('application/pdf') > -1 && (
                <embed src={filebase64} width="800px" height="2100px" />
              )}
              {/* if it's a PDF */}
              {/* if it's a PDF */}
              {/* if it's a PDF */}

              <hr />
              <button> Submit and check the console</button>
            </>
          )}
        </form>
      </header>
    </div>
  );
}

export default AgainImageUpload;
