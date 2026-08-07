---
name: I_REGIONALSTRUCCHECKSTATUSTEXT
description: Regionalstruccheckstatustext
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - text
  - status
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_REGIONALSTRUCCHECKSTATUSTEXT

**Regionalstruccheckstatustext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RegionalStructureCheckStatus` | ✓ | |  | `cast(domvalue_l as AD_CHECKST)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `RegionalStrucCheckStatusText` |  | |  | `ddtext` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Regional Structure Check Status - Text'
@ObjectModel.dataCategory:         #TEXT
@Analytics.technicalName: 'IRGNLSTCHKSTSTXT'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable:                true
@VDM.viewType: #BASIC
define view entity I_RegionalStrucCheckStatusText as select from dd07t
 {
 key cast(domvalue_l as AD_CHECKST) as RegionalStructureCheckStatus,
      @Semantics:   { language: true }
  key ddlanguage as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      ddtext     as RegionalStrucCheckStatusText   
}
where
      as4local = 'A'
  and domname  = 'AD_CHECKST'
```
