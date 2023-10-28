
const fs = require('fs')
const path = require('path')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const DIR = __dirname

let start = async () => {
	let mysqlBaseDir = 'D:/Programs/EasySrv-1.6.8-win/core/software/server/mysql-8.0'
	// let mysqlDataDir = 'D:/Programs/EasySrv-1.6.8-win/core/database/mysql-8.0-data'
	// let mysqlErrorFile = 'D:/Programs/EasySrv-1.6.8-win/core/software/server/mysql-8.0/logs/mysql.log'
	let mysqlDataDir = path.join(DIR, 'data')
	let mysqlErrorFile = path.join(mysqlDataDir, 'mysql.log')
	// __DATA_DIR__  __LOG_ERROR__

	let templateDir = path.join(DIR, 'templates')
	let templateFileIni = path.join(templateDir, 'mysql.ini') // ini for windows, cnf for linux
	let templateFileBat = path.join(templateDir, 'mysql.bat')
	let templateFileSql = path.join(templateDir, 'reset.sql')
	let distDir = path.join(DIR, 'dist')
	let distIni = path.join(distDir, 'mysql.ini')
	let distBat = path.join(distDir, 'mysql.bat')
	let distSql = path.join(distDir, 'reset.sql')
	let newPassword = 'qwert'

	let buffer = await readFile(templateFileIni)
	let content = buffer.toString()
		.replace(/__DATA_DIR__/g, mysqlDataDir)
		.replace(/__LOG_ERROR__/g, mysqlErrorFile)
	await writeFile(distIni, content)

	buffer = await readFile(templateFileBat)
	content = buffer.toString()
		.replace(/__BASE_DIR__/g, mysqlBaseDir)
		.replace(/__DEFAULTS_FILE__/g, distIni)
		.replace(/__RESET_FILE__/g, distSql)
		.replace(/__LOG_ERROR__/g, mysqlErrorFile)
	await writeFile(distBat, content)

	buffer = await readFile(templateFileSql)
	content = buffer.toString()
		.replace(/__PASSWORD__/g, newPassword)
	await writeFile(distSql, content)
}

// 0%9DdSdxrZ_y

start()
