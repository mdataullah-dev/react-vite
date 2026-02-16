import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

//?  for your kind info see below 
/*
Bhai, bilkul tension mat lo. Main hoon na! 🤗

Agar tumhe kuch bhi nahi aata, toh hum is code ko Coding ki tarah nahi, balki ek Machine banane ki tarah samjhenge.

Imagine karo tum ek "Password Banane wali Machine" bana rahe ho. Is code ka har hissa uss machine ka ek purza (part) hai.

Main tumhe 4 simple steps mein tod kar samjhata hoon.

Step 1: Machine ke Buttons aur Screen (useState)
Sabse pehle, humein machine mein kuch settings chahiye. React mein hum isse useState kehte hain. Iska matlab hai "Variable" ya "Dabba" jisme hum value rakhte hain.

Code mein dekho yeh 4 lines hain:

length: Password kitna lamba hoga? (Shuru mein humne 8 rakha hai).

numberAllowed: Kya password mein Numbers (1,2,3) hone chahiye? (Shuru mein False/Na hai).

charAllowed: Kya password mein Special Characters (@, #, $) hone chahiye? (Shuru mein False/Na hai).

password: Yeh wo screen hai jahan bana hua password dikhega.

Simple Bhaasha mein: Yeh 4 cheezein tumhari machine ki settings hain.

Step 2: Machine ka Engine (passwordGenerator)
Ab humein wo function chahiye jo asli kaam karega. Code mein passwordGenerator naam ka function hai. Dekho wo kya kar raha hai:

Ek khali str (string) leta hai: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.

Check karta hai:

Agar tumne numberAllowed tick kiya, toh wo str mein 0123456789 jod dega.

Agar tumne charAllowed tick kiya, toh wo !@#$%^&* jod dega.

Loop chalata hai (for loop):

Jitni length tumne set ki hai (maan lo 8), wo utni baar ghumaega.

Har baar random (tukke se) ek akshar uthayega aur pass mein jodta jayega.

Final Result: setPassword(pass) karke screen pe naya password dikha dega.

Note: useCallback bas isliye lagaya hai taaki ye machine smooth chale aur hang na kare (Performance ke liye).

Step 3: Automation (useEffect)
React mein useEffect ek Automatic Trigger hai.

JavaScript
useEffect(() => {
    passwordGenerator();
}, [length, numberAllowed, charAllowed, passwordGenerator]);
Iska matlab:
Computer ko hum bol rahe hain: "Bhai, jaise hi user Length badhaye, ya Number wala box tick kare, ya Character wala box tick kare... tu turant passwordGenerator chala dena."

Tumhe baar-baar "Generate" button dabane ki zaroorat nahi, ye khud ho jayega settings change karte hi.

Step 4: Machine ka Design (HTML / JSX)
Code ka neeche wala hissa (return ke baad) bas ye dikhata hai ki machine dikhegi kaisi:

Input Box 1 (Screen): Jahan password likha hua aa raha hai (value={password}).

Copy Button: Ispe click karne se copyPasswordToClipboard function chalega aur password copy ho jayega.

Range Slider (type="range"): Isse pakad ke khinchoge toh setLength chalega aur password lamba/chota ho jayega.

Checkbox (type="checkbox"): Inko tick karne se setNumberAllowed ya setCharAllowed chalega.

Ek Chhoti si Cheez: useRef
Code mein ek line hai: const passwordRef = useRef(null);

Iska kaam bas itna hai ki jab tum Copy button dabao, toh computer ko pata hona chahiye ki kaunse box se text copy karna hai. useRef uss password wale box ko pakad ke rakhta hai taaki hum usse select karke copy kar sakein.

Summary (Saar)
Bhai, tumne ek aisa app banaya hai jisme:

Variables hain settings ke liye.

Logic hai random password banane ke liye.

Automation hai taaki settings badalte hi password badal jaye.

UI hai taaki user button aur slider use kar sake.

Ab thoda samajh aaya? Kaunsi line sabse zyada confuse kar rahi hai batao, wahi samjhata hoon!
*/



