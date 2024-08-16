import bcrypt from 'bcrypt'
import express from 'express'
import { AuthenticationResponse } from './types'

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash)
}

export const setAuthenticationCookies = (
  res: express.Response,
  data: AuthenticationResponse,
  secure = true
) => {
  res.cookie('access_token', data.access_token, {
    httpOnly: true,
    secure,
    sameSite: 'strict',
    maxAge: Number(process.env.ACCESS_TOKEN_EXP)
  })
  res.cookie('refresh_token', data.refresh_token, {
    httpOnly: true,
    secure,
    sameSite: 'strict',
    maxAge: Number(process.env.REFRESH_TOKEN_EXP)
  })
}
