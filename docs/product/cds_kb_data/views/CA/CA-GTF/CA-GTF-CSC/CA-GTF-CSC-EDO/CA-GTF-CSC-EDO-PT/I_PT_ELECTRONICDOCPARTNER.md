---
name: I_PT_ELECTRONICDOCPARTNER
description: "PT Electronicdocpartner"
app_component: CA-GTF-CSC-EDO-PT
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
  - component:CA-GTF-CSC-EDO-PT
  - lob:Cross-Application Components
---
# I_PT_ELECTRONICDOCPARTNER

**PT Electronicdocpartner**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocPartnerId` | ✓ | |  | `partner_id` |  |  |
| `ElectronicDocBPType` | ✓ | |  | `partner_type` |  |  |
| `PT_ElectronicDocIsRelevant` |  | |  | `is_relevant` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Portugal eInvoice Partner Relevancy'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking:#NOT_REQUIRED

@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
},
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM:{
viewType: #BASIC
}

define view entity I_PT_ElectronicDocPartner
  as select from edoptbupa
{
  key partner_id   as ElectronicDocPartnerId,
  key partner_type as ElectronicDocBPType,
  is_relevant      as PT_ElectronicDocIsRelevant
}
```
