---
name: I_PURGSAFETYDATASHEETSTATUST
description: "Purgsafetydatasheetstatust"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - status
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGSAFETYDATASHEETSTATUST

**Purgsafetydatasheetstatust**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `PurgSafetyDataSheetStatus` | ✓ | |  | `cast( dd07t.domvalue_l as mmpur_pc_status_sds )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PurgSafetyDataSheetStatusName` |  | |  | `cast( dd07t.ddtext as mmpur_pc_status_sds_dscr preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PurgSafetyDataSheetStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPGPCSDSSTATT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Compliance Sts of Safety Data Sht - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'PurgSafetyDataSheetStatus'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name:'PurgSafetyDataSheetStatusText'
define view I_PurgSafetyDataSheetStatusT
  as select from dd07t 
  association to parent I_PurgSafetyDataSheetStatus as _PurgSafetyDataSheetStatus
    on $projection.PurgSafetyDataSheetStatus = _PurgSafetyDataSheetStatus.PurgSafetyDataSheetStatus
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_PurgSafetyDataSheetStatus'
      @ObjectModel.text.element: ['PurgSafetyDataSheetStatusName']
  key cast( dd07t.domvalue_l as mmpur_pc_status_sds ) as PurgSafetyDataSheetStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as mmpur_pc_status_sds_dscr preserving type ) as PurgSafetyDataSheetStatusName,
      _PurgSafetyDataSheetStatus,
      _Language
} 
where dd07t.domname  = 'MMPUR_PC_STATUS_SDS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
