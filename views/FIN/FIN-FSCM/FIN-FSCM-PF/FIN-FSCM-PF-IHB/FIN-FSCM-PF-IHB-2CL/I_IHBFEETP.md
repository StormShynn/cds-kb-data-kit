---
name: I_IHBFEETP
description: Ihbfeetp
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
# I_IHBFEETP

**Ihbfeetp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IHBAcctFeeUUID` | ✓ | |  |  |
| `IHBObjectUUID` |  | |  |  |
| `IHBAcctFeeRefUUID` |  | |  |  |
| `IHBAcctFeeType` |  | |  |  |
| `IHBAcctFeeIsScaleFlag` |  | |  |  |
| `IHBAcctFeeScaleType` |  | |  |  |
| `IHBAcctFeeAmount` |  | |  |  |
| `IHBAcctFeeCurrency` |  | |  |  |
| `IHBAcctFeeValidFromDate` |  | |  |  |
| `IHBAcctFeeValidToDate` |  | |  |  |
| `IHBObjectTotalChangedDateTime` |  | |  |  |
| `IHBObjectCreatedDateTime` |  | |  |  |
| `IHBObjectCreatedByUser` |  | |  |  |
| `IHBObjectChangedDateTime` |  | |  |  |
| `IHBObjectChangedByUser` |  | |  |  |
| `_IHBFeeDetailTP` | | ✓ | | |
| `_IHBFeeScaleType` | | ✓ | | |
| `_IHBFeeType` | | ✓ | | |
| `_IHBMasterDataObjectTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'IHB Fee Item - TP'
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
   semanticKey: ['IHBAcctFeeType']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
  }

define view entity I_IHBFeeTP
  as projection on R_IHBFeeTP  as InHouseBankFee
{
key IHBAcctFeeUUID,
IHBObjectUUID,
IHBAcctFeeRefUUID,
IHBAcctFeeType,
IHBAcctFeeIsScaleFlag,
IHBAcctFeeScaleType,
@Semantics.amount.currencyCode: 'IHBAcctFeeCurrency'
IHBAcctFeeAmount,
IHBAcctFeeCurrency,
IHBAcctFeeValidFromDate,
IHBAcctFeeValidToDate,
IHBObjectTotalChangedDateTime,
IHBObjectCreatedDateTime,
IHBObjectCreatedByUser,
IHBObjectChangedDateTime,
IHBObjectChangedByUser,
/* Associations */
_IHBFeeDetailTP    : redirected to composition child I_IHBFeeDetailTP,
_IHBFeeScaleType,
_IHBFeeType,
_IHBMasterDataObjectTP : redirected to parent I_IHBFeeObjTP

}
```
