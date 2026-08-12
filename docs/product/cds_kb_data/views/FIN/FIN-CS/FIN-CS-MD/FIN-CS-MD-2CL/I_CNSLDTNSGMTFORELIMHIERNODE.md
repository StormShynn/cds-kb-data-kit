---
name: I_CNSLDTNSGMTFORELIMHIERNODE
description: "Cnsldtnsgmtforelimhiernode"
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
# I_CNSLDTNSGMTFORELIMHIERNODE

**Cnsldtnsgmtforelimhiernode**

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
@AbapCatalog:{
  sqlViewName: 'ICCSEGFORELIMHN',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@Hierarchy.parentChild: [{
  recurse:          { parent:    ['ParentNode'],
                      child:     ['HierarchyNode']   },
  siblingsOrder:    [{ by:       'HierarchyNodeSequence',
                      direction: #ASC   }],
  directory:        '_Hierarchy'
}]
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType:{
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  },
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE ],
  sapObjectNodeType.name: 'CnsldtnSgmtForElimHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Segment for Elim - Hier Node'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnSgmtForElimHierNode
  as select from P_CnsldtnUnivHierNodeElim_2(P_HierarchyType: 'CS01', P_MasterDataType: 'SEGMENT') as _HierNode

  association [0..1] to I_CnsldtnSegmentForElim   as _SegmentForElim on  $projection.Segment = _SegmentForElim.Segment

  association [1..1] to I_CnsldtnSegmentHierarchy as _Hierarchy      on  $projection.ConsolidationSegmentHierarchy = _Hierarchy.ConsolidationSegmentHierarchy
                                                                     and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnSegmentHierNodeT as _Text           on  $projection.ConsolidationSegmentHierarchy = _Text.ConsolidationSegmentHierarchy
                                                                     and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                     and $projection.Segment                       = ''
{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel:{
        sapObjectNodeTypeReference: 'CnsldtnSegmentHierarchy',
        foreignKey.association: '_Hierarchy' }
  key cast(_HierNode.CnsldtnUniversalHierarchy as fincs_segmenthierarchy preserving type ) as ConsolidationSegmentHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierNode.HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key _HierNode.ValidityEndDate,

      _HierNode.ParentNode,

      _HierNode.HierarchyVersion,

      @Semantics.businessDate.from: true
      _HierNode.ValidityStartDate,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnSegmentForElimination',
        foreignKey.association: '_SegmentForElim' }
      cast ( case _HierNode.NodeType
        when 'L' then
          case replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(left( UniversalHierarchyLeafValue, 10 ),
                   '0', ''), '1', ''), '2', ''), '3', ''), '4', ''), '5', ''), '6', ''), '7', ''), '8', ''), '9', '')
          when  ''
            then lpad(left( UniversalHierarchyLeafValue, 10 ), 25, '0')
            else left( UniversalHierarchyLeafValue, 10 )
          end
        when '
  then left(_HierNode.HierarchyNodeVal, 25)` | `when '

## Associations

> Source code not yet loaded. Run enrichment script with SAP system access to populate associations.

## Source Code

> Source code not yet loaded. Connect SAP system MCP and run enrichment script.
  then left(_HierNode.HierarchyNodeVal, 25)` |
| `else  ''` | `else  ''` |
| `fincs_elim_segment preserving type )` | `end` |
| `_HierNode.HierarchyNodeSequence` | *Association* |
| `_HierNode.HierarchyNodeLevel` | *Association* |
| `_HierNode.NodeType` | *Association* |
| `_Text` | *Association* |
| `_SegmentForElim` | *Association* |
| `_Hierarchy` | *Association* |

## Associations

> Source code not yet loaded. Run enrichment script with SAP system access to populate associations.

## Source Code

> Source code not yet loaded. Connect SAP system MCP and run enrichment script.
  then left(_HierNode.HierarchyNodeVal, 25)
        else  ''
        end as fincs_elim_segment preserving type )                                        as Segment,

      _HierNode.HierarchyNodeSequence,
      _HierNode.HierarchyNodeLevel,
      _HierNode.NodeType,


      _Text,
      _SegmentForElim,
      _Hierarchy
};
```
  then left(_HierNode.HierarchyNodeVal, 25)` | `when '

## Associations

> Source code not yet loaded. Run enrichment script with SAP system access to populate associations.

## Source Code

> Source code not yet loaded. Connect SAP system MCP and run enrichment script.
  then left(_HierNode.HierarchyNodeVal, 25)` |
| `else  ''` | `else  ''` |
| `fincs_elim_segment preserving type )` | `end` |
| `_HierNode.HierarchyNodeSequence` | *Association* |
| `_HierNode.HierarchyNodeLevel` | *Association* |
| `_HierNode.NodeType` | *Association* |
| `_Text` | *Association* |
| `_SegmentForElim` | *Association* |
| `_Hierarchy` | *Association* |

## Associations

> Source code not yet loaded. Run enrichment script with SAP system access to populate associations.

## Source Code

> Source code not yet loaded. Connect SAP system MCP and run enrichment script.
