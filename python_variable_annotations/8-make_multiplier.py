#!/usr/bin/env python3
"""
Module 8-make_multiplier
This module defines a function that returns a multiplier function.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Return a function that multiplies a given number by the multiplier.

    Args:
        multiplier (float): The multiplier to use for the operation

    Returns:
        Callable[[float], float]: A function that takes a float and
        returns a float
    """
    def multiplier_function(number: float) -> float:
        return number * multiplier
    return multiplier_function
