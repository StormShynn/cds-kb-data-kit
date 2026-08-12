---
name: I_CHGRECORDLIFECYCLESTATUS
description: "Change Record LifeCycle Status"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDLIFECYCLESTATUS')/$value
semantic_en: "Change Record LifeCycle Status"
semantic_vi: "Change Record LifeCycle Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "change"
  - "record"
  - "lifecycle"
  - "status"
  - "domain"
  - "value"
tags:
  - PLM
  - component:PLM-CR-2CL
  - interface-view
  - PLM-CR
  - PLM-CR-2CL
---
# I_CHGRECORDLIFECYCLESTATUS

**Change Record LifeCycle Status**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDLIFECYCLESTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordLifecycleStatus` | ✓ | |  | `cast( domvalue_l as /iam/issue_lcycle_stat_cd )` | `CHAR(2)` | Issue Lifecycle Status Code |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `ABAPDomain` |  | |  | `domname` | `CHAR(30)` | Domain name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDLIFECYCLESTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDLIFECYCLESTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Change Record LifeCycle Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ChangeRecordLifecycleStatus'
@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel.dataCategory:#VALUE_HELP
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_ChgRecordLifecycleStatus
  as select from dd07l as Domain
{
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #HIGH
  key  cast( domvalue_l as /iam/issue_lcycle_stat_cd ) as ChangeRecordLifecycleStatus,
       @Consumption.hidden: true
       domvalue_l   as DomainValue,
       @Consumption.hidden: true
       domname      as  ABAPDomain       
}
where
      Domain.domname  = '/IAM/ISSUE_LCYCLE_STAT_CD'
  and Domain.as4local = 'A'
```
