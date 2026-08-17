---
name: I_EUELECTRONICDOCPARTNER
description: "Euelectronicdocpartner"
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocPartnerId` | ✓ | |  | `partner_id` | `CHAR(10)` | eDocument: Business Partner ID / Customer ID / Vendor ID |
| `ElectronicDocBPType` | ✓ | |  | `partner_type` | `CHAR(1)` | eDocument Business Partner Type |
| `ElectronicDocPartyIdType` |  | |  | `party_id_type` | `CHAR(15)` | Party Identification Type |
| `EU_EDocEmail` |  | |  | `email` | `CHAR(1)` | eDocument EU: Receive Document per e-Mail |
| `EU_EDocCommChannel` |  | |  | `comm_channel` | `CHAR(1)` | Exchange Channel |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartner` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |

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
