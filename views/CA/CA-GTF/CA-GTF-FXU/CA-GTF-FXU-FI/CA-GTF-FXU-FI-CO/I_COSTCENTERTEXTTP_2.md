---
name: I_COSTCENTERTEXTTP_2
description: Cost CenterTEXTTP 2
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - cost-center
  - text
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
  - bo:CostCenter
---
# I_COSTCENTERTEXTTP_2

**Cost CenterTEXTTP 2**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `Language` |
| key `ControllingArea` | `ControllingArea` |
| key `CostCenter` | `CostCenter` |
| key `ValidityEndDate` | `ValidityEndDate` |
| `LanguageForEdit` | `LanguageForEdit` |
| `CostCenterName` | `CostCenterName` |
| `CostCenterDescription` | `CostCenterDescription` |
| `_CostCenterTP` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Cost Center - Text'

@VDM:{
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'CostCenterText',
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  dataCategory: #TEXT,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #MASTER
  }
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CostCenterTextTP_2
  as projection on R_CostCenterTextTP
{
      @Semantics.language: true
  key Language,

  key ControllingArea,

  key CostCenter,

  key ValidityEndDate,

      @ObjectModel.editableFieldFor: 'Language'
      @Semantics.language: true
      LanguageForEdit,

      @Semantics.text: true
      CostCenterName,

      CostCenterDescription,

      /* Associations */
      _CostCenterTP : redirected to parent I_CostCenterTP_2
}
```
