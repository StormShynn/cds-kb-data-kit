---
name: I_SALESSCHEDGAGRMTTYPETEXT
description: "Salesschedgagrmttypetext"
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - text-view
  - text
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTTYPETEXT

**Salesschedgagrmttypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedgAgrmtType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SalesSchedgAgrmtTypeName` |  | |  | `cast( Text.SalesDocumentTypeName as sd_sls_schedg_agrmt_type_name preserving type )` |  |  |
| `_SalesSchedgAgrmtType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesSchedgAgrmtType` | `I_SalesSchedgAgrmtType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Sales Scheduling Agreement Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesSchedgAgrmtType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SalesSchedgAgrmtTypeText
  as select from I_SalesDocumentTypeText as Text
    inner join   I_SalesSchedgAgrmtType  as SalesSchedgAgrmtType on Text.SalesDocumentType = SalesSchedgAgrmtType.SalesSchedgAgrmtType

  association [0..1] to I_SalesSchedgAgrmtType as _SalesSchedgAgrmtType on $projection.SalesSchedgAgrmtType = _SalesSchedgAgrmtType.SalesSchedgAgrmtType

{
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtType'
      @ObjectModel.text.element: ['SalesSchedgAgrmtTypeName']
  key SalesSchedgAgrmtType.SalesSchedgAgrmtType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as sd_sls_schedg_agrmt_type_name preserving type ) as SalesSchedgAgrmtTypeName,

      _SalesSchedgAgrmtType,
      Text._Language
}
```
