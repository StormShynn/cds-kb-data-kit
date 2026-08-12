---
name: I_IHBACCOUNTBPBALNOTIFTP
description: "Ihbaccountbpbalnotiftp"
app_component: FIN-FSCM-PF-IHB-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_IHBACCOUNTBPBALNOTIFTP

**Ihbaccountbpbalnotiftp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IHBBusinessPartnerUUID` | ✓ | |  |  |  |  |
| `IHBBusinessPartnerRefUUID` |  | |  |  |  |  |
| `IHBAccountUUID` |  | |  |  |  |  |
| `IHBBusinessPartnerRole` |  | |  |  |  |  |
| `IHBBusinessPartner` |  | |  |  |  |  |
| `IHBBankStmntFormat` |  | |  |  |  |  |
| `IHBConverterOutID` |  | |  |  |  |  |
| `IHBBusinessPartnerAddrNumber` |  | |  |  |  |  |
| `IHBEmailPersonNumber` |  | |  |  |  |  |
| `IHBEmailOrdinalNumber` |  | |  |  |  |  |
| `IHBBankStmntDistributionType` |  | |  |  |  |  |
| `IHBAccountChangedDateTime` |  | |  |  |  |  |
| `IHBEmailAddress` |  | |  |  |  |  |
| `_IHBAccountTP` | | ✓ | | | | |
| `_IHBAccount` | | ✓ | | | | |
| `_IHBConverterOutID` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'IHB Acct BP for Balance Notif Proj  - TP'
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
   semanticKey: ['IHBBusinessPartnerRole', 'IHBBusinessPartner']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}


define view entity I_IHBAccountBPBalNotifTP 
as projection on R_IHBAccountBPBalNotifTP

{
  key IHBBusinessPartnerUUID,
  IHBBusinessPartnerRefUUID,
  IHBAccountUUID,
  IHBBusinessPartnerRole,
  IHBBusinessPartner,
  IHBBankStmntFormat,
  IHBConverterOutID,
  IHBBusinessPartnerAddrNumber,
  IHBEmailPersonNumber,
  IHBEmailOrdinalNumber,
  IHBBankStmntDistributionType,
  IHBAccountChangedDateTime,
  IHBEmailAddress,
  
      //Composition
      _IHBAccountTP : redirected to parent I_IHBAccountTP,
      _IHBAccount,
      _IHBConverterOutID  
}
```
