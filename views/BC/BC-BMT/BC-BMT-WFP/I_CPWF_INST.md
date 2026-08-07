---
name: I_CPWF_INST
description: Cpwf Inst
app_component: BC-BMT-WFP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-WFP
  - interface-view
  - component:BC-BMT-WFP
  - lob:Basis Components
---
# I_CPWF_INST

**Cpwf Inst**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CpWfHandle` | ✓ | |  |  |
| `RetentionTime` |  | |  |  |
| `CpWfDefId` |  | |  |  |
| `PaWfDefId` |  | |  |  |
| `Consumer` |  | |  |  |
| `LastChangeOn` |  | |  |  |
| `Context` |  | |  |  |
| `CallbackClass` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Cloud Platform Workflow Instances'
@Metadata.allowExtensions: true
@ObjectModel.sapObjectNodeType.name: 'ExtensionWorkflow'
define root view entity I_CPWF_INST
  provider contract transactional_interface
  as projection on R_CPWF_INST as ExtensionWorkflow
{
  key CpWfHandle,
      RetentionTime,
      CpWfDefId,
      PaWfDefId,
      Consumer,
      LastChangeOn,
      Context,
      CallbackClass
}
```
