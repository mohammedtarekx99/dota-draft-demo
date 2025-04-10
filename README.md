  ![image](https://github.com/user-attachments/assets/5a20407b-3053-4e18-bb5a-0c623ea7afa3)

<h1 align="center">Dota 2 GSI Tool for Draft</h1>

## ⚡ Quick Start

1. Ensure **Node.js** is installed on your machine.  
   👉 [Download Node.js](https://nodejs.org/en/download)

2. Make sure the **Dota 2 GSI tool is properly configured**.  
   📖 [Read GSI setup guide](https://auo.nu/posts/game-state-integration-intro)

> ⚠️ **IMPORTANT**  
> The backend listens for GSI input on **port 3000**.  
> You need to set the draft config in your cfg file to receive draft updates.


---

## 🧩 Backend Setup & Run

1. Run `setup_backend.bat`  
   Installs all backend dependencies.

2. Run `start_draft_backend.bat`  
   Starts the backend server on port `3000`.

**If you can't run .bat files:**

- Open a command prompt in the backend directory.
- Run `npm install` to install all dependencies.
- Run `npm run dev` to start the backend server.

---

## 🎨 Frontend Setup & Run

1. Run `setup_frontend.bat`  
   Installs all frontend dependencies.

2. Run `start_draft_frontend.bat`  
   Starts the frontend development server (e.g., Vite).

**If you can't run .bat files:**

- Open a command prompt in the frontend directory.
- Run `npm install` to install all dependencies.
- Run `npm run dev` to start the frontend development server.

---

## 🧭 Next Goals

- [ ] Automate creation of the required `cfg` file
- [ ] Handle edge cases in the draft flow (e.g., timeouts, errors)
- [ ] Integrate modeled Dota 2 assets for richer visuals
- [ ] Add UI for team management and score tracking
