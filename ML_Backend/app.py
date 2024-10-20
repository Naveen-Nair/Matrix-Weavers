from flask import Flask, request, jsonify, session
from langchain.prompts import ChatPromptTemplate
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores.chroma import Chroma
from langchain.chat_models import ChatOpenAI
from dotenv import load_dotenv
import os
import re
import json
from flask_cors import CORS, cross_origin
from pyngrok import ngrok, conf
import getpass

conf.get_default().auth_token = "2a7iCytrTN4oozdO41c5BgdbueF_7iJXJ2ckJkQMcWtKqZtq7"

connection_string = ngrok.connect(22, "tcp").public_url

ssh_url, port = connection_string.strip("tcp://").split(":")

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["*"])

port = 8070

public_url = ngrok.connect(port).public_url
print("\n")
print("\n")
print("\n")
print("\n")
print("\n")
print(" * ngrok tunnel \"{}\"".format(public_url))
app.config["BASE_URL"] = public_url
# allowed_origins = ["https://404c-14-139-162-2.ngrok-free.app"]
# CORS(app, supports_credentials=True, origins=allowed_origins)
os.environ ["OPENAI_API_KEY"] = api_key

# Load environment variables (like OpenAI API key)
load_dotenv()

app.secret_key = os.urandom(24)  # Secret key for session

# Define the embeddings and vector database
CHROMA_PATH = "/Users/dhruvnagill/Desktop/croma/google_reviews/chroma-db"
embedding_function = OpenAIEmbeddings()
db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embedding_function)

print("db loaded")


from LightRAG.lightrag import LightRAG, QueryParam

rag = LightRAG(working_dir="/Users/dhruvnagill/Desktop/croma/vector_database")

# Initialize the ChatOpenAI model
model = ChatOpenAI()

# Define the prompt template
PROMPT_TEMPLATE = """
Answer the question based only on the following context:

{context}

---

Answer the question based on the above context: {question}
"""

chatbot_prompt = '''
Follow these instructions before answering the query:
1.Don't Yap
2.If you are asked about any specific information eg.statistical figures and you are not provided with that information, just make up a certain estimate (singular figure)
The query asked is: 
'''

rag_prompt = '''
1. no yapping
2. Never begin your answers with Based on the given information or similar sentences
3. Only reply with the information that is asked. Nothing else.
4. If the information asked is not provided to you then reply with an estimate based on whatever information you have
'''


def answer_query(question):
    results = db.similarity_search_with_relevance_scores(question, k=3)
    if len(results) == 0 or results[0][1] < 0.7:
        print(f"Unable to find matching results.")
    
    context_text = "\n\n---\n\n".join([doc.page_content for doc, _score in results])
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt = prompt_template.format(context=context_text, question=question)

    response_text = model.predict(prompt + rag_prompt)
    return response_text


@app.route('/getReviews', methods=['POST'])
def getRecentReviews():
    data = request.get_json()
    company_name = data.get("company_name", "")
    prompt = f"Give me 10 recent google reviews of {company_name} stores."
    response_text = answer_query(prompt)

    return jsonify({
        "response": response_text,
    })


@app.route('/ask', methods=['POST'])
@cross_origin()
def ask_question():
    """
    Route to ask a new question or follow-up.
    Request body: { "question": "<user's question>" }
    """
    data = request.get_json()
    question = data.get("question", "")
    print(question)

    response_text = answer_query(question)

    return jsonify({
        "response": response_text,
    })


@app.route('/askGRAG', methods=['POST'])
def ask_question_GRAG():
    """
    Route to ask a new question or follow-up.
    Request body: { "question": "<user's question>" }
    """
    data = request.get_json()
    question = data.get("question", "")
    print(question)

    response = rag.query(question, param=QueryParam(mode="hybrid"))

    return jsonify({
        "response" : response
    })

