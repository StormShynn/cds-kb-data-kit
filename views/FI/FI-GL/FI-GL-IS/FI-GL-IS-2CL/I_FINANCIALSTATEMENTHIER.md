---
name: I_FINANCIALSTATEMENTHIER
description: Financialstatementhier
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
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINANCIALSTATEMENTHIER

**Financialstatementhier**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialStatementHierarchy` | ✓ | |  | `hryid_42` |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |
| `ValidityStartDate` |  | |  | `case when hrrp_dir_n.hrysource = 'UH' then hrrp_dir_n.hryvalfrom else cast( '19000101' as fis_datab ) end` |
| `HierarchyType` |  | |  | `hrytyp` |
| `LastChangedByUser` |  | |  | `upduser` |
| `LastChangeTime` |  | |  | `updtime` |
| `LastChangeDateTime` |  | |  | `updtime` |
| `ChartOfAccounts` |  | |  | `cast( hrrp_dir_n.ktopl as char80 )` |
| `FinancialStatementAssetsItem` |  | |  | `cast( hrrp_dir_n.aktva as char80 )` |
| `FinStatementLiabilitiesItem` |  | |  | `cast( hrrp_dir_n.pssva as char80 )` |
| `FinancialStatementNetLossItem` |  | |  | `cast( hrrp_dir_n.ergak as char80 )` |
| `FinStatementNetProfitItem` |  | |  | `cast( hrrp_dir_n.ergpa as char80 )` |
| `FinStatementProfitAndLossItem` |  | |  | `cast( hrrp_dir_n.erggv as char80 )` |
| `FinancialStatementOrphansItem` |  | |  | `cast( hrrp_dir_n.zuord as char80 )` |
| `FinancialStatementNotesItem` |  | |  | `cast( hrrp_dir_n.anhng as char80 )` |
| `GroupChartOfAccountIsUsed` |  | |  | `cast( hrrp_dir_n.xergs as char80 )` |
| `FunctionalAreaIsUsed` |  | |  | `cast( hrrp_dir_n.funareaassigned as char80 )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinancialStatementHierT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIGLACCHER'
@ObjectModel.representativeKey: 'FinancialStatementHierarchy'
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Financial Statement Hierarchy'
//@VDM.viewType: #COMPOSITE
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true
@Search.searchable: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]
//@ObjectModel.representativeKey: 'HierarchyVersion'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true
    }
}
@ObjectModel.sapObjectNodeType.name:'FinancialStatementHierarchy'

define view I_FinancialStatementHier
  as select from hrrp_dir_n
  association [0..*] to I_FinancialStatementHierT as _Text on  $projection.FinancialStatementHierarchy = _Text.FinancialStatementHierarchy
                                                           and $projection.ValidityEndDate             = _Text.ValidityEndDate
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
  key hrrp_dir_n.hryid_42                                     as FinancialStatementHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type ) as ValidityEndDate,
      @Semantics.businessDate.from: true
      case when hrrp_dir_n.hrysource = 'UH'
           then hrrp_dir_n.hryvalfrom  //for FSV from Global Hierarchy
           else cast( '19000101' as fis_datab ) end           as ValidityStartDate, //always set valid from as 19000101 for FSV from OB58
      hrrp_dir_n.hrytyp                                       as HierarchyType,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                      as LastChangedByUser,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'LastChangeDateTime'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'LastChangeDateTime'
      //@Semantics.systemDate.lastChangedAt: true
      hrrp_dir_n.updtime                                      as LastChangeTime,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                      as LastChangeDateTime,
      _Text,
      cast( hrrp_dir_n.ktopl as char80 )                      as ChartOfAccounts,
      cast( hrrp_dir_n.aktva as char80 )                      as FinancialStatementAssetsItem,
      cast( hrrp_dir_n.pssva as char80 )                      as FinStatementLiabilitiesItem,
      cast( hrrp_dir_n.ergak as char80 )                      as FinancialStatementNetLossItem,
      cast( hrrp_dir_n.ergpa as char80 )                      as FinStatementNetProfitItem,
      cast( hrrp_dir_n.erggv as char80 )                      as FinStatementProfitAndLossItem,
      cast( hrrp_dir_n.zuord as char80 )                      as FinancialStatementOrphansItem,
      cast( hrrp_dir_n.anhng as char80 )                      as FinancialStatementNotesItem,
      cast( hrrp_dir_n.xergs as char80 )                      as GroupChartOfAccountIsUsed,
      cast( hrrp_dir_n.funareaassigned as char80 )            as FunctionalAreaIsUsed
}
where
       hrrp_dir_n.hier_catg         =    'FSVN'
  and(
       hrrp_dir_n.hryvalto          =    '99991231'
    or hrrp_dir_n.hrysource         =    'UH'
  )
  and  hrrp_dir_n.aging             =    ''
 // and  hrrp_dir_n.banksplitassigned =    ''
```
