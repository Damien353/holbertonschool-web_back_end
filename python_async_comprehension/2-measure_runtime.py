#!/usr/bin/env python3
"""
This module measures the execution time of running async_comprehension
four times in parallel.
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Run async_comprehension four times in parallel and measure the
    total execution time.

    Returns:
        float: Total time taken to execute all four comprehensions.
    """
    start_time = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.perf_counter()
    return end_time - start_time
