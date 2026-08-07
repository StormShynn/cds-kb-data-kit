---
name: I_VARCNFOBJDPNDCYTEXTTP
description: Varcnfobjdpndcytexttp
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - interface-view
  - transactional-processing
  - text
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCNFOBJDPNDCYTEXTTP

**Varcnfobjdpndcytexttp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectDependencyName` | ✓ | |  |  |  |  |
| `LanguageCode` | ✓ | |  |  |  |  |
| `_HistoricalText` | | ✓ | | | | |
| `_ObjectDependency` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Object Dependency - Text TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  },
  dataCategory: #TEXT
}
define view entity I_VarCnfObjDpndcyTextTP
  as projection on R_VarCnfObjDpndcyTextTP
{
      @Semantics.text: true
  key ObjectDependencyName,
      @Semantics.language: true
  key LanguageCode,

      /* Associations */
      _HistoricalText   : redirected to composition child I_VarCnfHistlObjDpnTextTP,
      _ObjectDependency : redirected to parent I_VarCnfObjectDependencyTP
}
```
