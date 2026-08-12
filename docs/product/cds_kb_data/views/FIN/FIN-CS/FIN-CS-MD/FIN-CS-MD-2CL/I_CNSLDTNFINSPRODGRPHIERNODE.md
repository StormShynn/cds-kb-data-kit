---
name: I_CNSLDTNFINSPRODGRPHIERNODE
description: "Cnsldtnfinsprodgrphiernode"
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
# I_CNSLDTNFINSPRODGRPHIERNODE

**Cnsldtnfinsprodgrphiernode**

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
  dataExtraction.enabled: true
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
  sapObjectNodeType.name: 'CnsldtnFinSrvcsProdGrpHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Fin Srvcs Prod Group - Hier Node'

define view entity I_CnsldtnFinSProdGrpHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS24', P_MasterDataType : 'FS_PRODUCT_GROUP' ) as _HierarchyNode

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch                                                                   as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_FS_FIELDS'
                                                                                                                              and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [0..1] to I_CnsldtnFinSrvcsProductGroup as _FinancialServicesProductGroup on  $projection.FinancialServicesProductGroup = _FinancialServicesProductGroup.FinancialServicesProductGroup

  association [1..1] to I_CnsldtnFinSrvcsProdGrpHier  as _Hierarchy                     on  $projection.CnsldtnFinSrvcsProdGroupHier = _Hierarchy.CnsldtnFinSrvcsProdGroupHier
                                                                                        and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnFinSProdGrpHierNodeT as _Text                          on  $projection.CnsldtnFinSrvcsProdGroupHier  = _Text.CnsldtnFinSrvcsProdGroupHier
                                                                                        and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                                        and $projection.FinancialServicesProductGroup = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy'
//        sapObjectNodeTypeReference: 'CnsldtnFinSrvcsProdGroupHier'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_finsrvcsprodgrphier preserving type )                      as CnsldtnFinSrvcsProdGroupHier,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode,

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
        foreignKey.association: '_FinancialServicesProductGroup',
        sapObjectNodeTypeReference: 'CnsldtnFinServicesProductGroup'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinSrvcsProdGroupVH',
          element: 'FinancialServicesProductGroup'
        }
      }]
      cast( left(_HierarchyNode.UniversalHierarchyLeafValue, 10) as fincs_finsrvcsproductgroup preserving type ) as FinancialServicesProductGroup,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _FinancialServicesProductGroup,
      _Hierarchy
}
```
