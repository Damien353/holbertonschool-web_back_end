#!/usr/bin/env python3
"""
Module 7-to_kv
This module defines a function that returns a tuple with a string and 
the square of a number.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple where the first element is a string, and the second
    element is the square of v.

    Args:
        k (str): The string to include in the tuple
        v (Union[int, float]): The value to square and include in the tuple

    Returns:
        Tuple[str, float]: A tuple with the string k and the square of v
        as a float
    """
    return (k, float(v ** 2))
