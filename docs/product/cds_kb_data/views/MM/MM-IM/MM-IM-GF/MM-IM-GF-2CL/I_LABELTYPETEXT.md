---
name: I_LABELTYPETEXT
description: "Label Type - Text"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LABELTYPETEXT')/$value
semantic_en: "Label Type - Text"
semantic_vi: "Label Type - Text — CDS view giao diện dựa trên t6wl5."
keywords:
  - "label"
  - "type"
  - "text"
  - "language"
  - "description"
tags:
  - MM
  - component:MM-IM-GF-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-IM
  - MM-IM-GF
  - MM-IM-GF-2CL
---
# I_LABELTYPETEXT

**Label Type - Text**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LABELTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LabelType` | ✓ | |  | `cast(etiar as labeltype preserving type )` | `CHAR(2)` | Label Type |
| `LabelTypeDescription` |  | |  | `etitx` | `CHAR(40)` | Text, 40 Characters Long |
| `_Language` | | ✓ | | | | |
| `_LabelType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LABELTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LABELTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Label Type - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel: {
    supportedCapabilities: [#VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE],
    dataCategory: #TEXT,
    representativeKey: 'LabelType',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING,
    sapObjectNodeType.name: 'MatlDocumentPrintLabelTypeText'
}
@Analytics.technicalName: 'ILABELTYPET'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true

define view entity I_LabelTypeText
  as select from t6wl5
  association [0..1] to I_Language         as _Language  on $projection.Language = _Language.Language
  association        to parent I_LabelType as _LabelType on $projection.LabelType = _LabelType.LabelType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LabelType'
      @ObjectModel.text.element: ['LabelTypeDescription']
  key cast(etiar as labeltype preserving type ) as LabelType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      etitx as LabelTypeDescription,
      
      _LabelType,
      _Language
}
```
