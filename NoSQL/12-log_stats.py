#!/usr/bin/env python3
"""
This script provides statistics about Nginx logs stored in MongoDB.

It connects to a local MongoDB instance, accesses the 'logs' database
and the 'nginx' collection, and prints:
- The total number of log entries
- A count of each HTTP method used
- The number of logs where method is GET and path is "/status"
"""

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client['logs']
    collection = db['nginx']
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print(f"{collection.count_documents({})} logs")
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    print(collection.count_documents({"method": "GET", "path": "/status"}),
          "status check")

    client.close()
