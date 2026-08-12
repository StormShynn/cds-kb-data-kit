---
name: I_PRCGPROCEDITMPRNTTYPETEXT
description: "Prcgproceditmprnttypetext"
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
# I_PRCGPROCEDITMPRNTTYPETEXT

**Prcgproceditmprnttypetext**

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
| `PricingProcedureItemPrintType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as drukz )` |  |  |
| `PrcgProcedItemPrintTypeName` |  | |  | `cast ( ddtext as val_text )` |  |  |
| `_PrcgProcedItemPrntType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrcgProcedItemPrntType` | `I_PrcgProcedItemPrntType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGPIPRNTTYPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Print Type for Pricing Procedure Item - Text'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'PricingProcedureItemPrintType'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@Metadata.ignorePropagatedAnnotations:true

define view I_PrcgProcedItmPrntTypeText
  as select from dd07t
  association [0..1] to I_PrcgProcedItemPrntType as _PrcgProcedItemPrntType on $projection.PricingProcedureItemPrintType = _PrcgProcedItemPrntType.PricingProcedureItemPrintType
  association [0..1] to I_Language                    as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key cast( ddlanguage as spras )                     as Language,
      @ObjectModel.foreignKey.association: '_PrcgProcedItemPrntType'
  key cast ( substring( domvalue_l, 1, 1 ) as drukz ) as PricingProcedureItemPrintType,
      @Semantics.text: true
      cast ( ddtext as val_text )                     as PrcgProcedItemPrintTypeName,
      _PrcgProcedItemPrntType,
      _Language
}
where
      domname  = 'DRUKZ'
  and as4local = 'A'
```
