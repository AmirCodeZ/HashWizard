#!/usr/bin/env node

import { intro, outro, text, select } from '@clack/prompts'
import chalk from 'chalk'
import bcrypt from 'bcrypt'
import md5 from 'md5'
import sha1 from 'sha1'
import sha256 from 'sha256'
import argon2 from 'argon2'


intro(`Wellcome to ${chalk.yellow(" HashWizard ")}`)

const userPassword = await text({
    message: "Enter your password:",
    placeholder: "Exapmle: AmirCodeZ1234",
    defaultValue: "AmirCodeZ1234"
})

const algorithm = await select({
    message: "Please, choose your algorithm:",
    options: [
        {
            label: "bcrypt",
            value: "bcrypt"
        },
        {
            label: "md5",
            value: "md5"
        },
        {
            label: "sha1",
            value: "sha1"
        },
        {
            label: "sha256",
            value: "sha256"
        },
        {
            label: "argon2",
            value: "argon2"
        },
    ]
})

if (algorithm === "bcrypt") {
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(userPassword, salt)
    outro(`Here is your hash password: ${chalk.yellow(hashPassword)}`)
} else if (algorithm === "md5") {
    const hashPassword = md5(userPassword)
    outro(`Here is your hash password: ${chalk.yellow(hashPassword)}`)
} else if (algorithm === "sha1") {
    const hashPassword = sha1(userPassword)
    outro(`Here is your hash password: ${chalk.yellow(hashPassword)}`)
} else if (algorithm === "sha256") {
    const hashPassword = sha256(userPassword)
    outro(`Here is your hash password: ${chalk.yellow(hashPassword)}`)
} else if (algorithm === "argon2") {
    const hashPassword = await argon2.hash(userPassword)
    outro(`Here is your hash password: ${chalk.yellow(hashPassword)}`)
}

outro(`Made By${chalk.blue(" AmirCodeZ ")}`)