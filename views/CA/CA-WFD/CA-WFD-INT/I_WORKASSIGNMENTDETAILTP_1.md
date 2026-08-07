---
name: I_WORKASSIGNMENTDETAILTP_1
description: Workassignmentdetailtp 1
app_component: CA-WFD-INT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-WFD
  - CA-WFD-INT
  - interface-view
  - transactional-processing
  - component:CA-WFD-INT
  - lob:Cross-Application Components
---
# I_WORKASSIGNMENTDETAILTP_1

**Workassignmentdetailtp 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkforcePersonExternalID` | ✓ | |  |  |  |  |
| `WorkAssignmentExternalID` | ✓ | |  |  |  |  |
| `Country2DigitISOCode` | ✓ | |  |  |  |  |
| `WorkAssignmentStartDate` | ✓ | |  |  |  |  |
| `WorkAssignmentEndDate` |  | |  |  |  |  |
| `WorkAssignmentStatus` |  | |  |  |  |  |
| `EmploymentPercent` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `WeeklyWorkingHours` |  | |  |  |  |  |
| `WeeklyWorkingDays` |  | |  |  |  |  |
| `WorkAssignmentJobTitle` |  | |  |  |  |  |
| `WorkAssignmentJobCode` |  | |  |  |  |  |
| `SupervisorWorkAssignmentExtID` |  | |  |  |  |  |
| `WorkforceAssignmentIsPrimary` |  | |  |  |  |  |
| `IsBlocked` |  | |  |  |  |  |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Projection of WorkAssignment Detail - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:{
usageType:{
  serviceQuality: #B,
  sizeCategory: #XXL,
  dataClass: #TRANSACTIONAL
},
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
    }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
//@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkAssignmentDetailTP_1
  as projection on R_WorkAssignmentDetailTP_1
{
      //      @Search.defaultSearchElement: true
  key WorkforcePersonExternalID,
      //      @Search.defaultSearchElement: true
      //      @Search.fuzzinessThreshold: 0.8
      //      @Search.ranking: #HIGH
  key WorkAssignmentExternalID,
      //      @Search.defaultSearchElement: true
  key Country2DigitISOCode,
  key WorkAssignmentStartDate,
      WorkAssignmentEndDate,
      @Semantics.booleanIndicator
      WorkAssignmentStatus,
      EmploymentPercent,
      CompanyCode,
      CostCenter,
      WeeklyWorkingHours,
      WeeklyWorkingDays,
      WorkAssignmentJobTitle,
      WorkAssignmentJobCode,
      SupervisorWorkAssignmentExtID,
      @Semantics.booleanIndicator
      WorkforceAssignmentIsPrimary,
      @Semantics.booleanIndicator
      @Consumption.hidden: true
      IsBlocked,

      // Compositions //
      _WorkAssignment  : redirected to parent I_WorkAssignmentTP_1,
      _WorkforcePerson : redirected to I_WorkforcePersonTP_1
}
```
