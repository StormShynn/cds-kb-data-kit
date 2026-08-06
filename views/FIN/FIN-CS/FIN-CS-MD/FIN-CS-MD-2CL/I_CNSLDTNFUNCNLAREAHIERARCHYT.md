---
name: I_CNSLDTNFUNCNLAREAHIERARCHYT
description: Cnsldtnfuncnlareahierarchyt
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFUNCNLAREAHIERARCHYT

**Cnsldtnfuncnlareahierarchyt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_HierarchyText.Language` |
| key `CnsldtnFunctionalAreaHierarchy` | `cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_functionalareahierarchy preserving type )` |
| key `ValidityEndDate` | `_HierarchyText.ValidityEndDate` |
| `ValidityStartDate` | `_HierarchyText.ValidityStartDate` |
| `FunctionalAreaHierarchyName` | `_HierarchyText.UniversalHierarchyText` |
| `_Hierarchy` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnFuncnlAreaHierarchy` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFAHIERARCHYT',
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
  representativeKey: 'CnsldtnFunctionalAreaHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnFuncnlAreaHierarchyText'                        
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Functional Area Hier Dir - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnFuncnlAreaHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS05', P_MasterDataType : 'RFAREA' ) as _HierarchyText

  association [1..1] to I_CnsldtnFuncnlAreaHierarchy as _Hierarchy on  $projection.CnsldtnFunctionalAreaHierarchy = _Hierarchy.CnsldtnFunctionalAreaHierarchy
                                                                   and $projection.ValidityEndDate                = _Hierarchy.ValidityEndDate

{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_functionalareahierarchy preserving type ) as CnsldtnFunctionalAreaHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        _HierarchyText.UniversalHierarchyText                                                            as FunctionalAreaHierarchyName,


        _Language,
        _Hierarchy
};
```
