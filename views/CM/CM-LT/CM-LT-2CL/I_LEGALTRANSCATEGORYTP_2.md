---
name: I_LEGALTRANSCATEGORYTP_2
description: Legaltranscategorytp 2
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - transactional-processing
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSCATEGORYTP_2

**Legaltranscategorytp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LegalTransactionCategoryUUID` | ✓ | |  |  |
| `LegalTransactionParCatUUID` |  | |  |  |
| `LegalTransactionUUID` |  | |  |  |
| `LglCntntMCategory` |  | |  |  |
| `LglCntntMIsMandatory` |  | |  |  |
| `_LegalTransaction` | | ✓ | | |
| `_LegalTransParentCategory` | | ✓ | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Legal Transaction Categories'
@ObjectModel: {
  usageType: {
    sizeCategory: #L,
    serviceQuality: #A,
    dataClass:#TRANSACTIONAL
  },
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define view entity I_LegalTransCategoryTP_2
  as projection on R_LegalTransCategoryTP
{
  key LegalTransactionCategoryUUID,
      LegalTransactionParCatUUID,
      LegalTransactionUUID,
      LglCntntMCategory,
      LglCntntMIsMandatory,
      /* Associations */
      _LegalTransaction         : redirected to I_LegalTransactionTP_2,
      _LegalTransParentCategory : redirected to parent I_LegalTransParentCatTP_2
}
```
