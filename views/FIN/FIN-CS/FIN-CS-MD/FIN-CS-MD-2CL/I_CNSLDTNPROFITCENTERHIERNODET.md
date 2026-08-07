---
name: I_CNSLDTNPROFITCENTERHIERNODET
description: CNSLDTNProfit CenterHIERNODET
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
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERHIERNODET

**CNSLDTNProfit CenterHIERNODET**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyNodeText` | `Language` |
| `ControllingArea` | ✓ | |  |  |
| `ConsolidationPrftCtrHierarchy` | ✓ | |  | `cast(_HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_profitcenterhierarchy preserving type )` |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |
| `_ControllingArea` | | ✓ | | |
| `_Hierarchy` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Hierarchy` | `I_CnsldtnProfitCenterHierarchy` | [1..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'ICCPRFTCTRHNT',
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
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L},
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnPrftCtrHierNodeText'                        
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Profit Center Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnProfitCenterHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3( P_HierarchyType: 'CS04', P_MasterDataType : 'PRCTR' ) as _HierarchyNodeText

  association [1..1] to I_CnsldtnControllingArea       as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..*] to I_CnsldtnProfitCenterHierarchy as _Hierarchy       on  $projection.ConsolidationPrftCtrHierarchy = _Hierarchy.ConsolidationPrftCtrHierarchy
                                                                           and $projection.ControllingArea               = _Hierarchy.ControllingArea
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
  key cast(_HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_profitcenterhierarchy preserving type ) as ConsolidationPrftCtrHierarchy,

  key _HierarchyNodeText.HierarchyNode,

      @Semantics.businessDate.to: true
  key _HierarchyNodeText.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNodeText.ValidityStartDate,

      _HierarchyNodeText.ParentNode,

      _HierarchyNodeText.HierarchyVersion,

      @Semantics.text: true
      _HierarchyNodeText.HierarchyNodeText,


      _Language,
      _ControllingArea,
      _Hierarchy
};
```
