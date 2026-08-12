---
name: I_CHGRECDLIFECYCLESTATUSTXT
description: "Change Record LifeCycle Status - Text"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECDLIFECYCLESTATUSTXT')/$value
semantic_en: "Change Record LifeCycle Status - Text"
semantic_vi: "Change Record LifeCycle Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "change"
  - "record"
  - "lifecycle"
  - "status"
  - "text"
  - "language"
  - "domain"
  - "value"
tags:
  - PLM
  - component:PLM-CR-2CL
  - interface-view
  - PLM-CR
  - PLM-CR-2CL
---
# I_CHGRECDLIFECYCLESTATUSTXT

**Change Record LifeCycle Status - Text**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECDLIFECYCLESTATUSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordLifecycleStatus` | ✓ | |  | `cast( domvalue_l as /iam/issue_lcycle_stat_cd )` | `CHAR(2)` | Issue Lifecycle Status Code |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `ChangeRecordLifecycleStatusTxt` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECDLIFECYCLESTATUSTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECDLIFECYCLESTATUSTXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Change Record LifeCycle Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.representativeKey: 'ChangeRecordLifecycleStatus'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
//@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_ChgRecdLifecycleStatusTxt
  as select from dd07t as Domain
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key   cast( domvalue_l as /iam/issue_lcycle_stat_cd ) as ChangeRecordLifecycleStatus,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
  key   ddlanguage                                      as Language,
        @Consumption.hidden: true
        domvalue_l                                      as DomainValue,
//        @Search.defaultSearchElement: true
//        @Search.fuzzinessThreshold: 0.8
//        @Search.ranking: #LOW
        @Semantics.text: true
        ddtext                                          as ChangeRecordLifecycleStatusTxt,
        _Language
}
where
      Domain.as4local = 'A'
  and Domain.domname  = '/IAM/ISSUE_LCYCLE_STAT_CD'
```
