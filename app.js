// ---------------- Translations ----------------
const STRINGS = {
  tagline: { en: "Your digital cash ledger", hi: "\u0906\u092A\u0915\u093E \u0921\u093F\u091C\u093F\u091F\u0932 \u0939\u093F\u0938\u093E\u092C-\u0915\u093F\u0924\u093E\u092C", hg: "Aapka digital hisaab-kitaab" },
  youllGet: { en: "You'll get", hi: "\u0906\u092A\u0915\u094B \u092E\u093F\u0932\u0947\u0902\u0917\u0947", hg: "Aapko milega" },
  youllGive: { en: "You'll give", hi: "\u0906\u092A\u0915\u094B \u0926\u0947\u0928\u093E \u0939\u0948", hg: "Aapko dena hai" },
  searchPlaceholder: { en: "Search customer...", hi: "\u0917\u094D\u0930\u093E\u0939\u0915 \u0916\u094B\u091C\u0947\u0902...", hg: "Customer khojein..." },
  customers: { en: "Customers", hi: "\u0917\u094D\u0930\u093E\u0939\u0915", hg: "Customers" },
  noCustomersTitle: { en: "No customers found", hi: "\u0915\u094B\u0908 \u0917\u094D\u0930\u093E\u0939\u0915 \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E", hg: "Koi customer nahi mila" },
  noCustomersSub: { en: "Add a new customer to get started.", hi: "\u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0928\u092F\u093E \u0917\u094D\u0930\u093E\u0939\u0915 \u091C\u094B\u095C\u0947\u0902\u0964", hg: "Naya customer add karke shuru karein." },
  addCustomer: { en: "Add customer", hi: "\u0917\u094D\u0930\u093E\u0939\u0915 \u091C\u094B\u091C\u093C\u0947\u0902", hg: "Customer jodein" },
  settled: { en: "Settled", hi: "\u092C\u0930\u093E\u092C\u0930", hg: "Settled" },
  deleteCustomerQ: { en: "Delete customer?", hi: "\u0917\u094D\u0930\u093E\u0939\u0915 \u0939\u091F\u093E\u0928\u093E \u0939\u0948?", hg: "Customer delete karna hai?" },
  yes: { en: "Yes", hi: "\u0939\u093E\u0902", hg: "Haan" },
  no: { en: "No", hi: "\u0928\u0939\u0940\u0902", hg: "Nahi" },
  youllGetShort: { en: "You'll get", hi: "\u0906\u092A\u0915\u094B \u092E\u093F\u0932\u0947\u0902\u0917\u0947", hg: "Aapko milenge" },
  youllGiveShort: { en: "You'll give", hi: "\u0906\u092A\u0915\u094B \u0926\u0947\u0928\u0947 \u0939\u0948\u0902", hg: "Aapko dene hain" },
  settledFull: { en: "All settled up", hi: "\u0939\u093F\u0938\u093E\u092C \u092C\u0930\u093E\u092C\u0930 \u0939\u0948", hg: "Hisaab barabar hai" },
  cash: { en: "Cash", hi: "\u0915\u0948\u0936", hg: "Cash" },
  online: { en: "Online", hi: "\u0911\u0928\u0932\u093E\u0907\u0928", hg: "Online" },
  total: { en: "Total", hi: "\u0915\u0941\u0932", hg: "Total" },
  noEntriesTitle: { en: "No entries yet", hi: "\u0905\u092D\u0940 \u0915\u094B\u0908 \u090F\u0902\u091F\u094D\u0930\u0940 \u0928\u0939\u0940\u0902", hg: "Koi entry nahi hai" },
  noEntriesSub: { en: "Add your first entry below.", hi: "\u0928\u0940\u091A\u0947 \u0938\u0947 \u092A\u0939\u0932\u0940 \u090F\u0902\u091F\u094D\u0930\u0940 \u091C\u094B\u095C\u0947\u0902\u0964", hg: "Neeche se pehli entry jodein." },
  youGave: { en: "You gave", hi: "\u0906\u092A\u0928\u0947 \u0926\u093F\u090F", hg: "Aapne diye" },
  youGot: { en: "You got", hi: "\u0906\u092A\u0915\u094B \u092E\u093F\u0932\u0947", hg: "Aapko mile" },
  addCustomerTitle: { en: "Add new customer", hi: "\u0928\u092F\u093E \u0917\u094D\u0930\u093E\u0939\u0915 \u091C\u094B\u095C\u0947\u0902", hg: "Naya customer jodein" },
  name: { en: "Name", hi: "\u0928\u093E\u092E", hg: "Naam" },
  namePlaceholder: { en: "e.g. Sachin", hi: "\u091C\u0948\u0938\u0947: \u0938\u091A\u093F\u0928", hg: "Jaise: Sachin" },
  phoneOptional: { en: "Phone number (optional)", hi: "\u092B\u094B\u0928 \u0928\u0902\u092C\u0930 (\u0935\u0948\u0915\u0932\u094D\u092A\u093F\u0915)", hg: "Phone number (optional)" },
  save: { en: "Save", hi: "\u0938\u0947\u0935 \u0915\u0930\u0947\u0902", hg: "Save karein" },
  enterNameErr: { en: "Enter a name first", hi: "\u092A\u0939\u0932\u0947 \u0928\u093E\u092E \u0921\u093E\u0932\u0947\u0902", hg: "Pehle naam daalein" },
  date: { en: "Date", hi: "\u0924\u093E\u0930\u0940\u0916", hg: "Date" },
  noteOptional: { en: "Note (optional)", hi: "\u0928\u094B\u091F (\u0935\u0948\u0915\u0932\u094D\u092A\u093F\u0915)", hg: "Note (optional)" },
  notePlaceholder: { en: "e.g. advance payment", hi: "\u091C\u0948\u0938\u0947: \u090F\u0921\u0935\u093E\u0902\u0938 \u092D\u0941\u0917\u0924\u093E\u0928", hg: "Jaise: advance payment" },
  saveEntry: { en: "Save entry", hi: "\u090F\u0902\u091F\u094D\u0930\u0940 \u0938\u0947\u0935 \u0915\u0930\u0947\u0902", hg: "Entry save karein" },
  amountErr: { en: "Enter a valid amount", hi: "\u0938\u0939\u0940 \u0930\u093E\u0936\u093F \u0921\u093E\u0932\u0947\u0902", hg: "Sahi amount daalein" },
  loading: { en: "Loading your ledger...", hi: "\u0906\u092A\u0915\u093E \u0916\u093E\u0924\u093E \u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u093E \u0939\u0948...", hg: "Aapka khata load ho raha hai..." },
  deleteEntry: { en: "Delete entry", hi: "\u090F\u0902\u091F\u094D\u0930\u0940 \u0939\u091F\u093E\u090F\u0902", hg: "Entry delete karein" },
  today: { en: "Today", hi: "\u0906\u091C", hg: "Aaj" },
  yesterday: { en: "Yesterday", hi: "\u0915\u0932", hg: "Kal" },
  todayReceived: { en: "Received today", hi: "\u0906\u091C \u092E\u093F\u0932\u0947", hg: "Aaj mile" },
  todaySent: { en: "Given today", hi: "\u0906\u091C \u0926\u093F\u090F", hg: "Aaj diye" },
  filterByDate: { en: "Pick a date", hi: "\u0924\u093E\u0930\u0940\u0916 \u091A\u0941\u0928\u0947\u0902", hg: "Date set karein" },
  showingDate: { en: "Showing", hi: "\u0926\u093F\u0916\u093E \u0930\u0939\u093E \u0939\u0948", hg: "Dikha raha hai" },
  clearFilter: { en: "Show all", hi: "\u0938\u092D\u0940 \u0926\u093F\u0916\u093E\u090F\u0902", hg: "Sab dikhao" },
  noEntriesForDate: { en: "No entries on this date", hi: "\u0907\u0938 \u0924\u093E\u0930\u0940\u0916 \u092E\u0947\u0902 \u0915\u094B\u0908 \u090F\u0902\u091F\u094D\u0930\u0940 \u0928\u0939\u0940\u0902", hg: "Is date mein koi entry nahi" },
  addedOn: { en: "Added on", hi: "\u091C\u094B\u095C\u093E \u0917\u092F\u093E", hg: "Add hua" },
  dailySummary: { en: "Daily Summary", hi: "\u0926\u0948\u0928\u093F\u0915 \u0938\u093E\u0930\u093E\u0902\u0936", hg: "Daily Summary" },
  dailySummarySub: { en: "Day-by-day total across all customers", hi: "\u0938\u092D\u0940 \u0917\u094D\u0930\u093E\u0939\u0915\u094B\u0902 \u0915\u093E \u0930\u094B\u091C\u093E\u0928\u093E \u0915\u0941\u0932 \u0939\u093F\u0938\u093E\u092C", hg: "Sabhi customers ka roz ka total hisaab" },
  totalReceived: { en: "Total received", hi: "\u0915\u0941\u0932 \u092A\u094D\u0930\u093E\u092A\u094D\u0924", hg: "Total received" },
  totalSent: { en: "Total sent", hi: "\u0915\u0941\u0932 \u092D\u0947\u091C\u093E", hg: "Total sent" },
  noDailyData: { en: "No transactions recorded yet", hi: "\u0905\u092D\u0940 \u0924\u0915 \u0915\u094B\u0908 \u0932\u0947\u0928-\u0926\u0947\u0928 \u0928\u0939\u0940\u0902 \u0939\u0941\u0906", hg: "Abhi tak koi len-den nahi hua" },
  billNumber: { en: "Bill number (optional)", hi: "\u092C\u093F\u0932 \u0928\u0902\u092C\u0930 (\u0935\u0948\u0915\u0932\u094D\u092A\u093F\u0915)", hg: "Bill number (optional)" },
  billNumberPlaceholder: { en: "e.g. 1024", hi: "\u091C\u0948\u0938\u0947: 1024", hg: "Jaise: 1024" },
  cashbook: { en: "Cashbook", hi: "\u0915\u0948\u0936\u092C\u0941\u0915", hg: "Cashbook" },
  cashbookSub: { en: "Overall shop cash \u2014 not linked to any customer", hi: "\u0926\u0941\u0915\u093E\u0928 \u0915\u093E \u0938\u092E\u0942\u091A\u0940 \u0915\u0948\u0936 \u2014 \u0915\u093F\u0938\u0940 \u0917\u094D\u0930\u093E\u0939\u0915 \u0938\u0947 \u091C\u0941\u0921\u093C\u093E \u0928\u0939\u0940\u0902", hg: "Dukaan ka overall cash \u2014 kisi customer se juda nahi" },
  bill: { en: "Bill", hi: "\u092C\u093F\u0932", hg: "Bill" },
  customerNameLabel: { en: "Customer name", hi: "\u0917\u094D\u0930\u093E\u0939\u0915 \u0915\u093E \u0928\u093E\u092E", hg: "Customer ka naam" },
  customerNamePlaceholder: { en: "Type a name...", hi: "\u0928\u093E\u092E \u091F\u093E\u0907\u092A \u0915\u0930\u0947\u0902...", hg: "Naam type karein..." },
  customerNameErr: { en: "Enter a customer name", hi: "\u0917\u094D\u0930\u093E\u0939\u0915 \u0915\u093E \u0928\u093E\u092E \u0921\u093E\u0932\u0947\u0902", hg: "Customer ka naam daalein" },
  addNewCustomerChip: { en: "Add new customer", hi: "\u0928\u092F\u093E \u0917\u094D\u0930\u093E\u0939\u0915 \u091C\u094B\u095C\u0947\u0902", hg: "Naya customer jodein" },
  // Auth screen
  appName: { en: "CashKhata", hi: "CashKhata", hg: "CashKhata" },
  authTagline: { en: "Your own private ledger, safe & separate", hi: "\u0906\u092A\u0915\u093E \u0905\u092A\u0928\u093E \u0928\u093F\u091C\u0940 \u0916\u093E\u0924\u093E, \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0914\u0930 \u0905\u0932\u0917", hg: "Aapka apna alag khata, safe aur private" },
  email: { en: "Email", hi: "\u0908\u092E\u0947\u0932", hg: "Email" },
  password: { en: "Password", hi: "\u092A\u093E\u0938\u0935\u0930\u094D\u0921", hg: "Password" },
  login: { en: "Log in", hi: "\u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902", hg: "Login karein" },
  signup: { en: "Create account", hi: "\u0916\u093E\u0924\u093E \u092C\u0928\u093E\u090F\u0902", hg: "Naya khata banayein" },
  noAccountYet: { en: "New here? Create an account", hi: "\u0928\u092F\u0947 \u0939\u0948\u0902? \u0916\u093E\u0924\u093E \u092C\u0928\u093E\u090F\u0902", hg: "Naye ho? Account banao" },
  haveAccount: { en: "Already have an account? Log in", hi: "\u092A\u0939\u0932\u0947 \u0938\u0947 \u0916\u093E\u0924\u093E \u0939\u0948? \u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902", hg: "Pehle se account hai? Login karo" },
  authErr: { en: "Something went wrong. Check your email/password.", hi: "\u0915\u0941\u091B \u0917\u0932\u0924 \u0939\u0941\u0908\u0964 \u0908\u092E\u0947\u0932/\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u091A\u0947\u0915 \u0915\u0930\u0947\u0902\u0964", hg: "Kuch galat hua. Email/password check karein." },
  logout: { en: "Log out", hi: "\u0932\u0949\u0917 \u0906\u0909\u091F", hg: "Logout" },
  googleSignIn: { en: "Continue with Google", hi: "\u0917\u0942\u0917\u0932 \u0938\u0947 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902", hg: "Google se login karein" },
  or: { en: "OR", hi: "\u092F\u093E", hg: "YA" },
};

