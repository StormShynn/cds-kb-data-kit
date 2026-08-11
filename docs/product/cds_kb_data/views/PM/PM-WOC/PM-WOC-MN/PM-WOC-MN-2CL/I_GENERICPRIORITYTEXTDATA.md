---
name: I_GENERICPRIORITYTEXTDATA
description: "This CDS view provides the prerequisites for answering the following business question: What is the description of the priority in all languages?"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYTEXTDATA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the description of the priority in all languages?"
semantic_vi: "Generic Priority - Text — CDS view giao diện dựa trên I_GenericPriorityText."
keywords:
  - "generic"
  - "priority"
  - "text"
  - "language"
  - "type"
  - "code"
  - "desc"
tags:
  - PM
  - bo:plant
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_GENERICPRIORITYTEXTDATA

**This CDS view provides the prerequisites for answering the following business question: What is the description of the priority in all languages?**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYTEXTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `GenericPriorityType` | ✓ | |  |  | `CHAR(2)` | Priority Type |
| `PriorityCode` | ✓ | |  |  | `CHAR(1)` | Priority |
| `GenericPriorityDesc` |  | |  |  | `CHAR(20)` | Priority Text |
| `_GenericPriorityData` | | ✓ | | | | |
| `_GenericPriorityType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GenericPriorityData` | `I_GenericPriorityData` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYTEXTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYTEXTDATA')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Generic Priority - Text'

@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'PriorityCode'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
  dataExtraction: {
    enabled: true
  }
}

@ObjectModel: {
  dataCategory: #TEXT,
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.technicalName: 'IGENPRIOTEXTDATA'

define view entity I_GenericPriorityTextData
  as select from I_GenericPriorityText
  association [0..1] to I_GenericPriorityData as _GenericPriorityData on  _GenericPriorityData.GenericPriorityType = $projection.GenericPriorityType
                                                                      and _GenericPriorityData.PriorityCode        = $projection.PriorityCode
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,

      @ObjectModel.foreignKey.association: '_GenericPriorityType'
  key GenericPriorityType,

      @ObjectModel.foreignKey.association: '_GenericPriorityData'
  key PriorityCode,

      @Semantics.text: true
      GenericPriorityDesc,

      // Propagate association(s)
      _GenericPriorityData,
      _GenericPriorityType,
      _Language
}
```
