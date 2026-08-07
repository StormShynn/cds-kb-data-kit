---
name: I_LGLTRANSCATEGORYGROUPAPI01
description: Lgltranscategorygroupapi 01
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
# I_LGLTRANSCATEGORYGROUPAPI01

**Lgltranscategorygroupapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LegalTransactionCatGroupUUID` | ✓ | |  |  |
| `LegalTransactionUUID` |  | |  |  |
| `LglCntntMCatGroupTitle` |  | |  |  |
| `LglCntntMIndex` |  | |  |  |
| `_LegalTransaction` | | ✓ | | |
| `_LglTransParentCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |
| `_LglTransParentCategory` | `I_LglTransParentCategoryAPI01` | [1..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTCATGRPAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LegalTransactionCatGroupUUID',
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

@EndUserText.label: 'Category Groups of Legal Transaction'
define view I_LglTransCategoryGroupAPI01
  as select from I_LegalTrCategoryGroup
  association [1..1] to I_LegalTransactionAPI01       as _LegalTransaction       on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
  association [1..*] to I_LglTransParentCategoryAPI01 as _LglTransParentCategory on $projection.LegalTransactionCatGroupUUID = _LglTransParentCategory.LegalTransactionCatGroupUUID
{
  key LegalTransactionCatGroupUUID,
      LegalTransactionUUID,
      LglCntntMCatGroupTitle,
      LglCntntMIndex,

      /* Associations */
      _LglTransParentCategory,
      _LegalTransaction
}
where
  _LegalTransaction.IsEndOfPurposeBlocked = ' '
```
