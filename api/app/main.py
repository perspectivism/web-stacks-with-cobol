import cobol
from database import get_tax_payer_by_id
from flask import Flask
import json
import socket

app = Flask(__name__)

@app.route('/')
def index():
    return f'<h2>Web Services Tier: {socket.gethostname()}</h2>'

@app.route('/taxpayer/<int:id>')
def taxpayer(id):
    tp = get_tax_payer_by_id(id)
    filing_status = tp.filing_status_id
    taxable_income = tp.taxable_income
    taxes_owed = cobol.get_taxes_owed(filing_status, taxable_income)
    return jsonify_tax_payer(tp, taxes_owed)

@app.errorhandler(Exception)
def page_not_found(e):
    return 'TaxPayer not found', 404

def jsonify_tax_payer(tp, taxes_owed):
    return json.dumps({
        'id': tp.id,
        'firstname': tp.first_name,
        'lastname': tp.last_name,
        'filingStatus': tp.filing_status.description,
        'taxableIncome': float(tp.taxable_income),
        'taxesOwed': taxes_owed
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081, debug=True)
