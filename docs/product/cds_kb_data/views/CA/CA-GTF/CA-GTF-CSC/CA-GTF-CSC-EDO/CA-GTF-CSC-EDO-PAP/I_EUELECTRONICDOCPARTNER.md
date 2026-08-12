---
name: I_EUELECTRONICDOCPARTNER
description: "Euelectronicdocpartner"
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - partner
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCPARTNER

**Euelectronicdocpartner**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocPartnerId` | ✓ | |  | `partner_id` |  |  |
| `ElectronicDocBPType` | ✓ | |  | `partner_type` |  |  |
| `ElectronicDocPartyIdType` |  | |  | `party_id_type` |  |  |
| `EU_EDocEmail` |  | |  | `email` |  |  |
| `EU_EDocCommChannel` |  | |  | `comm_channel` |  |  |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartner` | `IsBusinessPurposeCompleted` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Business Partner'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
},
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM:{
viewType: #BASIC
}

define root view entity I_EUElectronicDocPartner
  as select from edoeubupa
  association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.ElectronicDocPartnerId = _BusinessPartner.BusinessPartner

{
  key partner_id    as ElectronicDocPartnerId,
  key partner_type  as ElectronicDocBPType,
      party_id_type as ElectronicDocPartyIdType,
      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_EUElectronicDocEmailVH',
                   element: 'EU_EDocEmail' }
       }]
      email         as EU_EDocEmail,
      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_EUElectronicDocCommChannelVH',
                   element: 'EU_EDocCommChannel' }
       }]
      comm_channel  as EU_EDocCommChannel,
      
      _BusinessPartner.AuthorizationGroup             as AuthorizationGroup,
      
      @Semantics.booleanIndicator:true
      _BusinessPartner.IsBusinessPurposeCompleted     as IsBusinessPurposeCompleted
}
```
