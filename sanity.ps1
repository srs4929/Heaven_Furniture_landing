$ErrorActionPreference = 'Continue'
Set-Location 'E:\radox'
Write-Host "STAGE 1: here"
npm run build 2>&1 | Out-File 'E:\radox\build.log' -Encoding utf8
Write-Host "STAGE 2: done"
Get-Content 'E:\radox\build.log' | Select-Object -Last 40