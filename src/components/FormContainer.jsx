import React, { useState } from "react";

function FormContainer({ title, encryptPage, decryptPage }) {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");

  // function for encryption
  function encrypt(text, key) {
    let encrypted_text = "";
    key = parseInt(key);

    // loop through the text for each character
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      var encrypted_char = "";
      let isAlpha = char.match(/[a-z]/i);

      if (isAlpha) {
        const ascii_code = text.charCodeAt(i);
        console.log(ascii_code);

        if (ascii_code >= 65 && ascii_code <= 90) {
          encrypted_char = String.fromCharCode(
            ((ascii_code - 65 + key) % 26) + 65
          );
        } else if (ascii_code >= 97 && ascii_code <= 122) {
          encrypted_char = String.fromCharCode(
            ((ascii_code - 97 + key) % 26) + 97
          );
        }
      }

      encrypted_text += encrypted_char;
    }

    return encrypted_text;
  }

  // function for decryption
  function decrypt(text, key) {
    let decrypted_text = "";
    key = parseInt(key);

    // loop through the text for each character
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      var decrypted_char = "";
      let isAlpha = char.match(/[a-z]/i);

      if (isAlpha) {
        const ascii_code = text.charCodeAt(i);

        if (ascii_code >= 65 && ascii_code <= 90) {
          var calc_char = ascii_code - 65 - key;
          if (calc_char < 0) {
            decrypted_char = String.fromCharCode(26 + calc_char + 65);
          } else {
            decrypted_char = String.fromCharCode(calc_char + 65);
          }
        } else if (ascii_code >= 97 && ascii_code <= 122) {
          var calc_char = ascii_code - 97 - key;
          if (calc_char < 0) {
            decrypted_char = String.fromCharCode(26 + calc_char + 97);
          } else {
            decrypted_char = String.fromCharCode(calc_char + 97);
          }
        }
      }

      decrypted_text += decrypted_char;
    }

    return decrypted_text;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (encryptPage) {
      setOutput(encrypt(text, key));
    } else {
      setOutput(decrypt(text, key));
    }
  };

  return (
    <section className="formContainer">
      <form action="#" onSubmit={handleSubmit}>
        <h2 className="title">{title}</h2>

        <div>
          <p>Key</p>
          <input
            type="number"
            name="key"
            id="key"
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
        </div>

        <div>
          <p>{encryptPage ? "Plain Text" : "Cipher Text"}</p>
          <input
            type="text"
            name="text"
            id="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <div>
          <p>{encryptPage ? "Cipher Text" : "Plain Text"}</p>
          <p className="output">{output}</p>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default FormContainer;
