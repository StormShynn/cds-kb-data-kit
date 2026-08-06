---
name: I_WORKFORCEPERSONSKILLTAGTP_1
description: Workforcepersonskilltagtp 1
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
# I_WORKFORCEPERSONSKILLTAGTP_1

**Workforcepersonskilltagtp 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkforcePersonExternalID` | `WorkforcePersonExternalID` |
| key `WorkforcePersonSkillTagID` | `WorkforcePersonSkillTagID` |
| `WorkforcePersonTagText` | `WorkforcePersonTagText` |
| `_WorkforcePerson` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Projection of Workforceperson Tags - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:{
usageType:{
  serviceQuality: #C,
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

@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkforcePersonSkillTagTP_1
  as projection on R_WorkforcePersonSkillTagTP_1
{
  key WorkforcePersonExternalID,
  key WorkforcePersonSkillTagID,
  
//  key WorkAssignmentExternalID,
//  key Country2DigitISOCode,
//  WorkAssignment,
//  WorkforcePersonSkillTagType,
    WorkforcePersonTagText,
/*  Associations */
//      _WorkAssignment  : redirected to parent I_WorkAssignmentTP_1,
      _WorkforcePerson : redirected to parent I_WorkforcePersonTP_1
}
```
