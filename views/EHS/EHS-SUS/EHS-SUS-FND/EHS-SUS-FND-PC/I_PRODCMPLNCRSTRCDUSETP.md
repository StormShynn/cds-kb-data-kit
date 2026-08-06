---
name: I_PRODCMPLNCRSTRCDUSETP
description: Prodcmplncrstrcdusetp
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - transactional-processing
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PRODCMPLNCRSTRCDUSETP

**Prodcmplncrstrcdusetp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `}` | `usageType: { dataClass: #MIXED, sizeCategory: #L, serviceQuality: #C }` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Restrictions on Use - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:
{
  usageType:
  {
    dataClass: #MIXED,
    sizeCategory: #L,
    serviceQuality: #C
  }
}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

define view entity I_ProdCmplncRstrcdUseTP
  as projection on R_ProdCmplncRstrcdUseTP
{

  key ProdCmplncRstrcdUseUUID,
      ProdCmplncUseUUID,

      ProdCmplncUseRating,

      /* Associations */
      _ProdCmplncUse : redirected to parent I_ProdCmplncUseTP
  
}
```
