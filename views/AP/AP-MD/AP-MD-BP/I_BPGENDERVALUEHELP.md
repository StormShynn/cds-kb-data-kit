---
name: I_BPGENDERVALUEHELP
description: Bpgendervaluehelp
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - value-help
  - component:AP-MD-BP
  - lob:Other
---
# I_BPGENDERVALUEHELP

**Bpgendervaluehelp**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GenderCodeName` | ✓ | |  | `gender` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPGenderValueHelpText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGENDERVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business Partner Gender Value help'
@ClientHandling.algorithm : #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'GenderCodeName'
define view I_BPGenderValueHelp as select from tb995 

association [0..*] to I_BPGenderValueHelpText    as _Text   on  $projection.GenderCodeName = _Text.GenderCodeName
{
    @ObjectModel.text.association: '_Text'
    key gender as GenderCodeName,
    _Text
}
```
