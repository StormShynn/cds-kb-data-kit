---
name: I_WORKFORCEPERSONSKILLTAG
description: Workforcepersonskilltag
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
# I_WORKFORCEPERSONSKILLTAG

**Workforcepersonskilltag**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkforcePersonExternalID` | ✓ | | `_Person` | `WorkforcePersonExternalID` |  |  |
| `WorkforcePersonSkillTagID` | ✓ | | `_SkillTag` | `EmployeeSkillTagID` |  |  |
| `BusinessPartner` |  | | `_Person` | `BusinessPartner` |  |  |
| `WorkforcePersonTagText` |  | | `_SkillTag` | `EmployeeSkillTagName` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Workforce Person Skill Tag'
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType.dataClass: #MIXED,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WorkforcePersonSkillTag
  as select from I_WorkerCentralPerson as _Person

    inner join   I_EmployeeskillTags   as _SkillTag on _SkillTag.PersonnelNumber = _Person.CentralPerson
    association [0..1] to I_BusinessPartner       as _BusinessPartner on _BusinessPartner.BusinessPartner = _Person.BusinessPartner
    association [1..1] to I_WorkforcePerson_1    as _WorkforcePerson on _WorkforcePerson.WorkforcePersonExternalID = _Person.WorkforcePersonExternalID
    
{
  key _Person.WorkforcePersonExternalID,
  key _SkillTag.EmployeeSkillTagID   as WorkforcePersonSkillTagID,
      _Person.BusinessPartner,
      _SkillTag.EmployeeSkillTagName as WorkforcePersonTagText,
      
      /*Associations */
      _WorkforcePerson,
      _BusinessPartner

}
where _SkillTag.EmployeeSkillTagType = 'U'
```