function t(key) {
  return (STRINGS[key] && STRINGS[key][state.settings.lang]) || key;
}

function fmtMoney(n) {
  const v = Math.round(n || 0);
  return "\u20B9" + v.toLocaleString("en-IN");
}
function fmtDate(d) {
  return new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "2-digit" });
}
function dayKey(ts) {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}
function dayLabel(ts) {
  const d = new Date(ts);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const dKey = new Date(d);
  dKey.setHours(0, 0, 0, 0);
  if (dKey.getTime() === today.getTime()) return t("today");
  if (dKey.getTime() === yesterday.getTime()) return t("yesterday");
  const opts = { day: "2-digit", month: "short" };
  if (d.getFullYear() !== today.getFullYear()) opts.year = "numeric";
  return d.toLocaleDateString("en-IN", opts);
}
function fmtDateTime(d) {
  const dt = new Date(d);
  return dayLabel(d) + " \u2022 " + dt.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function evalExpr(expr) {
  if (!expr) return 0;
  const tokens = expr.match(/(\d+\.?\d*|[+\-\u00d7])/g) || [];
  if (tokens.length === 0) return 0;
  let result = parseFloat(tokens[0]) || 0;
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const val = parseFloat(tokens[i + 1]);
    if (val === undefined || isNaN(val)) break;
    if (op === "+") result += val;
    else if (op === "-") result -= val;
    else if (op === "\u00d7") result *= val;
  }
  return result;
}
function groupEntriesByDay(entries) {
  const groups = new Map();
  for (const e of entries) {
    const key = dayKey(e.ts);
    if (!groups.has(key)) groups.set(key, { key, ts: e.ts, entries: [], gave: 0, got: 0 });
    const g = groups.get(key);
    g.entries.push(e);
    if (e.type === "gave") g.gave += e.amount;
    else g.got += e.amount;
  }
  return [...groups.values()].sort((a, b) => b.key - a.key);
}

// ---------------- State ----------------
const state = {
  authed: false,
  authMode: "login", // 'login' | 'signup'
  authError: "",
  authSubmitting: false,
  customers: [],
  entries: {},
  settings: { dark: false, lang: "hg" },
  view: "dashboard",
  activeId: null,
  search: "",
  confirmDeleteRow: null,
  ready: false,
  dateFilter: null,
  returnView: "dashboard",
};

let entryContext = null;
let calcExpr = "";
let entryMode = "cash";
let custSuggestFocused = false;
let entrySubmitting = false;
let addCustomerSubmitting = false;

const auth = firebase.auth();
const db = firebase.firestore();
let currentUid = null;

// Keep the user logged in across visits/devices until they explicitly log out.
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => {});

async function signInWithGoogle() {
  if (state.authSubmitting) return;
  state.authSubmitting = true;
  state.authError = "";
  renderAll();
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    // onAuthStateChanged handles the rest
  } catch (e) {
    state.authError = e.message || t("authErr");
    state.authSubmitting = false;
    renderAll();
  }
}

