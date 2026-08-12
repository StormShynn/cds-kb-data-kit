---
name: I_WORKCENTERTEXTBYSEMANTICKEY
description: "Work CenterTEXTBYSEMANTICKEY"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - work-center
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERTEXTBYSEMANTICKEY

**Work CenterTEXTBYSEMANTICKEY**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenter` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterCategoryCode` |  | |  |  |  |  |
| `WorkCenterText` |  | |  |  |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_WorkCenterCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_WorkCenterCategory` | `I_WorkCenterCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWRKCNTRTXTBSK'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'WorkCenter'
@ObjectModel.semanticKey: ['WorkCenter', 'Plant']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center by Semantic Key - Text'

define view I_WorkCenterTextBySemanticKey
  as select from I_WorkCenterBySemanticKey as crhd
    inner join   I_WorkCenterText          as crtx on  crtx.WorkCenterTypeCode   = crhd.WorkCenterTypeCode
                                                   and crtx.WorkCenterInternalID = crhd.WorkCenterInternalID
                          
  association [1..1] to I_Plant              as _Plant              on $projection.Plant    = _Plant.Plant
  association [1..1] to I_Language           as _Language           on $projection.Language = _Language.Language
  association [1..1] to I_WorkCenterCategory as _WorkCenterCategory on $projection.WorkCenterCategoryCode = _WorkCenterCategory.WorkCenterCategoryCode
{
      // Semantic Key
      @ObjectModel.text.element: 'WorkCenterText'
  key crhd.WorkCenter,
      @ObjectModel.foreignKey.association: '_Plant'
  key crhd.Plant,
      @Semantics.language: true
  key crtx.Language,

      // Internal Key
      crhd.WorkCenterTypeCode,  
      crhd.WorkCenterInternalID,

--    @ObjectModel.foreignKey.association: '_WorkCenterCategory'
      crhd.WorkCenterCategoryCode, 

      // Text
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      crtx.WorkCenterText,

      // Associations
      _Plant,
      _Language,
      _WorkCenterCategory
};
```