@app.route('/getCustomerFeedback', methods=['POST'])
def get_customer_feedback():
    """
    Route to ask a new question or follow-up.
    Request body: { "question": "<user's question>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    total_reviews = answer_query(f"What is the total number of google reviews for stores of {company_name}. The answer must be the number itself in numerical form. Example output 43")
    average_review_score = answer_query(f"What is the average review score for google reviews of {company_name}. The answer must be a single decimal value between 0 to 5. Only one decimal must be the output no words. Example output 3.4")
    net_promoter_score = answer_query(f"Estimate the netPromoterScore for {company_name}. Strictly reply with only a numerical value between 0 to 100")
    csr = rag.query(f"what according to you should be the customerServiceRating(0-5) of {company_name}. Strictly reply in this format (decimal number between 0-5)/5 only no yapping. Example response 3.6/5", param=QueryParam(mode="hybrid"))
    psr = answer_query(f"Estimate a positve sentiment percentage for {company_name} based on the google reviews. Strictly reply in this format: (value between 0-100)%")
    customerSatisfaction = rag.query(f"what according to you is the customerSatisfaction of customers of {company_name}. Strictly reply with one of these words High, Medium, Low only. Example response Medium", param=QueryParam(mode="hybrid"))
    iA = rag.query(f"improvement areas for  {company_name}. Answer in only 1-2 sentences. no yapping", param=QueryParam(mode="hybrid"))
    fh = rag.query(f"Give feedback highlights for {company_name}. Answer in 1-2 sentences for example Customers appreciate the vast range of products and competitive pricing. Many customers highlight the knowledgeable staff and prompt in-store. no yapping", param=QueryParam(mode="hybrid"))

    return jsonify({
        "companyName":company_name,
        "totalReviews": total_reviews,
        "averageReviewScore":  average_review_score,
        "netPromoterScore": net_promoter_score,
        "customerSatisfaction": customerSatisfaction,
        "positiveSentimentPercentage": psr,
        "customerServiceRating": csr,
        "improvementAreas": iA,
        "feedbackHighlights": fh
    })

@app.route('/getCompanyOverview', methods=['POST'])
def get_company_info():
    """
    Route to get company information using RAG (Retrieval-Augmented Generation).
    Request body: { "company_name": "<company name>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    # Using rag.query method to retrieve information
    number_of_states = rag.query(f"In how many states does {company_name} operate? Strictly reply with only a number." + rag_prompt, param=QueryParam(mode="hybrid"))
    store_count = rag.query(f"What is the total number of stores for {company_name}? Strictly reply with only a number."+ rag_prompt, param=QueryParam(mode="hybrid"))
    stores_rented = rag.query(f"How many stores does {company_name} rent? Strictly reply with only a number. If you dont know just guess based on the information you have"+ rag_prompt, param=QueryParam(mode="hybrid"))
    stores_owned = rag.query(f"How many stores does {company_name} own? Strictly reply with only a number."+ rag_prompt, param=QueryParam(mode="hybrid"))
    store_formats = rag.query(f"What are the store formats for {company_name}? Strictly reply with a comma-separated list."+ rag_prompt, param=QueryParam(mode="hybrid"))

    return jsonify({
        "companyName": company_name,
        "numberOfStates": number_of_states,
        "storeCount": store_count,
        "storesRented": stores_rented,
        "storesOwned": stores_owned,
        "storeFormats": store_formats.split(',')
    })

@app.route('/getCompanyFeedback', methods=['POST'])
def get_company_feedback():
    """
    Route to ask a new question or follow-up.
    Request body: { "question": "<user's question>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    iA = rag.query(f"improvement areas for  {company_name} in bullet points" + rag_prompt, param=QueryParam(mode="hybrid"))
    fh = rag.query(f"Give feedback highlights for {company_name} in bullet points" + rag_prompt, param=QueryParam(mode="hybrid"))

    return jsonify({
        "improvementAreas": iA,
        "feedbackHighlights": fh
    })

@app.route('/getSITimeline', methods=['POST'])
def get_si_timeline():
    """
    Route to ask a new question or follow-up.
    Request body: { "question": "<user's question>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    response = rag.query(f"Mention at least 5 strategic initiatives of {company_name}" + '''. Answer in this json format {"company":"company name","title":"title of the strategic initiative","subtitle":"subtitle of the strategic initiatives","description":"description of the strategic initiatives","indetail":"indetail description of strategic initiative"}'''+ rag_prompt, param=QueryParam(mode="hybrid"))
    json_string = response.replace("```json\n", "").replace("\n```", "")

# Parse the JSON string
    parsed_json = json.loads(json_string)
    return parsed_json

@app.route('/getSITable', methods=['POST'])
def get_si_table():
    """
    Route to get investment details of a company.
    Request body: { "company_name": "<company name>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    # Modify the query string to ask for investment details
    response = rag.query(f"What are the investment details of atleast 5 strategic initiatives of {company_name}" + '''. Answer in this json format {"company":"company name","investment_area":"area of investment","year":year_of_investment,"amount_invested":"amount invested","expected_impact":"expected impact of the investment"}''' + rag_prompt + "dont put NA for amount invest to an estimated value", param=QueryParam(mode="hybrid"))
    
    # Clean up the response string
    json_string = response.replace("```json\n", "").replace("\n```", "")
    
    # Parse the JSON string
    parsed_json = json.loads(json_string)
    
    return parsed_json

@app.route('/getStrategicInitiatives', methods=['POST'])
def get_strategic_initiatives():
    """
    Route to get strategic initiatives of a company.
    Request body: { "company_name": "<company name>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    # Query for strategic initiatives
    response = rag.query(f"What are the strategic initiatives of {company_name}" + '''. Answer in this json format {"investments":[{"year":"year","amount":"amount","focus":"focus"}],"acquisitions":[{"year":"year","company":"acquired company name","value":"value","sector":"sector"}],"partnerships":[{"year":"year","partner":"partner name","focus":"focus"}]}''' + rag_prompt + "Try to mention multiple acquisitions and partnerships if you dont have any information use an estimated figure.", param=QueryParam(mode="hybrid"))
    
    # Clean up the response string
    json_string = response.replace("```json\n", "").replace("\n```", "")
    
    # Parse the JSON string
    parsed_json = json.loads(json_string)
    
    return parsed_json

@app.route('/getFutureOutlook', methods=['POST'])
def get_future_outlook():
    """
    Route to get future outlook of a company.
    Request body: { "company_name": "<company name>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    # Query for future outlook details
    response = rag.query(f"What is the future outlook for {company_name}" + '''. Answer in this json format {"growthProjections":[{"year":"year","revenue":"revenue","growthRate":"growth rate"}],"challenges":["challenge1", "challenge2"],"customerSentiment":{"positive":"positive feedback","negative":"negative feedback","keyFeedback":"key customer feedback"},"sustainability":{"greenEnergyTransition":"details","majorInitiatives":["initiative1", "initiative2"]}}''' + rag_prompt + "Try to include multiple growth projections and challenges, if you don't have any information, use estimated figures.", param=QueryParam(mode="hybrid"))
    
    # Clean up the response string
    json_string = response.replace("```json\n", "").replace("\n```", "")
    
    # Parse the JSON string
    parsed_json = json.loads(json_string)
    
    return parsed_json

@app.route('/getTrendsSummary', methods=['POST'])
def get_trends_summary():
    """
    Route to get performance trends summary of a company.
    Request body: { "company_name": "<company name>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    # Query for performance trends summary
    response = rag.query(f"What are the performance trends of {company_name}" + '''. Answer in this json format {"companyName":"company name","performanceTrendsSummary":["trend1","trend2"]}''' + rag_prompt + "Please include multiple trends if available.", param=QueryParam(mode="hybrid"))
    
    # Clean up the response string
    json_string = response.replace("```json\n", "").replace("\n```", "")
    
    # Parse the JSON string
    parsed_json = json.loads(json_string)
    
    return parsed_json

@app.route('/getChannelData', methods=['POST'])
def get_channel_data():
    """
    Route to get channel data for a company.
    Request body: { "company_name": "<company name>" }
    """
    data = request.get_json()
    company_name = data.get("company_name", "")

    # Query for channel data
    response = rag.query(f"What is the channel data for {company_name}" + '''. Answer in this json format {"name":"company name","store":store sales,"online":online sales,"b2b":b2b sales}''' + rag_prompt + "Include data for store, online, and B2B sales." + "if you don't have any information, use estimated figures.", param=QueryParam(mode="hybrid"))
    
    # Clean up the response string
    json_string = response.replace("```json\n", "").replace("\n```", "")
    
    # Parse the JSON string
    parsed_json = json.loads(json_string)
    
    return parsed_json


if __name__ == '__main__':
    # Run the Flask app
    app.run(port="8070")
