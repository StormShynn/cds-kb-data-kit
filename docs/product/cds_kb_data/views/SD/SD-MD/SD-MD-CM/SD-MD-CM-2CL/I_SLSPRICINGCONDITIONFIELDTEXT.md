---
name: I_SLSPRICINGCONDITIONFIELDTEXT
description: "SLSPricing ConditionFIELDTEXT"
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
  - pricing
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_SLSPRICINGCONDITIONFIELDTEXT

**SLSPricing ConditionFIELDTEXT**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ConditionUsage` | ✓ | |  | `cast ( 'A' as kvewe )` |  |  |
| `ConditionApplication` | ✓ | |  | `cast ( 'V' as kappl )` |  |  |
| `PricingConditionField` | ✓ | |  | `fieldname` |  |  |
| `DatabaseTable` | ✓ | |  | `tabname` |  |  |
| `PricingConditionFieldText` |  | |  | `scrtext_l` |  |  |
| `_SalesPricingConditionField` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesPricingConditionField` | `I_SalesPricingConditionField` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNFIELDT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@EndUserText.label: 'Sales Pricing Field Catalog  - Text'
define view I_SlsPricingConditionFieldText
  as select from dd03l
    inner join   dd04t on  (
        dd03l.tabname                     = 'KOMP'
        or dd03l.tabname                  = 'KOMK'
        or dd03l.tabname                  = 'KOMG'
      )
                       and dd03l.rollname = dd04t.rollname
  association [1..1] to I_SalesPricingConditionField as _SalesPricingConditionField on  $projection.ConditionUsage        = _SalesPricingConditionField.ConditionUsage
                                                                                    and $projection.ConditionApplication  = _SalesPricingConditionField.ConditionApplication
                                                                                    and $projection.PricingConditionField = _SalesPricingConditionField.PricingConditionField

{
      @Semantics.language: true
  key dd04t.ddlanguage      as Language,
  key cast ( 'A' as kvewe ) as ConditionUsage,
  key cast ( 'V' as kappl ) as ConditionApplication,
  key dd03l.fieldname       as PricingConditionField,
  key dd03l.tabname         as DatabaseTable,
      @Semantics.text: true
      dd04t.scrtext_l       as PricingConditionFieldText,
      _SalesPricingConditionField

}
```
