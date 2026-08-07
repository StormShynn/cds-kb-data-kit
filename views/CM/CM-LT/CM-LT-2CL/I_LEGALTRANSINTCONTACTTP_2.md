---
name: I_LEGALTRANSINTCONTACTTP_2
description: Legaltransintcontacttp 2
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
  - transactional-processing
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSINTCONTACTTP_2

**Legaltransintcontacttp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LegalTransactionIntCntctUUID` | ✓ | |  |  |
| `LglCntntMRank` |  | |  |  |
| `LglCntntMIntCntctUser` |  | |  |  |
| `LglCntntMIntContactTeam` |  | |  |  |
| `LglCntntMIntCntctType` |  | |  |  |
| `LglCntntMIntContactUserType` |  | |  |  |
| `LegalTransactionUUID` |  | |  |  |
| `LegalTransactionMandatoryFlag` |  | |  |  |
| `LglCntntMIsIntegRelevant` |  | |  |  |
| `LglCntntMIsAddedByIntegVarbl` |  | |  |  |
| `_LegalTransaction` | | ✓ | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Legal Transaction Internal Contacts'
@ObjectModel: {
  usageType: {
    sizeCategory: #L,
    serviceQuality: #A,
    dataClass:#TRANSACTIONAL
  },
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define view entity I_LegalTransIntContactTP_2
  as projection on R_LegalTransInternalContactTP
{
  key LegalTransactionIntCntctUUID,
      LglCntntMRank,
      LglCntntMIntCntctUser,
      LglCntntMIntContactTeam,
      LglCntntMIntCntctType,
      LglCntntMIntContactUserType,
      LegalTransactionUUID,
      LegalTransactionMandatoryFlag,
      @Semantics.booleanIndicator: true
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction : redirected to parent I_LegalTransactionTP_2
}
```
