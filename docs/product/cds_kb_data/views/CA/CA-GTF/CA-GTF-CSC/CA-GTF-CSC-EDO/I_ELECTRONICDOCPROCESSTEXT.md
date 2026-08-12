---
name: I_ELECTRONICDOCPROCESSTEXT
description: "Electronicdocprocesstext"
app_component: CA-GTF-CSC-EDO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - text-view
  - text
  - component:CA-GTF-CSC-EDO
  - lob:Cross-Application Components
---
# I_ELECTRONICDOCPROCESSTEXT

**Electronicdocprocesstext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ElectronicDocProcess` | ✓ | |  | `process` |  |  |
| `ElectronicDocProcessText` |  | |  | `procdesc` |  |  |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IEDOPROCESST',
  compiler.compareFilter: true
 // preserveKey: true 
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Process - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
usageType:{ 
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
  },
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
define view I_ElectronicDocProcessText
  as select from edoprocesst
{
      @Semantics.language: true
      @UI.hidden: true
  key spras    as Language,
      @Search: {
       defaultSearchElement: true,
       ranking: #HIGH,
       fuzzinessThreshold: 0.8 }
  key process  as ElectronicDocProcess,

      @Semantics.text: true
      @Search: {
       defaultSearchElement: true,
       ranking: #LOW,
       fuzzinessThreshold: 0.8 }
      procdesc as ElectronicDocProcessText
} where spras = $session.system_language
```