// ---------------- Auth ----------------
auth.onAuthStateChanged(async (user) => {
  if (user) {
    currentUid = user.uid;
    document.getElementById("topbar").classList.remove("hidden");
    await loadUserData();
  } else {
    currentUid = null;
    state.authed = false;
    state.ready = false;
    document.getElementById("topbar").classList.add("hidden");
    renderAll();
  }
});

function setAuthMode(mode) {
  state.authMode = mode;
  state.authError = "";
  renderAll();
}

async function submitAuth() {
  if (state.authSubmitting) return;
  const email = document.getElementById("auth-email").value.trim();
  const password = document.getElementById("auth-password").value;
  if (!email || !password) {
    state.authError = t("authErr");
    renderAll();
    return;
  }
  state.authSubmitting = true;
  state.authError = "";
  renderAll();
  try {
    if (state.authMode === "signup") {
      await auth.createUserWithEmailAndPassword(email, password);
    } else {
      await auth.signInWithEmailAndPassword(email, password);
    }
    // onAuthStateChanged handles the rest
  } catch (e) {
    state.authError = e.message || t("authErr");
    state.authSubmitting = false;
    renderAll();
  }
}

function doLogout() {
  auth.signOut();
}

// ---------------- Firestore data layer ----------------
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

async function loadUserData() {
  const userDoc = await db.collection("users").doc(currentUid).get();
  state.settings = userDoc.exists ? (userDoc.data().settings || { dark: false, lang: "hg" }) : { dark: false, lang: "hg" };

  const customersSnap = await db.collection("users").doc(currentUid).collection("customers").orderBy("createdAt", "asc").get();
  state.customers = customersSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

  state.entries = {};
  for (const c of state.customers) {
    const entriesSnap = await db.collection("users").doc(currentUid).collection("customers").doc(c.id).collection("entries").get();
    state.entries[c.id] = entriesSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  state.ready = true;
  applyTheme();
  history.replaceState({ view: "dashboard", activeId: null, returnView: "dashboard" }, "");
  renderAll();
}

async function updateSettingsFS(next) {
  await db.collection("users").doc(currentUid).set({ settings: { ...state.settings, ...next } }, { merge: true });
}

async function addCustomerFS(name, phone) {
  const ref = await db.collection("users").doc(currentUid).collection("customers").add({
    name, phone, createdAt: Date.now(),
  });
  const customer = { id: ref.id, name, phone, createdAt: Date.now() };
  state.customers.push(customer);
  state.entries[customer.id] = [];
  return customer;
}

async function deleteCustomerFS(customerId) {
  const entriesSnap = await db.collection("users").doc(currentUid).collection("customers").doc(customerId).collection("entries").get();
  const batch = db.batch();
  entriesSnap.docs.forEach((d) => batch.delete(d.ref));
  batch.delete(db.collection("users").doc(currentUid).collection("customers").doc(customerId));
  await batch.commit();
  state.customers = state.customers.filter((c) => c.id !== customerId);
  delete state.entries[customerId];
}

async function addEntryFS(customerId, entry) {
  const ref = await db.collection("users").doc(currentUid).collection("customers").doc(customerId).collection("entries").add(entry);
  const saved = { id: ref.id, ...entry };
  if (!state.entries[customerId]) state.entries[customerId] = [];
  state.entries[customerId].push(saved);
  return saved;
}

async function deleteEntryFS(customerId, entryId) {
  await db.collection("users").doc(currentUid).collection("customers").doc(customerId).collection("entries").doc(entryId).delete();
  state.entries[customerId] = (state.entries[customerId] || []).filter((e) => e.id !== entryId);
}

async function resolveOrCreateCustomer(nameInput) {
  const trimmed = (nameInput || "").trim();
  const existing = state.customers.find((c) => c.name.toLowerCase() === trimmed.toLowerCase());
  if (existing) return existing.id;
  const customer = await addCustomerFS(trimmed, "");
  return customer.id;
}

// ---------------- Computations ----------------
function computeTotals() {
  const perCustomer = {};
  let overallGet = 0, overallGive = 0;
  for (const c of state.customers) {
    const entries = state.entries[c.id] || [];
    let cash = 0, online = 0, gave = 0, got = 0;
    for (const e of entries) {
      if (e.mode === "cash") cash += e.amount; else online += e.amount;
      if (e.type === "gave") gave += e.amount; else got += e.amount;
    }
    const net = gave - got;
    perCustomer[c.id] = {
      cash, online, grand: cash + online, net,
      lastAt: entries.length ? Math.max(...entries.map((e) => e.ts)) : c.createdAt,
    };
    if (net > 0) overallGet += net; else overallGive += -net;
  }
  return { perCustomer, overallGet, overallGive };
}

function filteredSortedCustomers(totals) {
  const q = state.search.trim().toLowerCase();
  let list = state.customers;
  if (q) {
    list = list.filter((c) => c.name.toLowerCase().includes(q) || (c.phone || "").includes(q));
  }
  return [...list].sort((a, b) => {
    const ta = totals.perCustomer[a.id]?.lastAt || 0;
    const tb = totals.perCustomer[b.id]?.lastAt || 0;
    return tb - ta;
  });
}

// ---------------- Theme + Language ----------------
function applyTheme() {
  document.documentElement.classList.toggle("dark", !!state.settings.dark);
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.innerHTML = `<i data-lucide="${state.settings.dark ? "sun" : "moon"}" class="w-4 h-4"></i>`;
    refreshIcons();
  }
}

function renderLangPills() {
  const el = document.getElementById("lang-pills");
  if (!el) return;
  const langs = [{ id: "en", label: "EN" }, { id: "hi", label: "\u0939\u093F" }, { id: "hg", label: "HG" }];
  el.innerHTML = langs.map((l) => `
    <button onclick="setLang('${l.id}')"
      class="px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-150 active:scale-95 ${
        state.settings.lang === l.id ? "bg-teal-700 text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
      }">${l.label}</button>
  `).join("");
}

async function setLang(lang) {
  state.settings.lang = lang;
  renderAll();
  if (currentUid) updateSettingsFS({ lang }).catch(() => {});
}

document.getElementById("theme-toggle").addEventListener("click", async () => {
  state.settings.dark = !state.settings.dark;
  applyTheme();
  renderAll();
  if (currentUid) updateSettingsFS({ dark: state.settings.dark }).catch(() => {});
});

// ---------------- History / back-button handling ----------------
function pushHistoryState() {
  history.pushState({ view: state.view, activeId: state.activeId, returnView: state.returnView }, "");
}
function goBack() {
  history.back();
}
window.addEventListener("popstate", (e) => {
  document.getElementById("modal-add-customer").classList.add("hidden");
  document.getElementById("modal-add-customer").classList.remove("flex");
  document.getElementById("modal-entry").classList.add("hidden");
  document.getElementById("modal-entry").classList.remove("flex");
  entryContext = null;

  if (!state.authed && !currentUid) return; // nothing to do on auth screen

  const s = e.state || { view: "dashboard", activeId: null, returnView: "dashboard" };
  state.view = s.view;
  state.activeId = s.activeId;
  state.returnView = s.returnView || "dashboard";
  state.confirmDeleteRow = null;
  state.dateFilter = null;
  renderAll();
});

// ---------------- Rendering ----------------
function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function renderAll() {
  renderLangPills();
  const root = document.getElementById("app");

  if (!currentUid) {
    root.innerHTML = renderAuthScreen();
    refreshIcons();
    return;
  }

  if (!state.ready) {
    root.innerHTML = `<div class="flex-1 flex items-center justify-center"><div class="text-sm text-slate-400 dark:text-slate-500">${t("loading")}</div></div>`;
    return;
  }
  if (state.view === "dashboard") {
    root.innerHTML = renderDashboard();
  } else if (state.view === "daily") {
    root.innerHTML = renderDailySummary();
  } else if (state.view === "cashbook") {
    root.innerHTML = renderCashbookView();
  } else {
    root.innerHTML = renderCustomerView();
  }
  refreshIcons();
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      renderCustomerListOnly();
    });
  }
}

