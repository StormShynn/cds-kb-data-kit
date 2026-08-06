---
name: I_WORKFORCEPERSON_1
description: Workforceperson 1
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
# I_WORKFORCEPERSON_1

**Workforceperson 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkforcePersonExternalID` | `Worker.WorkforcePersonExternalID` |
| `BusinessPartner` | `Worker.BusinessPartner` |
| `FirstName` | `BusinessPartner.FirstName` |
| `MiddleName` | `BusinessPartner.MiddleName` |
| `LastName` | `BusinessPartner.LastName` |
| `FullName` | `BusinessPartner.PersonFullName` |
| `BirthName` | `BusinessPartner.BusinessPartnerBirthName` |
| `Initials` | `BusinessPartner.Initials` |
| `NativePreferredLanguage` | `BusinessPartner.CorrespondenceLanguage` |
| `IsBusinessPurposeCompleted` | `BusinessPartner.IsBusinessPurposeCompleted` |
| `DataControllerSet` | `BusinessPartner.DataControllerSet` |
| `DataController1` | `BusinessPartner.DataController1` |
| `DataController2` | `BusinessPartner.DataController2` |
| `DataController3` | `BusinessPartner.DataController3` |
| `DataController4` | `BusinessPartner.DataController4` |
| `DataController5` | `BusinessPartner.DataController5` |
| `DataController6` | `BusinessPartner.DataController6` |
| `DataController7` | `BusinessPartner.DataController7` |
| `DataController8` | `BusinessPartner.DataController8` |
| `DataController9` | `BusinessPartner.DataController9` |
| `DataController10` | `BusinessPartner.DataController10` |
| `AuthorizationGroup` | `BusinessPartner.AuthorizationGroup` |
| `_WorkAssignment` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignment_1` | [1..*] |
| `_BPExtension` | `E_BP_D` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Workforce Person'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL

}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WorkforcePerson_1
  as select distinct from I_WorkforcePersonKeyMap as Worker
    inner join            I_BusinessPartner       as BusinessPartner on BusinessPartner.BusinessPartner = Worker.BusinessPartner

  association [1..*] to I_WorkAssignment_1 as _WorkAssignment on $projection.WorkforcePersonExternalID = _WorkAssignment.WorkforcePersonExternalID
  association [0..1] to E_BP_D             as _BPExtension    on $projection.BusinessPartner = _BPExtension.BusinessPartner
{

  key Worker.WorkforcePersonExternalID,
      Worker.BusinessPartner,
      BusinessPartner.FirstName,
      BusinessPartner.MiddleName,
      BusinessPartner.LastName,
      BusinessPartner.PersonFullName           as FullName,
      BusinessPartner.BusinessPartnerBirthName as BirthName,
      BusinessPartner.Initials,
      BusinessPartner.CorrespondenceLanguage   as NativePreferredLanguage,
      @Semantics.booleanIndicator: true
      BusinessPartner.IsBusinessPurposeCompleted,
      BusinessPartner.DataControllerSet,
      BusinessPartner.DataController1,
      BusinessPartner.DataController2,
      BusinessPartner.DataController3,
      BusinessPartner.DataController4,
      BusinessPartner.DataController5,
      BusinessPartner.DataController6,
      BusinessPartner.DataController7,
      BusinessPartner.DataController8,
      BusinessPartner.DataController9,
      BusinessPartner.DataController10,
      BusinessPartner.AuthorizationGroup,


      /*Associations */
      _WorkAssignment

}
```
