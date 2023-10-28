@echo off
cd D:/Programs/EasySrv-1.6.8-win/core/software/server/mysql-8.0

rem init
.\bin\mysqld --defaults-file="D:\Projects\mysql_test\dist\mysql.ini" --initialize
rem --user=mysql --console
rem remember the root password: D:\Projects\mysql_test\data\mysql.log
rem change password: ALTER USER 'root'@'localhost' IDENTIFIED BY '${password}';

rem run
rem start /B .\bin\mysqld --defaults-file="D:\Projects\mysql_test\dist\mysql.ini"

rem reset root password
rem .\bin\mysqld --defaults-file="D:\Projects\mysql_test\dist\mysql.ini" --init-file="D:\Projects\mysql_test\dist\reset.sql"