function renderAuthScreen() {
  const isSignup = state.authMode === "signup";
  return `
    <div class="flex-1 flex flex-col items-center justify-center px-6 bg-teal-800 dark:bg-teal-950 text-white">
      <div class="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
        <i data-lucide="wallet" class="w-7 h-7"></i>
      </div>
      <h1 class="text-2xl font-bold mb-1">${esc(t("appName"))}</h1>
      <p class="text-sm text-teal-200 mb-8 text-center">${esc(t("authTagline"))}</p>

      <div class="w-full max-w-xs bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-xl">
        <button onclick="signInWithGoogle()" ${state.authSubmitting ? "disabled" : ""}
          class="w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.94 11.94 0 000 12c0 1.93.46 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"/></svg>
          ${esc(t("googleSignIn"))}
        </button>

        <div class="flex items-center gap-3 mb-4">
          <div class="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
          <span class="text-[11px] text-slate-400 dark:text-slate-500">${esc(t("or"))}</span>
          <div class="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <label class="text-xs font-medium mb-1 block text-slate-500 dark:text-slate-400">${esc(t("email"))}</label>
        <input id="auth-email" type="email" class="w-full rounded-xl px-3.5 py-2.5 text-sm mb-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" />
        <label class="text-xs font-medium mb-1 block text-slate-500 dark:text-slate-400">${esc(t("password"))}</label>
        <input id="auth-password" type="password" class="w-full rounded-xl px-3.5 py-2.5 text-sm mb-1 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" />
        ${state.authError ? `<div class="text-rose-600 text-xs mt-1 mb-2">${esc(state.authError)}</div>` : ""}
        <button onclick="submitAuth()" ${state.authSubmitting ? "disabled" : ""}
          class="w-full bg-gradient-to-r from-teal-800 to-teal-700 hover:from-teal-700 hover:to-teal-600 text-white rounded-xl py-3 font-semibold text-sm mt-4 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-60">
          ${state.authSubmitting ? "..." : esc(isSignup ? t("signup") : t("login"))}
        </button>
        <button onclick="setAuthMode('${isSignup ? "login" : "signup"}')" class="w-full text-center text-xs mt-3 text-teal-700 dark:text-teal-400 font-medium">
          ${esc(isSignup ? t("haveAccount") : t("noAccountYet"))}
        </button>
      </div>
    </div>
  `;
}

function renderCustomerListOnly() {
  const totals = computeTotals();
  const list = filteredSortedCustomers(totals);
  const container = document.getElementById("customer-list");
  const countEl = document.getElementById("customer-count");
  if (countEl) countEl.textContent = `${t("customers")} (${list.length})`;
  if (container) container.innerHTML = renderCustomerRows(list, totals);
  refreshIcons();
}

function renderDashboard() {
  const totals = computeTotals();
  const list = filteredSortedCustomers(totals);
  return `
    <div class="flex flex-col flex-1 pb-24">
      <div class="text-white px-5 pt-3 pb-5 rounded-b-3xl bg-teal-800 dark:bg-teal-950">
        <div class="flex items-center gap-2 mb-1">
          <i data-lucide="wallet" class="w-5 h-5"></i>
          <h1 class="text-lg font-semibold tracking-tight">${esc(t("appName"))}</h1>
        </div>
        <p class="text-xs mb-4 text-teal-200">${esc(t("tagline"))}</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="rounded-xl px-3 py-3 bg-teal-700/60 dark:bg-teal-900/60">
            <div class="flex items-center gap-1 text-[11px] mb-1 text-teal-200">
              <i data-lucide="trending-up" class="w-3.5 h-3.5"></i> ${esc(t("youllGet"))}
            </div>
            <div class="text-lg font-semibold text-emerald-300">${fmtMoney(totals.overallGet)}</div>
          </div>
          <div class="rounded-xl px-3 py-3 bg-teal-700/60 dark:bg-teal-900/60">
            <div class="flex items-center gap-1 text-[11px] mb-1 text-teal-200">
              <i data-lucide="trending-down" class="w-3.5 h-3.5"></i> ${esc(t("youllGive"))}
            </div>
            <div class="text-lg font-semibold text-rose-300">${fmtMoney(totals.overallGive)}</div>
          </div>
        </div>
        <button onclick="openDailySummary()" class="group w-full mt-3 flex items-center justify-between rounded-xl px-3.5 py-2.5 bg-teal-700/40 dark:bg-teal-900/40 border border-white/0 hover:border-white/15 transition-all duration-200 active:scale-[0.98]">
          <span class="flex items-center gap-2 text-xs font-medium text-teal-100">
            <i data-lucide="calendar-range" class="w-[14px] h-[14px]"></i> ${esc(t("dailySummary"))}
          </span>
          <i data-lucide="chevron-right" class="w-[15px] h-[15px] text-teal-300 transition-transform duration-200 group-hover:translate-x-0.5"></i>
        </button>
        <button onclick="openCashbook()" class="group w-full mt-2 flex items-center justify-between rounded-xl px-3.5 py-2.5 bg-teal-700/40 dark:bg-teal-900/40 border border-white/0 hover:border-white/15 transition-all duration-200 active:scale-[0.98]">
          <span class="flex items-center gap-2 text-xs font-medium text-teal-100">
            <i data-lucide="book-open" class="w-[14px] h-[14px]"></i> ${esc(t("cashbook"))}
          </span>
          <i data-lucide="chevron-right" class="w-[15px] h-[15px] text-teal-300 transition-transform duration-200 group-hover:translate-x-0.5"></i>
        </button>
      </div>

      <div class="px-5 -mt-3">
        <div class="rounded-xl shadow-sm border flex items-center px-3 py-2.5 gap-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <i data-lucide="search" class="w-4 h-4 text-slate-400 shrink-0"></i>
          <input id="search-input" value="${esc(state.search)}" placeholder="${esc(t("searchPlaceholder"))}"
            class="flex-1 text-sm bg-transparent placeholder:opacity-60 text-slate-800 dark:text-slate-100" />
        </div>
      </div>

      <div class="flex items-center justify-between px-5 mt-5 mb-2">
        <h2 id="customer-count" class="text-sm font-medium text-slate-500 dark:text-slate-400">${esc(t("customers"))} (${list.length})</h2>
      </div>

      <div id="customer-list" class="flex-1 px-5 space-y-2">
        ${renderCustomerRows(list, totals)}
      </div>

      <button onclick="openAddCustomer()"
        class="group fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white rounded-2xl py-3.5 flex items-center justify-center gap-2.5 font-semibold text-sm tracking-wide shadow-lg shadow-rose-600/30 transition-all duration-200 active:scale-[0.97] active:brightness-90 hover:shadow-xl hover:shadow-rose-600/40 hover:-translate-y-0.5"
        style="max-width:376px">
        <span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-colors duration-200 group-hover:bg-white/30">
          <i data-lucide="plus" class="w-[14px] h-[14px]"></i>
        </span>
        ${esc(t("addCustomer"))}
      </button>
    </div>
  `;
}

