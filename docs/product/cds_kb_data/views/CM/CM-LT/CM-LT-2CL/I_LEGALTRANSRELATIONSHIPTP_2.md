---
name: I_LEGALTRANSRELATIONSHIPTP_2
description: "Legaltransrelationshiptp 2"
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
# I_LEGALTRANSRELATIONSHIPTP_2

**Legaltransrelationshiptp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionRelshpUUID` | ✓ | |  |  |  |  |
| `LegalTransactionUUID` |  | |  |  |  |  |
| `RelshpLegalTransaction` |  | |  |  |  |  |
| `RelshpLegalTransactionUUID` |  | |  |  |  |  |
| `LglCntntMRelshpType` |  | |  |  |  |  |
| `LegalTransactionMandatoryFlag` |  | |  |  |  |  |
| `LglCntntMIsIntegRelevant` |  | |  |  |  |  |
| `LglCntntMIsAddedByIntegVarbl` |  | |  |  |  |  |
| `_LegalTransaction` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Legal Transaction Relationships'
@ObjectModel: {
  usageType: {
    sizeCategory: #L,
    serviceQuality: #B,
    dataClass:#TRANSACTIONAL
  },
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define view entity I_LegalTransRelationshipTP_2
  as projection on R_LegalTransRelationshipTP
{
  key LegalTransactionRelshpUUID,
      LegalTransactionUUID,
      RelshpLegalTransaction,
      RelshpLegalTransactionUUID,
      LglCntntMRelshpType,
      LegalTransactionMandatoryFlag,
      @Semantics.booleanIndicator: true
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction  : redirected to parent I_LegalTransactionTP_2
//      _RelshpLegalTransaction
}
```
