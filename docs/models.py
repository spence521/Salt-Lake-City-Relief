# {"transactionID":"0", "loginID":"0", "firstName":"John", "lastName":"Doe", "cc":"1234567812345678", "expDate":"12/22", "cvv":"123"}
class CreditCard:
    TransactionID = 0

    def __init__(self, fname, mname, lname, ccnumber, exp, cvv, amount):
        self.firstName = fname
        self.middleName = mname
        self.lastName = lname
        self.number = ccnumber
        self.expiration_date = exp
        self.code = cvv
        self.amount = amount
        CreditCard.TransactionID += 1

    firstName = None
    middleName = None
    lastName = None
    ccNumber = None
    expDate = None
    code = None
    amount = None


class TransactionResponse:
    is_success = False
    messages = []
