---
name: I_CNSLDTNMATERIALHIERARCHYT
description: "Cnsldtnmaterialhierarchyt"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - material
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIALHIERARCHYT

**Cnsldtnmaterialhierarchyt**

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
| `ConsolidationMaterialHierarchy` | ✓ | |  | `cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_materialhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnMaterialHierarchyText` |  | | `_HierarchyText` | `UniversalHierarchyText` |  |  |
| `_Language` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSMATERIALHDT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL},
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationMaterialHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnMaterialHierarchyText'                        
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Material Hierarchy - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnMaterialHierarchyT
  as select from P_CnsldtnUnivHierarchyText_2(P_HierarchyType : 'CS23', P_MasterDataType : 'MATNR' ) as _HierarchyText

{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

  key   cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_materialhierarchy preserving type ) as ConsolidationMaterialHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        _HierarchyText.UniversalHierarchyText                                                      as CnsldtnMaterialHierarchyText,


        _Language
};
```
