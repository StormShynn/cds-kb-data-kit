---
name: I_IHBACCOUNTBPINTRSTSCNOTIFTP
description: Ihbaccountbpintrstscnotiftp
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
# I_IHBACCOUNTBPINTRSTSCNOTIFTP

**Ihbaccountbpintrstscnotiftp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `IHBBusinessPartnerUUID` | `IHBBusinessPartnerUUID` |
| `IHBBusinessPartnerRefUUID` | `IHBBusinessPartnerRefUUID` |
| `IHBAccountUUID` | `IHBAccountUUID` |
| `IHBBusinessPartnerRole` | `IHBBusinessPartnerRole` |
| `IHBBusinessPartner` | `IHBBusinessPartner` |
| `IHBConverterOutID` | `IHBConverterOutID` |
| `IHBBankStmntFormat` | `IHBBankStmntFormat` |
| `IHBBusinessPartnerAddrNumber` | `IHBBusinessPartnerAddrNumber` |
| `IHBEmailPersonNumber` | `IHBEmailPersonNumber` |
| `IHBEmailOrdinalNumber` | `IHBEmailOrdinalNumber` |
| `IHBBankStmntDistributionType` | `IHBBankStmntDistributionType` |
| `IHBBankStmntIsOriglRecipient` | `IHBBankStmntIsOriglRecipient` |
| `IHBAccountChangedDateTime` | `IHBAccountChangedDateTime` |
| `IHBEmailAddress` | `IHBEmailAddress` |
| `_IHBAccountTP` | *Association* |
| `_IHBAccount` | *Association* |
| `_IHBConverterOutID` | *Association* |

## Source Code

```abap
@EndUserText.label: 'IHB Acct BP for Int Sc Not Proj - TP'
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
define view entity I_IHBAccountBPIntrstScNotifTP
  as projection on R_IHBAccountBPIntrstScNotifTP as IHBAccountBPISN 
  {
  key IHBBusinessPartnerUUID,
  IHBBusinessPartnerRefUUID,
  IHBAccountUUID,
  IHBBusinessPartnerRole,
  IHBBusinessPartner,
  IHBConverterOutID,
  IHBBankStmntFormat,
  IHBBusinessPartnerAddrNumber,
  IHBEmailPersonNumber,
  IHBEmailOrdinalNumber,
  IHBBankStmntDistributionType,
  IHBBankStmntIsOriglRecipient,
  IHBAccountChangedDateTime,
  IHBEmailAddress,
  
      //Composition
      _IHBAccountTP : redirected to parent I_IHBAccountTP,
      _IHBAccount,
      _IHBConverterOutID
}
```
