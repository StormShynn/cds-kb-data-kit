---
name: I_TRANSPRATETABLESCALEREFTP
description: Transpratetablescalereftp
app_component: TM-MD-CM-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - transactional-processing
  - component:TM-MD-CM-RA-2CL
  - lob:Other
---
# I_TRANSPRATETABLESCALEREFTP

**Transpratetablescalereftp**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateTableScaleRefUUID` | ✓ | |  |  |  |  |
| `TransportationRateTableUUID` |  | |  |  |  |  |
| `TransportationScaleUUID` |  | |  |  |  |  |
| `TransportationCalculationBase` |  | |  |  |  |  |
| `TranspRateTblScRefMinValIsSupp` |  | |  |  |  |  |
| `TranspRateTblScRefMaxValIsSupp` |  | |  |  |  |  |
| `TranspRateScRefIsRlvtForBrkWgt` |  | |  |  |  |  |
| `TranspRateTblScaleRefScaleType` |  | |  |  |  |  |
| `TranspRateTblScaleRefQtyUnit` |  | |  |  |  |  |
| `TranspRateTblScaleRefCurrency` |  | |  |  |  |  |
| `TranspRateTblScaleRefCalcType` |  | |  |  |  |  |
| `TranspRateTableDimensionIndex` |  | |  |  |  |  |
| `TranspRateTblScRefNoValIsSupp` |  | |  |  |  |  |
| `TranspCmmdtyCodeNmbrngSchm` |  | |  |  |  |  |
| `I_TransportationRateTableTP` |  | |  | `TranspRateTableScaleRef._TransportationRateTable : redirected to parent I_TransportationRateTableTP` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Rate Table Scale Reference - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name: 'TranspRateTableScaleRef'
 }
@OData.entityType.name: 'TranspRateTableScaleRef_Type'
define view entity I_TranspRateTableScaleRefTP
  as projection on R_TranspRateTableScaleRefTP as TranspRateTableScaleRef
{
  key TranspRateTableScaleRefUUID,
      TransportationRateTableUUID,
      TransportationScaleUUID,
      TransportationCalculationBase,
      TranspRateTblScRefMinValIsSupp,
      TranspRateTblScRefMaxValIsSupp,
      TranspRateScRefIsRlvtForBrkWgt,
      TranspRateTblScaleRefScaleType,
      TranspRateTblScaleRefQtyUnit,
      TranspRateTblScaleRefCurrency,
      TranspRateTblScaleRefCalcType,
      TranspRateTableDimensionIndex,
      TranspRateTblScRefNoValIsSupp,
      TranspCmmdtyCodeNmbrngSchm,
    
      TranspRateTableScaleRef._TransportationRateTable : redirected to parent I_TransportationRateTableTP
}
```
