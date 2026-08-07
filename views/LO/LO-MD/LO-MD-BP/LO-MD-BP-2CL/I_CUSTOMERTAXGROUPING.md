---
name: I_CUSTOMERTAXGROUPING
description: "Customertaxgrouping"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - customer
  - tax
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERTAXGROUPING

**Customertaxgrouping**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` |  |  |
| `CustomerTaxGroupingCode` | ✓ | |  | `taxgr` |  |  |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` |  |  |
| `AuthorizationGroup` |  | | `_Customer` | `AuthorizationGroup` |  |  |
| `CustTaxGrpExemptionCertificate` |  | |  | `exnr` |  |  |
| `CustTaxGroupExemptionRate` |  | |  | `exrt` |  |  |
| `CustTaxGroupExemptionStartDate` |  | |  | `exdf` |  |  |
| `CustTaxGroupExemptionEndDate` |  | |  | `exdt` |  |  |
| `CustTaxGroupSubjectedStartDate` |  | |  | `sbjdf` |  |  |
| `CustTaxGroupSubjectedEndDate` |  | |  | `sbjdt` |  |  |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTTAXGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Customer Tax Grouping'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'CustomerTaxGrouping'
@ObjectModel.representativeKey: 'CustomerTaxGroupingCode'
@ObjectModel: {
modelingPattern: #ANALYTICAL_DIMENSION,
supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                         #EXTRACTION_DATA_SOURCE,
                         #CDS_MODELING_ASSOCIATION_TARGET,
                         #ANALYTICAL_DIMENSION ]
}
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata:{
ignorePropagatedAnnotations:true,
allowExtensions:true }          
@Analytics:{
    internalName:#LOCAL,
    dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
        mapping:[
                {
                    table: 'KNAT', role: #MAIN,
                    viewElement: ['Customer','CustomerTaxGroupingCode'],
                    tableElement: ['kunnr','taxgr']
                },
                {
                    table: 'KNA1', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['Customer'],
                    tableElement: ['kunnr']
                }
                
              ]  
         }
      }
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_CustomerTaxGrouping as select from knat 

    association [1..1] to I_Customer        as _Customer        on $projection.Customer = _Customer.Customer
    
{
    @ObjectModel.foreignKey.association: '_Customer'
    key kunnr                     as Customer,
    key taxgr                     as CustomerTaxGroupingCode,
    _Customer.CustomerAccountGroup as CustomerAccountGroup,
    _Customer.AuthorizationGroup as AuthorizationGroup,
    exnr                          as CustTaxGrpExemptionCertificate,
    exrt                          as CustTaxGroupExemptionRate,
    exdf                          as CustTaxGroupExemptionStartDate,
    exdt                          as CustTaxGroupExemptionEndDate,
    sbjdf                         as CustTaxGroupSubjectedStartDate,
    sbjdt                         as CustTaxGroupSubjectedEndDate,
    
    _Customer 
}
```
