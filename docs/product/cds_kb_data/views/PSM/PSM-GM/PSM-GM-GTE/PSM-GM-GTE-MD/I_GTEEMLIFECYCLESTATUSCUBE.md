---
name: I_GTEEMLIFECYCLESTATUSCUBE
description: "Grant Life Cycle Status Changes - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLIFECYCLESTATUSCUBE')/$value
semantic_en: "Grant Life Cycle Status Changes - Cube"
semantic_vi: "Grant Life Cycle Status Changes - Cube — CDS view giao diện dựa trên I_Grant."
keywords:
  - "grant"
  - "life"
  - "cycle"
  - "status"
  - "changes"
  - "cube"
  - "change"
  - "object"
  - "class"
  - "creation"
  - "date"
  - "time"
  - "lifecycle"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GTEEMLIFECYCLESTATUSCUBE

**Grant Life Cycle Status Changes - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLIFECYCLESTATUSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` | ✓ | |  | `case when GrantLifeCycleStatus.ChangeDocObjectClass is not null then GrantLifeCycleStatus.ChangeDocObjectClass else 'GMGRANTCORE' end` | `CHAR(15)` | Object Class |
| `CreationDate` | ✓ | |  | `case when GrantLifeCycleStatus.CreationDate is null then Grant.CreationDate when GrantLifeCycleStatus.ChangeDocNewFieldValue = 'I5613' then Grant.CreationDate else GrantLifeCycleStatus.CreationDate end` | `DATS(8)` | Creation Date of Change Document |
| `CreationTime` | ✓ | |  | `case when GrantLifeCycleStatus.CreationTime is null then Grant.CreationTime when GrantLifeCycleStatus.ChangeDocNewFieldValue = 'I5613' then Grant.CreationTime else GrantLifeCycleStatus.CreationTime end` | `TIMS(6)` | Time of Change |
| `GrantLifecycleStatus` | ✓ | |  |  | `CHAR(5)` | Lifecycle Status |
| `ChangeDocNewFieldValue` | ✓ | |  | `case when GrantLifeCycleStatus.ChangeDocObjectClass is not null then GrantLifeCycleStatus.ChangeDocNewFieldValue else Grant.GrantLifecycleStatus end` | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` | ✓ | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  | `case when GrantLifeCycleStatus.ChangeDocObjectClass is not null then 1 else 0 end` | `INT1(3)` |  |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `NumberOfGteeMMasterDataRecords` |  | |  | `1` | `INT1(3)` |  |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `_GrantStatus` | | ✓ | | | | |
| `_GrantChangeDocStatus` | | ✓ | | | | |
| `_GrantChangeDocPreviousStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GrantStatus` | `I_GrantStatus` | [0..1] |
| `_GrantChangeDocStatus` | `I_GrantStatus` | [0..1] |
| `_GrantChangeDocPreviousStatus` | `I_GrantStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLIFECYCLESTATUSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMLIFECYCLESTATUSCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMLIFECYLSTSCBE'
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
@EndUserText.label: 'Grant Life Cycle Status Changes - Cube'
define view I_GteeMLifeCycleStatusCube
  as select from            I_Grant Grant
    left outer to many join I_GteeMLifeCycleStatus GrantLifeCycleStatus on GrantLifeCycleStatus.GrantID = Grant.GrantID
  association [0..1] to I_GrantStatus as _GrantStatus                  on $projection.GrantLifecycleStatus = _GrantStatus.SystemStatus
  association [0..1] to I_GrantStatus as _GrantChangeDocStatus         on $projection.ChangeDocNewFieldValue = _GrantChangeDocStatus.SystemStatus
  association [0..1] to I_GrantStatus as _GrantChangeDocPreviousStatus on $projection.ChangeDocPreviousFieldValue = _GrantChangeDocPreviousStatus.SystemStatus
{
  key        Grant.GrantID,
  key        case when GrantLifeCycleStatus.ChangeDocObjectClass is not null then
              GrantLifeCycleStatus.ChangeDocObjectClass
              else 'GMGRANTCORE' end                                                                                                                                                                                   as ChangeDocObjectClass,
  key        case when GrantLifeCycleStatus.CreationDate is null then Grant.CreationDate when GrantLifeCycleStatus.ChangeDocNewFieldValue = 'I5613' then Grant.CreationDate else GrantLifeCycleStatus.CreationDate end as CreationDate,
  key        case when GrantLifeCycleStatus.CreationTime is null then Grant.CreationTime when GrantLifeCycleStatus.ChangeDocNewFieldValue = 'I5613' then Grant.CreationTime else GrantLifeCycleStatus.CreationTime end as CreationTime,

             @Analytics.internalName: #LOCAL
             @ObjectModel.foreignKey.association: '_GrantStatus'
  key        Grant.GrantLifecycleStatus,
             @ObjectModel.foreignKey.association: '_GrantChangeDocStatus'
  key        case when GrantLifeCycleStatus.ChangeDocObjectClass is not null then
            GrantLifeCycleStatus.ChangeDocNewFieldValue
          else
            Grant.GrantLifecycleStatus
          end                                                                                                                                                                                                          as ChangeDocNewFieldValue,
             @ObjectModel.foreignKey.association: '_GrantChangeDocPreviousStatus'
  key        GrantLifeCycleStatus.ChangeDocPreviousFieldValue,
             @EndUserText.label: 'Is Change Document Record'
             case when GrantLifeCycleStatus.ChangeDocObjectClass is not null then
               1
             else
               0
             end                                                                                                                                                                                                       as IsChangeDocument,
             Grant.GrantAuthznGrp,
             Grant.GrantIsNotRelevantGrant,
             @EndUserText.label: 'Number of Records'
             @DefaultAggregation: #SUM
             1                                                                                                                                                                                                         as NumberOfGteeMMasterDataRecords,
             Grant._CompanyCode.FiscalYearVariant,
             Grant.GranteeMgmtSponsor,
             Grant._Sponsor,
             _GrantStatus,
             _GrantChangeDocStatus,
             _GrantChangeDocPreviousStatus
}
where
  Grant.GrantIsNotRelevantGrant <> 'X'
```
