---
name: I_BUSSOLNORDLONGTEXTTP
description: Bussolnordlongtexttp
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - text
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDLONGTEXTTP

**Bussolnordlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SrvcDocLogTextIdentifier` |  | |  |  |  |  |
| `TextObjectCategory` |  | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `SrvcDocLongTextMimeType` |  | |  |  |  |  |
| `BusinessSolutionOrderLongText` |  | |  |  |  |  |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:    #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  dataCategory: #TEXT,
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Long Text - TP'

define view entity I_BusSolnOrdLongTextTP
  as projection on R_BusSolnOrdLongTextTP
{
  key BusinessSolutionOrder,
  key TextObjectType,
      @Semantics.language:true
  key Language,

      SrvcDocLogTextIdentifier,
      TextObjectCategory,
      ServiceObjectType,
      SrvcDocLongTextMimeType,

      @Semantics.text: true
      @EndUserText.label: 'Solution Order Long Text'
      BusinessSolutionOrderLongText,

      /* Associations */
      _BusinessSolutionOrderTP : redirected to parent I_BusinessSolutionOrderTP
}
```
