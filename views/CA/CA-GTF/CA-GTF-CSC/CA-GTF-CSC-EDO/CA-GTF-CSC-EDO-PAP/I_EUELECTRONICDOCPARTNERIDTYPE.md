---
name: I_EUELECTRONICDOCPARTNERIDTYPE
description: Euelectronicdocpartneridtype
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
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
# I_EUELECTRONICDOCPARTNERIDTYPE

**Euelectronicdocpartneridtype**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocPartyIdType` | ✓ | |  | `party_id_type` |  |  |
| `BPIdentificationType` |  | |  | `bu_id_type` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Non-Tax related Identifiers'
@Analytics.technicalName: 'IEUEDOPARTNERIDTYPE'
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
@ObjectModel.representativeKey: 'ElectronicDocPartyIdType'


define root view entity I_EUElectronicDocPartnerIdType
  as select from edoeubpidtype
{

  key party_id_type as ElectronicDocPartyIdType,
      bu_id_type    as BPIdentificationType
}
```
