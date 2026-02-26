#!/usr/bin/env python3
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request

TOKEN = "8283515361:AAG9YhyJJDp3v37_UaAkerKHpZINgei4nP8"
CHAT_ID = "6704790457"
PORT = 8080

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            length = int(self.headers.get('Content-Length', 0))
            data = json.loads(self.rfile.read(length).decode('utf-8'))

            if not data.get('name') or not data.get('contact'):
                self.send_response(400)
                self.end_headers()
                self.wfile.write(b'{"success":false,"message":"Name and contact required"}')
                return

            # Send to Telegram
            msg = f"NEW APPLICATION from na8us.com\n\nName: {data['name']}\nContact: {data['contact']}\nService: {data.get('service', 'N/A')}\n\nTask: {data.get('task', 'N/A')}"

            urllib.request.urlopen(f"https://api.telegram.org/bot{TOKEN}/sendMessage?chat_id={CHAT_ID}&text={urllib.parse.quote(msg)}")

            print(f"SUCCESS: {data['name']} - {data['contact']}")

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"success":true,"message":"Application received!"}')

        except Exception as e:
            print(f"ERROR: {e}")
            self.send_response(500)
            self.end_headers()
            self.wfile.write(b'{"success":false,"message":"Server error"}')

if __name__ == '__main__':
    print(f'Server starting on port {PORT}...')
    HTTPServer(('', PORT), Handler).serve_forever()
