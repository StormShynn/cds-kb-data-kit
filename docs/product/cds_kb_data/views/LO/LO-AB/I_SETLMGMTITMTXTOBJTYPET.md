---
name: I_SETLMGMTITMTXTOBJTYPET
description: "This CDS view provides access to the list of Text Object Types which exist on item level and which can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business question: How many possible Text Object Types are defined for item level?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPET')/$value
semantic_en: "This CDS view provides access to the list of Text Object Types which exist on item level and which can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business question: How many possible Text Object Types are defined for item level?"
semantic_vi: "Text Object Type for Item - Text — CDS view cơ bản dựa trên ttxit."
keywords:
  - "text"
  - "object"
  - "type"
  - "for"
  - "item"
  - "settlmt"
  - "mgmt"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETLMGMTITMTXTOBJTYPET

**This CDS view provides access to the list of Text Object Types which exist on item level and which can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business question: How many possible Text Object Types are defined for item level?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtItmTxtObjType` | ✓ | |  | `cast (tdid as tdid_teci preserving type )` | `CHAR(4)` | Specific Text ID for a Settlement Management Document Item |
| `Language` | ✓ | |  | `tdspras` | `LANG(1)` | Language Key |
| `SettlmtMgmtItmTxtObjTypeDesc` |  | |  | `cast (tdtext as tdid_teci_text preserving type )` | `CHAR(30)` | Settlement Management Item Text ID Description |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtItmTxtObjType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPET')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFITMTXTIDT',
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
  privilegedAssociations: ['_SettlmtMgmtItmTxtObjType'],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SettlmtMgmtItmTxtObjType',
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
@EndUserText.label: 'Text Object Type for Item - Text' 
@Metadata.ignorePropagatedAnnotations: true


define view I_SetlMgmtItmTxtObjTypeT
  as select from ttxit
  
  association to parent I_SetlMgmtItmTxtObjType as _SettlmtMgmtItmTxtObjType on $projection.SettlmtMgmtItmTxtObjType = _SettlmtMgmtItmTxtObjType.SettlmtMgmtItmTxtObjType
  association [0..1] to I_Language              as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtItmTxtObjType'
  key cast (tdid as tdid_teci preserving type )        as SettlmtMgmtItmTxtObjType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key tdspras                                          as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast (tdtext as tdid_teci_text preserving type ) as SettlmtMgmtItmTxtObjTypeDesc,

      //Associations
      _SettlmtMgmtItmTxtObjType,
      _Language

}
where
  tdobject = 'WBRP'
```
