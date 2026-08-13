---
name: I_BILLINGDOCTYPEHIERNODE
description: "Billing DocumentTYPEHIERNODE"
semantic_vi: "View I_BILLINGDOCTYPEHIERNODE CDS hiển thị thông tin cấu trúc cấp bậc của hóa đơn, có thể hữu ích khi làm việc với cấu trúc hóa đơn phức tạp hoặc phân tích mối quan hệ giữa các hồ sơ."
keywords:
  - "billing document"
  - "hóa đơn"
  - "hierarchy"
  - "cấu trúc cấp bậc"
  - "fi-gl"
  - "fi-gl-is"
  - "interface-view"
  - "billing"
  - "finance"
  - "finance industry"
  - "finance management"
semantic_en: "The I_BILLINGDOCTYPEHIERNODE CDS view exposes billing document hierarchy information, which is useful when working with complex billing structures or analyzing document relationships."
app_component: FI-GL-IS-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: ['ParentNode'], child: ['HierarchyNode'] }` |  |  |
| `}]` |  | |  | `siblingsOrder: [{ by: 'HierarchyNodeSequence' }]` |  |  |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |  |  |

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
