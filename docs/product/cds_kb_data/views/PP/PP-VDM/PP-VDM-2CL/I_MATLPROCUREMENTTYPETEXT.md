---
name: I_MATLPROCUREMENTTYPETEXT
description: "Matlprocurementtypetext"
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
# I_MATLPROCUREMENTTYPETEXT

**Matlprocurementtypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialProcurementType` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as pph_sobes preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `MaterialProcurementTypeName` |  | |  | `cast(txt.ddtext as materialprocurementtypename preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_Type` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Type` | `I_MatlProcurementType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IMATLPROCMTYPTXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MaterialProcurementType'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'MaterialProcurementTypeText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Material Procurement Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MatlProcurementTypeText
  as select from dd07t as txt
  association [0..1] to I_Language            as _Language on $projection.Language = _Language.Language
  association [1..1] to I_MatlProcurementType as _Type     on $projection.MaterialProcurementType = _Type.MaterialProcurementType
{
      @ObjectModel.foreignKey.association: '_Type'
      @ObjectModel.text.element: ['MaterialProcurementTypeName']
  key cast(substring(txt.domvalue_l, 1, 1) as pph_sobes preserving type) as MaterialProcurementType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                      as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.ddtext as materialprocurementtypename preserving type)    as MaterialProcurementTypeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      txt.domvalue_l                                                     as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Type,
      _Language
}
where domname  = 'SOBES'
  and as4local = 'A'
  and as4vers  = '0000';
```
