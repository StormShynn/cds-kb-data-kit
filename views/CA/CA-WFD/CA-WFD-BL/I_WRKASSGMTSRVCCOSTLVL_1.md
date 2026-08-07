---
name: I_WRKASSGMTSRVCCOSTLVL_1
description: Wrkassgmtsrvccostlvl 1
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
# I_WRKASSGMTSRVCCOSTLVL_1

**Wrkassgmtsrvccostlvl 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkAssignmentExternalID` | ✓ | | `_Assignment` | `WorkAssignmentExternalID` |
| `Country2DigitISOCode` | ✓ | | `_Assignment` | `Country2DigitISOCode` |
| `StartDate` | ✓ | | `_SrvcCostLvl` | `StartDate` |
| `WorkforcePersonExternalID` |  | | `_Assignment` | `WorkforcePersonExternalID` |
| `EndDate` |  | | `_SrvcCostLvl` | `EndDate` |
| `ServiceCostLevel` |  | | `_SrvcCostLvl` | `ServiceCostLevel` |
| `IsBlocked` |  | | `_Assignment` | `IsBlocked` |
| `_WorkAssignment` | | ✓ | | |
| `_WorkforcePerson` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignment_1` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Workforce Person Service Cost Level'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WrkAssgmtSrvcCostLvl_1

  as select from I_WorkAssignmentKeyMapping as _Assignment

    inner join   I_WrkAssgmtSrvcCostLvl_2   as _SrvcCostLvl on _Assignment.WorkAssignment = _SrvcCostLvl.WorkforceAssignment


  association [0..1] to I_WorkAssignment_1  as _WorkAssignment  on  _WorkAssignment.WorkAssignmentExternalID = $projection.WorkAssignmentExternalID
                                                                and _WorkAssignment.Country2DigitISOCode     = $projection.Country2DigitISOCode

  association [1]    to I_WorkforcePerson_1 as _WorkforcePerson on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID

{
  key _Assignment.WorkAssignmentExternalID,
  key _Assignment.Country2DigitISOCode,
  key _SrvcCostLvl.StartDate,
      _Assignment.WorkforcePersonExternalID,
      _SrvcCostLvl.EndDate,
      _SrvcCostLvl.ServiceCostLevel,
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      _Assignment.IsBlocked,


      /*Association */
      _WorkAssignment,
      _WorkforcePerson
}
```
