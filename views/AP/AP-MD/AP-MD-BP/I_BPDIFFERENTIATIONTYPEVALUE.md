---
name: I_BPDIFFERENTIATIONTYPEVALUE
description: Bpdifferentiationtypevalue
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
  - component:AP-MD-BP
  - lob:Other
---
# I_BPDIFFERENTIATIONTYPEVALUE

**Bpdifferentiationtypevalue**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessPartnerDiffTypeValue` | ✓ | |  | `dfval` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPDIFFTYPEVALUE'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey:'BusinessPartnerDiffTypeValue'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'BP Differentiation type value'
@ObjectModel.supportedCapabilities: #SQL_DATA_SOURCE
@Metadata.ignorePropagatedAnnotations: true
define view I_BPDifferentiationTypeValue as select distinct from but100 {
  key dfval as BusinessPartnerDiffTypeValue
}
```
