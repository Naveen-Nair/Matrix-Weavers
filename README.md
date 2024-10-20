# Competitive Intelligence Solution for Croma

## Project Overview

This project is focused on building a Generative AI-powered competitive intelligence solution for **Croma**, one of India's leading electronics and appliances retail chains. The solution aims to scan publicly available data related to organized electronics retailers in India and provide comprehensive insights into the competitive landscape. By leveraging recent advances in Generative AI, the project enhances the coverage, depth of insights, and reduces the time taken to gather intelligence on competitors.

### Context

Croma, founded in 2006, is India's first large-format specialist retail store that caters to multi-brand digital gadgets and home electronic needs. It offers an omnichannel experience through in-store shopping, online services via **www.croma.com**, and through the **Tata Neu App**.

Croma is seeking to understand its competitive landscape, particularly among omnichannel electronics retailers in the organized sector. Competitive intelligence scanning, using public data, is a key method to achieve this goal. Leveraging Generative AI in this process will enhance the speed, accuracy, and depth of insights gathered.

### Project Objective

The primary objective is to develop a Generative AI-powered solution to:
1. Scan publicly available data on organized electronics retailers in India.
2. Provide insights into key areas that define Croma’s competitive landscape, including:
   - **Key differentiators in business models** (channels, product portfolio, customer segments, marketing strategies, etc.)
   - **Geographical presence & store formats** (location count, store types, advertising space, etc.)
   - **Performance trends over time** (financials, store unit economics, etc.)
   - **Customer feedback** (NPS, reviews, etc.)
   - **Major strategic initiatives** (investments, acquisitions, etc.)
   - **Future outlook** (growth plans, strategic moves).

### Competitive Landscape
The key competitors include:
- **Reliance Digital**
- **Vijay Sales**
- **Aditya Vision**
- **Poojara**
- **Bajaj Electronics**

### Expected Outcomes
The solution is expected to provide summarized competitive intelligence based on various parameters such as business model differentiators, geographical presence, performance trends, customer feedback, strategic initiatives, and future outlook for the key competitors.

---

## Tech Stack

- **Frontend**: React with Chakra UI for building responsive UI components.
- **Backend**: Node.js with Express for handling API requests and MongoDB for storing competitive intelligence data.
- **Database**: MongoDB for storing structured data such as feedback highlights, improvement areas, and reviews across different companies and regions.
- **AI Component**: Generative AI models for processing and analyzing publicly available data to extract competitive insights.

---

## Features

1. **Company Selection**: Users can select a competitor (e.g., Reliance Digital, Vijay Sales) and view detailed insights into their performance and customer feedback.
2. **Customer Feedback Analysis**: Sentiment analysis on customer reviews, providing insights into strengths and improvement areas for each company.
3. **Geographical Insights**: Data on store presence and formats by region.
4. **Performance Trends**: Key metrics, such as NPS and overall satisfaction rate, displayed in a user-friendly manner for comparison.
5. **Strategic Initiatives**: Insights into major strategic moves like investments and acquisitions.
6. **Future Outlook**: Predictive analysis on the future positioning of competitors based on the gathered data.

---

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- Git

### Steps to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Naveen-Nair/Matrix-Weavers.git
```

### 2. Navigate to the Project Directory

```bash
cd Matrix-Weavers
cd Backend
```

### 3. Install Backend Dependencies

```bash
npm install
```

### 4. Set Up MongoDB

- Ensure MongoDB is installed and running on your system.
- Create a database with desired name.
- Set environment variables: Create a `.env` file in the project root and add the following:

```bash
MONGODB_URI=mongodb://localhost:27017/<your_db_name>
PORT=3001
```

### 5. Start the Backend Server

```bash
npm run dev
```

### 6. Navigate to the Frontend Folder to Install Frontend Dependencies

```bash
cd ..
cd Frontend
npm install
```

### 7. Create .env file to store Environment Variables

- Set environment variables: Create a `.env` file in the project root and add the following:

```bash
BACKEND_URL=http://localhost:3001/
PORT=3000
```
### 7. Start the Frontend Server

```bash
npm start
```

## Running the Project

Once both the backend and frontend servers are running, the application can be accessed locally at:

- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001
