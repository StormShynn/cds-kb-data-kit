---
name: I_ENTPROJECTPRIORITYCODETEXT
description: "Entprojectprioritycodetext"
app_component: PPM-SCL-STR
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
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - text-view
  - project
  - text
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTPROJECTPRIORITYCODETEXT

**Entprojectprioritycodetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
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
| `Language` | ✓ | |  | `language` |  |  |
| `PriorityCode` | ✓ | |  | `cast(lpad(cast(priority as abap.char(3)),3,'0')as abap.numc(3))` |  |  |
| `PriorityCodeName` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |
| `_PriorityCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Priority for Enterprise Projects - Text'

@AbapCatalog: { 
      sqlViewName: 'IENPRPRIORCODET',
      compiler.compareFilter: true,
      preserveKey: true
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
     representativeKey: 'PriorityCode',
     dataCategory: #TEXT,
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ],    
     usageType: {
        serviceQuality:  #A,
        dataClass:       #CUSTOMIZING,
        sizeCategory:    #S
    }
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_EntProjectPriorityCodeText
  as select from dpr_priority_t
  association to parent I_EntProjectPriorityCode as _PriorityCode
    on $projection.PriorityCode = _PriorityCode.PriorityCode
  association [0..1] to I_Language as _Language   
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language                as Language,
      @ObjectModel.foreignKey.association: '_PriorityCode'
      @ObjectModel.text.element: ['PriorityCodeName']
  key cast(lpad(cast(priority as abap.char(3)),3,'0')as abap.numc(3)) as PriorityCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      text                    as PriorityCodeName,
      _PriorityCode,
      _Language
}
```
