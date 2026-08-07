---
name: SATC_API_FINDINGS
description: Satc Api Findings
app_component: BC-DWB-TOO-ATF
software_component: SAP_BASIS
release_state: released
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
# SATC_API_FINDINGS

**Satc Api Findings**

| Property | Value |
|---|---|
| App Component | `BC-DWB-TOO-ATF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ResultId` | ✓ | |  |  |
| `ItemId` | ✓ | |  |  |
| `CheckRunIndex` | ✓ | |  |  |
| `CreatedOnItem` |  | |  |  |
| `Status` |  | |  | `cast( Status as I_SATC_API_ITEM_STATE preserving type )` |
| `ChangedOn` |  | |  |  |
| `module_id` |  | |  |  |
| `CheckVariant` |  | |  |  |
| `ObjectName` |  | |  |  |
| `ObjectType` |  | |  |  |
| `PackageName` |  | |  |  |
| `ContactPerson` |  | |  |  |
| `ObjectProvider` |  | |  |  |
| `ApplicationComponent` |  | |  |  |
| `DLVRelease` |  | |  |  |
| `DLVUnit` |  | |  |  |
| `TransportLayer` |  | |  |  |
| `Responsible` |  | |  |  |
| `module_msg_key` |  | |  |  |
| `MessageTitle` |  | |  |  |
| `QualityStandard` |  | |  |  |
| `ChecksumVersion` |  | |  |  |
| `Checksum` |  | |  |  |
| `ExemptionKind` |  | |  | `cast( ExemptionKind as I_SATC_API_EXEMPTION_KIND preserving type )` |
| `ExemptionValidity` |  | |  | `cast( ExemptionValidity as I_SATC_API_EXEMPTION_VAL preserving type )` |
| `ExemptionApproval` |  | |  | `cast( ExemptionApproval as I_SATC_API_EXEMPTION_APPR preserving type )` |
| `ExemptionKindItem` |  | |  | `cast( ExemptionKindItem as I_SATC_API_EXEMPTION_KIND preserving type )` |
| `ExemptionValidityItem` |  | |  | `cast( ExemptionValidityItem as I_SATC_API_EXEMPTION_VAL preserving type )` |
| `ExemptionApprovalItem` |  | |  | `cast( ExemptionApprovalItem as I_SATC_API_EXEMPTION_APPR preserving type )` |
| `ExemptionId` |  | |  |  |
| `FindingLocation` |  | |  |  |
| `HasQuickfixes` |  | |  | `cast( HasQuickfixes as I_SATC_API_FNDQF preserving type )` |
| `LastChangedBy` |  | |  |  |
| `LastChangedOn` |  | |  |  |
| `Priority` |  | |  | `cast( Priority as I_SATC_API_PRIORITY preserving type )` |
| `CretatedOn` |  | |  |  |
| `Host` |  | |  |  |
| `StatusNew` |  | |  | `cast( StatusNew as I_SATC_API_ITEM_STATE preserving type )` |
| `StatusOld` |  | |  | `cast( StatusOld as I_SATC_API_ITEM_STATE preserving type )` |
| `RemarkText` |  | |  |  |
| `RemarkLink` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ATC: Findings'
@Metadata.allowExtensions:false
define view entity SATC_API_FINDINGS
  as select from SATC_API_FINDINGS_BASE as ATCFindings
{
       /* Field list */
  key  ResultId,
  key  ItemId,
  key  CheckRunIndex,
       @Semantics.dateTime: true
       CreatedOnItem,
       cast( Status as I_SATC_API_ITEM_STATE preserving type )                    as Status,
       @Semantics.dateTime: true
       ChangedOn,
       module_id,
       CheckVariant,
       ObjectName,
       ObjectType,
       PackageName,
       ContactPerson,
       ObjectProvider,
       ApplicationComponent,
       DLVRelease,
       DLVUnit,
       TransportLayer,
       Responsible,
       module_msg_key,
       MessageTitle,
       QualityStandard,
       ChecksumVersion,
       Checksum,
       cast( ExemptionKind as I_SATC_API_EXEMPTION_KIND preserving type )         as ExemptionKind,
       cast( ExemptionValidity as I_SATC_API_EXEMPTION_VAL preserving type )      as ExemptionValidity,
       cast( ExemptionApproval as I_SATC_API_EXEMPTION_APPR preserving type )     as ExemptionApproval,
       cast( ExemptionKindItem as I_SATC_API_EXEMPTION_KIND preserving type )     as ExemptionKindItem,
       cast( ExemptionValidityItem as I_SATC_API_EXEMPTION_VAL preserving type )  as ExemptionValidityItem,
       cast( ExemptionApprovalItem as I_SATC_API_EXEMPTION_APPR preserving type ) as ExemptionApprovalItem,
       ExemptionId,
       FindingLocation,
       cast( HasQuickfixes as I_SATC_API_FNDQF preserving type )                  as HasQuickfixes,
       LastChangedBy,
       LastChangedOn,
       cast( Priority as I_SATC_API_PRIORITY preserving type )                    as Priority,
       @Semantics.dateTime: true
       CretatedOn,
       Host,
       cast( StatusNew as I_SATC_API_ITEM_STATE preserving type )                 as StatusNew,
       cast( StatusOld as I_SATC_API_ITEM_STATE preserving type )                 as StatusOld,
       RemarkText,
       RemarkLink
}
```
