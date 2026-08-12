---
name: I_GTEEMLFCYCCUMLTVSTSCUBE
description: "Grant Life Cyc Cumltv Sts Changes - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLFCYCCUMLTVSTSCUBE')/$value
semantic_en: "Grant Life Cyc Cumltv Sts Changes - Cube"
semantic_vi: "Grant Life Cyc Cumltv Sts Changes - Cube — CDS view giao diện dựa trên I_GteeMLfcycCumltvSts."
keywords:
  - "grant"
  - "life"
  - "cyc"
  - "cumltv"
  - "sts"
  - "changes"
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
# I_GTEEMLFCYCCUMLTVSTSCUBE

**Grant Life Cyc Cumltv Sts Changes - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLFCYCCUMLTVSTSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` | ✓ | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` | ✓ | |  |  | `DATS(8)` | Creation Date of Change Document |
| `CreationTime` | ✓ | |  |  | `TIMS(6)` | Time of Change |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` | ✓ | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `NumberOfGteeMMasterDataRecords` |  | |  | `case when LifeCycleStatus.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then LifeCycleStatus.NumberOfGteeMMasterDataRecords else 0 end` | `INT1(3)` |  |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLFCYCCUMLTVSTSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLFCYCCUMLTVSTSCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMLFECYLCUMSTSC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED


@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
          modelingPattern: #ANALYTICAL_CUBE,
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}
@EndUserText.label: 'Grant Life Cyc Cumltv Sts Changes - Cube'
define view I_GteeMLfcycCumltvStsCube
  as select from I_GteeMLfcycCumltvSts as LifeCycleStatus
    inner join   I_FiscalYearPeriod    as I_FiscalYearPeriod on  LifeCycleStatus.FiscalYearVariant =  I_FiscalYearPeriod.FiscalYearVariant
                                                             and LifeCycleStatus.FiscalYear <= I_FiscalYearPeriod.FiscalYear
                                                             and I_FiscalYearPeriod.IsSpecialPeriod != 'X'
  //                                                           and LifeCycleStatus.FiscalYearPeriod  <= I_FiscalYearPeriod.FiscalYearPeriod

{
  key LifeCycleStatus.GrantID,
  key LifeCycleStatus.ChangeDocObjectClass,
  key LifeCycleStatus.CreationDate,
  key LifeCycleStatus.CreationTime,
  key I_FiscalYearPeriod.FiscalYear,
  key I_FiscalYearPeriod.FiscalYearPeriod,
      I_FiscalYearPeriod.FiscalPeriodStartDate,
      I_FiscalYearPeriod.FiscalPeriodEndDate,
      @ObjectModel.foreignKey.association: '_GrantStatus'
      LifeCycleStatus.GrantLifecycleStatus,
      LifeCycleStatus.GrantAuthznGrp,
      LifeCycleStatus.GrantIsNotRelevantGrant,
      @ObjectModel.foreignKey.association: '_GrantChangeDocStatus'
      LifeCycleStatus.ChangeDocNewFieldValue,
      @ObjectModel.foreignKey.association: '_GrantChangeDocPreviousStatus'
      LifeCycleStatus.ChangeDocPreviousFieldValue,
      @EndUserText.label: 'Is Change Document Record'
      LifeCycleStatus.IsChangeDocument,
      @EndUserText.label: 'Number of Records'
      @Aggregation.default: #SUM
      case when LifeCycleStatus.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
      then LifeCycleStatus.NumberOfGteeMMasterDataRecords
      else 0
      end as NumberOfGteeMMasterDataRecords,
      LifeCycleStatus.FiscalYearVariant,
      LifeCycleStatus.GranteeMgmtSponsor,
      /* Associations */
      LifeCycleStatus._GrantChangeDocPreviousStatus,
      LifeCycleStatus._GrantChangeDocStatus,
      LifeCycleStatus._GrantStatus,
      LifeCycleStatus._Sponsor
}
```
