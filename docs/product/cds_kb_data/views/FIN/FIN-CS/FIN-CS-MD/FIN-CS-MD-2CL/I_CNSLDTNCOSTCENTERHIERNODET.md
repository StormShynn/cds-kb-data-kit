---
name: I_CNSLDTNCOSTCENTERHIERNODET
description: "CNSLDTNCost CenterHIERNODET"
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
  - cost-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTERHIERNODET

**CNSLDTNCost CenterHIERNODET**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyNodeText` | `Language` |  |  |
| `ControllingArea` | ✓ | |  |  |  |  |
| `CnsldtnCostCenterHierarchy` | ✓ | |  | `cast(_HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_costcenterhierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Hierarchy` | `I_CnsldtnCostCenterHierarchy` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCCOSTCENTERHNT',
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
    sizeCategory: #XL},
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnCostCenterHierNodeText'                        
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Cost Center Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnCostCenterHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType : 'CS03', P_MasterDataType : 'RCNTR' ) as _HierarchyNodeText

  association [1..1] to I_CnsldtnControllingArea     as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..*] to I_CnsldtnCostCenterHierarchy as _Hierarchy       on  $projection.CnsldtnCostCenterHierarchy = _Hierarchy.CnsldtnCostCenterHierarchy
                                                                         and $projection.ControllingArea            = _Hierarchy.ControllingArea
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key ControllingArea,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_costcenterhierarchy preserving type ) as CnsldtnCostCenterHierarchy,

  key _HierarchyNodeText.HierarchyNode,

      @Semantics.businessDate.to: true
  key _HierarchyNodeText.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNodeText.ValidityStartDate,

      _HierarchyNodeText.ParentNode,

      _HierarchyNodeText.HierarchyVersion,

      @Semantics.text: true
      _HierarchyNodeText.HierarchyNodeText,


      _ControllingArea,
      _Language,
      _Hierarchy
};
```
