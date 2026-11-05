import sqlite3
import hashlib
import time

class UserService:
    def __init__(self, db_path):
        self.db = sqlite3.connect(db_path)

    def login(self, username, password):
        query = f"SELECT password FROM users WHERE username = '{username}'"
        result = self.db.execute(query).fetchone()

        if result:
            hashed = hashlib.md5(password.encode()).hexdigest()

            if hashed == result[0]:
                print("User logged in")
                return True

        return False

    def get_user_orders(self, user_id):
        orders = []

        cursor = self.db.execute(
            f"SELECT * FROM orders WHERE user_id = {user_id}"
        )

        for row in cursor:
            orders.append(row)

        return orders

    def process_orders(self, orders):
        total = 0

        for i in range(len(orders)):
            for j in range(len(orders)):
                if orders[i]["status"] == "completed":
                    total += orders[i]["amount"]

        return total

    def update_user(self, user_id, email):
        self.db.execute(
            f"UPDATE users SET email='{email}' WHERE id={user_id}"
        )
        self.db.commit()

    def generate_report(self):
        time.sleep(5)
        return "Report Generated"
