---
name: I_FREIGHTAGREEMENTTP
description: Freightagreementtp
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transactional-processing
  - freight
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FREIGHTAGREEMENTTP

**Freightagreementtp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationAgreementUUID` | ✓ | |  |  |
| `TransportationAgreement` |  | |  |  |
| `TransportationAgreementDesc` |  | |  |  |
| `TranspAgrmtChangedOnDateTime` |  | |  |  |
| `TranspAgreementCreatedBy` |  | |  |  |
| `TranspAgrmtCreatedOnDateTime` |  | |  |  |
| `TranspAgreementChangedBy` |  | |  |  |
| `TranspExternalAgreement` |  | |  |  |
| `TransportationAgreementType` |  | |  |  |
| `TranspAgreementValidFrom` |  | |  |  |
| `TranspAgreementValidTo` |  | |  |  |
| `TranspAgreementTimeZone` |  | |  |  |
| `TranspAgrmtDimnWgtProfile` |  | |  |  |
| `TransportationAgreementDocCrcy` |  | |  |  |
| `TransportationShippingType` |  | |  |  |
| `TransportationMode` |  | |  |  |
| `TransportationAgreementStatus` |  | |  |  |
| `I_FreightAgreementItemTP` |  | |  | `FreightAgreement._FreightAgreementItem : redirected to composition child I_FreightAgreementItemTP` |
| `I_FrtAgrmtOrganizationTP` |  | |  | `FreightAgreement._FreightAgreementOrganization : redirected to composition child I_FrtAgrmtOrganizationTP` |
| `I_FreightAgreementPartyTP` |  | |  | `FreightAgreement._FreightAgreementParty : redirected to composition child I_FreightAgreementPartyTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Agreement - TP'
@AccessControl.authorizationCheck:  #MANDATORY
@ObjectModel: {
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
        sizeCategory: #M,
        serviceQuality: #A,
        dataClass: #TRANSACTIONAL
    },
    sapObjectNodeType.name: 'FreightAgreement' }   
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FreightAgreement_Type'
@Metadata.ignorePropagatedAnnotations: true
define root view entity I_FreightAgreementTP
  provider contract transactional_interface
  as projection on R_FreightAgreementTP as FreightAgreement
{
  key TransportationAgreementUUID,
      TransportationAgreement,
      TransportationAgreementDesc,
      TranspAgrmtChangedOnDateTime,
      TranspAgreementCreatedBy,
      TranspAgrmtCreatedOnDateTime,
      TranspAgreementChangedBy,
      TranspExternalAgreement,
      TransportationAgreementType,
      TranspAgreementValidFrom,
      TranspAgreementValidTo,
      TranspAgreementTimeZone,
      TranspAgrmtDimnWgtProfile,
      TransportationAgreementDocCrcy,
      TransportationShippingType,
      TransportationMode,
      TransportationAgreementStatus,

      //Association
      //To Child
      FreightAgreement._FreightAgreementItem  : redirected to composition child I_FreightAgreementItemTP,
      @Semantics.valueRange.minimum: '1'
      @Semantics.valueRange.maximum: '1'
      FreightAgreement._FreightAgreementOrganization  : redirected to composition child I_FrtAgrmtOrganizationTP,
      @Semantics.valueRange.minimum: '1'
      @Semantics.valueRange.maximum: '1'
      FreightAgreement._FreightAgreementParty : redirected to composition child I_FreightAgreementPartyTP

}
```
