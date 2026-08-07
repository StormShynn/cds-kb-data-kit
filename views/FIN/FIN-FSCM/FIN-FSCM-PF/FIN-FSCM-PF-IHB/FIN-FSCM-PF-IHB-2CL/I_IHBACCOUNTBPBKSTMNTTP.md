---
name: I_IHBACCOUNTBPBKSTMNTTP
description: "Ihbaccountbpbkstmnttp"
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
# I_IHBACCOUNTBPBKSTMNTTP

**Ihbaccountbpbkstmnttp**

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
| `IHBBusinessPartnerAddrNumber` |  | |  |  |  |  |
| `IHBEmailPersonNumber` |  | |  |  |  |  |
| `IHBEmailOrdinalNumber` |  | |  |  |  |  |
| `IHBBankStmntDistributionType` |  | |  |  |  |  |
| `IHBConverterOutID` |  | |  |  |  |  |
| `IHBEmailAddress` |  | |  |  |  |  |
| `IHBBankStmntIsOriglRecipient` |  | |  |  |  |  |
| `IHBAcctBkStmntIsSentWthAls` |  | |  |  |  |  |
| `IHBAccountChangedDateTime` |  | |  |  |  |  |
| `_IHBAccountTP` | | ✓ | | | | |
| `_IHBAccount` | | ✓ | | | | |
| `_IHBConverterOutID` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'IHB Account BP for Bank Statement - TP'
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
define view entity I_IHBAccountBPBkStmntTP
  as projection on R_IHBAccountBPBkStmntTP as IHBAccountBPBS  
{

key IHBBusinessPartnerUUID,
IHBBusinessPartnerRefUUID,
IHBAccountUUID,
IHBBusinessPartnerRole,
IHBBusinessPartner,
IHBBankStmntFormat,
IHBBusinessPartnerAddrNumber,
IHBEmailPersonNumber,
IHBEmailOrdinalNumber,
IHBBankStmntDistributionType,
IHBConverterOutID,
IHBEmailAddress,
IHBBankStmntIsOriglRecipient,
IHBAcctBkStmntIsSentWthAls,
IHBAccountChangedDateTime,

      //Composition
      _IHBAccountTP : redirected to parent I_IHBAccountTP,
      _IHBAccount,
      _IHBConverterOutID  
}
```
