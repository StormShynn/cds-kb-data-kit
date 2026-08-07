---
name: I_IHBACCTLIMITTP
description: Ihbacctlimittp
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
# I_IHBACCTLIMITTP

**Ihbacctlimittp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IHBLimitUUID` | ✓ | |  |  |
| `IHBObjectUUID` |  | |  |  |
| `IHBLimitRefUUID` |  | |  |  |
| `IHBLimitAmount` |  | |  |  |
| `IHBLimitCurrency` |  | |  |  |
| `IHBLimitValidFromDate` |  | |  |  |
| `IHBLimitValidToDate` |  | |  |  |
| `IHBObjectTotalChangedDateTime` |  | |  |  |
| `IHBObjectCreatedDateTime` |  | |  |  |
| `IHBObjectCreatedByUser` |  | |  |  |
| `IHBObjectChangedDateTime` |  | |  |  |
| `IHBObjectChangedByUser` |  | |  |  |
| `_IHBMasterDataObjectTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'IHB Limits - TP'
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
   semanticKey: ['IHBLimitUUID']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
  }
define view entity I_IHBAcctLimitTP
  as projection on R_IHBAcctLimitTP as InHouseBankLimit
{
  key IHBLimitUUID,
  IHBObjectUUID,
  IHBLimitRefUUID,
  @Semantics.amount.currencyCode: 'IHBLimitCurrency'
  IHBLimitAmount,
  IHBLimitCurrency,
  IHBLimitValidFromDate,
  IHBLimitValidToDate,
  IHBObjectTotalChangedDateTime,
  IHBObjectCreatedDateTime,
  IHBObjectCreatedByUser,
  IHBObjectChangedDateTime,
  IHBObjectChangedByUser,

  //Composition
  
  _IHBMasterDataObjectTP : redirected to parent I_IHBAcctLimitObjectTP  
  
}
```
