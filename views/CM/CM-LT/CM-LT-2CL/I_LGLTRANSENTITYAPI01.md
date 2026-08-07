---
name: I_LGLTRANSENTITYAPI01
description: Lgltransentityapi 01
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
# I_LGLTRANSENTITYAPI01

**Lgltransentityapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LegalTransactionEntityUUID` | ✓ | |  |  |
| `LglCntntMRank` |  | |  |  |
| `LglCntntMEntity` |  | |  |  |
| `LglCntntMEntityType` |  | |  |  |
| `LglCntntMTechEntityType` |  | |  |  |
| `LegalTransactionUUID` |  | |  |  |
| `LegalTransactionMandatoryFlag` |  | |  |  |
| `LglCntntMIsMainEntity` |  | |  |  |
| `LglCntntMIsIntegRelevant` |  | |  |  |
| `LglCntntMIsAddedByIntegVarbl` |  | |  |  |
| `_LegalTransaction` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTENTITYAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #COMPOSITE

@ObjectModel: {
  representativeKey: 'LegalTransactionEntityUUID',
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L,
  usageType.dataClass:  #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]


@EndUserText.label: 'Entities of Legal Transaction'
define view I_LglTransEntityAPI01
  as select from I_LegalTransactionEntity
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
{
  key LegalTransactionEntityUUID,
      LglCntntMRank,
      LglCntntMEntity,
      LglCntntMEntityType,
      LglCntntMTechEntityType,
      I_LegalTransactionEntity.LegalTransactionUUID,
      LegalTransactionMandatoryFlag,
      LglCntntMIsMainEntity,
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction
}
where
  _LegalTransaction.IsEndOfPurposeBlocked = ''
```
