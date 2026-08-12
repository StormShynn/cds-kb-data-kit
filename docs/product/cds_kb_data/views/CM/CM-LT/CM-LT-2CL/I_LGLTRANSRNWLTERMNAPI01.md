---
name: I_LGLTRANSRNWLTERMNAPI01
description: "Lgltransrnwltermnapi 01"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_LGLTRANSRNWLTERMNAPI01

**Lgltransrnwltermnapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMRnwlAndTermnUUID` | ✓ | |  |  |  |  |
| `LegalTransactionUUID` |  | |  |  |  |  |
| `LglCntntMRnwlType` |  | |  |  |  |  |
| `LglCntntMRnwlPeriod` |  | |  |  |  |  |
| `LglCntntMRnwlPeriodUnit` |  | |  |  |  |  |
| `LglCntntMRenewalClause` |  | |  |  |  |  |
| `LglCntntMTerminationClause` |  | |  |  |  |  |
| `LglCntntMNextTermnClause` |  | |  |  |  |  |
| `LglCntntMNmbrOfRenewals` |  | |  |  |  |  |
| `LglCntntMRnwlReminderUser` |  | |  |  |  |  |
| `LglCntntMTermnReminderUser` |  | |  |  |  |  |
| `LglCntntMRnwlReminderDays` |  | |  |  |  |  |
| `LglCntntMTermnReminderDays` |  | |  |  |  |  |
| `_LegalTransaction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTRNWAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMRnwlAndTermnUUID',
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

@EndUserText.label: 'Lifecycle of Legal Transaction'

define view I_LglTransRnwlTermnAPI01
  as select from I_LegalTransactionRnwlAndTermn
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
{
  key LglCntntMRnwlAndTermnUUID,
      LegalTransactionUUID,
      LglCntntMRnwlType,
      LglCntntMRnwlPeriod,
      LglCntntMRnwlPeriodUnit,
      LglCntntMRenewalClause,
      LglCntntMTerminationClause,
      LglCntntMNextTermnClause,
      LglCntntMNmbrOfRenewals,
      LglCntntMRnwlReminderUser,
      LglCntntMTermnReminderUser,
      LglCntntMRnwlReminderDays,
      LglCntntMTermnReminderDays,
      /* Associations */
      _LegalTransaction
}
where
  _LegalTransaction.IsEndOfPurposeBlocked = ''
```
