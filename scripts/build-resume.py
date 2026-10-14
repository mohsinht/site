#!/usr/bin/env python3
"""Compatibility entry point. The single PDF generator is build-resume.mjs."""
import subprocess
from pathlib import Path

subprocess.run(['node', str(Path(__file__).with_name('build-resume.mjs'))], check=True)
