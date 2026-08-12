---
name: C_PUBSECGRANTCUMLTVSTSHISTQ
description: "Grant Cumulative Status - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCUMLTVSTSHISTQ')/$value
semantic_en: "Grant Cumulative Status - Query"
semantic_vi: "Grant Cumulative Status - Query — CDS view tiêu dùng dựa trên Grant Cumulative Status - Query."
keywords:
  - "grant"
  - "cumulative"
  - "status"
  - "query"
  - "change"
  - "object"
  - "class"
  - "creation"
  - "date"
  - "time"
  - "fiscal"
  - "year"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_PUBSECGRANTCUMLTVSTSHISTQ

**Grant Cumulative Status - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCUMLTVSTSHISTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` |  | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `CreationTime` |  | |  |  | `TIMS(6)` |  |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `_GrantChangeDocPreviousStatus` | | ✓ | | | | |
| `_GrantChangeDocStatus` | | ✓ | | | | |
| `_GrantStatus` | | ✓ | | | | |
| `_Sponsor` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCUMLTVSTSHISTQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCUMLTVSTSHISTQ')/$value)*

```abap
@EndUserText.label: 'Grant Cumulative Status - Query'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@Analytics: {
     internalName: #LOCAL,
     settings: {
         maxProcessingEffort: #HIGH
     }
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XXL,
  dataClass: #MIXED
}
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@VDM.viewType: #CONSUMPTION
define transient view entity C_PubSecGrantCumltvStsHistQ
  provider contract analytical_query
  as projection on I_PubSecGrantCumltvStsHistC
{
  GrantID,
  ChangeDocObjectClass,
  @EndUserText.label: 'Creation Date'
  CreationDate,
  @EndUserText.label: 'Creation Time'
  CreationTime,
  FiscalYear,
  FiscalYearPeriod,
  FiscalPeriodStartDate,
  FiscalPeriodEndDate,
  GrantStatus,
  GrantAuthznGrp,
  GrantIsNotRelevantGrant,
  ChangeDocNewFieldValue,
  ChangeDocPreviousFieldValue,
  @EndUserText.label: 'Is change document'
  IsChangeDocument,
  @EndUserText.label: 'Number of Grants'
  NumberOfGteeMMasterDataRecords,
  FiscalYearVariant,
  GranteeMgmtSponsor,
  /* Associations */
  _GrantChangeDocPreviousStatus,
  _GrantChangeDocStatus,
  _GrantStatus,
  _Sponsor
}
```
