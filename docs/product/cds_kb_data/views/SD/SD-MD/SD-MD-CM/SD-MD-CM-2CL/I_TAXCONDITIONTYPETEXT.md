---
name: I_TAXCONDITIONTYPETEXT
description: "Taxconditiontypetext"
app_component: SD-MD-CM-2CL
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
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing-condition
  - tax
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_TAXCONDITIONTYPETEXT

**Taxconditiontypetext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
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
| `Language` | ✓ | |  |  |  |  |
| `ConditionApplication` | ✓ | |  |  |  |  |
| `ConditionType` | ✓ | |  |  |  |  |
| `ConditionTypeName` |  | |  |  |  |  |
| `_TaxConditionType` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaxConditionType` | `I_TaxConditionType` | [1..1] |
| `_ConditionApplication` | `I_ConditionApplication` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTAXTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ConditionType'
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Condition Type for Tax in Sales and Purchase - Text'

define view I_TaxConditionTypeText
  as select from I_PricingConditionTypeText
  association [1..1] to I_TaxConditionType as _TaxConditionType on  $projection.ConditionApplication = _TaxConditionType.ConditionApplication
                                                                and $projection.ConditionType        = _TaxConditionType.ConditionType
  association [0..1] to I_ConditionApplication as _ConditionApplication on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
{
      @Semantics.language: true
  key Language,
  @ObjectModel.foreignKey.association: '_ConditionApplication'
  key ConditionApplication,
  key ConditionType,
      @Semantics.text: true
      ConditionTypeName,
      _ConditionApplication,
      _TaxConditionType
}
where
  (
       _TaxConditionType.ConditionApplication = 'M'
    or _TaxConditionType.ConditionApplication = 'V'
  )
  and(
       _TaxConditionType. ConditionClass      = 'D'
    or _TaxConditionType.ConditionClass       = 'W'
    or _TaxConditionType.ConditionClass       = 'G'
  )
```
