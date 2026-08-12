---
name: I_SLCMGMTSTRATEGICIMPRTNCTEXT
description: "Slcmgmtstrategicimprtnctext"
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - text-view
  - text
  - component:SLC-SUP
  - lob:Other
---
# I_SLCMGMTSTRATEGICIMPRTNCTEXT

**Slcmgmtstrategicimprtnctext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCSupplierStrategicImportance` | ✓ | |  | `cast(substring( domvalue_l, 1, 1 ) as sstn_strategic_importance preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SLCTranslationStatusName` |  | |  | `cast(ddtext as /srmsmc/status_descr preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_SLCMgmtStrategicImportance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCMgmtStrategicImportance` | `I_SLCMgmtStrategicImportance` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Strategic Importance - Text'

@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{

  dataCategory: #TEXT,

  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },

  representativeKey: 'SLCSupplierStrategicImportance'
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
  sqlViewName: 'ISLCSIMPRTNCTXT',
  compiler.compareFilter: true
}
@Search.searchable: true

define view I_SLCMgmtStrategicImprtncText
  as select from dd07t
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association [1..1] to I_SLCMgmtStrategicImportance as _SLCMgmtStrategicImportance on $projection.SLCSupplierStrategicImportance = _SLCMgmtStrategicImportance.SLCSupplierStrategicImportance
{
  key  cast(substring( domvalue_l, 1, 1 )  as sstn_strategic_importance preserving type ) as SLCSupplierStrategicImportance,

       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  ddlanguage                                                                         as Language,

       @Search.defaultSearchElement: true
       @Semantics.text: true
       cast(ddtext as /srmsmc/status_descr preserving type )                              as SLCTranslationStatusName,

       _SLCMgmtStrategicImportance,
       _Language

}
where
      domname  = 'SSTN_STRATEGIC_IMPORTANCE'
  and as4local = 'A'
```
