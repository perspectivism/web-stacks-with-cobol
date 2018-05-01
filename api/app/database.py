import os
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session

host = 'db'
username = os.environ['POSTGRES_USER']
password = os.environ['POSTGRES_PASSWORD']
database_name = os.environ['POSTGRES_DB']
conn_str = f'postgresql://{username}:{password}@{host}/{database_name}'

base = automap_base()
engine = create_engine(conn_str)
base.prepare(engine, reflect=True)

taxpayer_table = base.classes.taxpayer
session = Session(engine)

def get_tax_payer_by_id(id):
    return session.query(taxpayer_table).filter_by(id=id).scalar()