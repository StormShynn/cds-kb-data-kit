---
name: I_TRANSPORTATIONRATETABLETP
description: "Transportationratetabletp"
app_component: TM-MD-CM-RA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - transactional-processing
  - transport
  - component:TM-MD-CM-RA-2CL
  - lob:Other
---
# I_TRANSPORTATIONRATETABLETP

**Transportationratetabletp**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationRateTableUUID` | ✓ | |  |  |  |  |
| `TranspRateTableID` |  | |  |  |  |  |
| `TranspRateTableDesc` |  | |  |  |  |  |
| `TranspRateTableChangedOnDteTme` |  | |  |  |  |  |
| `TranspRateTblCreatedOnDateTime` |  | |  |  |  |  |
| `TranspRateTableChangedBy` |  | |  |  |  |  |
| `TranspRateTableCreatedBy` |  | |  |  |  |  |
| `TranspRateTableValueType` |  | |  |  |  |  |
| `TranspChargeType` |  | |  |  |  |  |
| `TranspRateTableSignType` |  | |  |  |  |  |
| `TranspRateTableTimeZone` |  | |  |  |  |  |
| `I_TranspRateTableScaleRefTP` |  | |  | `TransportationRateTable._TranspRateTableScaleRef : redirected to composition child I_TranspRateTableScaleRefTP` |  |  |
| `I_TranspRateTableValidityTP` |  | |  | `TransportationRateTable._TranspRateTableValidity : redirected to composition child I_TranspRateTableValidityTP` |  |  |
| `I_TranspRateTableOrgTP` |  | |  | `TransportationRateTable._TranspRateTableOrganization : redirected to composition child I_TranspRateTableOrgTP` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Rate Table - TP'
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
   },
  sapObjectNodeType.name: 'TransportationRateTable' }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'TransportationRateTable_Type'
define root view entity I_TransportationRateTableTP
  provider contract transactional_interface
  as projection on R_TranspRateTableTP as TransportationRateTable
{
  key TransportationRateTableUUID,
      TranspRateTableID,
      TranspRateTableDesc,
      TranspRateTableChangedOnDteTme,
      TranspRateTblCreatedOnDateTime,
      TranspRateTableChangedBy,
      TranspRateTableCreatedBy,
      TranspRateTableValueType,
      TranspChargeType,
      TranspRateTableSignType,
      TranspRateTableTimeZone,

      //      TransportationRateType,
      /* Associations */

      TransportationRateTable._TranspRateTableScaleRef     : redirected to composition child I_TranspRateTableScaleRefTP,
      TransportationRateTable._TranspRateTableValidity     : redirected to composition child I_TranspRateTableValidityTP,
      TransportationRateTable._TranspRateTableOrganization : redirected to composition child I_TranspRateTableOrgTP

}
```