function renderCustomerRows(list, totals) {
  if (list.length === 0) {
    return `
      <div class="flex flex-col items-center justify-center text-center py-16 text-slate-400 dark:text-slate-500">
        <i data-lucide="users" class="w-10 h-10 mb-3 opacity-40"></i>
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">${esc(t("noCustomersTitle"))}</p>
        <p class="text-xs mt-1">${esc(t("noCustomersSub"))}</p>
      </div>
    `;
  }
  return list.map((c) => {
    const s = totals.perCustomer[c.id] || { net: 0, lastAt: c.createdAt };
    const positive = s.net > 0, zero = s.net === 0;
    const confirming = state.confirmDeleteRow === c.id;
    if (confirming) {
      return `
        <div class="w-full rounded-xl border px-4 py-3 flex items-center justify-between bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <span class="text-sm text-slate-500 dark:text-slate-400">${esc(t("deleteCustomerQ"))}</span>
          <div class="flex items-center gap-2">
            <button onclick="confirmDeleteCustomer('${c.id}')" class="bg-rose-600 hover:bg-rose-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 active:scale-95">${esc(t("yes"))}</button>
            <button onclick="cancelDeleteCustomer()" class="text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-150 active:scale-95">${esc(t("no"))}</button>
          </div>
        </div>
      `;
    }
    return `
      <div class="group w-full rounded-xl border px-4 py-3 flex items-center justify-between transition-all duration-200 hover:shadow-md hover:border-teal-300 dark:hover:border-teal-700 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
        <button onclick="openCustomer('${c.id}')" class="flex items-center gap-3 min-w-0 flex-1 text-left">
          <div class="w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm shrink-0 bg-teal-50 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
            ${esc(c.name.slice(0, 1).toUpperCase())}
          </div>
          <div class="min-w-0">
            <div class="text-sm font-medium truncate text-slate-800 dark:text-slate-100">${esc(c.name)}</div>
            <div class="text-xs text-slate-400 dark:text-slate-500">${fmtDate(s.lastAt)}</div>
          </div>
        </button>
        <div class="flex items-center gap-1 shrink-0 pl-2">
          <button onclick="openCustomer('${c.id}')" class="text-right">
            ${zero
              ? `<span class="text-xs text-slate-400 dark:text-slate-500">${esc(t("settled"))}</span>`
              : `<span class="text-sm font-semibold ${positive ? "text-rose-600" : "text-emerald-600"}">${fmtMoney(Math.abs(s.net))}</span>`
            }
          </button>
          <button onclick="askDeleteCustomer('${c.id}')" aria-label="${esc(t("deleteEntry"))}"
            class="w-7 h-7 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-150 active:scale-90 text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-700">
            <i data-lucide="trash-2" class="w-[14px] h-[14px]"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function renderCustomerView() {
  const c = state.customers.find((x) => x.id === state.activeId);
  if (!c) {
    state.view = "dashboard";
    return renderDashboard();
  }
  const totals = computeTotals();
  const s = totals.perCustomer[c.id] || { cash: 0, online: 0, grand: 0, net: 0 };
  const positive = s.net > 0, zero = s.net === 0;
  const allEntries = (state.entries[c.id] || []).slice().sort((a, b) => b.ts - a.ts);
  const confirming = state.confirmDeleteRow === "__customer__";

  const todayK = dayKey(Date.now());
  let todayGave = 0, todayGot = 0;
  for (const e of allEntries) {
    if (dayKey(e.ts) === todayK) {
      if (e.type === "gave") todayGave += e.amount; else todayGot += e.amount;
    }
  }
  const hasToday = todayGave > 0 || todayGot > 0;

  let filterKey = null;
  if (state.dateFilter) {
    const parts = state.dateFilter.split("-").map(Number);
    filterKey = new Date(parts[0], parts[1] - 1, parts[2]).getTime();
  }
  const entries = filterKey ? allEntries.filter((e) => dayKey(e.ts) === filterKey) : allEntries;

  return `
    <div class="flex flex-col flex-1 pb-28">
      <div class="text-white px-5 pt-3 pb-5 rounded-b-3xl bg-teal-800 dark:bg-teal-950">
        <div class="flex items-center justify-between mb-4">
          <button onclick="goBack()" class="p-1 -ml-1 rounded-full transition-all duration-150 active:scale-90 hover:bg-white/10">
            <i data-lucide="arrow-left" class="w-5 h-5"></i>
          </button>
          ${confirming ? `
            <div class="flex items-center gap-2 text-xs">
              <span class="text-teal-200">${esc(t("deleteCustomerQ"))}</span>
              <button onclick="confirmDeleteCustomer('${c.id}')" class="bg-rose-600 hover:bg-rose-700 px-2 py-1 rounded-md font-medium transition-all duration-150 active:scale-95">${esc(t("yes"))}</button>
              <button onclick="cancelDeleteCustomer()" class="px-2 py-1 rounded-md bg-teal-700/60 hover:bg-white/10 transition-all duration-150 active:scale-95">${esc(t("no"))}</button>
            </div>
          ` : `
            <button onclick="askDeleteCustomer('__customer__')" class="p-1 -mr-1 rounded-full text-teal-200 transition-all duration-150 active:scale-90 hover:bg-white/10">
              <i data-lucide="trash-2" class="w-[18px] h-[18px]"></i>
            </button>
          `}
        </div>

        <div class="flex items-center gap-3 mb-4">
          <div class="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center font-medium text-base shrink-0">
            ${esc(c.name.slice(0, 1).toUpperCase())}
          </div>
          <div class="min-w-0">
            <div class="text-base font-semibold truncate">${esc(c.name)}</div>
            ${c.phone ? `<div class="text-xs flex items-center gap-1 text-teal-200"><i data-lucide="phone" class="w-[11px] h-[11px]"></i> ${esc(c.phone)}</div>` : ""}
            <div class="text-[11px] flex items-center gap-1 text-teal-300/80 mt-0.5"><i data-lucide="calendar-plus" class="w-[10px] h-[10px]"></i> ${esc(t("addedOn"))} ${fmtDate(c.createdAt)}</div>
          </div>
        </div>

        <div class="rounded-xl px-4 py-3 mb-3 bg-teal-700/60 dark:bg-teal-900/60">
          <div class="text-[11px] mb-0.5 text-teal-200">${esc(zero ? t("settledFull") : positive ? t("youllGetShort") : t("youllGiveShort"))}</div>
          <div class="text-2xl font-semibold ${zero ? "text-white" : positive ? "text-rose-300" : "text-emerald-300"}">${fmtMoney(Math.abs(s.net))}</div>
        </div>

        ${hasToday ? `
          <div class="rounded-xl px-4 py-2.5 mb-3 bg-white/10 flex items-center gap-4">
            <span class="text-[11px] font-semibold text-teal-100 shrink-0">${esc(t("today"))}</span>
            ${todayGot > 0 ? `<span class="text-xs text-emerald-300">${esc(t("todayReceived"))}: ${fmtMoney(todayGot)}</span>` : ""}
            ${todayGave > 0 ? `<span class="text-xs text-rose-300">${esc(t("todaySent"))}: ${fmtMoney(todayGave)}</span>` : ""}
          </div>
        ` : ""}

        <div class="grid grid-cols-3 gap-2">
          <div class="rounded-lg px-2.5 py-2 text-center bg-teal-700/40 dark:bg-teal-900/40">
            <div class="flex items-center justify-center gap-1 text-[10px] mb-0.5 text-teal-200"><i data-lucide="banknote" class="w-[11px] h-[11px]"></i> ${esc(t("cash"))}</div>
            <div class="text-sm font-medium">${fmtMoney(s.cash)}</div>
          </div>
          <div class="rounded-lg px-2.5 py-2 text-center bg-teal-700/40 dark:bg-teal-900/40">
            <div class="flex items-center justify-center gap-1 text-[10px] mb-0.5 text-teal-200"><i data-lucide="landmark" class="w-[11px] h-[11px]"></i> ${esc(t("online"))}</div>
            <div class="text-sm font-medium">${fmtMoney(s.online)}</div>
          </div>
          <div class="rounded-lg px-2.5 py-2 text-center bg-teal-700/40 dark:bg-teal-900/40">
            <div class="flex items-center justify-center gap-1 text-[10px] mb-0.5 text-teal-200"><i data-lucide="file-text" class="w-[11px] h-[11px]"></i> ${esc(t("total"))}</div>
            <div class="text-sm font-medium">${fmtMoney(s.grand)}</div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between px-5 mt-3">
        ${state.dateFilter ? `
          <div class="flex items-center gap-2 text-xs">
            <span class="text-slate-500 dark:text-slate-400">${esc(t("showingDate"))}: <span class="font-semibold text-slate-700 dark:text-slate-200">${fmtDate(filterKey)}</span></span>
            <button onclick="clearDateFilter()" class="text-teal-700 dark:text-teal-400 font-medium underline underline-offset-2">${esc(t("clearFilter"))}</button>
          </div>
        ` : `<span></span>`}
        <div class="relative">
          <button onclick="openDateFilterPicker()" class="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150 active:scale-95">
            <i data-lucide="calendar" class="w-[13px] h-[13px]"></i> ${esc(t("filterByDate"))}
          </button>
          <input id="date-filter-input" type="date" value="${state.dateFilter || ""}"
            onchange="setDateFilter(this.value)"
            class="absolute inset-0 opacity-0 pointer-events-none w-0 h-0" />
        </div>
      </div>

      <div class="flex-1 px-5 mt-2 space-y-2">
        ${entries.length === 0 ? `
          <div class="flex flex-col items-center justify-center text-center py-14 text-slate-400 dark:text-slate-500">
            <i data-lucide="file-text" class="w-9 h-9 mb-3 opacity-40"></i>
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">${esc(filterKey ? t("noEntriesForDate") : t("noEntriesTitle"))}</p>
            ${!filterKey ? `<p class="text-xs mt-1">${esc(t("noEntriesSub"))}</p>` : ""}
          </div>
        ` : groupEntriesByDay(entries).map((g) => `
          <div class="flex items-center justify-between px-1 pt-3 pb-1 first:pt-0">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">${esc(dayLabel(g.ts))}</span>
            <span class="text-[11px] font-medium">
              ${g.got > 0 ? `<span class="text-emerald-500">${esc(t("youGot"))} +${fmtMoney(g.got)}</span>` : ""}
              ${g.gave > 0 && g.got > 0 ? `<span class="text-slate-300 dark:text-slate-600 mx-1">|</span>` : ""}
              ${g.gave > 0 ? `<span class="text-rose-500">${esc(t("youGave"))} \u2212${fmtMoney(g.gave)}</span>` : ""}
            </span>
          </div>
          ${g.entries.map((e) => renderEntryRow(c.id, e)).join('<div class="h-2"></div>')}
        `).join("")}
      </div>

      <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full border-t px-5 py-3 flex gap-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 safe-bottom" style="max-width:448px">
        <button onclick="openEntry('${c.id}','gave')" class="flex-1 bg-gradient-to-b from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white rounded-xl py-3 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 active:brightness-90 hover:-translate-y-0.5">${esc(t("youGave"))}</button>
        <button onclick="openEntry('${c.id}','got')" class="flex-1 bg-gradient-to-b from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-xl py-3 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 active:brightness-90 hover:-translate-y-0.5">${esc(t("youGot"))}</button>
      </div>
    </div>
  `;
}

function renderEntryRow(customerId, e) {
  return `
    <div class="group rounded-xl border px-4 py-3 flex items-center justify-between bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <div class="min-w-0">
        <div class="flex items-center gap-1.5 text-xs mb-0.5 text-slate-400 dark:text-slate-500">
          <span>${fmtDateTime(e.ts)}</span>
          <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
          <span class="uppercase tracking-wide">${e.mode === "cash" ? esc(t("cash")) : esc(t("online"))}</span>
          ${e.billNumber ? `<span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span><span>${esc(t("bill"))} #${esc(e.billNumber)}</span>` : ""}
        </div>
        ${e.note ? `<div class="text-xs truncate max-w-[160px] text-slate-500 dark:text-slate-400">${esc(e.note)}</div>` : ""}
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <span class="text-sm font-semibold ${e.type === "gave" ? "text-rose-600" : "text-emerald-600"}">${e.type === "gave" ? "\u2212" : "+"} ${fmtMoney(e.amount)}</span>
        <button onclick="deleteEntry('${customerId}','${e.id}')" aria-label="${esc(t("deleteEntry"))}"
          class="w-7 h-7 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 text-slate-400 hover:text-rose-500 transition-all duration-150 active:scale-90 hover:bg-slate-100 dark:hover:bg-slate-700">
          <i data-lucide="x" class="w-[15px] h-[15px]"></i>
        </button>
      </div>
    </div>
  `;
}

function renderDailySummary() {
  const allEntries = [];
  for (const c of state.customers) {
    for (const e of state.entries[c.id] || []) allEntries.push(e);
  }
  const days = groupEntriesByDay(allEntries);
  return `
    <div class="flex flex-col flex-1 pb-10">
      <div class="text-white px-5 pt-3 pb-5 rounded-b-3xl bg-teal-800 dark:bg-teal-950">
        <div class="flex items-center gap-2 mb-1">
          <button onclick="goBack()" class="p-1 -ml-1 rounded-full transition-all duration-150 active:scale-90 hover:bg-white/10">
            <i data-lucide="arrow-left" class="w-5 h-5"></i>
          </button>
          <i data-lucide="calendar-range" class="w-5 h-5"></i>
          <h1 class="text-lg font-semibold tracking-tight">${esc(t("dailySummary"))}</h1>
        </div>
        <p class="text-xs text-teal-200">${esc(t("dailySummarySub"))}</p>
      </div>
      <div class="flex-1 px-5 mt-4 space-y-2.5">
        ${days.length === 0 ? `
          <div class="flex flex-col items-center justify-center text-center py-16 text-slate-400 dark:text-slate-500">
            <i data-lucide="calendar-range" class="w-10 h-10 mb-3 opacity-40"></i>
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">${esc(t("noDailyData"))}</p>
          </div>
        ` : days.map((g) => `
          <div class="rounded-xl border px-4 py-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <div class="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">${esc(dayLabel(g.ts))}</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="rounded-lg px-3 py-2 bg-emerald-50 dark:bg-emerald-900/30">
                <div class="text-[10px] text-emerald-600 dark:text-emerald-400 mb-0.5">${esc(t("totalReceived"))}</div>
                <div class="text-sm font-semibold text-emerald-700 dark:text-emerald-300">+${fmtMoney(g.got)}</div>
              </div>
              <div class="rounded-lg px-3 py-2 bg-rose-50 dark:bg-rose-900/30">
                <div class="text-[10px] text-rose-600 dark:text-rose-400 mb-0.5">${esc(t("totalSent"))}</div>
                <div class="text-sm font-semibold text-rose-700 dark:text-rose-300">\u2212${fmtMoney(g.gave)}</div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderCashbookView() {
  const allEntries = [];
  for (const c of state.customers) {
    for (const e of state.entries[c.id] || []) allEntries.push({ ...e, customerId: c.id, customerName: c.name });
  }
  allEntries.sort((a, b) => b.ts - a.ts);
  let cash = 0, online = 0, gave = 0, got = 0;
  for (const e of allEntries) {
    if (e.mode === "cash") cash += e.amount; else online += e.amount;
    if (e.type === "gave") gave += e.amount; else got += e.amount;
  }
  const net = gave - got;
  const positive = net > 0, zero = net === 0;

  return `
    <div class="flex flex-col flex-1 pb-28">
      <div class="text-white px-5 pt-3 pb-5 rounded-b-3xl bg-teal-800 dark:bg-teal-950">
        <div class="flex items-center gap-2 mb-1">
          <button onclick="goBack()" class="p-1 -ml-1 rounded-full transition-all duration-150 active:scale-90 hover:bg-white/10">
            <i data-lucide="arrow-left" class="w-5 h-5"></i>
          </button>
          <i data-lucide="book-open" class="w-5 h-5"></i>
          <h1 class="text-lg font-semibold tracking-tight">${esc(t("cashbook"))}</h1>
        </div>
        <p class="text-xs mb-3 text-teal-200">${esc(t("cashbookSub"))}</p>
        <div class="rounded-xl px-4 py-3 mb-3 bg-teal-700/60 dark:bg-teal-900/60">
          <div class="text-[11px] mb-0.5 text-teal-200">${esc(zero ? t("settledFull") : positive ? t("youllGetShort") : t("youllGiveShort"))}</div>
          <div class="text-2xl font-semibold ${zero ? "text-white" : positive ? "text-rose-300" : "text-emerald-300"}">${fmtMoney(Math.abs(net))}</div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="rounded-lg px-2.5 py-2 text-center bg-teal-700/40 dark:bg-teal-900/40">
            <div class="flex items-center justify-center gap-1 text-[10px] mb-0.5 text-teal-200"><i data-lucide="banknote" class="w-[11px] h-[11px]"></i> ${esc(t("cash"))}</div>
            <div class="text-sm font-medium">${fmtMoney(cash)}</div>
          </div>
          <div class="rounded-lg px-2.5 py-2 text-center bg-teal-700/40 dark:bg-teal-900/40">
            <div class="flex items-center justify-center gap-1 text-[10px] mb-0.5 text-teal-200"><i data-lucide="landmark" class="w-[11px] h-[11px]"></i> ${esc(t("online"))}</div>
            <div class="text-sm font-medium">${fmtMoney(online)}</div>
          </div>
          <div class="rounded-lg px-2.5 py-2 text-center bg-teal-700/40 dark:bg-teal-900/40">
            <div class="flex items-center justify-center gap-1 text-[10px] mb-0.5 text-teal-200"><i data-lucide="file-text" class="w-[11px] h-[11px]"></i> ${esc(t("total"))}</div>
            <div class="text-sm font-medium">${fmtMoney(cash + online)}</div>
          </div>
        </div>
      </div>
      <div class="flex-1 px-5 mt-4 space-y-2">
        ${allEntries.length === 0 ? `
          <div class="flex flex-col items-center justify-center text-center py-14 text-slate-400 dark:text-slate-500">
            <i data-lucide="book-open" class="w-9 h-9 mb-3 opacity-40"></i>
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">${esc(t("noEntriesTitle"))}</p>
            <p class="text-xs mt-1">${esc(t("noEntriesSub"))}</p>
          </div>
        ` : groupEntriesByDay(allEntries).map((g) => `
          <div class="flex items-center justify-between px-1 pt-3 pb-1 first:pt-0">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">${esc(dayLabel(g.ts))}</span>
            <span class="text-[11px] font-medium">
              ${g.got > 0 ? `<span class="text-emerald-500">${esc(t("youGot"))} +${fmtMoney(g.got)}</span>` : ""}
              ${g.gave > 0 && g.got > 0 ? `<span class="text-slate-300 dark:text-slate-600 mx-1">|</span>` : ""}
              ${g.gave > 0 ? `<span class="text-rose-500">${esc(t("youGave"))} \u2212${fmtMoney(g.gave)}</span>` : ""}
            </span>
          </div>
          ${g.entries.map((e) => `
            <div class="rounded-xl border px-4 py-3 flex items-center justify-between group bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 mb-2">
              <button onclick="openCustomerFromCashbook('${e.customerId}')" class="min-w-0 text-left flex-1">
                <div class="flex items-center gap-1.5 text-xs mb-0.5 text-slate-400 dark:text-slate-500">
                  <span class="font-semibold text-slate-800 dark:text-slate-100">${esc(e.customerName)}</span>
                  <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span>${fmtDateTime(e.ts)}</span>
                </div>
                <div class="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                  <span class="uppercase tracking-wide">${e.mode === "cash" ? esc(t("cash")) : esc(t("online"))}</span>
                  ${e.billNumber ? `<span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span><span>${esc(t("bill"))} #${esc(e.billNumber)}</span>` : ""}
                </div>
                ${e.note ? `<div class="text-xs truncate max-w-[160px] mt-0.5 text-slate-500 dark:text-slate-400">${esc(e.note)}</div>` : ""}
              </button>
              <div class="flex items-center gap-2 shrink-0">
                <span class="text-sm font-semibold ${e.type === "gave" ? "text-rose-600" : "text-emerald-600"}">${e.type === "gave" ? "\u2212" : "+"} ${fmtMoney(e.amount)}</span>
                <button onclick="deleteEntry('${e.customerId}','${e.id}')" aria-label="${esc(t("deleteEntry"))}"
                  class="w-7 h-7 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-150 active:scale-90 text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <i data-lucide="x" class="w-[15px] h-[15px]"></i>
                </button>
              </div>
            </div>
          `).join("")}
        `).join("")}
      </div>
      <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full border-t px-5 py-3 flex gap-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 safe-bottom" style="max-width:448px">
        <button onclick="openEntry(null,'gave')" class="flex-1 bg-gradient-to-b from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white rounded-xl py-3 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 active:brightness-90 hover:-translate-y-0.5">${esc(t("youGave"))}</button>
        <button onclick="openEntry(null,'got')" class="flex-1 bg-gradient-to-b from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-xl py-3 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 active:brightness-90 hover:-translate-y-0.5">${esc(t("youGot"))}</button>
      </div>
    </div>
  `;
}

// ---------------- Actions ----------------
function openCustomer(id) {
  state.activeId = id;
  state.view = "customer";
  state.returnView = "dashboard";
  state.confirmDeleteRow = null;
  state.dateFilter = null;
  pushHistoryState();
  renderAll();
}
function openCustomerFromCashbook(id) {
  state.activeId = id;
  state.view = "customer";
  state.returnView = "cashbook";
  state.confirmDeleteRow = null;
  state.dateFilter = null;
  pushHistoryState();
  renderAll();
}
function openCashbook() {
  state.view = "cashbook";
  pushHistoryState();
  renderAll();
}
function openDailySummary() {
  state.view = "daily";
  pushHistoryState();
  renderAll();
}
function askDeleteCustomer(id) {
  state.confirmDeleteRow = id;
  renderAll();
}
function cancelDeleteCustomer() {
  state.confirmDeleteRow = null;
  renderAll();
}
async function confirmDeleteCustomer(id) {
  const realId = id === "__customer__" ? state.activeId : id;
  await deleteCustomerFS(realId);
  state.confirmDeleteRow = null;
  state.view = "dashboard";
  pushHistoryState();
  renderAll();
}
async function deleteEntry(customerId, entryId) {
  await deleteEntryFS(customerId, entryId);
  renderAll();
}
function setDateFilter(dateStr) {
  state.dateFilter = dateStr || null;
  renderAll();
}
function clearDateFilter() {
  state.dateFilter = null;
  renderAll();
}
function openDateFilterPicker() {
  const input = document.getElementById("date-filter-input");
  if (input) {
    if (input.showPicker) input.showPicker();
    else input.click();
  }
}

function openAddCustomer() {
  document.getElementById("ac-title").textContent = t("addCustomerTitle");
  document.getElementById("ac-name-label").textContent = t("name");
  document.getElementById("ac-name").placeholder = t("namePlaceholder");
  document.getElementById("ac-phone-label").textContent = t("phoneOptional");
  document.getElementById("ac-save").textContent = t("save");
  document.getElementById("ac-name").value = "";
  document.getElementById("ac-phone").value = "";
  document.getElementById("ac-error").classList.add("hidden");
  const modal = document.getElementById("modal-add-customer");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  pushHistoryState();
  setTimeout(() => document.getElementById("ac-name").focus(), 50);
}
function closeAddCustomer() {
  const modal = document.getElementById("modal-add-customer");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
async function submitAddCustomer() {
  if (addCustomerSubmitting) return;
  const name = document.getElementById("ac-name").value.trim();
  const phone = document.getElementById("ac-phone").value.trim();
  if (!name) {
    const err = document.getElementById("ac-error");
    err.textContent = t("enterNameErr");
    err.classList.remove("hidden");
    return;
  }
  addCustomerSubmitting = true;
  const saveBtn = document.getElementById("ac-save");
  saveBtn.disabled = true;
  saveBtn.classList.add("opacity-60", "pointer-events-none");
  try {
    await addCustomerFS(name, phone);
    closeAddCustomer();
    renderAll();
  } finally {
    addCustomerSubmitting = false;
    saveBtn.disabled = false;
    saveBtn.classList.remove("opacity-60", "pointer-events-none");
  }
}

function openEntry(customerId, type) {
  entryContext = { customerId, type };
  calcExpr = "";
  const isGave = type === "gave";
  const customer = customerId ? state.customers.find((c) => c.id === customerId) : null;

  document.getElementById("entry-title").innerHTML =
    `${esc(isGave ? t("youGave") : t("youGot"))}` +
    (customerId ? ` <span class="font-normal text-slate-500 dark:text-slate-400">\u2014 ${esc(customer?.name || "")}</span>` : "");

  const custField = document.getElementById("entry-customer-field");
  if (!customerId) {
    custField.classList.remove("hidden");
    document.getElementById("entry-customer-label").textContent = t("customerNameLabel");
    document.getElementById("entry-customer-name").placeholder = t("customerNamePlaceholder");
    document.getElementById("entry-customer-name").value = "";
    document.getElementById("entry-customer-suggestions").classList.add("hidden");
  } else {
    custField.classList.add("hidden");
  }

  document.getElementById("entry-error").classList.add("hidden");
  document.getElementById("entry-date").value = new Date().toISOString().slice(0, 10);
  document.getElementById("entry-date-label").textContent = t("date");
  document.getElementById("entry-bill-label").textContent = t("billNumber");
  document.getElementById("entry-bill").placeholder = t("billNumberPlaceholder");
  document.getElementById("entry-bill").value = "";
  document.getElementById("entry-note").value = "";
  document.getElementById("entry-note-label").textContent = t("noteOptional");
  document.getElementById("entry-note").placeholder = t("notePlaceholder");

  const saveBtn = document.getElementById("entry-save");
  saveBtn.className = "w-full rounded-xl py-3 font-semibold text-sm mt-4 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] active:brightness-90 hover:-translate-y-0.5 " + (isGave ? "bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600" : "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600");
  saveBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> ${esc(t("saveEntry"))}`;

  renderCalcKeys();
  updateCalcDisplay(isGave);
  setEntryMode("cash");

  const modal = document.getElementById("modal-entry");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  pushHistoryState();
  refreshIcons();
  setTimeout(() => {
    const el = customerId ? null : document.getElementById("entry-customer-name");
    if (el) el.focus();
  }, 50);
}
function closeEntry() {
  const modal = document.getElementById("modal-entry");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  entryContext = null;
}
function setEntryMode(mode) {
  entryMode = mode;
  const active = "flex-1 rounded-xl py-2.5 text-sm font-semibold border transition-all duration-200 active:scale-95 bg-teal-800 text-white border-teal-800 shadow-md";
  const inactive = "flex-1 rounded-xl py-2.5 text-sm font-semibold border transition-all duration-200 active:scale-95 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-teal-400 dark:hover:border-teal-500";
  document.getElementById("entry-mode-cash").className = mode === "cash" ? active : inactive;
  document.getElementById("entry-mode-cash").textContent = t("cash");
  document.getElementById("entry-mode-online").className = mode === "online" ? active : inactive;
  document.getElementById("entry-mode-online").textContent = t("online");
}
function combineDateWithNow(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const now = new Date();
  return new Date(y, m - 1, d, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()).getTime();
}

// ---------------- Calculator ----------------
function renderCalcKeys() {
  const rows = ["7", "8", "9", "C", "4", "5", "6", "\u232b", "1", "2", "3", "\u00d7", "0", ".", "-", "+"];
  const container = document.getElementById("entry-calc-keys");
  container.innerHTML = rows.map((k) => {
    const isUtil = k === "C" || k === "\u232b";
    const isOp = k === "+" || k === "-" || k === "\u00d7";
    const cls = isUtil
      ? "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
      : isOp
      ? "bg-teal-700 text-white hover:bg-teal-600 shadow-sm hover:shadow"
      : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-sm";
    return `<button onclick="pressCalcKey('${k}')" class="rounded-lg py-2.5 text-base font-semibold transition-all duration-150 active:scale-90 ${cls}">${esc(k)}</button>`;
  }).join("");
}
function pressCalcKey(k) {
  document.getElementById("entry-error").classList.add("hidden");
  if (k === "C") calcExpr = "";
  else if (k === "\u232b") calcExpr = calcExpr.slice(0, -1);
  else if (k === "+" || k === "-" || k === "\u00d7") {
    if (!calcExpr) return;
    if (/[+\-\u00d7]$/.test(calcExpr)) calcExpr = calcExpr.slice(0, -1) + k;
    else calcExpr += k;
  } else if (k === ".") {
    const lastPart = calcExpr.split(/[+\-\u00d7]/).pop();
    if (lastPart.includes(".")) return;
    calcExpr += k;
  } else {
    calcExpr += k;
  }
  const isGave = entryContext && entryContext.type === "gave";
  updateCalcDisplay(isGave);
}
function updateCalcDisplay(isGave) {
  const display = document.getElementById("entry-calc-display");
  const preview = document.getElementById("entry-calc-preview");
  display.textContent = "\u20B9" + (calcExpr || "0");
  display.className = "text-2xl font-semibold break-all " + (isGave ? "text-rose-600" : "text-emerald-600");
  const hasOp = /[+\-\u00d7]/.test(calcExpr);
  if (hasOp) {
    preview.textContent = "= " + fmtMoney(evalExpr(calcExpr));
    preview.classList.remove("hidden");
  } else {
    preview.classList.add("hidden");
  }
}

// ---------------- Customer name autocomplete ----------------
function onCustomerNameFocus() {
  custSuggestFocused = true;
  renderCustomerSuggestions();
}
function onCustomerNameBlur() {
  setTimeout(() => {
    custSuggestFocused = false;
    renderCustomerSuggestions();
  }, 150);
}
function onCustomerNameInput() {
  renderCustomerSuggestions();
}
function renderCustomerSuggestions() {
  const box = document.getElementById("entry-customer-suggestions");
  const input = document.getElementById("entry-customer-name");
  if (!input || !box) return;
  const query = input.value.trim().toLowerCase();
  if (!custSuggestFocused || !query) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }
  const matches = state.customers.filter((c) => c.name.toLowerCase().includes(query)).slice(0, 4);
  const exact = state.customers.some((c) => c.name.toLowerCase() === query);
  let html = matches.map((c) => `
    <button onmousedown="selectCustomerSuggestion('${c.id}')" class="w-full text-left px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150">${esc(c.name)}</button>
  `).join("");
  if (!exact) {
    html += `<div class="px-3.5 py-2.5 text-sm flex items-center gap-1.5 border-t border-slate-200 dark:border-slate-700 text-teal-700 dark:text-teal-400">
      <i data-lucide="plus" class="w-[13px] h-[13px]"></i> ${esc(t("addNewCustomerChip"))}: <span class="font-semibold">${esc(input.value.trim())}</span>
    </div>`;
  }
  if (matches.length === 0 && exact) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }
  box.innerHTML = html;
  box.classList.remove("hidden");
  refreshIcons();
}
function selectCustomerSuggestion(id) {
  const c = state.customers.find((x) => x.id === id);
  if (c) document.getElementById("entry-customer-name").value = c.name;
  document.getElementById("entry-customer-suggestions").classList.add("hidden");
}

async function submitEntry() {
  if (!entryContext || entrySubmitting) return;
  const val = evalExpr(calcExpr);
  if (!calcExpr || isNaN(val) || val <= 0) {
    const err = document.getElementById("entry-error");
    err.textContent = t("amountErr");
    err.classList.remove("hidden");
    return;
  }
  let customerNameInput = "";
  if (!entryContext.customerId) {
    customerNameInput = document.getElementById("entry-customer-name").value.trim();
    if (!customerNameInput) {
      const err = document.getElementById("entry-error");
      err.textContent = t("customerNameErr");
      err.classList.remove("hidden");
      return;
    }
  }
  entrySubmitting = true;
  const saveBtn = document.getElementById("entry-save");
  saveBtn.disabled = true;
  saveBtn.classList.add("opacity-60", "pointer-events-none");
  try {
    const note = document.getElementById("entry-note").value.trim();
    const billNumber = document.getElementById("entry-bill").value.trim();
    const date = document.getElementById("entry-date").value;
    const ts = date ? combineDateWithNow(date) : Date.now();

    let targetId = entryContext.customerId;
    const cameFromCashbook = !targetId;
    if (!targetId) targetId = await resolveOrCreateCustomer(customerNameInput);

    await addEntryFS(targetId, { type: entryContext.type, mode: entryMode, amount: val, note, billNumber, ts });
    closeEntry();
    if (cameFromCashbook) {
      state.activeId = targetId;
      state.view = "customer";
      state.returnView = "cashbook";
      state.dateFilter = null;
      pushHistoryState();
    }
    renderAll();
  } finally {
    entrySubmitting = false;
    saveBtn.disabled = false;
    saveBtn.classList.remove("opacity-60", "pointer-events-none");
  }
}

// expose functions for inline onclick handlers
window.setLang = setLang;
window.openCustomer = openCustomer;
window.openCustomerFromCashbook = openCustomerFromCashbook;
window.openCashbook = openCashbook;
window.openDailySummary = openDailySummary;
window.askDeleteCustomer = askDeleteCustomer;
window.cancelDeleteCustomer = cancelDeleteCustomer;
window.confirmDeleteCustomer = confirmDeleteCustomer;
window.deleteEntry = deleteEntry;
window.openAddCustomer = openAddCustomer;
window.closeAddCustomer = closeAddCustomer;
window.submitAddCustomer = submitAddCustomer;
window.openEntry = openEntry;
window.closeEntry = closeEntry;
window.setEntryMode = setEntryMode;
window.submitEntry = submitEntry;
window.setDateFilter = setDateFilter;
window.clearDateFilter = clearDateFilter;
window.openDateFilterPicker = openDateFilterPicker;
window.pressCalcKey = pressCalcKey;
window.onCustomerNameInput = onCustomerNameInput;
window.onCustomerNameFocus = onCustomerNameFocus;
window.onCustomerNameBlur = onCustomerNameBlur;
window.selectCustomerSuggestion = selectCustomerSuggestion;
window.goBack = goBack;
window.setAuthMode = setAuthMode;
window.submitAuth = submitAuth;
window.doLogout = doLogout;

// ---------------- Init ----------------
renderAll();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
