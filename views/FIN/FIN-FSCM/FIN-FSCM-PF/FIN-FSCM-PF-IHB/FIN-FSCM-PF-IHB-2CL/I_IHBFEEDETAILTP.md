---
name: I_IHBFEEDETAILTP
description: "Ihbfeedetailtp"
app_component: FIN-FSCM-PF-IHB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-PF-IHB-2CL
  - lob:Other
---
# I_IHBFEEDETAILTP

**Ihbfeedetailtp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IHBAcctFeeDetailUUID` | ✓ | |  |  |  |  |
| `IHBAcctFeeUUID` |  | |  |  |  |  |
| `IHBObjectUUID` |  | |  |  |  |  |
| `IHBAcctFeeRefUUID` |  | |  |  |  |  |
| `IHBAcctFeeNmbrOfEvtsScaleFrom` |  | |  |  |  |  |
| `IHBAcctFeeAmount` |  | |  |  |  |  |
| `IHBAcctFeeCurrency` |  | |  |  |  |  |
| `IHBObjectTotalChangedDateTime` |  | |  |  |  |  |
| `IHBObjectCreatedDateTime` |  | |  |  |  |  |
| `IHBObjectCreatedByUser` |  | |  |  |  |  |
| `IHBObjectChangedDateTime` |  | |  |  |  |  |
| `IHBObjectChangedByUser` |  | |  |  |  |  |
| `_IHBFeeTP` | | ✓ | | | | |
| `_IHBMasterDataObjectTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'IHB Fee Detail - TP'
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['IHBAcctFeeDetailUUID']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
  }

define view entity I_IHBFeeDetailTP
  as projection on R_IHBFeeDetailTP  as InhouseBankFeeDetail
  {
  key IHBAcctFeeDetailUUID,
  IHBAcctFeeUUID,
  IHBObjectUUID,
  IHBAcctFeeRefUUID,
  IHBAcctFeeNmbrOfEvtsScaleFrom,
  @Semantics.amount.currencyCode: 'IHBAcctFeeCurrency'
  IHBAcctFeeAmount,
  IHBAcctFeeCurrency,
  IHBObjectTotalChangedDateTime,
  IHBObjectCreatedDateTime,
  IHBObjectCreatedByUser,
  IHBObjectChangedDateTime,
  IHBObjectChangedByUser,
  /* Associations */
      _IHBFeeTP              : redirected to parent I_IHBFeeTP,
      _IHBMasterDataObjectTP : redirected to I_IHBFeeObjTP
  
  }
```
