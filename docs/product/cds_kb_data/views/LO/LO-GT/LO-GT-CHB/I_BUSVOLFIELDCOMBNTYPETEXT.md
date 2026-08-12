---
name: I_BUSVOLFIELDCOMBNTYPETEXT
description: "This CDS view exposes fixed values of the Business Volume Field Combination Type field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPETEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Field Combination Type field."
semantic_vi: "Business Volume Field Combn Type - Text — CDS view cơ bản dựa trên R_BusVolFieldCombnTypeText."
keywords:
  - "business"
  - "volume"
  - "field"
  - "combn"
  - "type"
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
# I_BUSVOLFIELDCOMBNTYPETEXT

**This CDS view exposes fixed values of the Business Volume Field Combination Type field.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `BusVolFieldCombnType` | ✓ | |  |  | `CHAR(4)` | Field Combination for Business Volume Selection |
| `BusVolFieldCombnTypeDesc` |  | |  |  | `CHAR(40)` | Field Combination Description |
| `_BusVolFieldCombnType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusVolFieldCombnType` | `I_BusVolFieldCombnType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFIELDCOMBNTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Business Volume Field Combn Type - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'BusVolFieldCombnType',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities : [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE ],
  dataCategory: #TEXT,
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
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL, 
  technicalName: 'IBUSVOLFLDCTYPET'
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BusVolFieldCombnTypeText
  as select from R_BusVolFieldCombnTypeText

  association [0..1] to I_BusVolFieldCombnType as _BusVolFieldCombnType on $projection.BusVolFieldCombnType = _BusVolFieldCombnType.BusVolFieldCombnType
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_BusVolFieldCombnType'
  key BusVolFieldCombnType,
      @Semantics.text: true
      BusVolFieldCombnTypeDesc,

      /* Associations */
      _BusVolFieldCombnType,
      _Language

}
```
