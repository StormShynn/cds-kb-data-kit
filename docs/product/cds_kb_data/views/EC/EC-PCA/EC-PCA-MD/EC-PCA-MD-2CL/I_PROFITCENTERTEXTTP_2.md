---
name: I_PROFITCENTERTEXTTP_2
description: "Profit CenterTEXTTP 2"
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - transactional-processing
  - profit-center
  - text
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_PROFITCENTERTEXTTP_2

**Profit CenterTEXTTP 2**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `ControllingArea` | ✓ | |  |  |  |  |
| `ProfitCenter` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `ProfitCenterName` |  | |  |  |  |  |
| `ProfitCenterLongName` |  | |  |  |  |  |
| `_ProfitCenterTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@EndUserText.label: 'Profit Center - Text TP'

@VDM:{
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'ProfitCenterText',
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  dataCategory: #TEXT,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #ORGANIZATIONAL
  }
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ProfitCenterTextTP_2
  as projection on R_ProfitCenterTextTP
{
      @Semantics.language: true
  key Language,
  key ControllingArea,
  key ProfitCenter,
      @Semantics.businessDate.to: true
  key ValidityEndDate,

      @ObjectModel.editableFieldFor: 'Language'
      LanguageForEdit,

      @Semantics.text: true
      ProfitCenterName,
      ProfitCenterLongName,

      /* Associations */
      _ProfitCenterTP : redirected to parent I_ProfitCenterTP_2
}
```
