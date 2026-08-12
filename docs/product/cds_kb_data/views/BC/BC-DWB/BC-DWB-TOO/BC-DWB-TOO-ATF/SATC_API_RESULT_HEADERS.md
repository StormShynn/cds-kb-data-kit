---
name: SATC_API_RESULT_HEADERS
description: "Satc Api Result Headers"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResultId` | ✓ | |  |  |  |  |
| `IsActiveResult` |  | |  |  |  |  |
| `IsInBaseline` |  | |  |  |  |  |
| `IsCentralRun` |  | |  |  |  |  |
| `RunSeries` |  | |  |  |  |  |
| `Title` |  | |  |  |  |  |
| `CountPrio1` |  | |  |  |  |  |
| `CountPrio2` |  | |  |  |  |  |
| `CountPrio3` |  | |  |  |  |  |
| `CountCheckFailure` |  | |  |  |  |  |
| `ScheduledBy` |  | |  |  |  |  |
| `ScheduledOnTimestamp` |  | |  |  |  |  |
| `SystemId` |  | |  |  |  |  |
| `ValidToTimestamp` |  | |  |  |  |  |
| `ObjectProvider` |  | |  |  |  |  |
| `ResultAnnotation` |  | |  |  |  |  |
| `AddedToBaselineBy` |  | |  |  |  |  |
| `CheckVariant` |  | |  |  |  |  |
| `Configuration` |  | |  |  |  |  |
| `PseudoCommentPragmaHandling` |  | |  | `cast( PseudoCommentPragmaHandling as I_SATC_API_PCPH preserving type )` |  |  |
| `ChangedOnTimestamp` |  | |  |  |  |  |
| `UniqueSystemId` |  | |  |  |  |  |
| `IsComplete` |  | |  |  |  |  |
| `IsTransient` |  | |  |  |  |  |
| `IsMassTest` |  | |  |  |  |  |
| `IsComposite` |  | |  |  |  |  |
| `IsReworked` |  | |  |  |  |  |
| `IsImported` |  | |  |  |  |  |
| `ScheduledSystemId` |  | |  |  |  |  |
| `ProjectId` |  | |  |  |  |  |
| `ExecutionId` |  | |  |  |  |  |
| `ScheduledClient` |  | |  |  |  |  |

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
