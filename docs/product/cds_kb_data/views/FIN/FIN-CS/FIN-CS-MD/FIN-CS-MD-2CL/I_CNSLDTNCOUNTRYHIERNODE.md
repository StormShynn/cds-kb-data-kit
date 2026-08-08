---
name: I_CNSLDTNCOUNTRYHIERNODE
description: "Cnsldtncountryhiernode"
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
  - country
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNCOUNTRYHIERNODE

**Cnsldtncountryhiernode**

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
  sapObjectNodeType.name: 'CnsldtnCountryHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Country/Region - Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnCountryHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS14', P_MasterDataType : 'LAND1' ) as _HierarchyNode

  association [0..1] to I_CnsldtnCountry          as _Country   on  $projection.Country = _Country.Country

  association [1..1] to I_CnsldtnCountryHierarchy as _Hierarchy on  $projection.ConsolidationCountryHierarchy = _Hierarchy.ConsolidationCountryHierarchy
                                                                and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnCountryHierNodeT as _Text      on  $projection.ConsolidationCountryHierarchy = _Text.ConsolidationCountryHierarchy
                                                                and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                and $projection.Country                       = ''
{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNode.UniversalHierarchy as fincs_countryhierarchy preserving type ) as ConsolidationCountryHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel.foreignKey.association: '_Country'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCountryVH',
          element: 'Country'
        }
      }]
      Country,

      _HierarchyNode.HierarchyNodeSequence,

      _HierarchyNode.HierarchyNodeLevel,

      _HierarchyNode.NodeType,

      _Text,
      _Country,
      _Hierarchy
};
```
