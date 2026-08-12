---
name: I_COMPANYCODEHIERNODE
description: "Company CodeHIERNODE"
app_component: FI-GL-GL-N-2CL
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
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - company-code
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_COMPANYCODEHIERNODE

**Company CodeHIERNODE**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
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
| `}` |  | |  | `recurse: { parent: ['ParentNode'], child: ['HierarchyNode'] }` |  |  |
| `}]` |  | |  | `siblingsOrder: [{ by: 'HierarchyNodeSequence', direction: 'ASC' }]` |  |  |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |  |  |

## Source Code

```abap
@EndUserText.label: 'Company Code Hierarchy Node'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOCODEHN'
@Hierarchy.parentChild:
[{ recurse:          {   parent: ['ParentNode'],   child:  ['HierarchyNode']  },
  siblingsOrder:    [{   by: 'HierarchyNodeSequence',    direction: 'ASC'   }],
  directory:        '_Hierarchy'
  }]
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE , #EXTRACTION_DATA_SOURCE ]

@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL},
  dataCategory: #HIERARCHY
}

@Analytics: { dataExtraction.enabled: true }
@ObjectModel.sapObjectNodeType.name:'CompanyCodeHierarchyNode'

define view I_CompanyCodeHierNode
  as select from hrrp_node_n

  association [0..*] to I_CompanyCodeHierNodeT as _Text        on  $projection.CompanyCodeHierarchy = _Text.CompanyCodeHierarchy
                                                               and $projection.HierarchyNode        = _Text.HierarchyNode
                                                               and $projection.CompanyCode          = '' // just to show that this association is only to be followed if CompanyCode is blank

  association [0..1] to I_CompanyCode          as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_CompanyCodeHierarchy as _Hierarchy   on  $projection.CompanyCodeHierarchy = _Hierarchy.CompanyCodeHierarchy
                                                               and $projection.ValidityEndDate      = _Hierarchy.ValidityEndDate


{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid_42 as fis_hryid_ccode_42 preserving type ) as CompanyCodeHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                               as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )          as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )        as ValidityStartDate,
      hrrp_node_n.parnode                                               as ParentNode,
      @VDM.lifecycle.status:    #DEPRECATED
      cast( '000000000000001' as hryversn )                             as HierarchyVersion,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
      hrrp_node_n.bukrs                                                 as CompanyCode,

      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchySequenceNumber'
      concat(hrrp_node_n.hryseqnbr, hrrp_node_n.hrynode)                as SequenceNumber, // do not use any longer, use HierarchySequenceNumber
      hrrp_node_n.hryseqnbr                                             as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                              as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                              as NodeType,
      hrrp_node_n.nodevalue                                             as HierarchyNodeVal,

      _Text,
      _CompanyCode,
      _Hierarchy

}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  'COCD';
```
