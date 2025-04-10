<p align="center">
  <img src="https://www.citypng.com/public/uploads/preview/hd-dota-2-official-logo-symbol-png-701751694788304xiqxbjto28.png" width="48" />
</p>
<h1 align="center">Dota 2 GSI Tool for Drafting</h1>

## ⚡ Quick Start

1. Ensure **Node.js** is installed on your machine.  
   👉 [Download Node.js](https://nodejs.org/en/download)

2. Make sure the **Dota 2 GSI tool is properly configured**.  
   📖 [Read GSI setup guide](https://auo.nu/posts/game-state-integration-intro)

> ⚠️ **IMPORTANT**  
> The backend listens for GSI input on **port 3000**.  
> You **must set the draft config in your `cfg` file** to enable communication.

---

## 🧩 Backend Setup & Run

1. Run `setup_backend.bat`  
   Installs all backend dependencies.

2. Run `start_draft_backend.bat`  
   Starts the backend server on port `3000`.

---

## 🎨 Frontend Setup & Run

1. Run `setup_frontend.bat`  
   Installs all frontend dependencies.

2. Run `start_draft_frontend.bat`  
   Starts the frontend development server (e.g., Vite).

---

## 🧭 Next Goals

- [ ] Automate creation of the required `cfg` file
- [ ] Handle edge cases in the draft flow (e.g., timeouts, errors)
- [ ] Integrate modeled Dota 2 assets for richer visuals
- [ ] Add UI for team management and score tracking
- [ ] Improve cross-platform support (Mac/Linux shell scripts)

