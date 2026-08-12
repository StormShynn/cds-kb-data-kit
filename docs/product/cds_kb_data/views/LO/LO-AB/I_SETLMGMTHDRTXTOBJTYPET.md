---
name: I_SETLMGMTHDRTXTOBJTYPET
description: "This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPET')/$value
semantic_en: "This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?"
semantic_vi: "Text Object Type for Header - Text — CDS view cơ bản dựa trên ttxit."
keywords:
  - "text"
  - "object"
  - "type"
  - "for"
  - "header"
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
# I_SETLMGMTHDRTXTOBJTYPET

**This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtHdrTxtObjType` | ✓ | |  | `cast (tdid as tdid_tech preserving type )` | `CHAR(4)` | Specific Text ID for a Settlement Management Document Header |
| `Language` | ✓ | |  | `tdspras` | `LANG(1)` | Language Key |
| `SettlmtMgmtHdrTxtObjTypeDesc` |  | |  | `cast (tdtext as tdid_tech_text preserving type )` | `CHAR(30)` | Settlement Management Header Text ID Description |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtHdrTxtObjType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPET')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFHDRTXTIDT',
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
  privilegedAssociations: ['_SettlmtMgmtHdrTxtObjType'],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SettlmtMgmtHdrTxtObjType',
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY],
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
@EndUserText.label: 'Text Object Type for Header - Text' 
@Metadata.ignorePropagatedAnnotations: true


define view I_SetlMgmtHdrTxtObjTypeT
  as select from ttxit

  association to parent I_SetlMgmtHdrTxtObjType as _SettlmtMgmtHdrTxtObjType on $projection.SettlmtMgmtHdrTxtObjType = _SettlmtMgmtHdrTxtObjType.SettlmtMgmtHdrTxtObjType
  association [0..1] to I_Language              as _Language                 on $projection.Language = _Language.Language

{

      @ObjectModel.foreignKey.association: '_SettlmtMgmtHdrTxtObjType'
  key cast (tdid as tdid_tech preserving type )        as SettlmtMgmtHdrTxtObjType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key tdspras                                          as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast (tdtext as tdid_tech_text preserving type ) as SettlmtMgmtHdrTxtObjTypeDesc,

      //Associations
      _SettlmtMgmtHdrTxtObjType,
      _Language

}
where
  tdobject = 'WBRK'
```
