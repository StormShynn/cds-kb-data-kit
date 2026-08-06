---
name: SATC_API_RESULT_HEADERS
description: Satc Api Result Headers
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
  - header-level
  - component:BC-DWB-TOO-ATF
  - lob:Basis Components
---
# SATC_API_RESULT_HEADERS

**Satc Api Result Headers**

| Property | Value |
|---|---|
| App Component | `BC-DWB-TOO-ATF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ResultId` | `ResultId` |
| `IsActiveResult` | `IsActiveResult` |
| `IsInBaseline` | `IsInBaseline` |
| `IsCentralRun` | `IsCentralRun` |
| `RunSeries` | `RunSeries` |
| `Title` | `Title` |
| `CountPrio1` | `CountPrio1` |
| `CountPrio2` | `CountPrio2` |
| `CountPrio3` | `CountPrio3` |
| `CountCheckFailure` | `CountCheckFailure` |
| `ScheduledBy` | `ScheduledBy` |
| `ScheduledOnTimestamp` | `ScheduledOnTimestamp` |
| `SystemId` | `SystemId` |
| `ValidToTimestamp` | `ValidToTimestamp` |
| `ObjectProvider` | `ObjectProvider` |
| `ResultAnnotation` | `ResultAnnotation` |
| `AddedToBaselineBy` | `AddedToBaselineBy` |
| `CheckVariant` | `CheckVariant` |
| `Configuration` | `Configuration` |
| `PseudoCommentPragmaHandling` | `cast( PseudoCommentPragmaHandling as I_SATC_API_PCPH preserving type )` |
| `ChangedOnTimestamp` | `ChangedOnTimestamp` |
| `UniqueSystemId` | `UniqueSystemId` |
| `IsComplete` | `IsComplete` |
| `IsTransient` | `IsTransient` |
| `IsMassTest` | `IsMassTest` |
| `IsComposite` | `IsComposite` |
| `IsReworked` | `IsReworked` |
| `IsImported` | `IsImported` |
| `ScheduledSystemId` | `ScheduledSystemId` |
| `ProjectId` | `ProjectId` |
| `ExecutionId` | `ExecutionId` |
| `ScheduledClient` | `ScheduledClient` |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ATC: Result Headers'
@Metadata.allowExtensions:false
define root view entity SATC_API_RESULT_HEADERS
  as select from SATC_API_RESULT_HEADERS_BASE as ATCResultHeaders
{
      /* Field list */
  key ResultId,
      @Semantics.booleanIndicator: true
      IsActiveResult,
      @Semantics.booleanIndicator: true
      IsInBaseline,
      @Semantics.booleanIndicator: true
      IsCentralRun,
      RunSeries,
      Title,
      CountPrio1,
      CountPrio2,
      CountPrio3,
      CountCheckFailure,
      ScheduledBy,
      @Semantics.dateTime: true
      ScheduledOnTimestamp,
      SystemId,
      @Semantics.dateTime: true
      ValidToTimestamp,
      ObjectProvider,
      ResultAnnotation,
      AddedToBaselineBy,
      CheckVariant,
      Configuration,
      cast( PseudoCommentPragmaHandling as I_SATC_API_PCPH preserving type ) as PseudoCommentPragmaHandling,
      @Semantics.dateTime: true
      ChangedOnTimestamp,
      UniqueSystemId,
      @Semantics.booleanIndicator: true
      IsComplete,
      @Semantics.booleanIndicator: true
      IsTransient,
      @Semantics.booleanIndicator: true
      IsMassTest,
      @Semantics.booleanIndicator: true
      IsComposite,
      @Semantics.booleanIndicator: true
      IsReworked,
      @Semantics.booleanIndicator: true
      IsImported,
      ScheduledSystemId,
      ProjectId,
      ExecutionId,
      ScheduledClient
}
```
