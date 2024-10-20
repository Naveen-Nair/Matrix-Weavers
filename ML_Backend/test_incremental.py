import os
import time

def convert_md_to_txt(md_file):
    # Read the contents of the .md file
    with open(md_file, 'r') as file:
        content = file.read()

    # Create the new .txt file path by replacing .md with .txt
    txt_file = md_file.replace('.md', '.txt')

    # Write the content to the .txt file
    with open(txt_file, 'w') as file:
        file.write(content)

    return txt_file

def get_txt_files(directory):
    txt_files = []

    # Walk through the directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Check if the file is a .txt or .md file
            if file.endswith('.txt'):
                # Add the relative path of .txt files
                relative_path = os.path.relpath(os.path.join(root, file), directory)
                txt_files.append(relative_path)
            elif file.endswith('.md'):
                # Convert .md file to .txt and add the new .txt file path
                md_file_path = os.path.join(root, file)
                new_txt_file_path = convert_md_to_txt(md_file_path)
                relative_path = os.path.relpath(new_txt_file_path, directory)
                txt_files.append(relative_path)

    return txt_files

# Example usage:
directory_path = 'dataset_combined'  # Replace with your directory path
txt_files = get_txt_files(directory_path)


os. environ ["OPENAI_API_KEY"] = "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"

from LightRAG.lightrag import LightRAG, QueryParam

rag = LightRAG(working_dir="/Users/dhruvnagill/Desktop/croma/vector_database")

for txt_file in txt_files:
    print("-"*100)
    print("Inserting: " + txt_file)
    print("-"*100)
    with open ("combined_output.txt") as f:
      rag.insert(f.read())
    time.sleep(60)
    print("-"*100)
    print("Sleeping for 1 minue")
    print("-"*100)

# Perform naive search

print (rag.query ("what is the number of reliance digital stores in Tamil Nadu?", param=QueryParam(mode="hybrid")))