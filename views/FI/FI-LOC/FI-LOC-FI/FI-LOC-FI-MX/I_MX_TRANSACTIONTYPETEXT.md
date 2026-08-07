---
name: I_MX_TRANSACTIONTYPETEXT
description: MX Transactiontypetext
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
  - text-view
  - text
  - component:FI-LOC-FI-MX
  - lob:Finance
---
# I_MX_TRANSACTIONTYPETEXT

**MX Transactiontypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-MX` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessTransactionType` | ✓ | |  | `cast(domvalue_l as transaction_type)` |
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` |
| `BusinessTransactionTypeName` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMXTRANSTYPET'
@EndUserText.label: 'Mexico Transaction Type - Text'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@Analytics: { dataExtraction.enabled: true  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'BusinessTransactionType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

define view I_MX_TransactionTypeText as select from dd07t 

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  
  {
  
    key cast(domvalue_l as transaction_type) as BusinessTransactionType,
  
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
    key cast(ddlanguage as spras) as Language,
  
        @Semantics.text
        ddtext                    as BusinessTransactionTypeName,
  
        _Language
  
  }
    where domname  = 'MXTRANSTYPE'
      and as4local = 'A';
```
