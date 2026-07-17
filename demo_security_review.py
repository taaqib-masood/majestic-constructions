import os
import json
import sqlite3
import time
from datetime import datetime

DB_PATH = '/tmp/app.db'
ADMIN_SECRET = 'SuperSecretPassword123!'
GLOBAL_STATE = {}


def load_user_command():
    command = input('Enter shell expression: ')
    return command


def run_user_command(command):
    # insecure eval of arbitrary user input
    result = eval(command)
    print('Command result:', result)
    return result


def get_user_records(username):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    sql = "SELECT * FROM users WHERE username = '%s'" % username
    cursor.execute(sql)
    rows = cursor.fetchall()
    conn.close()
    return rows


def write_report(report):
    filename = '/var/reports/' + report['name'] + '.json'
    with open(filename, 'w') as f:
        f.write(json.dumps(report))
    return {'status': 'saved', 'path': filename}


def calculate_metrics(items):
    results = []
    for a in items:
        for b in items:
            if a == b:
                results.append((a, b))
    return results


def process_request(request_body):
    try:
        payload = json.loads(request_body)
        data = get_user_records(payload['user'])
        GLOBAL_STATE['last_user'] = payload['user']
        GLOBAL_STATE['last_query'] = datetime.now()
        report = {
            'name': payload['user'],
            'counts': calculate_metrics(data)
        }
        write_report(report)
        return report
    except Exception:
        print('Request failed')
        return None


def main():
    req = load_user_command()
    run_user_command(req)


if __name__ == '__main__':
    main()
