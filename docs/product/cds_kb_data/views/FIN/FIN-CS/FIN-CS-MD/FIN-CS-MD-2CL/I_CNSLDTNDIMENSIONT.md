---
name: I_CNSLDTNDIMENSIONT
description: "Consolidation Dimension - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDIMENSIONT')/$value
semantic_en: "Consolidation Dimension - Text"
semantic_vi: "Consolidation Dimension - Text — CDS view giao diện dựa trên tf151."
keywords:
  - "consolidation"
  - "dimension"
  - "text"
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
# I_CNSLDTNDIMENSIONT

**Consolidation Dimension - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDIMENSIONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | | `_Source` | `dimen` | `CHAR(2)` | Dimension |
| `Language` | ✓ | | `_Source` | `langu` | `LANG(1)` | Language Key |
| `ConsolidationDimensionText` |  | | `_Source` | `txtsh` | `CHAR(15)` | Short Text |
| `ConsolidationDimensionMdmText` |  | | `_Source` | `txtmi` | `CHAR(30)` | Medium Text |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDIMENSIONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDIMENSIONT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCDIMENSIONT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1 }
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationDimension',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Dimension - Text'

define view I_CnsldtnDimensionT
  as select from tf151 as _Source

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key _Source.dimen as ConsolidationDimension,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.langu as Language,

      @Semantics.text
      _Source.txtsh as ConsolidationDimensionText,

      @Semantics.text
      _Source.txtmi as ConsolidationDimensionMdmText,


      /* Associations */
      _Language
}
```
