---
name: I_WORKASSIGNMENTADDRESS
description: "Workassignmentaddress"
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
  - address
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WORKASSIGNMENTADDRESS

**Workassignmentaddress**

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
| `AddressNumber` | ✓ | | `_EmploymentAddress` | `AddressID` |  |  |
| `WorkforcePersonExternalID` |  | | `_AssignmentBP` | `WorkforcePersonExternalID` |  |  |
| `BusinessPartner` |  | | `_AssignmentBP` | `BusinessPartner` |  |  |
| `StartDate` |  | |  | `cast (tstmp_to_dats( _EmploymentAddress.ValidityStartDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date)` |  |  |
| `EndDate` |  | |  | `cast (tstmp_to_dats( _EmploymentAddress.ValidityEndDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date)` |  |  |
| `Country` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `Country` |  |  |
| `PostalCode` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `PostalCode` |  |  |
| `Region` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `Region` |  |  |
| `SecondaryRegion` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `SecondaryRegion` |  |  |
| `SecondaryRegionName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `SecondaryRegionName` |  |  |
| `TertiaryRegion` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `TertiaryRegion` |  |  |
| `TertiaryRegionName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `TertiaryRegionName` |  |  |
| `CityName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `CityName` |  |  |
| `DistrictName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `DistrictName` |  |  |
| `StreetPrefixName1` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetPrefixName1` |  |  |
| `StreetPrefixName2` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetPrefixName2` |  |  |
| `StreetName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetName` |  |  |
| `StreetSuffixName1` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetSuffixName1` |  |  |
| `StreetSuffixName2` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetSuffixName2` |  |  |
| `HouseNumber` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `HouseNumber` |  |  |
| `HouseNumberSupplementText` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `HouseNumberSupplementText` |  |  |
| `Floor` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `Floor` |  |  |
| `RoomNumber` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `RoomNumber` |  |  |
| `CareOfName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `CareOfName` |  |  |
| `POBoxPostalCode` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `POBoxPostalCode` |  |  |
| `IsBlocked` |  | | `_Assignment` | `IsBlocked` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_BP` | `IsBusinessPurposeCompleted` |  |  |
| `DataControllerSet` |  | | `_BP` | `DataControllerSet` |  |  |
| `DataController1` |  | | `_BP` | `DataController1` |  |  |
| `DataController2` |  | | `_BP` | `DataController2` |  |  |
| `DataController3` |  | | `_BP` | `DataController3` |  |  |
| `DataController4` |  | | `_BP` | `DataController4` |  |  |
| `DataController5` |  | | `_BP` | `DataController5` |  |  |
| `DataController6` |  | | `_BP` | `DataController6` |  |  |
| `DataController7` |  | | `_BP` | `DataController7` |  |  |
| `DataController8` |  | | `_BP` | `DataController8` |  |  |
| `DataController9` |  | | `_BP` | `DataController9` |  |  |
| `DataController10` |  | | `_BP` | `DataController10` |  |  |
| `AuthorizationGroup` |  | | `_BP` | `AuthorizationGroup` |  |  |
| `_BPProtectedAddress` | | ✓ | | | | |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPProtectedAddress` | `I_BPProtectedAddress` | [0..1] |
| `_WorkAssignment` | `I_WorkAssignment_1` | [0..1] |
| `_BP` | `I_BusinessPartner` | [1..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Work Assignment Address Details'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WorkAssignmentAddress
  as select from I_WorkAssignmentKeyMapping as _Assignment

    inner join   I_WorkAssignmentBP         as _AssignmentBP      on _AssignmentBP.WorkAssignment = _Assignment.WorkAssignment
    inner join   I_BusPartAddress           as _EmploymentAddress on _EmploymentAddress.BusinessPartner = _AssignmentBP.WorkAssignmentBusinessPartner


  association [0..1] to I_BPProtectedAddress as _BPProtectedAddress on  $projection.BusinessPartner = _BPProtectedAddress.BusinessPartner
                                                                    and $projection.AddressNumber   = _BPProtectedAddress.AddressID
  association [0..1] to I_WorkAssignment_1   as _WorkAssignment     on  _WorkAssignment.WorkAssignmentExternalID = $projection.WorkAssignmentExternalID
                                                                    and _WorkAssignment.Country2DigitISOCode     = $projection.Country2DigitISOCode
  association [1..1] to I_BusinessPartner    as _BP                 on  _BP.BusinessPartner = _EmploymentAddress.BusinessPartner

  association [1]    to I_WorkforcePerson_1  as _WorkforcePerson    on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID
{
  key     _Assignment.WorkAssignmentExternalID,
  key     _Assignment.Country2DigitISOCode,
  key     _EmploymentAddress.AddressID                                                                   as AddressNumber,
          _AssignmentBP.WorkforcePersonExternalID,
          _AssignmentBP.BusinessPartner,
          cast (tstmp_to_dats( _EmploymentAddress.ValidityStartDate,
          abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date) as StartDate,
          cast (tstmp_to_dats( _EmploymentAddress.ValidityEndDate,
            abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date) as EndDate,
          _EmploymentAddress._AddressDefaultRepresentation.Country,
          _EmploymentAddress._AddressDefaultRepresentation.PostalCode,
          _EmploymentAddress._AddressDefaultRepresentation.Region,
          _EmploymentAddress._AddressDefaultRepresentation.SecondaryRegion,
          _EmploymentAddress._AddressDefaultRepresentation.SecondaryRegionName,
          _EmploymentAddress._AddressDefaultRepresentation.TertiaryRegion,
          _EmploymentAddress._AddressDefaultRepresentation.TertiaryRegionName,
          _EmploymentAddress._AddressDefaultRepresentation.CityName,
          _EmploymentAddress._AddressDefaultRepresentation.DistrictName,
          _EmploymentAddress._AddressDefaultRepresentation.StreetPrefixName1,
          _EmploymentAddress._AddressDefaultRepresentation.StreetPrefixName2,
          _EmploymentAddress._AddressDefaultRepresentation.StreetName,
          _EmploymentAddress._AddressDefaultRepresentation.StreetSuffixName1,
          _EmploymentAddress._AddressDefaultRepresentation.StreetSuffixName2,
          _EmploymentAddress._AddressDefaultRepresentation.HouseNumber,
          _EmploymentAddress._AddressDefaultRepresentation.HouseNumberSupplementText,
          _EmploymentAddress._AddressDefaultRepresentation.Floor,
          _EmploymentAddress._AddressDefaultRepresentation.RoomNumber,
          _EmploymentAddress._AddressDefaultRepresentation.CareOfName,
          _EmploymentAddress._AddressDefaultRepresentation.POBoxPostalCode,
          //          _EmploymentAddress._AddressDefaultRepresentation.DeliveryServiceTypeCode,
          //          _EmploymentAddress._AddressDefaultRepresentation.DeliveryServiceNumber,
          @Semantics.booleanIndicator: true
          @UI.hidden: true
          _Assignment.IsBlocked,
          @Semantics.booleanIndicator: true
          _BP.IsBusinessPurposeCompleted,
          _BP.DataControllerSet,
          _BP.DataController1,
          _BP.DataController2,
          _BP.DataController3,
          _BP.DataController4,
          _BP.DataController5,
          _BP.DataController6,
          _BP.DataController7,
          _BP.DataController8,
          _BP.DataController9,
          _BP.DataController10,
          _BP.AuthorizationGroup,

          /* Associations */
          _BPProtectedAddress,
          _WorkAssignment,
          _WorkforcePerson

}
```
