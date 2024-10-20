import os

os. environ ["OPENAI_API_KEY"] = api_key

from LightRAG.lightrag import LightRAG, QueryParam

rag = LightRAG(working_dir="/Users/dhruvnagill/Desktop/croma/vector_database")

'''with open ("combined_output.txt") as f:
  rag.insert(f.read())'''
# Perform naive search

print (rag.query ("What is the number of Aditya Vision stores in india and where? (if you dont know the answer give me a very certain estimate(singular figure))", param=QueryParam(mode="hybrid")))