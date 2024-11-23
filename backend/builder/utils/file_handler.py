import os

def save_to_file(content):
    """Save generated code to an HTML file."""
    os.makedirs('generated_forms', exist_ok=True)
    file_path = 'generated_forms/form.html'
    with open(file_path, 'w') as f:
        f.write(content)
    return file_path
