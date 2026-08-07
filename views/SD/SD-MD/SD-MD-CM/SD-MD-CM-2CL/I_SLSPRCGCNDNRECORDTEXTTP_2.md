---
name: I_SLSPRCGCNDNRECORDTEXTTP_2
description: Slsprcgcndnrecordtexttp 2
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - transactional-processing
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_SLSPRCGCNDNRECORDTEXTTP_2

**Slsprcgcndnrecordtexttp 2**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionSequentialNumber` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ConditionText` |  | |  |  |  |  |
| `_ConditionRecord` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Description of Condition Record for Pricing in Sales - TP'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    dataCategory: #TEXT,
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SlsPrcgCndnRecordTextTP_2
  as projection on R_SlsPrcgCndnRecordTextTP as SlsPricingConditionRecordText
  {
    key ConditionRecord,
  key ConditionSequentialNumber,
      @Semantics.language:true
  key Language,
      @Semantics.text:true
      ConditionText,
      _ConditionRecord : redirected to parent I_SlsPrcgConditionRecordTP_2
  }
```
