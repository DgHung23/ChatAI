from typing import Union
import uvicorn
from fastapi import FastAPI
from fastapi import Request
from pydantic import BaseModel
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI

app = FastAPI()
class Item(BaseModel):
    q: str

chat_model = ChatOpenAI(openai_api_key="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")

@app.get("/chat")
async def chat (item: Item):
    content = item.q #request.query_params.get('url', None)
    result =chat_model.predict(content)

    return {'text' : result}
    # return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)