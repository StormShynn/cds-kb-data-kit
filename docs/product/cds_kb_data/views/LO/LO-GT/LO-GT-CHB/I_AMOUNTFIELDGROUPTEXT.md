---
name: I_AMOUNTFIELDGROUPTEXT
description: "This CDS view exposes fixed values of the amount field group."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AMOUNTFIELDGROUPTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the amount field group."
semantic_vi: "Amount Field Group - Text — CDS view cơ bản dựa trên wb2_c_af_groupt."
keywords:
  - "amount"
  - "field"
  - "group"
  - "text"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_AMOUNTFIELDGROUPTEXT

**This CDS view exposes fixed values of the amount field group.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AMOUNTFIELDGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AmountFieldGroup` | ✓ | |  | `af_group` | `CHAR(4)` | Amount Fields Group |
| `AmountFieldGroupDesc` |  | |  | `cast( wb2_c_af_groupt.text as wb2_amount_fields_group_txt preserving type )` | `CHAR(40)` | Description of Amount Field Group |
| `_Language` | | ✓ | | | | |
| `_AmountFieldGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AMOUNTFIELDGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AMOUNTFIELDGROUPTEXT')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText.label: 'Amount Field Group - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'AmountFieldGroup',
  dataCategory: #TEXT,
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  } 
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'AMOUNTFLDGROUPT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_AmountFieldGroupText
  as select from wb2_c_af_groupt

  association to parent I_AmountFieldGroup as _AmountFieldGroup on $projection.AmountFieldGroup = _AmountFieldGroup.AmountFieldGroup
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key wb2_c_af_groupt.spras                                                       as Language,
      @ObjectModel.foreignKey.association: '_AmountFieldGroup'
      @ObjectModel.text.element: ['AmountFieldGroupDesc']
  key wb2_c_af_groupt.af_group                                                    as AmountFieldGroup,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( wb2_c_af_groupt.text as wb2_amount_fields_group_txt preserving type ) as AmountFieldGroupDesc,

      /* Associations */
      _AmountFieldGroup,
      _Language
}
```
