---
name: I_PLANNEDORDERTYPETEXT
description: "Planned OrderTYPETEXT"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - planned-order
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERTYPETEXT

**Planned OrderTYPETEXT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrderType` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 4) as paart preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `PlannedOrderTypeName` |  | |  | `cast(txt.ddtext as plannedordertypename preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_Type` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Type` | `I_PlannedOrderType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPPPLNDORDTYPTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'PlannedOrderType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Planned Order Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PlannedOrderTypeText
  as select from dd07t as txt
  association [0..1] to I_Language         as _Language on $projection.Language = _Language.Language
  association [1..1] to I_PlannedOrderType as _Type     on $projection.PlannedOrderType = _Type.PlannedOrderType
{
      @ObjectModel.foreignKey.association: '_Type'
      @ObjectModel.text.element: ['PlannedOrderTypeName']
  key cast(substring(txt.domvalue_l, 1, 4) as paart preserving type) as PlannedOrderType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                  as Language,
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      cast(txt.ddtext as plannedordertypename preserving type)       as PlannedOrderTypeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      txt.domvalue_l                                                 as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Type,
      _Language
}
  where txt.domname = 'PAART'
    and txt.as4local = 'A'
    and txt.as4vers  = '0000';
```
