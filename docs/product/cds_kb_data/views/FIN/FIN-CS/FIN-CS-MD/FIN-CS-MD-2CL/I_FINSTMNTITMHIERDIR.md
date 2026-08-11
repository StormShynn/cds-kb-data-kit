---
name: I_FINSTMNTITMHIERDIR
description: "This CDS view provides access to the master data of the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined? When was the hierarchy changed and by which user?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIR')/$value
semantic_en: "This CDS view provides access to the master data of the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined? When was the hierarchy changed and by which user?"
semantic_vi: "FSItem Hierarchy Directory — CDS view cơ bản (master data) dựa trên hrrp_dir_n."
keywords:
  - "fsitem"
  - "hierarchy"
  - "directory"
  - "consolidation"
  - "chart"
  - "accounts"
  - "financial"
  - "statement"
  - "item"
  - "hier"
  - "additional"
  - "master"
  - "data"
  - "last"
  - "changed"
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - bo:companycode
---
# I_FINSTMNTITMHIERDIR

**This CDS view provides access to the master data of the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined? When was the hierarchy changed and by which user?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( _hrrp_dir_n.itclg as fc_itclg preserving type )` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItemHier` | ✓ | |  | `cast( substring( _hrrp_dir_n.hryid, 9, 10 ) as fc_ithry preserving type )` | `CHAR(10)` | Item Hierarchy |
| `AdditionalMasterDataHierarchy` |  | |  | `cast(_hrrp_dir_n.hryid as fincs_hryid preserving type )` | `CHAR(40)` | Consolidation Hierarchy ID |
| `LastChangedByUser` |  | | `_hrrp_dir_n` | `upduser` | `CHAR(12)` | Last Changed By |
| `LastChangeTime` |  | | `_hrrp_dir_n` | `updtime` | `DEC(15)` | Last Updated At (Timestamp) |
| `LastChangeDateTime` |  | | `_hrrp_dir_n` | `updtime` | `DEC(15)` | Last Updated At (Timestamp) |
| `HierarchyType` |  | | `_hrrp_dir_n` | `hrytyp` | `CHAR(4)` | Hierarchy Type |
| `_Text` | | ✓ | | | | |
| `_Text_2` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinStmntItmHierDirT` | [1..*] |
| `_Text_2` | `I_FinStmntItmHierDirT` | [1..*] |
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIR')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFSITMHIERDIR'
  }
@Analytics: {
  dataCategory: #DIMENSION
  }
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'FinancialStatementItemHier',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ]
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FSItem Hierarchy Directory'

define view I_FinStmntItmHierDir
  as select from hrrp_dir_n as _hrrp_dir_n

  association [1..*] to I_FinStmntItmHierDirT    as _Text            on  $projection.FinancialStatementItemHier   = _Text.FinancialStatementItemHier
                                                                     and $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts

  association [1..*] to I_FinStmntItmHierDirT    as _Text_2          on  $projection.FinancialStatementItemHier    = _Text_2.FinancialStatementItemHier
                                                                     and $projection.ConsolidationChartOfAccounts  = _Text_2.ConsolidationChartOfAccounts
                                                                     and $projection.AdditionalMasterDataHierarchy = _Text_2.AdditionalMasterDataHierarchy

  association [0..1] to I_CnsldtnChartOfAccounts as _ChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts

{

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key cast( _hrrp_dir_n.itclg as fc_itclg preserving type )                     as ConsolidationChartOfAccounts,

      @ObjectModel.text.association: '_Text_2'
  key cast( substring( _hrrp_dir_n.hryid, 9, 10 ) as fc_ithry preserving type ) as FinancialStatementItemHier,

      cast(_hrrp_dir_n.hryid as fincs_hryid preserving type )                   as AdditionalMasterDataHierarchy,

      @Semantics.user.lastChangedBy: true
      _hrrp_dir_n.upduser                                                       as LastChangedByUser,

      @API.element: {releaseState: #DEPRECATED, successor: 'LastChangeDateTime'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'LastChangeDateTime' }
      _hrrp_dir_n.updtime                                                       as LastChangeTime,

      @Semantics.systemDateTime.lastChangedAt: true
      _hrrp_dir_n.updtime                                                       as LastChangeDateTime,

      _hrrp_dir_n.hrytyp                                                        as HierarchyType,


      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,
      _Text_2,
      _ChartOfAccounts
}
where
          _hrrp_dir_n.hrytyp     = 'CS15'
  and(
    (
          _hrrp_dir_n.hryvalfrom = '00000000'
      and _hrrp_dir_n.hryvalto   = '00000000'
    )
    or(
          _hrrp_dir_n.hryvalfrom <= $session.system_date
      and _hrrp_dir_n.hryvalto   >= $session.system_date
    )
  );
```
