import ctypes

taxlib = ctypes.CDLL('./taxlib.so')

def get_taxes_owed(filing_status, taxable_income):
    filing_status = ctypes.c_int(filing_status)
    taxable_income = ctypes.c_double(taxable_income)
    taxes_owed = ctypes.c_double(0)
    taxlib.tax_calc(ctypes.byref(filing_status),
                   ctypes.byref(taxable_income),
                   ctypes.byref(taxes_owed))
    return taxes_owed.value
