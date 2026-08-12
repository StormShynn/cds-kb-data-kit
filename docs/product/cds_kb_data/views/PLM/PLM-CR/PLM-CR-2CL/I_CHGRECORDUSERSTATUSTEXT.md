---
name: I_CHGRECORDUSERSTATUSTEXT
description: "Change Record user status - Text"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUSTEXT')/$value
semantic_en: "Change Record user status - Text"
semantic_vi: "Change Record user status - Text — CDS view giao diện dựa trên Change Record user status - Text."
keywords:
  - "change"
  - "record"
  - "user"
  - "status"
  - "text"
  - "language"
  - "description"
tags:
  - PLM
  - component:PLM-CR-2CL
  - interface-view
  - PLM-CR
  - PLM-CR-2CL
---
# I_CHGRECORDUSERSTATUSTEXT

**Change Record user status - Text**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `ChangeRecordStatus` | ✓ | |  | `status` | `CHAR(2)` | User Status Code |
| `ChangeRecordStatusDescription` |  | |  | `description` | `CHAR(30)` | Status Text |
| `_Language` | | ✓ | | | | |
| `_ChangeRecordUserStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUSTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Change Record user status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.representativeKey: 'ChangeRecordStatus'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_ChgRecordUserStatusText
  as select from /iam/c_stat_t
  association        to parent I_ChgRecordUserStatus as _ChangeRecordUserStatus on $projection.ChangeRecordStatus = _ChangeRecordUserStatus.ChangeRecordStatus  
  association [0..1] to I_Language                   as _Language               on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu       as Language,
  key status      as ChangeRecordStatus,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      description as ChangeRecordStatusDescription,
      _Language,
      _ChangeRecordUserStatus
}
where
  status_field = '01'
```
