---
name: I_CNSLDTNUNITHIERARCHYTEXT
description: "Cnsldtnunithierarchytext"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITHIERARCHYTEXT

**Cnsldtnunithierarchytext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |  |  |
| `ConsolidationUnitHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_consolidationunithier preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `ConsolidationUnitHierarchyText` |  | | `_HierarchyText` | `UniversalHierarchyText` |  |  |
| `_Language` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCUNITHIERTEXT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationUnitHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'ConsolidationUnitHierarchyText'                        
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnUnitHierarchyText
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS17', P_MasterDataType : 'RBUNIT' ) as _HierarchyText

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _HierarchyText.Language,

  key cast(_HierarchyText.UniversalHierarchy as fincs_consolidationunithier preserving type ) as ConsolidationUnitHierarchy,

      @Semantics.businessDate.to: true
  key _HierarchyText.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyText.ValidityStartDate,

      @Semantics.text: true
      _HierarchyText.UniversalHierarchyText                                                         as ConsolidationUnitHierarchyText,


      _Language
}
```
