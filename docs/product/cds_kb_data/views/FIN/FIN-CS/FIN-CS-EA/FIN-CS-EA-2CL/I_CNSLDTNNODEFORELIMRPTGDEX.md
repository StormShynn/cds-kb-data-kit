---
name: I_CNSLDTNNODEFORELIMRPTGDEX
description: "Cnsldtnnodeforelimrptgdex"
app_component: FIN-CS-EA-2CL
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
  - FIN-CS-EA
  - interface-view
  - data-extraction
  - component:FIN-CS-EA-2CL
  - lob:Other
---
# I_CNSLDTNNODEFORELIMRPTGDEX

**Cnsldtnnodeforelimrptgdex**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
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
| `HierarchyType` | ✓ | |  | `cast(_node.hrytyp as fincs_hierarchytype preserving type )` |  |  |
| `UniversalHierarchy` | ✓ | | `_node` | `hryid` |  |  |
| `HierarchyNodeClass` | ✓ | |  | `cast(_node.nodecls as fincs_hierarchynodeclass preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  | `cast(_node.hrynode as fincs_hierarchynode preserving type )` |  |  |
| `ParentNode` | ✓ | |  | `cast(_node.parnode as fincs_parentnode preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(_node.hryvalto as fincs_validityenddate preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast(_node.hryvalfrom as fincs_validitystartdate preserving type )` |  |  |
| `HierarchyNodeVal` |  | |  | `cast(_node.nodevalue as fincs_hierarchynodevalue preserving type )` |  |  |
| `HierarchyNodeLevel` |  | |  | `cast(_node.hrylevel as fincs_hierarchynodelevel preserving type )` |  |  |
| `NodeType` |  | |  | `cast(_node.nodetype as fincs_nodetype preserving type )` |  |  |

## Source Code

```abap
@Analytics: {
  dataExtraction: {
    enabled: true
  }
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE],
  sapObjectNodeType.name: 'CnsldtnNodeForElimRptg'

}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Node For Elim Reporting DEX'

define view entity I_CnsldtnNodeForElimRptgDEX
  as select from            hrrp_node_n      as _node

    left outer to many join fincs_addlcharcx as _addlcharcx on _addlcharcx.cnsldtnmanagementelimenabled = 'X'
                                                            and(
                                                              _addlcharcx.cnsldtnaddlcharcfldname       = 'SEGMENT'
                                                              or _addlcharcx.cnsldtnaddlcharcfldname    = 'PRCTR'
                                                            )
                                                            and(
                                                              _node.hrytyp                              = 'CS01'
                                                              or _node.hrytyp                           = 'CS04'
                                                            )
{
  key cast(_node.hrytyp as fincs_hierarchytype preserving type )         as HierarchyType,

  key _node.hryid                                                        as UniversalHierarchy,

  key cast(_node.nodecls as fincs_hierarchynodeclass preserving type )   as HierarchyNodeClass,

  key cast(_node.hrynode as fincs_hierarchynode preserving type )        as HierarchyNode,

  key cast(_node.parnode as fincs_parentnode preserving type )           as ParentNode,

  key cast(_node.hryvalto as fincs_validityenddate preserving type )     as ValidityEndDate,

      cast(_node.hryvalfrom as fincs_validitystartdate preserving type ) as ValidityStartDate,

      cast(_node.nodevalue as fincs_hierarchynodevalue preserving type ) as HierarchyNodeVal,

      cast(_node.hrylevel as fincs_hierarchynodelevel preserving type )  as HierarchyNodeLevel,

      cast(_node.nodetype as fincs_nodetype preserving type )            as NodeType
}
where
            _node.node_timedep                       = ''
  and(
    (
            _node.hrytyp                             = 'CS01'
      and(
            _addlcharcx.cnsldtnaddlcharcfldname      = 'SEGMENT'
        and _addlcharcx.cnsldtnmanagementelimenabled = 'X'
      )
    )
    or(
            _node.hrytyp                             = 'CS04'
      and(
            _addlcharcx.cnsldtnaddlcharcfldname      = 'PRCTR'
        and _addlcharcx.cnsldtnmanagementelimenabled = 'X'
      )
    )
    or      _node.hrytyp                             = 'CS17'
  );
```
