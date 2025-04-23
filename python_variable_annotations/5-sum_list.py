#!/usr/bin/env python3
"""
Module 5-sum_list
This module defines a function that sums a list of floats.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Sum the elements of a list of floats and return the result.

    Args:
        input_list (List[float]): The list of float numbers

    Returns:
        float: The sum of the list
    """
    return sum(input_list)
