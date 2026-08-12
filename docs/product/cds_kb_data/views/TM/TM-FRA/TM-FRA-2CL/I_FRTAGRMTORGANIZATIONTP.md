---
name: I_FRTAGRMTORGANIZATIONTP
description: "Frtagrmtorganizationtp"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transactional-processing
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FRTAGRMTORGANIZATIONTP

**Frtagrmtorganizationtp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspAgrmtOrganizationUUID` | ✓ | |  |  |  |  |
| `TransportationAgreementUUID` |  | |  |  |  |  |
| `TranspPurgOrgExtID` |  | |  |  |  |  |
| `I_FreightAgreementTP` |  | |  | `FreightAgreementOrganization._FreightAgreement : redirected to parent I_FreightAgreementTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Agreement Organization - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FreightAgreementOrganization'}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FreightAgreementOrganization_Type'
define view entity I_FrtAgrmtOrganizationTP
  as projection on R_FrtAgrmtOrganizationTP as FreightAgreementOrganization
{
  key TranspAgrmtOrganizationUUID,
      TransportationAgreementUUID,
      TranspPurgOrgExtID,
      
      //To Parent
      FreightAgreementOrganization._FreightAgreement : redirected to parent I_FreightAgreementTP
}
```
