---
name: I_CNSLDTNUNITHIERDIRT
description: "Cnsldtn Unit Hierarchy Directory - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRT')/$value
semantic_en: "Cnsldtn Unit Hierarchy Directory - Text"
semantic_vi: "Cnsldtn Unit Hierarchy Directory - Text — CDS view giao diện (master data) dựa trên P_CnsldtnUnivHierarchyText_2."
keywords:
  - "cnsldtn"
  - "unit"
  - "hierarchy"
  - "directory"
  - "text"
  - "consolidation"
  - "validity"
  - "date"
  - "language"
  - "start"
tags:
  - FIN
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNUNITHIERDIRT

**Cnsldtn Unit Hierarchy Directory - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnitHierarchy` | ✓ | | `_HierarchyText` | `CnsldtnUniversalHierarchy` | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `Language` | ✓ | | `_HierarchyText` | `Language` | `LANG(1)` | Language Key |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ConsolidationUnitHierarchyText` |  | | `_HierarchyText` | `UniversalHierarchyText` | `CHAR(50)` | Consolidation Hierarchy Description |
| `_Language` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCUNITHIERDIRT',
  compiler.compareFilter: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationUnitHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Unit Hierarchy Directory - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnUnitHierDirT
  as select from P_CnsldtnUnivHierarchyText_2(P_HierarchyType : 'CS17', P_MasterDataType : 'RBUNIT' ) as _HierarchyText

{
  key _HierarchyText.CnsldtnUniversalHierarchy as ConsolidationUnitHierarchy,

      @Semantics.businessDate.to: true
  key _HierarchyText.ValidityEndDate,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _HierarchyText.Language,

      @Semantics.businessDate.from: true
      _HierarchyText.ValidityStartDate,

      @Semantics.text: true
      _HierarchyText.UniversalHierarchyText    as ConsolidationUnitHierarchyText,


      _Language
}
```
