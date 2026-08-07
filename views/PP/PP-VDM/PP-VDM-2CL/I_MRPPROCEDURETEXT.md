---
name: I_MRPPROCEDURETEXT
description: Mrpproceduretext
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
# I_MRPPROCEDURETEXT

**Mrpproceduretext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPProcedure` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 1) as disvf preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `MRPProcedureName` |  | |  | `cast(t.ddtext as mrpprocedurename preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_MRPProcedure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPProcedure` | `I_MRPProcedure` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMRPPROCEDTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'MRPProcedure'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Procedure - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_MRPProcedureText
  as select from dd07t as t
  association [1..1] to I_MRPProcedure as _MRPProcedure on $projection.MRPProcedure = _MRPProcedure.MRPProcedure 
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_MRPProcedure'
      @ObjectModel.text.element: ['MRPProcedureName']
  key cast(substring(t.domvalue_l, 1, 1) as disvf preserving type) as MRPProcedure,
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                  as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.ddtext as mrpprocedurename preserving type)           as MRPProcedureName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                 as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _MRPProcedure,
      _Language
}
  where t.domname = 'DISVF'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
