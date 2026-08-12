---
name: I_ACTIVECOMPLIANCERQMTVERSION
description: "Activecompliancerqmtversion"
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-CI
  - interface-view
  - component:EHS-SUS-CI
  - lob:Other
---
# I_ACTIVECOMPLIANCERQMTVERSION

**Activecompliancerqmtversion**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqVersUUID` | ✓ | |  |  |  |  |
| `CmplRqVers` |  | |  |  |  |  |
| `ComplianceRequirement` |  | |  |  |  |  |
| `CmplRqVersName` |  | |  |  |  |  |
| `CmplRqVersBuildDateTime` |  | |  | `CmplRqVersBuildDate` |  |  |
| `EffectiveDate` |  | |  |  |  |  |
| `CmplRqApplicationComponent` |  | |  |  |  |  |
| `CmplRqDomain` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CmplRqVersActvtn` | `I_CmplRqVersActvtn` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Active Compliance Requirement Version'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    modelingPattern: #NONE,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    usageType:{
        dataClass: #MASTER,
        serviceQuality: #C,
        sizeCategory: #S
      }
}
@VDM.viewType: #COMPOSITE
define view entity I_ActiveComplianceRqmtVersion
  as select from I_CmplRqVersEnhanced
  association [1..1] to I_CmplRqVersActvtn as _CmplRqVersActvtn on $projection.CmplRqVersUUID = _CmplRqVersActvtn.CmplRqVersUUID
{
  key CmplRqVersUUID,
      CmplRqVers,
      ComplianceRequirement,
      CmplRqVersName,      
      CmplRqVersBuildDate as CmplRqVersBuildDateTime,
      EffectiveDate,
      CmplRqApplicationComponent,
      CmplRqDomain

}
where
  _CmplRqVersActvtn.CmplRqVersActivationStatus = 'A'
```
