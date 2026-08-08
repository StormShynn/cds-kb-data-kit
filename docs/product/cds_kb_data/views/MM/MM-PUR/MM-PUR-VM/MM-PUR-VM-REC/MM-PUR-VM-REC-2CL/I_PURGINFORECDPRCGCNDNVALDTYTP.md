---
name: I_PURGINFORECDPRCGCNDNVALDTYTP
description: "Purginforecdprcgcndnvaldtytp"
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-VM
  - interface-view
  - transactional-processing
  - component:MM-PUR-VM-REC-2CL
  - lob:Sourcing & Procurement
---
# I_PURGINFORECDPRCGCNDNVALDTYTP

**Purginforecdprcgcndnvaldtytp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingInfoRecord` | ✓ | |  |  |  |  |
| `PurchasingInfoRecordCategory` | ✓ | |  |  |  |  |
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `PurgDocOrderQuantityUnit` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_PurgInfoRecdCndnRecord` | | ✓ | | | | |
| `_PurgInfoRecdOrgPlntData` | | ✓ | | | | |
| `_PurgInfoRecd` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Pur Info Recd Pricing Cndn Valdty - TP' 
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Metadata.ignorePropagatedAnnotations: true

define view entity I_PurgInfoRecdPrcgCndnValdtyTP as projection on R_PurgInfoRecdPrcgCndnValdtyTP {
 key PurchasingInfoRecord,
 key PurchasingInfoRecordCategory,
 key PurchasingOrganization,
 key Plant,
 key ConditionRecord,
 key ConditionValidityEndDate,
 ConditionValidityStartDate,
 ConditionApplication,
 ConditionType,
 PurgDocOrderQuantityUnit,
 Supplier,
 MaterialGroup,
 Material,
 LastChangeDateTime,
 
 /*Composition Entities */
 _PurgInfoRecdCndnRecord : redirected to composition child I_PurgInfoRecdCndnRecordTP,
 _PurgInfoRecdOrgPlntData : redirected to parent I_PurgInfoRecdOrgPlntDataTP ,
 _PurgInfoRecd : redirected to I_PurchasingInfoRecordTP
 
 
}
```
