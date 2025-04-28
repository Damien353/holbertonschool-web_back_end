#!/usr/bin/env python3
"""This module provides an asynchronous generator yielding random numbers."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronously yield a random float between 0 and 10, ten times,
    waiting 1 second between each yield.
    """
    for i in range(10):
        await asyncio.sleep(1)
        i = random.uniform(0, 10)
        yield i
