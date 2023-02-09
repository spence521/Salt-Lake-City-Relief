import models
import paymentprocessingj
import sys
import json
import ast  # Abstract Syntax Tree

data_to_pass_back = 'Send this to node process.'

# list
# [First_Name, Middle_Name, Last_Name, ccNumber, Exp, CVV]
input = ast.literal_eval(sys.argv[1])
card = models.CreditCard(input[0], input[1], input[2], input[3], input[4], input[5], input[6])

'''
amount = "19.99"
card = models.CreditCard()
card.number = "4007000000027" # visa test number
card.expiration_date = "2050-01" # any date in the future
card.code = "123" # any 3 digit code
'''

response = paymentprocessingj.charge_credit_card(card)

print(response.is_success)
print(response.messages)

output = input
output['data_returned'] = [response.is_success, response.messages]
print(json.dumps(output))
sys.stdout.flush()
