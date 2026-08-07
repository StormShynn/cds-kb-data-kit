---
name: I_CAPACITYREQUIREMENTORIGNTEXT
description: Capacityrequirementorigntext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_CAPACITYREQUIREMENTORIGNTEXT

**Capacityrequirementorigntext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityRequirementOrigin` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as capacityrequirementorigin preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `CapacityRequirementOriginName` |  | |  | `cast(txt.ddtext as capacityrequirementoriginname preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_CapacityRequirementOrigin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CapacityRequirementOrigin` | `I_CapacityRequirementOrigin` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPRQMTORTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'CapacityRequirementOrigin'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Capacity Requirement Origin - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CapacityRequirementOrignText
  as select from dd07t as txt
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [1..1] to I_CapacityRequirementOrigin as _CapacityRequirementOrigin on $projection.CapacityRequirementOrigin = _CapacityRequirementOrigin.CapacityRequirementOrigin 
{
      @ObjectModel.foreignKey.association: '_CapacityRequirementOrigin'
      @ObjectModel.text.element: ['CapacityRequirementOriginName']
  key cast(substring(txt.domvalue_l, 1, 1) as capacityrequirementorigin preserving type) as CapacityRequirementOrigin,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type) as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.ddtext as capacityrequirementoriginname preserving type) as CapacityRequirementOriginName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      txt.domvalue_l as DomainValue,

      // Associations
      _Language,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
      _CapacityRequirementOrigin
}
  where domname = 'TYPKZ' and
        as4local = 'A'    and
        as4vers  = '0000';
```
