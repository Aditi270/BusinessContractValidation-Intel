# INTEL UNNATI INDUSTRIAL TRAINING
When a user logs into our website, they can upload a contract for parsing along with a comparison template. The template can either be a previous contract from the same company or a standard template to identify deviations. Both the contract and template are stored in cloud storage, with Cloudinary being used for its secure URLs that prevent data leaks.

The contract is parsed to extract text and entities. The URLs of the contract and template are sent to the Django backend, where they are downloaded and temporarily stored.

The first component, the PDF Parser, extracts text from both the contract and the template. Following this, a Named Entity Recognition (NER) model extracts key entities from the contract, such as people, organizations, monetary details, and contract duration.

Next, the Text Classification component extracts and compares clauses from both documents using Levenshtein distance to determine similarities and differences. Sub-clauses are then classified into their respective main clauses.

The data from the classified sub-clauses is sent to a Large Language Model (LLM), which compares the contract and template data, generating a textual summary of any deviations. These deviations are highlighted in the contract, and the highlighted PDF is stored in the cloud service provider, with a secure link obtained.

Finally, a summary of the deviations and extracted entities is provided to the user. From the Django side, recognized entities, detected deviations, a summary, and the URL of the highlighted PDF are sent to the NodeJS backend, which then sends the response to the React frontend for the user to view. The user can also download the original and highlighted contracts for future reference.
