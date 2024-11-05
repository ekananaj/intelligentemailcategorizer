from fastapi import APIRouter
from app.utils.categorize_emails import categorize_email
from app.utils.summarize_emails import summarize_email

email_processing_router = APIRouter()

# Placeholder endpoint to get emails
@email_processing_router.get("/emails")
async def get_emails():
    return [{"id": 1, "subject": "Project Update", "body": "Here is the project update..."}]

# Endpoint for categorizing emails
@email_processing_router.post("/categorize")
async def process_categorize(email_body: str):
    category = categorize_email(email_body)
    return {"category": category}

# Endpoint for summarizing emails
@email_processing_router.post("/summarize")
async def process_summarize(email_body: str):
    summary = summarize_email(email_body)
    return {"summary": summary}
