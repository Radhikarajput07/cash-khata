# CashKhata (Multi-User Version)

Ye version pehle wale se alag hai: **ab har user apna khud ka login banata hai, aur uska data hamesha ke liye, alag se, permanently save hota hai.** Koi bhi kisi ka data nahi dekh sakta.

## Ye kaise fix karta hai purani problems ko

| Purani problem | Fix |
|---|---|
| Data thodi der mein delete ho jaata tha | Ab **Firebase Firestore** (Google ka real cloud database) use ho raha hai — file-based storage nahi, jo free hosting pe delete ho jaati thi |
| Sabka data mix ho raha tha (tumhari entry client ko dikh rahi thi) | Ab har user **apna login** banata hai (email + password) — sabka data completely alag/private hai |
| Render khulte waqt loading/branding message | Ab site **Vercel** pe hai — koi cold-start spinner nahi, turant khulti hai |
| Phone ka back button app band kar deta tha | Fix hai (History API) — same as pehle |

## Setup karna hai (ek baar, 15-20 minute)

Tumhe **apna khud ka free Firebase project** banana hoga (Google account se, koi credit card nahi chahiye).

### Step 1: Firebase project banao
1. [console.firebase.google.com](https://console.firebase.google.com) kholo, Google account se login karo
2. "Add project" (ya "Create a project") dabao
3. Koi bhi naam do (jaise "cashkhata"), "Continue" dabao
4. Google Analytics ka option aayega — "Disable"/skip kar sakte ho (zaroori nahi)
5. "Create project" dabao

### Step 2: Authentication (login system) enable karo
1. Left sidebar mein "Build" → "Authentication" pe jao
2. "Get started" dabao
3. "Email/Password" pe click karo, "Enable" toggle ON karo, "Save" dabao
4. Wapas list mein "Google" pe click karo, "Enable" toggle ON karo, apna support email select karo, "Save" dabao (isse "Google se Login" button kaam karega)

### Step 3: Firestore Database banao
1. Left sidebar mein "Build" → "Firestore Database" pe jao
2. "Create database" dabao
3. Location choose karo (koi bhi, jaise `asia-south1` agar India ke paas wala chahiye), "Next"
4. "Start in production mode" select karo, "Create" dabao

### Step 4: Security Rules laga do
1. Firestore Database ke andar "Rules" tab pe jao
2. Jo bhi likha hai usse hata ke, is repo ki `firestore.rules` file ka poora content paste kar do
3. "Publish" dabao

**Ye step bahut zaroori hai** — isके bina koi bhi kisi ka data dekh/badal sakta hai.

### Step 5: Apna Firebase config le lo
1. Project ke home page pe (gear icon ⚙️ → "Project settings")
2. Neeche "Your apps" section mein, web icon `</>` pe click karo
3. Koi bhi nickname do app ko, "Register app" dabao
4. Jo code dikhega usme se `firebaseConfig = {...}` wala object copy kar lo

### Step 6: Config apni site mein daalo
1. Is project ke andar `public/firebase-config.js` file kholo
2. `PASTE_YOUR_...` wali saari values apne asli Firebase config ki values se replace kar do
3. Save kar do

## Vercel pe deploy karna

**Zaroori: is zip mein sab files already root level pe hain (koi "public" folder nahi) — GitHub pe upload karte waqt files ko seedha repo ke root mein daalna, kisi bhi naye folder ke andar nahi.**

1. [vercel.com](https://vercel.com) pe jaake GitHub se sign up karo (free)
2. GitHub pe ek naya repository banao
3. Is zip ki saari files (README.md, app.js, index.html, firebase-config.js, manifest.json, sw.js, icon-192.png, icon-512.png, firestore.rules) seedha upload kar do — root mein, koi extra folder nahi
4. Vercel dashboard mein "Add New" → "Project" → apna GitHub repo select karo
5. Baaki sab default rehne do (koi build command nahi chahiye) — "Deploy" dabao
6. 1-2 minute mein ek live link milega (jaise `https://cashkhata.vercel.app`)
7. Link kholke check karo — agar "404 NOT_FOUND" dikhe, to iska matlab files root mein sahi se nahi gayi (koi folder ke andar chali gayi) — GitHub repo check karo ki `index.html` root mein seedha dikh raha hai ya nahi

## Client/dost ko kaise use karwana hai

- Wahi link do jo Vercel ne diya
- Wo pehli baar khole to "Create account" (naya khata banayein) dabaye, apna email+password set kare
- Uske baad wo hamesha usi email/password se login karega, aur uska data hamesha safe/alag rahega
- Tum khud bhi apna alag account bana sakte ho (dusra email) testing ke liye — dono ka data kabhi mix nahi hoga

## Future changes

Jab bhi koi naya feature/change chahiye, Claude ko bol dena, naya `app.js`/`index.html` milega — bas GitHub pe upload karna, Vercel khud redeploy kar dega. Firebase config file (`firebase-config.js`) dobara nahi chhedni padegi, wo same rahegi.
