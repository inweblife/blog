@echo off
REM Script to restore .git directory after deployment
echo Restoring .git directory...
move ..\blog-git-backup .git
echo Done! Git repository restored.