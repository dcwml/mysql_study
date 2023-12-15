@echo off
cd __BASE_DIR__

rem init
rem .\bin\mysqld --defaults-file="__DEFAULTS_FILE__" --initialize
rem --user=mysql --console
rem remember the root password: __LOG_ERROR__
rem change password: ALTER USER 'root'@'localhost' IDENTIFIED BY '${password}';

rem run
rem start /B .\bin\mysqld --defaults-file="__DEFAULTS_FILE__"

rem reset root password
rem .\bin\mysqld --defaults-file="__DEFAULTS_FILE__" --init-file="__RESET_FILE__"


