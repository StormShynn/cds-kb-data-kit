---
name: I_FINWBSELEMENTHIERARCHYNODE
description: "Finwbselementhierarchynode"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - wbs
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:WBS
---
# I_FINWBSELEMENTHIERARCHYNODE

**Finwbselementhierarchynode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: ['ParentNode'], child: ['HierarchyNode'] }` |  |  |
| `}]` |  | |  | `siblingsOrder: [{ by: 'HierarchyNodeSequence', direction: #ASC }]` |  |  |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |  |  |

## Source Code

```abap
@EndUserText.label: 'Fin WBS Element Hierarchy Node'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: { dataCategory: #HIERARCHY }
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
//hierarchy Annotation
//@ObjectModel.representativeKey: 'HierarchyNode'
@Analytics.technicalName: 'IFIWBSELEMENTHN'
@Analytics: { dataExtraction.enabled: true }
@Hierarchy.parentChild:
[{ recurse:          {   parent: ['ParentNode'],   child:  ['HierarchyNode']  },
  siblingsOrder:    [{   by: 'HierarchyNodeSequence',    direction: #ASC   }],
  directory:        '_Hierarchy'
  }]
@Metadata.ignorePropagatedAnnotations: true
//@Analytics.dataExtraction: {enabled:true}
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE, #EXTRACTION_DATA_SOURCE ]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.sapObjectNodeType.name:'FinWBSElementHierarchyNode'

define view entity I_FinWBSElementHierarchyNode
  as select from R_FinWBSElementHierarchyNode
  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData    on  R_FinWBSElementHierarchyNode.WBSElement = _WBSElementBasicData.WBSElement
  association [1..1] to I_FinWBSElementHierarchy      as _Hierarchy              on  $projection.WBSElementHierarchy = _Hierarchy.WBSElementHierarchy
                                                                                 and $projection.ValidityEndDate     = _Hierarchy.ValidityEndDate
  association [0..*] to I_FinWBSElementHierarchyNodeT as _Text                   on  $projection.WBSElementHierarchy  = _Text.WBSElementHierarchy
                                                                                 and $projection.HierarchyNode        = _Text.HierarchyNode
                                                                                 and $projection.WBSElementExternalID = ''

  association [0..1] to I_WBSElementByExternalID      as _WBSElementByExternalID on  $projection.WBSElementExternalID = _WBSElementByExternalID.WBSElementExternalID


{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key R_FinWBSElementHierarchyNode.WBSElementHierarchy,
      @ObjectModel.text.association: '_Text'
  key R_FinWBSElementHierarchyNode.HierarchyNode              as HierarchyNode,
      @Semantics.businessDate.to: true
  key R_FinWBSElementHierarchyNode.ValidityEndDate            as ValidityEndDate,
      R_FinWBSElementHierarchyNode.ParentNode                 as ParentNode,
      R_FinWBSElementHierarchyNode.HierarchyVersion           as HierarchyVersion,
      @Semantics.businessDate.from: true
      R_FinWBSElementHierarchyNode.ValidityStartDate          as ValidityStartDate,
      @ObjectModel.foreignKey.association: '_WBSElementByExternalID'
      R_FinWBSElementHierarchyNode.WBSElementExternalID       as WBSElementExternalID,
      R_FinWBSElementHierarchyNode.WBSElement                 as WBSElement,
      R_FinWBSElementHierarchyNode.ParentWBSElementExternalID as ParentWBSElementExternalID,
      R_FinWBSElementHierarchyNode.NodeType                   as NodeType,
      R_FinWBSElementHierarchyNode.HierarchyNodeSequence      as HierarchyNodeSequence,
      R_FinWBSElementHierarchyNode.HierarchyNodeLevel         as HierarchyNodeLevel,
      _Hierarchy,
      _WBSElementByExternalID,
      _Text
}

union all

select from I_WBSElementStructure
association [0..1] to I_WBSElementBasicData         as _WBSElement             on  I_WBSElementStructure.WBSElementInternalID = _WBSElement.WBSElementInternalID
association [0..1] to I_WBSElementBasicData         as _Parent                 on  I_WBSElementStructure.WBSElementParentInternalID = _Parent.WBSElementInternalID
association [1..1] to I_FinWBSElementHierarchy      as _Hierarchy              on  $projection.WBSElementHierarchy = _Hierarchy.WBSElementHierarchy
                                                                               and $projection.ValidityEndDate     = _Hierarchy.ValidityEndDate
association [0..*] to I_FinWBSElementHierarchyNodeT as _Text                   on  $projection.WBSElementHierarchy  = _Text.WBSElementHierarchy
                                                                               and $projection.HierarchyNode        = _Text.HierarchyNode
                                                                               and $projection.WBSElementExternalID = ''
association [0..1] to I_WBSElementByExternalID      as _WBSElementByExternalID on  $projection.WBSElementExternalID = _WBSElementByExternalID.WBSElementExternalID


{
  key cast('WBSELEMENTHIERARCHY                       ' as hryid preserving type)                 as WBSElementHierarchy,
  key _WBSElement.WBSElement                                                                      as HierarchyNode,
  key cast('99991231' as fis_datbi )                                                              as ValidityEndDate,
      _Parent.WBSElement                                                                          as ParentNode,
      '000000000000001'                                                                           as HierarchyVersion,
      cast('19000101' as fis_datab )                                                              as ValidityStartDate,
      cast(coalesce(_WBSElement.WBSElementExternalID, '') as fis_wbsext_no_conv preserving type ) as WBSElementExternalID,
      _WBSElement.WBSElement                                                                      as WBSElement,
      cast(_Parent.WBSElementExternalID  as fis_parent_wbsext_no_conv preserving type)            as ParentWBSElementExternalID,
      'L'                                                                                         as NodeType,
      cast ('000000' as hryseqnbr preserving type )                                               as HierarchyNodeSequence,
      cast ('000000' as hrylevel preserving type )                                                as HierarchyNodeLevel,
      _Hierarchy,
      _WBSElementByExternalID,
      _Text
}
where
  I_WBSElementStructure.WBSElementParentInternalID is not null
```
