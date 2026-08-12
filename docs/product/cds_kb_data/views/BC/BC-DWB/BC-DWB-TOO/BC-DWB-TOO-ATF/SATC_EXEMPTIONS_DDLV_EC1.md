---
name: SATC_EXEMPTIONS_DDLV_EC1
description: "Satc Exemptions Ddlv EC 1"
app_component: BC-DWB-TOO-ATF
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-TOO
  - component:BC-DWB-TOO-ATF
  - lob:Basis Components
---
# SATC_EXEMPTIONS_DDLV_EC1

**Satc Exemptions Ddlv EC 1**

| Property | Value |
|---|---|
| App Component | `BC-DWB-TOO-ATF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExemptionID` | ✓ | |  | `exemption_id` |  |  |
| `FindingObjectType` |  | |  | `objtype` |  |  |
| `FindingObjectName` |  | |  | `objname` |  |  |
| `FindingSubObjectType` |  | |  | `subobjtype` |  |  |
| `FindingSubObjectName` |  | |  | `subobjname` |  |  |
| `FindingChecksumVersion` |  | |  | `checksum_version` |  |  |
| `FindingChecksum` |  | |  | `checksum` |  |  |
| `FindingObjectScope` |  | |  | `cast( ATCExemptionsAll.object_scope as I_SATC_API_OBJECT_SCOPE preserving type )` |  |  |
| `CheckScope` |  | |  | `cast( ATCExemptionsAll.check_scope as I_SATC_API_CHECK_SCOPE preserving type )` |  |  |
| `CheckClass` |  | |  | `chkclass` |  |  |
| `CheckCode` |  | |  | `chkcode` |  |  |
| `ExemptionValidRelease` |  | |  | `valid_release` |  |  |
| `ExemptionValidUntil` |  | |  | `valid_until` |  |  |
| `ExemptionState` |  | |  | `cast( ATCExemptionsAll.state as I_SATC_API_EXEMPTION_STATE_C1 preserving type )` |  |  |
| `ExemptionPreviousState` |  | |  | `cast( ATCExemptionsAll.prev_state as I_SATC_API_EXEMPTION_STATE_C1 preserving type )` |  |  |
| `ExemptionApplicant` |  | |  | `applicant` |  |  |
| `ExemptionApplicantComment` |  | |  | `appl_comment` |  |  |
| `ExemptionApplicantLastChgdOn` |  | |  | `appl_last` |  |  |
| `ExemptionReason` |  | |  | `reason` |  |  |
| `ExemptionApprover` |  | |  | `approver` |  |  |
| `ExemptionApproverArea` |  | |  | `appr_area` |  |  |
| `ExemptionApproverComment` |  | |  | `appr_comment` |  |  |
| `ExemptionApproverLastChgdOn` |  | |  | `appl_last` |  |  |
| `AffectedSoftwareComponent` |  | |  | `affected_software_component` |  |  |
| `SystemGroupID` |  | |  | `ds_group_id` |  |  |
| `DataSourceID` |  | |  | `data_source_id` |  |  |
| `ExemptionApproverNotification` |  | |  | `notification_request` |  |  |
| `ExemptionArchived` |  | |  | `deleted` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ATC Exemptions (Cat. 1 - CI)'
@Metadata.ignorePropagatedAnnotations: true
define view entity SATC_EXEMPTIONS_DDLV_EC1
  as select from satc_ci_exempt_u_ddlv as ATCExemptionsAll
{
  key ATCExemptionsAll.exemption_id                                                        as ExemptionID,
      ATCExemptionsAll.objtype                                                             as FindingObjectType,
      ATCExemptionsAll.objname                                                             as FindingObjectName,
      ATCExemptionsAll.subobjtype                                                          as FindingSubObjectType,
      ATCExemptionsAll.subobjname                                                          as FindingSubObjectName,
      ATCExemptionsAll.checksum_version                                                    as FindingChecksumVersion,
      ATCExemptionsAll.checksum                                                            as FindingChecksum,
      cast( ATCExemptionsAll.object_scope as I_SATC_API_OBJECT_SCOPE preserving type )     as FindingObjectScope,
      cast( ATCExemptionsAll.check_scope as I_SATC_API_CHECK_SCOPE preserving type )       as CheckScope, 
      ATCExemptionsAll.chkclass                                                            as CheckClass,
      ATCExemptionsAll.chkcode                                                             as CheckCode,
      ATCExemptionsAll.valid_release                                                       as ExemptionValidRelease,
      ATCExemptionsAll.valid_until                                                         as ExemptionValidUntil,
      cast( ATCExemptionsAll.state as I_SATC_API_EXEMPTION_STATE_C1 preserving type )      as ExemptionState,
      cast( ATCExemptionsAll.prev_state as I_SATC_API_EXEMPTION_STATE_C1 preserving type ) as ExemptionPreviousState,
      ATCExemptionsAll.applicant                                                           as ExemptionApplicant,
      ATCExemptionsAll.appl_comment                                                        as ExemptionApplicantComment,
      ATCExemptionsAll.appl_last                                                           as ExemptionApplicantLastChgdOn,
      ATCExemptionsAll.reason                                                              as ExemptionReason,
      ATCExemptionsAll.approver                                                            as ExemptionApprover,
      ATCExemptionsAll.appr_area                                                           as ExemptionApproverArea,
      ATCExemptionsAll.appr_comment                                                        as ExemptionApproverComment,
      ATCExemptionsAll.appl_last                                                           as ExemptionApproverLastChgdOn,
      ATCExemptionsAll.affected_software_component                                         as AffectedSoftwareComponent,
      ATCExemptionsAll.ds_group_id                                                         as SystemGroupID,
      ATCExemptionsAll.data_source_id                                                      as DataSourceID,
      ATCExemptionsAll.notification_request                                                as ExemptionApproverNotification,
      ATCExemptionsAll.deleted                                                             as ExemptionArchived
}
where
  ATCExemptionsAll.category = '1'
```
