---
name: I_LGLTRANSINTCONTACTAPI01
description: Lgltransintcontactapi 01
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
# I_LGLTRANSINTCONTACTAPI01

**Lgltransintcontactapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LegalTransactionIntCntctUUID` | `LegalTransactionIntCntctUUID` |
| `LglCntntMRank` | `LglCntntMRank` |
| `LglCntntMIntCntctUser` | `LglCntntMIntCntctUser` |
| `LglCntntMIntContactTeam` | `LglCntntMIntContactTeam` |
| `LglCntntMIntCntctType` | `LglCntntMIntCntctType` |
| `LglCntntMIntContactUserType` | `LglCntntMIntContactUserType` |
| `LegalTransactionUUID` | `LegalTransactionUUID` |
| `LegalTransactionMandatoryFlag` | `LegalTransactionMandatoryFlag` |
| `LglCntntMIsIntegRelevant` | `LglCntntMIsIntegRelevant` |
| `LglCntntMIsAddedByIntegVarbl` | `LglCntntMIsAddedByIntegVarbl` |
| `_LegalTransaction` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTINTCONTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LegalTransactionIntCntctUUID',
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

@EndUserText.label: 'Internal Contacts of Legal Transaction'
define view I_LglTransIntContactAPI01
  as select from I_LegalTransactionIntContact
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
{
  key LegalTransactionIntCntctUUID,
      LglCntntMRank,
      LglCntntMIntCntctUser,
      LglCntntMIntContactTeam,
      LglCntntMIntCntctType,
      LglCntntMIntContactUserType,
      LegalTransactionUUID,
      LegalTransactionMandatoryFlag,
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction
}
where
  _LegalTransaction.IsEndOfPurposeBlocked = ''
```
