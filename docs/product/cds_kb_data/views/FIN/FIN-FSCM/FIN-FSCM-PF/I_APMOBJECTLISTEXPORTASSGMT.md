---
name: I_APMOBJECTLISTEXPORTASSGMT
description: "Object list export assignment"
app_component: FIN-FSCM-PF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLISTEXPORTASSGMT')/$value
semantic_en: "Object list export assignment"
semantic_vi: "Object list export assignment — CDS view giao diện dựa trên I_APMObjectRelation."
keywords:
  - "object"
  - "list"
  - "export"
  - "assignment"
  - "relation"
  - "clearing"
  - "area"
  - "category"
  - "date"
  - "number"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-PF
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - lob:finance
---
# I_APMOBJECTLISTEXPORTASSGMT

**Object list export assignment**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLISTEXPORTASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `APMObjectRelationUUID` | ✓ | |  |  | `RAW(16)` | Globally Unique Identifier |
| `ClearingArea` |  | |  |  | `CHAR(6)` | Clearing Area |
| `APMObjectCategory` |  | |  |  | `CHAR(2)` | Object Category |
| `APMObjectDate` |  | |  |  | `DATS(8)` | Object Date |
| `APMObjectNumber` |  | |  |  | `NUMC(12)` | Object Number |
| `APMObjectIdExtended` |  | |  |  | `CHAR(35)` | Additional Object ID |
| `APMObjectExtendedReference` |  | |  |  | `CHAR(120)` | Extended data reference |
| `APMObjectRelationCode` |  | |  |  | `CHAR(2)` | Business Object Relation Indicator |
| `APMRelatedObjectCategory` |  | |  |  | `CHAR(2)` | Object Category |
| `RelatedClearingArea` |  | |  |  | `CHAR(6)` | Clearing Area |
| `APMRelatedObjectDate` |  | |  |  | `DATS(8)` | Object Date |
| `APMRelatedObjectNumber` |  | |  |  | `NUMC(12)` | Object Number |
| `APMRelatedObjectIdExtended` |  | |  |  | `CHAR(35)` | Additional Object ID |
| `APMRelatedObjectExtendedRef` |  | |  |  | `CHAR(120)` | Extended data reference |
| `APMExternalSystemCode` |  | |  |  | `CHAR(3)` | External Components Identification |
| `APMObjectRelationState` |  | |  |  | `CHAR(2)` | Relation State of Business Objects |
| `APMProcessUUID` |  | |  |  | `RAW(16)` | Unique Process Identifier |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLISTEXPORTASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLISTEXPORTASSGMT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Object list export assignment'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
define view entity I_APMObjectListExportAssgmt
  as select from I_APMObjectRelation
{
  key APMObjectRelationUUID,
      ClearingArea,
      APMObjectCategory,
      APMObjectDate,
      APMObjectNumber,
      APMObjectIdExtended,
      APMObjectExtendedReference,
      APMObjectRelationCode,
      APMRelatedObjectCategory,
      RelatedClearingArea,
      APMRelatedObjectDate,
      APMRelatedObjectNumber,
      APMRelatedObjectIdExtended,
      APMRelatedObjectExtendedRef,
      APMExternalSystemCode,
      APMObjectRelationState,
      APMProcessUUID
}
where
      APMRelatedObjectCategory = '22'
  and APMProcessUUID           = hextobin( '0A94EF5E43951EECBDF4590F87A5AD21' )
```
