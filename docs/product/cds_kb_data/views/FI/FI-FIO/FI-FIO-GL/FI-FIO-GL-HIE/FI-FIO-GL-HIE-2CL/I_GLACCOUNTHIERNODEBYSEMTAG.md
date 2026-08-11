---
name: I_GLACCOUNTHIERNODEBYSEMTAG
description: "G/L Account HierNode By Semantic Tag"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERNODEBYSEMTAG')/$value
semantic_en: "G/L Account HierNode By Semantic Tag"
semantic_vi: "G/L Account HierNode By Semantic Tag — CDS view giao diện dựa trên P_GLAccountHierNodeBySemTag."
keywords:
  - "g/l"
  - "account"
  - "hiernode"
  - "semantic"
  - "tag"
  - "hierarchy"
  - "node"
  - "type"
tags:
  - FI
  - account
  - component:FI-FIO-GL-HIE-2CL
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - interface-view
  - lob:finance
---
# I_GLACCOUNTHIERNODEBYSEMTAG

**G/L Account HierNode By Semantic Tag**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERNODEBYSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Hierarchy ID |
| `HierarchyNode` | ✓ | |  |  | `CHAR(50)` | Hierarchy node |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `HierarchyNodeType` |  | |  |  | `CHAR(30)` | Field Name |
| `_SemanticTag` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERNODEBYSEMTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERNODEBYSEMTAG')/$value)*

```abap
@EndUserText.label: 'G/L Account HierNode By Semantic Tag'
@Metadata.allowExtensions: true
@AbapCatalog: {
  sqlViewName: 'IFIGLHNSEMTAG',
  compiler.compareFilter: true,
  preserveKey:true
}
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'HierarchyNode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #C,
  sizeCategory: #S
}
//@AbapCatalog.buffering:{
//  status: #ACTIVE,
//  type: #FULL
//}

@VDM.viewType: #COMPOSITE
@Analytics: {
    dataCategory: #DIMENSION,
        dataExtraction: {
        enabled: true
    },
    internalName: #LOCAL
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name:'GLAccountHierNodeBySemanticTag'

define view I_GLAccountHierNodeBySemTag
  as select from P_GLAccountHierNodeBySemTag
{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key GLAccountHierarchy,
  key HierarchyNode,
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      HierarchyNodeType,
      _SemanticTag,
      _Hierarchy
}
```
