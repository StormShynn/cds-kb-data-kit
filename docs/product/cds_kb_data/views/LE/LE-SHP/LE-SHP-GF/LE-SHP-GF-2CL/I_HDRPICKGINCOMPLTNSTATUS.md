---
name: I_HDRPICKGINCOMPLTNSTATUS
description: "Hdrpickgincompltnstatus"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - status
  - header-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_HDRPICKGINCOMPLTNSTATUS

**Hdrpickgincompltnstatus**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HeaderPickgIncompletionStatus` | ✓ | |  | `cast( left(dd07l.domvalue_l, 1 ) as uvpik_uk preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_HdrPickgIncompltnStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'HeaderPickgIncompletionStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'HeaderPickIncompletionStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@EndUserText.label: 'Header Picking Incompletion Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDHPIKINCPSTS'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Consumption.ranked: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_HdrPickgIncompltnStatus
  as select from dd07l
  association [0..*] to I_HdrPickgIncompltnStatusT as _Text on $projection.HeaderPickgIncompletionStatus = _Text.HeaderPickgIncompletionStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( left(dd07l.domvalue_l, 1 ) as uvpik_uk preserving type ) as HeaderPickgIncompletionStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                                     as DomainValue,

      _Text
}
where
      dd07l.domname  = 'STATV'
  and dd07l.as4local = 'A'
```
