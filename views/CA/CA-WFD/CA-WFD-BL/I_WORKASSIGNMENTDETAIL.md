---
name: I_WORKASSIGNMENTDETAIL
description: Workassignmentdetail
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-WFD
  - CA-WFD-BL
  - interface-view
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WORKASSIGNMENTDETAIL

**Workassignmentdetail**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentExternalID` | ✓ | |  |  |  |  |
| `Country2DigitISOCode` | ✓ | |  |  |  |  |
| `WorkAssignmentStartDate` | ✓ | |  |  |  |  |
| `WorkforcePersonExternalID` |  | |  |  |  |  |
| `WorkAssignmentEndDate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `SupervisorWorkAssignmentExtID` |  | |  |  |  |  |
| `WeeklyWorkingHours` |  | |  |  |  |  |
| `WeeklyWorkingDays` |  | |  |  |  |  |
| `WorkAssignmentStatus` |  | |  |  |  |  |
| `EmploymentPercent` |  | |  |  |  |  |
| `IsBlocked` |  | |  |  |  |  |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignment_1` | [1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Work Assignment Details'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType.dataClass: #TRANSACTIONAL,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WorkAssignmentDetail
  as select from I_WorkAssignmentDetailsAll as WorkAssignmentDetails
    inner join   I_WorkAssignmentKeyMapping as WorkAssignmentKeymap on WorkAssignmentDetails.WorkAssignment = WorkAssignmentKeymap.WorkAssignment

  association [1]    to I_WorkAssignment_1  as _WorkAssignment  on  $projection.WorkAssignmentExternalID = _WorkAssignment.WorkAssignmentExternalID
                                                                and $projection.Country2DigitISOCode     = _WorkAssignment.Country2DigitISOCode
  association [0..1] to I_WorkforcePerson_1 as _WorkforcePerson on  $projection.WorkforcePersonExternalID = _WorkforcePerson.WorkforcePersonExternalID

{
  key WorkAssignmentKeymap.WorkAssignmentExternalID,
  key WorkAssignmentKeymap.Country2DigitISOCode,
  key WorkAssignmentDetails.WorkAssignmentStartDate,
      WorkAssignmentKeymap.WorkforcePersonExternalID,
      WorkAssignmentDetails.WorkAssignmentEndDate,
      WorkAssignmentDetails.CompanyCode,
      WorkAssignmentDetails.CostCenter,
      WorkAssignmentDetails.SupervisorWorkAssignmentExtID,
      WorkAssignmentDetails.WeeklyWorkingHours,
      WorkAssignmentDetails.WeeklyWorkingDays,
      @Semantics.booleanIndicator: true
      WorkAssignmentDetails.WorkAssignmentStatus,
      WorkAssignmentDetails.EmploymentPercent,
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      WorkAssignmentKeymap.IsBlocked,

      // Associations //
      _WorkAssignment,
      _WorkforcePerson
}
where
  WorkAssignmentDetails.CompanyCode is not initial
```
