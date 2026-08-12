---
name: I_CNSLDTNSALESDISTRICTHIERNODE
description: "Cnsldtnsalesdistricthiernode"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNSALESDISTRICTHIERNODE

**Cnsldtnsalesdistricthiernode**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `['ParentNode']` |  | |  | `parent: ['ParentNode']` |  |  |
| `['HierarchyNode']` |  | |  | `child: ['HierarchyNode']` |  |  |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSSALESDISTRICTHIERNODE'
  }
@Hierarchy.parentChild: [{
  recurse: {
    parent: ['ParentNode'],
    child:     ['HierarchyNode']
  },
  siblingsOrder: [{
    by: 'HierarchyNodeSequence',
    direction: #ASC
  }],
  directory: '_Hierarchy'
}]
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnSalesDistrictHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Sales District Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnSalesDistrictHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS32', P_MasterDataType : 'BZIRK' ) as _HierarchyNode

  association [0..1] to I_CnsldtnSalesDistrict        as _SalesDistrict on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict

  association [1..1] to I_CnsldtnSalesDistrictHier    as _Hierarchy     on  $projection.CnsldtnSalesDistrictHierarchy = _Hierarchy.CnsldtnSalesDistrictHierarchy
                                                                        and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnSalesDstrctHierNodeT as _Text          on  $projection.CnsldtnSalesDistrictHierarchy = _Text.CnsldtnSalesDistrictHierarchy
                                                                        and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                        and $projection.SalesDistrict                 = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnSalesDistrictHierarchy'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_salesdistricthierarchy preserving type ) as CnsldtnSalesDistrictHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode                                                             as HierarchyNode,

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel: {
        foreignKey.association: '_SalesDistrict',
        sapObjectNodeTypeReference: 'CnsldtnSalesDistrict'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSalesDistrictVH',
          element: 'SalesDistrict'
        }
      }]
      _HierarchyNode.SalesDistrict,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _SalesDistrict,
      _Hierarchy
}
```
