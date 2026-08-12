---
name: I_MATLCOMPDSCONTNTYPETEXT
description: "Matlcompdscontntypetext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_MATLCOMPDSCONTNTYPETEXT

**Matlcompdscontntypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MatlCompDiscontinuationType` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 1) as auslf preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `MatlCompDscontnTypeName` |  | |  | `cast(t.ddtext as matlcompdscontntypename preserving type)` |  |  |
| `_MatlCompDiscontinuationType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MatlCompDiscontinuationType` | `I_MatlCompDiscontinuationType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IMATDISCTTYPETXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'MatlCompDiscontinuationType'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'MaterialDiscontinuationTypeTxt'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Material Discontinuation Type - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_MatlCompDscontnTypeText 
  as select from dd07t as t

  association [1..1] to I_MatlCompDiscontinuationType as _MatlCompDiscontinuationType on $projection.MatlCompDiscontinuationType = _MatlCompDiscontinuationType.MatlCompDiscontinuationType  
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_MatlCompDiscontinuationType'  
      @ObjectModel.text.element: ['MatlCompDscontnTypeName']
  key cast(substring(t.domvalue_l, 1, 1) as auslf preserving type) as MatlCompDiscontinuationType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast(t.ddlanguage as spras preserving type)                  as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                 as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.ddtext as matlcompdscontntypename preserving type)    as MatlCompDscontnTypeName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _MatlCompDiscontinuationType,
      _Language
}
where t.domname  = 'AUSLF' 
  and t.as4local = 'A'
  and t.as4vers  = '0000';
```
