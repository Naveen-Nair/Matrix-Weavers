---

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

## Machine Learning Component

### 1. **Data Collection and Scraping**
We utilized web scraping techniques to collect large volumes of publicly available data from multiple sources, including competitor websites, news articles, product reviews, financial reports, and social media platforms. This data forms the backbone of the competitive intelligence solution, covering various aspects of business operations for major electronics retailers in India.

### 2. **LightRAG for Knowledge Graph Construction**
We used **LightRAG**, a lightweight variant of GraphRAG, to build a knowledge graph from the scraped data. This allowed us to:
   - Structure and represent relationships between different entities, such as competitors, products, strategic initiatives, and customer feedback.
   - Organize the vast amount of data into meaningful segments for efficient retrieval and analysis.
   - Enable the system to answer complex, multi-hop queries by reasoning over the knowledge graph, enhancing the depth of insights generated.

### 3. **Natural Language Processing (NLP) and Sentiment Analysis**
   - Sentiment analysis is performed on customer reviews and feedback across various platforms to generate actionable insights on customer sentiment for each competitor.
   - The NLP models categorize feedback into positive, negative, and neutral sentiments and provide summaries of the most frequent issues and strengths mentioned by customers.

### 4. **Generative AI for Intelligence Summarization**
Generative AI models, powered by large language models (LLMs), are employed to:
   - Summarize complex data points into human-readable insights for each competitor. These insights cover key differentiators, geographical presence, performance trends, and more.
   - Automate the generation of intelligence reports, which are then presented in the frontend via API integration.

### 5. **Predictive Analytics for Future Outlook**
The ML models also perform **predictive analysis** using historical performance trends and strategic initiatives to estimate future growth, potential challenges, and shifts in the competitive landscape. This helps in providing Croma with an actionable outlook on where the market might head.

### 6. **API Integration for Intelligent Responses**
   - The backend integrates with the LightRAG model to fetch relevant insights in real time based on user queries.
   - APIs are designed to allow seamless data flow between the frontend and the backend, ensuring that the ML-generated insights are displayed in a user-friendly format.

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

---

## Docker Setup for Backend

### 7. Create .env file to store Environment Variables

- Set environment variables: Create a `.env` file in the project root and add the following:

```bash
MONGODB_URI=mongodb+srv://user_1_spider:user_1_spider@cluster0.gpmuqfi.mongodb.net/Chroma_app
PORT=3001

#For mongo-express admin monitoring
ME_PORT=3002
ME_CONFIG_MONGODB_SERVER=localhost
ME_CONFIG_MONGODB_ENABLE_ADMIN=true
ME_CONFIG_BASICAUTH_USERNAME=test_user
ME_CONFIG_BASICAUTH_PASSWORD=1234
```
- Then run:
```bash
docker compose up --build
```
- Set environment variables: Create a `.env` file in the project root and add the following:
  
### 8. To run the scripts located in the `ML_Backend` folder, please ensure you download the necessary datasets from [this Google Drive link](https://drive.google.com/drive/folders/1ryWNRDqo_G5UGd9eULZYi3x3edHkuu-3?usp=sharing).


