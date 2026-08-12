---
name: I_CHGRECORDLIFECYCLESTATUS
description: "Change Record LifeCycle Status"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
