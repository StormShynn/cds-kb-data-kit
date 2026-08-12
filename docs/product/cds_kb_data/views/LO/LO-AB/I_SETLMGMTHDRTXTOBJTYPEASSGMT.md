---
name: I_SETLMGMTHDRTXTOBJTYPEASSGMT
description: "This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on header level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on header level?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPEASSGMT')/$value
semantic_en: "This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on header level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on header level?"
semantic_vi: "Text Object Type Assignment for Header — CDS view tổng hợp dựa trên Text Object Type Assignment for Header."
keywords:
  - "text"
  - "object"
  - "type"
  - "assignment"
  - "for"
  - "header"
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
# I_SETLMGMTHDRTXTOBJTYPEASSGMT

**This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on header level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on header level?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPEASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtHdrTxtDetnProced` | ✓ | |  |  | `CHAR(2)` | Text Determination Procedure for Header |
| `SettlmtMgmtHdrTxtObjType` | ✓ | |  |  | `CHAR(4)` | Specific Text ID for a Settlement Management Document Header |
| `_SettlmtMgmtHdrTxtObjType` | | ✓ | | | | |
| `_SettlmtHdrTxtDetnProced` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtMgmtHdrTxtObjType` | `I_SetlMgmtHdrTxtObjType` | [0..1] |
| `_SettlmtHdrTxtDetnProced` | `I_SetlMgmtHdrTxtDetnProced` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPEASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPEASSGMT')/$value)*

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: [ '_SettlmtHdrTxtDetnProced' , '_SettlmtMgmtHdrTxtObjType' ],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   modelingPattern: #NONE,
   supportedCapabilities : [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
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
@Analytics.technicalName: 'IWLFHDRTXTIDASG'
@EndUserText.label: 'Text Object Type Assignment for Header' 
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
}


/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_SetlMgmtHdrTxtObjTypeAssgmt
  as select distinct from R_SetlMgmtHdrTxtObjTypeAssgmt

  association [0..1] to I_SetlMgmtHdrTxtObjType    as _SettlmtMgmtHdrTxtObjType on $projection.SettlmtMgmtHdrTxtObjType = _SettlmtMgmtHdrTxtObjType.SettlmtMgmtHdrTxtObjType
  association [0..1] to I_SetlMgmtHdrTxtDetnProced as _SettlmtHdrTxtDetnProced  on $projection.SettlmtHdrTxtDetnProced = _SettlmtHdrTxtDetnProced.SettlmtHdrTxtDetnProced

{

        @ObjectModel.foreignKey.association: '_SettlmtHdrTxtDetnProced'
  key   SettlmtHdrTxtDetnProced,

        @ObjectModel.foreignKey.association: '_SettlmtMgmtHdrTxtObjType'
  key   SettlmtMgmtHdrTxtObjType,

        //Associations
        _SettlmtHdrTxtDetnProced,
        _SettlmtMgmtHdrTxtObjType
}
```
