---
name: I_EDCRELATION
description: "Edcrelation"
app_component: CA-GTF-CSC-EDC
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
  - component:CA-GTF-CSC-EDC
  - lob:Cross-Application Components
---
# I_EDCRELATION

**Edcrelation**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDC` |
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
| `EDCType` | ✓ | |  | `contype` | `CHAR(15)` | Consistency Scenario ID |
| `EDCRepresentationType` | ✓ | |  | `representation_type` | `CHAR(30)` | Representation Type ID |
| `EDCRepresentationKey` | ✓ | |  | `representation_key` | `CHAR(32)` | Representation Key |
| `EDCRecordUUID` |  | |  | `consistency_guid` | `CHAR(32)` | Consistency GUID |
| `EDCCommonKey` |  | |  | `common_key` | `CHAR(120)` | Consistency Common Key |
| `EDCCompany` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `EDCCreatedOnDateTime` |  | |  | `created_on` | `DEC(15)` | Record Created On |

## Source Code

```abap
@EndUserText.label: 'eDocument Consistency Relation Record'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #A,
  sizeCategory: #XXL
  }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
define view entity I_EDCRelation as select from edcconrelation {
  key contype             as EDCType,
  key representation_type as EDCRepresentationType,
  key representation_key  as EDCRepresentationKey,
  consistency_guid    as EDCRecordUUID,  
  common_key          as EDCCommonKey,
  bukrs               as EDCCompany,
  created_on          as EDCCreatedOnDateTime
   }
```
