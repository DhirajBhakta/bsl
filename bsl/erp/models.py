from django.db import models

DESIGNATIONS = (
            ('SE','Sales Executive'),
            ('MGR','Manager')
         )


class Employee(models.Model):
    name = models.CharField('Employee Name',max_length=64)
    employee_ID = models.CharField(max_length=16)
    dob = models.DateTimeField('Date Of Birth')
    doj = models.DateTimeField('Date Of Joining')
    designation = models.CharField(max_length=3, choices=DESIGNATIONS)
    basic_salary = models.IntegerField(default=0)

dummy_employee = Employee()


class Item(models.Model):
    item_name = models.CharField('Item Name',max_length=64)
    item_ID = models.CharField(max_length=16)
    sale_price = models.FloatField('Item Sale Price',default=0.0)
    item_cost = models.FloatField('Item Cost',default=0.0)
    manufacturer = models.CharField('Manufacturing Company name',max_length=64)
    mfd_date = models.DateTimeField('Manufacturing Date')
    exp_date = models.DateTimeField('Expiry Date')
    points = models.FloatField(default=0.0)


class Branch(models.Model):
    branch_ID = models.CharField(max_length=16)
    branch_manager = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    location = models.CharField(max_length=32)

class Inventory(models.Model):
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    qty = models.IntegerField('Quantity Left')

class Transaction(models.Model):
    transaction_ID = models.CharField(max_length=16)
    sales_executive = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    date = models.DateField('Transaction Date')

class Cart(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    qty = models.IntegerField('Quantity Sold')
    
    
