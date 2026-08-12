---
name: I_SALESPLANPURPOSE
description: "Salesplanpurpose"
app_component: SD-ANA-SP-2CL
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
  - SD-ANA
  - SD-ANA-SP
  - interface-view
  - component:SD-ANA-SP-2CL
  - lob:Sales & Distribution
---
# I_SALESPLANPURPOSE

**Salesplanpurpose**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
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
| `SalesPlanPurpose` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as sales_plan_purpose )` |  |  |
| `SalesPlanType` |  | |  | `cast (case when domvalue_l = '0' or domvalue_l = '1' then '' else 'X' end as sales_plan_type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesPlanPurposeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Sales Plan Purpose'
@ObjectModel.representativeKey: 'SalesPlanPurpose'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSPLANPRPS'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #VALUE_HELP_PROVIDER,
                                      #ANALYTICAL_DIMENSION,
                                      #SEARCHABLE_ENTITY]
define view I_SalesPlanPurpose
  as select from dd07l
  association [0..*] to I_SalesPlanPurposeText as _Text on $projection.SalesPlanPurpose = _Text.SalesPlanPurpose
{
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as sales_plan_purpose ) as SalesPlanPurpose,

      @UI.hidden: true
      cast (case when domvalue_l = '0' or domvalue_l = '1'
         then '' 
         else 'X'
       end as sales_plan_type ) as SalesPlanType,
       
      _Text
}
where
      domname  = 'SALES_PLAN_PURPOSE'
  and as4local = 'A'
```
