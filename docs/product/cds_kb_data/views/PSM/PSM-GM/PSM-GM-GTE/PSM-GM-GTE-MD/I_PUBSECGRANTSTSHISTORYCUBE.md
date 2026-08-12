---
name: I_PUBSECGRANTSTSHISTORYCUBE
description: "Grant Status History - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTSTSHISTORYCUBE')/$value
semantic_en: "Grant Status History - Cube"
semantic_vi: "Grant Status History - Cube — CDS view giao diện dựa trên I_PubSecGrantStatusHistory."
keywords:
  - "grant"
  - "status"
  - "history"
  - "cube"
  - "change"
  - "object"
  - "class"
  - "creation"
  - "date"
  - "time"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_PUBSECGRANTSTSHISTORYCUBE

**Grant Status History - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTSTSHISTORYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` | ✓ | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` | ✓ | |  |  | `DATS(8)` |  |
| `CreationTime` | ✓ | |  |  | `TIMS(6)` |  |
| `GrantStatus` | ✓ | |  |  | `CHAR(5)` | Grant Status |
| `ChangeDocNewFieldValue` | ✓ | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` | ✓ | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GrantToNextStatusInPercent` |  | |  | `(cast (NumberOfGteeMMasterDataRecords as abap.dec( 8, 2 )) / cast (_GrantStatusCount.NumberOfGteeMMasterDataRecords as abap.dec( 8, 2 )))` | `DECF(34)` |  |
| `GrantPreviousStatusInPercent` |  | |  | `(cast (NumberOfGteeMMasterDataRecords as abap.dec( 8, 2 )) / cast (_GrantPrevStatusCount.NumberOfGteeMMasterDataRecords as abap.dec( 8, 2 )))` | `DECF(34)` |  |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `_GrantChangeDocPreviousStatus` | | ✓ | | | | |
| `_GrantChangeDocStatus` | | ✓ | | | | |
| `_GrantStatus` | | ✓ | | | | |
| `_Sponsor` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GrantStatusCount` | `I_PubSecGrantNextStatusCount` | [0..1] |
| `_GrantPrevStatusCount` | `I_PubSecGrantPrevStatusCount` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTSTSHISTORYCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTSTSHISTORYCUBE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL
}
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Grant Status History - Cube'
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
define view entity I_PubSecGrantStsHistoryCube
  as select from I_PubSecGrantStatusHistory as GrantStatusHistory
  association [0..1] to I_PubSecGrantNextStatusCount as _GrantStatusCount     on  $projection.ChangeDocNewFieldValue = _GrantStatusCount.ChangeDocNewFieldValue
  association [0..1] to I_PubSecGrantPrevStatusCount as _GrantPrevStatusCount on  $projection.ChangeDocPreviousFieldValue = _GrantPrevStatusCount.ChangeDocPreviousFieldValue
{
  key GrantID,
  key ChangeDocObjectClass,
      @EndUserText.label: 'Creation Date'
  key CreationDate,
      @EndUserText.label: 'Creation Time'
  key CreationTime,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantStatus'
  key GrantStatusHistory.GrantStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantChangeDocStatus'
  key GrantStatusHistory.ChangeDocNewFieldValue,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantChangeDocPreviousStatus'
  key ChangeDocPreviousFieldValue,
      @EndUserText.label: 'Is change document'
      IsChangeDocument,
      GrantAuthznGrp,
      GrantIsNotRelevantGrant,
      @Aggregation.default : #SUM
      @EndUserText.label: 'Number of Grants'
      NumberOfGteeMMasterDataRecords,
      @Aggregation.default : #SUM
      @AnalyticsDetails.query.decimals: 2
      @EndUserText.label: 'Grant moved to next status in percentage'
      (cast (NumberOfGteeMMasterDataRecords as abap.dec( 8, 2 )) / cast (_GrantStatusCount.NumberOfGteeMMasterDataRecords as abap.dec( 8, 2 )))     as GrantToNextStatusInPercent,
      //_GrantStatusCount.NumberOfGteeMMasterDataRecords                                                                                            as GrantToNextStatusInPercent,
      @Aggregation.default : #SUM
      @AnalyticsDetails.query.decimals: 2
      @EndUserText.label: 'Grant from previous status in percentage'
      (cast (NumberOfGteeMMasterDataRecords as abap.dec( 8, 2 )) / cast (_GrantPrevStatusCount.NumberOfGteeMMasterDataRecords as abap.dec( 8, 2 ))) as GrantPreviousStatusInPercent,
      //_GrantPrevStatusCount.NumberOfGteeMMasterDataRecords                                                                                    as GrantPreviousStatusInPercent,
      GranteeMgmtSponsor,
      GrantLifecycleStatus,
      /* Associations */
      _GrantChangeDocPreviousStatus,
      _GrantChangeDocStatus,
      _GrantStatus,
      _Sponsor
}
```
