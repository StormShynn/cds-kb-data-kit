---
name: I_CITSTATISTICALKEYFIGURE
description: "Citstatisticalkeyfigure"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - component:FI-LOC-CIT
  - lob:Finance
---
# I_CITSTATISTICALKEYFIGURE

**Citstatisticalkeyfigure**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITKeyFigureUUID` | ✓ | |  | `uuid` |  |  |
| `CompanyCode` |  | |  | `companycode` |  |  |
| `CITStatisticalKeyFigure` | ✓ | |  | `keyfigure` |  |  |
| `CITStatisticalKeyFigureType` | ✓ | |  | `keyfiguretype` |  |  |
| `UnitOfMeasure` |  | |  | `unitofmeasure` |  |  |
| `Currency` |  | |  | `currency` |  |  |
| `CreatedByUserName` |  | |  | `cast(created_by as cruser preserving type)` |  |  |
| `CreationDateTime` |  | |  | `cast(created_at as creation_date_time preserving type)` |  |  |
| `LastChangedByUserName` |  | |  | `cast(changed_by as last_changed_by_user preserving type)` |  |  |
| `ChangedDateTime` |  | |  | `cast(changed_at as last_changed_date_time preserving type)` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CITStatisticalKeyFigure` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'CIT Statistical Key Figure'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
                                     
define view entity I_CITStatisticalKeyFigure 
  as select from ficitd_keyfigr
  
  association [1..1] to E_CITStatisticalKeyFigure as _Extension //do not expose this association in the projection list of the view
    on $projection.CITKeyFigureUUID = _Extension.CITKeyFigureUUID
    
{
  key uuid            as CITKeyFigureUUID,
      companycode     as CompanyCode,
      keyfigure       as CITStatisticalKeyFigure,
      keyfiguretype   as CITStatisticalKeyFigureType,
      unitofmeasure   as UnitOfMeasure,
      currency        as Currency,
      @Semantics.user.createdBy: true
      cast(created_by as cruser preserving type)                 as CreatedByUserName,
      @Semantics.systemDateTime.createdAt: true
      cast(created_at as creation_date_time preserving type)     as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      cast(changed_by as last_changed_by_user preserving type)   as LastChangedByUserName,
      @Semantics.systemDateTime.lastChangedAt: true
      cast(changed_at as last_changed_date_time preserving type) as ChangedDateTime
}
```
