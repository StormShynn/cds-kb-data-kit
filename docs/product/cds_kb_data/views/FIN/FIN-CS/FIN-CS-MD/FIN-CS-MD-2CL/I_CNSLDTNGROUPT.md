---
name: I_CNSLDTNGROUPT
description: "Consolidation Group - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUPT')/$value
semantic_en: "Consolidation Group - Text"
semantic_vi: "Consolidation Group - Text — CDS view giao diện dựa trên tf181."
keywords:
  - "consolidation"
  - "group"
  - "text"
  - "dimension"
  - "language"
  - "medium"
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
# I_CNSLDTNGROUPT

**Consolidation Group - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUPT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | |  | `dimen` | `CHAR(2)` | Dimension |
| `ConsolidationGroup` | ✓ | |  | `congr` | `CHAR(18)` | Consolidation Group |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `ConsolidationGroupText` |  | |  | `txtsh` | `CHAR(15)` | Short Text |
| `ConsolidationGroupMediumText` |  | |  | `txtmi` | `CHAR(30)` | Medium Text |
| `_Language` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Dimension` | `I_CnsldtnDimension` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUPT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUPT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'ICCGROUPT',
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
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S },
  representativeKey: 'ConsolidationGroup',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Group - Text'

define view I_CnsldtnGroupT
  as select from tf181

  association [0..1] to I_Language         as _Language  on $projection.Language = _Language.Language
  association [0..1] to I_CnsldtnDimension as _Dimension on $projection.ConsolidationDimension = _Dimension.ConsolidationDimension
{

      @ObjectModel.foreignKey.association: '_Dimension'
  key dimen as ConsolidationDimension,

  key congr as ConsolidationGroup,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu as Language,

      //  dimen as CnsldtnDimension,
      //  congr as CnsldtnGroup,

      @Semantics.text
      txtsh as ConsolidationGroupText,
      //  txtsh as CnsldtnGroupText,

      @Semantics.text
      txtmi as ConsolidationGroupMediumText,

      _Dimension,

      _Language
}
where
  dimen = 'Y1'
```
