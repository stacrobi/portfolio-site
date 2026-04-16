$port = 8000
$url = "http://localhost:$port"

Write-Host "Starting local preview server for this project..."
Write-Host "Open: $url"
Write-Host "Press Ctrl+C in this window to stop the server."

Start-Process $url
python -m http.server $port
