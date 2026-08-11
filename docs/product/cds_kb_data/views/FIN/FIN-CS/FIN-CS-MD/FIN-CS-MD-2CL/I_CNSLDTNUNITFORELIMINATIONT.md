---
name: I_CNSLDTNUNITFORELIMINATIONT
description: "Cnsldtn Unit for Mgmt Elimination - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITFORELIMINATIONT')/$value
semantic_en: "Cnsldtn Unit for Mgmt Elimination - Text"
semantic_vi: "Cnsldtn Unit for Mgmt Elimination - Text — CDS view giao diện (master data) dựa trên P_CnsldtnUnitForEliminationT."
keywords:
  - "cnsldtn"
  - "unit"
  - "for"
  - "mgmt"
  - "elimination"
  - "text"
  - "consolidation"
  - "dimension"
  - "language"
tags:
  - FIN
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNUNITFORELIMINATIONT

**Cnsldtn Unit for Mgmt Elimination - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITFORELIMINATIONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationUnit` | ✓ | |  | `cast(ConsolidationUnit as fincs_elimination_member)` | `CHAR(25)` | Consolidation Elimination Member |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ConsolidationUnitMdmText` |  | |  |  | `CHAR(50)` | Description |
| `_Language` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Dimension` | `I_CnsldtnDimension` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITFORELIMINATIONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITFORELIMINATIONT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCUNITFORELIMT',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #CHECK
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'ConsolidationUnit',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,                                    
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cnsldtn Unit for Mgmt Elimination - Text'

define view I_CnsldtnUnitForEliminationT

  as select from P_CnsldtnUnitForEliminationT

  association [0..1] to I_Language         as _Language  on $projection.Language = _Language.Language

  association [0..1] to I_CnsldtnDimension as _Dimension on $projection.ConsolidationDimension = _Dimension.ConsolidationDimension
{
      @ObjectModel.foreignKey.association: '_Dimension'
  key ConsolidationDimension,

  key cast(ConsolidationUnit as fincs_elimination_member) as ConsolidationUnit,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key Language,

      @Semantics.text
      ConsolidationUnitMdmText,
      _Language,
      _Dimension
}
```
