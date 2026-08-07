---
name: I_SALESPLANPURPOSE
description: Salesplanpurpose
app_component: SD-ANA-SP-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesPlanPurpose` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as sales_plan_purpose )` |
| `SalesPlanType` |  | |  | `cast (case when domvalue_l = '0' or domvalue_l = '1' then '' else 'X' end as sales_plan_type )` |
| `_Text` | | ✓ | | |

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
