---
name: I_LEGALCONTEXTRELATIONSHIPTP
description: "Legalcontextrelationshiptp"
app_component: CM-CTX-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_LEGALCONTEXTRELATIONSHIPTP

**Legalcontextrelationshiptp**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMCntxtRelshpUUID` | ✓ | |  |  |  |  |
| `LglCntntMContextUUID` |  | |  |  |  |  |
| `LglCntntMRelshpType` |  | |  |  |  |  |
| `LglCntntMCntxtRelshpLglTrans` |  | |  |  |  |  |
| `LglCntntMIsMandatory` |  | |  |  |  |  |
| `LglCntntMIsIntegRelevant` |  | |  |  |  |  |
| `_LCMContextTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED
    }
@EndUserText.label: 'Legal Context Relationships - TP'
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

define view entity I_LegalContextRelationshipTP
  as projection on I_LCMContextRelationshipTP as LegalContextRelationship

{
  key LglCntntMCntxtRelshpUUID,
      LglCntntMContextUUID,
      LglCntntMRelshpType, 
      LglCntntMCntxtRelshpLglTrans,
      LglCntntMIsMandatory,
      LglCntntMIsIntegRelevant,

      _LCMContextTP : redirected to parent I_LegalContextTP
}
```
