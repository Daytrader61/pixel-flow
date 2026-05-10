@echo off
set OLLAMA_API_BASE=http://127.0.0.1:18789
set OLLAMA_HOST=127.0.0.1:18789
set PATH=%PATH%;%USERPROFILE%\AppData\Roaming\Python\Python311\Scripts
cd /d "C:\Users\Hacer\.openclaw\workspace\pixel-flow"
aider --model ollama/deepseek-v4-pro:cloud --yes-always --no-gitignore %*
