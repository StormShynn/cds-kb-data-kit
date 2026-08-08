---
name: I_FRTAGRMTRATETABLEVALIDITYTP
description: "Frtagrmtratetablevaliditytp"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transactional-processing
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FRTAGRMTRATETABLEVALIDITYTP

**Frtagrmtratetablevaliditytp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateTableValidityUUID` | ✓ | |  |  |  |  |
| `TransportationRateTableUUID` |  | |  |  |  |  |
| `TransportationAgreementUUID` |  | |  |  |  |  |
| `TranspRateTblValidityCurrency` |  | |  |  |  |  |
| `TranspRateTblValdtyLfcycStatus` |  | |  |  |  |  |
| `TranspRateTblValidityStartDate` |  | |  |  |  |  |
| `TranspRateTblValidityEndDate` |  | |  |  |  |  |
| `TranspRateTblValidityPctUnit` |  | |  |  |  |  |
| `I_FreightAgreementTP` |  | |  | `FrtAgrmtRateTableValidity._FreightAgreement : redirected to I_FreightAgreementTP` |  |  |
| `I_FrtAgrmtRateTableRateTP` |  | |  | `FrtAgrmtRateTableValidity._FrtAgrmtRateTableRate : redirected to composition child I_FrtAgrmtRateTableRateTP` |  |  |
| `I_FrtAgrmtRateTableCalcRuleTP` |  | |  | `FrtAgrmtRateTableValidity._FrtAgrmtRateTableCalcRule : redirected to composition child I_FrtAgrmtRateTableCalcRuleTP` |  |  |
| `I_FreightAgreementRateTableTP` |  | |  | `FrtAgrmtRateTableValidity._FreightAgreementRateTable : redirected to parent I_FreightAgreementRateTableTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Agrmt Rate Table Validity - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FrtAgrmtRateTableValidity'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FrtAgrmtRateTableValidity_Type'
define view entity I_FrtAgrmtRateTableValidityTP
  as projection on R_FrtAgrmtRateTableValidityTP as FrtAgrmtRateTableValidity
{
  key TranspRateTableValidityUUID,
      TransportationRateTableUUID,
      TransportationAgreementUUID,
      TranspRateTblValidityCurrency,
      TranspRateTblValdtyLfcycStatus,
      TranspRateTblValidityStartDate,
      TranspRateTblValidityEndDate,
      TranspRateTblValidityPctUnit,

      //Association
      FrtAgrmtRateTableValidity._FreightAgreement          : redirected to I_FreightAgreementTP,

      //To Child
      FrtAgrmtRateTableValidity._FrtAgrmtRateTableRate     : redirected to composition child I_FrtAgrmtRateTableRateTP,
      @Semantics.valueRange.maximum: '1'
      FrtAgrmtRateTableValidity._FrtAgrmtRateTableCalcRule : redirected to composition child I_FrtAgrmtRateTableCalcRuleTP,

      //To Parent
      FrtAgrmtRateTableValidity._FreightAgreementRateTable : redirected to parent I_FreightAgreementRateTableTP
}
```
