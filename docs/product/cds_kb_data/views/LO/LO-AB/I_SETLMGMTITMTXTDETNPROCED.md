---
name: I_SETLMGMTITMTXTDETNPROCED
description: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types and which can be used on item level for Settlement Management Documents. This CDS view provides the prerequisites for answering the following business question: How many possible Text Determination Procedures are defined for item level?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCED')/$value
semantic_en: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types and which can be used on item level for Settlement Management Documents. This CDS view provides the prerequisites for answering the following business question: How many possible Text Determination Procedures are defined for item level?"
semantic_vi: "Text Determination Procedure for Item — CDS view cơ bản dựa trên ttxg."
keywords:
  - "text"
  - "determination"
  - "procedure"
  - "for"
  - "item"
  - "settlmt"
  - "detn"
  - "proced"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETLMGMTITMTXTDETNPROCED

**This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types and which can be used on item level for Settlement Management Documents. This CDS view provides the prerequisites for answering the following business question: How many possible Text Determination Procedures are defined for item level?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtItmTxtDetnProced` | ✓ | |  | `cast (txtgr as txtgr_i preserving type )` | `CHAR(2)` | Text Determination Procedure for Item |
| `_SetlMgmtItmTxtObjTypeAssgmt` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SetlMgmtItmTxtObjTypeAssgmt` | `I_SetlMgmtItmTxtObjTypeAssgmt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCED')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFITMTXTDET',
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #SINGLE,
    numberOfKeyFields: 001
  },
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: [ '_Text' , '_SetlMgmtItmTxtObjTypeAssgmt' ],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   representativeKey: 'SettlmtItmTxtDetnProced',
   modelingPattern: #NONE,
   supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
//    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@EndUserText.label: 'Text Determination Procedure for Item' 
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
}


define root view I_SetlMgmtItmTxtDetnProced
  as select from ttxg

  composition [0..*] of I_SetlMgmtItmTxtDetnProcedT as _Text    
  association [0..*] to I_SetlMgmtItmTxtObjTypeAssgmt as _SetlMgmtItmTxtObjTypeAssgmt on $projection.SettlmtItmTxtDetnProced = _SetlMgmtItmTxtObjTypeAssgmt.SettlmtItmTxtDetnProced

{
        @ObjectModel.text.association: '_Text'
  key   cast (txtgr as txtgr_i preserving type ) as SettlmtItmTxtDetnProced,

        //Associations
        _Text,
        _SetlMgmtItmTxtObjTypeAssgmt
}
where
  tdobject = 'WBRP'
```
