#!/usr/bin/env python3
"""Returns the list of schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of all schools having the specified topic.

    Args:
        mongo_collection: pymongo collection object
        topic (str): the topic to search for

    Returns:
        list of dict: schools having the topic
    """
    return list(mongo_collection.find({"topics": topic}))
