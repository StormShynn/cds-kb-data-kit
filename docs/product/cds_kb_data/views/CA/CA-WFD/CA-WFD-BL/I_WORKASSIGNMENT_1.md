---
name: I_WORKASSIGNMENT_1
description: "Workassignment 1"
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_WORKASSIGNMENT_1

**Workassignment 1**

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
| `WorkforcePersonExternalID` |  | |  |  |  |  |
| `WorkAssignmentStartDate` |  | |  |  |  |  |
| `WorkAssignmentEndDate` |  | |  |  |  |  |
| `IsContingentWorker` |  | |  |  |  |  |
| `IsBlocked` |  | |  |  |  |  |
| `_WorkAssignmentDetail` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignmentDetail` | `I_WorkAssignmentDetail` | [1..*] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Work Assignments'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType.dataClass: #TRANSACTIONAL,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WorkAssignment_1
  as select from I_WorkAssignmentKeyMapping as WorkAssignmentKeymap

  association [1..*] to I_WorkAssignmentDetail as _WorkAssignmentDetail on  $projection.WorkAssignmentExternalID = _WorkAssignmentDetail.WorkAssignmentExternalID
                                                                        and $projection.Country2DigitISOCode     = _WorkAssignmentDetail.Country2DigitISOCode
  association [0..1] to I_WorkforcePerson_1    as _WorkforcePerson      on  $projection.WorkforcePersonExternalID = _WorkforcePerson.WorkforcePersonExternalID
{
  key WorkAssignmentKeymap.WorkAssignmentExternalID,
  key WorkAssignmentKeymap.Country2DigitISOCode,
      WorkAssignmentKeymap.WorkforcePersonExternalID,
      WorkAssignmentKeymap.WorkAssignmentStartDate,
      WorkAssignmentKeymap.WorkAssignmentEndDate,
//      WorkAssignmentKeymap.BusinessPartner,
      WorkAssignmentKeymap.IsContingentWorker,
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      WorkAssignmentKeymap.IsBlocked,

      // Associations //
      _WorkAssignmentDetail,
      _WorkforcePerson
}
```
