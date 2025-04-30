#!/usr/bin/env python3
"""Module that provides statistics about Nginx logs stored in MongoDB"""

from pymongo import MongoClient

def log_stats(mongo_collection):
    """Displays stats about Nginx logs from a MongoDB collection"""
    total = mongo_collection.count_documents({})
    print(f"{total} logs")
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = mongo_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    status_check = mongo_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check} status check")


if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx
    log_stats(collection)
