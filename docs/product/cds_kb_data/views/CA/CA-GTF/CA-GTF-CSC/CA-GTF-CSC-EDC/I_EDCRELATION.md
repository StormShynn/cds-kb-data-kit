---
name: I_EDCRELATION
description: "Edcrelation"
app_component: CA-GTF-CSC-EDC
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EDCType` | ✓ | |  | `contype` |  |  |
| `EDCRepresentationType` | ✓ | |  | `representation_type` |  |  |
| `EDCRepresentationKey` | ✓ | |  | `representation_key` |  |  |
| `EDCRecordUUID` |  | |  | `consistency_guid` |  |  |
| `EDCCommonKey` |  | |  | `common_key` |  |  |
| `EDCCompany` |  | |  | `bukrs` |  |  |
| `EDCCreatedOnDateTime` |  | |  | `created_on` |  |  |

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
