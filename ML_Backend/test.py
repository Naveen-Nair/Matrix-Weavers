import os

os. environ ["OPENAI_API_KEY"] = "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"

from LightRAG.lightrag import LightRAG, QueryParam

rag = LightRAG(working_dir="/Users/dhruvnagill/Desktop/croma/vector_database")

'''with open ("combined_output.txt") as f:
  rag.insert(f.read())'''
# Perform naive search

print (rag.query ("What is the number of Aditya Vision stores in india and where? (if you dont know the answer give me a very certain estimate(singular figure))", param=QueryParam(mode="hybrid")))