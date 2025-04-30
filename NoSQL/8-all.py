#!/usr/bin/env python3
"""List all documents in a MongoDB collection"""


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection

    Args:
        mongo_collection: pymongo collection object

    Returns:
        A list of documents, or an empty list if the collection is empty
    """
    return list(mongo_collection.find())
