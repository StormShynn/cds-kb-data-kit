---
name: I_PRMTHBRPLDPURREQNEMAILPARAM
description: Prmthbrpldpurreqnemailparam
app_component: MM-PUR-HUB-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - workflow
  - email
  - component:MM-PUR-HUB-PR-2CL
  - lob:Sourcing & Procurement
---
# I_PRMTHBRPLDPURREQNEMAILPARAM

**Prmthbrpldpurreqnemailparam**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProcmtHubPurchaseRequisition` | `ProcmtHubPurchaseRequisition` |
| key `ProcmtHubPurRequisitionItem` | `ProcmtHubPurRequisitionItem` |
| key `ProcurementHubSourceSystem` | `ProcurementHubSourceSystem` |
| key `ProcmtHubPurReqnItmCommentUUID` | `ProcmtHubPurReqnItmCommentUUID` |
| `PrmtHbPurReqnItmCmntText` | `PrmtHbPurReqnItmCmntText` |
| `PrmtHbCommentedByUserName` | `PrmtHbCommentedByUserName` |
| `PrmtHbCreatedByUserName` | `cast( '' as sstring )` |

## Source Code

```abap
@VDM.viewType:#COMPOSITE
@AccessControl.authorizationCheck:#MANDATORY
@ObjectModel.usageType.serviceQuality:#A
@ObjectModel.usageType.sizeCategory:#S
@ObjectModel.usageType.dataClass:#TRANSACTIONAL
@AccessControl.personalData.blocking:#BLOCKED_DATA_EXCLUDED
@EndUserText.label:'Email tmpl Rpld for PRs in Pcmt Hub'
@ObjectModel.supportedCapabilities:[#OUTPUT_EMAIL_DATA_PROVIDER]
@ObjectModel.modelingPattern : #NONE
@Metadata.ignorePropagatedAnnotations:true
define view entity I_PrmtHbRpldPurReqnEmailParam
  as select from I_PrmtHbRpldPurReqnItmComment
{
  key ProcmtHubPurchaseRequisition,
  key ProcmtHubPurRequisitionItem,
  key ProcurementHubSourceSystem,
  key ProcmtHubPurReqnItmCommentUUID,
      PrmtHbPurReqnItmCmntText,
      PrmtHbCommentedByUserName,
      cast( '' as sstring ) as PrmtHbCreatedByUserName
}
```
