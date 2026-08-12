---
name: I_COSTCOMPONENTSTRUCTURETEXT
description: "Cost Component Structure - Text"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTSTRUCTURETEXT')/$value
semantic_en: "Cost Component Structure - Text"
semantic_vi: "Cost Component Structure - Text — CDS view giao diện dựa trên tckh5."
keywords:
  - "cost"
  - "component"
  - "structure"
  - "text"
  - "language"
  - "name"
tags:
  - CO
  - bo:purchaseorder
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
---
# I_COSTCOMPONENTSTRUCTURETEXT

**Cost Component Structure - Text**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTSTRUCTURETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CostComponentStructure` | ✓ | |  | `elehk` | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `CostComponentStructureName` |  | |  | `txsch` | `CHAR(25)` | Name of Cost Component Structure |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTSTRUCTURETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTSTRUCTURETEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Cost Component Structure - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC

define view entity I_CostComponentStructureText
  as select from tckh5
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
      @ObjectModel.text.element: [ 'CostComponentStructureName' ]
  key elehk as CostComponentStructure,

      @Semantics.text: true
      txsch as CostComponentStructureName,

      _Language
}
```
