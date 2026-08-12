---
name: I_DIGITALPAYMENTTYPETEXT
description: "Digitalpaymenttypetext"
app_component: FIN-FSCM-DP-DP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DP
  - interface-view
  - text-view
  - payment
  - text
  - component:FIN-FSCM-DP-DP-2CL
  - lob:Other
---
# I_DIGITALPAYMENTTYPETEXT

**Digitalpaymenttypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DP-DP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DigitalPaymentType` | ✓ | |  | `cast( dd07t.domvalue_l as dp_payment_type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `DigitalPaymentTypeName` |  | |  | `cast( dd07t.ddtext as dp_payment_type_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_DigitalPaymentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDPPYTT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Digital Payment Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'DigitalPaymentType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_DigitalPaymentTypeText
  as select from dd07t 
  association to parent I_DigitalPaymentTypeValueHelp as _DigitalPaymentType
    on $projection.DigitalPaymentType = _DigitalPaymentType.DigitalPaymentType
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_DigitalPaymentType'
      @ObjectModel.text.element: ['DigitalPaymentTypeName']
  key cast( dd07t.domvalue_l as dp_payment_type ) as DigitalPaymentType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as dp_payment_type_text preserving type ) as DigitalPaymentTypeName,
      _DigitalPaymentType,
      _Language
} 
where dd07t.domname  = 'DP_PAYMENT_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
