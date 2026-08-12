---
name: I_CHGRECORDUSERSTATUS
description: "Change Record User Status"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUS')/$value
semantic_en: "Change Record User Status"
semantic_vi: "Change Record User Status — CDS view giao diện dựa trên Change Record User Status."
keywords:
  - "change"
  - "record"
  - "user"
  - "status"
tags:
  - PLM
  - component:PLM-CR-2CL
  - interface-view
  - PLM-CR
  - PLM-CR-2CL
---
# I_CHGRECORDUSERSTATUS

**Change Record User Status**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordStatus` | ✓ | |  | `status` | `CHAR(2)` | User Status Code |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Change Record User Status'
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
@Search.searchable: true
@VDM.viewType: #BASIC
define root view entity I_ChgRecordUserStatus
  as select from /iam/c_stat
  composition [0..*] of I_ChgRecordUserStatusText as _Text
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key status as ChangeRecordStatus,
  _Text
}
where
  status_field = '01'
```
