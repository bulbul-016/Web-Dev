from django.db import models

"""
create table product(
    id      INTEGER,
    name VARCHAR(255),
    price NUMERIC default 1000
);
"""
# ORM - Object Relational Mapping


class Product(models.Model):
    name = models.CharField(max_lenght=255)
    price = models.FloatField(default=1000)
    description = models.TextField()




# Create your models here.
# Models file is the representation of the database table using python clesses