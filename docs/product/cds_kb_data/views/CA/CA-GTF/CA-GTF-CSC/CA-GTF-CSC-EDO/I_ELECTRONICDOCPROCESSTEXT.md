---
name: I_ELECTRONICDOCPROCESSTEXT
description: "Electronicdocprocesstext"
app_component: CA-GTF-CSC-EDO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
