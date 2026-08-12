---
name: I_CONTROLRECIPEDESTTYPETEXT
description: "Controlrecipedesttypetext"
app_component: PP-VDM-2CL
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
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_CONTROLRECIPEDESTTYPETEXT

**Controlrecipedesttypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControlRecipeDestinationType` | ✓ | |  | `cast( substring(txt.domvalue_l, 1, 1) as comty preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `ControlRecipeDestTypeName` |  | |  | `cast(txt.ddtext as destinationtypename preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_DestinationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_DestinationType` | `I_ControlRecipeDestinationType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCTRLRECDETYPT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ControlRecipeDestinationType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Control Recipe Destination Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_ControlRecipeDestTypeText
  as select from dd07t as txt
  association [0..1] to I_Language                     as _Language        on $projection.Language = _Language.Language
  association [1..1] to I_ControlRecipeDestinationType as _DestinationType on $projection.ControlRecipeDestinationType = _DestinationType.ControlRecipeDestinationType
{
      @ObjectModel.foreignKey.association: '_DestinationType'
      @ObjectModel.text.element: ['ControlRecipeDestTypeName']
  key cast( substring(txt.domvalue_l, 1, 1) as comty preserving type) as ControlRecipeDestinationType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                   as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.ddtext as destinationtypename preserving type)         as ControlRecipeDestTypeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      txt.domvalue_l                                                  as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _DestinationType,
      _Language
}
  where txt.domname = 'COMTY' and
        txt.as4local = 'A'    and 
        txt.as4vers  = '0000';
```
