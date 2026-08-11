---
name: I_EWM_WHSEREQSTATUSVALUETEXT
description: "Warehouse Request Status Value - Text"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSVALUETEXT')/$value
semantic_en: "Warehouse Request Status Value - Text"
semantic_vi: "Warehouse Request Status Value - Text — CDS view giao diện (master data) dựa trên Warehouse Request Status Value - Text."
keywords:
  - "warehouse"
  - "request"
  - "status"
  - "value"
  - "text"
  - "type"
  - "language"
  - "name"
tags:
  - SCM
  - component:SCM-EWM-DLP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_WHSEREQSTATUSVALUETEXT

**Warehouse Request Status Value - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSVALUETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouseRequestStatusType` | ✓ | |  | `status_type` | `CHAR(5)` | Status Type |
| `EWMWarehouseRequestStatus` | ✓ | |  | `status_value` | `CHAR(1)` | Status Value |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `EWMWarehouseRequestStatusName` |  | |  | `SystemStatusName` | `CHAR(30)` | Individual Status of an Object |
| `_Language` | | ✓ | | | | |
| `_StatusValue` | | ✓ | | | | |
| `_StatusType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_StatusValue` | `I_EWM_WhseReqStatusValue` | [1..1] |
| `_StatusType` | `I_EWM_WhseReqStatusType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSVALUETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSVALUETEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Request Status Value - Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'EWMWarehouseRequestStatus'
@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #MASTER},
  supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SEARCHABLE_ENTITY ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  dataCategory: #TEXT
}
@Search.searchable: true
define view entity I_EWM_WhseReqStatusValueText
  as select from    /scdl/stsval       as val
    left outer to many join I_SystemStatusText as text on val.reference = text.SystemStatus
  association [0..1] to I_Language               as _Language    on  text.Language = _Language.Language
  association [1..1] to I_EWM_WhseReqStatusValue as _StatusValue on  $projection.EWMWarehouseRequestStatusType = _StatusValue.EWMWarehouseRequestStatusType
                                                                 and $projection.EWMWarehouseRequestStatus  = _StatusValue.EWMWarehouseRequestStatus
  association [1..1] to I_EWM_WhseReqStatusType as _StatusType on  $projection.EWMWarehouseRequestStatusType = _StatusType.EWMWarehouseRequestStatusType                                                                
{
      @ObjectModel.foreignKey.association: '_StatusType'
  key val.status_type       as EWMWarehouseRequestStatusType,
      @ObjectModel.text.element: ['EWMWarehouseRequestStatusName']
  key val.status_value      as EWMWarehouseRequestStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key text.Language         as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      text.SystemStatusName as EWMWarehouseRequestStatusName,

      _Language,
      _StatusType,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _StatusValue

}
```
