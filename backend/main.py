from fastapi import FastAPI
from app.api.routes.email_processing import email_processing_router

app = FastAPI()

app.include_router(email_processing_router, prefix="/api")
