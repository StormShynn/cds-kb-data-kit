---
name: I_GLACCOUNTHIERARCHYNODE
description: GL AccountHIERARCHYNODE
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - gl-account
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLACCOUNTHIERARCHYNODE

**GL AccountHIERARCHYNODE**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: ['ParentNode'], child: ['HierarchyNode'] }` |  |  |
| `}]` |  | |  | `siblingsOrder: [{ by: 'HierarchyNodeSequence', direction: 'ASC' }]` |  |  |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |  |  |

## Source Code

```abap
@EndUserText.label: 'G/L Account Hierarchy Node'
@ObjectModel: { dataCategory: #HIERARCHY }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIGLACCOUNTHN'
@ObjectModel.representativeKey: 'HierarchyNode'
@Hierarchy.parentChild:
[{
  recurse:
    {
        parent: ['ParentNode'],
        child:  ['HierarchyNode']
     },
  siblingsOrder:
    [{
        by: 'HierarchyNodeSequence',
        direction: 'ASC'
    }],
   directory: '_Hierarchy'
  }]

@Analytics.dataExtraction: {enabled:true}

//@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Consumption.filter.businessDate.at: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name:'GLAccountHierarchyNode'

define view I_GLAccountHierarchyNode
  as select from hrrp_node_n
  association [0..*] to I_GLAccountHierarchyNodeT    as _Text                       on  $projection.GLAccountHierarchy = _Text.GLAccountHierarchy
                                                                                    and $projection.HierarchyNode      = _Text.HierarchyNode
                                                                                    and $projection.GLAccount          = '' // just to show that this association is only to be followed if GLAcount is blank

  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                    and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount

  association [0..1] to I_GLAccountHierarchy         as _Hierarchy                  on  $projection.GLAccountHierarchy = _Hierarchy.GLAccountHierarchy
                                                                                    and $projection.ValidityEndDate    = _Hierarchy.ValidityEndDate // Hierarchy directory and hierarchy nodes have the same time slice

  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast ( hrrp_node_n.hryid_42 as fis_glaccthier preserving type ) as GLAccountHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                             as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )        as ValidityEndDate,
      hrrp_node_n.parnode                                             as ParentNode,
      @VDM.lifecycle.status:    #DEPRECATED
      cast( '000000000000001' as hryversn )                           as HierarchyVersion,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )      as ValidityStartDate,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      hrrp_node_n.ktopl                                               as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      cast(hrrp_node_n.saknr as fis_saknr preserving type )           as GLAccount,

      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchyNodeSequence'
      concat(hrrp_node_n.hryseqnbr, hrrp_node_n.hrynode)              as SequenceNumber, // do not use any longer, use HierarchyNodeSequence
      hrrp_node_n.hryseqnbr                                           as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                            as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                            as NodeType,
      @Semantics.signReversalIndicator: true
      cast(hrrp_node_n.sign   as hryattrvalue )                       as SignIsInverted,
      hrrp_node_n.nodevalue                                           as HierarchyNodeVal,
      _Text,
      _GLAccountInChartOfAccounts,
      _Hierarchy,
      _ChartOfAccounts

}
where
          hrrp_node_n.hrytyp   =  'FSVN'
  and     hrrp_node_n.balind   <> 'H'
  and(
          hrrp_node_n.nodetype =  'R'
    or    hrrp_node_n.nodetype =  'N'
    or    hrrp_node_n.nodetype =  'O'
    or(
          hrrp_node_n.nodetype =  'L'
      and hrrp_node_n.nodecls  <> ''
    )
  )
```
