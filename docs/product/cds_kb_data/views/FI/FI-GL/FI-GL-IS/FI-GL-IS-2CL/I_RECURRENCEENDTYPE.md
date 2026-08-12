---
name: I_RECURRENCEENDTYPE
description: "Recurrenceendtype"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_RECURRENCEENDTYPE

**Recurrenceendtype**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RecurrenceEndType` | ✓ | |  | `cast( substring( dd07l.domvalue_l, 1, 1 ) as fac_rjet_end_by_type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RecurrenceEndTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Recurrence End Type'
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IFIRECURENDTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'RecurrenceEndType'
@ObjectModel.sapObjectNodeType.name: 'RecurrenceEndType'
@ObjectModel.usageType.serviceQuality:#A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]                                     
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_RecurrenceEndType
  as select from dd07l
  association [0..*] to I_RecurrenceEndTypeText as _Text on $projection.RecurrenceEndType = _Text.RecurrenceEndType
{
      @ObjectModel.text.association: '_Text'
  key cast( substring( dd07l.domvalue_l, 1, 1 ) as fac_rjet_end_by_type ) as RecurrenceEndType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                    as DomainValue,
      @ObjectModel.association.type: #TO_COMPOSITION_CHILD
      _Text
}
where
      dd07l.domname  = 'FAC_RJET_END_BY_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
