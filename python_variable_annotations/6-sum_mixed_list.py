#!/usr/bin/env python3
"""
Module 6-sum_mixed_list
This module defines a function that sums a mixed list of integers and floats.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sum the elements of a list containing both integers and floats, and return the result.

    Args:
        mxd_lst (List[Union[int, float]]): The list containing integers and floats

    Returns:
        float: The sum of the list
    """
    return float(sum(mxd_lst))
