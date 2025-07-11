#!/usr/bin/env python3
"""
Module 9-element_length
This module defines a function that returns the length of
each element in a list.
"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return a list of tuples containing each element of
    lst and its length.

    Args:
        lst (Iterable[Sequence]): An iterable of sequences
        (like strings or lists)

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples with the
        sequence and its length
    """
    return [(i, len(i)) for i in lst]
