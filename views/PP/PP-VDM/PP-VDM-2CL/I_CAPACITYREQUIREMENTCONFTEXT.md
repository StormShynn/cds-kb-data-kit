---
name: I_CAPACITYREQUIREMENTCONFTEXT
description: Capacityrequirementconftext
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
# I_CAPACITYREQUIREMENTCONFTEXT

**Capacityrequirementconftext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityRqmtConfirmation` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as cy_bstkz preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `CapacityRqmtConfirmationName` |  | |  | `cast(txt.ddtext as pph_bstkz_txt preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_CapacityRequirementConf` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CapacityRequirementConf` | `I_CapacityRequirementConf` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPRQMTCONFTX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'CapacityRqmtConfirmation'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Capacity Requirement Confirmation - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CapacityRequirementConfText
  as select from dd07t as txt
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [1..1] to I_CapacityRequirementConf as _CapacityRequirementConf on $projection.CapacityRqmtConfirmation = _CapacityRequirementConf.CapacityRqmtConfirmation 
{
      @ObjectModel.foreignKey.association: '_CapacityRequirementConf'
      @ObjectModel.text.element: ['CapacityRqmtConfirmationName']
  key cast(substring(txt.domvalue_l, 1, 1) as cy_bstkz preserving type) as CapacityRqmtConfirmation,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                     as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.ddtext as pph_bstkz_txt preserving type)                 as CapacityRqmtConfirmationName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      txt.domvalue_l                                                    as DomainValue,

      // Associations
      _Language,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _CapacityRequirementConf
}
  where domname = 'CY_BSTKZ' and
        as4local = 'A'       and
        as4vers  = '0000';
```
