---
name: I_PUBSECGRANTCUMLTVSTSHISTC
description: "Grant Cumulative Status - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCUMLTVSTSHISTC')/$value
semantic_en: "Grant Cumulative Status - Cube"
semantic_vi: "Grant Cumulative Status - Cube — CDS view giao diện dựa trên I_PubSecGrantCumltvStsHist."
keywords:
  - "grant"
  - "cumulative"
  - "status"
  - "cube"
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
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_PUBSECGRANTCUMLTVSTSHISTC

**Grant Cumulative Status - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCUMLTVSTSHISTC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` | ✓ | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` | ✓ | |  |  | `DATS(8)` |  |
| `CreationTime` | ✓ | |  |  | `TIMS(6)` |  |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` | ✓ | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `NumberOfGteeMMasterDataRecords` |  | |  | `case when Status.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then Status.NumberOfGteeMMasterDataRecords else 0 end` | `INT1(3)` |  |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCUMLTVSTSHISTC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCUMLTVSTSHISTC')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL
}
@EndUserText.label: 'Grant Cumulative Status - Cube'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #D,
    sizeCategory: #XXL,
    dataClass: #MIXED
  },
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
define view entity I_PubSecGrantCumltvStsHistC
  as select from I_PubSecGrantCumltvStsHist as Status
    inner join   I_FiscalYearPeriod         as I_FiscalYearPeriod on  Status.FiscalYearVariant           =  I_FiscalYearPeriod.FiscalYearVariant
                                                                  and Status.FiscalYear                  <= I_FiscalYearPeriod.FiscalYear
                                                                  and I_FiscalYearPeriod.IsSpecialPeriod != 'X'
  //                                                           and Status.FiscalYearPeriod  <= I_FiscalYearPeriod.FiscalYearPeriod

{
  key Status.GrantID,
  key Status.ChangeDocObjectClass,
      @EndUserText.label: 'Creation Date'
  key Status.CreationDate,
      @EndUserText.label: 'Creation Time'
  key Status.CreationTime,
  key I_FiscalYearPeriod.FiscalYear,
  key I_FiscalYearPeriod.FiscalYearPeriod,
      I_FiscalYearPeriod.FiscalPeriodStartDate,
      I_FiscalYearPeriod.FiscalPeriodEndDate,
      @ObjectModel.foreignKey.association: '_GrantStatus'
      Status.GrantStatus,
      Status.GrantAuthznGrp,
      Status.GrantIsNotRelevantGrant,
      @ObjectModel.foreignKey.association: '_GrantChangeDocStatus'
      Status.ChangeDocNewFieldValue,
      @ObjectModel.foreignKey.association: '_GrantChangeDocPreviousStatus'
      Status.ChangeDocPreviousFieldValue,
      @EndUserText.label: 'Is Change Document Record'
      Status.IsChangeDocument,
      @EndUserText.label: 'Number of Records'
      @Aggregation.default: #SUM
      case when Status.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
      then Status.NumberOfGteeMMasterDataRecords
      else 0
      end as NumberOfGteeMMasterDataRecords,
      Status.FiscalYearVariant,
      Status.GranteeMgmtSponsor,
      Status.GrantLifecycleStatus,
      /* Associations */
      Status._GrantChangeDocPreviousStatus,
      Status._GrantChangeDocStatus,
      Status._GrantStatus,
      Status._Sponsor
}
where Status.GrantStatus = Status.ChangeDocNewFieldValue
```
