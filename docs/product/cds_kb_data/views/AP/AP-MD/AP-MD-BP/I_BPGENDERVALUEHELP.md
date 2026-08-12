---
name: I_BPGENDERVALUEHELP
description: "Bpgendervaluehelp"
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GenderCodeName` | ✓ | |  | `gender` | `CHAR(1)` | Gender of Business Partner (Person) |
| `_Text` | | ✓ | | | | |

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
