---
name: I_CNSLDTNGROUP
description: "This CDS view provides access to the master data of a consolidation group. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension for my consolidation groups or subgroups? What is the hierarchy level of a certain group within a hierarchy of consolidation groups?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUP')/$value
semantic_en: "This CDS view provides access to the master data of a consolidation group. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension for my consolidation groups or subgroups? What is the hierarchy level of a certain group within a hierarchy of consolidation groups?"
semantic_vi: "Consolidation Group — CDS view giao diện dựa trên tf180."
keywords:
  - "consolidation"
  - "group"
  - "dimension"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - bo:salesorder
---
# I_CNSLDTNGROUP

**This CDS view provides access to the master data of a consolidation group. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension for my consolidation groups or subgroups? What is the hierarchy level of a certain group within a hierarchy of consolidation groups?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | |  | `dimen` | `CHAR(2)` | Dimension |
| `ConsolidationGroup` | ✓ | |  | `congr` | `CHAR(18)` | Consolidation Group |
| `_Text` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |
| `_GrpHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGroupT` | [0..*] |
| `_Dimension` | `I_CnsldtnDimension` | [0..1] |
| `_GrpHierNode` | `I_CnsldtnGrpHierNode` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUP')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'ICCGROUP',
  compiler.compareFilter: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL }
  }
@AccessControl: {
  authorizationCheck: #CHECK,
  privilegedAssociations: [ '_GrpHierNode' ]
  }
@Metadata: {
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationGroup',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationGroup'
  }
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Group'

define view I_CnsldtnGroup
  as select from tf180
  association [0..*] to I_CnsldtnGroupT      as _Text        on  $projection.ConsolidationDimension = _Text.ConsolidationDimension
                                                             and $projection.ConsolidationGroup     = _Text.ConsolidationGroup
  association [0..1] to I_CnsldtnDimension   as _Dimension   on  $projection.ConsolidationDimension = _Dimension.ConsolidationDimension

  association [0..*] to I_CnsldtnGrpHierNode as _GrpHierNode on  $projection.ConsolidationDimension = _GrpHierNode.ConsolidationDimension
                                                             and $projection.ConsolidationGroup     = _GrpHierNode.ConsolidationGroup
{


      @ObjectModel.foreignKey.association: '_Dimension'
  key dimen as ConsolidationDimension,


      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_GrpHierNode'
  key congr as ConsolidationGroup,

      //      dimen as CnsldtnDimension,
      //      congr as CnsldtnGroup,

      _Dimension,

      _Text,

      _GrpHierNode
}
where
       dimen = 'Y1'
  and(
       scope = ''
    or scope = 'M'
  )
```
