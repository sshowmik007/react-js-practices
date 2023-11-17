let invoices =[
    {
        "name": "John Doe",
        "number": "1234567890",
        "amount": 1000,
        "due": "2023-12-01"
    },
    {
        "name": "Jane Smith",
        "number": "9876543210",
        "amount": 750,
        "due": "2023-11-15"
    },
    {
        "name": "Bob Johnson",
        "number": "5551234567",
        "amount": 500,
        "due": "2023-11-30"
    }
]

export function getInvoices(){
    return invoices;
}