---
name: I_CNSLDTNUNITELIMNODE
description: "Cnsldtnunitelimnode"
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
# I_CNSLDTNUNITELIMNODE

**Cnsldtnunitelimnode**

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
| `ConsolidationUnit` | ✓ | |  | `cast(left(_node.nodevalue, 25) as fincs_elim_unit preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnUnitElimNodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSUNITELIMNODE',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true,
  allowExtensions:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  representativeKey: 'ConsolidationUnit',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnUnitElimNode'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Unit Mgmt Elim Node'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnUnitElimNode
  as select distinct from hrrp_node as _node

  association [0..*] to I_CnsldtnUnitElimNodeText as _Text on $projection.ConsolidationUnit = _Text.ConsolidationUnit

{

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnUnitForElimination',
        text.association: '_Text' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnUnitForEliminationVH',
          element: 'ConsolidationUnit'
        }
      }]
  key cast(left(_node.nodevalue, 25) as fincs_elim_unit preserving type ) as ConsolidationUnit,


      _Text
}
where
      _node.nodetype     = '

//and _node.node_timedep = ''
  and _node.hrytype      = 'CS17'
  and _node.nodecls      = 'Y1' // aka Dimension
```
