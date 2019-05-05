import express from "express";

export const app: any = {
  route: jest.fn(() => app),
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  use: jest.fn()
}

export const version: string = "/api/v1";