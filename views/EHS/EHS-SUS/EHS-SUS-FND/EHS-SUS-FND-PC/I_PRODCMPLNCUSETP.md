---
name: I_PRODCMPLNCUSETP
description: Prodcmplncusetp
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
# I_PRODCMPLNCUSETP

**Prodcmplncusetp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `usageType: { dataClass: #MIXED, sizeCategory: #L, serviceQuality: #C }` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Compliance Use - TP'
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
@VDM.usage.type: [#TRANSACTIONAL_PROCESSING_SERVICE]

@ObjectModel.sapObjectNodeType.name: 'ProductComplianceUse'

define root view entity I_ProdCmplncUseTP
  provider contract transactional_interface
  as projection on R_ProdCmplncUseTP
{

  key ProdCmplncUseUUID,

      ChmlCmplncInfoUUID,

      /**** Content ****/
      ProdCmplncLegalArea,
      ProdCmplncUseProcgSts,
      ValidityStartDateTime,
      ValidityEndDateTime,

      // Associations
      _ProdCmplncWayOfAppl                        : redirected to composition child I_ProdCmplncWayOfApplTP,
      _ProdCmplncRstrcdUse                        : redirected to composition child I_ProdCmplncRstrcdUseTP,
      _ProdCmplncSpcfcUse as _ProdCmplncRecmddUse : redirected to composition child I_ProdCmplncRecmddUseTP,
      @Consumption.hidden: true
      _ChmlCmplncInfo
}
```
