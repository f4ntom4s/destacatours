# Generated by Django 2.1.1 on 2018-10-03 04:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DestacApi', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person',
            old_name='name',
            new_name='first_name',
        ),
    ]
