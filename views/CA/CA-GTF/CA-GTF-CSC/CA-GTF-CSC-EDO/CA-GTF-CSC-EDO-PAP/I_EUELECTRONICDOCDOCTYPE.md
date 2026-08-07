---
name: I_EUELECTRONICDOCDOCTYPE
description: Euelectronicdocdoctype
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
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCDOCTYPE

**Euelectronicdocdoctype**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ElectronicDocType` | ✓ | |  | `edoc_type` |
| `ElectronicDocIntVersionActDate` | ✓ | |  | `active_from` |
| `EU_EDocDoctype` |  | |  | `doc_type` |
| `EU_EDocDoctypeId` |  | |  | `doc_type_id` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Document Type'
@Metadata.ignorePropagatedAnnotations: true
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

define root view entity I_EUElectronicDocDocType
  as select from edoeudoctype
{

 
  key edoc_type   as ElectronicDocType,
  key active_from as ElectronicDocIntVersionActDate,
      doc_type    as EU_EDocDoctype,
      doc_type_id as EU_EDocDoctypeId

  
}
```
