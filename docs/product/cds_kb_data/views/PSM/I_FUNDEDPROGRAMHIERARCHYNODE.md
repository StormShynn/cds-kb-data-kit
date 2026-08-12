---
name: I_FUNDEDPROGRAMHIERARCHYNODE
description: "Funded Program Hierarchy Node"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMHIERARCHYNODE')/$value
semantic_en: "Funded Program Hierarchy Node"
semantic_vi: "Funded Program Hierarchy Node — CDS view giao diện (master data) dựa trên hrrp_node."
keywords:
  - "funded"
  - "program"
  - "hierarchy"
  - "node"
  - "financial"
  - "management"
  - "area"
  - "validity"
  - "date"
  - "parent"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNDEDPROGRAMHIERARCHYNODE

**Funded Program Hierarchy Node**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMHIERARCHYNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `cast(hrrp_node.nodecls as fikrs )` | `CHAR(4)` | Financial Management Area |
| `FundedProgramHierarchy` | ✓ | |  | `cast(hrrp_node.hryid as fmis_hryid_fundedprogram)` | `CHAR(40)` | Funded Program Hierarchy |
| `HierarchyNode` | ✓ | |  | `hrynode` | `CHAR(50)` | Hierarchy node |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_node.hryvalto as fmis_fp_validityenddate preserving type )` | `DATS(8)` | Funded Program Validity End Date |
| `ParentNode` |  | |  | `parnode` | `CHAR(50)` | Hierarchy parent node |
| `HierarchyVersion` |  | |  | `hryver` | `NUMC(15)` | Hierarchy version |
| `ValidityStartDate` |  | |  | `cast(hrrp_node.hryvalfrom as fmis_fp_validitystartdate preserving type)` | `DATS(8)` | Funded Program Validity Start Date |
| `FundedProgram` |  | |  | `cast ( case nodetype when 'L' then hrrp_node.nodevalue else '' end as fm_measure )` | `CHAR(24)` | Funded Program |
| `HierarchyNodeSequence` |  | |  | `hryseqnbr` | `NUMC(6)` | Hierarchy Sequence Number |
| `HierarchyNodeLevel` |  | |  | `hrylevel` | `NUMC(6)` | Hierarchy Level |
| `NodeType` |  | |  | `nodetype` | `CHAR(1)` | Hierarchy node type |
| `_FinancialManagementAreaText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_FundedProgram` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_FinMgmtArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialManagementAreaText` | `I_FinancialManagementAreaText` | [1..*] |
| `_Text` | `I_FundedProgramHierarchyNodeT` | [0..*] |
| `_FundedProgram` | `I_FundedProgram` | [0..1] |
| `_Hierarchy` | `I_FundedProgramHierarchy` | [1..1] |
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMHIERARCHYNODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMHIERARCHYNODE')/$value)*

```abap
@EndUserText.label: 'Funded Program Hierarchy Node'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFUNDEDPHN'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@hierarchy.parentChild:[
{ recurse:          {   parent: 'ParentNode',   child:  'HierarchyNode'   },
  siblingsOrder:    {   by: 'HierarchyNodeSequence',    direction: 'ASC'   },
  directory:        '_Hierarchy'
  }]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL},
  dataCategory: #HIERARCHY
}
@ObjectModel.representativeKey: 'HierarchyNode'
@Metadata.ignorePropagatedAnnotations:true 
@Analytics: { dataExtraction: {enabled:true} }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@AccessControl.privilegedAssociations: ['_FinancialManagementAreaText']
@ObjectModel.sapObjectNodeType.name: 'FundedProgram'

define view I_FundedProgramHierarchyNode
  as select from hrrp_node

  association [1..*] to I_FinancialManagementAreaText as _FinancialManagementAreaText on  $projection.FinancialManagementArea = _FinancialManagementAreaText.FinancialManagementArea

  association [0..*] to I_FundedProgramHierarchyNodeT as _Text                        on  $projection.FundedProgramHierarchy  = _Text.FundedProgramHierarchy
                                                                                      and $projection.HierarchyNode           = _Text.HierarchyNode
                                                                                      and $projection.FinancialManagementArea = _Text.FinancialManagementArea
//                                                                                      and $projection.FundedProgram           = '' // just to show that this association is only to be followed if funds center is blank

  association [0..1] to I_FundedProgram               as _FundedProgram               on  $projection.FundedProgram           = _FundedProgram.FundedProgram
                                                                                      and $projection.FinancialManagementArea = _FundedProgram.FinancialManagementArea

  association [1..1] to I_FundedProgramHierarchy      as _Hierarchy                   on  $projection.FundedProgramHierarchy  = _Hierarchy.FundedProgramHierarchy
                                                                                      and $projection.FinancialManagementArea = _Hierarchy.FinancialManagementArea
                                                                                      and $projection.ValidityEndDate         = _Hierarchy.ValidityEndDate

  association [1..1] to I_FinancialManagementArea     as _FinMgmtArea                 on  $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' } }]
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key cast(hrrp_node.nodecls as fikrs )                                       as FinancialManagementArea,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node.hryid as fmis_hryid_fundedprogram)                       as FundedProgramHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node.hrynode                                                       as HierarchyNode,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key cast(hrrp_node.hryvalto as fmis_fp_validityenddate preserving type )    as ValidityEndDate,
      hrrp_node.parnode                                                       as ParentNode,
      hrrp_node.hryver                                                        as HierarchyVersion,
      @Semantics.businessDate.from: true
      cast(hrrp_node.hryvalfrom as fmis_fp_validitystartdate preserving type) as ValidityStartDate,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FundedProgramStdVH',
                     element: 'FundedProgram' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]

      @ObjectModel.foreignKey.association: '_FundedProgram'
      @Consumption.filter.businessDate.at:true
      cast ( case nodetype
        when 'L' then  hrrp_node.nodevalue
        else  ''
      end as fm_measure )                                                     as FundedProgram,
      hrrp_node.hryseqnbr                                                     as HierarchyNodeSequence,
      hrrp_node.hrylevel                                                      as HierarchyNodeLevel,
      hrrp_node.nodetype                                                      as NodeType,

      _Text,
      _FundedProgram,
      _Hierarchy,
      _FinMgmtArea,
      @Consumption.hidden: true
      _FinancialManagementAreaText


}
where
      nodetype          <> 'D'
  and hrrp_node.hrytype =  '0315';
```
