---
name: I_CNSLDTNRPTGITMHIERDIR
description: "This CDS view provides access to the master data of the hierarchy of the consolidation reporting item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of reporting item do exist and in which consolidation chart of accounts are they defined? When was the latest change of a hierarchy and by which user?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIR')/$value
semantic_en: "This CDS view provides access to the master data of the hierarchy of the consolidation reporting item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of reporting item do exist and in which consolidation chart of accounts are they defined? When was the latest change of a hierarchy and by which user?"
semantic_vi: "Reporting Item Hierarchy Directory — CDS view giao diện (master data) dựa trên hrrp_directory."
keywords:
  - "reporting"
  - "item"
  - "hierarchy"
  - "directory"
  - "consolidation"
  - "chart"
  - "accounts"
  - "hier"
  - "additional"
  - "master"
  - "data"
  - "last"
  - "changed"
  - "user"
  - "change"
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
  - bo:purchaseorder
---
# I_CNSLDTNRPTGITMHIERDIR

**This CDS view provides access to the master data of the hierarchy of the consolidation reporting item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of reporting item do exist and in which consolidation chart of accounts are they defined? When was the latest change of a hierarchy and by which user?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( left( hrrp_directory.hrycls, 2) as fc_itclg preserving type )` | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` | ✓ | |  | `cast( substring( hrrp_directory.hryid, 9, 10 ) as fincs_rihry preserving type )` | `CHAR(10)` | Reporting Item Hierarchy |
| `AdditionalMasterDataHierarchy` |  | |  | `cast(left(hrrp_directory.hryid, 40) as fincs_hryid preserving type )` | `CHAR(40)` | Consolidation Hierarchy ID |
| `LastChangedByUser` |  | |  | `upduser` | `CHAR(12)` | Last Changed By |
| `LastChangeTime` |  | |  | `updtime` | `DEC(15)` | Last Updated At (Timestamp) |
| `LastChangeDateTime` |  | |  | `updtime` | `DEC(15)` | Last Updated At (Timestamp) |
| `_Text` | | ✓ | | | | |
| `_Text_2` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnRptgItmHierDirT` | [1..*] |
| `_Text_2` | `I_CnsldtnRptgItmHierDirT` | [1..*] |
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIR')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRIHIERDIR',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #CHECK
@Metadata: {
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S },
  representativeKey: 'ConsolidationReportingItemHier',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ]
  }
@VDM.viewType: #BASIC
@Analytics: {
  dataCategory: #DIMENSION }
@EndUserText.label: 'Reporting Item Hierarchy Directory'

define view I_CnsldtnRptgItmHierDir
  as select from hrrp_directory

  association [1..*] to I_CnsldtnRptgItmHierDirT as _Text            on  $projection.ConsolidationReportingItemHier = _Text.ConsolidationReportingItemHier
                                                                     and $projection.ConsolidationChartOfAccounts   = _Text.ConsolidationChartOfAccounts

  association [1..*] to I_CnsldtnRptgItmHierDirT as _Text_2          on  $projection.ConsolidationReportingItemHier = _Text_2.ConsolidationReportingItemHier
                                                                     and $projection.ConsolidationChartOfAccounts   = _Text_2.ConsolidationChartOfAccounts
                                                                     and $projection.AdditionalMasterDataHierarchy  = _Text_2.AdditionalMasterDataHierarchy

  association [0..1] to I_CnsldtnChartOfAccounts as _ChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts

{
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key cast( left( hrrp_directory.hrycls, 2) as fc_itclg preserving type )             as ConsolidationChartOfAccounts,

      @ObjectModel.text.association: '_Text_2'
  key cast( substring( hrrp_directory.hryid, 9, 10 ) as fincs_rihry preserving type ) as ConsolidationReportingItemHier,

      cast(left(hrrp_directory.hryid, 40) as fincs_hryid preserving type )            as AdditionalMasterDataHierarchy,

      @Semantics.user.lastChangedBy: true
      hrrp_directory.upduser                                                          as LastChangedByUser,

      @API.element: {releaseState: #DEPRECATED, successor: 'LastChangeDateTime'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'LastChangeDateTime' }
      hrrp_directory.updtime                                                          as LastChangeTime,

      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_directory.updtime                                                          as LastChangeDateTime,


      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,
      _Text_2,
      _ChartOfAccounts
}
where
          hrrp_directory.hrytyp     = 'CS16'
  and(
    (
          hrrp_directory.hryvalfrom = '19000101'
      and hrrp_directory.hryvalto   = '99991231'
    )
    or(
          hrrp_directory.hryvalfrom = '00000000'
      and hrrp_directory.hryvalto   = '00000000'
    )
  )
```
