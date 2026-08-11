---
name: I_CNSLDTNDOCUMENTTYPET
description: "Consolidation Document Type - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDOCUMENTTYPET')/$value
semantic_en: "Consolidation Document Type - Text"
semantic_vi: "Consolidation Document Type - Text — CDS view giao diện dựa trên tf501."
keywords:
  - "consolidation"
  - "document"
  - "type"
  - "text"
  - "dimension"
  - "language"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - document
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNDOCUMENTTYPET

**Consolidation Document Type - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDOCUMENTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | |  | `dimen` | `CHAR(2)` | Dimension |
| `ConsolidationDocumentType` | ✓ | |  | `docty` | `CHAR(2)` | Document Type |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `ConsolidationDocumentTypeText` |  | |  | `txt` | `CHAR(30)` | Description |
| `_Language` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Dimension` | `I_CnsldtnDimension` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDOCUMENTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDOCUMENTTYPET')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCDOCTYPET',
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
    sizeCategory: #S },
  representativeKey: 'ConsolidationDocumentType',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Document Type - Text'

define view I_CnsldtnDocumentTypeT
  as select from tf501

  association [0..1] to I_Language         as _Language  on $projection.Language = _Language.Language

  association [0..1] to I_CnsldtnDimension as _Dimension on $projection.ConsolidationDimension = _Dimension.ConsolidationDimension
{

      @ObjectModel.foreignKey.association: '_Dimension'
  key dimen as ConsolidationDimension,

  key docty as ConsolidationDocumentType,


      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu as Language,

      @Semantics.text
      txt   as ConsolidationDocumentTypeText,

      _Dimension,

      _Language
};
```
