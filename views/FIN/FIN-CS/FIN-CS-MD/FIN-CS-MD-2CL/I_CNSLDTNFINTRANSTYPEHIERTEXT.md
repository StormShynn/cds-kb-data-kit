---
name: I_CNSLDTNFINTRANSTYPEHIERTEXT
description: Cnsldtnfintranstypehiertext
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
# I_CNSLDTNFINTRANSTYPEHIERTEXT

**Cnsldtnfintranstypehiertext**

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
| key `CnsldtnFinTransTypeHierarchy` | `cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_fintransactiontypehier preserving type )` |
| key `ValidityEndDate` | `_HierarchyText.ValidityEndDate` |
| `ValidityStartDate` | `_HierarchyText.ValidityStartDate` |
| `CnsldtnFinTransTypeHierText` | `_HierarchyText.UniversalHierarchyText` |
| `_Hierarchy` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnFinTransTypeHierarchy` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFTTHIERTEXT',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  representativeKey: 'CnsldtnFinTransTypeHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnFinTransTypeHierText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Fin Trans Type Hierarchy - Txt'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnFinTransTypeHierText
  as select from P_CnsldtnUnivHierarchyText_2(P_HierarchyType : 'CS07', P_MasterDataType : 'RMVCT' ) as _HierarchyText

  association [1..1] to I_CnsldtnFinTransTypeHierarchy as _Hierarchy on  $projection.CnsldtnFinTransTypeHierarchy = _Hierarchy.CnsldtnFinTransTypeHierarchy
                                                                     and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_fintransactiontypehier preserving type ) as CnsldtnFinTransTypeHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        _HierarchyText.UniversalHierarchyText                                                           as CnsldtnFinTransTypeHierText,


        _Language,
        _Hierarchy
};
```
