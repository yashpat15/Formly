from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def handle_form_submission(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            print("Received data:", data)

            
            return JsonResponse({'success': True, 'message': 'Form submitted successfully!'}, status=200)
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    return JsonResponse({'success': False, 'error': 'Invalid request method'}, status=405)
