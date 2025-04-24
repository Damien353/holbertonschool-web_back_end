#!/usr/bin/env python3
"""Module that defines task_wait_n which spawns tasks using task_wait_random"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times and return list of delays as they complete.

    Args:
        n (int): Number of tasks to spawn.
        max_delay (int): Maximum delay for each task.

    Returns:
        List[float]: List of delays in order of completion.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays: List[float] = []

    for completed in asyncio.as_completed(tasks):
        delay = await completed
        delays.append(delay)

    return delays
