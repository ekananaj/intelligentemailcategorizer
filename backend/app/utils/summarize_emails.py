from transformers import pipeline

# Load a summarization pipeline model from Hugging Face
summarizer = pipeline("summarization")

def summarize_email(email_body):
    # Summarize the email body
    summary = summarizer(email_body, max_length=60, min_length=25, do_sample=False)
    return summary[0]["summary_text"]
