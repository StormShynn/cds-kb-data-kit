---
name: I_CNSLDTNPRFTCTRFORELIMHN
description: "Cnsldtnprftctrforelimhn"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_CNSLDTNPRFTCTRFORELIMHN

**Cnsldtnprftctrforelimhn**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `['ParentNode']` |  | |  | `parent: ['ParentNode']` |  |  |
| `['HierarchyNode']` |  | |  | `child: ['HierarchyNode']` |  |  |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICSPCELIMHN',
  compiler.compareFilter:true
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
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE ],
  sapObjectNodeType.name: 'CnsldtnPrftCtrForElimHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Profit Ctr for Elim - Hier Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnPrftCtrForElimHN
  as select from P_CnsldtnUnivHierNodeElim_2(P_HierarchyType: 'CS04', P_MasterDataType: 'PRCTR') as _HierNode

  association [0..1] to I_CnsldtnControllingArea       as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CnsldtnProfitCenterForElim   as _ProfitCenterForElim on  $projection.ProfitCenter    = _ProfitCenterForElim.ProfitCenter
                                                                               and $projection.ControllingArea = _ProfitCenterForElim.ControllingArea

  association [1..1] to I_CnsldtnProfitCenterHierarchy as _Hierarchy           on  $projection.ConsolidationPrftCtrHierarchy = _Hierarchy.ConsolidationPrftCtrHierarchy
                                                                               and $projection.ControllingArea               = _Hierarchy.ControllingArea
                                                                               and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnProfitCenterHierNodeT as _Text                on  $projection.ControllingArea               = _Text.ControllingArea
                                                                               and $projection.ConsolidationPrftCtrHierarchy = _Text.ConsolidationPrftCtrHierarchy
                                                                               and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                               and $projection.ProfitCenter                  = ''

{
       @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
       @ObjectModel: {
         sapObjectNodeTypeReference: 'CnsldtnControllingArea',
         foreignKey.association: '_ControllingArea' }
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnControllingAreaVH',
           element: 'ControllingArea'
         }
       }]
  key  ControllingArea,

       @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
       @ObjectModel:{
         sapObjectNodeTypeReference: 'CnsldtnProfitCenterHierarchy',
         foreignKey.association: '_Hierarchy' }
  key  cast( CnsldtnUniversalHierarchy as fincs_profitcenterhierarchy preserving type ) as ConsolidationPrftCtrHierarchy,
       // TBD char 40 instead but overcome incompatible change

       @ObjectModel.text.association: '_Text'
  key  HierarchyNode,

       @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
       @Semantics.businessDate.to: true
  key  ValidityEndDate,

       @Semantics.businessDate.from: true
       ValidityStartDate,

       ParentNode,

       @ObjectModel: {
          sapObjectNodeTypeReference: 'CnsldtnProfitCenter',
          foreignKey.association: '_ProfitCenterForElim' }
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnProfitCenterForElimVH',
           element: 'ProfitCenter'},
         additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
       }]
       cast ( case NodeType
         when 'L' then
          case replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(ProfitCenter,
                 '0', ''), '1', ''), '2', ''), '3', ''), '4', ''), '5', ''), '6', ''), '7', ''), '8', ''), '9', '')
             when  ''
               then lpad(ProfitCenter, 25, '0')
               else ProfitCenter
             end
         when '
  then left( HierarchyNodeVal, 25 )` | `when '

## Associations

> Source code not yet loaded. Run enrichment script with SAP system access to populate associations.

## Source Code

> Source code not yet loaded. Connect SAP system MCP and run enrichment script.
  then left( HierarchyNodeVal, 25 )` |
| `else  ''` | `else  ''` |
| `fincs_elim_profitcenter preserving type )` | `end` |
| `HierarchyNodeSequence` | `HierarchyNodeSequence` |
| `HierarchyNodeLevel` | `HierarchyNodeLevel` |
| `NodeType` | `NodeType` |
| `_Text` | *Association* |
| `_ProfitCenterForElim` | *Association* |
| `_Hierarchy` | *Association* |
| `_ControllingArea` | *Association* |

## Associations

> Source code not yet loaded. Run enrichment script with SAP system access to populate associations.

## Source Code

> Source code not yet loaded. Connect SAP system MCP and run enrichment script.
  then left( HierarchyNodeVal, 25 )
         else  ''
       end as fincs_elim_profitcenter preserving type )                                 as ProfitCenter,

       HierarchyNodeSequence,
       HierarchyNodeLevel,
       NodeType,


       _Text,
       _ProfitCenterForElim,
       _Hierarchy,
       _ControllingArea
};
```
  then left( HierarchyNodeVal, 25 )` | `when '

## Associations

> Source code not yet loaded. Run enrichment script with SAP system access to populate associations.

## Source Code

> Source code not yet loaded. Connect SAP system MCP and run enrichment script.
  then left( HierarchyNodeVal, 25 )` |
| `else  ''` | `else  ''` |
| `fincs_elim_profitcenter preserving type )` | `end` |
| `HierarchyNodeSequence` | `HierarchyNodeSequence` |
| `HierarchyNodeLevel` | `HierarchyNodeLevel` |
| `NodeType` | `NodeType` |
| `_Text` | *Association* |
| `_ProfitCenterForElim` | *Association* |
| `_Hierarchy` | *Association* |
| `_ControllingArea` | *Association* |

## Associations

> Source code not yet loaded. Run enrichment script with SAP system access to populate associations.

## Source Code

> Source code not yet loaded. Connect SAP system MCP and run enrichment script.
