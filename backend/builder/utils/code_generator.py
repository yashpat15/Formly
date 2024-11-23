def generate_html(data):
    """Generate HTML code for forms."""
    css_framework = data.get('css_framework', 'plain')
    form_fields = ""
    for field in data.get('fields', []):
        if css_framework == 'tailwind':
            form_fields += f'<input class="border p-2" type="{field["type"]}" name="{field["name"]}" />\n'
        else:
            form_fields += f'<input type="{field["type"]}" name="{field["name"]}" />\n'
    return f"<form>\n{form_fields}</form>"
