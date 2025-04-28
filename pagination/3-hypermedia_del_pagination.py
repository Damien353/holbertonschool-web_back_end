#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0"""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            indexed_data = {i: dataset[i] for i in range(len(dataset))}
            self.__indexed_dataset = indexed_data

        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return a dictionary with pagination details"""
        # Assert index is within a valid range
        assert 0 <= index < len(self.indexed_dataset()), "Index out of range"

        # Get the dataset from the indexed dataset
        dataset = self.indexed_dataset()

        # Calculate the data for the requested page
        data = []
        next_index = index

        for _ in range(page_size):
            # If we haven't gone out of the range, add the data
            if next_index in dataset:
                data.append(dataset[next_index])
                next_index += 1

        # Return the pagination data
        return {
            'index': index,
            'data': data,
            'page_size': page_size,
            'next_index': next_index if next_index < len(dataset) else None
        }
