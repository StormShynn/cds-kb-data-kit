---
name: I_SETLMGMTITMTXTOBJTYPEASSGMT
description: "This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on item level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on item level?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPEASSGMT')/$value
semantic_en: "This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on item level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on item level?"
semantic_vi: "Text Object Type Assignment for Item — CDS view tổng hợp dựa trên Text Object Type Assignment for Item."
keywords:
  - "text"
  - "object"
  - "type"
  - "assignment"
  - "for"
  - "item"
  - "settlmt"
  - "detn"
  - "proced"
  - "mgmt"
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETLMGMTITMTXTOBJTYPEASSGMT

**This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on item level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on item level?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPEASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtItmTxtDetnProced` | ✓ | |  |  | `CHAR(2)` | Text Determination Procedure for Item |
| `SettlmtMgmtItmTxtObjType` | ✓ | |  |  | `CHAR(4)` | Specific Text ID for a Settlement Management Document Item |
| `_SettlmtMgmtItmTxtObjType` | | ✓ | | | | |
| `_SettlmtItmTxtDetnProced` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtMgmtItmTxtObjType` | `I_SetlMgmtItmTxtObjType` | [0..1] |
| `_SettlmtItmTxtDetnProced` | `I_SetlMgmtItmTxtDetnProced` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPEASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPEASSGMT')/$value)*

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: [ '_SettlmtItmTxtDetnProced' , '_SettlmtMgmtItmTxtObjType' ],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   modelingPattern: #NONE,
   supportedCapabilities : [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}
@Analytics: {
//    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@Analytics.technicalName: 'IWLFITMTXTIDASG'
@EndUserText.label: 'Text Object Type Assignment for Item' 
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
}


/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_SetlMgmtItmTxtObjTypeAssgmt
  as select distinct from R_SetlMgmtItmTxtObjTypeAssgmt

  association [0..1] to I_SetlMgmtItmTxtObjType    as _SettlmtMgmtItmTxtObjType on $projection.SettlmtMgmtItmTxtObjType = _SettlmtMgmtItmTxtObjType.SettlmtMgmtItmTxtObjType
  association [0..1] to I_SetlMgmtItmTxtDetnProced as _SettlmtItmTxtDetnProced  on $projection.SettlmtItmTxtDetnProced = _SettlmtItmTxtDetnProced.SettlmtItmTxtDetnProced

{

        @ObjectModel.foreignKey.association: '_SettlmtItmTxtDetnProced'
  key   SettlmtItmTxtDetnProced,

        @ObjectModel.foreignKey.association: '_SettlmtMgmtItmTxtObjType'
  key   SettlmtMgmtItmTxtObjType,

        //Associations
        _SettlmtItmTxtDetnProced,
        _SettlmtMgmtItmTxtObjType
}
```
