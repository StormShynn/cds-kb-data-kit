---
name: I_SETLMGMTITMTXTDETNPROCEDT
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
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCEDT')/$value
semantic_en: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types and which can be used on item level for Settlement Management Documents. This CDS view provides the prerequisites for answering the following business question: How many possible Text Determination Procedures are defined for item level?"
semantic_vi: "Item Text Determination Proced - Text — CDS view cơ bản dựa trên ttxgt."
keywords:
  - "item"
  - "text"
  - "determination"
  - "proced"
  - "settlmt"
  - "detn"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETLMGMTITMTXTDETNPROCEDT

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCEDT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtItmTxtDetnProced` | ✓ | |  | `cast (txtgr as txtgr_i preserving type )` | `CHAR(2)` | Text Determination Procedure for Item |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SettlmtItmTxtDetnProcedDesc` |  | |  | `cast (vtext as txtgr_i_text preserving type )` | `CHAR(20)` | Item Text Determination Procedure Description |
| `_Language` | | ✓ | | | | |
| `_SettlmtItmTxtDetnProced` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCEDT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCEDT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFITMTXTDETT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 001
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: ['_SettlmtItmTxtDetnProced'],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SettlmtItmTxtDetnProced',
   modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities:  [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY],
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
@Search.searchable: true
@Analytics: {
    internalName: #LOCAL
}
@EndUserText.label: 'Item Text Determination Proced - Text'
@Metadata.ignorePropagatedAnnotations: true

define view I_SetlMgmtItmTxtDetnProcedT
  as select from ttxgt
  
  association to parent I_SetlMgmtItmTxtDetnProced as _SettlmtItmTxtDetnProced on $projection.SettlmtItmTxtDetnProced = _SettlmtItmTxtDetnProced.SettlmtItmTxtDetnProced
  association [0..1] to I_Language                 as _Language                on $projection.Language = _Language.Language

{

      @ObjectModel.foreignKey.association: '_SettlmtItmTxtDetnProced'
  key cast (txtgr as txtgr_i preserving type )      as SettlmtItmTxtDetnProced,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                         as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast (vtext as txtgr_i_text preserving type ) as SettlmtItmTxtDetnProcedDesc,

      //Associations
      _SettlmtItmTxtDetnProced,
      _Language

}
where
  tdobject = 'WBRP'
```
