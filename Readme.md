**Project Setup Guide**

### **1. Install Dependencies**
#### **Frontend**
```sh
npx create-react-app furniture-shop
cd furniture-shop
npm install react-router-dom axios react-toastify
```

#### **Backend**
```sh
mkdir backend
cd backend
npm init -y
npm install express cors mongoose dotenv
```

---
### **2. Configure MongoDB**
1. Install MongoDB and start the service.
2. Create a `.env` file in the `backend` directory:
```
MONGO_URI=mongodb://localhost:27017/furnitureShop
```

---
### **3. Run the Backend**
```sh
cd backend
node server.js
```

---
### **4. Seed the Database**
```sh
cd backend
node seed.js
```

---
### **5. Run the Frontend**
```sh
cd furniture-shop
npm start
```

---
### **6. Project Structure**
```
/furniture-shop (Frontend)
  /src
    /pages
      HomePage.js
      ShopPage.js
    /components
      Footer.js
  App.js

/backend (Backend)
  server.js
  seed.js
  .env
```

