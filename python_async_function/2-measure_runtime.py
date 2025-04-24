#!/usr/bin/env python3
"""Module that measures the average execution time of wait_n."""

import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total runtime of wait_n and return average time per call.

    Args:
        n (int): Number of times wait_random is called through wait_n.
        max_delay (int): Maximum delay for wait_random.

    Returns:
        float: Average execution time per coroutine.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    total_time = time.time() - start_time

    return total_time / n
