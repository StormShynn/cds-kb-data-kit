---
name: I_GLACCOUNTHIERARCHY
description: GL AccountHIERARCHY
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
# I_GLACCOUNTHIERARCHY

**GL AccountHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` | ✓ | |  | `cast ( hrrp_dir_n.hryid_42 as fis_glaccthier preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `hryvalto` |  |  |
| `ValidityStartDate` |  | |  | `hryvalfrom` |  |  |
| `HierarchyType` |  | |  | `hrytyp` |  |  |
| `LastChangedByUser` |  | |  | `upduser` |  |  |
| `LastChangeTime` |  | |  | `updtime` |  |  |
| `LastChangeDateTime` |  | |  | `updtime` |  |  |
| `HierarchyShortID` |  | |  | `hrysid` |  |  |
| `FunctionalAreaIsUsed` |  | |  | `funareaassigned` |  |  |
| `SemanticTagIsUsed` |  | |  | `semtagassigned` |  |  |
| `ChartOfAccounts` |  | |  | `ktopl` |  |  |
| `_Text` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GLAccountHierarchyText` | [0..*] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'General Ledger Account Hierarchy'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true
@AbapCatalog.sqlViewName: 'IFIGLACCOUNTH'
@ObjectModel.representativeKey: 'GLAccountHierarchy'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'GeneralLedgerAccountHierarchy'

define view I_GLAccountHierarchy
  as select from hrrp_dir_n
  association [0..*] to I_GLAccountHierarchyText as _Text            on  $projection.GLAccountHierarchy = _Text.GLAccountHierarchy
                                                                     and $projection.ValidityEndDate    = _Text.ValidityEndDate
  association [0..1] to I_ChartOfAccounts        as _ChartOfAccounts on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts


{
       @ObjectModel.text.association: '_Text'
       @Search.defaultSearchElement:true
       @Search.fuzzinessThreshold:0.8
       @Search.ranking:#HIGH
  key  cast ( hrrp_dir_n.hryid_42 as fis_glaccthier preserving type ) as GLAccountHierarchy,
       @Semantics.businessDate.to: true
  key  hrrp_dir_n.hryvalto                                            as ValidityEndDate,
       @Semantics.businessDate.from: true
       hrrp_dir_n.hryvalfrom                                          as ValidityStartDate,
       hrrp_dir_n.hrytyp                                              as HierarchyType,
       @Semantics.user.lastChangedBy: true
       hrrp_dir_n.upduser                                             as LastChangedByUser,
       @VDM.lifecycle.status:    #DEPRECATED
       @API.element.releaseState: #DEPRECATED
       @API.element.successor:   'LastChangeDateTime'
       @VDM.lifecycle.successor: 'LastChangeDateTime'
       hrrp_dir_n.updtime                                             as LastChangeTime,
       @Semantics.systemDateTime.lastChangedAt: true
       hrrp_dir_n.updtime                                             as LastChangeDateTime,
       hrrp_dir_n.hrysid                                              as HierarchyShortID,
       hrrp_dir_n.funareaassigned                                     as FunctionalAreaIsUsed,
       hrrp_dir_n.semtagassigned                                      as SemanticTagIsUsed,
       @Hierarchy.notAssignedNode.filter: true
       @ObjectModel.foreignKey.association: '_ChartOfAccounts'
       hrrp_dir_n.ktopl                                               as ChartOfAccounts,
       _Text,
       _ChartOfAccounts

}
where
          hrrp_dir_n.hrytyp    =  'FSVN'
  and(
          hrrp_dir_n.aging     is null
    or    hrrp_dir_n.aging     =  ''
  )
  and(
          hrrp_dir_n.hrysource =  'UH'
    or(
          hrrp_dir_n.hrysource <> 'UH'
      and hrrp_dir_n.hryvalto  =  '99991231'
    )
  )
```
