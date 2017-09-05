""" Randomly Generating and Storing Passwords
Description: Randomly generates passwords using inbuilt random module. Documents generated passwords using pymongo.

Author: Brandon Presley
GitHub: https://github.com/brandonp2412
Date: 5/9/2017
"""

import string, random, pyperclip
from pymongo import MongoClient


def generate_password(length):
    password = ""
    for i in range(length):
        choices = string.ascii_letters + string.digits + string.punctuation
        password += random.choice(choices)
    return password


def log_password(username, password, url):
    """Connects to local MongoDB and inserts the generated password"""
    client = MongoClient("localhost", 27017)
    random_db = client.random_passwords
    random_col = random_db["rng_passwords"]
    random_col.insert_one({"Username": username,
                           "Password": password,
                           "Url": url})
    client.close()


def retrieve(username, url=None):
    """Retrieves record(s) from the local MongoDB by username (and url)"""
    client = MongoClient("localhost", 27017)
    random_db = client.random_passwords
    random_col = random_db["rng_passwords"]
    result = None
    if url is not None:
        result = random_col.find_one({"Username": username, "Url": url})
    result = random_col.find({"Username": username})
    client.close()
    return result


def remove(username, url=None):
    """Removes record(s) from the local MongoDB by username (and url)"""
    client = MongoClient("localhost", 27017)
    random_db = client.random_passwords
    random_col = random_db["rng_passwords"]
    if url is not None:
        return random_col.delete_one({"Username": username, "Url": url})
    client.close()
    return random_col.delete_many({"Username": username})


def remove_all():
    """Clears all records within the local MongoDB"""
    client = MongoClient("localhost", 27017)
    random_db = client.random_passwords
    random_col = random_db["rng_passwords"]
    random_col.delete_many({})
    return client.close()


def test_password_entry(username, password, url):
    """Compares the given username, url to the local MongoDB records"""
    user_record = retrieve(username, url)
    if user_record is None:
        return False
    return user_record["Password"] == password


def password_package(username, url, length=10):
    """Generates a password, records it on local MongoDB and then copies
    said password to the clipboard"""
    password = generate_password(length)
    log_password(username, password, url)
    if not test_password_entry(username, password, url):
        raise Exception("Logging has failed, check db connection.")
    pyperclip.copy(password)
    print("Password has been generated, logged, and sent to clipboard.")
