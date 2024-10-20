import os

def combine_txt_md_files(directory, output_file):
    # Open the output file in write mode
    with open(output_file, 'w') as outfile:
        # Walk through the directory
        for root, dirs, files in os.walk(directory):
            for file in files:
                # Check if the file has a .txt or .md extension
                if file.endswith('.txt') or file.endswith('.md'):
                    # Get the relative path of the file (relative to the input directory)
                    rel_path = os.path.relpath(os.path.join(root, file), directory)
                    print(rel_path)
                    # Write the relative path as a header in the output file
                    outfile.write(f"File: {rel_path}\n")
                    outfile.write("-" * 40 + "\n")  # Optional separator
                    
                    # Open the file and read its content
                    with open(os.path.join(root, file), 'r') as infile:
                        content = infile.read()
                        # Write the content of the file
                        outfile.write(content)
                    
                    # Write a newline to separate contents of different files
                    outfile.write("\n" + "=" * 40 + "\n\n")

    print(f"Combined .txt and .md files into {output_file}")
# Example usage:
# You can specify the directory path and the output file
directory = "dataset_combined"
output_file = "combined_output.txt"  # You can change the output file name
combine_txt_md_files(directory, output_file)
