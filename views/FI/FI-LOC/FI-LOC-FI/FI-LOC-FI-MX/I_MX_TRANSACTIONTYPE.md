---
name: I_MX_TRANSACTIONTYPE
description: MX Transactiontype
app_component: FI-LOC-FI-MX
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI-MX
  - lob:Finance
---
# I_MX_TRANSACTIONTYPE

**MX Transactiontype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-MX` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessTransactionType` | `cast(domvalue_l as transaction_type)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MX_TransactionTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMXTRANSTYPE'
@EndUserText.label: 'Mexico Transaction Type'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'BusinessTransactionType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'BusinessTransactionType'

define view I_MX_TransactionType as select from dd07l 

  association [0..*] to I_MX_TransactionTypeText as _Text on $projection.BusinessTransactionType = _Text.BusinessTransactionType
  
    {
      
      @ObjectModel.text.association: '_Text'
      key cast(domvalue_l as transaction_type) as BusinessTransactionType,
      
      _Text
      
    } 
    
        where dd07l.domname = 'MXTRANSTYPE' 
          and dd07l.as4local = 'A';
```
