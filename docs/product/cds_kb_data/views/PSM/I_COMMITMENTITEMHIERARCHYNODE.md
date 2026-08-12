---
name: I_COMMITMENTITEMHIERARCHYNODE
description: "Commitment Item Hierarchy Node"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMHIERARCHYNODE')/$value
semantic_en: "Commitment Item Hierarchy Node"
semantic_vi: "Commitment Item Hierarchy Node — CDS view giao diện (master data) dựa trên hrrp_node."
keywords:
  - "commitment"
  - "item"
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
# I_COMMITMENTITEMHIERARCHYNODE

**Commitment Item Hierarchy Node**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMHIERARCHYNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `cast(hrrp_node.nodecls as fikrs )` | `CHAR(4)` | Financial Management Area |
| `CommitmentItemHierarchy` | ✓ | |  | `cast(hrrp_node.hryid as fmis_hryid_commitmentitem)` | `CHAR(40)` | Commitment Item Hierarchy |
| `HierarchyNode` | ✓ | |  | `hrynode` | `CHAR(50)` | Hierarchy node |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_node.hryvalto as fmis_ci_validityenddate preserving type )` | `DATS(8)` | Commitment Item Validity End Date |
| `ParentNode` |  | |  | `parnode` | `CHAR(50)` | Hierarchy parent node |
| `HierarchyVersion` |  | |  | `hryver` | `NUMC(15)` | Hierarchy version |
| `ValidityStartDate` |  | |  | `cast(hrrp_node.hryvalfrom as fmis_ci_validitystartdate preserving type)` | `DATS(8)` | Commitment Item Validity Start Date |
| `CommitmentItemFiscalYear` |  | |  |  | `NUMC(4)` |  |
| `CommitmentItem` |  | |  | `cast ( case hrrp_node.nodetype when 'L' then hrrp_node.nodevalue else '' end as fm_fipex )` | `CHAR(24)` | Commitment Item |
| `SequenceNumber` |  | |  | `concat(hrrp_node.hryseqnbr, hrrp_node.hrynode)` | `CHAR(56)` |  |
| `HierarchyNodeSequence` |  | |  | `hryseqnbr` | `NUMC(6)` | Hierarchy Sequence Number |
| `HierarchyNodeLevel` |  | |  | `hrylevel` | `NUMC(6)` | Hierarchy Level |
| `NodeType` |  | |  | `nodetype` | `CHAR(1)` | Hierarchy node type |
| `_FinMgmtFiscalYear` | | ✓ | | | | |
| `_FinancialManagementAreaText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CommitmentItem` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_FinMgmtArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtFiscalYear` | `I_FiscalYearForFinMgmtArea` | [1..1] |
| `_FinancialManagementAreaText` | `I_FinancialManagementAreaText` | [1..*] |
| `_Text` | `I_CommitmentItemHierarchyNodeT` | [0..*] |
| `_CommitmentItem` | `I_CommitmentItem` | [0..1] |
| `_Hierarchy` | `I_CommitmentItemHierarchy_2` | [1..1] |
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMHIERARCHYNODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMHIERARCHYNODE')/$value)*

```abap
@EndUserText.label: 'Commitment Item Hierarchy Node'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICMMTITEMHN'
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
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@Analytics: { dataExtraction: {enabled:true} }
@ObjectModel.sapObjectNodeType.name: 'CommitmentItem'
@AccessControl.privilegedAssociations: ['_FinancialManagementAreaText']

define view I_CommitmentItemHierarchyNode
  as select from   hrrp_node                    

    inner join   I_FiscalCalDateForFinMgmtArea on  I_FiscalCalDateForFinMgmtArea.FinancialManagementArea = hrrp_node.nodecls
                                               and I_FiscalCalDateForFinMgmtArea.CalendarDate            = hrrp_node.hryvalfrom

  association [1..1] to I_FiscalYearForFinMgmtArea     as _FinMgmtFiscalYear           on  $projection.FinancialManagementArea  = _FinMgmtFiscalYear.FinancialManagementArea
                                                                                       and $projection.CommitmentItemFiscalYear = _FinMgmtFiscalYear.FinMgmtAreaFiscalYear

  association [1..*] to I_FinancialManagementAreaText  as _FinancialManagementAreaText on  $projection.FinancialManagementArea = _FinancialManagementAreaText.FinancialManagementArea

  association [0..*] to I_CommitmentItemHierarchyNodeT as _Text                        on  $projection.CommitmentItemHierarchy = _Text.CommitmentItemHierarchy
                                                                                       and $projection.HierarchyNode           = _Text.HierarchyNode
                                                                                       and $projection.FinancialManagementArea = _Text.FinancialManagementArea
                                                                                       and $projection.CommitmentItem          = '' // just to show that this association is only to be followed if commitment Item is blank

  association [0..1] to I_CommitmentItem               as _CommitmentItem              on  $projection.FinancialManagementArea  = _CommitmentItem.FinancialManagementArea
                                                                                       and $projection.CommitmentItem           = _CommitmentItem.CommitmentItem
                                                                                       and $projection.CommitmentItemFiscalYear = _CommitmentItem.FinMgmtAreaFiscalYear

  association [1..1] to I_CommitmentItemHierarchy_2    as _Hierarchy                   on  $projection.CommitmentItemHierarchy = _Hierarchy.CommitmentItemHierarchy
                                                                                       and $projection.FinancialManagementArea = _Hierarchy.FinancialManagementArea
                                                                                       and $projection.ValidityEndDate         = _Hierarchy.ValidityEndDate

  association [1..1] to I_FinancialManagementArea      as _FinMgmtArea                 on  $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' } }]
//      @ObjectModel.text.association: '_FinancialManagementAreaText'
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key cast(hrrp_node.nodecls as fikrs )                                       as FinancialManagementArea,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node.hryid as fmis_hryid_commitmentitem)                      as CommitmentItemHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node.hrynode                                                       as HierarchyNode,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key cast(hrrp_node.hryvalto as fmis_ci_validityenddate preserving type )    as ValidityEndDate,
      hrrp_node.parnode                                                       as ParentNode,
      hrrp_node.hryver                                                        as HierarchyVersion,
      @Semantics.businessDate.from: true
      cast(hrrp_node.hryvalfrom as fmis_ci_validitystartdate preserving type) as ValidityStartDate,

      @ObjectModel.foreignKey.association: '_FinMgmtFiscalYear'
      I_FiscalCalDateForFinMgmtArea.CommitmentItemFiscalYear                  as CommitmentItemFiscalYear,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CommitmentItemStdVH',
                     element: 'CommitmentItem' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]

      @ObjectModel.foreignKey.association: '_CommitmentItem'
      @Consumption.filter.businessDate.at:true
      cast ( case hrrp_node.nodetype
        when 'L' then  hrrp_node.nodevalue
        else  ''
      end as fm_fipex )                                                       as CommitmentItem,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchyNodeSequence'
      concat(hrrp_node.hryseqnbr, hrrp_node.hrynode)                          as SequenceNumber,
      hrrp_node.hryseqnbr                                                     as HierarchyNodeSequence,
      hrrp_node.hrylevel                                                      as HierarchyNodeLevel,
      hrrp_node.nodetype                                                      as NodeType,

      _Text,
      _CommitmentItem,
      _Hierarchy,
      _FinMgmtArea,
      _FinMgmtFiscalYear,
      @Consumption.hidden: true
      _FinancialManagementAreaText

}
where
      hrrp_node.nodetype          <> 'D'
  and hrrp_node.hrytype =  '0311';
```
