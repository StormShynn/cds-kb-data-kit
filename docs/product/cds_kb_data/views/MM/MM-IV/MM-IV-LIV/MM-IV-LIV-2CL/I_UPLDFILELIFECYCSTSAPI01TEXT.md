---
name: I_UPLDFILELIFECYCSTSAPI01TEXT
description: "Upldfilelifecycstsapi 01TEXT"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - text-view
  - text
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_UPLDFILELIFECYCSTSAPI01TEXT

**Upldfilelifecycstsapi 01TEXT**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrInvcUpldFileLifeCycStatus` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SuplrInvcUpldFileLfcycStsDesc` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@Analytics.technicalName: 'IUPDLFSTATTEXTAPI'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Upload File Life Cycle Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@Feature: 'FT_MMIV_UPL_CDS_API'

define view entity I_UpldFileLifeCycStsAPI01Text as select from I_UpldFileLifeCycStatusText
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @ObjectModel.text.element: ['SuplrInvcUpldFileLfcycStsDesc']
  key SuplrInvcUpldFileLifeCycStatus,
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key Language,
  @Semantics.text: true
  SuplrInvcUpldFileLfcycStsDesc,
  
  _Language
}
```
