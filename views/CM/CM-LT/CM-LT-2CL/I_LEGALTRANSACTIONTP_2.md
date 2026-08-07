---
name: I_LEGALTRANSACTIONTP_2
description: Legaltransactiontp 2
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
# I_LEGALTRANSACTIONTP_2

**Legaltransactiontp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionUUID` | ✓ | |  |  |  |  |
| `LegalTransaction` |  | |  |  |  |  |
| `LegalTransactionTitle` |  | |  |  |  |  |
| `LglCntntMLanguage` |  | |  |  |  |  |
| `LegalTransactionHealth` |  | |  |  |  |  |
| `LglCntntMContextUUID` |  | |  |  |  |  |
| `LglCntntMProfile` |  | |  |  |  |  |
| `LegalTransactionSource` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `LglCntntMCreatedUTCDateTime` |  | |  |  |  |  |
| `LglCntntMCreatedByUser` |  | |  |  |  |  |
| `LglCntntMChangedUTCDateTime` |  | |  |  |  |  |
| `LglCntntMChangedByUser` |  | |  |  |  |  |
| `LglCntntMGovLaw` |  | |  |  |  |  |
| `LglTransAccessLvl` |  | |  |  |  |  |
| `LglCntntMMainOrgCoCode` |  | |  |  |  |  |
| `LglCntntMMainOrgSalesOrg` |  | |  |  |  |  |
| `LglCntntMMainOrgPurOrg` |  | |  |  |  |  |
| `LglCntntMIntegrationType` |  | |  |  |  |  |
| `_LegalTransCategoryGroup` | | ✓ | | | | |
| `_LegalTransDate` | | ✓ | | | | |
| `_LegalTransDocLink` | | ✓ | | | | |
| `_LegalTransEntity` | | ✓ | | | | |
| `_LegalTransExternalContact` | | ✓ | | | | |
| `_LegalTransInternalContact` | | ✓ | | | | |
| `_LegalTransLinkedObjects` | | ✓ | | | | |
| `_LegalTransRelationship` | | ✓ | | | | |
| `_LegalTransRnwlAndTermn` | | ✓ | | | | |
| `_LegalTransactionReminder` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Legal Transactions - TP'
@ObjectModel: {
  usageType: {
    sizeCategory: #L,
    serviceQuality: #C,
    dataClass:#TRANSACTIONAL
  },
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@ObjectModel.sapObjectNodeType.name:'LegalTransaction'
@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define root view entity I_LegalTransactionTP_2
  provider contract transactional_interface
  as projection on R_LegalTransactionTP as LegalTransaction
{
  key LegalTransactionUUID,
      LegalTransaction,
      LegalTransactionTitle,
      LglCntntMLanguage,
      LegalTransactionHealth,
      LglCntntMContextUUID,
      LglCntntMProfile,
      LegalTransactionSource,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      LglCntntMCreatedUTCDateTime,
      LglCntntMCreatedByUser,
      LglCntntMChangedUTCDateTime,
      LglCntntMChangedByUser,
      LglCntntMGovLaw,
      LglTransAccessLvl,
      LglCntntMMainOrgCoCode,
      LglCntntMMainOrgSalesOrg,
      LglCntntMMainOrgPurOrg,
      LglCntntMIntegrationType,
      /* Associations */
      _LegalTransCategoryGroup   : redirected to composition child I_LegalTransCategoryGroupTP_2,
      _LegalTransDate            : redirected to composition child I_LegalTransDateTP_2,
      _LegalTransDocLink         : redirected to composition child I_LegalTransDocLinkTP_2,
      _LegalTransEntity          : redirected to composition child I_LegalTransEntityTP_2,
      _LegalTransExternalContact : redirected to composition child I_LegalTransExtContactTP_2,
      _LegalTransInternalContact : redirected to composition child I_LegalTransIntContactTP_2,
      _LegalTransLinkedObjects   : redirected to composition child I_LegalTransLinkedObjectsTP_2,
      _LegalTransRelationship    : redirected to composition child I_LegalTransRelationshipTP_2,
      _LegalTransRnwlAndTermn    : redirected to composition child I_LegalTransRnwlAndTermnTP_2,
      _LegalTransactionReminder  : redirected to composition child I_LegalTransactionReminderTP_2
}
```
