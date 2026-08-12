---
name: C_CNDNCONTRSETTLMTCALDP
description: "Condition Contract Settlement Calendar"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRSETTLMTCALDP')/$value
semantic_en: "Condition Contract Settlement Calendar"
semantic_vi: "Condition Contract Settlement Calendar — CDS view tiêu dùng dựa trên R_CndnContrSettlmtCal."
keywords:
  - "condition"
  - "contract"
  - "settlement"
  - "calendar"
  - "settlmt"
  - "date"
  - "sequential"
tags:
  - LO
  - component:LO-GT-CHB
  - consumption-view
  - contract
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# C_CNDNCONTRSETTLMTCALDP

**Condition Contract Settlement Calendar**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRSETTLMTCALDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `SettlmtDate` | ✓ | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `SettlmtDateSequentialID` | ✓ | |  |  | `NUMC(1)` | Settlement Date - Sequential ID |
| `SettlmtDateCat` |  | |  |  | `CHAR(1)` | Rebates: Settlement Date Type |
| `RefSettlmtDate` |  | |  |  | `DATS(8)` | Reference Date for a Delta Settlement |
| `RefSettlmtDateSequentialID` |  | |  |  | `NUMC(1)` | Reference Settlement Date - Sequential ID |
| `SettlmtExecutionDate` |  | |  |  | `DATS(8)` | Settlement Execution Date |
| `SettlementFixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `BusVolDateFrom` |  | |  |  | `DATS(8)` | Business Volume Date From |
| `BusVolDateTo` |  | |  |  | `DATS(8)` | Business Volume Date To |
| `SettlmtDateUsage` |  | |  |  | `CHAR(1)` | Settlement Date Usage |
| `CndnContrCalItemUUID` |  | |  |  | `RAW(16)` | Condition Contract: Settlement Calendar item GUID |
| `CndnContrSourceCalItemUUID` |  | |  |  | `RAW(16)` | External Calendar GUID |
| `CndnContrSemanticCode` |  | |  |  | `NUMC(4)` | Semantic Type |
| `_ConditionContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionContract` | `C_ConditionContractDP` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRSETTLMTCALDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRSETTLMTCALDP')/$value)*

```abap
@EndUserText.label: 'Condition Contract Settlement Calendar'
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [
    '_ConditionContract'
  ]
}
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'CndnContrSettlementCalendar',
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
  usageType: {
    serviceQuality: #A,
    dataClass: #TRANSACTIONAL,
    sizeCategory: #XXL
  }
}
@VDM.viewType: #CONSUMPTION
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}

define view entity C_CndnContrSettlmtCalDP
  as select from R_CndnContrSettlmtCal as SettlementCalendar

  association [1..1] to C_ConditionContractDP as _ConditionContract on $projection.ConditionContract = _ConditionContract.ConditionContract

{
  key ConditionContract,

  key SettlmtDate,

  key SettlmtDateSequentialID,

      SettlmtDateCat,

      RefSettlmtDate,

      RefSettlmtDateSequentialID,

      SettlmtExecutionDate,

      SettlementFixedValueDate,

      BusVolDateFrom,

      BusVolDateTo,

      SettlmtDateUsage,

      CndnContrCalItemUUID,

      CndnContrSourceCalItemUUID,

      CndnContrSemanticCode,
      
      /* Associations */
      _ConditionContract
}
```
