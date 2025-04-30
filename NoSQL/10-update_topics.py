#!/usr/bin/env python3
"""Update topics of a school document in MongoDB"""


def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a school document identified by name

    Args:
        mongo_collection: pymongo collection object
        name (str): the name of the school to update
        topics (list of str): the list of topics to set
    """
    mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics } }
    )
