---
name: I_IHBCONDITIONTP
description: Ihbconditiontp
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
  - pricing-condition
  - component:FIN-FSCM-PF-IHB-2CL
  - lob:Other
---
# I_IHBCONDITIONTP

**Ihbconditiontp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IHBConditionUUID` | ✓ | |  |  |  |  |
| `IHBObjectUUID` |  | |  |  |  |  |
| `IHBConditionRefUUID` |  | |  |  |  |  |
| `IHBConditionInterestType` |  | |  |  |  |  |
| `IHBConditionInterestCurrency` |  | |  |  |  |  |
| `IHBConditionInterestCalcMethod` |  | |  |  |  |  |
| `IHBConditionInterestCalcType` |  | |  |  |  |  |
| `IHBBankArea` |  | |  |  |  |  |
| `IHBConditionFixedRate` |  | |  |  |  |  |
| `IHBConditionRefRateCode` |  | |  |  |  |  |
| `IHBConditionInterestMinRate` |  | |  |  |  |  |
| `IHBConditionInterestMaxRate` |  | |  |  |  |  |
| `IHBCndnIntrstMarkUpDownRate` |  | |  |  |  |  |
| `IHBConditionFactoryCalendarID` |  | |  |  |  |  |
| `IHBCndnIntrstAdjmtPerdInDays` |  | |  |  |  |  |
| `IHBCndnIntrstLockoutPerdInDays` |  | |  |  |  |  |
| `IHBConditionInterestWeightCode` |  | |  |  |  |  |
| `IHBConditionValidFromDate` |  | |  |  |  |  |
| `IHBConditionValidToDate` |  | |  |  |  |  |
| `IHBObjectTotalChangedDateTime` |  | |  |  |  |  |
| `IHBObjectCreatedDateTime` |  | |  |  |  |  |
| `IHBObjectCreatedByUser` |  | |  |  |  |  |
| `IHBObjectChangedDateTime` |  | |  |  |  |  |
| `IHBObjectChangedByUser` |  | |  |  |  |  |
| `_IHBMasterDataObjectTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'IHB Condition - TP'
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
   semanticKey: ['IHBConditionInterestType', 'IHBConditionInterestCurrency']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
  }
  
  define view entity I_IHBConditionTP
  as projection on R_IHBConditionTP  as InHouseBankFinancialCondition
{
key IHBConditionUUID,
IHBObjectUUID,
IHBConditionRefUUID,
IHBConditionInterestType,
IHBConditionInterestCurrency,
IHBConditionInterestCalcMethod,
IHBConditionInterestCalcType,
IHBBankArea,
IHBConditionFixedRate,
IHBConditionRefRateCode,
IHBConditionInterestMinRate,
IHBConditionInterestMaxRate,
IHBCndnIntrstMarkUpDownRate,
IHBConditionFactoryCalendarID,
IHBCndnIntrstAdjmtPerdInDays,
IHBCndnIntrstLockoutPerdInDays,
IHBConditionInterestWeightCode,
IHBConditionValidFromDate,
IHBConditionValidToDate,
IHBObjectTotalChangedDateTime,
IHBObjectCreatedDateTime,
IHBObjectCreatedByUser,
IHBObjectChangedDateTime,
IHBObjectChangedByUser,
/* Associations */
 _IHBMasterDataObjectTP : redirected to parent I_IHBConditionObjectTP

}
```
