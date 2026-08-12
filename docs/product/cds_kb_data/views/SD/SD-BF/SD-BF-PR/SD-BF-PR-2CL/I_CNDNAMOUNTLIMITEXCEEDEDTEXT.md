---
name: I_CNDNAMOUNTLIMITEXCEEDEDTEXT
description: "Cndnamountlimitexceededtext"
app_component: SD-BF-PR-2CL
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
  - SD-BF
  - SD-BF-PR
  - interface-view
  - text-view
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CNDNAMOUNTLIMITEXCEEDEDTEXT

**Cndnamountlimitexceededtext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
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
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `ConditionAmountLimitExceeded` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kmxwr )` |  |  |
| `CndnAmountLimitExceededName` |  | |  | `cast ( ddtext as price_element_amtlmtexed_descr )` |  |  |
| `_ConditionAmountLimitExceeded` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionAmountLimitExceeded` | `I_ConditionAmountLimitExceeded` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNAMTLMTEXCDT'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Amount Limit Exceeded - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionAmountLimitExceeded'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]

define view I_CndnAmountLimitExceededText
  as select from dd07t
  association [0..1] to I_ConditionAmountLimitExceeded as _ConditionAmountLimitExceeded on $projection.ConditionAmountLimitExceeded = _ConditionAmountLimitExceeded.ConditionAmountLimitExceeded
  association [0..1] to I_Language                     as _Language                     on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                       as Language,
      @ObjectModel.foreignKey.association: '_ConditionAmountLimitExceeded'
  key cast ( substring( domvalue_l, 1, 1 ) as kmxwr )   as ConditionAmountLimitExceeded,
      @Semantics.text:true
      cast ( ddtext as price_element_amtlmtexed_descr ) as CndnAmountLimitExceededName,
      _ConditionAmountLimitExceeded,
      _Language
      
}
where
      domname  = 'KMXWR'
  and as4local = 'A'
```
