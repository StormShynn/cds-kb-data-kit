---
name: I_WRKASSGMTWRKORDERDETAIL
description: "Wrkassgmtwrkorderdetail"
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
# I_WRKASSGMTWRKORDERDETAIL

**Wrkassgmtwrkorderdetail**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentExternalID` | ✓ | | `_Assignment` | `WorkAssignmentExternalID` |  |  |
| `Country2DigitISOCode` | ✓ | | `_Assignment` | `Country2DigitISOCode` |  |  |
| `StartDate` | ✓ | | `_BPRelationship` | `ValidityStartDate` |  |  |
| `EndDate` |  | | `_BPRelationship` | `ValidityEndDate` |  |  |
| `WorkforcePersonExternalID` |  | | `_AssignmentBP` | `WorkforcePersonExternalID` |  |  |
| `Supplier` |  | | `_BPRelationship` | `BusinessPartner1` |  |  |
| `IsBlocked` |  | | `_Assignment` | `IsBlocked` |  |  |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

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
@EndUserText.label: 'Assignment Work Order Details'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
define view entity I_WrkAssgmtWrkOrderDetail
  as select from I_WorkAssignmentKeyMapping as _Assignment
    inner join   I_WorkAssignmentBP         as _AssignmentBP   on  _AssignmentBP.WorkAssignment   = _Assignment.WorkAssignment
                                                               and _Assignment.IsContingentWorker = 'X'

    inner join   I_BPRelationship_2         as _BPRelationship on _BPRelationship.BusinessPartner2 = _AssignmentBP.WorkAssignmentBusinessPartner

  association [0..1] to I_WorkAssignment_1  as _WorkAssignment  on  _WorkAssignment.WorkAssignmentExternalID = $projection.WorkAssignmentExternalID
                                                                and _WorkAssignment.Country2DigitISOCode     = $projection.Country2DigitISOCode

  association [1]    to I_WorkforcePerson_1 as _WorkforcePerson on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID

{
  key _Assignment.WorkAssignmentExternalID,
  key _Assignment.Country2DigitISOCode,
  key _BPRelationship.ValidityStartDate as StartDate,
      _BPRelationship.ValidityEndDate   as EndDate,
      _AssignmentBP.WorkforcePersonExternalID,
      _BPRelationship.BusinessPartner1  as Supplier,
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      _Assignment.IsBlocked,

      /* Associations */
      _WorkAssignment,
      _WorkforcePerson

}
where
  (
      _BPRelationship.RelationshipCategory = 'HCM003'
    or(
      _BPRelationship.RelationshipCategory = 'BUR025'
      //    and _AssignmentBP.BPRoleCategoryUsageCode = 'B'
    )
  )

  and _Assignment.IsContingentWorker       = 'X'
```
