---
name: I_CNSLDTNUNITTEXT_2
description: "Consolidation Unit - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITTEXT_2')/$value
semantic_en: "Consolidation Unit - Text"
semantic_vi: "Consolidation Unit - Text — CDS view giao diện dựa trên P_CnsldtnUnit_CombinedText."
keywords:
  - "consolidation"
  - "unit"
  - "text"
  - "dimension"
  - "language"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNUNITTEXT_2

**Consolidation Unit - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationUnit` | ✓ | |  |  | `CHAR(18)` | Consolidation Unit |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ConsolidationUnitText` |  | |  |  | `CHAR(20)` | Short description |
| `ConsolidationUnitMdmText` |  | |  |  | `CHAR(40)` | Medium description |
| `LongText` |  | |  | `cast( ConsolidationUnitLongText as rstxtlg )` | `CHAR(60)` | Long description |
| `_Language` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Dimension` | `I_CnsldtnDimension` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITTEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITTEXT_2')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCONSUNITT2',
  preserveKey: true,
  compiler.compareFilter:true
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'ConsolidationUnit',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Unit - Text'

define view I_CnsldtnUnitText_2
  as select from P_CnsldtnUnit_CombinedText

  association [0..1] to I_Language         as _Language  on $projection.Language = _Language.Language

  association [0..1] to I_CnsldtnDimension as _Dimension on $projection.ConsolidationDimension = _Dimension.ConsolidationDimension
{

      @ObjectModel.foreignKey.association: '_Dimension'
  key ConsolidationDimension,

  key ConsolidationUnit,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key Language,

      @Semantics.text
      ConsolidationUnitText,

      @Semantics.text
      ConsolidationUnitMdmText,

      @Semantics.text
      cast( ConsolidationUnitLongText as rstxtlg ) as LongText,

      _Dimension,

      _Language
}
where
  ConsolidationDimension = 'Y1'
```
