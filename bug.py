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
        f.write(json.dumps(report)
