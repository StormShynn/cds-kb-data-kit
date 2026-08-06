---
name: I_FREIGHTAGREEMENTRATETABLETP
description: Freightagreementratetabletp
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
  - freight
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FREIGHTAGREEMENTRATETABLETP

**Freightagreementratetabletp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationRateTableUUID` | `TransportationRateTableUUID` |
| `TranspCalculationSheetUUID` | `TranspCalculationSheetUUID` |
| `TranspCalcSheetItemUUID` | `TranspCalcSheetItemUUID` |
| `TransportationAgreementUUID` | `TransportationAgreementUUID` |
| `TranspRateTableID` | `TranspRateTableID` |
| `TranspRateTableDesc` | `TranspRateTableDesc` |
| `TranspRateTableValueType` | `TranspRateTableValueType` |
| `TranspChargeType` | `TranspChargeType` |
| `TranspRateTableSignType` | `TranspRateTableSignType` |
| `TranspRateTableTimeZone` | `TranspRateTableTimeZone` |
| `I_FreightAgreementTP` | `FreightAgreementRateTable._FreightAgreement : redirected to I_FreightAgreementTP` |
| `I_FrtAgrmtCalcSheetItemTP` | `FreightAgreementRateTable._FrtAgrmtCalcSheetItem : redirected to parent I_FrtAgrmtCalcSheetItemTP` |
| `I_FrtAgrmtRateTableScaleRefTP` | `FreightAgreementRateTable._FrtAgrmtRateTableScaleRef : redirected to composition child I_FrtAgrmtRateTableScaleRefTP` |
| `I_FrtAgrmtRateTableValidityTP` | `FreightAgreementRateTable._FrtAgrmtRateTableValidity : redirected to composition child I_FrtAgrmtRateTableValidityTP` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Freight Agreement Rate Table - TP'
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FreightAgreementRateTable'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FreightAgreementRateTable_Type'
define view entity I_FreightAgreementRateTableTP
  as projection on R_FreightAgreementRateTableTP as FreightAgreementRateTable
{
  key TransportationRateTableUUID,
      TranspCalculationSheetUUID,
      TranspCalcSheetItemUUID,
      TransportationAgreementUUID,
      TranspRateTableID,
      TranspRateTableDesc,
      TranspRateTableValueType,
      TranspChargeType,
      TranspRateTableSignType,
      TranspRateTableTimeZone,

      //Association
      FreightAgreementRateTable._FreightAgreement          : redirected to I_FreightAgreementTP,

      //To Parent
      FreightAgreementRateTable._FrtAgrmtCalcSheetItem     : redirected to parent I_FrtAgrmtCalcSheetItemTP,

      //To Child
      FreightAgreementRateTable._FrtAgrmtRateTableScaleRef : redirected to composition child I_FrtAgrmtRateTableScaleRefTP,
      FreightAgreementRateTable._FrtAgrmtRateTableValidity : redirected to composition child I_FrtAgrmtRateTableValidityTP
}
```
