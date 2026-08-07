---
name: I_TRANSPRATETABLEVALIDITYTP
description: Transpratetablevaliditytp
app_component: TM-MD-CM-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - transactional-processing
  - component:TM-MD-CM-RA-2CL
  - lob:Other
---
# I_TRANSPRATETABLEVALIDITYTP

**Transpratetablevaliditytp**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspRateTableValidityUUID` | ✓ | |  |  |
| `TransportationRateTableUUID` |  | |  |  |
| `TranspRateTblValidityCurrency` |  | |  |  |
| `TranspRateTblValdtyLfcycStatus` |  | |  |  |
| `TranspRateTblValidityEndDate` |  | |  |  |
| `TranspRateTblValidityStartDate` |  | |  |  |
| `TranspRateTblValidityPctUnit` |  | |  |  |
| `I_TransportationRateTableTP` |  | |  | `TranspRateTableValidity._TransportationRateTable : redirected to parent I_TransportationRateTableTP` |
| `I_TranspRateTableCalcRuleTP` |  | |  | `TranspRateTableValidity._TranspRateTableCalcRule : redirected to composition child I_TranspRateTableCalcRuleTP` |
| `I_TranspRateTableRateTP` |  | |  | `TranspRateTableValidity._TranspRateTableRate : redirected to composition child I_TranspRateTableRateTP` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Rate Table Validity Period - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name: 'TranspRateTableValidity'
 }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'TranspRateTableValidity_Type'
define view entity I_TranspRateTableValidityTP
  as projection on R_TranspRateTableValidityTP as TranspRateTableValidity
{
  key TranspRateTableValidityUUID,
      TransportationRateTableUUID,
      TranspRateTblValidityCurrency,
      TranspRateTblValdtyLfcycStatus,
      TranspRateTblValidityEndDate,
      TranspRateTblValidityStartDate,
      TranspRateTblValidityPctUnit,
     
     
      TranspRateTableValidity._TransportationRateTable   : redirected to parent I_TransportationRateTableTP,
      @Semantics.valueRange.maximum: '1'
      TranspRateTableValidity._TranspRateTableCalcRule   : redirected to composition child I_TranspRateTableCalcRuleTP,
      TranspRateTableValidity._TranspRateTableRate       : redirected to composition child I_TranspRateTableRateTP

}
```
