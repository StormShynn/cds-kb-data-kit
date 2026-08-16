---
name: I_EUELECTRONICDOCDOCTYPEID
description: "Euelectronicdocdoctypeid"
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
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCDOCTYPEID

**Euelectronicdocdoctypeid**

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
| `EU_EDocDoctypeId` | ✓ | |  | `doc_type_id` | `CHAR(15)` | eDocument EU: Document Type ID |
| `EU_EDocDoctype` |  | |  | `doc_type` | `CHAR(255)` | Document Type |
| `EU_EDocProcessId` |  | |  | `process_id` | `CHAR(100)` | Process Identifier |
| `EU_EDocIsEmailDocType` |  | |  | `is_email_doc_type` | `CHAR(1)` | Document Type Used by E-Mail Option |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Document Type ID'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MIXED
},
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE,

 representativeKey: 'EU_EDocDoctypeId'
 }
@VDM:{
viewType: #BASIC
}

define root view entity I_EUElectronicDocDocTypeId
  as select from edoeudoctypeid
{

  key doc_type_id       as EU_EDocDoctypeId,
      doc_type          as EU_EDocDoctype,
      process_id        as EU_EDocProcessId,
      is_email_doc_type as EU_EDocIsEmailDocType
}
```
