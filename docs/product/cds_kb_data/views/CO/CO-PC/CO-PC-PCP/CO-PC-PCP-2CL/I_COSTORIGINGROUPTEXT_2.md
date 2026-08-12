---
name: I_COSTORIGINGROUPTEXT_2
description: "Cost Origin Group - Text"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUPTEXT_2')/$value
semantic_en: "Cost Origin Group - Text"
semantic_vi: "Cost Origin Group - Text — CDS view giao diện dựa trên tkkh2."
keywords:
  - "cost"
  - "origin"
  - "group"
  - "text"
  - "language"
  - "name"
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
---
# I_COSTORIGINGROUPTEXT_2

**Cost Origin Group - Text**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUPTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostOriginGroup` | ✓ | |  | `hrkft` | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CostOriginGroupName` |  | |  | `hrktx` | `CHAR(40)` | Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUPTEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUPTEXT_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true

@EndUserText.label: 'Cost Origin Group - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'CostOriginGroup'

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }

@VDM.viewType: #BASIC

define view entity I_CostOriginGroupText_2 
  as select from tkkh2 

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key hrkft as CostOriginGroup,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras as Language,


      @Semantics.text
      hrktx as CostOriginGroupName,

      _Language
};
```
