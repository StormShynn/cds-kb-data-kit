---
name: I_LEGALCONTEXTCATEGORYTP
description: Legalcontextcategorytp
app_component: CM-CTX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-CTX
  - interface-view
  - transactional-processing
  - text
  - component:CM-CTX-2CL
  - lob:Other
---
# I_LEGALCONTEXTCATEGORYTP

**Legalcontextcategorytp**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LglCntntMCntxtCategoryUUID` | `LglCntntMCntxtCategoryUUID` |
| `LglCntntMCntxtParCategoryUUID` | `LglCntntMCntxtParCategoryUUID` |
| `LglCntntMContextUUID` | `LglCntntMContextUUID` |
| `LglCntntMCategory` | `LglCntntMCategory` |
| `_LCMContextParentCategoryTP` | *Association* |
| `_LCMContextTP` | *Association* |

## Source Code

```abap
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED
    }
@EndUserText.label: 'Legal Context Categories - TP'
@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    },
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true

define view entity I_LegalContextCategoryTP
  as projection on I_LCMContextCategoryTP
{
  key LglCntntMCntxtCategoryUUID,
      LglCntntMCntxtParCategoryUUID,
      LglCntntMContextUUID,
      LglCntntMCategory,

      _LCMContextParentCategoryTP : redirected to parent I_LegalContextParentCategoryTP,
      _LCMContextTP               : redirected to I_LegalContextTP
}
```
