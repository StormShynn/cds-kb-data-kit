---
name: I_CNSLDTNCOSTCENTERHIERTEXT
description: CNSLDTNCost CenterHIERTEXT
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
  - cost-center
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTERHIERTEXT

**CNSLDTNCost CenterHIERTEXT**

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
| `ControllingArea` | ✓ | |  |  |  |  |
| `CnsldtnCostCenterHierarchy` | ✓ | |  | `cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_costcenterhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnCostCenterHierarchyText` |  | | `_HierarchyText` | `UniversalHierarchyText` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Hierarchy` | `I_CnsldtnCostCenterHierarchy` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCCOSTCTRHIERT',
  compiler.compareFilter: true,
  preserveKey: true
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
  dataCategory: #TEXT,
  representativeKey: 'CnsldtnCostCenterHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnCostCenterHierarchyText'                        
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Cost Center Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnCostCenterHierText
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS03', P_MasterDataType : 'RCNTR' ) as _HierarchyText

  association [1..1] to I_CnsldtnControllingArea     as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..1] to I_CnsldtnCostCenterHierarchy as _Hierarchy       on  $projection.ControllingArea            = _Hierarchy.ControllingArea
                                                                         and $projection.CnsldtnCostCenterHierarchy = _Hierarchy.CnsldtnCostCenterHierarchy
                                                                         and $projection.ValidityEndDate            = _Hierarchy.ValidityEndDate

{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_ControllingArea'
        @Consumption.valueHelpDefinition: [{
          entity: {
            name: 'I_CnsldtnControllingAreaVH',
            element: 'ControllingArea'
          }
        }]
  key   ControllingArea,

  key   cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_costcenterhierarchy preserving type ) as CnsldtnCostCenterHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        _HierarchyText.UniversalHierarchyText                                                        as CnsldtnCostCenterHierarchyText,


        _Language,
        _ControllingArea,
        _Hierarchy
};
```
