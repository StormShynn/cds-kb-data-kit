---
name: I_BILLINGDOCTYPEHIERNODE
description: Billing DocumentTYPEHIERNODE
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
  - billing-document
  - billing
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BILLINGDOCTYPEHIERNODE

**Billing DocumentTYPEHIERNODE**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: ['ParentNode'], child: ['HierarchyNode'] }` |
| `}]` |  | |  | `siblingsOrder: [{ by: 'HierarchyNodeSequence' }]` |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Billing Document Type Hierarchy Node'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L},
  dataCategory: #HIERARCHY
}
@VDM.viewType: #BASIC
@Hierarchy.parentChild:
[{ recurse:          {   parent: ['ParentNode'],   child:  ['HierarchyNode']  },
  siblingsOrder:    [{   by: 'HierarchyNodeSequence' }],
  directory:        '_Hierarchy'
  }]
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.sapObjectNodeType.name:'BillingDocTypeHierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE , #EXTRACTION_DATA_SOURCE ]

define view entity I_BillingDocTypeHierNode
  as select from hrrp_node_n
  association [0..*] to I_BillingDocTypeHierNodeTxt as _Text                on  $projection.BillingDocumentTypeHierarchy = _Text.BillingDocumentTypeHierarchy
                                                                            and $projection.HierarchyNode                = _Text.HierarchyNode
                                                                            and $projection.BillingDocumentType          = '' // just to show that this association is only to be followed if BillingDocumentType is blank

  association [0..1] to I_BillingDocumentType       as _BillingDocumentType on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [1..1] to I_BillingDocumentTypeHier   as _Hierarchy           on  $projection.BillingDocumentTypeHierarchy = _Hierarchy.BillingDocumentTypeHierarchy
                                                                            and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate
{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_billingdoctype preserving type ) as BillingDocumentTypeHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                                  as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )             as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )           as ValidityStartDate,
      hrrp_node_n.parnode                                                  as ParentNode,

      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BillingDocumentTypeStdVH',
                     element: 'BillingDocumentType' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      hrrp_node_n.fkart                                                    as BillingDocumentType,

      hrrp_node_n.hryseqnbr                                                as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                                 as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                                 as NodeType,
      hrrp_node_n.nodevalue                                                as HierarchyNodeVal,

      _Text,
      _BillingDocumentType,
      _Hierarchy
}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  'U504';
```
