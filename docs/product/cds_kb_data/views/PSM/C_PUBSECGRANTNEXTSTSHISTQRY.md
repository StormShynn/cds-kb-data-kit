---
name: C_PUBSECGRANTNEXTSTSHISTQRY
description: "Grant Next Status History - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTNEXTSTSHISTQRY')/$value
semantic_en: "Grant Next Status History - Query"
semantic_vi: "Grant Next Status History - Query — CDS view tiêu dùng dựa trên Grant Next Status History - Query."
keywords:
  - "grant"
  - "next"
  - "status"
  - "history"
  - "query"
  - "change"
  - "object"
  - "class"
  - "creation"
  - "date"
  - "time"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_PUBSECGRANTNEXTSTSHISTQRY

**Grant Next Status History - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTNEXTSTSHISTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` |  | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `CreationTime` |  | |  |  | `TIMS(6)` |  |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GrantToNextStatusInPercent` |  | |  |  | `DECF(34)` |  |
| `GrantPreviousStatusInPercent` |  | |  |  | `DECF(34)` |  |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `_GrantChangeDocPreviousStatus` | | ✓ | | | | |
| `_GrantChangeDocStatus` | | ✓ | | | | |
| `_GrantStatus` | | ✓ | | | | |
| `_Sponsor` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTNEXTSTSHISTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTNEXTSTSHISTQRY')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@Analytics: {
     internalName: #LOCAL,
     settings: {
         maxProcessingEffort: #HIGH
     }
}
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Grant Next Status History - Query'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XXL,
  dataClass: #MIXED
}
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@VDM.viewType: #CONSUMPTION
define transient view entity C_PubSecGrantNextStsHistQry
  provider contract analytical_query
  as projection on I_PubSecGrantStsHistoryCube
{
  GrantID,
  ChangeDocObjectClass,
  @EndUserText.label: 'Creation Date'
  CreationDate,
  @EndUserText.label: 'Creation Time'
  CreationTime,
  GrantStatus,
  ChangeDocNewFieldValue,
  ChangeDocPreviousFieldValue,
  @EndUserText.label: 'Is change document'
  IsChangeDocument,
  GrantAuthznGrp,
  GrantIsNotRelevantGrant,
  @EndUserText.label: 'Number of Grants'
  NumberOfGteeMMasterDataRecords,
  @EndUserText.label: 'Grant moved to next status in percentage'
  GrantToNextStatusInPercent,
  @EndUserText.label: 'Grant from previous status in percentage'
  GrantPreviousStatusInPercent,
  GranteeMgmtSponsor,
  GrantLifecycleStatus,
  /* Associations */
  _GrantChangeDocPreviousStatus,
  _GrantChangeDocStatus,
  _GrantStatus,
  _Sponsor
}
```
