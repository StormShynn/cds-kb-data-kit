---
name: I_LGLTRANSCATEGORYAPI01
description: Lgltranscategoryapi 01
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLTRANSCATEGORYAPI01

**Lgltranscategoryapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LegalTransactionCategoryUUID` | `LegalTransactionCategoryUUID` |
| `LegalTransactionParCatUUID` | `LegalTransactionParCatUUID` |
| `LegalTransactionUUID` | `LegalTransactionUUID` |
| `LglCntntMCategory` | `LglCntntMCategory` |
| `LglCntntMIsMandatory` | `LglCntntMIsMandatory` |
| `_LegalTransaction` | *Association* |
| `_LglTransParentCategory` | *Association* |
| `_LegalCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |
| `_LglTransParentCategory` | `I_LglTransParentCategoryAPI01` | [1..1] |
| `_LegalCategory` | `I_LegalCategoryAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTCATEGORYAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LegalTransactionCategoryUUID',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass:  #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Categories of Legal Transaction'

define view I_LglTransCategoryAPI01
  as select from I_LegalTransactionCategory
  association [1..1] to I_LegalTransactionAPI01       as _LegalTransaction       on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
  association [1..1] to I_LglTransParentCategoryAPI01 as _LglTransParentCategory on $projection.LegalTransactionParCatUUID = _LglTransParentCategory.LegalTransactionParCatUUID
  association [1..1] to I_LegalCategoryAPI01          as _LegalCategory          on $projection.LglCntntMCategory = _LegalCategory.LglCntntMCategory
{
  key LegalTransactionCategoryUUID,
      LegalTransactionParCatUUID,
      LegalTransactionUUID,
      LglCntntMCategory,
      LglCntntMIsMandatory,
      /* Associations */
      _LegalTransaction,
      _LegalCategory,
      _LglTransParentCategory
}
where
  _LegalTransaction.IsEndOfPurposeBlocked = ''
```
