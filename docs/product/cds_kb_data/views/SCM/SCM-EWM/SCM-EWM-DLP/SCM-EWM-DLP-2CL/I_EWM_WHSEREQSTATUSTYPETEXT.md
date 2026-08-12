---
name: I_EWM_WHSEREQSTATUSTYPETEXT
description: "Warehouse Request Status Type - Text"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPETEXT')/$value
semantic_en: "Warehouse Request Status Type - Text"
semantic_vi: "Warehouse Request Status Type - Text — CDS view giao diện (master data) dựa trên Warehouse Request Status Type - Text."
keywords:
  - "warehouse"
  - "request"
  - "status"
  - "type"
  - "text"
  - "language"
  - "whse"
  - "name"
tags:
  - SCM
  - component:SCM-EWM-DLP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_WHSEREQSTATUSTYPETEXT

**Warehouse Request Status Type - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouseRequestStatusType` | ✓ | |  | `status_type` | `CHAR(5)` | Status Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `EWMWhseReqStatusTypeName` |  | |  | `status_type_text` | `CHAR(30)` | Description of a Status Type |
| `_Language` | | ✓ | | | | |
| `_StatusType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_StatusType` | `I_EWM_WhseReqStatusType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPETEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Request Status Type - Text'
@VDM.viewType:#BASIC
@Metadata.ignorePropagatedAnnotations: true
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
  representativeKey: 'EWMWarehouseRequestStatusType',
  dataCategory: #TEXT
}
@Search.searchable: true
define view entity I_EWM_WhseReqStatusTypeText
  as select from /scdl/ststypt
  association [0..1] to I_Language              as _Language   on $projection.Language = _Language.Language
  association [1..1] to I_EWM_WhseReqStatusType as _StatusType on $projection.EWMWarehouseRequestStatusType = _StatusType.EWMWarehouseRequestStatusType
{
      @ObjectModel.text.element: ['EWMWhseReqStatusTypeName']
      @ObjectModel.foreignKey.association: '_StatusType'
  key status_type      as EWMWarehouseRequestStatusType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language         as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      status_type_text as EWMWhseReqStatusTypeName,

      _Language,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _StatusType

}
```
