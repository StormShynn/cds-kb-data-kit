---
name: I_ASSETTRANSACTIONTYPE
description: "Assettransactiontype"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETTRANSACTIONTYPE

**Assettransactiontype**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetTransactionType` | ✓ | |  | `bwasl` |  |  |
| `AssetTransactionTypeGroup` |  | |  | `bwagrp` |  |  |
| `AstTransTypeIsFrbdnInMnlPostg` |  | |  | `xabuch` |  |  |
| `DefaultDebitCreditCode` |  | |  | `anshkz` |  |  |
| `AstRetirementRevenueIsRequired` |  | |  | `xerlos` |  |  |
| `_Text` | | ✓ | | | | |
| `_TransactionTypeGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetTransactionTypeText` | [0..*] |
| `_TransactionTypeGroup` | `I_AssetTransactionTypeGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETTRTYP', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Asset Transaction Type'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { sapObjectNodeType.name: 'AssetTransactionType',
                representativeKey: 'AssetTransactionType',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AssetTransactionType
  as select from tabw

  association [0..*] to I_AssetTransactionTypeText  as _Text                 on $projection.AssetTransactionType = _Text.AssetTransactionType
  association [0..1] to I_AssetTransactionTypeGroup as _TransactionTypeGroup on $projection.AssetTransactionTypeGroup = _TransactionTypeGroup.AssetTransactionTypeGroup

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key bwasl  as AssetTransactionType,

      @ObjectModel.foreignKey.association: '_TransactionTypeGroup'
      bwagrp as AssetTransactionTypeGroup,
      xabuch as AstTransTypeIsFrbdnInMnlPostg,
      anshkz as DefaultDebitCreditCode,
      xerlos as AstRetirementRevenueIsRequired,

      _Text,
      _TransactionTypeGroup
}
```
