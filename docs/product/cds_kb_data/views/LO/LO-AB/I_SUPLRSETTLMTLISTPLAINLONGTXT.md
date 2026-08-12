---
name: I_SUPLRSETTLMTLISTPLAINLONGTXT
description: "Plain Long Text for Supplier Settlement List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTPLAINLONGTXT')/$value
semantic_en: "Plain Long Text for Supplier Settlement List"
semantic_vi: "I_SUPLRSETTLMTLISTPLAINLONGTXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocPlainLongText."
keywords:
  - "suplrsettlmtlistplainlongtxt"
  - "suplr"
  - "settlmt"
  - "list"
  - "text"
  - "object"
  - "type"
  - "language"
  - "plain"
  - "long"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRSETTLMTLISTPLAINLONGTXT

**Plain Long Text for Supplier Settlement List**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTPLAINLONGTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmtList` | ✓ | |  | `cast( SettlmtMgmtDoc as wbeln_rglst preserving type )` | `CHAR(10)` | Supplier Settlement List |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_SuplrSettlmtList` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrSettlmtList` | `I_SuplrSettlmtList` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTPLAINLONGTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTPLAINLONGTXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Supplier Settlmt List'
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Analytics: {
    internalName: #LOCAL
}
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #L
   },
   dataCategory: #TEXT,
   representativeKey: 'TextObjectType',
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
 }
@Analytics.technicalName: 'IWLFSPLRSTLSTPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SuplrSettlmtListPlainLongTxt
  as select from R_SetlMgmtDocPlainLongText

  association [1..1] to I_SuplrSettlmtList as _SuplrSettlmtList on $projection.SuplrSettlmtList = _SuplrSettlmtList.SuplrSettlmtList

{
      @ObjectModel.foreignKey.association: '_SuplrSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtListStdVH', element: 'SuplrSettlmtList' } }]
      }
  key cast( SettlmtMgmtDoc as wbeln_rglst preserving type ) as SuplrSettlmtList,
  key TextObjectType                                        as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                              as Language,
      @Semantics.text:true
      PlainLongText                                         as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrSettlmtList,
      _Language

}

where
  SettlmtMgmtDocCat = 'D'
```
