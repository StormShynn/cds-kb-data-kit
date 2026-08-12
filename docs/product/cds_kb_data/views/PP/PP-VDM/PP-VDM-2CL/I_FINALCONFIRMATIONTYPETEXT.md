---
name: I_FINALCONFIRMATIONTYPETEXT
description: "Finalconfirmationtypetext"
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
# I_FINALCONFIRMATIONTYPETEXT

**Finalconfirmationtypetext**

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
| `FinalConfirmationType` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as pph_aueru preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `FinalConfirmationTypeName` |  | |  | `cast(txt.ddtext as pph_aueru_txt preserving type)` |  |  |
| `_FinalConfirmationType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinalConfirmationType` | `I_FinalConfirmationType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IFINCONFTYPETEXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'FinalConfirmationType'
@ObjectModel.sapObjectNodeType.name: 'OrderFinalConfirmationTypeText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Final Confirmation Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_FinalConfirmationTypeText
  as select from dd07t as txt
  association [1..1] to I_FinalConfirmationType as _FinalConfirmationType on $projection.FinalConfirmationType = _FinalConfirmationType.FinalConfirmationType
  association [0..1] to I_Language              as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_FinalConfirmationType'
      @ObjectModel.text.element: ['FinalConfirmationTypeName']
  key cast(substring(txt.domvalue_l, 1, 1) as pph_aueru preserving type) as FinalConfirmationType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                      as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      txt.domvalue_l                                                     as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.ddtext as pph_aueru_txt preserving type)                  as FinalConfirmationTypeName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
      _FinalConfirmationType,
      _Language
}
  where txt.domname = 'AUERU_VS'
    and txt.as4local = 'A'
    and txt.as4vers  = '0000';
```
