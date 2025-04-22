<!-- social media connecting shield -->

[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Github][github-shield]][github-url]

![Home](https://github.com/sJalui/Face-Mask-Detector/blob/main/images/frontpg.png?raw=true)
![ContactUs](https://github.com/sJalui/Face-Mask-Detector/blob/main/images/contactus.png?raw=true)

# 🛡️ Face Mask Detection & Healthcare Chatbot 😷🤖

## 🚀 Overview

Welcome to the **Face Mask Detection Project**—a cutting-edge fusion of **Computer Vision**, **Deep Learning**, and an **AI-powered Chatbot** to elevate public health and user engagement!  
Detect masks in real-time, manage safety protocols, and interact with our intelligent chatbot for guidance—all in one seamless application.

---

<!-- Social Media Links -->
[instagram-url]: https://www.instagram.com/s_jalui  
[linkedin-url]: https://in.linkedin.com/in/shubh-jalui-1923b1259  
[github-url]: https://www.github.com/sJalui  

[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor=white  
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555  
[github-shield]: https://img.shields.io/badge/-Github-black.svg?style=flat-square&logo=github&color=555&logoColor=white

## 🌟 Key Features

- ✅ **Real-Time Mask Detection:** Instantly identifies faces **with** and **without** masks via your webcam or video input.
- 🚀 **Lightweight & Fast:** Powered by **TensorFlow/Keras** and **MobileNetV2**, optimized for low-latency inference.
- 🎨 **User-Friendly UI:** Built with **Flask**, **OpenCV**, and a **React + TypeScript** frontend for smooth interactions.
- 🤖 **AI Chatbot Integration:** Ask questions about COVID safety, mask usage, or technical setup using our **Gemini API** chatbot.
- 🔧 **Extensible & Customizable:** Swap models, tweak detection thresholds, or style the UI to fit your own projects.

---

## 🧑‍💻 How It Works

1. **Capture Input** 📷: The system grabs frames from your webcam or uploaded video/image.
2. **Preprocess** 🔄: Faces are detected using a Caffe SSD model, cropped, resized, and normalized for **MobileNetV2**.
3. **Inference** 💻: Our fine-tuned model classifies each face as **Mask** or **No Mask**.
4. **Output** ✅: Bounding boxes and labels are overlaid on the video/image; a beep alert sounds if no mask is detected.
5. **Chatbot** 💬: Ask our embedded chatbot anything from mask safety tips to troubleshooting installation.

**Flow:**  
`Input 📷  ➡️  Preprocessing 🔄  ➡️  Model Inference 💻  ➡️  Output ✅  ➡️  Chatbot 🤖`

---

## 🔧 Technical Stack

| Frontend                       | Backend                         | AI / ML                         |
|--------------------------------|----------------------------------|---------------------------------|
| React + TypeScript             | Python Flask                     | TensorFlow / Keras              |
| React Router                   | OpenCV (DNN for face detection)  | MobileNetV2 (Transfer Learning) |
| Firebase Auth                  | pydub (audio alerts)             | Caffe SSD face detector         |
| i18next (EN/ES)                | REST & MJPEG streaming endpoints | Gemini API chatbot              |

---

## ⚙️ How to Install the Project

> **💡 Note:** Ensure you have **Python 3.8+**, **Node.js 14+**, and **npm** installed on your machine.

### 1️⃣ Frontend Setup (React + TypeScript)
```bash
# Clone repo and navigate to frontend
cd frontend

# Install React 17 and React-DOM 17, plus dependencies
npm install react@17 react-dom@17

# Start development server
npm start
```

### 2️⃣ Backend Setup (Flask API & Video Stream)
```bash
# From project root
cd facemask_detection

# Create virtual environment
python -m venv venv

# Activate it (Windows example)
venv\Scripts\activate

# Install backend dependencies
pip install flask tensorflow keras opencv-python pydub imutils matplotlib

# Run the Flask app
python app.py
```
> ⚠️ **Warning:** If you encounter missing modules, run:
> ```bash
> pip install (enter the library missing)
> ```
> (Create a `requirements.txt` listing your backend libraries for future ease!)

---

## 🏃‍♂️ Running the Application

1. **Start Backend**  
```bash
# Activate venv if not already
venv\Scripts\activate  
python app.py
```
2. **Start Frontend**  
```bash
cd ../frontend
npm start
```
3. **Access UI**  
Open your browser at 👉 **http://127.0.0.1:3000** (or the port shown in console).

4. **Signup & Login** 🔐  
- Create an account via **Firebase Auth**.  
- Use your credentials to log in and navigate to the **Detect** page.

5. **Detect Masks** 🎥  
- Click **Start Detection** or upload an image.  
- See green boxes for **Masked** faces and red for **Unmasked**.  

6. **Chat with Bot** 🤖  
- Use the chat widget to ask questions about usage, health tips, or technical issues.

---

## 📸 Screenshots

![Login UI](https://github.com/sJalui/Face-Mask-Detector/blob/main/images/login.png?raw=true)
![WithMask](https://github.com/sJalui/Face-Mask-Detector/blob/main/images/w_mask.png?raw=true)
![WithoutMask](https://github.com/sJalui/Face-Mask-Detector/blob/main/images/wo_mask.png?raw=true)

---

## ❤️ Contributing & Support

Feel free to fork, submit issues, or open pull requests!  
Follow me on Instagram, LinkedIn, or GitHub for more updates.  

Happy coding and stay safe! 😄

