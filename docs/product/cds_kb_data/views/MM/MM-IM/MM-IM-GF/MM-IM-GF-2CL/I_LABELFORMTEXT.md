---
name: I_LABELFORMTEXT
description: "Label Form - Text"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LABELFORMTEXT')/$value
semantic_en: "Label Form - Text"
semantic_vi: "Label Form - Text — CDS view giao diện dựa trên t6wl4."
keywords:
  - "label"
  - "form"
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
# I_LABELFORMTEXT

**Label Form - Text**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LABELFORMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LabelForm` | ✓ | |  | `cast( etifo as labelform preserving type )` | `CHAR(2)` | Label Form |
| `LabelFormDescription` |  | |  | `etitx` | `CHAR(40)` | Text, 40 Characters Long |
| `_Language` | | ✓ | | | | |
| `_LabelForm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LABELFORMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LABELFORMTEXT')/$value)*

```abap
@EndUserText.label: 'Label Form - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel: {
    supportedCapabilities: [#VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE],
    dataCategory: #TEXT,
    representativeKey: 'LabelForm',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING,
    sapObjectNodeType.name: 'MatlDocumentPrintLabelFormText'
}
@Analytics.technicalName: 'ILABELFORMT'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
 
define view entity I_LabelFormText
  as select from t6wl4
  association [0..1] to I_Language         as _Language  on $projection.Language = _Language.Language
  association        to parent I_LabelForm as _LabelForm on $projection.LabelForm = _LabelForm.LabelForm
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LabelForm'
      @ObjectModel.text.element: ['LabelFormDescription']
  key cast( etifo as labelform preserving type ) as LabelForm,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      etitx as LabelFormDescription,
      
      _LabelForm,
      _Language
}
```
